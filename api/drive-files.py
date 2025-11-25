import os
import json
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from typing import List, Dict, Any

# --- Rutas Absolutas para Vercel ---
# VERCEL_BUILD_DIR es la raíz del proyecto en el entorno de Vercel
# __file__ es la ruta al script actual (api/drive-files.py)
# Esto nos permite construir rutas absolutas que funcionan tanto en local como en Vercel.
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR) # Sube un nivel desde /api a la raíz

# Cargar .env desde la raíz del proyecto
dotenv_path = os.path.join(PROJECT_ROOT, '.env')
load_dotenv(dotenv_path=dotenv_path)

print(f"Buscando .env en: {dotenv_path}")
if os.path.exists(dotenv_path):
    print(".env encontrado.")
else:
    print(".env NO encontrado.")


SCOPES = ['https://www.googleapis.com/auth/drive.readonly']
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_drive_files_logic() -> List[Dict[str, Any]]:
    print("--- DEBUGGING VERCEL API ---")
    FOLDER_ID = os.getenv('FOLDER_ID')
    # La ruta en .env es relativa, la hacemos absoluta aquí
    relative_credentials_path = os.getenv('GOOGLE_APPLICATION_CREDENTIALS')
    
    print(f"FOLDER_ID from env: {FOLDER_ID}")
    print(f"Ruta relativa de credenciales desde env: {relative_credentials_path}")

    if not relative_credentials_path or not FOLDER_ID:
        raise ValueError("Faltan variables de entorno: GOOGLE_APPLICATION_CREDENTIALS or FOLDER_ID")

    # Construir la ruta absoluta al archivo de credenciales
    credentials_path = os.path.join(PROJECT_ROOT, relative_credentials_path)
    print(f"Intentando abrir credenciales en ruta absoluta: {credentials_path}")

    if not os.path.exists(credentials_path):
        cwd = os.getcwd()
        print(f"FALLO: El archivo de credenciales no se encontró. CWD: {cwd}")
        print(f"Contenido de CWD: {os.listdir(cwd)}")
        # Comprobar si la carpeta api existe desde CWD
        if os.path.exists('api'):
             print(f"Contenido de 'api/': {os.listdir('api')}")
        raise FileNotFoundError(f"El archivo de credenciales no se encontró en la ruta: {credentials_path}")

    print("Archivo de credenciales encontrado. Procediendo...")
    creds = service_account.Credentials.from_service_account_file(credentials_path, scopes=SCOPES)
    service = build('drive', 'v3', credentials=creds)
    
    results = service.files().list(
        q=f"'{FOLDER_ID}' in parents and trashed=false",
        pageSize=200,
        fields="nextPageToken, files(id, name, webViewLink, thumbnailLink, description)"
    ).execute()
    
    all_files = results.get('files', [])
    
    preview_images = {}
    report_files = []
    preview_suffix = '_preview'

    for file in all_files:
        base_name, extension = os.path.splitext(file['name'])
        if base_name.endswith(preview_suffix):
            report_name = base_name[:-len(preview_suffix)]
            normalized_report_name = report_name.lower().strip()
            if file.get('thumbnailLink'):
                preview_images[normalized_report_name] = file['thumbnailLink']
        else:
            report_files.append(file)
    
    enriched_reports = []
    for report in report_files:
        report_base_name, _ = os.path.splitext(report['name'])
        normalized_report_base_name = report_base_name.lower().strip()
        if normalized_report_base_name in preview_images:
            report['customImageLink'] = preview_images[normalized_report_base_name]
        enriched_reports.append(report)
        
    print("--- ARCHIVOS OBTENIDOS CON ÉXITO ---")
    return enriched_reports

@app.get("/")
def get_drive_files_endpoint():
    try:
        files = get_drive_files_logic()
        return files
    except Exception as e:
        print(f"--- ERROR EN EL PUNTO FINAL DE LA API: {str(e)} ---")
        return JSONResponse(
            status_code=500,
            content={"error": "Ocurrió un error en el servidor.", "details": str(e)}
        )

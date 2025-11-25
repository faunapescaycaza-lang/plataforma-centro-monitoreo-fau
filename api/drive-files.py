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

# Cargar variables de entorno (principalmente para desarrollo local)
load_dotenv()

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
    print("--- INICIANDO LOGICA DE LA API ---")
    FOLDER_ID = os.getenv('FOLDER_ID')
    # Esta variable ahora contendrá el JSON completo, no una ruta
    google_creds_json_str = os.getenv('GOOGLE_CREDENTIALS_JSON')

    print(f"FOLDER_ID from env: {FOLDER_ID}")
    print(f"GOOGLE_CREDENTIALS_JSON está cargado: {bool(google_creds_json_str)}")

    if not google_creds_json_str or not FOLDER_ID:
        raise ValueError("Faltan variables de entorno: GOOGLE_CREDENTIALS_JSON o FOLDER_ID")

    try:
        # Convertir la cadena de texto JSON de la variable de entorno a un diccionario de Python
        creds_info = json.loads(google_creds_json_str)
    except json.JSONDecodeError:
        raise ValueError("La variable de entorno GOOGLE_CREDENTIALS_JSON no es un JSON válido.")

    # Crear credenciales directamente desde el diccionario
    creds = service_account.Credentials.from_service_account_info(creds_info, scopes=SCOPES)
    service = build('drive', 'v3', credentials=creds)
    
    print("Autenticación con Google exitosa. Obteniendo archivos...")
    
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
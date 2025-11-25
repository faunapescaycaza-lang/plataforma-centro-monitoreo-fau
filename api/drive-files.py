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
    print("--- DEBUGGING VERCEL API ---")
    FOLDER_ID = os.getenv('FOLDER_ID')
    credentials_path = os.getenv('GOOGLE_APPLICATION_CREDENTIALS')

    print(f"FOLDER_ID from env: {FOLDER_ID}")
    print(f"GOOGLE_APPLICATION_CREDENTIALS from env: {credentials_path}")

    if not credentials_path or not FOLDER_ID:
        raise ValueError("Faltan variables de entorno requeridas: GOOGLE_APPLICATION_CREDENTIALS or FOLDER_ID")

    if not os.path.exists(credentials_path):
        # Log the current working directory and its contents to see why the file is not found
        cwd = os.getcwd()
        dir_contents = os.listdir(cwd)
        api_dir_contents = os.listdir('api') if os.path.exists('api') else 'api directory not found'
        print(f"Current Working Directory: {cwd}")
        print(f"Directory Contents: {dir_contents}")
        print(f"API Directory Contents: {api_dir_contents}")
        raise FileNotFoundError(f"El archivo de credenciales no se encontró en la ruta: {credentials_path}")

    creds = service_account.Credentials.from_service_account_file(credentials_path, scopes=SCOPES)
    service = build('drive', 'v3', credentials=creds)
    
    results = service.files().list(
        q=f"'{FOLDER_ID}' in parents and trashed=false",
        pageSize=200,
        fields="nextPageToken, files(id, name, webViewLink, thumbnailLink, description)"
    ).execute()
    
    all_files = results.get('files', [])
    
    # ... (el resto de la lógica sigue igual)
    
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
        
    print("--- SUCCESSFULLY FETCHED FILES ---")
    return enriched_reports

@app.get("/")
def get_drive_files_endpoint():
    try:
        files = get_drive_files_logic()
        return files
    except Exception as e:
        print(f"--- ERROR IN API ENDPOINT: {str(e)} ---")
        # Devolver un JSON válido incluso en caso de error
        return JSONResponse(
            status_code=500,
            content={"error": "A server error occurred.", "details": str(e)}
        )
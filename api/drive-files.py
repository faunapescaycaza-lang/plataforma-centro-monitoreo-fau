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

# Cargar las variables de entorno desde el archivo .env
load_dotenv()

# Configuration
SCOPES = ['https://www.googleapis.com/auth/drive.readonly']

# Define the FastAPI app instance
app = FastAPI()

# Add CORS middleware to allow all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_drive_files_logic() -> List[Dict[str, Any]]:
    """
    Connects to the Google Drive API and fetches the file list.
    """
    FOLDER_ID = os.getenv('FOLDER_ID')
    # GOOGLE_APPLICATION_CREDENTIALS es el estándar que la librería de Google busca
    credentials_path = os.getenv('GOOGLE_APPLICATION_CREDENTIALS')

    if not credentials_path or not FOLDER_ID:
        raise ValueError("Faltan variables de entorno requeridas: GOOGLE_APPLICATION_CREDENTIALS or FOLDER_ID")

    if not os.path.exists(credentials_path):
        raise FileNotFoundError(f"El archivo de credenciales no se encontró en la ruta: {credentials_path}")

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
        
    return enriched_reports

@app.get("/api/drive-files")
def get_drive_files_endpoint():
    """
    FastAPI endpoint to get the list of files from Google Drive.
    """
    try:
        files = get_drive_files_logic()
        return files
    except (ValueError, FileNotFoundError) as e:
        return JSONResponse(status_code=400, content={"error": str(e)})
    except HttpError as e:
        try:
            error_details = json.loads(e.content)
            return JSONResponse(status_code=e.resp.status, content=error_details)
        except (json.JSONDecodeError, AttributeError):
            return JSONResponse(status_code=500, content={"error": f"An API error occurred: {e}"})
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": f"An unexpected error occurred: {e}"})

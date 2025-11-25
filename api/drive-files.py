import os
import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from typing import List, Dict, Any

# Configuration
SCOPES = ['https://www.googleapis.com/auth/drive.readonly']

# Define the FastAPI app instance
# Vercel will automatically find this 'app' variable
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
    This is the core logic, separated from the web framework.
    """
    FOLDER_ID = os.getenv('FOLDER_ID')
    GOOGLE_CREDENTIALS_JSON = os.getenv('GOOGLE_CREDENTIALS_JSON')

    if not GOOGLE_CREDENTIALS_JSON or not FOLDER_ID:
        raise ValueError("Missing required environment variables: GOOGLE_CREDENTIALS_JSON or FOLDER_ID")

    creds_info = json.loads(GOOGLE_CREDENTIALS_JSON)
    creds = service_account.Credentials.from_service_account_info(creds_info, scopes=SCOPES)

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

    # First, separate files and map the preview images
    for file in all_files:
        base_name, extension = os.path.splitext(file['name'])
        if base_name.endswith(preview_suffix):
            report_name = base_name[:-len(preview_suffix)]
            normalized_report_name = report_name.lower().strip()
            if file.get('thumbnailLink'):
                preview_images[normalized_report_name] = file['thumbnailLink']
        else:
            report_files.append(file)
    
    # Second, enrich the report files with their custom preview
    enriched_reports = []
    for report in report_files:
        report_base_name, _ = os.path.splitext(report['name'])
        normalized_report_base_name = report_base_name.lower().strip()
        if normalized_report_base_name in preview_images:
            report['customImageLink'] = preview_images[normalized_report_base_name]
        enriched_reports.append(report)
        
    return enriched_reports

# Define the API endpoint
# Vercel maps /api/drive-files to this file, so the internal route is '/'
@app.get("/")
def get_drive_files_endpoint():
    """
    FastAPI endpoint to get the list of files from Google Drive.
    """
    try:
        files = get_drive_files_logic()
        return files
    except ValueError as e:
        return {"error": str(e)}, 500
    except HttpError as e:
        return {"error": f"An API error occurred: {e}"}, 500
    except Exception as e:
        return {"error": f"An unexpected error occurred: {e}"}, 500

import os
import json
from flask import Flask, jsonify
from flask_cors import CORS
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

# Configuration
SCOPES = ['https://www.googleapis.com/auth/drive.readonly']
SERVICE_ACCOUNT_FILE = 'google-credentials.json'
# The ID of the folder to read files from.
# Extracted from the URL: https://drive.google.com/drive/folders/YOUR_FOLDER_ID
FOLDER_ID = '1_oO8phdfGt8kdkKHVOoY9YI8mo5lmKCi'

app = Flask(__name__)
# Allow requests from any origin. For more security, you could restrict
# this to your Vercel app's domain.
CORS(app)

def get_drive_files():
    """
    Connects to the Google Drive API, fetches a list of files, identifies
    custom preview images based on a naming convention, enriches the report
    files with these images, and returns only the reports.
    This version is case-insensitive and whitespace-agnostic.
    """
    # --- Google Credentials Handling ---
    # In Vercel, credentials are in an env var. Locally, they're in a file.
    creds_json_str = os.getenv('GOOGLE_CREDENTIALS_JSON')

    if creds_json_str:
        # Running on Vercel or with an env var
        creds_info = json.loads(creds_json_str)
        creds = service_account.Credentials.from_service_account_info(creds_info, scopes=SCOPES)
    elif os.path.exists(SERVICE_ACCOUNT_FILE):
        # Running locally with a file
        creds = service_account.Credentials.from_service_account_file(
            SERVICE_ACCOUNT_FILE, scopes=SCOPES)
    else:
        # No credentials found
        raise FileNotFoundError("Google Drive credentials not found. Set GOOGLE_CREDENTIALS_JSON or provide 'google-credentials.json'.")

    try:
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
                # Normalize the key: lowercase and stripped of whitespace
                normalized_report_name = report_name.lower().strip()
                if file.get('thumbnailLink'):
                    preview_images[normalized_report_name] = file['thumbnailLink']
            else:
                report_files.append(file)
        
        # Second, enrich the report files with their custom preview
        for report in report_files:
            report_base_name, _ = os.path.splitext(report['name'])
            # Normalize the lookup name
            normalized_report_base_name = report_base_name.lower().strip()
            if normalized_report_base_name in preview_images:
                report['customImageLink'] = preview_images[normalized_report_base_name]
        
        return report_files

    except HttpError as error:
        print(f'An error occurred: {error}')
        raise

@app.route('/drive-files')
def list_drive_files():
    """API endpoint to get the list of files from Google Drive."""
    try:
        files = get_drive_files()
        return jsonify(files)
    except FileNotFoundError as e:
        return jsonify({"error": str(e)}), 500
    except HttpError as e:
        return jsonify({"error": f"An API error occurred: {e}"}), 500
    except Exception as e:
        return jsonify({"error": f"An unexpected error occurred: {e}"}), 500

if __name__ == '__main__':
    # Runs the Flask app on http://127.0.0.1:5000
    app.run(host='127.0.0.1', port=5000, debug=True)
import os
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
# Allow requests from your React frontend (adjust port if necessary)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

def get_drive_files():
    """
    Connects to the Google Drive API, fetches a list of files, identifies
    custom preview images based on a naming convention, enriches the report
    files with these images, and returns only the reports.
    This version is case-insensitive and whitespace-agnostic.
    """
    if not os.path.exists(SERVICE_ACCOUNT_FILE):
        raise FileNotFoundError(f"Service account file not found at: {SERVICE_ACCOUNT_FILE}")

    creds = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)

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

@app.route('/api/drive-files')
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
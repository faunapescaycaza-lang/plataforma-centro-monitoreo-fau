const { google } = require('googleapis');
const path = require('path');

// Vercel's handler signature
module.exports = async (request, response) => {
  // Allow CORS for all origins
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  try {
    const { GOOGLE_CREDENTIALS_JSON, FOLDER_ID } = process.env;

    if (!GOOGLE_CREDENTIALS_JSON || !FOLDER_ID) {
      throw new Error("Missing required environment variables: GOOGLE_CREDENTIALS_JSON or FOLDER_ID");
    }

    const creds = JSON.parse(GOOGLE_CREDENTIALS_JSON);

    // Create auth client
    const auth = new google.auth.JWT(
      creds.client_email,
      null,
      creds.private_key,
      ['https://www.googleapis.com/auth/drive.readonly']
    );

    const drive = google.drive({ version: 'v3', auth });

    // Fetch files from Google Drive
    const driveResponse = await drive.files.list({
      q: `'${FOLDER_ID}' in parents and trashed=false`,
      pageSize: 200,
      fields: "nextPageToken, files(id, name, webViewLink, thumbnailLink, description)"
    });

    const allFiles = driveResponse.data.files || [];

    const previewImages = {};
    const reportFiles = [];
    const previewSuffix = '_preview';

    // First, separate files and map the preview images
    for (const file of allFiles) {
      const { name } = file;
      const baseName = path.parse(name).name;
      
      if (baseName.endsWith(previewSuffix)) {
        const reportName = baseName.slice(0, -previewSuffix.length);
        const normalizedReportName = reportName.toLowerCase().trim();
        if (file.thumbnailLink) {
          previewImages[normalizedReportName] = file.thumbnailLink;
        }
      } else {
        reportFiles.push(file);
      }
    }

    // Second, enrich the report files with their custom preview
    const finalReports = reportFiles.map(report => {
      const reportBaseName = path.parse(report.name).name;
      const normalizedReportBaseName = reportBaseName.toLowerCase().trim();
      
      if (previewImages[normalizedReportBaseName]) {
        return {
          ...report,
          customImageLink: previewImages[normalizedReportBaseName],
        };
      }
      return report;
    });
    
    response.status(200).json(finalReports);

  } catch (error) {
    console.error('An error occurred:', error);
    response.status(500).json({ 
      error: 'An internal server error occurred.',
      details: error.message 
    });
  }
};

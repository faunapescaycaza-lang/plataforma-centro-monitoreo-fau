import React, { useState, useEffect } from 'react';
import './Reportes.css';

const Reportes = () => {
  const [driveFiles, setDriveFiles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/drive-files')
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => {
            throw new Error(err.error || 'Failed to fetch data');
          });
        }
        return response.json();
      })
      .then(data => {
        setDriveFiles(data);
      })
      .catch(error => {
        console.error("Error fetching Drive files:", error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <p>Cargando reportes...</p>;
    }

    if (error) {
      return <p className="error-message">Error: {error}</p>;
    }

    if (driveFiles.length === 0) {
      return <p>No se encontraron reportes.</p>;
    }

    return (
      <div className="report-list-container">
        {driveFiles.map(file => (
          <a
            key={file.id}
            href={file.webViewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="report-card"
          >
            <div className="report-details">
              <span className="report-name">{file.name}</span>
              {file.description && (
                <p className="report-description">{file.description}</p>
              )}
            </div>
            {/* Show preview box if either a custom image or a default thumbnail exists */}
            {(file.customImageLink || file.thumbnailLink) && (
              <div className="report-preview">
                <img src={file.customImageLink || file.thumbnailLink} alt={`Previsualización de ${file.name}`} />
              </div>
            )}
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="reportes-container">
      <h1>Reportes</h1>
      {renderContent()}
    </div>
  );
};

export default Reportes;

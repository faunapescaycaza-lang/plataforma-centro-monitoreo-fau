import React, { useState, useEffect } from 'react';
import './Reportes.css';

const Reportes = () => {
  const [reports, setReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch('/reports.json'); // Fetch from public/reports.json
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setReports(data);
      } catch (e) {
        setError("Error al cargar los reportes: " + e.message);
        console.error("Error fetching reports:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReports();
  }, []);

  if (isLoading) {
    return <div className="reportes-container">Cargando reportes...</div>;
  }

  if (error) {
    return <div className="reportes-container" style={{ color: 'red' }}>{error}</div>;
  }

  if (reports.length === 0) {
    return <div className="reportes-container">No se encontraron reportes.</div>;
  }

  return (
    <div className="reportes-container">
      <h1>Nuestros Reportes</h1>
      <div className="reportes-grid">
        {reports.map((report) => (
          <div key={report.id} className="report-card">
            <div className="report-images">
              {Array.isArray(report.imageUrls) && report.imageUrls.length > 0 ? (
                report.imageUrls.map((url, index) => (
                  <img key={index} src={url} alt={`${report.title} ${index + 1}`} className="report-image" />
                ))
              ) : (
                report.imageUrl && <img src={report.imageUrl} alt={report.title} className="report-image" />
              )}
            </div>
            <div className="report-content">
              <h2>{report.title}</h2>
              <p>{report.description}</p>
              <button className="read-more-button">Leer más</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reportes;

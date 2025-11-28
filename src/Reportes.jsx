import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="report-card" style={{ maxWidth: '50%', margin: '0 auto 20px' }}>
          <div className="report-images">
            <img src="/images/Captura de pantalla 2025-11-27 230835.png" alt="Monitoreo Fire 2025-2026" className="report-image" />
          </div>
          <div className="report-content">
            <h2>Monitoreo Fire 2025-2026</h2>
            <p>Plataforma de monitoreo de incendios para la temporada 2025-2026.</p>
            <a href="https://faunapescaycaza-lang.github.io/monitoreo-fire-2025-2026/" target="_blank" rel="noopener noreferrer" className="read-more-button">Ver plataforma</a>
          </div>
        </div>
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
                <div className="no-image-placeholder">No Image Available</div>
              )}
            </div>
            <div className="report-content">
              <h2>{report.title}</h2>
              <p>{report.description.substring(0, 100)}...</p> {/* Show snippet */}
              <Link to={`/reportes/${report.id}`} className="read-more-button">Leer más</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reportes;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ReporteDetalle.css'; // We will create this CSS file

const ReporteDetalle = () => {
  const { reportId } = useParams();
  const navigate = useNavigate();
  const [report, setReport] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReportDetail = async () => {
      try {
        const response = await fetch('/reports.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const foundReport = data.find(r => r.id === reportId);

        if (foundReport) {
          setReport(foundReport);
        } else {
          setError("Reporte no encontrado.");
        }
      } catch (e) {
        setError("Error al cargar el reporte: " + e.message);
        console.error("Error fetching report detail:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReportDetail();
  }, [reportId]);

  if (isLoading) {
    return <div className="reporte-detalle-container">Cargando reporte...</div>;
  }

  if (error) {
    return (
      <div className="reporte-detalle-container">
        <p style={{ color: 'red' }}>{error}</p>
        <button onClick={() => navigate('/reportes')}>Volver a Reportes</button>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="reporte-detalle-container">
        <p>Reporte no disponible.</p>
        <button onClick={() => navigate('/reportes')}>Volver a Reportes</button>
      </div>
    );
  }

  return (
    <div className="reporte-detalle-container">
      <button onClick={() => navigate('/reportes')} className="back-button">← Volver a Reportes</button>
      <h1>{report.title}</h1>
      <div className="reporte-detalle-images">
        {Array.isArray(report.imageUrls) && report.imageUrls.length > 0 ? (
          report.imageUrls.map((url, index) => (
            <img key={index} src={url} alt={`${report.title} ${index + 1}`} className="reporte-detalle-image" />
          ))
        ) : (
          <div className="no-image-placeholder">No Image Available</div>
        )}
      </div>
      <p className="reporte-detalle-description">{report.description}</p>
    </div>
  );
};

export default ReporteDetalle;
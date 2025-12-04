import React from 'react';
import './FloatingActionButtons.css';
import { useNavigate } from 'react-router-dom';

const FloatingActionButtons = () => {
  const navigate = useNavigate();

  const handleReportCamera = () => {
    window.open('https://cazaypesca.neuquen.gob.ar/?ff_landing=49', '_blank');
  };

  const handleReportFire = () => {
    window.open('https://cazaypesca.neuquen.gob.ar/?ff_landing=50', '_blank');
  };

  const handleRequestCamera = () => {
    window.open('https://cazaypesca.neuquen.gob.ar/?ff_landing=51', '_blank');
  };

  return (
    <div className="fab-container">
        <button className="fab-button camera-report" onClick={handleReportCamera}>
          📸 Reportar cámara caída
        </button>
        <button className="fab-button fire-report" onClick={handleReportFire}>
          🔥 Reportar Incendio
        </button>
        <button className="fab-button request-camera" onClick={handleRequestCamera}>
          ➕ Solicitud de cámara
        </button>
    </div>
  );
};

export default FloatingActionButtons;
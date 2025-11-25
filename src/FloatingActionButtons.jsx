import React from 'react';
import './FloatingActionButtons.css';
import { useNavigate } from 'react-router-dom';

const FloatingActionButtons = () => {
  const navigate = useNavigate();

  const handleReportCamera = () => {
    navigate('/reportes?type=camera');
  };

  const handleReportFire = () => {
    navigate('/reportes?type=fire');
  };

  return (
    <div className="fab-container">
      <button className="fab-button camera-report" onClick={handleReportCamera}>
        📸 Reportar cámara caída
      </button>
      <button className="fab-button fire-report" onClick={handleReportFire}>
        🔥 Reportar Incendio
      </button>
    </div>
  );
};

export default FloatingActionButtons;
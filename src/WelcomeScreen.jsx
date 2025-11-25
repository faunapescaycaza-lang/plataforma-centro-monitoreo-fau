import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomeScreen.css';

const WelcomeScreen = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Bienvenido al Sistema de Monitoreo de Ambientes, Hábitats y Fauna Silvestre de la Provincia de Neuquén</h1>
        <p>Una herramienta para la visualización y seguimiento de datos geoespaciales y cámaras.</p>
        <Link to="/dashboard" className="btn-dashboard">
          Ir al Dashboard
        </Link>
      </div>
    </div>
  );
};

export default WelcomeScreen;



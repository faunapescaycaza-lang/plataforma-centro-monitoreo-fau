import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomeScreen.css';

const WelcomeScreen = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <img src="/Logos/fauna-removebg-preview.png" alt="Logo" className="welcome-logo" />
        <h1>Bienvenido al Sistema de Monitoreo de Ambientes, Hábitats y Fauna Silvestre de la Provincia de Neuquén</h1>
        <p>Una herramienta para la visualización y seguimiento de datos geoespaciales y cámaras.</p>

      </div>
    </div>
  );
};

export default WelcomeScreen;



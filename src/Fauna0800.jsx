import React from 'react';
import MainMenu from './MainMenu';
import './Fauna0800.css';

const Fauna0800 = () => {
  return (
    <div className="fauna-0800-container">
      <div className="form-container-fauna">
                  <a
                    href="https://cazaypesca.neuquen.gob.ar/?ff_landing=27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-form-link"
                  >
                    Acceder al formulario 0800 fauna
                  </a>
        
                  <a
                    href="https://plataforma-fauna-lab.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-form-link"
                  >
                    Fauna LAB
                  </a>
                </div>
      <img src="/Imagenes/aviso_fauna.jpg" alt="Aviso Fauna" className="fauna-header-image" />
    </div>
  );
};

export default Fauna0800;

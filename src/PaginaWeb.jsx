import React from 'react';
import './PaginaWeb.css';
import presentacionImg from '/Imagenes/pagina_fauna.png'; // Import the image

const PaginaWeb = () => {
  return (
    <div className="pagina-web-container">
      <div className="presentation-section">
        <img src={presentacionImg} alt="Caza y Pesca del Neuquén" className="presentation-image" />
        <div className="presentation-overlay">
          <div className="presentation-buttons">
            <a
              href="https://cazaypesca.neuquen.gob.ar/permisos"
              target="_blank"
              rel="noopener noreferrer"
              className="buy-permit-button"
            >
              Comprar Permiso
            </a>
            <a
              href="https://cazaypesca.neuquen.gob.ar/reenviar-permiso-de-pesca/"
              target="_blank"
              rel="noopener noreferrer"
              className="buy-permit-button"
            >
              Envio de permisos
            </a>
                          <a
                            href="https://cazaypesca.neuquen.gob.ar/consultar-permisos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="buy-permit-button"
                          >
                            Fiscalizar Permiso
                          </a>
                                                      <a
                                                        href="https://wa.me/5492972544017"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="buy-permit-button bot-pesca-button"
                                                      >
                                                        Bot de Pesca NQN
                                                      </a>          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaWeb;

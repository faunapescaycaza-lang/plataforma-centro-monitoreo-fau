import React from 'react';
import './Contactos.css';

const Contactos = () => {
  return (
    <div className="contactos-container">
      {/* <h1>Contactos</h1> -- Removed as per user request */}
      <div className="contact-row">
        <div className="contact-person">
          <h2>Director de Tecnología</h2>
          <a 
            href="https://wa.me/5492944249272" 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            Enviar mensaje por WhatsApp
          </a>
        </div>
        <div className="contact-person">
          <h2>Centro de Monitoreo SMA</h2>
          <a 
            href="https://wa.me/5492944699948" 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            Enviar mensaje por WhatsApp
          </a>
        </div>
        <div className="contact-person">
          <h2>Centro de Monitoreo VLA</h2>
          <a 
            href="https://wa.me/5492944391925" 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            Enviar mensaje por WhatsApp
          </a>
        </div>
        <div className="contact-person">
          <h2>Radio Estacion ICE Lanin</h2>
          <a 
            href="https://wa.me/5492944201859" 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            Enviar mensaje por WhatsApp
          </a>
        </div>
      </div>
    </div>  );
};

export default Contactos;

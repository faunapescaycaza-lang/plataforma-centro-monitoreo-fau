import React from 'react';
import './Ruta7LagosMap.css'; // Can reuse the same CSS
import BackButton from './BackButton';

const FuentesAguaLacarMap = () => {
  return (
    <div className="ruta7lagos-map-container">
      <BackButton />
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1N78N8L63GVbAQkTtDAeX1BdH7EUAZzr7&ehbc=2E312F&noprof=1"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Fuentes de Agua cuenca lacar Map"
      ></iframe>
    </div>
  );
};

export default FuentesAguaLacarMap;

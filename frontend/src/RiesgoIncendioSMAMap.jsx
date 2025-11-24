import React from 'react';
import './Ruta7LagosMap.css'; // Can reuse the same CSS
import BackButton from './BackButton';

const RiesgoIncendioSMAMap = () => {
  return (
    <div className="ruta7lagos-map-container">
      <BackButton />
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1GTE_UwXQ5r3qLys7rx2Xdpqg5fGzanND&ehbc=2E312F&noprof=1"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Riesgo de Incendio SMA Map"
      ></iframe>
    </div>
  );
};

export default RiesgoIncendioSMAMap;

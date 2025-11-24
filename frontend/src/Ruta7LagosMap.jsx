import React from 'react';
import './Ruta7LagosMap.css';
import BackButton from './BackButton';

const Ruta7LagosMap = () => {
  return (
    <div className="ruta7lagos-map-container">
      <BackButton />
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1PxUAQg85Nwy3Zr6GIgHhxw583T07X7lB&ehbc=2E312F"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ruta 7 Lagos Map"
      ></iframe>
    </div>
  );
};

export default Ruta7LagosMap;

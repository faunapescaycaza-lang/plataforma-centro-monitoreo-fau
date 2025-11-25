import React from 'react';
import './Ruta7LagosMap.css'; // Can reuse the same CSS
import BackButton from './BackButton';

const ComisariasNQNMap = () => {
  return (
    <div className="ruta7lagos-map-container">
      <BackButton />
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1ODHsLAbA5r3cG8_oM-A1og6jqC8MIOeJ&hl=es&ehbc=2E312F"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Comisarias NQN Map"
      ></iframe>
    </div>
  );
};

export default ComisariasNQNMap;

import React from 'react';
import './Ruta7LagosMap.css'; // Can reuse the same CSS
import BackButton from './BackButton';

const ANPDomuyoMap = () => {
  return (
    <div className="ruta7lagos-map-container">
      <BackButton />
      <iframe
        src="https://www.google.com/maps/d/embed?mid=13HuqVGVHgV2QylLECM_gLs0dRiNU9C0&ehbc=2E312F&noprof=1"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="ANP Domuyo Map"
      ></iframe>
    </div>
  );
};

export default ANPDomuyoMap;

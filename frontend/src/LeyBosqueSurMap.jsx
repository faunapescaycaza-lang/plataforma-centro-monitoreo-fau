import React from 'react';
import './Ruta7LagosMap.css'; // Can reuse the same CSS
import BackButton from './BackButton';

const LeyBosqueSurMap = () => {
  return (
    <div className="ruta7lagos-map-container">
      <BackButton />
      <iframe 
        src="https://www.google.com/maps/d/embed?mid=1DGBjlkOYCjlXF33HVHxoseW-we7uSF8&ehbc=2E312F&noprof=1"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa de Ley de Bosque Zona Sur"
      ></iframe>
    </div>
  );
};

export default LeyBosqueSurMap;

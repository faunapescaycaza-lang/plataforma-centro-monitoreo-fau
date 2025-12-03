import React from 'react';
import './MapasPage.css'; // Assuming common styling for map pages

const DelegacionesFaunaMap = () => {
  return (
    <div className="map-embed-container">
      <h1>Delegaciones Fauna</h1>
      <iframe 
        src="https://www.google.com/maps/d/embed?mid=1MPDCpYOKBL03wIXwi8yzTk9RnqeRoVc&ehbc=2E312F&noprof=1" 
        width="100%" 
        height="600" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Delegaciones Fauna Map"
      ></iframe>
    </div>
  );
};

export default DelegacionesFaunaMap;

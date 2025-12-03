import React from 'react';
import { Link } from 'react-router-dom';
import './MapasPage.css';

const maps = [
  { to: "/map/ruta7lagos", title: "Ruta 40 7 Lagos" },
  { to: "/map/comisarias-nqn", title: "Comisarias NQN" },
  { to: "/map/riesgo-incendio-sma", title: "Riesgo de Incendio SMA" },
  { to: "/map/fuentes-agua-lacar", title: "Fuentes de Agua cuenca lacar" },
  { to: "/map/anp-domuyo", title: "ANP Domuyo" },
  { to: "/map/anp-nqn", title: "Areas Naturales Protegidas NQN" },
  { to: "/map/anp-copahue", title: "ANP Copahue" },
  { to: "/map/ley-bosque-sur", title: "Mapa de Ley de Bosque Zona Sur" },
  { to: "/map/delegaciones-fauna", title: "Delegaciones Fauna" },
];

const MapasPage = () => {
  return (
    <div className="mapas-page-container">
      {/* <h1>Mapas SIG</h1> -- Removed as per user request */}
      <div className="mapas-grid">
        {maps.map((map, index) => (
          <Link key={index} to={map.to} className="map-card">
            <h2>{map.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MapasPage;

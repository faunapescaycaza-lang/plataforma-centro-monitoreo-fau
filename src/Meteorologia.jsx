import React from 'react';
import { Link, Route, Routes, useParams, useLocation } from 'react-router-dom';
import WeatherWidgetDisplay from './WeatherWidgetDisplay';
import './Meteorologia.css';

const locations = [
  { name: 'Neuquén Capital', path: 'neuquen-capital', href: 'https://forecast7.com/es/n38d95n68d06/neuquen/', label1: 'NEUQUÉN' },
  { name: 'Chosmalal', path: 'chosmalal', href: 'https://forecast7.com/es/n37d38n70d27/chos-malal/', label1: 'CHOS MALAL' },
  { name: 'Aluminé', path: 'alumine', href: 'https://forecast7.com/es/n39d24n70d92/alumine/', label1: 'ALUMINÉ' },
  { name: 'Junín de los Andes', path: 'junin-de-los-andes', href: 'https://forecast7.com/es/n39d95n71d07/junin-de-los-andes/', label1: 'JUNÍN DE LOS ANDES' },
  { name: 'San Martín de los Andes', path: 'san-martin-de-los-andes', href: 'https://forecast7.com/es/n40d16n71d35/san-martin-de-los-andes/', label1: 'SAN MARTÍN DE LOS ANDES' },
  { name: 'Villa Traful', path: 'villa-traful', href: 'https://forecast7.com/es/n40d65n71d40/villa-traful/', label1: 'VILLA TRAFUL' },
  { name: 'Villa La Angostura', path: 'villa-la-angostura', href: 'https://forecast7.com/es/n40d76n71d64/villa-la-angostura/', label1: 'VILLA LA ANGOSTURA' },
];

const LocationWidget = () => {
  const { locationId } = useParams();
  const location = locations.find(loc => loc.path === locationId);

  if (!location) {
    return <p>Localidad no encontrada.</p>;
  }

  return <WeatherWidgetDisplay href={location.href} label1={location.label1} label2="WEATHER" />;
};

const Meteorologia = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();

  return (
    <div>
      <nav className="meteorologia-submenu">
        {locations.map(loc => (
          <Link 
            key={loc.path} 
            to={loc.path} 
            className={`submenu-link ${currentPath === loc.path ? 'active' : ''}`}
          >
            {loc.name}
          </Link>
        ))}
      </nav>
      <div className="widget-container">
        <Routes>
          <Route path=":locationId" element={<LocationWidget />} />
          <Route index element={<p>Seleccione una localidad para ver el pronóstico.</p>} />
        </Routes>
      </div>
    </div>
  );
};

export default Meteorologia;
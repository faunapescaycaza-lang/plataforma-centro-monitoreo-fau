import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout';
// import ProtectedRoute from './ProtectedRoute'; // No longer needed for this test
import AuthPage from './Auth';
import WelcomeScreen from './WelcomeScreen';
import Dashboard from './Dashboard';
import Ruta7LagosMap from './Ruta7LagosMap';
import ComisariasNQNMap from './ComisariasNQNMap';
import RiesgoIncendioSMAMap from './RiesgoIncendioSMAMap';
import FuentesAguaLacarMap from './FuentesAguaLacarMap';
import ANPDomuyoMap from './ANPDomuyoMap';
import ANPNQNMap from './ANPNQNMap';
import ANPCopahueMap from './ANPCopahueMap';
import CentroMonitoreos from './CentroMonitoreos';
import Fauna0800 from './Fauna0800';
import Contactos from './Contactos';
import Reportes from './Reportes'; // New Import
import ReporteDetalle from './ReporteDetalle'; // New Import

import PaginaWeb from './PaginaWeb';
import MapasPage from './MapasPage';
import LeyBosqueSurMap from './LeyBosqueSurMap';
import './App.css';

function App() {
  return (
    <Routes>
      {/* Auth route is still available if needed */}
      <Route path="/login" element={<AuthPage />} />

      {/* All routes are now public and rendered inside MainLayout */}
      <Route path="/" element={<MainLayout />}>
        {/* Default public route */}
        <Route index element={<WelcomeScreen />} />
        
        {/* Other public routes */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="mapas" element={<MapasPage />} />
        <Route path="map/ruta7lagos" element={<Ruta7LagosMap />} />
        <Route path="map/comisarias-nqn" element={<ComisariasNQNMap />} />
        <Route path="map/riesgo-incendio-sma" element={<RiesgoIncendioSMAMap />} />
        <Route path="map/fuentes-agua-lacar" element={<FuentesAguaLacarMap />} />
        <Route path="map/anp-domuyo" element={<ANPDomuyoMap />} />
        <Route path="map/anp-nqn" element={<ANPNQNMap />} />
        <Route path="map/anp-copahue" element={<ANPCopahueMap />} />
        <Route path="map/ley-bosque-sur" element={<LeyBosqueSurMap />} />
        <Route path="centro-monitoreos" element={<CentroMonitoreos />} />
        <Route path="0800-fauna" element={<Fauna0800 />} />
        <Route path="contactos" element={<Contactos />} />
        <Route path="reportes" element={<Reportes />} /> {/* New Route */}
        <Route path="reportes/:reportId" element={<ReporteDetalle />} /> {/* New Route for Report Detail */}




        <Route path="pagina-web" element={<PaginaWeb />} />
      </Route>
    </Routes>
  );
}

export default App;
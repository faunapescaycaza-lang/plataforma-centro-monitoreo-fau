import React from 'react';
import './DatosSatelitales.css';

const DatosSatelitales = () => {
  const modisUrl = "https://worldview.earthdata.nasa.gov/?v=-79.76528960858441,-43.78836958963729,-58.496986594778136,-34.1650163379476&l=Reference_Labels_15m,Reference_Features_15m,Coastlines_15m,MODIS_Terra_Thermal_Anomalies_All,MODIS_Aqua_Thermal_Anomalies_All,VIIRS_SNPP_Thermal_Anomalies_375m_Night,VIIRS_SNPP_Thermal_Anomalies_375m_Day,MODIS_Combined_Thermal_Anomalies_All,MODIS_Aqua_SurfaceReflectance_Bands143,MODIS_Aqua_SurfaceReflectance_Bands721,MODIS_Terra_SurfaceReflectance_Bands143,MODIS_Terra_SurfaceReflectance_Bands721,VIIRS_SNPP_CorrectedReflectance_TrueColor,MODIS_Aqua_CorrectedReflectance_TrueColor,MODIS_Terra_CorrectedReflectance_TrueColor&lg=false&t=2025-11-24-T00%3A00%3A00Z";
  const modisImage = "/images/modis.png"; // Ruta a la imagen

  // ¡Añadir estas líneas!
  const windyUrl = "https://www.windy.com/-40.243/-71.169?rh,-38.933,-69.596,7,p:firespots";
  const windyImage = "/images/windy.png"; // Ruta a la imagen

  return (
    <div className="datos-satelitales-container">
      <h1>Datos Satelitales</h1>
      <p>Aquí puedes acceder a información satelital relevante para el monitoreo de fauna e incendios.</p>

      <div className="card-grid"> {/* Contenedor para las tarjetas */}
        <a href={modisUrl} target="_blank" rel="noopener noreferrer" className="modis-card">
          <img src={modisImage} alt="Datos Modis - Puntos Calientes" className="modis-image" />
          <div className="modis-card-overlay">
              <h2>Datos Modis - Puntos Calientes</h2>
              <p>Visualiza anomalías térmicas y focos de incendio detectados por satélites MODIS y VIIRS en tiempo real.</p>
          </div>
        </a>

        <a href={windyUrl} target="_blank" rel="noopener noreferrer" className="modis-card"> {/* Reutilizo la clase modis-card */}
          <img src={windyImage} alt="Datos Meteorológicos - Windy" className="modis-image" />
          <div className="modis-card-overlay">
              <h2>Datos Meteorológicos - Windy</h2>
              <p>Consulta información detallada del viento, lluvia, temperatura y focos de incendio en tiempo real.</p>
          </div>
        </a>

        <a href="https://slider.cira.colostate.edu/?sat=goes-19&sec=full_disk&x=11996&y=18290.400390625&z=4&angle=0&im=12&ts=1&st=0&et=0&speed=130&motion=loop&maps%5Bborders%5D=white&p%5B0%5D=cira_natural_fire_color&opacity%5B0%5D=1&pause=20251127133020&slider=-1&hide_controls=0&mouse_draw=0&follow_feature=0&follow_hide=0&s=rammb-slider&draw_color=FFD700&draw_width=6" target="_blank" rel="noopener noreferrer" className="modis-card">
          <img src="/images/Captura de pantalla 2025-11-27 230154.png" alt="Datos GOES-19 CIRA" className="modis-image" />
          <div className="modis-card-overlay">
              <h2>GOES-19 CIRA</h2>
              <p>Imágenes satelitales avanzadas para el seguimiento de incendios y fenómenos meteorológicos.</p>
          </div>
        </a>

        <a href="https://firms.modaps.eosdis.nasa.gov/map/#d:2025-11-25..2025-11-26;@-70.1,-37.3,8.6z" target="_blank" rel="noopener noreferrer" className="modis-card">
          <img src="/images/Captura de pantalla 2025-11-27 230452.png" alt="Datos FIRMS NASA" className="modis-image" />
          <div className="modis-card-overlay">
              <h2>FIRMS NASA</h2>
              <p>Sistema de Información sobre Incendios para la Gestión de Recursos de la NASA.</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default DatosSatelitales;

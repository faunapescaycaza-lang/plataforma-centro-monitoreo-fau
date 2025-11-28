import React from 'react';
import './CentroMonitoreos.css';

const CentroMonitoreos = () => {
  return (
    <div className="network-diagram">
      <h2>Red de Interconexión del Centro de Monitoreo Fauna Neuquén</h2>
      
      <ul>
          <li>
              <div className="node localidad">San Martín de los Andes (SMdA)</div>
              <ul>
                  <li><div className="node seguridad">C.M. Policía (SMdA)</div></li>
                  <li><div className="node fauna">P.N. Lanín (SMdA)</div></li>
              </ul>
          </li>
          <li>
              <div className="node localidad">Villa la Angostura (VLA)</div>
              <ul>
                  <li><div className="node seguridad">C.M. Policía (VLA)</div></li>
                  <li><div className="node privado">Cerro Bayo VLA</div></li>
                  <li><div className="node seguridad">Municipalidad VLA</div></li>
              </ul>
          </li>
          <li>
              <div className="node localidad">Junín de los Andes (JdLA)</div>
              <ul>
                  <li><div className="node emergencia">Brigada Rural JDLA</div></li>
                  <li><div className="node emergencia">Bomberos JDLA</div></li>
                  <li><div className="node fauna">P.N. Lanín (JdLA)</div></li>
                  <li><div className="node privado">Hostería Boca Chimehuin JDLA</div></li>
              </ul>
          </li>
          <li><div className="node localidad">Chos Malal (CHM)</div>
              <ul>
                  <li><div className="node fauna">Oficina Fauna (CHM)</div></li>
              </ul>
          </li>
          <li><div className="node localidad">Zapala (ZAP)</div>
              <ul>
                  <li><div className="node seguridad">C.M. Policía (ZAP)</div></li>
                  <li><div className="node emergencia">Vialidad Prov. (ZAP)</div></li>
              </ul>
          </li>
          <li><div className="node localidad">Aluminé (ALU)</div>
              <ul>
                  <li><div className="node fauna">Oficina Fauna (ALU)</div></li>
              </ul>
          </li>
          <li><div className="node localidad">Piedra del Águila (PDA)</div>
              <ul>
                  <li><div className="node seguridad">Puesto Collón Curá Policía</div></li>
              </ul>
          </li>
          <li style={{marginTop: '30px'}}>
              <div className="node colaborador">Actores Privados <span className="connection-label">(Colaboración Directa)</span></div>
              <ul>
                  <li><div className="node privado">Club Golf SMA</div></li>
                  <li><div className="node privado">Club El Desafío SMA</div></li>
                  <li><div className="node privado">Parador Lolog SMA</div></li>
                  <li><div className="node privado">Casa de Té Arrayán SMA</div></li>
                  <li><div className="node privado">Parador Meliquina</div></li>
                  <li><div className="node comunidad">Comunidad Mapuche Linares (Huiliches)</div></li>
              </ul>
          </li>
      </ul>
      
      <div className="logos-container">
        <img src="/Logos/image-removebg-preview.png" alt="Logo 1" className="logo-img" />
        <img src="/Logos/image-removebg-preview (1).png" alt="Logo 2" className="logo-img" />
        <img src="/Logos/image-removebg-preview (2).png" alt="Logo 3" className="logo-img" />
        <img src="/Logos/image-removebg-preview (3).png" alt="Logo 5" className="logo-img" />
        <img src="/Logos/image-removebg-preview (4).png" alt="Logo 6" className="logo-img" />
      </div>
      
    </div>
  );
};

export default CentroMonitoreos;

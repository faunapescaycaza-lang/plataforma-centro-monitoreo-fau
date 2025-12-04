import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import './MainMenu.css';
import { useAuth } from './AuthProvider'; // Import useAuth

const MainMenu = () => {
  const { signOut } = useAuth(); // Get the signOut function
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get current location
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getLinkClassName = (path) => {
    return `menu-button ${location.pathname === path ? 'active' : ''}`;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <nav className="main-menu">
      <div className="main-menu-logo">
        <Link to="/" className="menu-button">Monitoreo</Link>
      </div>
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        &#9776; {/* Hamburger Icon */}
      </div>
      <ul className={`main-menu-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={closeMobileMenu} className={getLinkClassName('/')}>Inicio</Link>
        </li>
        <li>
          <Link to="/mapas" onClick={closeMobileMenu} className={getLinkClassName('/mapas')}>Mapas SIG</Link>
        </li>
        <li>
          <Link to="/dashboard" onClick={closeMobileMenu} className={getLinkClassName('/dashboard')}>Cámaras</Link>
        </li>
        <li>
          <Link to="/centro-monitoreos" onClick={closeMobileMenu} className={getLinkClassName('/centro-monitoreos')}>Centro de Monitoreos</Link>
        </li>
        <li>
          <Link to="/0800-fauna" onClick={closeMobileMenu} className={getLinkClassName('/0800-fauna')}>0800-Fauna</Link>
        </li>
        <li>
          <Link to="/contactos" onClick={closeMobileMenu} className={getLinkClassName('/contactos')}>Contactos</Link>
        </li>
        <li>
          <Link to="/pagina-web" onClick={closeMobileMenu} className={getLinkClassName('/pagina-web')}>Página Web</Link>
        </li>
        <li>
          <Link to="/reportes" onClick={closeMobileMenu} className={getLinkClassName('/reportes')}>Reportes</Link>
        </li>
        {/* Nuevo botón */}
        <li>
          <Link to="/datos-satelitales" onClick={closeMobileMenu} className={getLinkClassName('/datos-satelitales')}>Datos Satelitales</Link>
        </li>
        <li>
          <Link to="/meteorologia" onClick={closeMobileMenu} className={getLinkClassName('/meteorologia')}>Meteorología</Link>
        </li>
        {/* Logout button for mobile view */}
        <li className="mobile-logout">
          <button onClick={() => { closeMobileMenu(); signOut(); }}>Cerrar Sesión</button>
        </li>
      </ul>
      <div className="main-menu-logout">
        <button onClick={signOut}>Cerrar Sesión</button>
        <button onClick={toggleFullscreen} className="fullscreen-button-main-menu">
          {isFullscreen ? '✕' : '⛶'}
        </button>
      </div>
    </nav>
  );
};

export default MainMenu;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';
import { useAuth } from './AuthProvider'; // Import useAuth

const MainMenu = () => {
  const { signOut } = useAuth(); // Get the signOut function
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="main-menu">
      <div className="main-menu-logo">
        <Link to="/">Monitoreo</Link>
      </div>
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        &#9776; {/* Hamburger Icon */}
      </div>
      <ul className={`main-menu-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={closeMobileMenu}>Inicio</Link>
        </li>
        <li>
          <Link to="/mapas" onClick={closeMobileMenu}>Mapas SIG</Link>
        </li>
        <li>
          <Link to="/dashboard" onClick={closeMobileMenu}>Cámaras</Link>
        </li>
        <li>
          <Link to="/centro-monitoreos" onClick={closeMobileMenu}>Centro de Monitoreos</Link>
        </li>
        <li>
          <Link to="/0800-fauna" onClick={closeMobileMenu}>0800-Fauna</Link>
        </li>
        <li>
          <Link to="/contactos" onClick={closeMobileMenu}>Contactos</Link>
        </li>

        <li>
          <Link to="/pagina-web" onClick={closeMobileMenu}>Página Web</Link>
        </li>
        {/* Logout button for mobile view */}
        <li className="mobile-logout">
          <button onClick={() => { closeMobileMenu(); signOut(); }}>Cerrar Sesión</button>
        </li>
      </ul>
      <div className="main-menu-logout">
        <button onClick={signOut}>Cerrar Sesión</button>
      </div>
    </nav>
  );
};

export default MainMenu;

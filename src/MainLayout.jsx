import React from 'react';
import { Outlet } from 'react-router-dom';
import MainMenu from './MainMenu';
import FloatingActionButtons from './FloatingActionButtons'; // Importar el componente completo

const MainLayout = () => {
  return (
    <>
      <MainMenu />
      <Outlet />
      <FloatingActionButtons /> {/* Renderizar el componente completo */}
    </>
  );
};

export default MainLayout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import MainMenu from './MainMenu';

const MainLayout = () => {
  return (
    <>
      <MainMenu />
      <Outlet /> {/* This will render the matched child route's component */}
    </>
  );
};

export default MainLayout;

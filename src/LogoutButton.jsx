import React from 'react';
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { signOut, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut();
      // Redirect to login page after successful logout
      navigate('/login'); 
    } catch (error) {
      console.error('Error signing out:', error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <button onClick={handleLogout} disabled={loading} style={{
      padding: '8px 16px',
      backgroundColor: '#f44336',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 'bold',
    }}>
      {loading ? 'Cerrando sesión...' : 'Cerrar Sesión'}
    </button>
  );
};

export default LogoutButton;

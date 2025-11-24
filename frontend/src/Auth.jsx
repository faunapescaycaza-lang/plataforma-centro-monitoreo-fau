import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from './supabaseClient';
import { useAuth } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
import './Auth.css'; // Import the new CSS file
import logo from '/Logos/fauna-removebg-preview.png'; // Import the new logo

const AuthPage = () => {
  const { session } = useAuth();
  const navigate = useNavigate();

  // Redirect to home if already logged in
  React.useEffect(() => {
    if (session) {
      navigate('/');
    }
  }, [session, navigate]);

  return (
    <div className="auth-container">
      <div className="auth-glass-card">
        <div className="auth-header">
          <img src={logo} alt="Logo Fauna" className="auth-logo" />
          <h1 className="auth-title">Plataforma Fauna Neuquén</h1>
        </div>

        <div className="auth-form-wrapper">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#00aaff',
                    brandAccent: '#0088cc',
                  },
                  radii: {
                    borderRadius: '8px',
                    buttonBorderRadius: '8px',
                    inputBorderRadius: '8px',
                  },
                },
              },
            }}
            providers={['google']}
            redirectTo={window.location.origin}
            localization={{
              variables: {
                sign_in: {
                  email_label: 'Correo Electrónico',
                  password_label: 'Contraseña',
                  email_input_placeholder: 'Tu correo electrónico',
                  password_input_placeholder: 'Tu contraseña',
                  button_label: 'Iniciar Sesión',
                  social_auth_text: 'Iniciar sesión con {{provider}}',
                  link_text: '¿Ya tienes una cuenta? Inicia sesión',
                },
                sign_up: {
                  email_label: 'Correo Electrónico',
                  password_label: 'Contraseña',
                  email_input_placeholder: 'Tu correo electrónico',
                  password_input_placeholder: 'Crea una contraseña',
                  button_label: 'Registrarse',
                  social_auth_text: 'Registrarse con {{provider}}',
                  link_text: '¿No tienes una cuenta? Regístrate',
                },
                forgotten_password: {
                  link_text: '¿Olvidaste tu contraseña?',
                  email_label: 'Correo Electrónico',
                  password_label: 'Contraseña',
                  email_input_placeholder: 'Tu correo electrónico',
                  button_label: 'Enviar instrucciones de reinicio',
                },
                update_password: {
                  password_label: 'Nueva Contraseña',
                  password_input_placeholder: 'Tu nueva contraseña',
                  button_label: 'Actualizar contraseña',
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

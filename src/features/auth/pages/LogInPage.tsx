/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import { LoginONGForm } from '../components/LoginONGForm/LoginONGForm';
import { LoginVolunteerForm } from '../components/LoginVolunteerForm/LoginVolunteerForm';

export type LogIn = 'ONG' | 'Volunteer';

export const LogInPage = () => {
  const [SignIn, setSignIn] = useState<LogIn>('ONG');

  const handleSignInClick = (
    type: LogIn,
  ) => {
    setSignIn(type);
  };

  return (
    <>
      <h1 className="text-center mb-5">Inicia Sesión</h1>
      <h5 className="text-center mb-3">¿Qué tipo de usuario eres?</h5>
      <div className="d-flex justify-content-center mb-4">
        <div className="btn-group btn-group-md">
          <button
            type="button"
            className={`btn ${SignIn === 'ONG' ? 'btn-dark' : 'btn-secondary'}`}
            onClick={() => handleSignInClick('ONG')}
          >
            ONG
          </button>
          <button
            type="button"
            className={`btn ${SignIn === 'Volunteer' ? 'btn-dark' : 'btn-secondary'}`}
            onClick={() => handleSignInClick('Volunteer')}
          >
            Voluntario
          </button>
        </div>
      </div>
      {
        SignIn === 'ONG'
          ? <LoginONGForm />
          : <LoginVolunteerForm />
      }
    </>
  );
};

/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import { CreateONGForm } from '../components/CreateONGForm/CreateONGForm';
import { CreateVolunteerForm } from '../components/CreateVolunteerForm/CreateVolunteerForm';

export const SignInPage = () => {
  const [SignIn, setSignIn] = useState('ONG');

  const handleSignInClick = (
    type,
  ) => {
    setSignIn(type);
  };

  return (
    <>
      <h1 className="text-center mb-5">Crea una cuenta</h1>
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
          ? <CreateONGForm />
          : <CreateVolunteerForm />
      }
    </>
  );
};

import { useNavigate } from 'react-router-dom';
import { ReactComponent as LogoHome } from '../../../assets/logoHome.svg';

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="row d-none d-sm-flex justify-content-center">
        <div className="col-sm-10 col-lg-10">
          <div className="mt-3 p-5 bg-light rounded">
            <div className="container">
              <div className="row d-flex justify-content-center">
                <h1 className="display-4 text-center">Bienvenidos a JustVolunteer</h1>
                <p className="text-center">Nuestor objetivo es conectar a ONGs y voluntarios de toda España.</p>
                <LogoHome />
                <h5 className="text-center mt-2">¿Qué deseas realizar?</h5>
              </div>
              <div className="text-center mt-4">
                <button type="button" className="btn btn-outline-dark btn-lg" style={{ marginRight: '1rem' }} onClick={() => navigate('/auth/login')}>Accede</button>
                <button type="button" className="btn btn-outline-dark btn-lg" onClick={() => navigate('/auth/signin')}>Registrate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-xs-flex d-sm-none justify-content-center">
        <div className="col-xs-12">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <h1 className="display-3 text-center mt-5">
                Bienvenidos a la app
                <strong> JustVolunteer</strong>
              </h1>
              <p className="text-center mt-2" style={{ fontStyle: 'italic' }}>Nuestro objetivo es conectar a ONGs y voluntarios de toda España.</p>
            </div>
            <div className="text-center mt-4">
              <h1 className="display-6 text-center mb-4">¿Qué deseas realizar?</h1>
              <button type="button" className="btn btn-outline-dark" style={{ marginRight: '1rem' }} onClick={() => navigate('/auth/login')}>Acceder</button>
              <button type="button" className="btn btn-outline-dark" onClick={() => navigate('/auth/signin')}>Registrate</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

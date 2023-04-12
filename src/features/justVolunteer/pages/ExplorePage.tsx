import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActivitiesSliceThunkDispatch, RootState } from '../../../store/store';
import { getActivities, getActivitiesByCif, getActivitiesByNIF } from '../../../store/slices/activies';
import { ONG, Volunteer } from '../../../store/slices';

export type ActivitiesFilterType = 'All' | 'Own';

export const ExplorePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<ActivitiesSliceThunkDispatch>();

  const [filterType, setFilter] = useState<ActivitiesFilterType>('All');
  const { userInfo } = useSelector((store: RootState) => store.authSlice);
  const { activities, activitiesOwn } = useSelector((store: RootState) => store.activitiesSlice);

  const getActivitiesByUserType = () => {
    const userType = userInfo?.userType;
    if (userType && userType === 'ONG') {
      const { cif } = (userInfo as ONG);
      dispatch(getActivitiesByCif({ cif }));
    }
    if (userType && userType === 'Volunteer') {
      const { nif } = (userInfo as Volunteer);
      dispatch(getActivitiesByNIF({ nif }));
    }
    return dispatch(getActivities());
  };

  const handleSignInClick = (
    type: ActivitiesFilterType,
  ) => {
    setFilter(type);
  };

  const getActivitiesToShow = () => {
    if (filterType === 'All' && (Array.isArray(activities) && activities.length > 0)) {
      return activities;
    }
    if (filterType === 'Own' && (Array.isArray(activitiesOwn) && activitiesOwn.length > 0)) {
      return activitiesOwn;
    }
    return [];
  };

  useEffect(() => {
    getActivitiesByUserType();
  }, []);

  return (
    <>
      <h1 className="text-center mt-4 mb-5">Actividades de Voluntariado</h1>
      <h5 className="text-center mb-3">¿Qué actividades deseas ver?</h5>
      <div className="d-flex justify-content-center mb-5">
        <div className="btn-group btn-group-md">
          <button
            type="button"
            className={`btn ${filterType === 'All' ? 'btn-dark' : 'btn-secondary'}`}
            onClick={() => handleSignInClick('All')}
          >
            Todas
          </button>
          <button
            type="button"
            className={`btn ${filterType === 'Own' ? 'btn-dark' : 'btn-secondary'}`}
            onClick={() => handleSignInClick('Own')}
          >
            Propias
          </button>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          {
            (getActivitiesToShow()).map((activitie: any) => (
              <div
                key={activitie.nombre}
                className="col-lg-5 mb-4"
              >
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title mb-3">{activitie.nombre}</h5>
                    <h6 className="card-subtitle mb-3">
                      <strong>Sector: </strong>
                      {activitie.sector}
                    </h6>
                    <h6 className="card-subtitle mb-3">
                      <strong>Localidad: </strong>
                      {activitie.localidad}
                    </h6>
                    <p className="card-text" style={{ minHeight: '80px' }}>
                      <strong>Descripción de la actividad: </strong>
                      {activitie.descripcion_actividad}
                    </p>
                  </div>
                  <div className="card-footer">
                    <button type="button" className="btn btn-dark" onClick={() => navigate(`/gestionar/${activitie.id}`)}>Detalle</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

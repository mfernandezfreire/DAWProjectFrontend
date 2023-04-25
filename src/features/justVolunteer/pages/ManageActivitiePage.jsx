/* eslint-disable no-debugger */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ThermometerSnow } from 'react-bootstrap-icons';
import {
  addVolunteerToActivitie,
  deleteVolunteerFromActivitie,
  getActivitieDetail,
  setActivitieDetail,
} from '../../../store/slices/activies';
import { ManageActivitieForm } from '../components/ManageActivitieForm/ManageActivitieForm';

export const ManageActivitiePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const { userInfo } = useSelector((store) => store.authSlice);
  const {
    activities,
    activitiesOwn,
    activitieDetail,
  } = useSelector((store) => store.activitiesSlice);

  const [isOwn, setIsOwn] = useState(false);
  const [manageActions, setManageActions] = useState('Detail');

  const getActivitieDetailByParamId = () => {
    const activitieOwned = activitiesOwn.filter((activitie) => activitie.id === id);
    if (
      (userInfo?.userType === 'ONG' || userInfo?.userType === 'Volunteer')
      && Array.isArray(activitieOwned)
      && activitieOwned.length > 0
    ) {
      dispatch(getActivitieDetail(
        { ...activitieOwned[0] },
        { id_actividad_de_voluntariado: id },
      ));
      setIsOwn(true);
      return;
    }
    const activitieViewInfo = activities.filter((activitie) => activitie.id === id);
    dispatch(setActivitieDetail({ ...activitieViewInfo[0], volunteers: [] }));
  };

  const handleSignInClick = (
    type,
  ) => {
    setManageActions(type);
  };

  const handleAddVolunteerToActivitie = () => {
    const { nif } = userInfo;
    const info = {
      nif_voluntario: nif,
      id_actividad_de_voluntariado: id,
    };
    dispatch(addVolunteerToActivitie(info, navigate));
  };

  const handleDeleteVolunteerFromActivitie = () => {
    const { nif } = userInfo;
    const info = {
      nif_voluntario: nif,
      id_actividad_de_voluntariado: id,
    };
    dispatch(deleteVolunteerFromActivitie(info, navigate));
  };

  useEffect(() => {
    getActivitieDetailByParamId();
  }, []);

  return (
    <>
      <h1 className="text-center mt-4 mb-5">Detalle de Actividad</h1>
      {
        (isOwn && userInfo?.userType === 'ONG')
        && (
          <div className="d-flex justify-content-center mb-5">
            <div className="btn-group btn-group-md">
              <button
                type="button"
                className={`btn ${manageActions === 'Detail' ? 'btn-dark' : 'btn-secondary'}`}
                onClick={() => handleSignInClick('Detail')}
              >
                Detalle
              </button>
              <button
                type="button"
                className={`btn ${manageActions === 'Volunteers' ? 'btn-dark' : 'btn-secondary'}`}
                onClick={() => handleSignInClick('Volunteers')}
              >
                Voluntarios
              </button>
              <button
                type="button"
                className={`btn ${manageActions === 'Edit' ? 'btn-dark' : 'btn-secondary'}`}
                onClick={() => handleSignInClick('Edit')}
              >
                Editar
              </button>
            </div>
          </div>
        )
      }
      {
        (manageActions === 'Detail' || manageActions === 'Edit')
        && Object.keys(activitieDetail).length > 0 && (
          <ManageActivitieForm
            activitie={activitieDetail}
            readonly={manageActions !== 'Edit' && true}
          />
        )
      }
      {
        (manageActions === 'Volunteers')
        && (Array.isArray(activitieDetail.volunteers) && activitieDetail.volunteers.length > 0)
        && (
          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
              {
                (activitieDetail.volunteers).map((activitie) => (
                  <div
                    key={activitie.nombre}
                    className="col-lg-5 mb-4"
                  >
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title mb-3">{`${activitie.nombre} ${activitie.apellidos}`}</h5>
                        <h6 className="card-title mb-2">
                          <strong>Teléfono: </strong>
                          {activitie.telefono}
                        </h6>
                        <div className="card-text mb-1">
                          <strong>Estudios: </strong>
                          {activitie.estudios}
                        </div>
                        <div className="card-text mb-1">
                          <strong>Campo de estudio: </strong>
                          {activitie.campo_estudio}
                        </div>
                        <div className="card-text mb-1">
                          <strong>Motivación: </strong>
                          {activitie.motivacion_voluntariado}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        )
      }
      {
        (manageActions === 'Volunteers')
        && (Array.isArray(activitieDetail.volunteers) && activitieDetail.volunteers.length === 0)
        && (
          <div className="container">
            <div className="text-center">
              <ThermometerSnow color="orange" size={50} />
            </div>
            <div className="text-center mt-3">
              <h4 className="mr-3">Lo lamento, no tienes voluntarios en esta actividad.</h4>
            </div>
          </div>
        )
      }
      {
        (!isOwn && userInfo?.userType === 'Volunteer')
        && (
          <div className="d-flex justify-content-center mb-5">
            <button type="button" className="btn btn-primary" onClick={() => handleAddVolunteerToActivitie()}>Vincularse</button>
          </div>
        )
      }
      {
        (isOwn && userInfo?.userType === 'Volunteer')
        && (
          <div className="d-flex justify-content-center mb-5">
            <button type="button" className="btn btn-danger" onClick={() => handleDeleteVolunteerFromActivitie()}> Desvincularse</button>
          </div>
        )
      }
    </>
  );
};

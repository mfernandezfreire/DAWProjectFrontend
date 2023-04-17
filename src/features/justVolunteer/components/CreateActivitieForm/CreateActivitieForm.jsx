/* eslint-disable jsx-a11y/control-has-associated-label */
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ACTIVITIE_FORM_VALUES } from '../../../../config/formValues';
import { INTERVENTION_SECTOR } from '../../../../config/ong';
import { useForm } from '../../../../hooks/useForm';
import { FormControlInputs } from '../../../common/FormControlnput/FormControlInputs';
import { createActivitie } from '../../../../store/slices/activies';

export const CreateActivitieForm = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((store) => store.authSlice);
  const { cif } = userInfo;
  const navigate = useNavigate();
  const {
    formState,
    formClassValidation,
    changeFormClassValidation,
    handleStateChange,
  } = useForm({
    id: uuid(),
    cif_ong: cif,
    nombre: 'Esto es una actividad',
    sector: INTERVENTION_SECTOR[0],
    numero_voluntarios: '10',
    descripcion_actividad: 'Gente Vieja',
    descripcion_horarios: 'Cuando me salga de los cojones',
    calle: 'Madrid',
    cp: '28017',
    localidad: 'Madrid',
    provincia: 'Madrid',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    changeFormClassValidation(true);
    dispatch(createActivitie(formState, navigate));
  };

  const activitieFormKeys = Object.keys(ACTIVITIE_FORM_VALUES);

  return (
    <form onSubmit={handleSubmit} className={`container-fluid ${formClassValidation}`} noValidate>
      <div className="row d-flex justify-content-center">
        <div className="col-sm-6">
          {
            activitieFormKeys.map((formKey) => (
              <FormControlInputs
                formType="Activitie"
                key={formKey}
                formControlValue={ACTIVITIE_FORM_VALUES[formKey]}
                formState={formState}
                handleChange={handleStateChange}
              />
            ))
          }
          <button type="submit" className="btn btn-primary mt-3">Crear</button>
        </div>
      </div>
    </form>
  );
};

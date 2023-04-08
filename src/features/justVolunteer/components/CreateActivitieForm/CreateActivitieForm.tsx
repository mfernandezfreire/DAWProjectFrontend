/* eslint-disable jsx-a11y/control-has-associated-label */
import { v4 as uuid } from 'uuid';
import { FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ACTIVITIE_FORM_VALUES, ONGVolunteerFormValuesKeys } from '../../../../config/formValues';
import { INTERVENTION_SECTOR } from '../../../../config/ong';
import { useForm } from '../../../../hooks/useForm';
import { FormControlInputs } from '../../../common/FormControlnput/FormControlInputs';
import { Activitie, createActivitie } from '../../../../store/slices/activies';
import { ActivitiesSliceThunkDispatch, RootState } from '../../../../store/store';
import { ONG } from '../../../../store/slices';

export const CreateActivitieForm = () => {
  const dispatch = useDispatch<ActivitiesSliceThunkDispatch>();
  const { userInfo } = useSelector((store: RootState) => store.authSlice);
  const { cif } = userInfo as ONG;
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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
            activitieFormKeys.map((formKey: ONGVolunteerFormValuesKeys) => (
              <FormControlInputs
                formType="Activitie"
                key={formKey}
                formControlValue={ACTIVITIE_FORM_VALUES[formKey]}
                formState={formState as unknown as Activitie}
                handleChange={handleStateChange}
              />
            ))
          }
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </div>
      </div>
    </form>
  );
};

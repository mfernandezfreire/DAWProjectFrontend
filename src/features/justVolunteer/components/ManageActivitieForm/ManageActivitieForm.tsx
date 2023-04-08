/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ACTIVITIE_FORM_VALUES, ONGVolunteerFormValuesKeys } from '../../../../config/formValues';
import { useForm } from '../../../../hooks/useForm';
import { FormControlInputs } from '../../../common/FormControlnput/FormControlInputs';
import { Activitie, deleteActivitie, updateActivitie } from '../../../../store/slices/activies';
import { ActivitiesSliceThunkDispatch } from '../../../../store/store';

interface ManageActivitieFormProps {
  activitie: Activitie;
  readonly: boolean
}

export const ManageActivitieForm = (
  {
    activitie,
    readonly,
  }: ManageActivitieFormProps,
) => {
  const dispatch = useDispatch<ActivitiesSliceThunkDispatch>();
  const navigate = useNavigate();
  const {
    formState,
    formClassValidation,
    changeFormClassValidation,
    handleStateChange,
  } = useForm({ ...activitie });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    changeFormClassValidation(true);
    const {
      nombre,
      sector,
      numero_voluntarios,
      descripcion_actividad,
      descripcion_horarios,
      calle,
      cp,
      localidad,
      provincia,
      id,
    } = formState;

    dispatch(updateActivitie({
      nombre,
      sector,
      numero_voluntarios,
      descripcion_actividad,
      descripcion_horarios,
      calle,
      cp,
      localidad,
      provincia,
      id,
    }, navigate));
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
                readOnly={readonly}
              />
            ))
          }
          {
            !readonly
            && (
              <>
                <button type="submit" className="btn btn-primary mt-3">Actualizar</button>
                <button
                  type="button"
                  className="btn btn-danger mt-3"
                  style={{ marginLeft: '1rem' }}
                  onClick={() => dispatch(deleteActivitie(activitie.id, navigate))}
                >
                  Borrar
                </button>
              </>
            )
          }
        </div>
      </div>
    </form>
  );
};

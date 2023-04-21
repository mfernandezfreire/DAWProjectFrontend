/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ACTIVITIE_FORM_VALUES } from '../../../../config/formValues';
import { useForm } from '../../../../hooks/useForm';
import { FormControlInputs } from '../../../common/FormControlnput/FormControlInputs';
import { deleteActivitie, updateActivitie } from '../../../../store/slices/activies';

export const ManageActivitieForm = (
  {
    activitie,
    readonly,
  },
) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    formState,
    formClassValidation,
    changeFormClassValidation,
    handleStateChange,
    onResetForm,
  } = useForm({ ...activitie });

  useEffect(() => {
    onResetForm();
  }, [activitie]);

  const handleSubmit = (event) => {
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
            activitieFormKeys.map((formKey) => (
              <FormControlInputs
                formType="Activitie"
                key={formKey}
                formControlValue={ACTIVITIE_FORM_VALUES[formKey]}
                formState={formState}
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
                  onClick={() => dispatch(deleteActivitie({ id: activitie.id }, navigate))}
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

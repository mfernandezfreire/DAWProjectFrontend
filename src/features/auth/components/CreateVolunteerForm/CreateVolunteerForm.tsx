import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ONGVolunteerFormValuesKeys, VOLUNTEER_FORM_VALUES } from '../../../../config/formValues';
import { useForm } from '../../../../hooks/useForm';
import { Volunteer, setIsError, signUp } from '../../../../store/slices';
import { FormControlInputs } from '../../../common/FormControlnput/FormControlInputs';
import { AuthSliceThunkDispatch } from '../../../../store/store';
import { FORM_REGEX } from '../../../../config/regex';
import { STUDY_FIELD } from '../../../../config/volunteer';

export const CreateVolunteerForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AuthSliceThunkDispatch>();
  const {
    NIFREGEX,
    MOBILE_PHONE_NUMBER,
    EMAIL,
  } = FORM_REGEX;
  const {
    formState,
    formClassValidation,
    changeFormClassValidation,
    handleStateChange,
  } = useForm({
    nif: '',
    nombre: '',
    apellidos: '',
    password: '',
    estudios: '',
    campo_estudio: STUDY_FIELD[0],
    idiomas: '',
    telefono: '',
    correo_electronico: '',
    motivacion_voluntariado: '',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emptyValues = Object.values(formState)
      .filter((item) => item === null || item.length === 0);
    if (
      emptyValues.length > 0
      || !(new RegExp(NIFREGEX)).test(formState.nif)
      || !(new RegExp(MOBILE_PHONE_NUMBER)).test(formState.telefono)
      || !(new RegExp(EMAIL)).test(formState.correo_electronico)
    ) {
      dispatch(setIsError(
        {
          errorType: 'warning',
          errorMessage: 'Por favor, revisa los datos introducidos.',
        },
      ));
      return changeFormClassValidation(true);
    }
    return dispatch(signUp('Volunteer', formState, navigate));
  };

  const ongFormKeys = Object.keys(VOLUNTEER_FORM_VALUES);

  return (
    <form onSubmit={handleSubmit} className={`container-fluid ${formClassValidation}`} noValidate>
      <div className="row d-flex justify-content-center">
        <div className="col-sm-6">
          {
            ongFormKeys.map((formKey: ONGVolunteerFormValuesKeys) => (
              <FormControlInputs
                formType="Volunteer"
                key={formKey}
                formControlValue={VOLUNTEER_FORM_VALUES[formKey]}
                formState={formState as Volunteer}
                handleChange={handleStateChange}
              />
            ))
          }
          <div className="text-center">
            <button type="submit" className="btn btn-primary mt-3">Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
};

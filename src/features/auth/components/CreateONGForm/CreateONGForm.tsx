/* eslint-disable jsx-a11y/control-has-associated-label */
import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ONGVolunteerFormValuesKeys, ONG_FORM_VALUES } from '../../../../config/formValues';
import { INTERVENTION_SECTOR, TYPES } from '../../../../config/ong';
import { useForm } from '../../../../hooks/useForm';
import { ONG, setIsErrorAuth } from '../../../../store/slices';
import { FormControlInputs } from '../../../common/FormControlnput/FormControlInputs';
import { signUp } from '../../../../store/slices/auth/thunks';
import { AuthSliceThunkDispatch } from '../../../../store/store';
import { FORM_REGEX } from '../../../../config/regex';

export const CreateONGForm = () => {
  const dispatch = useDispatch<AuthSliceThunkDispatch>();
  const navigate = useNavigate();
  const {
    CIFREGEX,
    ZIP_CODE,
    MOBILE_PHONE_NUMBER,
    CREATION_YEAR,
    EMAIL,
  } = FORM_REGEX;
  const ongType = 'ONG';
  const {
    formState,
    formClassValidation,
    changeFormClassValidation,
    handleStateChange,
  } = useForm({
    cif: '',
    nombre: '',
    password: '',
    tipo: TYPES[0],
    descripcion: '',
    sector_intervencion: INTERVENTION_SECTOR[0],
    calle: '',
    cp: '',
    localidad: '',
    provincia: '',
    ano_creacion: '',
    telefono: '',
    correo_electronico: '',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emptyValues = Object.values(formState)
      .filter((item) => item === null || item.length === 0);
    if (
      emptyValues.length > 0
      || !(new RegExp(CIFREGEX)).test(formState.cif)
      || !(new RegExp(ZIP_CODE)).test(formState.cp)
      || !(new RegExp(MOBILE_PHONE_NUMBER)).test(formState.telefono)
      || !(new RegExp(CREATION_YEAR)).test(formState.ano_creacion)
      || !(new RegExp(EMAIL)).test(formState.correo_electronico)
    ) {
      dispatch(setIsErrorAuth(
        {
          errorType: 'warning',
          errorMessage: 'Por favor, revisa los datos introducidos.',
        },
      ));
      return changeFormClassValidation(true);
    }
    return dispatch(signUp('ONG', formState, navigate));
  };

  const ongFormKeys = Object.keys(ONG_FORM_VALUES);

  return (
    <form onSubmit={handleSubmit} className={`container-fluid ${formClassValidation}`} noValidate>
      <div className="row d-flex justify-content-center">
        <div className="col-sm-6">
          {
            ongFormKeys.map((formKey: ONGVolunteerFormValuesKeys) => (
              <FormControlInputs
                formType={ongType}
                key={formKey}
                formControlValue={ONG_FORM_VALUES[formKey]}
                formState={formState as ONG}
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

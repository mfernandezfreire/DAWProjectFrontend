/* eslint-disable jsx-a11y/control-has-associated-label */
import { useDispatch } from 'react-redux';
import { ONG_FORM_VALUES } from '../../../../config/formValues';
import { useForm } from '../../../../hooks/useForm';
import { FormControlInputs } from '../../../common/FormControlnput/FormControlInputs';
import { logIn } from '../../../../store/slices/auth/thunks';
import { FORM_REGEX } from '../../../../config/regex';

export const LoginONGForm = () => {
  const dispatch = useDispatch();
  const ongType = 'ONG';
  const { CIFREGEX } = FORM_REGEX;
  const {
    formState,
    formClassValidation,
    changeFormClassValidation,
    handleStateChange,
  } = useForm({
    cif: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const emptyValues = Object.values(formState)
      .filter((item) => item === null || item.length === 0);
    if (
      emptyValues.length > 0
      || !(new RegExp(CIFREGEX)).test(formState.cif)
    ) {
      return changeFormClassValidation(true);
    }
    return dispatch(logIn('ONG', formState));
  };

  const ongFormKeys = ['CIF', 'PASSWORD'];

  return (
    <form onSubmit={handleSubmit} className={`container-fluid ${formClassValidation}`} noValidate>
      <div className="row d-flex justify-content-center">
        <div className="col-sm-6">
          {
            ongFormKeys.map((formKey) => (
              <FormControlInputs
                formType={ongType}
                key={formKey}
                formControlValue={ONG_FORM_VALUES[formKey]}
                formState={formState}
                handleChange={handleStateChange}
              />
            ))
          }
          <div className="text-center">
            <button type="submit" className="btn btn-primary mt-3">Acceder</button>
          </div>
        </div>
      </div>
    </form>
  );
};

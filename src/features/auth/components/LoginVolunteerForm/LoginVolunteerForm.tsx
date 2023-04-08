/* eslint-disable jsx-a11y/control-has-associated-label */
import { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { ONGVolunteerFormValuesKeys, VOLUNTEER_FORM_VALUES } from '../../../../config/formValues';
import { useForm } from '../../../../hooks/useForm';
import { Volunteer } from '../../../../store/slices';
import { FormControlInputs } from '../../../common/FormControlnput/FormControlInputs';
import { logIn } from '../../../../store/slices/auth/thunks';
import { AuthSliceThunkDispatch } from '../../../../store/store';
import { FORM_REGEX } from '../../../../config/regex';

export const LoginVolunteerForm = () => {
  const dispatch = useDispatch<AuthSliceThunkDispatch>();
  const VolunteerType = 'Volunteer';
  const { NIFREGEX } = FORM_REGEX;
  const {
    formState,
    formClassValidation,
    changeFormClassValidation,
    handleStateChange,
  } = useForm({
    nif: '',
    password: '',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emptyValues = Object.values(formState)
      .filter((item) => item === null || item.length === 0);
    if (
      emptyValues.length > 0
      || !(new RegExp(NIFREGEX)).test(formState.nif)
    ) {
      return changeFormClassValidation(true);
    }
    return dispatch(logIn('Volunteer', formState));
  };

  const ongFormKeys = ['NIF', 'PASSWORD'];

  return (
    <form onSubmit={handleSubmit} className={`container-fluid ${formClassValidation}`} noValidate>
      <div className="row d-flex justify-content-center">
        <div className="col-sm-6">
          {
            ongFormKeys.map((formKey: ONGVolunteerFormValuesKeys) => (
              <FormControlInputs
                formType={VolunteerType}
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

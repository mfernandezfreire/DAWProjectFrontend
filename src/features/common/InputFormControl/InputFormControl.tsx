import { ChangeEventHandler } from 'react';
import { FormControlValues } from '../../../config/formValues';
import { FormControlWrapper } from '../FormControlWrapper/FormControlWrapper';

export interface InputFormControlProps extends FormControlValues {
  value: any;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export const InputFormControl = (
  {
    customStyle,
    type,
    name,
    value,
    label,
    pattern,
    handleChange,
    readOnly,
  }: InputFormControlProps,
) => (
  <FormControlWrapper customStyle={customStyle}>
    <label htmlFor={name} id={name} className="form-label">{label}</label>
    <input
      type={type}
      className="form-control"
      id={name}
      name={name}
      value={value && value.toString()}
      onChange={handleChange}
      autoComplete="off"
      pattern={pattern}
      required
      disabled={readOnly}
    />
    <div className="invalid-feedback">{value && value.toString().trim().length > 0 ? 'Campo incorrecto' : 'Campo requerido'}</div>
  </FormControlWrapper>
);

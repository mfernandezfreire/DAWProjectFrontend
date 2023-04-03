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
    handleChange,
  }: InputFormControlProps,
) => (
  <FormControlWrapper customStyle={customStyle}>
    <label htmlFor={name} id={name} className="form-label">{label}</label>
    <input type={type} className="form-control" id={name} name={name} value={value} onChange={handleChange} required />
    <div className="invalid-feedback">Check this checkbox to continue.</div>
  </FormControlWrapper>
);

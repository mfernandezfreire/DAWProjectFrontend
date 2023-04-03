import { ChangeEventHandler } from 'react';
import { FormControlValues } from '../../../config/formValues';
import { FormControlWrapper } from '../FormControlWrapper/FormControlWrapper';

interface TextAreaFormControlProps extends FormControlValues {
  value: any
  handleChange: ChangeEventHandler<HTMLTextAreaElement>;
}

export const TextAreaFormControl = (
  {
    customStyle,
    name,
    value,
    label,
    handleChange,
  }: TextAreaFormControlProps,
) => (
  <FormControlWrapper customStyle={customStyle}>
    <div className="mb-3">
      <label htmlFor="description">{label}</label>
      <textarea
        className="form-control"
        id="description"
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  </FormControlWrapper>
);

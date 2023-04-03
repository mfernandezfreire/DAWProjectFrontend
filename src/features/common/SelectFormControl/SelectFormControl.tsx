import { ChangeEventHandler } from 'react';
import { FormControlWrapper } from '../FormControlWrapper/FormControlWrapper';
import { FormControlValues } from '../../../config/formValues';

interface SelectFromControlProps extends FormControlValues {
  handleChange: ChangeEventHandler<HTMLSelectElement>;
}

export const SelectFormControl = (
  {
    customStyle,
    name,
    values,
    label,
    handleChange,
  }: SelectFromControlProps,
) => (
  <FormControlWrapper customStyle={customStyle}>
    <label htmlFor="type" className="form-label">{label}</label>
    <select
      className="form-select"
      id={name}
      name={name}
      onChange={handleChange}
    >
      {
        Array.isArray(values) && values.length > 0
          ? values.map((item: string) => <option value={item}>{item}</option>)
          : []
      }
    </select>
  </FormControlWrapper>
);

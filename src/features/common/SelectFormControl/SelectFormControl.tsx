import { v4 as uuid } from 'uuid';

import { ChangeEventHandler } from 'react';
import { FormControlWrapper } from '../FormControlWrapper/FormControlWrapper';
import { FormControlValues } from '../../../config/formValues';

interface SelectFromControlProps extends FormControlValues {
  value: any;
  handleChange: ChangeEventHandler<HTMLSelectElement>;
}

export const SelectFormControl = (
  {
    customStyle,
    name,
    label,
    value,
    selectValues,
    handleChange,
    readOnly,
  }: SelectFromControlProps,
) => (
  <FormControlWrapper customStyle={customStyle}>
    <label htmlFor="type" className="form-label">{label}</label>
    <select
      className="form-select"
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
      disabled={readOnly}
    >
      {
        Array.isArray(selectValues) && selectValues.length > 0
          ? selectValues.map((item: string) => <option key={uuid()} value={item}>{item}</option>)
          : []
      }
    </select>
  </FormControlWrapper>
);

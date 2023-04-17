import { v4 as uuid } from 'uuid';

import { FormControlWrapper } from '../FormControlWrapper/FormControlWrapper';

export const SelectFormControl = (
  {
    customStyle,
    name,
    label,
    value,
    selectValues,
    handleChange,
    readOnly,
  },
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
          ? selectValues.map((item) => <option key={uuid()} value={item}>{item}</option>)
          : []
      }
    </select>
  </FormControlWrapper>
);

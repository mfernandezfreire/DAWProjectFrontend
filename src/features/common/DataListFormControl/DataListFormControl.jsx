/* eslint-disable jsx-a11y/control-has-associated-label */
import { v4 as uuid } from 'uuid';

import { FormControlWrapper } from '../FormControlWrapper/FormControlWrapper';

export const DataListFormControl = (
  {
    customStyle,
    name,
    label,
    list,
    value,
    datalistValues,
    handleChange,
    readOnly,
  },
) => (
  <FormControlWrapper customStyle={customStyle}>
    <label htmlFor={name} className="form-label">{label}</label>
    <input
      className="form-control"
      list={list}
      name={name}
      id={name}
      value={value}
      onChange={handleChange}
      autoComplete="off"
      required
      disabled={readOnly}
    />
    <datalist id={list}>
      {
        Array.isArray(datalistValues) && datalistValues.length > 0
          ? datalistValues.map((dataItem) => <option key={uuid()} value={dataItem.label} />)
          : []
      }
    </datalist>
    <div className="invalid-feedback">{value && value.trim() > 0 ? 'Campo incorrecto' : 'Campo requerido'}</div>
  </FormControlWrapper>
);

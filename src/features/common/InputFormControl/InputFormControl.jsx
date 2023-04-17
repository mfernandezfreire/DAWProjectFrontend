import { FormControlWrapper } from '../FormControlWrapper/FormControlWrapper';

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
  },
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

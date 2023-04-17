import { FormControlWrapper } from '../FormControlWrapper/FormControlWrapper';

export const TextAreaFormControl = (
  {
    customStyle,
    name,
    value,
    label,
    handleChange,
    readOnly,
  },
) => (
  <FormControlWrapper customStyle={customStyle}>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">{label}</label>
      <textarea
        className="form-control"
        id="description"
        name={name}
        value={value}
        onChange={handleChange}
        required
        disabled={readOnly}
      />
      <div className="invalid-feedback">{value.trim() > 0 ? 'Campo incorrecto' : 'Campo requerido'}</div>
    </div>
  </FormControlWrapper>
);

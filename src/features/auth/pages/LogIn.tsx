/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */

import { ONG_FORM_VALUES } from '../../../config/formValues';
import { useForm } from '../../../hooks/useForm';
import { InputFormControl } from '../../common/InputFormControl/InputFormControl';
import { SelectFormControl } from '../../common/SelectFormControl/SelectFormControl';
import { TextAreaFormControl } from '../../common/TextAreaFormControl/TextAreaFormControl';

export const LogIn = () => {
  const {
    cif,
    nombre,
    password,
    descripcion,
    calle,
    cp,
    onInputChange,
  } = useForm({
    cif: '',
    nombre: '',
    password: '',
    descripcion: '',
    calle: '',
    cp: '',
  });
  const {
    CIF,
    NAME,
    PASSWORD,
    TYPES,
    DESCRIPTION,
    INTERVENTION_SECTOR,
    ADDRESS,
    ZIP_CODE,
  } = ONG_FORM_VALUES;
  return (
    <>
      <h1 className="text-center mb-3">Crea una cuenta</h1>
      <div className="d-flex justify-content-center mb-5">
        <div className="btn-group btn-group-md">
          <button type="button" className="btn btn-secondary ">ONG</button>
          <button type="button" className="btn btn-secondary">Voluntario</button>
        </div>
      </div>
      <form>
        <InputFormControl
          type={CIF.type}
          name={CIF.name}
          value={cif}
          label={CIF.label}
          handleChange={onInputChange}
        />
        <InputFormControl
          type={NAME.type}
          name={NAME.name}
          value={nombre}
          label={NAME.label}
          handleChange={onInputChange}
        />
        <InputFormControl
          type={PASSWORD.type}
          name={PASSWORD.name}
          value={password}
          label={PASSWORD.label}
          handleChange={onInputChange}
        />
        <SelectFormControl
          type={TYPES.type}
          name={TYPES.name}
          values={TYPES.values}
          label={TYPES.label}
          handleChange={onInputChange}
        />
        <TextAreaFormControl
          type={DESCRIPTION.type}
          name={DESCRIPTION.name}
          label={DESCRIPTION.label}
          value={descripcion}
          handleChange={onInputChange}
        />
        <SelectFormControl
          type={INTERVENTION_SECTOR.type}
          name={INTERVENTION_SECTOR.name}
          values={INTERVENTION_SECTOR.values}
          label={INTERVENTION_SECTOR.label}
          handleChange={onInputChange}
        />
        <InputFormControl
          type={ADDRESS.type}
          name={ADDRESS.name}
          value={calle}
          label={ADDRESS.label}
          handleChange={onInputChange}
        />
        <InputFormControl
          type={ZIP_CODE.type}
          name={ZIP_CODE.name}
          value={cp}
          label={ZIP_CODE.label}
          handleChange={onInputChange}
        />
        <label htmlFor="browser" className="form-label">Choose your browser from the list:</label>
        <input className="form-control" list="browsers" name="browser" id="browser" autoComplete="off" />
        <datalist id="browsers">
          <option value="Edge" />
          <option value="Firefox" />
          <option value="Chrome" />
          <option value="Opera" />
          <option value="Safari" />
        </datalist>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </>
  );
};

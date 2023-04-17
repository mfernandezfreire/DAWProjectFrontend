import { InputFormControl } from '../InputFormControl/InputFormControl';
import { SelectFormControl } from '../SelectFormControl/SelectFormControl';
import { TextAreaFormControl } from '../TextAreaFormControl/TextAreaFormControl';
import { DataListFormControl } from '../DataListFormControl/DataListFormControl';

export const FormControlInputs = (
  {
    formType,
    formControlValue,
    formState,
    handleChange,
    readOnly,
  },
) => {
  const getValueTyped = () => {
    if (formType === 'ONG') {
      return formState[formControlValue.name];
    }
    if (formType === 'Volunteer') {
      return formState[formControlValue.name];
    }
    if (formType === 'Activitie') {
      return formState[formControlValue.name];
    }
    return formState[formControlValue.name];
  };
  const valueTyped = getValueTyped();
  switch (formControlValue?.type) {
    case 'text':
    case 'number':
    case 'password':
    case 'email':
      return (
        <InputFormControl
          key={formControlValue.name}
          type={formControlValue.type}
          name={formControlValue.name}
          pattern={formControlValue.pattern}
          value={valueTyped}
          label={formControlValue.label}
          handleChange={handleChange}
          readOnly={readOnly}
        />
      );
    case 'textarea':
      return (
        <TextAreaFormControl
          key={formControlValue.name}
          type={formControlValue.type}
          name={formControlValue.name}
          label={formControlValue.label}
          value={valueTyped}
          handleChange={handleChange}
          readOnly={readOnly}
        />
      );
    case 'select':
      return (
        <SelectFormControl
          key={formControlValue.name}
          type={formControlValue.type}
          name={formControlValue.name}
          value={valueTyped}
          selectValues={formControlValue.selectValues}
          label={formControlValue.label}
          handleChange={handleChange}
          readOnly={readOnly}
        />
      );
    case 'datalist':
      return (
        <DataListFormControl
          key={formControlValue.name}
          type={formControlValue.type}
          name={formControlValue.name}
          label={formControlValue.label}
          list={formControlValue.list}
          value={
            formType === 'ONG'
              ? formState[formControlValue.name]
              : formState[formControlValue.name]
          }
          datalistValues={formControlValue.datalistValues}
          handleChange={handleChange}
          readOnly={readOnly}
        />
      );
    default:
      return <p>Error en el tipo de input</p>;
  }
};

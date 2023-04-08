import { ChangeEventHandler } from 'react';
import { ONG } from '../../../store/slices';
import { FormControlValues } from '../../../config/formValues';
import { InputFormControl } from '../InputFormControl/InputFormControl';
import { SelectFormControl } from '../SelectFormControl/SelectFormControl';
import { TextAreaFormControl } from '../TextAreaFormControl/TextAreaFormControl';
import { DataListFormControl } from '../DataListFormControl/DataListFormControl';
import { Volunteer } from '../../../store/slices/auth/authSlice';
import { Activitie } from '../../../store/slices/activies';

interface FormControlProps {
  formType: 'ONG' | 'Volunteer' | 'Activitie';
  formControlValue: FormControlValues;
  formState: ONG | Volunteer | Activitie;
  handleChange: ChangeEventHandler<HTMLInputElement>
  | ChangeEventHandler<HTMLSelectElement>
  | ChangeEventHandler<HTMLTextAreaElement>;
  readOnly?: boolean;
}

export const FormControlInputs = (
  {
    formType,
    formControlValue,
    formState,
    handleChange,
    readOnly,
  }: FormControlProps,
) => {
  const getValueTyped = () => {
    if (formType === 'ONG') {
      return (formState as ONG)[formControlValue.name as keyof ONG];
    }
    if (formType === 'Volunteer') {
      return (formState as Volunteer)[formControlValue.name as keyof Volunteer];
    }
    if (formType === 'Activitie') {
      return (formState as Activitie)[formControlValue.name as keyof Activitie];
    }
    return (formState as ONG)[formControlValue.name as keyof ONG];
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
          handleChange={handleChange as ChangeEventHandler<HTMLInputElement>}
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
          handleChange={handleChange as ChangeEventHandler<HTMLTextAreaElement>}
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
          handleChange={handleChange as ChangeEventHandler<HTMLSelectElement>}
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
              ? (formState as ONG)[formControlValue.name as keyof ONG]
              : (formState as Volunteer)[formControlValue.name as keyof Volunteer]
          }
          datalistValues={formControlValue.datalistValues}
          handleChange={handleChange as ChangeEventHandler<HTMLInputElement>}
          readOnly={readOnly}
        />
      );
    default:
      return <p>Error en el tipo de input</p>;
  }
};

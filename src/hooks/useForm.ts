import { useState } from 'react';

export const useForm = <T>(initialForm: T) => {
  const [formState, setFormState] = useState(initialForm);
  const [formClassValidation, setFormClassValidation] = useState('pepe');

  const handleStateChange = ({ target }: any) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const changeFormClassValidation = (isError: boolean) => {
    if (isError) {
      console.log('entra');
      setFormClassValidation('was-validated');
      return;
    }
    setFormClassValidation('');
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    formClassValidation,
    changeFormClassValidation,
    handleStateChange,
    onResetForm,
  };
};

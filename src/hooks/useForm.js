import { useState } from 'react';

export const useForm = (initialForm) => {
  const [formState, setFormState] = useState(initialForm);
  const [formClassValidation, setFormClassValidation] = useState('pepe');

  const handleStateChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const changeFormClassValidation = (isError) => {
    if (isError) {
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

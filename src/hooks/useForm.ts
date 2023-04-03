import { useState } from 'react';
import { ONG } from '../store/slices';

export const useForm = (initialForm: {} | ONG = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }: any) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};

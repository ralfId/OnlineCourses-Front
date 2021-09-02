import { useState } from "react";

const initState = {
  errors: {},
};
export const useValidationForm = (initialState = initState) => {
  const [errors, setErrors] = useState(initialState);

  const reset = () => {
    setErrors(initialState);
  };

  const setFieldsErros = (error = {}) => {
      setErrors({...errors, error});
  };

  return [ errors, setFieldsErros, reset]
};

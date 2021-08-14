import { useState } from "react";

export const useForms = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };
  const setFormValues = (data) => {
    setValues(data );
  };

  const handleOnChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });

  };

  return [values, handleOnChange, setFormValues, reset];
};

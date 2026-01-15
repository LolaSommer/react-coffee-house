import { useState } from 'react';

export function useForm(initialValues, schema) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    const fieldSchema = schema[name];

    if (!fieldSchema) {
      setValues(prev => ({ ...prev, [name]: value }));
      return;
    }

    const sanitizedValue = fieldSchema.sanitize
      ? fieldSchema.sanitize(value)
      : value;

    setValues(prev => ({
      ...prev,
      [name]: sanitizedValue,
    }));
  }

  function validateForm() {
    const newErrors = {};

    Object.keys(schema).forEach(field => {
      const rules = schema[field];
      const value = values[field];

      if (rules.required && !value) {
        newErrors[field] = 'Required field';
        return;
      }

      if (rules.validate && value && !rules.validate(value)) {
        newErrors[field] = 'Invalid value';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const isValid = Object.keys(errors).length === 0;

  return {
    values,
    errors,
    isValid,
    handleChange,
    validateForm,
    setValues
  };
}

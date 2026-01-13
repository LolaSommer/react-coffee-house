import { onlyDigits, onlyLetters, validLength } from "../utils/validators";

export const addressSchema = {
  name: {
    sanitize: onlyLetters,
    required: true,
    validate: (value) => validLength(value, 2, 40),
  },

  ZIP: {
    sanitize: onlyDigits,
    required: true,
    validate: (value) => validLength(value, 4, 10),
  },

  city: {
    sanitize: onlyLetters,
    required: true,
    validate: (value) => validLength(value, 2, 40),
  },

  street: {
    sanitize: null, 
    required: true,
    validate: (value) => validLength(value, 2, 60),
  },

  Apartment: {
    sanitize: null,
    required: false,
  },
};

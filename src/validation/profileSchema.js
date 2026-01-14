import { onlyLetters, validLength,onlyDigits,isEmail,sanitizeBirth,isValidBirth} from '../utils/validators';

export const profileSchema = {
  name: {
    sanitize: onlyLetters,
    required: true,
    validate: (v) => validLength(v, 2, 40),
  },

  email: {
    sanitize: null,
  required: true,
  validate: isEmail,
  },

  phone: {
    sanitize: onlyDigits,
    required: true,
    validate: (value) => validLength(value, 2, 40),
  },

   birth: {
    sanitize: sanitizeBirth,
    required: false,
    validate: isValidBirth,
  },
};


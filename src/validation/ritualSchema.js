import { onlyLetters, validLength,onlyDigits,isEmail,sanitizeBirth,isValidBirth} from '../utils/validators';
import {phoneSchema} from './phoneSchema';
export const ritualSchema = {
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
    ...phoneSchema.tel
  },
  ritual: {
  required: true,
}
}
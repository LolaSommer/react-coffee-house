import { sanitizePhone, isValidPhone } from '../utils/validators';

export const phoneSchema = {
  tel: {
    sanitize: sanitizePhone,
    required: true,
    validate: isValidPhone,
  },
};

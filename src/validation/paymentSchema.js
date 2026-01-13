import {onlyLetters, validLength,  expirySanitize,
  validExpiry,digitsWithLimit } from "../utils/validators";
export const paymentSchema = {
cardname:{
    sanitize: onlyLetters,
    required: true,
    validate: (value) => validLength(value, 2, 40),
},
card:{
    sanitize: (value) => digitsWithLimit(value,16),
    required: true,
    validate: (value) => validLength(value, 12, 16),
},
date:{
sanitize: expirySanitize,
required: true,
validate:validExpiry
},
CVC: {
  sanitize: (value) => digitsWithLimit(value, 3),
  required: true,
  validate: (value) => validLength(value, 3, 3),
},

}
export function validLength(str, min, max) {
  if (typeof str !== 'string') return false;
  return str.length >= min && str.length <= max;
}
export function onlyDigits(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/\D/g, '');
}

export function onlyLetters(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/[^a-zA-Zа-яА-Я\s-]/g, '');
}

export function expirySanitize(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/\D/g, '').slice(0, 4);
}
export function validExpiry(value) {
  if (value.length !== 4) return false;

  const month = Number(value.slice(0, 2));
  const year = Number(value.slice(2));

  if (month < 1 || month > 12) return false;

  return true;
}
export function digitsWithLimit(value, maxLength) {
  if (typeof value !== 'string') return '';
  return value.replace(/\D/g, '').slice(0, maxLength);
}
export function isEmail(value) {
  if (typeof value !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

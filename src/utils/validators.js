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

export function sanitizePhone(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/\D/g, '').slice(0, 15);
}
export function isValidPhone(value) {
  if (typeof value !== 'string') return false;
  return value.length >= 10 && value.length <= 15;
}
export function sanitizeBirth(value) {
  if (typeof value !== 'string') return '';
  let v = value.replace(/[^\d.]/g, '');
  if (v.length > 2 && v[2] !== '.') {
    v = v.slice(0, 2) + '.' + v.slice(2);
  }
  if (v.length > 5 && v[5] !== '.') {
    v = v.slice(0, 5) + '.' + v.slice(5);
  }

  return v.slice(0, 10);
}

export function isValidBirth(value) {
  if (typeof value !== 'string') return false;
  if (value.length !== 10) return false;

  const [dd, mm, yyyy] = value.split('.');
  const day = Number(dd);
  const month = Number(mm);
  const year = Number(yyyy);

  if (!day || !month || !year) return false;
  if (day < 1 || day > 31) return false;
  if (month < 1 || month > 12) return false;
  if (year < 1900 || year > new Date().getFullYear()) return false;

  return true;
}


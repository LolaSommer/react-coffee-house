export function getAuthToken() {
  return localStorage.getItem('token');
}

export function clearAuth() {
  localStorage.removeItem('token');
  localStorage.removeItem('userData');
}

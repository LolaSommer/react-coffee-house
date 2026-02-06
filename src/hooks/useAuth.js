import { useState, useEffect } from 'react';
import { getAuthToken,clearAuth } from '../utils/auth'
export function useAuth() {
  const [isAuth, setIsAuth] = useState(false);
  const [authStep, setAuthStep] = useState('phone');

  const goToStep = (step) => {
    setAuthStep(step);
  };

  const logout = () => {
  clearAuth();
  setIsAuth(false);
  setAuthStep('phone');
};
  useEffect(() => {
  const token = getAuthToken();

  if (token) {
    setIsAuth(true);
  }
}, []);

  return {
    isAuth,
    authStep,
    goToStep,
    setIsAuth,
    logout,
  };
}



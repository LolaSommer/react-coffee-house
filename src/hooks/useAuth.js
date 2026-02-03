import { useState } from 'react';

export function useAuth() {
  const [isAuth, setIsAuth] = useState(false);
  const [authStep, setAuthStep] = useState('phone');

  const goToStep = (step) => {
    setAuthStep(step);
  };

  const logout = () => {
    setIsAuth(false);
    setAuthStep('phone');
  };

  return {
    isAuth,
    authStep,
    goToStep,
    setIsAuth,
    logout,
  };
}



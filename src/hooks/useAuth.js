import { useState } from 'react';

export function useAuth() {
  const [isAuth, setIsAuth] = useState(false);
  const [authStep, setAuthStep] = useState('phone');
  const goToCodeStep = () => {
    setAuthStep('code');
  };

  const logout = () => {
    setIsAuth(false);
  };

  return {
    isAuth,
    authStep,
    goToCodeStep,
    setIsAuth,
    logout,
  };
}


import { useState } from 'react';

export function useAuth() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [authStep, setAuthStep] = useState('phone');

  const openAuth = () => {
    setIsAuthOpen(true);
    setAuthStep('phone');
  };

  const closeAuth = () => {
    setIsAuthOpen(false);
  };

  const goToCodeStep = () => {
    setAuthStep('code');
  };

  const logout = () => {
    setIsAuth(false);
  };

  return {
    isAuthOpen,
    isAuth,
    authStep,
    openAuth,
    closeAuth,
    goToCodeStep,
    setIsAuth,
    logout,
  };
}


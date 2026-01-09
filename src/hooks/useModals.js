import { useState,useEffect } from 'react';

export function useModals() {
  const [activeModal, setActiveModal] = useState(null);
 
  const openModal = (name) => setActiveModal(name);
  const closeModal = () => setActiveModal(null);
  const isOpen = (name) => activeModal === name;
  
 useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [activeModal]);

  return { activeModal, openModal, closeModal, isOpen };
}


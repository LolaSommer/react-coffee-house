import { useState } from 'react';

export function useModals() {
  const [activeModal, setActiveModal] = useState(null);
 
  const openModal = (name) => setActiveModal(name);
  const closeModal = () => setActiveModal(null);
  const isOpen = (name) => activeModal === name;

  return { activeModal, openModal, closeModal, isOpen };
}


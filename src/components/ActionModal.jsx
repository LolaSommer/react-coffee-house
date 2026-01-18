import './ActionModal.scss';
import { useEffect } from 'react';
function ActionModal({onClose,action,data}) {
useEffect(() => {
  const handleKeyUp = (e) => {


    if (e.code === 'Escape') {
      onClose();
    }
  };

  document.addEventListener('keyup', handleKeyUp);

  return () => {
    document.removeEventListener('keyup', handleKeyUp);
  };
}, [onClose]);



return (
<>
<div className='action'>
    <div className='action__overlay' onClick={onClose}></div>
    <div className='action__window' role='dialog' aria-modal="true">
      <div className="action__line">
        <button className="action__close" aria-label="close" onClick={onClose}>
        <svg className="action__icon"><use href="#icon-close"></use></svg>
    </button>
    </div>
    <div className='action__wrapper'>
      <h2 className='action__title'>{action.title}</h2>
      <p className='action__text'>{data.fullDescription}</p>
      <p className='action__promo'>{data.promo}</p>
      <p className='action__note'>{data.note}</p>
    </div>
    </div>
</div>

</>
)

}
export default ActionModal;
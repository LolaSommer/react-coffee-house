import './SocialModal.scss';
import {social} from '../data/social';

function SocialModal({onClose}) {

return (
    <>
   <div className="social__modal" role="dialog" aria-modal="true">
                 <div className="social__overlay"onClick={onClose}></div>
                 <div className="social__line">
                 <button className="social__close" type='button' aria-label="close" onClick={onClose}>
                      <svg className="social__icon"><use href="#icon-close"></use></svg>
                      </button>
                 <div className="social__window">
                <h2 className="social__title">Follow Aura Brew</h2>
                <div className='social__group'>
                  {social.map((soc) => (
  <a  key={soc.id}
    href={soc.link}
    className="social"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg className="social__img">
      <use href={soc.icon} />
    </svg>
  </a>
))}
       </div>
                </div>
                </div>
                </div>
    </>
)

}
export default SocialModal;
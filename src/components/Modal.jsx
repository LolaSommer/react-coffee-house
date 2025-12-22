import './modal.scss';
import aura from '../assets/aura.webp';
import sumatra from '../assets/sumatra.webp';
import kenia from '../assets/kenia.webp';
import columbian from '../assets/columbian.webp';
import ephiopia from '../assets/ephiopia.webp';
import brazil from '../assets/brazil.webp';
import silken from '../assets/silken.webp'

function Modal() {
  return <div className='modal modal--open modal-info'>
    <div className='modal__wrapper'>
      <div className='modal__window' role="dialog" aria-modal="true" aria-labelledby="modal__title">
      <div className='modal__system'>
        <div className='modal__img'>
          <picture>
          <source srcSet={silken} type="image/webp" />
          <img className="modal__pic" src={silken} alt="Aura Brew coffee" />
        </picture>
        <p className='modal__composition'></p>
        </div>
        <div className='modal__block'>
        <div className='modal__chois'>
          <div className='modal__name'>Aura Brew</div>
          <picture>
            <source srcSet={aura} type="image/webp" />
          <img className="modal__pic" src={aura} alt="Aura Brew coffee" />
          </picture>
          <p className='modal__country'>Blend</p>
          <p className='modal__description'></p>
          <p className='modal__time'></p> 
        </div>
         <div className='modal__chois'>
          <div className='modal__name'>Shadow Calm</div>
          <picture>
            <source srcSet={sumatra} type="image/webp" />
          <img className="modal__pic" src={sumatra} alt="Aura Brew coffee" />
          </picture>
          <p className='modal__country'>Sumatra</p>
          <p className='modal__description'></p>
          <p className='modal__time'></p> 
        </div>
         <div className='modal__chois'>
          <div className='modal__name'>Electric Flow</div>
          <picture>
            <source srcSet={kenia} type="image/webp" />
          <img className="modal__pic" src={kenia} alt="Aura Brew coffee" />
          </picture>
          <p className='modal__country'>Kenya</p>
          <p className='modal__description'></p>
          <p className='modal__time'></p> 
        </div>
         <div className='modal__chois'>
          <div className='modal__name'>Grounded Heart</div>
          <picture>
            <source srcSet={columbian} type="image/webp" />
          <img className="modal__pic" src={columbian} alt="Aura Brew coffee" />
          </picture>
          <p className='modal__country'>Columbia</p>
          <p className='modal__description'></p>
          <p className='modal__time'></p> 
        </div>
         <div className='modal__chois'>
          <div className='modal__name'>Bright Mind</div>
          <picture>
            <source srcSet={ephiopia} type="image/webp" />
          <img className="modal__pic" src={ephiopia} alt="Aura Brew coffee" />
          </picture>
          <p className='modal__country'>Ethiopia</p>
          <p className='modal__description'><span>Effect: </span>clarity & focus</p>
          <p className='modal__time'><span>Best for </span>morning · creativity</p> 
        </div>
         <div className='modal__chois'>
          <div className='modal__name'>Deep Body</div>
          <picture>
            <source srcSet={brazil} type="image/webp" />
          <img className="modal__pic" src={brazil} alt="Aura Brew coffee" />
          </picture>
          <p className='modal__country'>Brazil</p>
          <p className='modal__description'></p>
          <p className='modal__time'></p> 
        </div>
        </div>
      </div>
      </div>

    </div>
  </div> 
  
}

export default Modal;

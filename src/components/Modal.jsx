import './modal.scss';
import aura from '../assets/aura.webp';
import sumatra from '../assets/sumatra.webp';
import kenia from '../assets/kenia.webp';
import columbian from '../assets/columbian.webp';
import ephiopia from '../assets/ephiopia.webp';
import brazil from '../assets/brazil.webp';
import black from '../assets/black.webp';
import milk from '../assets/milk.webp';
import empty from '../assets/empty.webp';
import moon from '../assets/moon.webp';
import day from '../assets/day.webp';
import sun from '../assets/sun.webp';
import ground from '../assets/ground.webp';
import nomilk from '../assets/nomilk.webp';
function Modal() {
  return <div className='modal modal--open modal-info'>
    <div className='modal__overlay'></div>
    <div className='modal__wrapper'>
      <div className='modal__window' role="dialog" aria-modal="true" aria-labelledby="modal__title">
     <div className='modal__img'>
          <picture>
          <source srcSet={black} type="image/webp" />
          <img className="modal__coffe-pic" src={black} alt="Aura Brew coffee" />
        </picture>
        <p className='modal__composition'></p>
        </div>
      <div className='modal__system'>
       <button className='modal__back'>back</button>
       <h2 className='modal__title'>Tune Your Brew</h2>
        <div className='modal__block'>
        <div className='modal__chois'>
          <div className='modal__name'>Aura Brew</div>
          <picture>
            <source srcSet={aura} type="image/webp" />
          <img className="modal__pic" src={aura} alt="Aura Brew coffee" />
          </picture>
          <p className='modal__country'>Blend</p>
          <p className='modal__description'><span>Effect: </span>gentle balance</p>
          <p className='modal__time'><span>Best for: </span>anytime · emotional pause</p> 
        </div>
         <div className='modal__chois'>
          <div className='modal__name'>Shadow Calm</div>
          <picture>
            <source srcSet={sumatra} type="image/webp" />
          <img className="modal__pic" src={sumatra} alt="Aura Brew coffee" />
          </picture>
          <p className='modal__country'>Sumatra</p>
          <p className='modal__description'><span>Effect: </span>depth & stillness</p>
          <p className='modal__time'><span>Best for: </span>evening · slowing down</p> 
        </div>
         <div className='modal__chois'>
          <div className='modal__name'>Electric Flow</div>
          <picture>
            <source srcSet={kenia} type="image/webp" />
          <img className="modal__pic" src={kenia} alt="Aura Brew coffee" />
          </picture>
          <p className='modal__country'>Kenya</p>
          <p className='modal__description'><span>Effect: </span>energy & sharpness</p>
          <p className='modal__time'><span>Best for: </span>morning · action</p> 
        </div>
         <div className='modal__chois'>
          <div className='modal__name'>Grounded Heart</div>
          <picture>
            <source srcSet={columbian} type="image/webp" />
          <img className="modal__pic" src={columbian} alt="Aura Brew coffee" />
          </picture>
          <p className='modal__country'>Columbia</p>
          <p className='modal__description'><span>Effect: </span>warm calm & balance</p>
          <p className='modal__time'><span>Best for: </span>daytime · connection</p>
        </div>
         <div className='modal__chois'>
          <div className='modal__name'>Bright Mind</div>
          <picture>
            <source srcSet={ephiopia} type="image/webp" />
          <img className="modal__pic" src={ephiopia} alt="Aura Brew coffee" />
          </picture>
          <p className='modal__country'>Ethiopia</p>
          <p className='modal__description'><span>Effect: </span>clarity & focus</p>
          <p className='modal__time'><span>Best for: </span>morning · creativity</p> 
        </div>
         <div className='modal__chois'>
          <div className='modal__name'>Deep Body</div>
          <picture>
            <source srcSet={brazil} type="image/webp" />
          <img className="modal__pic" src={brazil} alt="Aura Brew coffee" />
          </picture>
          <p className='modal__country'>Brazil</p>
          <p className='modal__description'><span>Effect: </span>grounding & fullness</p>
          <p className='modal__time'><span>Best for: </span>after meals · steady work</p> 
        </div>
        </div>
             <div className='modal__milk'>
        <h3 className='modal__milk-title'></h3>
        <div className='modal__milk-group'>
           <picture>
            <source srcSet={nomilk} type="image/webp" />
          <img className="modal__milk-pic" src={nomilk} alt="Aura Brew coffee" />
          </picture>
          <p className='modal__milk-type'>Pure ritual</p>
          </div>
        <div className='modal__milk-group'>
          <p className='modal__milk-name'>Grounded</p>
        <picture>
            <source srcSet={milk} type="image/webp" />
          <img className="modal__milk-pic" src={milk} alt="Aura Brew coffee" />
          </picture>
          <p className='modal__milk-type'>Classic</p>
          </div>
           <div className='modal__milk-group'>
          <p className='modal__milk-name'>Gently</p>
           <picture>
            <source srcSet={empty} type="image/webp" />
          <img className="modal__milk-pic" src={empty} alt="Aura Brew coffee" />
          </picture>
           <p className='modal__milk-type'>Lactose-free</p>
          </div>
           <div className='modal__milk-group'>
          <p className='modal__milk-name'>Balanced</p>
           <picture>
            <source srcSet={empty} type="image/webp" />
          <img className="modal__milk-pic" src={empty} alt="Aura Brew coffee" />
          </picture>
          <p className='modal__milk-type'> Oat</p>
          </div>
            <div className='modal__milk-group'>
          <p className='modal__milk-name'>Clear</p>
           <picture>
            <source srcSet={empty} type="image/webp" />
          <img className="modal__milk-pic" src={empty} alt="Aura Brew coffee" />
          </picture>
          <p className='modal__milk-type'>Almond</p>
          </div>
      </div>
      <h2 className='modal__strong-title'>Play your card</h2>
      <div className='modal__strong'>
        
         <div className='modal__strong-group'>
           <picture>
            <source srcSet={moon} type="image/webp" />
          <img className="modal__strong-pic" src={moon} alt="Aura Brew coffee" />
          </picture>
          <p className='modal__strong-type'>Zero caffeine. For calm evenings and inner quiet.</p>
          </div>
          <div className='modal__strong-group'>
           <picture>
            <source srcSet={sun} type="image/webp" />
          <img className="modal__strong-pic" src={sun} alt="Aura Brew coffee" />
          </picture>
          <p className='modal__strong-type'>Light roast. Gentle focus without pressure.</p>
          </div>
           <div className='modal__strong-group'>
           <picture>
            <source srcSet={day} type="image/webp" />
          <img className="modal__strong-pic" src={day} alt="Aura Brew coffee" />
          </picture>
          <p className='modal__strong-type'>Medium strength. Calm energy and grounded flow.</p>
          </div>
           <div className='modal__strong-group'>
           <picture>
            <source srcSet={ground} type="image/webp" />
          <img className="modal__strong-pic" src={ground} alt="Aura Brew coffee" />
          </picture>
          <p className='modal__strong-type'>Deep roast. For endurance and embodied power.</p>
          </div>
      </div>
      <button type="button" className='modal__order'>Summon the Cup</button>
      </div>
 

      </div>

    </div>
  </div> 
  
}

export default Modal;

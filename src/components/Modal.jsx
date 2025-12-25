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
function Modal({onClose}) {
  return <div className='modal modal--open modal-info'>
    <div className='modal__overlay' onClick={onClose}></div>
    <div className='modal__wrapper'>
      <div className='modal__window' role="dialog" aria-modal="true" aria-labelledby="modal__title">
     <div className='modal__img'>
          <picture>
          <source srcSet={black} type="image/webp" />
          <img className="modal__coffe-pic" src={black} alt="Clear glass cup with pure black coffee" />
        </picture>
        <p className='modal__composition'></p>
        </div>
      <div className='modal__system'>
       <button className='modal__back'onClick={onClose}>back</button>
       <h2 className='modal__title'>Tune Your Brew</h2>
        <div className='modal__block'>
        <div className='modal__chois' data-blend='aura'>
          <div className='modal__name'>Aura Brew</div>
          <picture>
            <source srcSet={aura} type="image/webp" />
          <img className="modal__pic" src={aura} alt="Aura Brew signature blend with floral and caramel notes" />
          </picture>
          <p className='modal__country'>Blend</p>
          <p className='modal__description'><span>Effect: </span>gentle balance</p>
          <p className='modal__time'><span>Best for: </span>anytime · emotional pause</p> 
        </div>
         <div className='modal__chois' data-blend='sumatra'>
          <div className='modal__name'>Shadow Calm</div>
          <picture>
            <source srcSet={sumatra} type="image/webp" />
          <img className="modal__pic" src={sumatra} alt="Sumatra coffee blend with deep earthy and spiced notes" />
          </picture>
          <p className='modal__country'>Sumatra</p>
          <p className='modal__description'><span>Effect: </span>depth & stillness</p>
          <p className='modal__time'><span>Best for: </span>evening · slowing down</p> 
        </div>
         <div className='modal__chois' data-blend='kenya'>
          <div className='modal__name'>Electric Flow</div>
          <picture>
            <source srcSet={kenia} type="image/webp" />
          <img className="modal__pic" src={kenia} alt="Kenya coffee blend with bright fruity and wine-like notes" />
          </picture>
          <p className='modal__country'>Kenya</p>
          <p className='modal__description'><span>Effect: </span>energy & sharpness</p>
          <p className='modal__time'><span>Best for: </span>morning · action</p> 
        </div>
         <div className='modal__chois' data-blend='colombia'>
          <div className='modal__name'>Grounded Heart</div>
          <picture>
            <source srcSet={columbian} type="image/webp" />
          <img className="modal__pic" src={columbian} alt="Colombia coffee blend with caramel and milk chocolate notes" />
          </picture>
          <p className='modal__country'>Colombia</p>
          <p className='modal__description'><span>Effect: </span>warm calm & balance</p>
          <p className='modal__time'><span>Best for: </span>daytime · connection</p>
        </div>
         <div className='modal__chois' data-blend='ethiopia'>
          <div className='modal__name'>Bright Mind</div>
          <picture>
            <source srcSet={ephiopia} type="image/webp" />
          <img className="modal__pic" src={ephiopia} alt="Ethiopia coffee blend with citrus and floral notes" />
          </picture>
          <p className='modal__country'>Ethiopia</p>
          <p className='modal__description'><span>Effect: </span>clarity & focus</p>
          <p className='modal__time'><span>Best for: </span>morning · creativity</p> 
        </div>
         <div className='modal__chois' data-blend='brazil'>
          <div className='modal__name'>Deep Body</div>
          <picture>
            <source srcSet={brazil} type="image/webp" />
          <img className="modal__pic" src={brazil} alt="Brazil coffee blend with dark chocolate and nutty notes" />
          </picture>
          <p className='modal__country'>Brazil</p>
          <p className='modal__description'><span>Effect: </span>grounding & fullness</p>
          <p className='modal__time'><span>Best for: </span>after meals · steady work</p> 
        </div>
        </div>
             <div className='modal__milk'>
        <h3 className='modal__milk-title'></h3>
        <div className='modal__milk-group' data-milk='pure'>
           <picture>
            <source srcSet={nomilk} type="image/webp" />
          <img className="modal__milk-pic" src={nomilk} alt="Coffee without milk or syrup" />
          </picture>
          <p className='modal__milk-type'>Pure ritual</p>
          </div>
        <div className='modal__milk-group' data-milk='classic'>
          <p className='modal__milk-name'>Grounded</p>
        <picture>
            <source srcSet={milk} type="image/webp" />
          <img className="modal__milk-pic" src={milk} alt="Coffee with regular dairy milk" />
          </picture>
          <p className='modal__milk-type'>Classic</p>
          </div>
           <div className='modal__milk-group' data-milk='lactose-free'>
          <p className='modal__milk-name'>Gently</p>
           <picture>
            <source srcSet={empty} type="image/webp" />
          <img className="modal__milk-pic" src={empty} alt="Coffee with lactose-free milk" />
          </picture>
           <p className='modal__milk-type'>Lactose-free</p>
          </div>
           <div className='modal__milk-group' data-milk='oat'>
          <p className='modal__milk-name'>Balanced</p>
           <picture>
            <source srcSet={empty} type="image/webp" />
          <img className="modal__milk-pic" src={empty} alt="Coffee with oat milk" />
          </picture>
          <p className='modal__milk-type'> Oat</p>
          </div>
            <div className='modal__milk-group' data-milk='almond'>
          <p className='modal__milk-name'>Clear</p>
           <picture>
            <source srcSet={empty} type="image/webp" />
          <img className="modal__milk-pic" src={empty} alt="Coffee with almond milk" />
          </picture>
          <p className='modal__milk-type'>Almond</p>
          </div>
      </div>
      <h2 className='modal__strong-title'>Play your card</h2>
      <div className='modal__strong'>
        
         <div className='modal__strong-group' data-strong='zero'>
           <picture>
            <source srcSet={moon} type="image/webp" />
          <img className="modal__strong-pic" src={moon} alt="Decaffeinated coffee with a gentle profile" />
          </picture>
          <p className='modal__strong-type'>Zero caffeine. For calm evenings and inner quiet.</p>
          </div>
          <div className='modal__strong-group' data-strong='light'>
           <picture>
            <source srcSet={sun} type="image/webp" />
          <img className="modal__strong-pic" src={sun} alt="Light roast coffee with a bright and soft taste" />
          </picture>
          <p className='modal__strong-type'>Light roast. Gentle focus without pressure.</p>
          </div>
           <div className='modal__strong-group' data-strong='medium'>
           <picture>
            <source srcSet={day} type="image/webp" />
          <img className="modal__strong-pic" src={day} alt="Medium roast coffee with a balanced flavor" />
          </picture>
          <p className='modal__strong-type'>Medium strength. Calm energy and grounded flow.</p>
          </div>
           <div className='modal__strong-group' data-strong='strong'>
           <picture>
            <source srcSet={ground} type="image/webp" />
          <img className="modal__strong-pic" src={ground} alt="Strong roast coffee with a bold and intense taste" />
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

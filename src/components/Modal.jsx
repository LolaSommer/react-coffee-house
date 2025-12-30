import './modal.scss';
import { useState } from 'react';
import milk from '../assets/milk.webp';
import time from '../assets/time.webp';
import nomilk from '../assets/nomilk.webp';
import black from '../assets/black.webp';
import { countryOptions } from '../data/countries';
const countries = Object.values(countryOptions);
import { milkOptions } from '../data/milkOptions';
const milks = Object.values(milkOptions);
import {strenghtOptions} from '../data/strenghtOptions.js';
const strongOptions = Object.values(strenghtOptions);
import {useEffect} from 'react';
import { coffeeProducts } from '../data/coffeeProducts.js';

function Modal({type,item,onClose,onAddToCart}) {


function handleAddToCartClick() {
  const meta = selectedCountry || selectedMilk || selectedStrength
    ? `${selectedCountry} · ${selectedMilk} · ${selectedStrength}`
    : undefined;
  const cartItem = {
    id: crypto.randomUUID(),
    title: currentItem.title,
    image: currentItem.image,
    price: currentItem.price,
    quantity: 1,
    meta:meta,
    type:currentItem.type,
    country: selectedCountry,
    milk: selectedMilk,
    strength: selectedStrength,
  };
  onAddToCart(cartItem);
  onClose();
}

  const [selectedCountry, setSelectedCountry] = useState(null);
const [selectedMilk, setSelectedMilk] = useState(null);
const [selectedStrength, setSelectedStrength] = useState(null);
const [selectedItem, setSelectedItem] = useState(null);
useEffect(() => {
  if (!item) return;

  if (item.defaultMilk) {
    setSelectedMilk(item.defaultMilk);
  } else {
    setSelectedMilk(null);
  }
}, [item]);
const currentItem = selectedItem || item;

  if(!currentItem) return null;
  return <div className='modal modal--open modal-info'>
    <div className='modal__overlay' onClick={onClose}></div>
    <div className='modal__wrapper'>
      <div className='modal__window' role="dialog" aria-modal="true" aria-labelledby="modal__title">
     <div className='modal__img'>
          <picture>
          <source srcSet={currentItem.image} type="image/webp" />
          <img className="modal__coffe-pic"    src={currentItem.image} alt="Clear glass cup with pure black coffee" />
        </picture>
        <div className='modal__description-group'>
        <h2 className='modal__coffee-title'>{currentItem.title}</h2>
        <p className='modal__composition'>{currentItem.description}</p>
        <p className='modal__ingredients'>
          {currentItem.ingredients.map((ingredient, index) => (
           <span key={index}>
           {ingredient}
         {index < currentItem.ingredients.length - 1 && ', '}
        </span>))}</p>
        </div>
        </div>
      <div className='modal__system'>
       <button className='modal__back'onClick={onClose}>back</button>
  {type === 'coffee' && (
    <>
   <h2 className='modal__title'>Tune Your Brew</h2>
         <div className="modal__block">
  {countries.map((country) => (
    <div
      key={country.id}
      className={`modal__chois ${
        selectedCountry === country.id ? 'modal__chois--active' : ''
      }`}
      onClick={() => setSelectedCountry(country.id)}
    >
      <div className="modal__name">{country.name}</div>

      <picture className='modal__pic-block'>
        <img className="modal__pic" src={country.image} alt={country.name} />
      </picture>

      <p className="modal__country">{country.country}</p>
      <p className="modal__description">
        <span>Effect: </span>{country.effect}
      </p>
      <p className="modal__time">
        <span>Best for: </span>{country.time}
      </p>
    </div>
  ))}
</div>
             <div className='modal__milk'> 
        <h3 className='modal__milk-title'></h3>
        <div  className={`modal__bean-group ${
    selectedMilk === null ? 'modal__bean-group--active' : ''
  }`}
  onClick={() => {
setSelectedItem(coffeeProducts.pure);
setSelectedMilk(null);
setSelectedStrength(null);

  }}>
           <picture>
            <source srcSet={nomilk} type="image/webp" />
          <img className="modal__bean-pic" src={nomilk} alt="Coffee without milk or syrup" />
          </picture>
          <p className='modal__bean-type'>Pure ritual</p>
          </div>
        <div className="modal__milk">
{milks.map((milk) => {
  const isActive = selectedMilk === milk.id;

  return (
    <div
      key={milk.id}
      className={`modal__milk-group ${
        isActive ? 'modal__milk-group--active' : ''
      }`}
      onClick={() => {
  setSelectedMilk(milk.id);
  setSelectedItem(null);
}}
    >
      <p className="modal__milk-name">{milk.title}</p>

      <img
        className="modal__milk-pic"
        src={isActive ? milk.imageFull : milk.imageEmpty}
        alt={milk.title}
      />

      <p className="modal__milk-type">{milk.description}</p>
    </div>
  );
})}

</div>
      </div>
      <h2 className='modal__strong-title'>Play your card</h2>
      <div className='modal__strong'>
         {strongOptions.map((strong) => (
    <div
      key={strong.id}
      className={`modal__strong-group ${
        selectedStrength === strong.id ? 'modal__strong-group--active' : ''
      }`}
      onClick={() => setSelectedStrength(strong.id)}>
                 <picture>
                  <source srcSet={strong.image} type="image/webp" />
                <img className="modal__strong-pic" src={strong.image} alt="Decaffeinated coffee with a gentle profile" />
                </picture>
                <p className='modal__strong-type'>{strong.description}</p>
                </div>
  ))}
      </div>
      <button type="button" className='modal__order' onClick={handleAddToCartClick}>Summon the Cup</button>
    </>
  )}
       {type === 'dessert' && (
    <>
       <h2 className='modal__recomend'>When and how to deepen the experience</h2>
      <div className='modal__desserts'>
        <div className='modal__desert'>
           <picture className='modal__dessert-media'>
            <source srcSet={time} type="image/webp" />
          <img className="modal__dessert-pic" src={time} alt="Medium roast coffee with a balanced flavor" />
          </picture>
          <p className='modal__dessert-time'> Best for: {currentItem.time.join(', ')}</p>
          </div>
           <div className='modal__desert'>
          <picture className='modal__dessert-media'>
            <source srcSet={black} type="image/webp" />
          <img className="modal__dessert-pic" src={black} alt="Medium roast coffee with a balanced flavor" />
          </picture>
          <p className='modal__dessert-cup'>Ideal with: {currentItem.cup.join(', ')}</p>
          </div>
           <div className='modal__desert'>
          <picture className='modal__dessert-media'>
            <source srcSet={milk} type="image/webp" />
          <img className="modal__dessert-pic" src={milk} alt="Medium roast coffee with a balanced flavor" />
          </picture>
          <p className='modal__dessert-glass'>Milk: {currentItem.glass.join(', ')}</p>
        </div>
      </div>
      <p className="modal__allergens">
        Allergens: {currentItem.allergens.join(', ')}
      </p>
      <p className="modal__weight">Weight: {currentItem.weight} g</p>
      <p className="modal__price">Price: ${currentItem.price}</p>
      <button className="modal__order" onClick={handleAddToCartClick}>Claim Your Talisman</button>
    </>
  )}
      </div>
 
      </div>

    </div>

  </div> 
  
}

export default Modal;
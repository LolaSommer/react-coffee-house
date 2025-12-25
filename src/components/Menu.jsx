import "./menu.scss";
import silken from '../assets/silken.webp';
import reading from '../assets/reading.webp';
import lunar from '../assets/lunar.webp';
import harmony from '../assets/harmony.webp';
import sesonail from '../assets/sesonail.webp';
import mystic from '../assets/mystic.webp';
import cheescake from '../assets/cheescake.webp';
import ckookis from '../assets/ckookis.webp';
import eclair from '../assets/eclair.webp';
import brot from '../assets/brot.webp';
import torte from '../assets/torte.webp';
import maffin from '../assets/maffin.webp';
import { useRef } from "react";


function Menu({onCoffeeSelect}) {
  const cardsRef = useRef(null);
  const dessertsRef = useRef(null);
  return (
  <>
    <section id="menu" className='menu'>
      <h1 className="menu__title">Discover Our Blends</h1>
      <div className="menu__container">
        <div className="menu__viewport">
      <div className="menu__cards" ref={cardsRef}>
       
        <div className="menu__card" data-coffee="silken">
           <picture>
          <source srcSet={silken} type="image/webp" />
          <img className="menu__img" src={silken} alt="Silken Whisper signature coffee with milk and caramel notes" />
        </picture>

        <div className="card__title">Silken Whisper</div>
        <div className="card__description">A smooth and comforting blend of milk and caramel.</div>
        <div className="card__info">
        <div className="card__price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
       <meta itemProp="priceCurrency" content="USD" />
       <span className="visually-hidden">Price: 9 dollars 99 cents, available in stock</span>
  <data itemProp="price" value="9.99" className="card__value">$9.99</data>
  <link itemProp="availability" href="https://schema.org/InStock"/>
</div>
<p className="card__volume">330 ml</p>
</div>
<button type="button" className="card__btn" onClick={()=>onCoffeeSelect('silken')}>Summon the Cup</button>
      </div>
        <div className="menu__card" data-coffee="mystic">
           <picture>
          <source srcSet={mystic} type="image/webp" />
          <img className="menu__img" src={mystic} alt="Mystic Blend signature coffee with smoked spice and chocolate notes" />
        </picture>

        <div className="card__title">Mystic Blend</div>
        <div className="card__description">A bold fusion of smoked paprika, rich chocolate, and fresh cream.</div>
        <div className="card__info">
        <div className="card__price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
       <meta itemProp="priceCurrency" content="USD" />
       <span className="visually-hidden">Price: 9 dollars 99 cents, available in stock</span>
  <data itemProp="price" value="9.99" className="card__value">$9.99</data>
  <link itemProp="availability" href="https://schema.org/InStock"/>
</div>
<p className="card__volume">330 ml</p>
</div>
<button type="button" className="card__btn" onClick={()=>onCoffeeSelect('mystic')}>Summon the Cup</button>
      </div>
        <div className="menu__card" data-coffee="harmony">
           <picture>
          <source srcSet={harmony} type="image/webp" />
          <img className="menu__img" src={harmony} alt="Aura Harmony chilled coffee with vanilla and alternative milk" />
        </picture>

        <div className="card__title">Aura Harmony</div>
        <div className="card__description">Chilled coffee with alternative milk and vanilla.</div>
        <div className="card__info">
        <div className="card__price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
       <meta itemProp="priceCurrency" content="USD" />
       <span className="visually-hidden">Price: 9 dollars 99 cents, available in stock</span>
  <data itemProp="price" value="9.99" className="card__value">$9.99</data>
  <link itemProp="availability" href="https://schema.org/InStock"/>
</div>
<p className="card__volume">330 ml</p>
</div>
<button type="button" className="card__btn" onClick={()=>onCoffeeSelect('harmony')}>Summon the Cup</button>
      </div>
        <div className="menu__card" data-coffee="ephemeral">
           <picture>
          <source srcSet={sesonail} type="image/webp" />
          <img className="menu__img" src={sesonail} alt="Ephemeral Brew seasonal coffee, available for a limited time" />
        </picture>

        <div className="card__title">Ephemeral Brew</div>
        <div className="card__description">A taste that exists only for a moment.Always fleeting. Always new.</div>
        <div className="card__info">
        <div className="card__price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
       <meta itemProp="priceCurrency" content="USD" />
       <span className="visually-hidden">Price: 9 dollars 99 cents, available in stock</span>
  <data itemProp="price" value="9.99" className="card__value">$9.99</data>
  <link itemProp="availability" href="https://schema.org/InStock"/>
</div>
<p className="card__volume">330 ml</p>
</div>
<button type="button" className="card__btn" onClick={()=>onCoffeeSelect('ephemeral')}>Summon the Cup</button>
      </div>
        <div className="menu__card" data-coffee="lunar">
           <picture>
          <source srcSet={lunar} type="image/webp" />
          <img className="menu__img" src={lunar} alt="Lunar Brew decaffeinated coffee with milk" />
        </picture>

        <div className="card__title">Lunar Brew</div>
        <div className="card__description">Decaffeinated coffee with milk.Gentle, calming, and flexible.</div>
        <div className="card__info">
        <div className="card__price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
       <meta itemProp="priceCurrency" content="USD" />
       <span className="visually-hidden">Price: 9 dollars 99 cents, available in stock</span>
  <data itemProp="price" value="9.99" className="card__value">$9.99</data>
  <link itemProp="availability" href="https://schema.org/InStock"/>
</div>
<p className="card__volume">330 ml</p>
</div>
<button type="button" className="card__btn" onClick={()=>onCoffeeSelect('lunar')}>Summon the Cup</button>
      </div>
        <div className="menu__card" data-coffee="fortune">
           <picture>
          <source srcSet={reading} type="image/webp" />
          <img className="menu__img" src={reading} alt="Fortune’s Choice coffee selected by the barista" />
        </picture>

        <div className="card__title">Fortune's Choice</div>
        <div className="card__description">Let the barista decide.A personalized coffee experience.</div>
        <div className="card__info">
        <div className="card__price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
       <meta itemProp="priceCurrency" content="USD" />
       <span className="visually-hidden">Price: 9 dollars 99 cents, available in stock</span>
  <data itemProp="price" value="9.99" className="card__value">$9.99</data>
  <link itemProp="availability" href="https://schema.org/InStock"/>
</div>
<p className="card__volume">330 ml</p>
</div>
<button type="button" className="card__btn" onClick={()=>onCoffeeSelect('fortune')}>Summon the Cup</button>
      </div>
      </div>
    </div>
      <button
  type="button"
  className="card__next"
  aria-label="Scroll to next items"
  onClick={() => {
    const container = cardsRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild.offsetWidth + 32;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft >= maxScroll) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  }}
>
  <svg className="card__icon">
    <use href="#icon-arrow"/>
  </svg>
</button>

      </div>
      <h1 className="menu__deserts-title">Sacral Sweets</h1>
      <div className="menu__deserts">
        <div className="menu__deserts-viewport">
       <div className="menu__deserts-cards" ref={dessertsRef}>
           <div className="menu__deserts-card" data-desert="cookies">
           <picture>
          <source srcSet={ckookis} type="image/webp" />
          <img className="menu__deserts-img" src={ckookis} alt="Spark of Creation buttery cookie with chocolate chunks" />
        </picture>

        <div className="card__deserts-title">Spark of Creation</div>
        <div className="card__deserts-description">Classic buttery cookie with rich chocolate chunks.</div>
        <div className="card__deserts-info">
        <div className="card__deserts-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
       <meta itemProp="priceCurrency" content="USD" />
       <span className="visually-hidden">Price: 3 dollars 20 cents, available in stock</span>
  <data itemProp="price" value="3.20" className="card__value">$3.20</data>
  <link itemProp="availability" href="https://schema.org/InStock"/>
</div>
<p className="card__deserts-volume">80 gr</p>
</div>
<button type="button" className="card__deserts-btn">Claim Your Talisman</button>
      </div>
         <div className="menu__deserts-card" data-desert="bun">
           <picture>
          <source srcSet={brot} type="image/webp" />
          <img className="menu__deserts-img" src={brot} alt="Grounded Cloud vegan bun made with buckwheat and plant-based cheese" />
        </picture>

        <div className="card__deserts-title">Grounded Cloud</div>
        <div className="card__deserts-description">Soft vegan bun made with buckwheat flour and plant-based cheese.</div>
        <div className="card__deserts-info">
        <div className="card__deserts-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
       <meta itemProp="priceCurrency" content="USD" />
       <span className="visually-hidden">Price: 4 dollars 50 cents, available in stock</span>
  <data itemProp="price" value="4.50" className="card__value">$4.50</data>
  <link itemProp="availability" href="https://schema.org/InStock"/>
</div>
<p className="card__deserts-volume">110 gr</p>
</div>
<button type="button" className="card__deserts-btn">Claim Your Talisman</button>
      </div>
   <div className="menu__deserts-card" data-desert="maffin">
           <picture>
          <source srcSet={maffin} type="image/webp" />
          <img className="menu__deserts-img" src={maffin} alt="Kundalini Burst dark chocolate muffin with caramel filling" />
        </picture>

        <div className="card__deserts-title">Kundalini Burst</div>
        <div className="card__deserts-description">Dark chocolate muffin with melted caramel pieces inside.</div>
        <div className="card__deserts-info">
        <div className="card__deserts-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
       <meta itemProp="priceCurrency" content="USD" />
       <span className="visually-hidden">Price: 4 dollars 20 cents, available in stock</span>
  <data itemProp="price" value="4.20" className="card__value">$4.20</data>
  <link itemProp="availability" href="https://schema.org/InStock"/>
</div>
<p className="card__deserts-volume">120 gr</p>
</div>
<button type="button" className="card__deserts-btn">Claim Your Talisman</button>
      </div>
         <div className="menu__deserts-card" data-desert="cake">
           <picture>
          <source srcSet={torte} type="image/webp" />
          <img className="menu__deserts-img" src={torte} alt="Dark Matter chocolate sponge cake with rich chocolate cream" />
        </picture>

        <div className="card__deserts-title">Dark Matter</div>
        <div className="card__deserts-description">Moist chocolate sponge layered with rich chocolate cream.</div>
        <div className="card__deserts-info">
        <div className="card__deserts-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
       <meta itemProp="priceCurrency" content="USD" />
       <span className="visually-hidden">Price: 5 dollars 80 cents, available in stock</span>
  <data itemProp="price" value="5.80" className="card__value">$5.80</data>
  <link itemProp="availability" href="https://schema.org/InStock"/>
</div>
<p className="card__deserts-volume">150 gr</p>
</div>
<button type="button" className="card__deserts-btn">Claim Your Talisman</button>
      </div>
         <div className="menu__deserts-card" data-desert="eclair">
           <picture>
          <source srcSet={eclair} type="image/webp" />
          <img className="menu__deserts-img" src={eclair} alt="Full Moon Aura choux pastry with berry cream filling" />
        </picture>

        <div className="card__deserts-title">Full Moon Aura</div>
        <div className="card__deserts-description">Light choux pastry filled with a silky pink-turquoise cream and fresh berries.</div>
        <div className="card__deserts-info">
        <div className="card__deserts-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
       <meta itemProp="priceCurrency" content="USD" />
       <span className="visually-hidden">Price: 5 dollars 00 cents, available in stock</span>
  <data itemProp="price" value="5.00" className="card__value">$5.00</data>
  <link itemProp="availability" href="https://schema.org/InStock"/>
</div>
<p className="card__deserts-volume">120 gr</p>
</div>
<button type="button" className="card__deserts-btn">Claim Your Talisman</button>
      </div>
         <div className="menu__deserts-card" data-desert="cheescake">
           <picture>
          <source srcSet={cheescake} type="image/webp" />
          <img className="menu__deserts-img" src={cheescake} alt="Balance of Elements baked cheesecake with a smooth creamy texture" />
        </picture>

        <div className="card__deserts-title">Balance of Elements</div>
        <div className="card__deserts-description">Creamy baked cheesecake with a smooth, balanced flavor.</div>
        <div className="card__deserts-info">
        <div className="card__deserts-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
       <meta itemProp="priceCurrency" content="USD" />
       <span className="visually-hidden">Price: 5 dollars 50cents, available in stock</span>
  <data itemProp="price" value="5.50" className="card__value">$5.50</data>
  <link itemProp="availability" href="https://schema.org/InStock"/>
</div>
<p className="card__deserts-volume">140 gr</p>
</div>
<button type="button" className="card__deserts-btn">Claim Your Talisman</button>
      </div>

       </div>
       </div>
       <button type='button' className="card__next" aria-label="Scroll to next items"
        onClick={() => {
    const container = dessertsRef.current;
    if (!container) return;

    const cardWidth = container.firstElementChild.offsetWidth + 32;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft >= maxScroll) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  }}>
         <svg className="card__icon">
       <use href="#icon-arrow"/>
      </svg>
      </button>
      </div>
    </section>
    </>
  );
  
}

export default Menu;

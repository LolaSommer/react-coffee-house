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
function Menu() {
  return (
    <section id="menu" className="menu">
      <h1 className="menu__title">Discover Our Blends</h1>
      <div className="menu__container">
      <div className="menu__cards">
        <div className="menu__card">
           <picture>
          <source srcSet={silken} type="image/webp" />
          <img className="menu__img" src={silken} alt="Aura Brew coffee" />
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
<button type="button" className="card__btn">Summon the Cup</button>
      </div>
        <div className="menu__card">
           <picture>
          <source srcSet={mystic} type="image/webp" />
          <img className="menu__img" src={mystic} alt="Aura Brew coffee" />
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
<button type="button" className="card__btn">Summon the Cup</button>
      </div>
        <div className="menu__card">
           <picture>
          <source srcSet={harmony} type="image/webp" />
          <img className="menu__img" src={harmony} alt="Aura Brew coffee" />
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
<button type="button" className="card__btn">Summon the Cup</button>
      </div>
        <div className="menu__card">
           <picture>
          <source srcSet={sesonail} type="image/webp" />
          <img className="menu__img" src={sesonail} alt="Aura Brew coffee" />
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
<button type="button" className="card__btn">Summon the Cup</button>
      </div>
        <div className="menu__card">
           <picture>
          <source srcSet={lunar} type="image/webp" />
          <img className="menu__img" src={lunar} alt="Aura Brew coffee" />
        </picture>

        <div className="card__title">Lunar Brew</div>
        <div className="card__description">Decaffeinated coffee with your choice of add-ins.</div>
        <div className="card__info">
        <div className="card__price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
       <meta itemProp="priceCurrency" content="USD" />
       <span className="visually-hidden">Price: 9 dollars 99 cents, available in stock</span>
  <data itemProp="price" value="9.99" className="card__value">$9.99</data>
  <link itemProp="availability" href="https://schema.org/InStock"/>
</div>
<p className="card__volume">330 ml</p>
</div>
<button type="button" className="card__btn">Summon the Cup</button>
      </div>
        <div className="menu__card">
           <picture>
          <source srcSet={reading} type="image/webp" />
          <img className="menu__img" src={reading} alt="Aura Brew coffee" />
        </picture>

        <div className="card__title">Fortune's Choice</div>
        <div className="card__description">Let the barista decide.</div>
        <div className="card__info">
        <div className="card__price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
       <meta itemProp="priceCurrency" content="USD" />
       <span className="visually-hidden">Price: 9 dollars 99 cents, available in stock</span>
  <data itemProp="price" value="9.99" className="card__value">$9.99</data>
  <link itemProp="availability" href="https://schema.org/InStock"/>
</div>
<p className="card__volume">330 ml</p>
</div>
<button type="button" className="card__btn">Summon the Cup</button>
      </div>
      </div>
      <button className="card__next">
         <svg className="card__icon">
       <use href="#icon-arrow"/>
      </svg>
      </button>
      </div>
      <h1 className="menu__deserts-title">Sacral Sweets</h1>
      <div className="menu__deserts">
       <div className="menu__deserts-cards">
           <div className="menu__deserts-card">
           <picture>
          <source srcSet={ckookis} type="image/webp" />
          <img className="menu__deserts-img" src={ckookis} alt="Aura Brew coffee" />
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
         <div className="menu__deserts-card">
           <picture>
          <source srcSet={brot} type="image/webp" />
          <img className="menu__deserts-img" src={brot} alt="Aura Brew coffee" />
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
   <div className="menu__deserts-card">
           <picture>
          <source srcSet={maffin} type="image/webp" />
          <img className="menu__deserts-img" src={maffin} alt="Aura Brew coffee" />
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
         <div className="menu__deserts-card">
           <picture>
          <source srcSet={torte} type="image/webp" />
          <img className="menu__deserts-img" src={torte} alt="Aura Brew coffee" />
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
         <div className="menu__deserts-card">
           <picture>
          <source srcSet={eclair} type="image/webp" />
          <img className="menu__deserts-img" src={eclair} alt="Aura Brew coffee" />
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
         <div className="menu__deserts-card">
           <picture>
          <source srcSet={cheescake} type="image/webp" />
          <img className="menu__deserts-img" src={cheescake} alt="Aura Brew coffee" />
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
       <button className="card__next">
         <svg className="card__icon">
       <use href="#icon-arrow"/>
      </svg>
      </button>
      </div>
    </section>
  );
}

export default Menu;

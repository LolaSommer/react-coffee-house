import "./menu.scss";
import { coffeeProducts } from '../data/coffeeProducts';
import {desserts} from '../data/desserts';
import { useRef} from "react";
import { useSectionReveal } from "../animations/useSectionReveal";
function Menu({onCoffeeSelect,onDessertSelect}) {
  const menuItems = Object.values(coffeeProducts).filter(
  item => item.menu
);
  const cardsRef = useRef(null);
  const dessertsRef = useRef(null);
  const menuRef = useRef(null);
  useSectionReveal(menuRef);
return (
  <>
    <section id="menu" className="menu" ref={menuRef}>
      <h1 className="menu__title">Discover Our Blends</h1>

      <div className="menu__container">
        <div className="menu__viewport">
          <div className="menu__cards" ref={cardsRef}>
            {menuItems.map(item => (
              <div className="menu__card" key={item.id}>
                <picture>
                  <source srcSet={item.menu.image} type="image/webp" />
                  <img
                    className="menu__img"
                    loading="lazy"
                    src={item.menu.image}
                    alt={`${item.menu.title} coffee`}
                  />
                </picture>

                <div className="card__title">{item.menu.title}</div>
                <div className="card__description">{item.menu.description}</div>

                <div className="card__info">
                  <div className="card__price">
                    <data className="card__value">${item.menu.price}</data>
                  </div>
                  <p className="card__volume">{item.menu.volume} ml</p>
                </div>

                <button
                  type="button"
                  className="card__btn"
                  onClick={() => onCoffeeSelect(item.id)}
                >
                  Summon the Cup
                </button>
              </div>
            ))}
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

            container.scrollLeft >= maxScroll
              ? container.scrollTo({ left: 0, behavior: "smooth" })
              : container.scrollBy({ left: cardWidth, behavior: "smooth" });
          }}
        >
          <svg className="card__icon">
            <use href="#icon-arrow" />
          </svg>
        </button>
      </div>

      <h1 className="menu__deserts-title">Sacral Sweets</h1>

      <div className="menu__deserts">
        <div className="menu__deserts-viewport">
          <div className="menu__deserts-cards" ref={dessertsRef}>
            {Object.values(desserts).map(item => {
  const { id, menu } = item;

  return (
    <div className="menu__deserts-card" key={item.id} data-desert={item.id}>
      <picture>
        <source srcSet={menu.image} type="image/webp" />
        <img
        loading="lazy"
          className="menu__deserts-img"
          src={menu.image}
          alt={menu.alt}
        />
      </picture>

      <div className="card__deserts-title">{menu.title}</div>
      <div className="card__deserts-description">
        {menu.description}
      </div>

      <div className="card__deserts-info">
        <div
          className="card__deserts-price"
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <meta itemProp="priceCurrency" content="USD" />
          <span className="visually-hidden">
            Price: {menu.price} dollars, available in stock
          </span>
          <data
            itemProp="price"
            value={menu.price}
            className="card__value"
          >
            ${menu.price}
          </data>
          <link
            itemProp="availability"
            href="https://schema.org/InStock"
          />
        </div>

        <p className="card__deserts-volume">
          {menu.weight} g
        </p>
      </div>

      <button
        type="button"
        className="card__deserts-btn"
        onClick={() => onDessertSelect(item.id)}
      >
        Claim Your Talisman
      </button>
    </div>
  );
})}

          </div>
        </div>

        <button
          type="button"
          className="card__next"
          aria-label="Scroll to next items"
          onClick={() => {
            const container = dessertsRef.current;
            if (!container) return;

            const cardWidth = container.firstElementChild.offsetWidth + 32;
            const maxScroll = container.scrollWidth - container.clientWidth;

            container.scrollLeft >= maxScroll
              ? container.scrollTo({ left: 0, behavior: "smooth" })
              : container.scrollBy({ left: cardWidth, behavior: "smooth" });
          }}
        >
          <svg className="card__icon">
            <use href="#icon-arrow" />
          </svg>
        </button>
      </div>
    </section>
  </>
); 
}

export default Menu;

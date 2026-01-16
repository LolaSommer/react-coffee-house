import './events.scss';
import { actions } from '../data/actions';
import {events} from '../data/events';
import { useRef } from "react";
function Events() {
  const actionRef = useRef(null);
  return (
    <>
  <section className='events__group' id='events'>
    <article className='events__action'>
      <h1 className='events__action-title'>Exchange of Energy</h1>
      <p className='events__action-untertitle'>Discover the flow of mutual giving. Our karmic programs and ritual rewards await.</p>
      <div className='events__action-viewport'>
      <div className='events__action-cards' ref={actionRef}>
       {actions.map(action => (
  <div className="events__action-card" key={action.id}>
    <picture>
      <source srcSet={action.image} type="image/webp" />
      <img
        className="events__action-img"
        src={action.image}
        alt={`${action.title}`}
      />
    </picture>

    <div className='events__action-cardtitle'>{action.title}</div>
    <div className="events__action-description">{action.description}</div>
    <button
      type="button"
      className="events__action-btn">
      Activate Resonance
    </button>
  </div>
))} 
      </div>
      </div>
      <button type='button' className="events__action-next" aria-label="Show more action options"
      onClick={()=>{
        const container = actionRef.current;
        if(!container)return;
        const cardWidth = container.firstElementChild.offsetWidth + 50;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft >= maxScroll) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
      } 
      }>
         <svg className="events__action-icon">
       <use href="#icon-arrow"/>
      </svg>
      </button>
    </article>
    <h1 className='events__title'>Aura Events</h1>
    <div className='events__cards'>
      {events.map(event => ( <div className="events__card" key={event.id}>
    <picture>
      <source srcSet={event.image} type="image/webp" />
      <img
        className="events__img"
        src={event.image}
        alt={`${event.title}`}
      />
    </picture>
    <button
      type="button"
      className="events__btn">
      Secure My Spot in the Circle
    </button>
  </div>
      ))}
    </div>
  </section>
  </>
  );
}


export default Events;

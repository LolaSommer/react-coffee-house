import './events.scss';
import first from '../assets/first.webp';
import bonus from '../assets/bonus.webp';
import cofeanddesert from '../assets/cofeanddesert.webp';
import team from '../assets/team.webp';
import afrika from '../assets/afrika.webp';
import five from '../assets/five.webp';
import wensday from '../assets/wensday.webp';
import alchemy from '../assets/alchemy.webp';
import cup from '../assets/cup.webp';
import nohandy from '../assets/nohandy.webp';
import tasseo from '../assets/tasseo.webp';

function Events() {
  return <section className='events__group'>
    <article className='events__action'>
      <h1 className='events__action-title'>Exchange of Energy</h1>
      <p className='events__action-untertitle'>Discover the flow of mutual giving. Our karmic programs and ritual rewards await.</p>
      <div className='events__action-viewport'>
      <div className='events__action-cards'>
        <div className='events__action-card'>
          <picture>
          <source srcSet={first} type="image/webp" />
          <img className="events__action-img" src={first} alt="Aura Brew coffee" />
        </picture>
          <h3 className='events__action-cardtitle'>FLOW INITIATION</h3>
          <p className='events__action-description'>Your first ritual with us. Receive a 25% tuning discount to begin our resonance.</p>
          <button type="button" className='events__action-btn'>Activate Resonance</button>
        </div>
          <div className='events__action-card'>
          <picture>
          <source srcSet={bonus} type="image/webp" />
          <img className="events__action-img" src={bonus} alt="Aura Brew coffee" />
        </picture>
          <h3 className='events__action-cardtitle'>KARMA HARVEST</h3>
          <p className='events__action-description'> Earn 5 Aura Points (1 AP = $0.15) for every dollar spent. Your energy, stored for future rituals.</p>
          <button type="button" className='events__action-btn'>Activate Resonance</button>
        </div>
          <div className='events__action-card'>
          <picture>
          <source srcSet={cofeanddesert} type="image/webp" />
          <img className="events__action-img" src={cofeanddesert} alt="Aura Brew coffee" />
        </picture>
          <h3 className='events__action-cardtitle'>TRINITY. THE REWARD</h3>
          <p className='events__action-description'>Complete the cycle of three. Receive a sacred sweet as your materialized reward.</p>
          <button type="button" className='events__action-btn'>Activate Resonance</button>
        </div>
          <div className='events__action-card'>
          <picture>
          <source srcSet={team} type="image/webp" />
          <img className="events__action-img" src={team} alt="Aura Brew coffee" />
        </picture>
          <h3 className='events__action-cardtitle'>ALCHEMY INTERNSHIP</h3>
          <p className='events__action-description'>Join our coven. Become a keeper of rituals and a conductor of good vibrations.</p>
          <button type="button" className='events__action-btn'>Activate Resonance</button>
        </div>
          <div className='events__action-card'>
          <picture>
          <source srcSet={afrika} type="image/webp" />
          <img className="events__action-img" src={afrika} alt="Aura Brew coffee" />
        </picture>
          <h3 className='events__action-cardtitle'> THE INTENTION CUP</h3>
          <p className='events__action-description'>Every cup you summon sends $0.1 of pure vibration to our charity partner. Sip with purpose.</p>
          <button type="button" className='events__action-btn'>Activate Resonance</button>
        </div>
          <div className='events__action-card'>
          <picture>
          <source srcSet={five} type="image/webp" />
          <img className="events__action-img" src={five} alt="Aura Brew coffee" />
        </picture>
          <h3 className='events__action-cardtitle'>GROUP MEDITATION BUNDLE</h3>
          <p className='events__action-description'>5 drinks + 5 sacred sweets. Unlock a unique group experience.</p>
          <button type="button" className='events__action-btn'>Activate Resonance</button>
        </div>
          <div className='events__action-card'>
          <picture>
          <source srcSet={wensday} type="image/webp" />
          <img className="events__action-img" src={wensday} alt="Aura Brew coffee" />
        </picture>
          <h3 className='events__action-cardtitle'>ANTI-VIBRATION. RESET</h3>
          <p className='events__action-description'> Every Wednesday, 8-10 AM. No music, just the sound of craft. 15% off all pour-overs.</p>
          <button type="button" className='events__action-btn'>Activate Resonance</button>
        </div>
      </div>
      </div>
      <button className="events__action-next">
         <svg className="events__action-icon">
       <use href="#icon-arrow"/>
      </svg>
      </button>
    </article>
    <h1 className='events__title'>Aura Events</h1>
    <div className='events__cards'>
      <div className='events__card'>
          <picture>
          <source srcSet={alchemy} type="image/webp" />
          <img className="events__img" src={alchemy} alt="Aura Brew coffee" />
        </picture>
        <button type="button" className='events__btn'>Secure My Spot in the Circle</button>
      </div>
      <div className='events__card'>
          <picture>
          <source srcSet={cup} type="image/webp" />
          <img className="events__img" src={cup} alt="Aura Brew coffee" />
        </picture>
        <button type="button" className='events__btn'>Secure My Spot in the Circle</button>
      </div>
      <div className='events__card'>
          <picture>
          <source srcSet={tasseo} type="image/webp" />
          <img className="events__img" src={tasseo} alt="Aura Brew coffee" />
        </picture>
        <button type="button" className='events__btn'>Secure My Spot in the Circle</button>
      </div>
      <div className='events__card'>
          <picture>
          <source srcSet={nohandy} type="image/webp" />
          <img className="events__img" src={nohandy} alt="Aura Brew coffee" />
        </picture>
        <button type="button" className='events__btn'>Secure My Spot in the Circle</button>
      </div>
    </div>
  </section>
}

export default Events;

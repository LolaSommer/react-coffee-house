import tasse from '../assets/tasse.webp';
import lampe from '../assets/lampe.webp';
import buch from '../assets/buch.webp';
import handy from '../assets/handy.webp';
import papier from '../assets/papier.webp'
import bean from '../assets/bean.webp';
import beanback from '../assets/beanback.webp'
import './EventsBlog.scss';
export default function EventsBlog() {
  return (
    <div className='blog__page'>
    <section className="blog">

      <div className='blog__group'>
    <div className="blog__bg"></div>
    <h1 className='blog__title'>Aura Rituals</h1>
    <p className='blog__untertitle'>Gatherings to awaken your inner peace.</p>
      </div>
    </section>
     <section className='blog__tasseo'>
      <div className='blog__tasse-container'>
         <picture>
                  <source srcSet={tasse} type="image/webp" />
                  <img
                    className="blog__img"
                    src={tasse}
                    alt=''
                  />
                </picture>
                </div>
                <div className='text'>
                  <h2 className='text__title'>Tasseography: Stories in the Leaves</h2>
                  <p className='text__untertitle'>More than fortune-telling, it's art therapy. Together, we brew and drink Turkish coffee, then a visiting tasseographer helps you read the symbols left in your cup. Discover patterns, archetypes, and stories from your subconscious. A playful, introspective ritual.</p>
                </div>
                <div className='text__img'>
                  <picture>
                  <source srcSet={buch} type="image/webp" />
                  <img
                    className="text__bild"
                    src={buch}
                    alt=''
                  />
                </picture>
                </div>
      </section>
      <section className='light'>
          <div className='light__img'>
                  <picture>
                  <source srcSet={lampe} type="image/webp" />
                  <img
                    className="light__bild"
                    src={lampe}
                    alt=''
                  />
                </picture>
                </div>
                <div className='light__group'>
                  <div className='light__text'>
                  <h2 className='light__title'>The Unplugged Nook</h2>
                  <p className='light__untertitle'>A candlelit sanctuary within our space. This is our permanent offer of silence. </p>
               
                 <p className='light__untertitle'>Here, phones and laptops rest at the door.</p>
                   <p className='light__untertitle'>  Connect with yourself, a book, or a quiet conversation in flickering light. </p>
                  <p className='light__untertitle'>P.S. Every Wednesday, 8-10 AM, this energy expands to the entire cafe for our «Silent Hours».</p>
                  </div>
                  <div className='light__colls'>
                  <picture>
                  <source srcSet={handy} type="image/webp" />
                  <img
                    className="light__pic"
                    src={handy}
                    alt=''
                  />
                </picture>
                </div>
                </div>   
      </section>
      <section className='roast'>
        <div className='roast__group-img'>
           <picture>
                  <source srcSet={papier} type="image/webp" />
                  <img
                    className="roast__pic"
                    src={papier}
                    alt=''
                  />
                </picture>
                <picture>
                <source srcSet={bean} type="image/webp" />
                  <img
                    className="roast__img"
                    src={bean}
                    alt=''
                  />
                </picture>
                 <picture>
                <source srcSet={beanback} type="image/webp" />
                  <img
                    className="roast__img2"
                    src={beanback}
                    alt=''
                  />
                </picture>
                  <picture>
                <source srcSet={beanback} type="image/webp" />
                  <img
                    className="roast__img3"
                    src={beanback}
                    alt=''
                  />
                </picture>
                 <picture>
                <source srcSet={bean} type="image/webp" />
                  <img
                    className="roast__img4"
                    src={bean}
                    alt=''
                  />
                </picture>
        </div>
        <div className='roast__text'>
          <h2 className='roast__title'>The Alchemist's Roast</h2>
          <p className='roast__untertitle'>Transform green beans into your personal blend under the guidance of our master roaster. Witness the alchemy of heat, smell the first crack, and take home a bag of your creation, stamped with a personal «Aura Alchemist» certificate. A ritual of fire, aroma, and pure craft.</p>
        </div>
      </section>
      </div>
  );
}


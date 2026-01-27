import lampe from '../assets/lampe.webp';
import buch from '../assets/buch.webp';
import handy from '../assets/handy.webp';
import papier from '../assets/papier.webp'
import bean from '../assets/bean.webp';
import beanback from '../assets/beanback.webp';
import meditation from '../assets/meditation.webp';
import drink from '../assets/drink.webp';
import smoke from '../assets/smoke.png';
import gsap from "gsap";
import { ritualSchema } from '../validation/ritualSchema';
import { useForm } from '../hooks/useForm';
import { EventsBlogAnimation } from '../animations/EventsBlogAnimation';
import {useRef } from 'react';
import './EventsBlog.scss';
export default function EventsBlog() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const bagRef = useRef(null);
  const roastRef = useRef(null);
  const beanRefs = useRef([]);
  const waveRefs = useRef([]);
  EventsBlogAnimation(sectionRef,titleRef,bagRef,roastRef,beanRefs);
  const beans = [
    {src:bean,type:'img'},
    { src: beanback, type: 'img2' },
    { src: beanback, type: 'img3' },
    { src: bean, type: 'img4' },
    { src: bean, type: 'img5' },
    { src: beanback, type: 'img6' },
    { src: bean, type: 'img7' }
  ]
    const handleClick = () => {
    waveRefs.current.forEach((el, i) => {
      if (!el) return;

      gsap.killTweensOf(el);

      gsap.fromTo(
        el,
        {
          scale: 1,
          opacity: 0.8,
        },
        {
          scale: 4,
          opacity: 0,
          duration: 0.9,
          ease: "power2.out",
          delay: i * 0.15, 
        }
      );
    });
}
const initalValues ={
  name:'',
  email:'',
  phone:'',
  ritual:'',
}
const ritualForm = useForm(initalValues,ritualSchema);

const {
  values,
  handleChange,
  validateForm,
  isValid,
}=ritualForm;

function handleSubmit() {
  const isOk = validateForm();
  if (!isOk) return;

  console.log(values);
}

  return (
    <div className='blog__page'>
    <section className="blog" id='events-home'>

      <div className='blog__group'>
    <div className="blog__bg"></div>
    <h1 className='blog__title'>Aura Rituals</h1>
    <p className='blog__untertitle'>Gatherings to awaken your inner peace.</p>
      </div>
    </section>
     <section className='blog__tasseo' id='tasseography'>
      <div className='blog__tasse-container'>
          <div className='blog__img'></div>
                <div className='blog__wrapper'>
                  <div className='drink-with-steam'>
                <picture>
                  <source srcSet={drink} type="image/webp" />
                  <img
                    className="blog__drink"
                    src={drink}
                    alt=''
                  />
                </picture>
                <div className='steam'>
    <picture>
                  <source srcSet={smoke} type="image/webp" />
                  <img
                    className="blog__smoke smoke-1"
                    src={smoke}
                    alt=''
                  />
                </picture>
                 <picture>
                  <source srcSet={smoke} type="image/webp" />
                  <img
                    className="blog__smoke smoke-2"
                    src={smoke}
                    alt=''
                  />
                </picture>
                 <picture>
                  <source srcSet={smoke} type="image/webp" />
                  <img
                    className="blog__smoke smoke-3"
                    src={smoke}
                    alt=''
                  />
                </picture>
                </div>
                  </div>
                </div>
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
      <section className='light' id='dark' ref={sectionRef}>
          <div className='light__content'>
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
                  <h2 className='light__title' ref={titleRef}>The Unplugged Nook</h2>
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
                 </div>
                 <div className='light__darkness'></div>
                
      </section>
      <section className='roast' id='roast'>
        <div className='roast__group-img'>
           <picture>
                  <source srcSet={papier} type="image/webp" />
                  <img
                    className="roast__pic"
                    src={papier}
                    alt=''
                    ref={bagRef}
                  />
                </picture>
          {beans.map((bean,index)=>(
            <picture key={index}>
              <source srcSet={bean.src} type='image/webp'/>
              <img className={`roast__${bean.type}`}
              src={bean.src}
              alt=''
              ref={el=>beanRefs.current[index]=el}/>
            </picture>
          ))}
        </div>
        <div className='roast__text'>
          <h2 className='roast__title' ref={roastRef}>The Alchemist's Roast</h2>
          <p className='roast__untertitle'>Transform green beans into your personal blend under the guidance of our master roaster. Witness the alchemy of heat, smell the first crack, and take home a bag of your creation, stamped with a personal «Aura Alchemist» certificate. A ritual of fire, aroma, and pure craft.</p>
        </div>
      </section>
      <section className='sound' id='sound'>
        <div className='sound__text'>
          <h2 className='sound__title'>Sound Bath & Grounding Brew</h2>
          <p className='sound__untertitle'>Immerse in vibrations of singing bowls, letting sound waves wash over you. Then, gently return to the present moment through a shared, mindful coffee tasting. A complete cycle: release through sound, arrival through taste.</p>
        </div>
        <div className='sound__group' onClick={handleClick}>
<svg  className="waves" viewBox="0 0 200 200" width="200" height="200" aria-hidden="true">
  <defs>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
   {[0, 1].map((_, i) => (
          <circle
            key={i}
            ref={(el) => (waveRefs.current[i] = el)}
            cx="100"
            cy="100"
            r="32"
            className="wave"
            filter="url(#glow)"
          />
        ))}
</svg>
           <picture>
                  <source srcSet={meditation} type="image/webp" />
                  <img
                    className="sound__pic"
                    src={meditation}
                    alt=''
                  />
                </picture>
        </div>
      </section>
<section className='form-events' id='order'>
  <h2 className="form-events__title">Book Your Ritual</h2>
  <p className='form-events__untertitle'>Find your resonance. We'll find the perfect time</p>
  
  <form  onSubmit={(e) => {
    e.preventDefault();
    handleSubmit();
  }} className="form-events__form"> 
    <div className='form-events__field'>
      <label className='form-events__select' htmlFor='events-ritual'>Which ritual calls to you?</label>
      <select id='events-ritual'  value={values.ritual}
  onChange={handleChange} className='form-events__input' name='ritual' required>
        <option value="">Select a gathering...</option>
        <option value="sound">Sound Bath & Grounding Brew</option>
        <option value="tasseo">Tasseography: Stories in the Leaves</option>
        <option value="roast">The Alchemist's Roast</option>
      </select>
    </div>
    
    <div className='form-events__field'>
      <label className="visually-hidden" htmlFor="events-name">Name</label>
      <input className="form-events__input" id="events-name" value={values.name}
  onChange={handleChange} type="text" name="name" placeholder="Your Full Name" required/>
    </div>
    
    <div className='form-events__field'>
      <label className="visually-hidden" htmlFor="events-email">Email</label>
      <input className="form-events__input"value={values.email}
  onChange={handleChange} id="events-email" type="email" name="email" placeholder="Email Address" required/>
    </div>
    
    <div className='form-events__field'>
      <label className="visually-hidden" htmlFor="events-tel">Phone number</label>
      <input className="form-events__input" value={values.phone}
  onChange={handleChange} id="events-tel" type="tel" name="phone" placeholder="Phone number" required/>
    </div>
    
    <div className='form-events__radiogroup'>
      <h3 className='form-events__radiotitle'>Best way to reach you?</h3>
      <div className='form-events__radio-option'>
        <input className='form-events__checked' type='radio' id='events-yesemail' name='contact' value='email' required/>
        <label className='form-events__radio' htmlFor='events-yesemail'>A thoughtful email</label>
        <input className='form-events__checked' type='radio' id='events-yestel' name='contact' value='tel' required/>
        <label className='form-events__radio' htmlFor='events-yestel'>A quiet call</label>
      </div>
    </div>
    
    <div className='form-events__btn'>
      <button type="submit" className='form-events__submit'>Order</button>
    </div>
  </form>
</section>
      </div>
  );
}


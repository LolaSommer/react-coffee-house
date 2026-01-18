import first from '../assets/first.webp';
import bonus from '../assets/bonus.webp';
import cofeanddesert from '../assets/cofeanddesert.webp';
import team from '../assets/team.webp';
import afrika from '../assets/afrika.webp';
import five from '../assets/five.webp';
import wensday from '../assets/wensday.webp';

export const actions = [
  {
    id: 'first',
    title: 'FLOW INITIATION',
    cardData: {
      description: 'Your first ritual with us. Receive a 25% tuning discount to begin our resonance.',
      image: first,
      alt: '25 percent discount on your first coffee order'
    },
    modalData: {
      fullDescription: 'Every journey begins with a single, intentional step. This ritual is your initiation into the Aura Brew circle. Allow us to attune our energies and craft your first beverage as a sacred offering, establishing a connection that transcends the ordinary.',
      promo: 'Activate the discount by saying the code word "INITIATE" to your barista or applying it in the promo code field in our mobile app.',
      note: 'Valid for first order only. Cannot be combined with other offers.'
    }
  },
  {
    id: 'bonus',
    title: 'KARMA HARVEST',
    cardData: {
      description: 'Earn 5 Aura Points (1 AP = $0.15) for every dollar spent. Your energy, stored for future rituals.',
      image: bonus,
      alt: 'Earn Aura points with every purchase and save on future orders'
    },
    modalData: {
      fullDescription: 'Every visit and every dollar invested in your ritual fills your personal karmic cup — Aura Points. These are not just discounts, but accumulated energy of gratitude that you can channel toward any future practice in our space.',
      promo: 'Points are automatically credited when paying with an Aura Brew card or providing your phone number in the app. 1 point = 15 cents discount. Accumulate 100 AP and receive a top-circle beverage as a gift.',
      note: 'Points never expire. Simple registration is required to join the program.'
    }
  },
  {
    id: 'cofeanddesert',
     title: 'TRINITY. THE REWARD',
    cardData: {
      description: 'Complete the cycle of three. Receive a sacred sweet as your materialized reward.',
      image: cofeanddesert,
      alt: 'Buy three coffees and receive a dessert as a gift'
    },
    modalData: {
      fullDescription: 'The number three symbolizes completion and harmony. Complete a cycle of three rituals with our signature beverages, and the Universe (in the form of our alchemist-pastry chefs) will materialize your reward — an exquisite sacred sweet, crafted for perfect resonance with coffee.',
      promo: 'After purchasing your 3rd drink from the "Signature Brews" category, show this page to your barista to receive the dessert of the day as a gift.',
      note: 'The offer is valid within 30 days from the first purchase in the cycle. Drinks must be different.'
    }
  },
  {
    id: 'team',
     title: 'ALCHEMY INTERNSHIP',
    cardData: {
      description: 'Join our coven. Become a keeper of rituals and a conductor of good vibrations.',
      image: team,
      alt: 'Join the Aura Brew team and work with coffee lovers'
    },
    modalData: {
      fullDescription: 'Our circle is always open to new keepers. If you feel the call to transform beans into energy and meetings into rituals, come to our alchemical initiation. Here you will master not just a craft, but the art of tuning space and creating vibrations.',
      promo: 'Send your resume and a brief letter about your connection with coffee to ritual@aurabrew.com with the subject line "Alchemist". We will invite you for a cup dialogue.',
      note: ''
    }
  },
  {
    id: 'afrika',
    title: 'THE INTENTION CUP',
    cardData: {
      description: 'Every cup you summon sends $0.1 of pure vibration to our charity partner. Sip with purpose.',
      image: afrika,
      alt: 'Part of each coffee purchase supports clean water projects in Africa'
    },
    modalData: {
      fullDescription: 'The power of ritual multiplies when its intention extends beyond these walls. With every cup marked by this symbol, the pure vibrations of your drink transform into real aid. We channel this energy to our partner — a foundation that gifts clean water to communities in Africa. Your sip becomes a gesture beyond yourself.',
      promo: 'Choose any beverage marked as "Intention Cup" on the menu. 10 cents from its price will be automatically donated to the "Aqua Vitae" foundation.',
      note: 'Monthly donation reports are published on our intention board at the entrance.'
    }
  },
  {
    id: 'five',
    title: 'GROUP MEDITATION BUNDLE',
    cardData: {
      description: '5 drinks + 5 sacred sweets. Unlock a unique group experience.',
      image: five,
      alt: 'Group meditation session offered as a gift with selected coffee and dessert orders'
    },
    modalData: {
      fullDescription: 'Gather a circle of five like-minded individuals. This offering is the key to a collective ritual. Five drinks, five desserts, and synchronized intention unlock access to a unique experience — a group meditation session or sound vibration ceremony in our private space.',
      promo: 'Order the "Group Bundle" set and arrange the timing of your session with our keeper. This is a unique experience for your circle.',
      note: 'The session is held by prior booking for groups of 5 or more. Available on weekends.'
    }
  },
  {
    id: 'wensday',
    title: 'ANTI-VIBRATION. RESET',
    cardData: {
      description: 'Every Wednesday, 8-10 AM. No music, just the sound of craft. 15% off all pour-overs.',
      image: wensday,
      alt: 'Silent Wednesday mornings with a discount on filter coffee'
    },
    modalData: {
      fullDescription: 'On Wednesday mornings, we intentionally dampen extra vibrations. No music, only quiet conversation, the sound of water, and the aroma of freshly ground beans. This is a time for reset, silence, and maximum focus on pure taste. The perfect moment to immerse yourself in the meditative practice of pour-over.',
      promo: 'Every Wednesday from 8:00 AM to 10:00 AM, all pour-over (filter coffee) drinks are 15% off. Simply tell your barista: "I\'m here for the silence."',
      note: 'The offer applies only to beverages prepared using the pour-over method during the specified hours.'
    }
  },
]
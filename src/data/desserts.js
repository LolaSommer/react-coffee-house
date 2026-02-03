import cheescake from '../assets/cheescake.webp';
import ckookis from '../assets/ckookis.webp';
import eclair from '../assets/eclair.webp';
import brot from '../assets/brot.webp';
import torte from '../assets/torte.webp';
import maffin from '../assets/maffin.webp';
export const desserts={
  ckookis:{
    id:'ckookis',
    modal:{
    id:'ckookis',
    title:'Spark of Creation',
    ingredients:['wheat flour', 'butter', 'sugar', 'dark chocolate', 'eggs'],
    description:'The first movement of energy. A crisp, buttery cookie with an eruption of molten dark chocolate within. A simple yet sacred act of indulgence — like the first thought before a great deed. Ignites the impulse.',
    allergens:['gluten', 'dairy', 'eggs'],
    weight:80,
    price:3.20,
    image:ckookis,
    time:['early morning','first impulse'],
    cup:['espresso','americano'],
    glass:['no milk','oat milk'],
    text: 'Chocolate cookie',
    type: 'dessert'
    },
    menu:{
    id:'ckookis',
    title:'Spark of Creation',
    weight:80,
    price:3.20,
    image:ckookis,
    description:'Classic buttery cookie with rich chocolate chunks.',
    alt:'Spark of Creation buttery cookie with chocolate chunks'
    }
   
  },
  bun:{
    id:'bun',
    modal:{
    id:'bun',
    title:'Grounded Cloud',
    ingredients:['buckwheat flour', 'plant-based cheese', 'yeast', 'water', 'salt'],
    description:'A warm, soft bun made of buckwheat flour with stretchy vegan cheese. Earthy grain energy and the lightness of an ethical choice. Provides strength without weight, satiety without guilt. *Nourishes the body without weighing down the aura.',
    allergens:['buckwheat'],
    weight:110,
    price:4.5,
    image:brot,
    time:['slow afternoon', 'grounding pause'],
    cup:['oat latte','flat white'],
    glass:['oat milk'],
    text: 'Buckwheat bun',
    type: 'dessert'
    },
    menu:{
    id:'bun',
    title:'Grounded Cloud',
    weight:110,
    price:4.5,
    image:brot,
    description:'Soft vegan bun made with buckwheat flour and plant-based cheese',
    alt:'Grounded Cloud vegan bun made with buckwheat and plant-based cheese'
    }
 


  },
  maffin:{
    id:'maffin',
    modal:{
    id:'maffin',
    title:'Kundalini Burst',
    ingredients:['wheat flour', 'butter', 'dark chocolate', 'caramel', 'sugar', 'eggs'],
    description:' A dense, moist chocolate muffin hiding golden pockets of salted caramel. Unexpected bursts of sweetness awaken dormant energy. The perfect companion for a morning espresso. *An alarm clock for slumbering power',
    allergens:['gluten', 'dairy', 'eggs'],
    weight:120,
    price:4.20,
    image:maffin,
    time:['late morning','energy activation'],
    cup:['cappuccino'],
    glass:['almond','classic milk'],
    text: 'Chocolate muffin',
    type: 'dessert'
     },
     menu:{
    id:'maffin',
    title:'Kundalini Burst',
    weight:120,
    price:4.20,
    image:maffin,
    description:'Dark chocolate muffin with melted caramel pieces inside.',
    alt:'Kundalini Burst dark chocolate muffin with caramel filling'
     }
  },
  cake:{
     id:'cake',
     modal:{
       id:'cake',
    title:'Dark Matter',
    ingredients:['wheat flour', 'cocoa', 'dark chocolate', 'cream', 'butter', 'sugar', 'eggs'],
    description:'Multi-layered, intense, profound. Moist layers, velvety ganache, a hidden bitterness. Not a dessert, but an immersion into the sacred depth of cocoa beans. For moments when you need to feel the fullness of existence. Concentrates intention',
    allergens:['gluten', 'dairy', 'eggs'],
    weight:150,
    price:5.80,
    image:torte,
    time:['evening','deep grounding'],
    cup:['espresso','dark roast'],
    glass:['no milk'],
    text: 'Chocolate cake',
    type: 'dessert'
     },
     menu:{
       id:'cake',
    title:'Dark Matter',
    weight:150,
    price:5.80,
    image:torte,
    description:'Moist chocolate sponge layered with rich chocolate cream.',
    alt:'Dark Matter chocolate sponge cake with rich chocolate cream.'
     }
  },
  eclair:{
     id:'eclair',
     modal:{
       id:'eclair',
     title:'Full Moon Aura',
    ingredients:['wheat flour', 'butter', 'cream', 'berries', 'sugar', 'eggs'],
    description:' An airy choux "body" filled with cream the color of sunset and sea foam (pink + turquoise — your brand colors). Fresh berries like stars in the night sky. A dessert for inspiration and connecting to the flow of fantasy. Opens the creative channel',
    allergens:['gluten', 'dairy', 'eggs'],
    weight:120,
    price:5.00,
    image:eclair,
    time:['late afternoon','creative flow'],
    cup:['latte','signature blend'],
    glass:['almond milk'],
    text: 'Berry eclair',
    type: 'dessert'
     },
     menu:{
       id:'eclair',
    title:'Full Moon Aura',
    weight:120,
    price:5.00,
    image:eclair,
    description:'Light choux pastry filled with a silky pink-turquoise cream and fresh berries.',
    alt:'Full Moon Aura choux pastry with berry cream filling',
  }
  },
  cheescake:{
     id:'cheescake',
     modal:{
      id:'cheescake',
    title:'Balance of Elements',
    ingredients:['cream cheese', 'wheat flour', 'butter', 'sugar', 'eggs'],
    description:'The ethereal lightness of creamy filling meets the solid, wise foundation of a crumbly crust. The perfect equilibrium of airy and dense, yang and yin. A dessert for harmonizing inner contradictions. *Brings peace and fulfillment.',
    allergens:['gluten', 'dairy', 'eggs'],
    weight:140,
    price:5.50,
    image:cheescake,
    time:['anytime' ,'emotional balance'],
    cup:['cappuccino','latte'],
    glass:['classic','lactose-free'],
    text: 'Cheesecake',
    type: 'dessert'
     },
     menu:{
      id:'cheescake',
    title:'Balance of Elements',
    weight:140,
    price:5.50,
    image:cheescake,
    description:'Creamy baked cheesecake with a smooth, balanced flavor.',
    alt:'Balance of Elements baked cheesecake with a smooth creamy texture',
     }
  }
}
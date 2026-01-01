import cheescake from '../assets/cheescake.webp';
import ckookis from '../assets/ckookis.webp';
import eclair from '../assets/eclair.webp';
import brot from '../assets/brot.webp';
import torte from '../assets/torte.webp';
import maffin from '../assets/maffin.webp';

export const desserts={
  ckookis:{
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
  bun:{
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
  maffin:{
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
    glass:['almond','clasic milk'],
    text: 'Chocolate muffin',
    type: 'dessert'


  },
  cake:{
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
  eclair:{
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
    glass:['almond molk'],
    text: 'Berry eclair',
    type: 'dessert'


  },
  cheescake:{
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


  }
}
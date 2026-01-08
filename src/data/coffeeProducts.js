import caramel from '../assets/caramel.webp';
import  shocko from '../assets/shocko.webp';
import vanila from '../assets/vanila.webp';
import pumpkin from '../assets/pumpkin.webp';
import decaf from '../assets/decaf.webp';
import barista from '../assets/barista.webp';
import black from '../assets/black.webp';
import harmony from '../assets/harmony.webp';
import lunar from '../assets/lunar.webp';
import reading from '../assets/reading.webp';
import sesonail from '../assets/sesonail.webp';
import silken from '../assets/silken.webp';
import mystic from '../assets/mystic.webp';
export const coffeeProducts ={
  silken:{
    id:'silken',
    modal:{
     title: 'Silken Whisper',
    ingredients: ['milk','coffee','caramel'],
    description: 'A smooth and comforting blend of milk and caramel. Soft, creamy, and gently sweet — like a quiet moment wrapped in warmth.',
    allergens:['lactose'],
    image:caramel,
     price:9.99,
    defaultMilk: 'classic'
    },
    menu:{
    title: 'Silken Whisper',
    description: 'A smooth and comforting blend of milk and caramel.',
    volume:330,
    price:9.99,
    image:silken,
    }
   
  },
  mystic:{
    id:'mystic',
    modal:{
    title: 'Mystic Blend',
    ingredients: ['chocolate ','fresh cream ' ,'coffee ' ,  'smoked paprika '],
    description: 'A bold fusion of smoked paprika, rich chocolate, and fresh cream.Deep, smoky notes meet velvety sweetness, creating an unexpected and intriguing flavor',
    allergens:['lactose','smoked paprika'],
    image:shocko,
     price:9.99,
    defaultMilk: 'classic'
    },
    menu:{
    title: 'Mystic Blend',
    description: 'A bold fusion of smoked paprika, rich chocolate, and fresh cream.',
    volume:330,
    price:9.99,
    image:mystic,
    }
  },
  harmony:{
    id:'harmony',
    modal:{
    title: 'Aura harmony',
    ingredients: ['coffee','vanilla','ice', 'alternative milk'],
    description: 'Chilled coffee with alternative milk and vanilla. Balanced, refreshing, and light — designed to cool the body and steady the mind.',
    allergens:['almond'],
    image:vanila,
     price:9.99,
    defaultMilk: 'oat'
    },
    menu:{
    title: 'Aura harmony',
    description:'Chilled coffee with alternative milk and vanilla.',
    volume:330,
    price:9.99,
    image:harmony,
    }
   
  },
  ephemeral:{
    id:'ephemeral',
    modal:{
    title: 'Ephemeral Brew',
    ingredients: ['coffee','milk', 'cinnamon','pumpkin puree'],
    description: 'A coffee that changes with the seasons.  Autumn: pumpkin and warm harvest notes. Always fleeting. Always new.A taste that exists only for a moment.',
    allergens:['cinnamon'],
    image:pumpkin,
    defaultMilk: 'lactose-free',
     price:9.99,
    type: 'coffee'
    },
    menu:{
    title: 'Ephemeral Brew',
    description: 'A taste that exists only for a moment.Always fleeting. Always new.',
    volume:330,
    price:9.99,
    image:sesonail,
    type: 'coffee'
    }
  },
  lunar:{
    id:'lunar',
    modal:{
    title:'Lunar Brew',
    ingredients: ['coffee','fresh cream','milk'],
    description: 'Decaffeinated coffee with your choice of add-ins.Gentle, calming, and flexible — perfect for late nights and quiet rituals.',
    allergens:['lactose'],
    image:decaf,
     defaultMilk: 'classic',
      price:9.99,
     type: 'coffee'
    },
    menu:{
    title:'Lunar Brew',
    description:'Decaffeinated coffee with milk.Gentle, calming, and flexible.',
    volume:330,
    price:9.99,
    image:lunar,
     type: 'coffee'
    }
  },
  fortune:{
    id:'fortune',
    modal:{
    title: "Fortune's Choice",
    ingredients: ['coffee','fresh cream','milk'],
    description:'Let the barista decide.A personalized coffee experience where intuition leads the flavor.Trust the moment. Trust the craft.',
    allergens:['lactose','almond','cinnamon','smoked paprika'],
    image:barista,
     defaultMilk: 'classic',
    price:9.99,
     type: 'coffee'
    },
    menu:{
    title: "Fortune's Choice",
    description:'Fortune’s Choice coffee selected by the barista',
    price:9.99,
    volume:330,
    image:reading,
     type: 'coffee'
    }
  },
  pure: {
  id: 'pure',
  title: 'Pure Ritual',
  ingredients: ['coffee'],
  description: 'No milk. No syrup. No distractions. Just pure coffee in its grounded form.',
  allergens: [],
  volume: 330,
  price: 9.99,
  image:black,
  type: 'coffee'
}
}
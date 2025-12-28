import day from '../assets/day.webp';
import sun from '../assets/sun.webp';
import ground from '../assets/ground.webp';
import moon from '../assets/moon.webp';
export const strenghtOptions={
  zero:{
    id:'zero',
    description:'Zero caffeine. For calm evenings and inner quiet.',
    title:'Decaf',
    image:moon
  },
  light:{
    id:'light',
    title:'Light roast',
    description:'Light roast. Gentle focus without pressure.',
    image:sun
  },
  medium:{
    id:'medium',
    title:'Medium roast',
    description:'Medium strength. Calm energy and grounded flow.',
    image:day
  },
  strong:{
    id:'strong',
    title:'Strong roast',
    description:'Deep roast. For endurance and embodied power.',
    image:ground
  }
}


import imgOud from '../assets/oud.png';
import imgRose from '../assets/floral.png';
import imgAmber from '../assets/Amb.png';
import imgVelvet from '../assets/musk.png';
import imgVanila from '../assets/gourmand.png';
import imgBlackash from '../assets/blackash.png';
import imgVelisse from '../assets/velisse.png';
import imgAventra from '../assets/aventra.png';
import imgBlackSafron from '../assets/black safron.png';
import imgPink from '../assets/pink.png';

// Reusing existing images for now to represent the products
export const products = [
  { id: '01', name: 'Golden Emir', family: 'Amber', price: 320, img: imgAmber },
  { id: '02', name: 'Cavalier Oud', family: 'Oud', price: 380, img: imgOud },
  { id: '03', name: 'Royal Ember', family: 'Amber', price: 340, img: imgBlackSafron },
  { id: '04', name: 'Black Musc', family: 'Musk', price: 310, img: imgBlackash },
  { id: '05', name: 'Rose Desire', family: 'Floral', price: 290, img: imgRose },
  { id: '06', name: 'Rosemoir', family: 'Floral', price: 330, img: imgRose },
  { id: '07', name: 'Velvet Femme', family: 'Floral', price: 295, img: imgVelvet },
  { id: '08', name: 'Velora Blanc', family: 'Musk', price: 275, img: imgVelisse },
  { id: '09', name: 'Cassian', family: 'Oud', price: 285, img: imgAventra },
  { id: '10', name: 'Wanted', family: 'Oud', price: 280, img: imgOud },
  { id: '11', name: 'Vanilla Powdery', family: 'Gourmand', price: 265, img: imgVanila },
  { id: '12', name: 'Pink Elixir', family: 'Gourmand', price: 270, img: imgPink }
];

export const families = [
  { 
    id: 'oud', 
    number: '01', 
    name: 'Oud', 
    subtitle: 'Resin & smoke', 
    description: 'Agarwood, leather and smoked cedar. The heaviest thing we make.',
    notes: 'Oud · Leather · Birch Tar · Smoked Cedar',
    img: imgOud
  },
  { 
    id: 'floral', 
    number: '02', 
    name: 'Floral', 
    subtitle: 'Rose & tuberose', 
    description: 'Damask rose and tuberose kept dark — floral, never pretty.',
    notes: 'Damask Rose · Tuberose · Jasmine Sambac · Peony',
    img: imgRose
  },
  { 
    id: 'amber', 
    number: '03', 
    name: 'Amber', 
    subtitle: 'Warmth & spice', 
    description: 'Saffron, labdanum and honeyed resin over dry wood.',
    notes: 'Saffron · Labdanum · Amberwood · Benzoin',
    img: imgAmber
  },
  { 
    id: 'musk', 
    number: '04', 
    name: 'Musk', 
    subtitle: 'Skin & linen', 
    description: 'Iris, ambergris and white musk. Worn close, noticed late.',
    notes: 'White Musk · Iris · Ambergris · Cashmeran',
    img: imgVelvet
  },
  { 
    id: 'gourmand', 
    number: '05', 
    name: 'Gourmand', 
    subtitle: 'Vanilla & praline', 
    description: 'Bourbon vanilla, tonka and praline — powdery rather than sugary.',
    notes: 'Bourbon Vanilla · Tonka Bean · Praline · Heliotrope',
    img: imgVanila
  }
];

export const getFamilyCount = (familyName) => {
  return products.filter(p => p.family === familyName).length;
};

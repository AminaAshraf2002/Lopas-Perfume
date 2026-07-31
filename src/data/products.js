import img1 from '../assets/5.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.png';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';

// Reusing existing images for now to represent the products
export const products = [
  { id: '01', name: 'Golden Emir', family: 'Amber', price: 320, img: img1 },
  { id: '02', name: 'Cavalier Oud', family: 'Oud', price: 380, img: img2 },
  { id: '03', name: 'Royal Ember', family: 'Amber', price: 340, img: img3 },
  { id: '04', name: 'Black Musc', family: 'Musk', price: 310, img: img4 },
  { id: '05', name: 'Rose Desire', family: 'Floral', price: 290, img: img5 },
  { id: '06', name: 'Rosemoir', family: 'Floral', price: 330, img: img6 },
  { id: '07', name: 'Velvet Femme', family: 'Floral', price: 295, img: img7 },
  { id: '08', name: 'Velora Blanc', family: 'Musk', price: 275, img: img8 },
  { id: '09', name: 'Cassian', family: 'Oud', price: 285, img: img1 },
  { id: '10', name: 'Wanted', family: 'Oud', price: 280, img: img2 },
  { id: '11', name: 'Vanilla Powdery', family: 'Gourmand', price: 265, img: img3 },
  { id: '12', name: 'Pink Elixir', family: 'Gourmand', price: 270, img: img4 }
];

export const families = [
  { 
    id: 'oud', 
    number: '01', 
    name: 'Oud', 
    subtitle: 'Resin & smoke', 
    description: 'Agarwood, leather and smoked cedar. The heaviest thing we make.',
    notes: 'Oud · Leather · Birch Tar · Smoked Cedar',
    img: img2
  },
  { 
    id: 'floral', 
    number: '02', 
    name: 'Floral', 
    subtitle: 'Rose & tuberose', 
    description: 'Damask rose and tuberose kept dark — floral, never pretty.',
    notes: 'Damask Rose · Tuberose · Jasmine Sambac · Peony',
    img: img5
  },
  { 
    id: 'amber', 
    number: '03', 
    name: 'Amber', 
    subtitle: 'Warmth & spice', 
    description: 'Saffron, labdanum and honeyed resin over dry wood.',
    notes: 'Saffron · Labdanum · Amberwood · Benzoin',
    img: img3
  },
  { 
    id: 'musk', 
    number: '04', 
    name: 'Musk', 
    subtitle: 'Skin & linen', 
    description: 'Iris, ambergris and white musk. Worn close, noticed late.',
    notes: 'White Musk · Iris · Ambergris · Cashmeran',
    img: img4
  },
  { 
    id: 'gourmand', 
    number: '05', 
    name: 'Gourmand', 
    subtitle: 'Vanilla & praline', 
    description: 'Bourbon vanilla, tonka and praline — powdery rather than sugary.',
    notes: 'Bourbon Vanilla · Tonka Bean · Praline · Heliotrope',
    img: img8
  }
];

export const getFamilyCount = (familyName) => {
  return products.filter(p => p.family === familyName).length;
};

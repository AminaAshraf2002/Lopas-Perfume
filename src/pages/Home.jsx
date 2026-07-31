import React from 'react';
import VideoHero from '../components/VideoHero';
import PerfumeExperience from '../components/PerfumeExperience';
import PerfumeInProduction from '../components/PerfumeInProduction';
import BlackMarquee from '../components/BlackMarquee';
import OlfactoryEcosystem from '../components/OlfactoryEcosystem';
import FormulaBanner from '../components/FormulaBanner';
import ProcessSteps from '../components/ProcessSteps';
import HouseFacility from '../components/HouseFacility';
import OlfactoryHouses from '../components/OlfactoryHouses';
import ManufacturingShowcase from '../components/ManufacturingShowcase';
import ProductGrid from '../components/ProductGrid';
import ParallaxCTA from '../components/ParallaxCTA';

// The SpinReveal was requested to be kept, I will place it before ProductGrid
import SpinReveal from '../components/SpinReveal';
import blaaBg from '../assets/blaa.png';

export default function Home() {
  return (
    <>
      <VideoHero />
      <PerfumeExperience />
      <PerfumeInProduction />
      <BlackMarquee />
      <OlfactoryEcosystem />
            {/* <SpinReveal /> */}

   
      <ProcessSteps />
      
      <div style={{ backgroundImage: `url(${blaaBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
        <ManufacturingShowcase />
        <ProductGrid />
      </div>

      <HouseFacility />
      <OlfactoryHouses />
      <ParallaxCTA />
    </>
  );
}

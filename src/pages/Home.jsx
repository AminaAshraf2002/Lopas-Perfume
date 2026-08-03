import React, { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThreeHero from '../components/ThreeHero';
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
import CollageSection from '../components/CollageSection';

// The SpinReveal was requested to be kept, I will place it before ProductGrid
import SpinReveal from '../components/SpinReveal';
import blaaBg from '../assets/blaa.png';

export default function Home() {
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(t => t.revert());
    };
  }, []);

  return (
    <>
      <ThreeHero />
      <PerfumeInProduction />
      <PerfumeExperience />
      <BlackMarquee />
      <OlfactoryEcosystem />
            {/* <SpinReveal /> */}

   
      <ProcessSteps />
      <CollageSection />
      
      <div style={{ backgroundImage: `url(${blaaBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
        {/* <ManufacturingShowcase /> */}
        <ProductGrid />
      </div>

      <HouseFacility />
      <OlfactoryHouses />
      <ParallaxCTA />
    </>
  );
}

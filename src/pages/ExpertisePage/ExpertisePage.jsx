import React from 'react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import ExpertiseHero from './ExpertiseHero';
import Footer from '../../components/Footer/Footer';
import ExpertiseSection from '../../components/ExpertiseSection/ExpertiseSection';
import SustainabilitySection from '../../components/SustainabilitySection/SustainabilitySection';
import ResearchTechnologySection from '../../components/ResearchTechnologySection/ResearchTechnologySection';

export default function ExpertisePage() {
  useSmoothScroll();

  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden">
      <div className="w-full mx-auto relative z-10 bg-black overflow-hidden">
        <ExpertiseHero />
        <ExpertiseSection />
        <SustainabilitySection />
        <ResearchTechnologySection />
      </div>
      <Footer />
    </main>
  );
}

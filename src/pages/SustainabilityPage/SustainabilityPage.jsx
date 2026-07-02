import React, { useEffect } from 'react';
import SustainabilityHero from './SustainabilityHero';
import SustainabilityIntro from './SustainabilityIntro';
import SustainabilityVideoSection from './SustainabilityVideoSection';
import SustainabilityContent from './SustainabilityContent';
import SustainabilityProjects from './SustainabilityProjects';
import Footer from '../../components/Footer/Footer';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

export default function SustainabilityPage() {
  useSmoothScroll();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden">
      <SustainabilityHero />
      <SustainabilityIntro />
      <SustainabilityVideoSection />
      <SustainabilityContent />
      <SustainabilityProjects />
      <Footer />
    </main>
  );
}

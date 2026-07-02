import React from 'react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import AboutHero from './AboutHero';
import AboutIntro from './AboutIntro';
import AboutVideoSection from './AboutVideoSection';
import AboutGrid from './AboutGrid';
import Footer from '../../components/Footer/Footer';

export default function AboutPage() {
  useSmoothScroll();

  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden">
      <div className="w-full mx-auto relative z-10 bg-black overflow-hidden">
        <AboutHero />
        <AboutIntro />
        <AboutVideoSection />
        <AboutGrid />
      </div>
      <Footer />
    </main>
  );
}

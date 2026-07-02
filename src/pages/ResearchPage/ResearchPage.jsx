import React from 'react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import ResearchHero from './ResearchHero';
import ResearchIntro from './ResearchIntro';
import ResearchQuote from './ResearchQuote';
import ResearchVideoSection from './ResearchVideoSection';
import ResearchSolutions from './ResearchSolutions';
import ResearchGrid from './ResearchGrid';
import Footer from '../../components/Footer/Footer';

export default function ResearchPage() {
  useSmoothScroll();

  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden">
      <div className="w-full mx-auto relative z-10 bg-black overflow-hidden">
        <ResearchHero />
        <ResearchIntro />
        <ResearchQuote />
        <ResearchVideoSection />
        <ResearchSolutions />
        <ResearchGrid />
      </div>
      <Footer />
    </main>
  );
}

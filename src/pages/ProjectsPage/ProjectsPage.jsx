import React from 'react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import ProjectsHero from './ProjectsHero';
import ProjectsFilter from './ProjectsFilter';
import ProjectsGrid from './ProjectsGrid';
import Footer from '../../components/Footer/Footer';

export default function ProjectsPage() {
  useSmoothScroll();

  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden">
      <div className="w-full mx-auto relative z-10 bg-black overflow-hidden">
        <ProjectsHero />
        <ProjectsFilter />
        <ProjectsGrid />
      </div>
      <Footer />
    </main>
  );
}

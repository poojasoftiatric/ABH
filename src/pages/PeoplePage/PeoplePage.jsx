import React from 'react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import PeopleHero from './PeopleHero';
import PeopleFilter from './PeopleFilter';
import PeopleGrid from './PeopleGrid';
import Footer from '../../components/Footer/Footer';

export default function PeoplePage() {
  useSmoothScroll();

  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden">
      <div className="w-full mx-auto relative z-10 bg-black overflow-hidden">
        <PeopleHero />
        <PeopleFilter />
        <PeopleGrid />
      </div>
      <Footer />
    </main>
  );
}

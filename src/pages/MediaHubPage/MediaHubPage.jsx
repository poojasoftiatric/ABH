import React, { useEffect } from 'react';
import MediaHubHero from './MediaHubHero';
import MediaHubNews from './MediaHubNews';
import MediaHubEvents from './MediaHubEvents';
import MediaHubPublications from './MediaHubPublications';
import Footer from '../../components/Footer/Footer';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

export default function MediaHubPage() {
  useSmoothScroll();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden">
      <MediaHubHero />
      <MediaHubNews />
      <MediaHubEvents />
      <MediaHubPublications />
      <Footer />
    </main>
  );
}

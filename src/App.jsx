import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Hero from './components/Hero/Hero';
import IntroSection from './components/IntroSection/IntroSection';
import Banner from './components/Banner/Banner';
import NewsCarousel from './components/NewsCarousel/NewsCarousel';
import ExpertiseSection from './components/ExpertiseSection/ExpertiseSection';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function Home() {
  useSmoothScroll();
  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden">
      <Hero />
      <IntroSection />
      <Banner />
      <NewsCarousel />
      <ExpertiseSection />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

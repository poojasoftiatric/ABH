import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import Hero from './components/Hero/Hero';
import IntroSection from './components/IntroSection/IntroSection';
import Banner from './components/Banner/Banner';
import NewsCarousel from './components/NewsCarousel/NewsCarousel';
import ExpertiseSection from './components/ExpertiseSection/ExpertiseSection';
import AboutSection from './components/AboutSection/AboutSection';
import ResearchTechnologySection from './components/ResearchTechnologySection/ResearchTechnologySection';
import SustainabilitySection from './components/SustainabilitySection/SustainabilitySection';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

import ContactPage from './pages/ContactPage/ContactPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ExpertisePage from './pages/ExpertisePage/ExpertisePage';
import PeoplePage from './pages/PeoplePage/PeoplePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ResearchPage from './pages/ResearchPage/ResearchPage';
import SustainabilityPage from './pages/SustainabilityPage/SustainabilityPage';
import MediaHubPage from './pages/MediaHubPage/MediaHubPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage/TermsOfUsePage';

function Home() {
  useSmoothScroll();
  console.log("Rendering Home Component");
  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden">
      <Hero />
      <IntroSection />
      <Banner />
      <NewsCarousel />
      <ExpertiseSection />
      <AboutSection />
      <ResearchTechnologySection />
      <SustainabilitySection />
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
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/expertise" element={<ExpertisePage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/sustainability" element={<SustainabilityPage />} />
        <Route path="/media-hub" element={<MediaHubPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-use" element={<TermsOfUsePage />} />
      </Routes>
    </Router>
  );
}

export default App;

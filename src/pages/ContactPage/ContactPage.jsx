import React from 'react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import Footer from '../../components/Footer/Footer';
import ContactBanner from './ContactBanner';
import ContactForm from './ContactForm';
import ContactLocations from './ContactLocations';
import ContactsSection from './ContactsSection';

export default function ContactPage() {
  useSmoothScroll();

  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden">
      <ContactBanner />
      <ContactForm />
      <ContactLocations />
      <ContactsSection />
      <Footer />
    </main>
  );
}

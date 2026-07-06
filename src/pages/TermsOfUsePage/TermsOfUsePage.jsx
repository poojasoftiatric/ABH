import React from 'react';
import Footer from '../../components/Footer/Footer';
import HeroImage from '../../components/common/HeroImage';
import ContentSection from '../../components/common/ContentSection';

export default function TermsOfUsePage() {
  return (
    <div className="w-full bg-black text-white min-h-screen">
      
      {/* Hero Section */}
      <HeroImage 
        title="Terms of Use"
        imgSrc="https://media-prod.zha.com/zhweb-prod-media/media/lcej4iia/01825_cp_hc_jan25_n313292.jpg?w=1920"
        imgAlt="Terms of Use Hero"
        heightClass="h-[60vh] md:h-[90vh]"
        grayscale={true}
        hideScrollIcon={true}
        titleClassName="font-primary text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white"
      />

      {/* Main Content Area */}
      <div className="w-full px-6 md:px-12 py-16 md:py-24 flex flex-col gap-32">
        
        {/* Section 1: Terms */}
        <ContentSection dividerColor={null}>
            <p className="text-xl">
              You may not copy, reproduce, publish, download, post, broadcast, transmit, make available to the public, or otherwise use the content displayed on this website. You may not to adapt, alter or create a derivative work from any content. ABH must approve all usage before any publication or broadcast.
            </p>
            
            <p className="text-xl">
              For the avoidance of doubt, any use of content requires the prior written consent of ABH, including for the reproduction of content in a book or industrial purpose, or for commercial purpose.
            </p>
            
            <p className="text-xl">
              The names, images and logos identifying ABH and/or third parties and their products and services are subject to copyright, design rights and trademarks of ABH, and/or third parties. Nothing contained in these terms shall be construed as conferring by implication, estoppel or otherwise any licence or right to use any trademark, design right or copyright of ABH any other third party.
            </p>
            
            <p className="text-xl">
              ABH shall not be responsible for any loss or expenses resulting from the use of this website and hold ABH harmless from all liability arising from such use.
            </p>
        </ContentSection>

      </div>
      
      <Footer />
    </div>
  );
}

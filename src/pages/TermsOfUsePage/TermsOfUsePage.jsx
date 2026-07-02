import React from 'react';
import Footer from '../../components/Footer/Footer';

export default function TermsOfUsePage() {
  return (
    <div className="w-full bg-black text-white min-h-screen">
      
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden">
        <img 
          src="https://media-prod.zha.com/zhweb-prod-media/media/lcej4iia/01825_cp_hc_jan25_n313292.jpg?w=1920" 
          alt="Terms of Use Hero" 
          className="w-full h-full object-cover grayscale opacity-80"
        />
        <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 pb-12 md:pb-16">
          <h1 className="font-primary text-5xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight">
            Terms of Use
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full px-6 md:px-12 py-16 md:py-24 flex flex-col gap-32">
        
        {/* Section 1: Terms */}
        <div className="flex flex-col md:flex-row w-full">
          <div className="hidden md:block md:w-1/3 relative">
            
          </div>
          <div className="w-full md:w-2/3 max-w-2xl flex flex-col gap-8 font-primary leading-relaxed text-[#a0a0a0]">
            
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
            
          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}

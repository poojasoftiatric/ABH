import React from 'react';

export default function SustainabilityContent() {
  return (
    <div className="w-full bg-black text-white px-6 md:px-12 py-16 md:py-24">
      
      {/* 1. Essential Criteria */}
      <div className="flex flex-col md:flex-row w-full gap-8 md:gap-16 mb-14 items-start text-left">
        <div className="w-full md:w-1/3 flex flex-col justify-start">
           <h2 className="font-primary text-3xl md:text-4xl lg:text-5xl leading-tight font-normal">
            Essential criteria for<br/>carbon reduction
          </h2>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <p className="font-primary text-sm md:text-base text-gray-300 leading-relaxed">
            We view the challenges of sustainability as opportunities to design better buildings: buildings that are healthier for our clients, more efficient to run, and adaptable for the future. We are a member of the UK Green Buildings Council, and we work with various partners to help us continuously learn and evolve to achieve more sustainable results. We created a Low Carbon Strategy Handbook that sets a benchmark of essential criteria to reduce operational and embodied carbon in all building types, and we conduct regular audits to analyse the impact of our design decisions and promote carbon-aware decision making. In tandem with our design work, we track all forms of our practice's carbon consumption and are formulating a plan to make meaningful reductions by 2030 and 2050.
          </p>
        </div>
      </div>

      {/* 2. Image Collage */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center my-32">
        {/* Left Tall Image */}
        <div className="w-[80%] md:w-5/12 aspect-[3/4] relative overflow-hidden rounded-sm">
          <img 
            src="https://picsum.photos/seed/zha-sustain-tall/800/1000" 
            alt="Sustainable Skyscraper" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
          />
        </div>
        
        {/* Right Landscape Image */}
        <div className="w-full md:w-6/12 aspect-video relative overflow-hidden rounded-sm md:-mt-32">
          <img 
            src="https://picsum.photos/seed/zha-sustain-wide/1200/800" 
            alt="Sustainable Structure" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
          />
        </div>
      </div>

      {/* 3. A Legacy of Quality */}
      <div className="flex flex-col md:flex-row w-full gap-8 md:gap-16 mt-24 justify-end">
        <div className="w-full md:w-1/3 flex flex-col justify-start">
           <h2 className="font-primary text-3xl md:text-4xl lg:text-5xl leading-tight font-normal">
            A legacy of quality<br/>and longevity
          </h2>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <p className="font-primary text-sm md:text-base text-gray-300 leading-relaxed">
            Our teams are trained to design in a sustainable way and supported by our in-house Environmental & Sustainability team. We have developed cutting-edge software to model, analyse, and improve every aspect of a building's design, from orientation and ventilation to solar shading and incorporating renewable energy sources. Using detailed computer simulations, we assess local and regional climate patterns, anticipate the impact of climate change, and produce information to assist clients in making informed decisions. Our processes and methodologies are audited by a third party, providing clients with independent verification of the information we produce. Working together, we deliver buildings of unparalleled quality and longevity, manifesting a legacy that benefits both present and future generations.
          </p>
        </div>
      </div>

    </div>
  );
}

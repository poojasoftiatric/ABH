import React from 'react';

export default function SustainabilityVideoSection() {
  return (
    <div className="w-full h-[60vh] md:h-[80vh] relative bg-black px-6 md:px-12 pb-16 md:pb-24">
      <div className="w-full h-full relative group cursor-pointer overflow-hidden rounded-sm">
        <img 
          src="https://picsum.photos/seed/zha-sustain-video/2000/1000" 
          alt="Sustainability Video Preview" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale opacity-80"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all duration-500">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-8 h-8 ml-1"
            >
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        {/* Label */}
        <div className="absolute top-6 left-6 md:top-12 md:left-12">
          <span className="font-primary text-xs md:text-sm tracking-widest uppercase text-white">Video</span>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function ExpertiseHero() {
  return (
    <div className="relative w-full h-[60vh] md:h-[100vh] bg-black">
      {/* Image Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="https://media-prod.zha.com/zhweb-prod-media/media/xw3noymh/beeah-headquarters-by-zaha-hadid-architects-09.jpg?w=1920&g=0.5x0.5&fm=webp"
          alt="Expertise Hero"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-12">
        <div className="flex justify-between items-end w-full">
          <h1 className="text-white font-primary text-6xl md:text-8xl lg:text-[120px] tracking-tighter leading-none mb-0 pb-0">
            Expertise
          </h1>
          
          {/* Scroll / Drag Icon (placeholder SVG) */}
          <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/30 mb-4 cursor-pointer hover:bg-white/10 transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <path d="M12 5v14M12 19l-4-4M12 19l4-4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

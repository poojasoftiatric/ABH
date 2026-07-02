import React from 'react';

export default function ProjectsHero() {
  return (
    <div className="relative w-full h-[60vh] md:h-[95vh] bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1062058141?muted=1&autoplay=1&pip=0&controls=0&dnt=1&loop=1&background=1&app_id=122963"
          className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Projects Hero Video"
        ></iframe>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-12">
        <div className="flex justify-between items-end w-full">
          <h1 className="text-white font-primary text-6xl md:text-8xl lg:text-[120px] tracking-tighter leading-none mb-0 pb-0">
            Projects
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

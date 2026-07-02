import React from 'react';

export default function AboutVideoSection() {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] bg-black overflow-hidden border-t border-[#222]">
      {/* Top Left Tag */}
      <div className="absolute top-6 left-6 md:top-12 md:left-12 z-20 border-b-2 border-teal-600 pb-1 pr-12">
        <p className="font-primary text-xs tracking-widest uppercase font-medium text-white">Video</p>
      </div>

      {/* Large Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://picsum.photos/seed/zha-video-bg/2000/1000?grayscale"
          alt="Curved Architecture Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Video Preview Inset */}
      <div className="absolute bottom-12 left-6 md:left-12 z-10 w-[80%] max-w-sm rounded-lg overflow-hidden group cursor-pointer shadow-2xl">
        <div className="relative aspect-video w-full bg-black">
          <img
            src="https://picsum.photos/seed/zha-video-thumb/800/450?grayscale"
            alt="Video Preview"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Watch Now Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/40 bg-black/30 backdrop-blur-md flex items-center justify-center text-white text-[8px] md:text-[10px] font-bold tracking-widest uppercase leading-tight text-center pointer-events-auto transition-transform group-hover:scale-110">
              Watch<br />Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function ContactBanner() {
  return (
    <div className="relative w-full h-[70vh] md:h-[90vh] flex items-end">
      {/* Background Image */}
      <img
        src="https://media-prod.zha.com/zhweb-prod-media/media/cyci1ohj/01708_cp_vsb_nov19_n266088.jpg?w=1920&g=0.5x0.5&fm=webp"
        alt="ABH Architecture"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 p-12 md:p-14 w-full">
        <h1 className="text-5xl md:text-8xl font-normal text-white">Contact Us</h1>
      </div>
    </div>
  );
}

import React from 'react';

export default function ResearchQuote() {
  return (
    <div className="w-full bg-black text-white px-6 md:px-12 py-32 flex flex-col justify-center min-h-[60vh] border-b border-[#222]">
      <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-normal max-w-6xl mb-16 tracking-tight">
        "ABH uses digitisation to extend and update traditional architectural knowledge by promoting circular and sustainable design of buildings and cities."
      </h2>
      
      <div className="flex gap-8 text-s font-primary text-gray-400">
        <span className="text-white pb-1 pr-12">Domus Magazine</span>
        <span>on Striatus</span>
      </div>
    </div>
  );
}

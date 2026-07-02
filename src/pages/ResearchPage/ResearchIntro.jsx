import React from 'react';

export default function ResearchIntro() {
  return (
    <div className="w-full bg-black text-white px-6 md:px-12 py-24 flex flex-col md:flex-row justify-between items-start gap-12 border-b border-[#222]">
      <div className="w-full md:w-1/3">
        <h2 className="font-primary text-2xl md:text-4xl tracking-tight font-normal leading-snug">
          Driven by a culture of<br />innovation
        </h2>
      </div>
      
      <div className="w-full md:w-2/3 max-w-4xl">
        <p className="font-primary text-2xl md:text-4xl text-teal-600 leading-tight font-normal">
          ABH has been driven by research and experimentation since the practice was founded almost fifty years ago. Our research propels us to redefine the possible, forging innovative pathways that expand the frontiers of design and construction.
        </p>
      </div>
    </div>
  );
}

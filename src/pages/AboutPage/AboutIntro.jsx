import React from 'react';

export default function AboutIntro() {
  return (
    <div className="w-full bg-black text-white px-6 md:px-12 py-24 flex flex-col md:flex-row justify-between items-start gap-12">
      <div className="w-full md:w-1/3">
        <h2 className="font-primary text-2xl md:text-3xl tracking-tight font-normal">
          Inside ABH
        </h2>
      </div>
      
      <div className="w-full md:w-2/3 max-w-4xl">
        <p className="font-primary text-2xl md:text-4xl text-teal-600 leading-snug font-normal">
          ABH was founded by Dame Zaha. Since day one, the practice has been committed to advancing multidisciplinary research to address the challenges impacting communities around the world. For almost 50 years, we have been redefining architecture to build a better future.
        </p>
      </div>
    </div>
  );
}

import React from 'react';

export default function SustainabilityIntro() {
  return (
    <div className="w-full bg-black text-white px-6 md:px-12 py-16 md:py-20">
      
      {/* Top Intro Block */}
      <div className="flex flex-col md:flex-row w-full gap-8 md:gap-16 mb-24 md:mb-40">
        <div className="w-full md:w-1/3">
          <h2 className="font-primary text-2xl md:text-3xl lg:text-4xl leading-tight font-normal">
            Complete life-cycle<br/> design
          </h2>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2">
          <p className="font-primary text-lg md:text-2xl text-[#3b9f93] leading-relaxed font-light">
            ABH is committed to pursuing more sustainable forms of design and construction to reduce our impact on the environment and play our part in the Race to Net Zero. Holistic design approaches, seamless project management, and full life-cycle planning are critical components of our efforts to create buildings that stand the test of time.
          </p>
        </div>
      </div>

      {/* Quote Block */}
      <div className="w-full max-w-5xl">
        <h3 className="font-primary text-3xl md:text-5xl lg:text-5xl leading-tight font-normal tracking-tight mb-8">
          “ABH uses digitisation to extend and update traditional architectural knowledge by promoting circular and sustainable design of buildings and cities.”
        </h3>
        <p className="font-primary text-sm md:text-base text-gray-400 font-light">
          Domus Magazine
        </p>
      </div>
    </div>
  );
}

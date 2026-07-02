import React from 'react';

export default function ResearchSolutions() {
  return (
    <div className="w-full bg-black text-white px-6 md:px-12 py-32 flex flex-col md:flex-row justify-center items-start border-b border-[#222]">
      <div className="w-full max-w-4xl flex flex-col items-center text-center md:text-left md:items-end">
        <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl tracking-tight font-normal mb-10 text-center md:text-left">
          Pioneering technology-driven<br />solutions
        </h2>
        
        {/* Gradient Line separator */}
        {/* <div className="h-[2px] w-full md:w-[60%] bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 opacity-50 mb-10 self-start"></div> */}

        <p className="font-primary text-sm md:text-base text-gray-300 leading-relaxed font-normal max-w-2xl text-left self-start md:ml-[18%]">
          Our research groups develop solutions that enhance efficiencies throughout the design, construction, and operations phase of each project. We create cutting-edge software and computational tools to evaluate a building's proposed design and construction, gather insights into predicted human interactions within a space, and assess environmental factors to optimise sustainability. The depth of knowledge, expertise, and experience amassed from our continuous research ensures that the practice remains at the forefront of redefining architecture for the 21st century.
        </p>
      </div>
    </div>
  );
}

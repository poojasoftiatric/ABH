import React from 'react';
import NewsCarousel from '../../components/NewsCarousel/NewsCarousel';

const sustainabilityProjects = [
  {
    id: 1,
    title: 'Central Bank of Iraq',
    date: '2012 - TBC',
    img: 'https://picsum.photos/seed/zha-sustain-iraq/1600/900',
    credit: 'Baghdad, Iraq',
  },
  {
    id: 2,
    title: 'Beeah Headquarters',
    date: '2013 - 2022',
    img: 'https://picsum.photos/seed/zha-sustain-beeah/1600/900',
    credit: 'Sharjah, UAE',
  },
  {
    id: 3,
    title: 'Forest Green Rovers Eco Park Stadium',
    date: '2016 - TBC',
    img: 'https://picsum.photos/seed/zha-sustain-stadium/1600/900',
    credit: 'Stroud, UK',
  },
  {
    id: 4,
    title: 'Infinitus Plaza',
    date: '2016 - 2021',
    img: 'https://picsum.photos/seed/zha-sustain-infinitus/1600/900',
    credit: 'Guangzhou, China',
  }
];

export default function SustainabilityProjects() {
  return (
    <div className="w-full bg-black text-white overflow-hidden">
      <NewsCarousel 
        items={sustainabilityProjects}
        title="Explore sustainability in our recent projects"
        description="From energy production to material reduction and re-use, we employ multi-faceted design strategies to optimise sustainability in our projects. Learn more."
        sectionName="Projects"
        tagLabel="Project"
      />
    </div>
  );
}

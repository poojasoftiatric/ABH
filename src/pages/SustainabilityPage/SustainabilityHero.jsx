import React from 'react';
import HeroVideo from '../../components/common/HeroVideo';

export default function SustainabilityHero() {
  return (
    <HeroVideo 
      title="Sustainability" 
      vimeoId="1062435323" 
      videoTitle="Sustainability Hero Video" 
      videoScale="150%"
      hasGsapAnimation={true}
      hideScrollIcon={true}
      titleClassName="font-primary text-5xl md:text-8xl lg:text-9xl tracking-tighter font-medium max-w-7xl"
    />
  );
}

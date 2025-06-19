import React from 'react';
import AboutHero from './AboutHero';
import MissionValues from './MissionValues';
import ServicesShowcase from './ServicesShowcase';
import TechnologyStack from './TechnologyStack';
import AboutCTA from './AboutCTA';

interface AboutPageProps {
  className?: string;
}

export default function AboutPage({ className = '' }: AboutPageProps) {
  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${className}`}
      style={{ backgroundColor: 'var(--color-background)' }}>
      <AboutHero />
      <MissionValues />
      <ServicesShowcase />
      <TechnologyStack />
      <AboutCTA />
    </div>
  );
}

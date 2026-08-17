
import React from 'react';
import { Hero } from '@/components/Hero';
import { BrandsMarquee } from '@/components/BrandsMarquee';
import { About } from '@/components/About';
import { Portfolio } from '@/components/Portfolio';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <BrandsMarquee />
      <About />

      <Portfolio />
      <Contact />
    </div>
  );
};

export default Index;

import React, { Suspense, lazy } from 'react';
import { Hero } from '@/components/Hero';
import { BrandsMarquee } from '@/components/BrandsMarquee';
import { About } from '@/components/About';

const Portfolio = lazy(() => import('@/components/Portfolio').then(m => ({ default: m.Portfolio })));
const Contact = lazy(() => import('@/components/Contact').then(m => ({ default: m.Contact })));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <BrandsMarquee />
      <About />

      <Suspense fallback={<div className="min-h-[40vh] bg-background" />}>
        <Portfolio />
        <Contact />
      </Suspense>
    </div>
  );
};

export default Index;

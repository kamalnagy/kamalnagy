import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '@/components/Hero';
import { BrandsMarquee } from '@/components/BrandsMarquee';
import { About } from '@/components/About';

const Portfolio = lazy(() => import('@/components/Portfolio').then(m => ({ default: m.Portfolio })));
const Contact = lazy(() => import('@/components/Contact').then(m => ({ default: m.Contact })));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Kamal Nagy — SEO Content Writer & Digital Brand Strategist</title>
        <meta name="description" content="Kamal Nagy is a bilingual SEO content writer and digital brand creator with 5+ years of experience in legal research and content strategy." />
        <link rel="canonical" href="https://kamalnagy.lovable.app/" />
        <meta property="og:title" content="Kamal Nagy — SEO Content Writer & Digital Brand Strategist" />
        <meta property="og:description" content="Professional portfolio of Kamal Nagy, specializing in SEO content writing, digital brand messaging, and legal research." />
        <meta property="og:url" content="https://kamalnagy.lovable.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://kamalnagy.lovable.app/lovable-uploads/f9c8de36-3057-4354-9f75-c0468fc3f85e.png" />
        <meta name="twitter:title" content="Kamal Nagy — SEO Content Writer & Digital Brand Strategist" />
        <meta name="twitter:description" content="Professional portfolio of Kamal Nagy, specializing in SEO content writing, digital brand messaging, and legal research." />
        <meta name="twitter:image" content="https://kamalnagy.lovable.app/lovable-uploads/f9c8de36-3057-4354-9f75-c0468fc3f85e.png" />
      </Helmet>
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

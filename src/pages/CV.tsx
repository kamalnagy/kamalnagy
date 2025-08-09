import React from 'react';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Education } from '@/components/Education';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CV = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Curriculum Vitae</h1>
            <div className="w-[120px]" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* CV Content */}
      <main>
        {/* Professional Summary */}
        <section className="py-20 px-6 bg-muted/5">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-foreground mb-6">
                Professional <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">Summary</span>
              </h2>
            </div>
            <div className="bg-card/30 backdrop-blur-lg rounded-2xl p-8 border border-border">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Results-driven SEO Content Creator with over 1 year of experience crafting keyword-optimized content across articles, product descriptions, and landing pages. Skilled in keyword research, on-page SEO optimization, and content strategy development. Proven track record in collaborating with marketing teams to enhance organic traffic and improve search rankings.
              </p>
            </div>
          </div>
        </section>
        
        <Experience />
        <Education />
        <Skills />
      </main>
    </div>
  );
};

export default CV;
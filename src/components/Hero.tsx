
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Linkedin, FileText, Award } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { RecommendationsModal } from '@/components/RecommendationsModal';

export const Hero = () => {
  const textMeasureRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const [recommendationsOpen, setRecommendationsOpen] = useState(false);

  useEffect(() => {
    const updateHeight = () => {
      if (!textMeasureRef.current || !imageWrapperRef.current) return;
      if (window.innerWidth >= 1024) {
        const h = textMeasureRef.current.offsetHeight;
        imageWrapperRef.current.style.height = `${h}px`;
      } else {
        imageWrapperRef.current.style.height = '';
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse dark:mix-blend-lighten"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000 dark:mix-blend-lighten"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000 dark:mix-blend-lighten"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-12">
          {/* Profile Photo */}
          <div className="flex-shrink-0 order-1 lg:order-1">
            <div 
              ref={imageWrapperRef} 
              className="w-48 h-48 lg:w-64 rounded-2xl overflow-hidden shadow-2xl relative"
              style={{
                background: `linear-gradient(135deg, hsl(var(--gold-frame-light)), hsl(var(--gold-frame)), hsl(var(--gold-frame-dark)))`,
                padding: '4px'
              }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden bg-background">
                <img
                  src="/lovable-uploads/31ec1e2e-fdac-453a-bc83-b17697936c04.png"
                  alt="Kamal Nagy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Text content */}
          <div className="text-center lg:text-left animate-fade-in max-w-4xl order-2 lg:order-2">
            <div ref={textMeasureRef}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent animate-gradient">
                Kamal
              </span>
              <br />
              <span className="text-foreground">Nagy</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-4 font-light">
              <span className="bg-gradient-to-r from-gold-frame via-gold-frame-light to-gold-frame bg-clip-text text-transparent font-medium">
                SEO & Web Content Writer | Scriptwriter & Digital Brand Content Creator
              </span>
              <br />
              <span className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent font-medium">
                Independent Legal Academic Researcher
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 text-muted-foreground mb-6">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon 
                  icon={faEnvelope} 
                  style={{color: "#f5a3a7"}}
                  className="w-5 h-5"
                />
                <a 
                  href="mailto:Kamalnagy97@gmail.com"
                  className="text-sm md:text-base hover:text-primary transition-colors duration-200"
                >
                  Kamalnagy97@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon 
                  icon={faWhatsapp} 
                  style={{color: "#7ed68c"}}
                  className="w-5 h-5"
                />
                <a 
                  href="https://wa.me/201554044072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base hover:text-accent-foreground transition-colors duration-200"
                >
                  +201554044072
                </a>
              </div>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              "The right words, at the right time, can open doors, change minds, and build empires." 
              As a bilingual SEO content writer and legal academic researcher, I believe in the transformative power of word not just to communicate, but to connect.
              With over 5 years of experience in academic legal research and more than 1.5 years in SEO-driven content creation.
            </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 flex-wrap">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-gradient-start to-gradient-middle text-background px-6 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
              <a 
                href="https://linkedin.com/in/kamal-nagy" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-accent text-accent px-6 py-3 rounded-full font-semibold hover:bg-accent hover:text-accent-foreground transform transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <Link
                to="/cv"
                className="border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transform transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FileText className="w-5 h-5" />
                <span>View CV</span>
              </Link>
              <button
                onClick={() => setRecommendationsOpen(true)}
                className="border-2 border-secondary text-secondary px-6 py-3 rounded-full font-semibold hover:bg-secondary hover:text-secondary-foreground transform transition-all duration-300 flex items-center justify-center space-x-2 mt-4 sm:mt-0"
              >
                <Award className="w-5 h-5" />
                <span>Recommendations</span>
              </button>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Recommendations Modal */}
      <RecommendationsModal 
        open={recommendationsOpen} 
        onOpenChange={setRecommendationsOpen} 
      />
    </section>
  );
};

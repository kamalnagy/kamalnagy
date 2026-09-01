
import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Linkedin, FileText, Award, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { RecommendationsModal } from '@/components/RecommendationsModal';
import profilePhoto from '@/assets/kamal-profile-2026.png.asset.json';

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
                  src={profilePhoto.url}
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
              <span className="sr-only"> — SEO Content Writer & Digital Brand Content Creator</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-4 font-light">
              <span className="bg-gradient-to-r from-gold-frame via-gold-frame-light to-gold-frame bg-clip-text text-transparent font-medium">
                Bilingual SEO & Web Content Writer | Scriptwriter & Brand Content Creator
              </span>
              <br />
              <span className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent font-medium">
                Freelancer Academic Legal Researcher
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
              As a bilingual SEO content writer and legal researcher, I believe in the power of words not just to communicate, but to connect, influence, and drive action. With 2+ years in SEO-driven content and 7+ years in legal and academic research, I combine creativity, strategy, and research to create content with purpose.
            </p>
            </div>
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 flex-wrap">
                <Link
                  to="/cv"
                  className="border-2 border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transform transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <FileText className="w-5 h-5" />
                  <span>View CV</span>
                </Link>
                <a 
                  href="#top-work" 
                  className="border-2 border-destructive text-destructive opacity-60 px-6 py-3 rounded-full font-semibold hover:opacity-100 hover:bg-destructive hover:text-destructive-foreground transform transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Eye className="w-5 h-5" />
                  <span>View Top Work</span>
                </a>
              </div>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 flex-wrap">
                <a 
                  href="#contact" 
                  className="bg-gradient-to-r from-gradient-start to-gradient-middle text-background px-6 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                </a>
                <a
                  href="https://www.linkedin.com/in/kamalnagy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-accent text-accent px-6 py-3 rounded-full font-semibold hover:bg-accent hover:text-accent-foreground transform transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <button
                  onClick={() => setRecommendationsOpen(true)}
                  className="border-2 border-secondary text-secondary px-6 py-3 rounded-full font-semibold hover:bg-secondary hover:text-secondary-foreground transform transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Award className="w-5 h-5" />
                  <span>Recommendations</span>
                </button>
              </div>
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


import React, { useEffect, useRef } from 'react';
import { ArrowDown, Linkedin, FileText } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Link } from 'react-router-dom';
import emailIcon from '@/assets/gmail-m-icon.png';

export const Hero = () => {
  const textMeasureRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

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
            <div ref={imageWrapperRef} className="w-48 h-48 lg:w-64 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img
                src="/lovable-uploads/31ec1e2e-fdac-453a-bc83-b17697936c04.png"
                alt="Kamal Nagy"
                className="w-full h-full object-cover"
              />
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
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4 font-light">
              SEO & Social Media Content Creator<br />
              Independent Legal Academic Researcher
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 text-muted-foreground mb-6">
              <div className="flex items-center space-x-2">
                <img 
                  src={emailIcon} 
                  alt="Email" 
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
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 448 512"
                  className="w-5 h-5"
                  style={{fill: "#63E6BE"}}
                >
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
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
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
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
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

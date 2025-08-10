import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ClientsSlider = () => {
  const accounts = [
    {
      name: "3arrafni.com",
      logo: "/lovable-uploads/6dab2819-91cb-4e5c-aa0c-3c0b6a4d6f24.png"
    },
    {
      name: "Menusbee",
      logo: "/lovable-uploads/efe16f18-e306-4748-bfde-333f019c03b0.png"
    },
    {
      name: "Android World",
      logo: "/lovable-uploads/c8892c9f-d780-4825-a3b1-b1e017d5bd62.png"
    },
    {
      name: "SafaTR",
      logo: "/lovable-uploads/62555173-b976-41ad-bed8-39ee3a82b0c5.png"
    },
    {
      name: "BaseNotesA",
      logo: "/lovable-uploads/ac78e0b4-1f75-4ea6-a2e0-076903014978.png"
    },
    {
      name: "HSI Egypt",
      logo: "/lovable-uploads/63be9809-8cd5-4624-b8f1-c57fc574a477.png"
    },
    {
      name: "Saabeel",
      logo: "/lovable-uploads/c39156a9-5748-4c37-8a35-b71e3ee96426.png"
    },
    {
      name: "Devolum",
      logo: "/lovable-uploads/1666408e-a405-44b6-ba0a-b11c493ecb73.png"
    },
    {
      name: "International Student",
      logo: "/lovable-uploads/a60fb0f5-68a1-4284-ad40-afcae8273fd0.png"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % accounts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + accounts.length) % accounts.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % accounts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [accounts.length]);

  return (
    <section className="py-6 md:py-8 px-4 md:px-6 bg-muted/10">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 md:mb-3 animate-fade-in">
            <span className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent animate-gradient">Accounts</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto animate-fade-in animation-delay-1000 px-4">
            Accounts I've Worked on Diverse Content Creation Across Blogs & social media
          </p>
          <div className="w-10 md:w-12 h-1 bg-gradient-to-r from-gradient-start to-gradient-end mx-auto mt-2 md:mt-3 rounded-full animate-scale-in animation-delay-2000"></div>
        </div>

        <div className="relative flex justify-center items-center min-h-[200px]">
          {/* Slider container */}
          <div className="w-full max-w-6xl mx-8">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              {accounts.map((account, index) => (
                <div key={index} className="flex justify-center">
                  <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105 ${
                    index === currentIndex ? 'ring-2 ring-primary scale-110' : ''
                  }`}>
                    <img
                      src={account.logo}
                      alt={account.name}
                      className="w-full h-full object-contain p-3 filter brightness-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <p className="text-lg font-semibold text-foreground">
            {accounts[currentIndex].name}
          </p>
        </div>
        
        <div className="flex justify-center gap-2 mt-4">
          {accounts.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
        
        {/* Decorative elements */}
        <div className="flex justify-center mt-4 md:mt-6 space-x-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-1 h-1 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end animate-pulse`}
              style={{ animationDelay: `${i * 200}ms` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSlider;
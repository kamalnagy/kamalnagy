import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const ClientsSlider = () => {
  const clients = [
    { src: "/lovable-uploads/6dab2819-91cb-4e5c-aa0c-3c0b6a4d6f24.png", alt: "3arrafni.com" },
    { src: "/lovable-uploads/efe16f18-e306-4748-bfde-333f019c03b0.png", alt: "Menusbee" },
    { src: "/lovable-uploads/c8892c9f-d780-4825-a3b1-b1e017d5bd62.png", alt: "Android World" },
    { src: "/lovable-uploads/62555173-b976-41ad-bed8-39ee3a82b0c5.png", alt: "SafaTR" },
    { src: "/lovable-uploads/ac78e0b4-1f75-4ea6-a2e0-076903014978.png", alt: "BaseNotesA" },
    { src: "/lovable-uploads/63be9809-8cd5-4624-b8f1-c57fc574a477.png", alt: "HSI Egypt" },
    { src: "/lovable-uploads/c39156a9-5748-4c37-8a35-b71e3ee96426.png", alt: "Saabeel" },
    { src: "/lovable-uploads/1666408e-a405-44b6-ba0a-b11c493ecb73.png", alt: "Devolum" },
    { src: "/lovable-uploads/a60fb0f5-68a1-4284-ad40-afcae8273fd0.png", alt: "International Student" },
  ];

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
          <div className="w-full max-w-6xl mx-8">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={5}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
            >
              {clients.map((client, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105">
                    <img
                      src={client.src}
                      alt={client.alt}
                      className="w-full h-full object-contain p-3 filter brightness-100"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
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
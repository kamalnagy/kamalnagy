import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const ClientsSlider = () => {
  const clients = [
    { src: "/lovable-uploads/18d0f454-9e87-4ab7-9eb6-dd1c2f109b06.png", alt: "Client Logo 1" },
    { src: "/lovable-uploads/90443aac-27ad-4f8c-b667-7f313dbf0b6a.png", alt: "Client Logo 2" },
    { src: "/lovable-uploads/a4bf9099-e284-4771-bf2b-ed1a8fc66fc1.png", alt: "SAFA Student Services" },
    { src: "/lovable-uploads/7d7c4203-9734-4f5f-8cda-9a0181347759.png", alt: "Basenote" },
    { src: "/lovable-uploads/ebc77130-7804-47dd-9281-cc3e282c0031.png", alt: "HSI Center" },
    { src: "/lovable-uploads/57f39cd0-0083-44c3-870d-fba43e44efde.png", alt: "S Logo" },
    { src: "/lovable-uploads/0d02d50d-ff7e-423c-b16b-6b57fb119fcf.png", alt: "Lov" },
    { src: "/lovable-uploads/776c91df-2e85-4c5d-965f-8fc73b3d438c.png", alt: "Academic Services" },
    { src: "/lovable-uploads/00d2e28e-3620-4aa1-986b-54662d0ebf84.png", alt: "New Account" },
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
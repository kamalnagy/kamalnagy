import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import { ReviewCard } from './ReviewCard';
import { reviews } from './reviewsData';

interface ReviewsSectionProps {
  backgroundImage: string;
}

export const ReviewsSection = ({ backgroundImage }: ReviewsSectionProps) => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="text-center px-4">
        <h3 className="text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-4">
          Freelance Legal Academic Works
        </h3>
        <p className="text-muted-foreground text-sm md:text-lg">
          Customer testimonials and reviews for legal academic writing services
        </p>
      </div>
      
      <div className="w-full">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard
                review={review}
                backgroundImage={backgroundImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
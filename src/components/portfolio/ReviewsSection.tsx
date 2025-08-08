import React from 'react';
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            review={review}
            backgroundImage={backgroundImage}
          />
        ))}
      </div>
    </div>
  );
};
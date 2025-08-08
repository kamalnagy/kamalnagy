import React from 'react';
import { Star, User } from 'lucide-react';
import { Review } from './reviewsData';

interface ReviewCardProps {
  review: Review;
  backgroundImage: string;
}

export const ReviewCard = ({ review, backgroundImage }: ReviewCardProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="w-4 h-4 text-gray-300" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }

    const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={fullStars + i + 1} className="w-4 h-4 text-gray-300" />
      );
    }

    return stars;
  };

  return (
    <div className="relative overflow-hidden rounded-3xl group transform hover:scale-105 transition-all duration-500">
      {/* Background image with blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10 p-6 text-white min-h-[250px] flex flex-col">
        {/* User Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
            <User className="w-6 h-6 text-primary" />
          </div>
        </div>
        
        {/* Rating */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-1">
            {renderStars(review.rating)}
          </div>
        </div>
        
        {/* Name */}
        <h4 className="text-lg font-semibold text-center mb-4 text-white group-hover:text-primary transition-colors duration-500">
          {review.name}
        </h4>
        
        {/* Comment */}
        <div className="flex-1 flex items-center justify-center">
          <p className="text-white/90 text-sm leading-relaxed text-center line-clamp-4 w-full">
            {review.comment}
          </p>
        </div>
      </div>
    </div>
  );
};
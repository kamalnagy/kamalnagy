
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioItemProps {
  title: string;
  description: string;
  link: string;
  logo: string;
  imageSize?: 'small' | 'medium' | 'large';
  backgroundImage?: boolean;
}

export const PortfolioItem = ({ title, description, link, logo, imageSize = 'small', backgroundImage = false }: PortfolioItemProps) => {
  const getImageSizeClasses = () => {
    switch (imageSize) {
      case 'large':
        return "w-20 h-20 md:w-24 md:h-24";
      case 'medium':
        return "w-16 h-16 md:w-20 md:h-20";
      case 'small':
      default:
        return "w-10 h-10 md:w-12 md:h-12";
    }
  };

  if (backgroundImage) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden rounded-3xl cursor-pointer transform hover:scale-105 transition-all duration-500"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '250px'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-500"></div>
        
        {/* Content overlay */}
        <div className="relative z-10 h-full p-4 md:p-6 flex flex-col justify-end text-white">
          <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 group-hover:text-primary transition-all duration-500 line-clamp-2">
            {title}
          </h4>
          
          <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3 transition-colors duration-500">
            {description}
          </p>
          
          <div className="flex items-center text-white/90 text-xs md:text-sm font-medium group-hover:text-primary transition-all duration-500">
            <span>View Work</span>
            <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-500" />
          </div>
        </div>
      </a>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-3xl cursor-pointer transform hover:scale-105 transition-all duration-500 block min-h-[260px] md:min-h-[280px] shadow-lg hover:shadow-2xl"
    >
      {/* Full-bleed background image */}
      <img loading="lazy" decoding="async" src={logo}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Strong gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-black/95 group-hover:via-black/70 transition-all duration-500" />

      {/* Content */}
      <div className="relative z-10 h-full p-4 md:p-6 flex flex-col justify-end text-white min-h-[260px] md:min-h-[280px]">
        <h4 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3 line-clamp-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:text-gold-frame-light transition-colors duration-500">
          {title}
        </h4>

        <p className="text-white/95 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
          {description}
        </p>

        <div className="flex items-center text-white text-xs md:text-sm font-semibold group-hover:text-gold-frame-light transition-all duration-500 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
          <span>View Work</span>
          <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-500" />
        </div>
      </div>
    </a>
  );
};

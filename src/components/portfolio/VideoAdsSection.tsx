import React from 'react';

interface VideoAd {
  src: string;
  title: string;
}

interface CompanyVideoAds {
  company: string;
  description: string;
  videos: VideoAd[];
}

const companies: CompanyVideoAds[] = [
  {
    company: 'Sumoue Marketing Agency',
    description: 'Full creative concept, scriptwriting, and content direction for promotional ads',
    videos: [
      { src: '/videos/sumoue-1.mp4', title: 'Sumoue Ad — Concept 1' },
      { src: '/videos/sumoue-2.mp4', title: 'Sumoue Ad — Concept 2' },
    ],
  },
];

export const VideoAdsSection = () => {
  return (
    <div className="space-y-8 md:space-y-12">
      <div className="text-center px-4">
        <h3 className="text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-4">
          Video Ads I Created
        </h3>
        <p className="text-muted-foreground text-sm md:text-lg max-w-3xl mx-auto">
          Full creative concepts and content I developed for brand video advertisements
        </p>
      </div>

      {companies.map((company, idx) => (
        <div key={idx} className="space-y-4 md:space-y-6">
          <div className="text-center px-4">
            <h4 className="text-lg md:text-2xl font-semibold text-foreground">
              <span className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent">
                {company.company}
              </span>
            </h4>
            <p className="text-muted-foreground text-xs md:text-sm mt-1 md:mt-2">
              {company.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {company.videos.map((video, vIdx) => (
              <div
                key={vIdx}
                className="group relative overflow-hidden rounded-xl bg-card border border-border transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="aspect-[9/16] relative overflow-hidden bg-muted">
                  <video
                    src={video.src}
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-3 md:p-4">
                  <p className="text-sm font-medium text-foreground">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

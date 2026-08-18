import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Play, Sparkles, TrendingUp, Trophy, Wand2 } from 'lucide-react';

interface VideoAd {
  src: string;
  title: string;
  featured?: boolean;
  badge?: string;
  note?: string;
  aiMade?: boolean;
}

interface CompanyVideoAds {
  id: string;
  company: string;
  description: string;
  videos: VideoAd[];
}

const companies: CompanyVideoAds[] = [
  {
    id: 'sumoue',
    company: 'Sumoue Marketing Agency',
    description: 'Full creative concept, scriptwriting, and content direction for promotional ads',
    videos: [
      { src: '/videos/sumoue-1.mp4', title: 'Sumoue Ad — Concept 1' },
      { src: '/videos/sumoue-2.mp4', title: 'Sumoue Ad — Concept 2' },
    ],
  },
  {
    id: 'phlog',
    company: 'Phlog Influencers Marketing',
    description: 'End-to-end creative ideation and scriptwriting for influencer-driven brand campaigns',
    videos: [
      {
        src: '/videos/phlog-winning-ad.mp4',
        title: 'Phlog — Top-Performing Lead Gen Ad',
        badge: 'Proven Winner',
        note: 'A campaign I wrote and creatively directed that outperformed expectations — generating a strong volume of qualified leads for Phlog.',
        aiMade: true,
      },
      { src: '/videos/phlog-1.mp4', title: 'Phlog Ad — Concept 1' },
      { src: '/videos/phlog-2.mp4', title: 'Phlog Ad — Concept 2' },
    ],
  },
  {
    id: 'ghanaeem',
    company: 'Ghanaeem Influencers Marketing',
    description: 'Full creative direction and storytelling content for influencer marketing campaigns',
    videos: [
      { src: '/videos/ghanaeem-1.mp4', title: 'Ghanaeem Ad — Concept 1' },
      { src: '/videos/ghanaeem-2.mp4', title: 'Ghanaeem Ad — Concept 2' },
    ],
  },
];

const VideoCard = ({ video }: { video: VideoAd }) => {
  const [playing, setPlaying] = useState(false);
  const isFeatured = !!video.featured;
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-card border transition-all duration-500 hover:-translate-y-1 ${
        isFeatured
          ? 'border-primary/60 shadow-[0_25px_60px_-20px_hsl(var(--primary)/0.5)] sm:col-span-2'
          : 'border-border/50 hover:border-primary/40 hover:shadow-[0_20px_50px_-15px_hsl(var(--primary)/0.4)]'
      }`}
    >
      {/* Gradient glow */}
      <div
        className={`absolute -inset-0.5 bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end rounded-2xl blur-md transition-opacity duration-500 pointer-events-none ${
          isFeatured ? 'opacity-40' : 'opacity-0 group-hover:opacity-30'
        }`}
      />

      <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-2">
        {video.badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end text-white text-xs font-bold shadow-lg">
            <Trophy className="w-3.5 h-3.5" />
            {video.badge}
          </div>
        )}
        {video.aiMade && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/40 backdrop-blur text-primary text-xs font-bold shadow-lg">
            <Wand2 className="w-3.5 h-3.5" />
            Made with AI
          </div>
        )}
      </div>

      <div className={`relative overflow-hidden bg-black ${isFeatured ? 'aspect-video sm:aspect-[16/10]' : 'aspect-[9/16]'}`}>
        <video
          src={video.src}
          controls
          preload="metadata"
          playsInline
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          className="w-full h-full object-contain bg-black"
        >
          Your browser does not support the video tag.
        </video>
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent">
            <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
              <Play className="w-7 h-7 text-primary-foreground fill-primary-foreground ml-1" />
            </div>
          </div>
        )}
      </div>
      <div className="relative p-4 bg-gradient-to-b from-card to-card/80">
        <p className="text-sm font-semibold text-foreground">{video.title}</p>
        {video.note && (
          <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed flex gap-2">
            <TrendingUp className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>{video.note}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export const VideoAdsSection = () => {
  return (
    <div id="video-ads" className="relative space-y-8 md:space-y-12 scroll-mt-24">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="text-center px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs md:text-sm font-medium text-primary uppercase tracking-wider">Creative Direction</span>
        </div>
        <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
          Video Ads I{' '}
          <span className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent">
            Created
          </span>
        </h3>
        <p className="text-muted-foreground text-sm md:text-lg max-w-3xl mx-auto">
          Full creative concepts, scripts, and AI-assisted content direction I developed for brand video advertisements
        </p>
      </div>

      <Tabs defaultValue={companies[0].id} className="w-full">
        <div className="flex justify-center px-4">
          <TabsList className="h-auto flex-wrap gap-2 bg-muted/50 backdrop-blur p-2 rounded-2xl border border-border/50">
            {companies.map((c) => (
              <TabsTrigger
                key={c.id}
                value={c.id}
                className="px-4 md:px-6 py-2.5 rounded-xl text-xs md:text-sm font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-gradient-start data-[state=active]:via-gradient-middle data-[state=active]:to-gradient-end data-[state=active]:text-white data-[state=active]:shadow-lg transition-all"
              >
                {c.company.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {companies.map((c) => (
          <TabsContent key={c.id} value={c.id} className="mt-8 md:mt-10 focus-visible:ring-0">
            <div className="text-center px-4 mb-6 md:mb-8">
              <h4 className="text-xl md:text-3xl font-bold">
                <span className="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end bg-clip-text text-transparent">
                  {c.company}
                </span>
              </h4>
              <p className="text-muted-foreground text-xs md:text-base mt-2 max-w-2xl mx-auto">
                {c.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto px-4">
              {c.videos.map((video, vIdx) => (
                <VideoCard key={vIdx} video={video} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

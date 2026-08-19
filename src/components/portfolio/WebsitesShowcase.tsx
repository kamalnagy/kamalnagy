import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { websitesData } from './websitesData';

export const WebsitesShowcase = () => {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="text-center px-4">
        <h3 className="text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-4">
          Websites I Built
        </h3>
        <p className="text-muted-foreground text-sm md:text-lg">
          Full content structure and SEO optimization for these platforms
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {websitesData.map((site, index) => (
          <div
            key={index}
            className="group rounded-xl border border-border/50 bg-card overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-muted/60 border-b border-border/50">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-2">
                <div className="bg-background/80 rounded-md px-3 py-1 text-xs text-muted-foreground truncate font-mono">
                  {site.url.replace(/^https?:\/\//, '')}
                </div>
              </div>
            </div>

            {/* Screenshot */}
            <div className="aspect-video overflow-hidden bg-muted">
              <img loading="lazy" decoding="async" src={site.screenshot}
                alt={`${site.name} website screenshot`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Info */}
            <div className="p-4 md:p-5 space-y-3">
              <h4 className="text-lg font-bold text-foreground">{site.name}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {site.description}
              </p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {site.role}
                </span>
                <Button variant="ghost" size="sm" asChild>
                  <a href={site.url} target="_blank" rel="noopener noreferrer" className="gap-1.5">
                    Visit <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X, ExternalLink } from 'lucide-react';
import letterAsset from '@/assets/Kamal_Nagy_RecommendationLetter.pdf.asset.json';

interface RecommendationsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const tabs = [
  {
    id: 'linkedin',
    label: 'LinkedIn Recommendations',
    src: 'https://drive.google.com/file/d/1ia97nNWlzPeLW3hj0bBuvGL2qLHKZmUj/preview',
    external: 'https://drive.google.com/file/d/1ia97nNWlzPeLW3hj0bBuvGL2qLHKZmUj/view',
  },
  {
    id: 'letter',
    label: 'Recommendation Letter',
    src: `${letterAsset.url}#toolbar=0&view=FitH`,
    external: letterAsset.url,
  },
];

export const RecommendationsModal: React.FC<RecommendationsModalProps> = ({
  open,
  onOpenChange,
}) => {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[90vw] h-[85vh] p-0 flex flex-col">
        <DialogHeader className="px-6 py-4 border-b border-border shrink-0">
          <DialogTitle className="text-xl font-semibold">Recommendations</DialogTitle>
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>

        <div className="flex flex-wrap items-center gap-2 px-6 py-3 border-b border-border shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 border ${
                active === tab.id
                  ? 'bg-gradient-to-r from-gradient-start to-gradient-middle text-background border-transparent'
                  : 'border-border text-muted-foreground hover:text-foreground hover:border-accent'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <a
            href={current.external}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Open in new tab
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="flex-1 w-full overflow-hidden">
          <iframe
            key={current.id}
            src={current.src}
            className="w-full h-full"
            title={current.label}
            allow="autoplay"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

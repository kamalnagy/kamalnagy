import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, LoaderCircle } from 'lucide-react';
import letterAsset from '@/assets/Kamal_Nagy_RecommendationLetter.pdf.asset.json';

interface RecommendationsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const tabs = [
  {
    id: 'linkedin',
    label: 'Letter 1',
    src: 'https://drive.google.com/file/d/1ia97nNWlzPeLW3hj0bBuvGL2qLHKZmUj/preview',
    external: 'https://drive.google.com/file/d/1ia97nNWlzPeLW3hj0bBuvGL2qLHKZmUj/view',
    localPdf: false,
  },
  {
    id: 'letter',
    label: 'Letter 2',
    src: letterAsset.url,
    external: letterAsset.url,
    localPdf: true,
  },
];

const PdfViewer: React.FC<{ src: string; title: string }> = ({ src, title }) => {
  const [blobUrl, setBlobUrl] = useState<string>();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    let objectUrl: string | undefined;

    fetch(src)
      .then((response) => {
        if (!response.ok) throw new Error('Unable to load PDF');
        return response.blob();
      })
      .then((blob) => {
        if (!active) return;
        objectUrl = URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
        setBlobUrl(objectUrl);
      })
      .catch(() => {
        if (active) setFailed(true);
      });

    return () => {
      active = false;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [src]);

  if (failed) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-sm text-muted-foreground">The preview could not load in this browser.</p>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary/80"
        >
          Open Letter 2
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    );
  }

  if (!blobUrl) {
    return (
      <div className="flex h-full items-center justify-center" aria-label="Loading letter">
        <LoaderCircle className="h-7 w-7 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <iframe
      src={`${blobUrl}#toolbar=0&view=FitH`}
      className="h-full w-full"
      title={title}
    />
  );
};

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
          <DialogDescription className="sr-only">Browse recommendation letters.</DialogDescription>
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
          {current.localPdf ? (
            <PdfViewer key={current.id} src={current.src} title={current.label} />
          ) : (
            <iframe
              key={current.id}
              src={current.src}
              className="w-full h-full"
              title={current.label}
              allow="autoplay"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

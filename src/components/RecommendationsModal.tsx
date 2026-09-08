import React, { useEffect, useRef, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, LoaderCircle } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import letterAsset from '@/assets/Kamal_Nagy_RecommendationLetter.pdf.asset.json';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [pageCount, setPageCount] = useState(0);
  const [pageWidth, setPageWidth] = useState(760);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateWidth = () => setPageWidth(Math.min(container.clientWidth - 32, 760));
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="h-full overflow-y-auto bg-muted/40 px-4 py-5" aria-label={title}>
      <Document
        file={src}
        onLoadSuccess={({ numPages }) => setPageCount(numPages)}
        loading={<div className="flex h-48 items-center justify-center"><LoaderCircle className="h-7 w-7 animate-spin text-primary" /></div>}
        error={
          <div className="flex h-48 flex-col items-center justify-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">The preview could not load in this browser.</p>
            <a href={src} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80">
              Open Letter 2 <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        }
        className="flex flex-col items-center gap-5"
      >
        {Array.from({ length: pageCount }, (_, index) => (
          <Page
            key={`page-${index + 1}`}
            pageNumber={index + 1}
            width={pageWidth}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="overflow-hidden rounded-sm shadow-lg"
          />
        ))}
      </Document>
    </div>
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

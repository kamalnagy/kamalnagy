import phlogLogo from '@/assets/pdfs/phlog-logo.png';

export interface PdfItem {
  id: string;
  company: string;
  title: string;
  description: string;
  role: string;
  pdfUrl: string;
  logo: string;
  /** Tailwind background class for the logo tile, e.g. "bg-[#3D3DCB]" */
  logoBgClass?: string;
}

export const pdfsData: PdfItem[] = [
  {
    id: 'phlog-price-list',
    company: 'Phlog',
    title: 'Phlog — Service Price List',
    description:
      'A polished price-view document presenting service packages for Phlog, an influencer marketing company. I led the full creative inspiration and content writing — structuring offers, crafting persuasive descriptions, and shaping the brand voice.',
    role: 'Concept • Content Writing • Document Structure',
    pdfUrl: 'https://drive.google.com/file/d/1I4ZWXjbVzUjJPWA0FlANQMNoM3jqcj3P/view',
    logo: phlogLogo,
    logoBgClass: 'bg-[#3D3DCB]',
  },
];

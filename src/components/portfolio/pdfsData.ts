import phlogLogo from '@/assets/pdfs/phlog-logo.png';
import almugasabCover from '@/assets/pdfs/almugasab-cover.png';
import sumoueLogo from '@/assets/pdfs/sumoue-logo.png';

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
  {
    id: 'almugasab-company-profile',
    company: 'Almugasab',
    title: 'Almugasab — Company Profile',
    description:
      'A premium company profile for Almugasab, a brand specialized in the Saudi heritage fashion industry. I crafted the full creative inspiration and written content — capturing the brand’s authentic identity, storytelling, and refined tone.',
    role: 'Concept • Content Writing • Brand Storytelling',
    pdfUrl: 'https://drive.google.com/file/d/1pseyy44FyVc02GqjEpudg4q6DCZoqYTl/view?usp=sharing',
    logo: almugasabCover,
    logoBgClass: 'bg-black',
  },
];

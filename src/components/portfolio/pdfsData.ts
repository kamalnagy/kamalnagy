import phlogLogo from '@/assets/pdfs/phlog-logo.png';
import almugasabCover from '@/assets/pdfs/almugasab-cover.png';
import sumoueLogo from '@/assets/pdfs/sumoue-logo.png';
import sumoueCover from '@/assets/pdfs/sumoue-cover.png';

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
  {
    id: 'sumoue-marketing-document',
    company: 'Sumoue',
    title: 'Sumoue — Marketing Agency Document',
    description:
      'A branded marketing document created for Sumoue, a marketing agency. I led the full creative inspiration and content writing — shaping the brand narrative, structuring the offering, and refining the persuasive tone end to end.',
    role: 'Concept • Content Writing • Brand Voice',
    pdfUrl: 'https://drive.google.com/file/d/17qFBeHzlJlaTvv3xIXi7dyH6eY3GTmBB/view?usp=sharing',
    logo: sumoueCover,
    logoBgClass: 'bg-[#0A1530]',
  },
  {
    id: 'sumoue-marketing-collection',
    company: 'Sumoue',
    title: 'Sumoue — Marketing Collection (Folder)',
    description:
      'A curated collection of marketing documents I produced for Sumoue marketing agency. Each piece reflects full creative ownership — from concept and copywriting to brand storytelling and document structure.',
    role: 'Concept • Content Writing • Creative Direction',
    pdfUrl: 'https://drive.google.com/drive/folders/1mJtFCDHMgdIKRdZW0yyHlGtjT_Lns278?usp=drive_link',
    logo: sumoueCover,
    logoBgClass: 'bg-[#0A1530]',
  },
];

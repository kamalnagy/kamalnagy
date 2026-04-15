import rihalImg from '@/assets/websites/rihal.png';
import revenueXImg from '@/assets/websites/revenue-x.png';
import talaaImg from '@/assets/websites/talaa.png';
import medstarImg from '@/assets/websites/medstar.png';
import surratakImg from '@/assets/websites/surratak.png';
import sanadImg from '@/assets/websites/sanad.png';
import sharryImg from '@/assets/websites/sharry.png';
import shamelImg from '@/assets/websites/shamel.png';
import deemImg from '@/assets/websites/deem.png';

export interface WebsiteData {
  name: string;
  url: string;
  screenshot: string;
  description: string;
  role: string;
}

export const websitesData: WebsiteData[] = [
  {
    name: 'Rihal Marketing',
    url: 'https://rihalmarketing.com/',
    screenshot: rihalImg,
    description: 'Built the full website content structure and SEO strategy for this marketing agency.',
    role: 'Content Structure & SEO',
  },
  {
    name: 'Revenue-X Agency',
    url: 'https://revenue-xagency.com/',
    screenshot: revenueXImg,
    description: 'Developed the website content architecture and optimized for search engines.',
    role: 'Content Architecture & SEO',
  },
  {
    name: 'Talaa Travel',
    url: 'https://talaatravel.com/',
    screenshot: talaaImg,
    description: 'Structured the full website content for this travel and tourism platform.',
    role: 'Content Structure & Strategy',
  },
  {
    name: 'MedStar Zanzibar',
    url: 'https://medstarznz.com/',
    screenshot: medstarImg,
    description: 'Built the website content and SEO optimization for this medical center.',
    role: 'Content & SEO',
  },
  {
    name: 'Surratak',
    url: 'https://surratak.com/',
    screenshot: surratakImg,
    description: 'Developed the content strategy and website structure for this e-commerce consultancy.',
    role: 'Content Strategy & Structure',
  },
  {
    name: 'Sanad',
    url: 'https://sanad-company.com/',
    screenshot: sanadImg,
    description: 'Built the full content structure and SEO for this e-commerce solutions company.',
    role: 'Content Structure & SEO',
  },
  {
    name: 'Sharry Platform',
    url: 'https://sharryplatform.com/',
    screenshot: sharryImg,
    description: 'Structured the website content for this e-commerce management platform.',
    role: 'Content Architecture & SEO',
  },
  {
    name: 'Shamel Platform',
    url: 'https://shamelplatform.com/',
    screenshot: shamelImg,
    description: 'Built the content structure for this ERP and business management platform.',
    role: 'Content Structure & Strategy',
  },
  {
    name: 'Deem Agency',
    url: 'https://deemagencyeg.com/',
    screenshot: deemImg,
    description: 'Developed the full website content and SEO strategy for this advertising agency.',
    role: 'Content & SEO Strategy',
  },
];

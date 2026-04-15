export interface WebsiteData {
  name: string;
  url: string;
  screenshot: string;
  description: string;
  role: string;
}

export const websitesData: WebsiteData[] = [
  {
    name: '3arrafni.com',
    url: 'https://3arrafni.com',
    screenshot: '/placeholder.svg',
    description: 'Built the full content structure and SEO strategy for this educational platform.',
    role: 'Content Structure & SEO',
  },
  {
    name: 'Masrschools',
    url: 'https://masrschools.com',
    screenshot: '/placeholder.svg',
    description: 'Developed website content architecture and optimized for search engines.',
    role: 'Content Architecture & SEO',
  },
  {
    name: 'Menusbee',
    url: 'https://menusbee.com',
    screenshot: '/placeholder.svg',
    description: 'Structured the website content and managed social media content strategy.',
    role: 'Content Strategy & Structure',
  },
];

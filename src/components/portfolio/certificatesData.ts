const certAsset = { url: "/lovable-uploads/hubspot-content-marketing-certificate.png" };

export interface Certificate {
  title: string;
  issuer: string;
  image: string;
  description: string;
  validity: string;
  credentialCode?: string;
  credentialUrl?: string;
}

export const certificates: Certificate[] = [
  {
    title: "Content Marketing Certified",
    issuer: "HubSpot Academy",
    image: certAsset.url,
    description:
      "Certified in applying content marketing best practices across long-term content planning, creation, promotion, and analysis — turning content into measurable growth results.",
    validity: "Nov 2026 – Dec 2028",
    credentialCode: "a06d72d3e3ef438ba2318b99074df075",
  },
];

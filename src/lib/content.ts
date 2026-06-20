import siteData from "@/content/site.json";

export type Media = {
  type: "video" | "image";
  src: string;
  poster?: string;
  thumbnail?: string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  featured: boolean;
  media: Media;
};

export type SiteContent = {
  brandName: string;
  representative: string;
  vsl: {
    video: Media;
    oneLiner: string;
    bookCallCta: { label: string; calendlyUrl: string };
  };
  portfolioCategories: string[];
  portfolio: PortfolioItem[];
  contact: { email: string; calendlyUrl: string };
};

// The entire page is sourced from this single structured JSON collection.
// Edit src/content/site.json to swap the VSL, update the one-liner,
// add/remove/replace portfolio video ads, or change the Calendly link —
// no code changes required.
export const site = siteData as SiteContent;

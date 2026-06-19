import siteData from "@/content/site.json";

export type CTA = { label: string; href: string };

export type Media = {
  type: "video" | "image";
  src: string;
  poster?: string;
  thumbnail?: string;
  caption?: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "play" | "spark" | "layers" | string;
};

export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  client: string;
  industry: string;
  category: string;
  featured: boolean;
  media: Media;
};

export type Brand = {
  id: string;
  name: string;
  logo: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Testimonial = {
  id: string;
  clientName: string;
  company: string;
  testimonial: string;
  photo: string;
};

export type SiteContent = {
  brandName: string;
  representative: string;
  tagline: string;
  nav: CTA[];
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: CTA;
    secondaryCta: CTA;
    featuredVideo: Media;
    stats: { label: string; value: string }[];
  };
  services: Service[];
  portfolioCategories: string[];
  portfolio: PortfolioItem[];
  brands: Brand[];
  process: ProcessStep[];
  about: { headline: string; description: string; image: string };
  testimonials: Testimonial[];
  contact: { headline: string; subheadline: string; email: string };
  footer: {
    brandName: string;
    tagline: string;
    links: CTA[];
    socials: CTA[];
  };
};

// All page content is sourced from a single structured JSON collection.
// Non-technical editors can update src/content/site.json directly
// (e.g. via the GitHub web editor) to add brands, portfolio work,
// services, testimonials, or contact details — no code changes required.
export const site = siteData as SiteContent;

export interface SocialLink {
  platform: string;
  url: string;
}

export interface HomePageData {
  logo: string; // Path or URL to the logo asset
  socialLinks: SocialLink[];
  slogan: string;
}

export interface SupportCategory {
  title: string;
  items: string[];
}

export interface AboutPageData {
  belief: string;
  description: string;
  offerings: SupportCategory[];
  mission: string;
  whyItMatters: string;
}

export interface FounderData {
  name: string;
  bioParagraphs: string[]; // Ordered paragraphs describing founder
  closing: string;
}

export interface ContactData {
  email: string;
  whatsapp: string;
  phone: string;
}

export interface ServiceCategory {
  title: string;
  items: string[];
}

export interface ServicesPageData {
  intro: string;
  tagline: string;
  categories: ServiceCategory[];
}

export interface Package {
  name: string;
  price: string; // Human-readable price, e.g., "£60" or "£400/month"
  description: string;
}

export interface PackagesData {
  packages: Package[];
  cta: string; // Call-to-action blurb
  email: string; // Contact email for enquiries
}

export interface SiteData {
  home: HomePageData;
  about: AboutPageData;
  founder: FounderData;
  contact: ContactData;
  services: ServicesPageData;
  packages: PackagesData;
}
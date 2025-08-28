export interface MetaData {
  title: string;
  description: string;
  image?: string; // optional OG image
}

export interface CompanyData {
  name: string;
  tagline: string;
  slogan: string;
  mission: string;
  philosophy: string;
  story: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: "instagram" | "tiktok" | "email" | "whatsapp" | "phone" | string;
  url: string;
  display: string;
}

export interface ServiceData {
  id: string;
  title: string;
  shortCopy: string;      // homepage teaser
  fullCopy: string;       // detailed page copy
  features: string[];
  categories?: string[];
  meta?: MetaData;
}

export interface PackageData {
  id: string;
  name: string;
  price: number;
  currency: string;
  duration?: string;      // e.g., "month"
  description: string;
  features: string[];
  isPopular?: boolean;
  meta?: MetaData;
}

export interface FounderData {
  name: string;
  title: string;
  shortCopy: string;      // homepage teaser
  fullCopy: string;       // detailed about/founder page copy
  background: string[];
  meta?: MetaData;
}

export interface ContactData {
  email: string;
  phone: string;
  whatsapp?: string;
  businessHours?: string;
}

export interface SiteData {
  company: CompanyData;
  navigation: NavLink[];
  socialLinks: SocialLink[];
  services: ServiceData[];
  packages: PackageData[];
  founder: FounderData;
  contact: ContactData;
}

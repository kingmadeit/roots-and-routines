// Navigation and Social Links
export interface SocialLink {
  platform: 'instagram' | 'tiktok' | 'whatsapp' | 'email' | 'phone';
  url: string;
  display?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

// Services and Offerings
export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  features: string[];
  categories: ServiceCategory[];
}

// Pricing and Packages
export interface Package {
  id: string;
  name: string;
  price: number;
  currency: string;
  duration?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

// Founder Information
export interface Founder {
  name: string;
  title: string;
  bio: string;
  background: string[];
  image?: string;
}

// Company Information
export interface CompanyInfo {
  name: string;
  tagline?: string;
  slogan?: string;
  mission: string;
  whyItMatters: string;
  foundedWith: string;
}

// Contact Information
export interface ContactInfo {
  email: string;
  phone?: string;
  whatsapp?: string;
  address?: string;
  businessHours?: string;
}

// Main Site Data Structure
export interface SiteData {
  company: CompanyInfo;
  navigation: NavigationItem[];
  socialLinks: SocialLink[];
  services: Service[];
  packages: Package[];
  founder: Founder;
  contact: ContactInfo;
}
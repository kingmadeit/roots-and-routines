export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon?: string;
}

export interface Package {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  duration?: string;
  popular?: boolean;
}

export interface ContactMethod {
  id: string;
  type: 'email' | 'phone' | 'whatsapp';
  label: string;
  value: string;
  icon: string;
}

export interface Founder {
  name: string;
  title: string;
  bio: string;
  image?: string;
  credentials: string[];
}

export interface AboutSection {
  id: string;
  title: string;
  content: string;
}

export interface HomePageData {
  logo: string;
  slogan: string;
  navigation: NavigationItem[];
  socialLinks: SocialLink[];
}

export interface AboutPageData {
  sections: AboutSection[];
  services: Service[];
  mission: string;
  whyItMatters: string;
}

export interface ServicesPageData {
  services: Service[];
  packages: Package[];
}

export interface ContactPageData {
  contactMethods: ContactMethod[];
  businessEmail: string;
}

export interface FoundersPageData {
  founder: Founder;
}

export interface WebsiteData {
  home: HomePageData;
  about: AboutPageData;
  services: ServicesPageData;
  contact: ContactPageData;
  founders: FoundersPageData;
}
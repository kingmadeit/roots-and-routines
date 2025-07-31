export interface NavigationLink {
  label: string;
  url: string;
  external?: boolean;
}

export interface HomePage {
  logo: string;
  navigation: NavigationLink[];
  businessSlogan: string;
}

export interface AboutPage {
  introduction: string;
  mission: string;
  whyItMatters: string;
  whatWeOffer: ServiceCategory[];
}

export interface ServiceCategory {
  title: string;
  services: string[];
}

export interface FounderPage {
  name: string;
  bio: string;
  signOff: string;
}

export interface ContactInfo {
  email: string;
  whatsapp?: string;
  phone?: string;
}

export interface ServiceDetail {
  title: string;
  description: string;
  items: string[];
}

export interface ServicesPage {
  introduction: string;
  services: ServiceDetail[];
}

export interface Package {
  name: string;
  price: string;
  description: string;
}

export interface PackagesAndPricing {
  packages: Package[];
  contactInfo: {
    note: string;
    email: string;
  };
}

export interface WebsiteData {
  homePage: HomePage;
  aboutPage: AboutPage;
  founderPage: FounderPage;
  contactPage: ContactInfo;
  servicesPage: ServicesPage;
  packagesAndPricing: PackagesAndPricing;
}
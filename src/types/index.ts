import { ElementType } from "react";

export interface MetaData {
  title: string;
  description: string;
  image?: string; // optional OG image
}

export interface CompanyData {
  logo: string;
  name: string;
  tagline: string;
  subline?: string;
  slogan: string;
  sloganSplit?: string;
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
  shortCopy: string; // homepage teaser
  fullCopy: string; // detailed page copy
  features: string[];
  category: string;
  // icon: ElementType;
  icon: string;
  meta?: MetaData;
  href?: string;
}

export interface PackageData {
  id: string;
  name: string;
  price: number;
  currency: string;
  duration?: string; // e.g., "month"
  description: string;
  features: string[];
  isPopular?: boolean;
  meta?: MetaData;
}

export interface FounderData {
  name: string;
  title: string;
  shortCopy: string; // homepage teaser
  fullCopy: string; // detailed about/founder page copy
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
  faq: FAQData;
}

/// full data
// Common types
interface Meta {
  title: string;
  description: string;
  image?: string;
}

interface CTA {
  label: string;
  href: string;
}

// Home page types
interface HeroSection {
  title: string;
  titleSeparator: string;
  subtitle: string;
  cta: CTA;
  image: string;
}

interface IAboutTeaser {
  title: string;
  shortCopy: string;
  cta: CTA;
}

interface FeaturedService {
  id: string;
  title: string;
  shortCopy: string;
  href: string;
}

interface ServicesTeaser {
  title: string;
  description: string;
  featuredServices: FeaturedService[];
}

interface FeaturedPackage {
  id: string;
  name: string;
  price: number;
  currency: string;
  shortDescription: string;
  href: string;
  isPopular: boolean;
}

interface PackagesTeaser {
  title: string;
  description: string;
  packages: PackageData[];
  featuredPackages?: FeaturedPackage[];
}

interface FounderTeaser {
  name: string;
  title: string;
  shortCopy: string;
  href: string;
}

interface ContactCTA {
  title: string;
  description: string;
  cta: CTA;
}

interface HomePage {
  meta: Meta;
  hero: HeroSection;
  aboutTeaser: IAboutTeaser;
  servicesTeaser: ServicesTeaser;
  packagesTeaser: PackagesTeaser;
  founderTeaser: FounderTeaser;
  contactCTA: ContactCTA;
  gallery: { image: string; text: string }[];
}

// About page types
interface FounderDetails {
  name: string;
  title: string;
  fullCopy: string;
  background: string[];
  meta: Meta;
}

interface AboutPage {
  meta: Meta;
  fullCopy: string;
  mission: string;
  philosophy: string;
  whyItMatters: string;
  founder: FounderDetails;
  title: string;
}

// Founder page types
interface FounderPage {
  meta: Meta;
  fullCopy: string;
  background: string[];
}

// Service page types
interface ServicePage {
  meta?: Meta;
  title: string;
  fullCopy: string;
  features: string[];
}

// Package page types
interface PackagePage {
  meta?: Meta;
  name: string;
  price: number;
  currency: string;
  duration?: string;
  description: string;
  features: string[];
  isPopular: boolean;
}

// Contact page types
interface ContactPage {
  meta: Meta;
  email: string;
  phone: string;
  whatsapp: string;
  businessHours: string;
}

// Main PagesData type
export interface PagesData {
  home: HomePage;
  about: AboutPage;
  founder: FounderPage;
  services: Record<string, ServicePage>;
  packages: Record<string, PackagePage>;
  contact: ContactPage;
}

//====================================
// FAQ Types
//====================================
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface FAQData {
  title: string;
  subtitle: string;
  questions: FAQItem[];
}

export interface FAQComponentProps {
  data: FAQData;
  showTitle?: boolean;
  maxItemsToShow?: number;
  className?: string;
}

// Internal component props
export interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export interface FAQHeaderProps {
  title: string;
  subtitle: string;
}
// Export individual page types for convenience
export type {
  Meta,
  CTA,
  HomePage,
  AboutPage,
  FounderPage,
  ServicePage,
  PackagePage,
  ContactPage,
  HeroSection,
  IAboutTeaser,
  FeaturedService,
  ServicesTeaser,
  FeaturedPackage,
  PackagesTeaser,
  FounderTeaser,
  FounderDetails,
  ContactCTA,
};

export type SVGElementProps = React.SVGProps<SVGSVGElement>;

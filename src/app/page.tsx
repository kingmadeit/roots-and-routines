import { memo } from "react";
import { 
  Hero, 
  AboutTeaser, 
  ServiceTeaser, 
  PackagesTeaser, 
  ContactTeaser, 
  FAQ,
  CircularGallery,
} from "@/components";
import { pagesData, siteData } from "@/data";

// Extract data at module level for better performance
const {
  home: { hero, aboutTeaser, meta, gallery }
} = pagesData;

const { 
  founder: { name: founderName },
  company: { philosophy: companyPhilosophy },
  faq
} = siteData;


// Memoized section components
const HeroSection = memo(function HeroSection() {
  return <div className="container mx-auto"><Hero info={hero} /></div>;
});

const GallerySection = memo(function GallerySection() {
  return (
    <div className="h-[600px] relative -translate-y-100 gallery-container">
      <CircularGallery items={gallery} bend={5} textColor="#ca6c28" font="1.5rem font-quicksand" borderRadius={0.05} scrollEase={0.02} />
    </div>
  );
});

const AutonomySection = memo(function AutonomySection() {
  return (
    <div className="container mx-auto text-center -translate-y-70 text-5xl font-nunito bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary-light font-extrabold tracking-tighter mb-32">
      Your Home. Your Pace. Your Peace.
    </div>
  );
});

const AboutSection = memo(function AboutSection() {
  return <div className="-translate-y-40 container mx-auto"><AboutTeaser about={aboutTeaser} /></div>;
});

const ServiceSection = memo(function ServiceSection() {
  return <div className="container mx-auto"><ServiceTeaser /></div>;
});

const PricingSection = memo(function PricingSection() {
  return <div className="container mx-auto"><PackagesTeaser /></div>;
});

const ContactSection = memo(function ContactSection() {
  return (
    <div className="container mx-auto">
      <ContactTeaser 
        founderName={founderName}
        quote={companyPhilosophy}
      />
    </div>
  );
});

const FAQSection = memo(function FAQSection() {
  return (
    <div className="container mx-auto">
      <div className="rounded-section bg-accent/90 relative">
        <FAQ data={faq} maxItemsToShow={6} />
      </div>
    </div>
  );
});

// Export metadata
export const metadata = meta;

// Main page component with floating icons overlay
export default function HomePage() {
  return (
      <div className="relative">
        <HeroSection />
        <GallerySection />
        <AutonomySection />
        <AboutSection />
        <ServiceSection />
        <PricingSection />
        <ContactSection />
        <FAQSection />
      </div>
  );
}
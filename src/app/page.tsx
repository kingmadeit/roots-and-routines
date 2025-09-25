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
  home: { hero, aboutTeaser, meta }
} = pagesData;

const { 
  founder: { name: founderName },
  company: { philosophy: companyPhilosophy },
  faq
} = siteData;

// Memoized section components
const HeroSection = memo(function HeroSection() {
  return <Hero info={hero} />;
});

const GallerySection = memo(function GallerySection() {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
      <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
    </div>
  );
});

const AboutSection = memo(function AboutSection() {
  return <AboutTeaser about={aboutTeaser} />;
});

const ServiceSection = memo(function ServiceSection() {
  return <ServiceTeaser />;
});

const PricingSection = memo(function PricingSection() {
  return <PackagesTeaser />;
});

const ContactSection = memo(function ContactSection() {
  return (
    <ContactTeaser 
      founderName={founderName}
      quote={companyPhilosophy}
    />
  );
});

const FAQSection = memo(function FAQSection() {
  return (
    <div className="rounded-section bg-accent/90 relative">
      <FAQ data={faq} maxItemsToShow={6} />
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
        <AboutSection />
        <ServiceSection />
        <PricingSection />
        <ContactSection />
        <FAQSection />
      </div>
  );
}
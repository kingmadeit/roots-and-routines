import { memo } from "react";
import { 
  Hero, 
  AboutTeaser, 
  ServiceTeaser, 
  PackagesTeaser, 
  ContactTeaser, 
  FAQ,
  FloatingIcons
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
    <div className="rounded-section bg-accent relative">
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
      {/* Floating Icons - covers entire page */}
      <FloatingIcons 
        count={8}
        iconSize="md"
        enableAnimation={true}
        opacityRange={[0.2, 0.5]}
        colorVariants={['accent', 'secondary']}
        containerClassName="fixed inset-0 z-0"
      />
      
      {/* Main content - positioned above floating icons */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <PricingSection />
        <ContactSection />
        <FAQSection />
      </div>
    </div>
  );
}
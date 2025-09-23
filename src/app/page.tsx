import { memo } from "react";
import { 
  Hero, 
  AboutTeaser, 
  ServiceTeaser, 
  PackagesTeaser, 
  ContactTeaser, 
  FAQ
} from "@/components";
import { pagesData, siteData } from "@/data";

const {
  home: { hero, aboutTeaser, meta }
} = pagesData;

const { 
  founder: { name: founderName },
  company: { philosophy: companyPhilosophy },
  faq
} = siteData;

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

// Main page component
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
    </>
  );
}
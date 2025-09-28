import { memo } from "react";
import { 
  Hero, 
  AboutTeaser, 
  ServiceTeaser, 
  PackagesTeaser, 
  ContactTeaser, 
  FAQ,
} from "@/components";
import { pagesData, siteData } from "@/data";
import RotatingText from "@/components/RotatingText";

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
  return  <Hero info={hero} gallery={gallery} />;
});

const AutonomySection = memo(function AutonomySection() {
  return (
    <div className="text-5xl font-nunito font-extrabold flex justify-center items-center space-x-4 mb-32">
      <span className="text-accent">Your</span>
      <span className="w-[150px]">
        <RotatingText
        texts={['Home', 'Pace', 'Peace']}
        mainClassName="px-2 sm:px-2 md:px-3 bg-accent text-primary overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
      </span>
      
    </div>
  );
});

const AboutSection = memo(function AboutSection() {
  return <div className="container mx-auto"><AboutTeaser about={aboutTeaser} /></div>;
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

const LeadSection = memo(function LeadSection(){
  return (
    <div className="container mx-auto text-center my-16 px-4">
      <h2 className="text-4xl md:text-5xl lg:7xl font-nunito font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-complementary to-secondary mb-4">
          Let us help you build the flow that works for you
      </h2>
    </div>
  );
});

// Export metadata
export const metadata = meta;

// Main page component with floating icons overlay
export default function HomePage() {
  return (
      <>
        <HeroSection />
        <AutonomySection />
        <AboutSection />
        <ServiceSection />
        <PricingSection />
        <ContactSection />
        <FAQSection />
        <LeadSection />
      </>
  );
}
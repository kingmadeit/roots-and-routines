import { pagesData } from "@/data";
import dynamic from "next/dynamic";
import LazyLoadOnView from "@/components/sections/LazyLoadOnView";
import HeroSection from "./HeroSection";


const { home: {  meta } } = pagesData;


const loading = () => (<div className="animate-pulse h-[300px]" />);

const AutonomySection = dynamic(() => import('./AutonomySection'), {loading})

const AboutSection = dynamic(() => import('./AboutSection'), {loading});

const ServiceSection = dynamic(() => import('./ServicesSection'), {loading})

const PricingSection = dynamic(() => import('./ServicesSection'), {loading})

const ContactSection = dynamic(() => import('./ContactSection'), {loading})

const FAQSection = dynamic(() => import('./FAQSection'), {loading})

const LeadSection = dynamic(() => import('./LeadSection'), {loading})

// Export metadata
export const metadata = meta;

// Main page component with floating icons overlay
export default function HomePage() {
  return (
      <>
        <HeroSection />
        <AutonomySection />
        <AboutSection />
        <LazyLoadOnView>
          <ServiceSection />
        </LazyLoadOnView>
        <LazyLoadOnView>
          <PricingSection />
          <FAQSection />
        </LazyLoadOnView>
        <LazyLoadOnView>
          <ContactSection />
        </LazyLoadOnView>
        <LeadSection />
      </>
  );
}
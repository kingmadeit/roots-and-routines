'use client'
import { pagesData } from "@/data";
import dynamic from "next/dynamic";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import FAQSection from "./FAQSection";
import AutonomySection from "./AutonomySection";
import ServiceSection from "./ServicesSection";


const { home: { meta } } = pagesData;


const loading = () => (<div className="animate-pulse h-[300px]" />);

const ContactSection = dynamic(() => import('./ContactSection'), { loading })

// Export metadata
export const metadata = meta;

// Main page component with floating icons overlay
export default function HomePage() {
  //useInViewObserver({ selector: '.animate-on-scroll' })
  return (
    <>
      <HeroSection />
      <AutonomySection />
      <AboutSection />
      <ServiceSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
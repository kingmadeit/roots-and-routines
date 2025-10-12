'use client'
import { pagesData, siteData } from "@/data";
import dynamic from "next/dynamic";
import AutonomySection from "./AutonomySection";
import AboutTeaser from "../AboutTeaser";
import ServiceTeaser from "../ServiceTeaser";
import Hero from "../Hero";


const { home: { hero, meta, gallery } } = pagesData;
const {
  faq
} = siteData;

const loading = () => (<div className="animate-pulse h-[300px]" />);

const ContactSection = dynamic(() => import('../ContactTeaser'), { loading });
const FAQSection = dynamic(() => import('../FAQ'), { loading });

// Export metadata
export const metadata = meta;

// Main page component with floating icons overlay
export default function HomePage() {
  //useInViewObserver({ selector: '.animate-on-scroll' })
  return (
    <>
      <Hero info={hero} gallery={gallery} />
      <AutonomySection />
      <AboutTeaser />
      <ServiceTeaser />
      <FAQSection data={faq} />
      <ContactSection />
    </>
  );
}
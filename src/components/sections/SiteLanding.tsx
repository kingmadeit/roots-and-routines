"use client";
import { pagesData, siteData } from "@/data";
import dynamic from "next/dynamic";
import AutonomySection from "./AutonomySection";
import AboutTeaser from "../AboutTeaser";
import ServiceTeaser from "../ServiceTeaser";
import Hero from "../Hero";
import Testimonial from "../Testimonial";

const {
  home: { hero, meta, gallery },
} = pagesData;
const { testimonials, faq } = siteData;

const loading = () => <div className="animate-pulse h-[300px]" />;

const ContactSection = dynamic(() => import("../ContactTeaser"), { loading });
const FAQSection = dynamic(() => import("../FAQ"), { loading });

// Export metadata
export const metadata = meta;

console.log(testimonials);

// Main page component with floating icons overlay
export default function HomePage() {
  return (
    <>
      <Hero info={hero} gallery={gallery} />
      <AutonomySection />
      <AboutTeaser />
      <ServiceTeaser />
      {testimonials && testimonials?.length > 0 && false && (
        <>
          <Testimonial data={testimonials} />
        </>
      )}
      <FAQSection data={faq} />
      <ContactSection />
    </>
  );
}

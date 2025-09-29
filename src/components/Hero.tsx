'use client'
import { memo, useMemo } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/types";
import Link from "next/link";
import { slideUpTransition } from "@/styles/animations";
import { DottedArrow } from "./svgs";
import { Animated, CircularGallery } from ".";
import { useGalleryPeekHeight } from "@/hooks";



// Types
interface HeroProps {
  info: HeroSection;
  gallery?: {
    image: string;
    text: string;
  }[];
}

interface TitleDisplayProps {
  title: string;
  splitTitle?: string[];
}

// Constants
const ANIMATION_CONFIG = {
  subtitle: {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 },
  },
  button: {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
} as const;

const BUTTON_STYLES = "bg-[var(--bg-secondary)] mt-4 hover:scale-[0.9] hover:bg-[var(--bg-secondary)] text-white font-nunito font-bold cursor-pointer" as const;

// Utility function
const splitTitleBySeparator = (title: string, separator?: string): string[] | null => {
  return separator ? title.split(separator) : null;
};

// Memoized Components
const TitleDisplay = memo<TitleDisplayProps>(function TitleDisplay({ title, splitTitle }) {
  return (
    <Animated as="h1"
      {...slideUpTransition}
      className="hero-title relative text-secondary font-nunito hyphens-auto"
    >
      {splitTitle ? (
        <>
          <span className="block w-full text-[clamp(3rem,9vw,10rem)] text-accent opacity-90">{splitTitle[0]}</span>
          <span className="block w-full uppercase text-[clamp(5rem,10vw,12rem)] text-gradient-secondary font-nunito">{splitTitle[1]}</span>
          <span className="w-full text-[clamp(1.5rem,2.5vw,4rem)] text-white">{splitTitle[2]}</span>
          <span className="w-full text-complementary text-[clamp(2rem,3vw,5rem)] font-nunito">{splitTitle[3]}</span>
          <span className="block w-full text-secondary-light text-[clamp(1rem,2vw,2.5rem)] text-center leading-[1.5]">{splitTitle[4]}</span>
        </>
      ) : (
        title
      )}
      <Sparkles className="absolute top-[-3rem] right-[50%] w-16 h-16 text-secondary-light opacity-40"/>
    </Animated>
  );
});

const ContentSection = memo<{
  title: string;
  subtitle: string;
  splitTitle?: string[];
}>(function ContentSection({ title, subtitle, splitTitle }) {
  return (
    <div className="p-4 md:p-16 flex flex-col space-y-4 items-center justify-center">
      <TitleDisplay title={title} splitTitle={splitTitle} />
      <Animated as="h2"
        {...ANIMATION_CONFIG.subtitle}
        className="hero-sub-title max-w-[90%] md:max-w-[65%] font-nunito"
      >
        {subtitle}
      </Animated>
      
      {/* TODO:: I still think this button is valuable -- confirm with client */}
      <Animated as="div" className="relative hidden" {...ANIMATION_CONFIG.button}>
        <Button
          asChild
          className={BUTTON_STYLES}
          size="lg"
        >
          <Link href="/#pricing" prefetch={false}>
            Book a Free Consultation
          </Link>
        </Button>
        <DottedArrow className="absolute bottom-[calc(100% + 2rem)] -left-15 w-40 h-40 text-accent opacity-30" />
      </Animated>
    </div>
  );
});

const Hero = memo<HeroProps>(function Hero({ info, gallery }) {
  const { title, subtitle, titleSeparator } = info;
  const peekHeight = useGalleryPeekHeight();
  
  const splitTitle = useMemo(() => 
    splitTitleBySeparator(title, titleSeparator), 
    [title, titleSeparator]
  );

  return (
    <section className="hero-section">
      {/* Hero content takes remaining space */}
      <div className="hero-content">
        <div className="w-full gradient-container-primary">
          <ContentSection 
            title={title} 
            subtitle={subtitle} 
            splitTitle={splitTitle || undefined} 
          />
        </div>
      </div>
      
      {/* Gallery peek area with calculated height */}
      <div className="gallery-peek-area" style={{ height: `${peekHeight}px` }}>
        <div className="gallery-container">
          <CircularGallery 
            items={gallery} 
            bend={5} 
            borderRadius={0.05} 
            scrollEase={0.02} 
          />
        </div>
      </div>
    </section>
  );
});

export default Hero;
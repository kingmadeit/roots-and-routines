"use client";
import { memo, useMemo } from "react";
import { PiShootingStarLight, PiStarFourFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/types";
import { motion } from "motion/react";
import Link from "next/link";
import { slideUpTransition } from "@/styles/animations";
import { CurlyArrow, DottedArrow } from "./svgs";

// Types
interface HeroProps {
  info: HeroSection;
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
    <motion.h1
      {...slideUpTransition}
      className="hero-title relative text-secondary max-w-[80%] font-nunito"
    >
      {splitTitle ? (
        <>
          <span className="block w-full">{splitTitle[0]}</span>
          <span className="block w-full">{splitTitle[1]}</span>
          <span className="block w-full">{splitTitle[2]}</span>
        </>
      ) : (
        title
      )}
      <PiShootingStarLight className="absolute top-[-3rem] right-[50%] w-16 h-16 text-secondary-light opacity-40"/>

    </motion.h1>
  );
});


const BackgroundDecorations = memo(function BackgroundDecorations() {
  return (
    <>
      <PiStarFourFill className="absolute bottom-[-60px] right-[-20px] w-16 h-16 text-accent opacity-30 animate-pulse" />
      <CurlyArrow className="absolute bottom-[2rem] left-1/2 -translate-x-1/2 w-40 h-40 text-accent opacity-30 animate-[var(--animate-periodic-bounce)]" />

      {/* TODO :: ADD BLUR COLORFUL BG WITH BACKDROP FILTER */}
    </>
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
      
      <motion.h2
        {...ANIMATION_CONFIG.subtitle}
        className="hero-sub-title max-w-[90%] font-nunito"
      >
        {subtitle}
      </motion.h2>
      
      {/* TODO:: I still think this button is valuable -- confirm with client */}
      <motion.div className="relative hidden" {...ANIMATION_CONFIG.button}>
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
      </motion.div>
    </div>
  );
});

const Hero = memo<HeroProps>(function Hero({ info }) {
  const { title, subtitle, titleSeparator } = info;
  
  const splitTitle = useMemo(() => 
    splitTitleBySeparator(title, titleSeparator), 
    [title, titleSeparator]
  );

  return (
    <section className="hero relative leading-[0.5] relative mb-32 font-nunito">
      <div className="w-full min-h-screen grid grid-cols-1 content-center">
        <ContentSection 
          title={title} 
          subtitle={subtitle} 
          splitTitle={splitTitle || undefined} 
        />
      </div>
      <BackgroundDecorations />
    </section>
  );
});

export default Hero;
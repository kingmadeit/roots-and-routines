"use client";
import { memo, useMemo } from "react";
import { PiShootingStarLight, PiStarFourFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/types";
import { motion } from "motion/react";
import Link from "next/link";
import { slideUpTransition } from "@/styles/animations";
import Lottie from "lottie-react";
import animationData from "../../public/animations/family-animation.json";
import { CurlyArrow, DottedArrow, Sunshine } from "./svgs";

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

const LOTTIE_CONFIG = {
  loop: false,
  autoplay: false,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
} as const;

const BUTTON_STYLES = "bg-[var(--bg-secondary)] mt-4 hover:scale-[0.9] hover:bg-[var(--bg-secondary)] text-white font-nunito font-bold cursor-pointer" as const;

// Utility function
const splitTitleBySeperator = (title: string, separator?: string): string[] | null => {
  return separator ? title.split(separator) : null;
};

// Memoized Components
const TitleDisplay = memo<TitleDisplayProps>(function TitleDisplay({ title, splitTitle }) {
  return (
    <motion.h1
      {...slideUpTransition}
      className="hero-title text-secondary max-w-[80%] font-nunito"
    >
      {splitTitle ? (
        <>
          <span className="block w-full">{splitTitle[0]}</span>
          <span className="block w-full">{splitTitle[1]}</span>
        </>
      ) : (
        title
      )}
    </motion.h1>
  );
});

const AnimationSection = memo(function AnimationSection() {
  const lottieOptions = useMemo(() => ({
    ...LOTTIE_CONFIG,
    animationData,
  }), []);

  return (
    <div className="h-full relative flex items-center justify-center">
      <div className="w-full max-w-lg aspect-square">
        <Lottie {...lottieOptions} />
      </div>
    </div>
  );
});

const BackgroundDecorations = memo(function BackgroundDecorations() {
  return (
    <>
      <PiStarFourFill className="absolute bottom-[-60px] right-[-20px] w-16 h-16 text-accent opacity-30 animate-pulse" />
      <PiShootingStarLight className="absolute top-[-80px] left-[-20px] w-16 h-16 text-secondary-light opacity-90 animate-pulse" />
      <CurlyArrow className="absolute bottom-[-7rem] left-1/2 -translate-x-1/2 w-40 h-40 text-accent opacity-30" />
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
      
      <Sunshine className="w-20 h-20 text-accent opacity-30" />
      
      <motion.div className="relative" {...ANIMATION_CONFIG.button}>
        <Button
          asChild
          className={BUTTON_STYLES}
          size="lg"
        >
          <Link href="/#pricing" prefetch={false}>
            Get Started
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
    splitTitleBySeperator(title, titleSeparator), 
    [title, titleSeparator]
  );

  return (
    <section className="hero leading-[0.5] relative mb-32 font-nunito">
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 content-center">
        <ContentSection 
          title={title} 
          subtitle={subtitle} 
          splitTitle={splitTitle || undefined} 
        />
        <AnimationSection />
      </div>
      <BackgroundDecorations />
    </section>
  );
});

export default Hero;
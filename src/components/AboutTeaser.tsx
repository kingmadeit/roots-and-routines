"use client";
import { IAboutTeaser } from "@/types/index";
import Link from "next/link";
import * as motion from "motion/react-client";
import { SectionTag, CarouselWrapper } from ".";
import { slideLeftTransition, slideUpTransition } from "@/styles/animations";
import { Button } from "./ui/button";
import Lottie from "lottie-react";
import animationData from "../../public/animations/empower.json";

type AboutTeaserProps = {
  about: IAboutTeaser;
};

const AboutTeaser = ({ about }: AboutTeaserProps) => {
  const { title, shortCopy, cta } = about;

  return (
    <section className="rounded-section bg-secondary/80 mt-0!">
      <SectionTag tag="About Us" />
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 content-center">
        {/* <motion.div {...slideLeftTransition}>
          <CarouselWrapper />
        </motion.div> */}
        <div className="h-full">
          <Lottie
            loop={true}
            autoplay={true}
            width={100}
            height={100}
            animationData={animationData}
          />
        </div>
        <div className="text-center">
          <motion.h2 {...slideUpTransition} className="text-heading">
            {title}
          </motion.h2>
          <motion.p
            {...slideUpTransition}
            className="my-8 text-body text-white"
          >
            {shortCopy}
          </motion.p>
          <Button
            asChild
            className="bg-[var(--bg-accent)] hover:scale-[0.9] hover:bg-[var(--bg-accent)] text-white font-bold cursor-pointer"
            size="lg"
          >
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;

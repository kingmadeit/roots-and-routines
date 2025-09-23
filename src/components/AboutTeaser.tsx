"use client";
import { IAboutTeaser } from "@/types/index";
import Link from "next/link";
import * as motion from "motion/react-client";
import { SectionTag } from ".";
import { slideUpTransition } from "@/styles/animations";
import { Button } from "./ui/button";
import Lottie from "lottie-react";
import animationData from "../../public/animations/empower.json";
import { Flower } from "./svgs";

type AboutTeaserProps = {
  about: IAboutTeaser;
};

const AboutTeaser = ({ about }: AboutTeaserProps) => {
  const { title, shortCopy, cta } = about;

  return (
    <section className="rounded-section bg-secondary-light mt-0! relative">
      <Flower className="absolute -bottom-10 right-0 w-40 h-40 text-primary opacity-20" />
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

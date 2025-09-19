"use client";
import { PiShootingStarLight } from "react-icons/pi";
import { PiStarFourFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { FaRegPaperPlane } from "react-icons/fa";
import { HeroSection } from "@/types";
import * as motion from "motion/react-client";
import Link from "next/link";
import { slideUpTransition } from "@/styles/animations";
import Lottie from "lottie-react";
import animationData from "../../public/animations/family-animation.json";
import { CurlyArrow, DottedArrow, Sunshine } from "./svgs";

type HeroProps = {
  info: HeroSection;
};

let splitTitle: string[];

export default function Hero({ info }: HeroProps) {
  const { title, subtitle, titleSeparator } = info;

  if (titleSeparator) splitTitle = title.split(titleSeparator);

  return (
    <section className="hero leading-[0.5] relative mb-32">
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 content-center">
        <div className="p-4 md:p-16 flex flex-col space-y-4 items-center justify-center">
          <motion.h1
            {...slideUpTransition}
            className="hero-title text-secondary max-w-[80%]"
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
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="hero-sub-title max-w-[90%]"
          >
            {subtitle}
          </motion.h2>
          <Sunshine className=" w-20 h-20 text-accent opacity-30" />
          <motion.div
            className="relative"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Button
              asChild
              className="bg-[var(--bg-secondary)] mt-4 hover:scale-[0.9] hover:bg-[var(--bg-secondary)] text-white font-bold cursor-pointer"
              size="lg"
            >
              <Link href="/#pricing">Get Started</Link>
            </Button>
            <DottedArrow className="absolute bottom-[calc(100% + 2rem)] -left-15 w-40 h-40 text-accent opacity-30" />
          </motion.div>
          {/* <div className="flex gap-4 mt-6 relative">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <Button
                asChild
                className="bg-[var(--bg-secondary)] hover:scale-[0.9] hover:bg-[var(--bg-secondary)] text-white font-bold cursor-pointer"
                size="lg"
              >
                <Link href="/#pricing">Get Started</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <Button
                asChild
                className="bg-[var(--bg-accent)] text-white hover:scale-[0.9] hover:bg-[var(--bg-accent)] font-bold cursor-pointer"
                size="lg"
              >
                <Link href="/#services">Learn More</Link>
              </Button>
            </motion.div>
            <FaRegPaperPlane className="absolute bottom-[-50px] left-[0] w-6 h-6 text-accent" />
          </div> */}
        </div>
        <div className="h-full relative">
          <Lottie
            loop={false}
            autoplay={false}
            width={100}
            height={100}
            animationData={animationData}
          />
        </div>
      </div>

      <PiStarFourFill className="absolute bottom-[-60px] right-[-20px] w-16 h-16 text-accent opacity-30 animate-pulse" />
      <PiShootingStarLight className="absolute top-[-80px] left-[-20px] w-16 h-16 text-secondary-light opacity-90 animate-pulse" />
      <CurlyArrow className="absolute bottom-[-7rem] left-1/2 -translate-x-1/2 w-40 h-40 text-accent opacity-30" />
    </section>
  );
}

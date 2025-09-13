import { PiShootingStarLight } from "react-icons/pi";
import { PiStarFourFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { FaRegPaperPlane } from "react-icons/fa";
import { HeroSection } from "@/types";
import * as motion from "motion/react-client";
import Link from "next/link";
import { slideUpTransition } from "@/styles/animations";

type HeroProps = {
  info: HeroSection;
};

let splitTitle: string[];

export default function Hero({ info }: HeroProps) {
  const { title, subtitle, titleSeparator } = info;

  if (titleSeparator) splitTitle = title.split(titleSeparator);

  return (
    <section className="hero leading-[0.5]">
      <div className="p-4 md:p-16 flex flex-col space-y-4 items-center container">
        <motion.h1
          {...slideUpTransition}
          className="hero-title text-[#fff8a9] max-w-[80%] md:max-w-[60%] text-shadow-md"
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
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="hero-sub-title max-w-[90%] md:max-w-[55%]"
        >
          {subtitle}
        </motion.h2>
        <div className="flex gap-4 mt-6 relative">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
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
        </div>
      </div>
      <PiStarFourFill className="absolute bottom-[-60px] right-[-20px] w-16 h-16 text-accent opacity-30 animate-pulse" />
      <PiShootingStarLight className="absolute top-[-80px] left-[-20px] w-16 h-16 text-secondary-light opacity-90 animate-pulse" />
    </section>
  );
}

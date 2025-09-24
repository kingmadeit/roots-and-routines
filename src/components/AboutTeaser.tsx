"use client";
import { IAboutTeaser } from "@/types/index";
import Link from "next/link";
import * as motion from "motion/react-client";
import { slideUpTransition } from "@/styles/animations";
import { Button } from "./ui/button";
import { Flower } from "./svgs";

type AboutTeaserProps = {
  about: IAboutTeaser;
};

const AboutTeaser = ({ about }: AboutTeaserProps) => {
  const { title, shortCopy, cta } = about;

  return (
    <section className="rounded-section bg-secondary-light mt-0! relative">
      <Flower className="absolute -bottom-10 right-0 w-40 h-40 text-primary opacity-20" />
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 content-center">
        <div className="border">
          <motion.h3 {...slideUpTransition} className="text-1xl sm:text-2xl md:text-3xl font-nunito font-bold text-primary">
            {shortCopy}
          </motion.h3>

          {/* <Button
            asChild
            className="bg-[var(--bg-accent)] hover:scale-[0.9] hover:bg-[var(--bg-accent)] text-white font-bold cursor-pointer"
            size="lg"
          >
            <Link href={cta.href}>{cta.label}</Link>
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;

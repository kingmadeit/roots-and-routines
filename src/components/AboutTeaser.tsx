import { IAboutTeaser } from "@/types/index";
import Link from "next/link";
import * as motion from "motion/react-client";
import { SectionTag, CarouselWrapper } from ".";
import { slideUpTransition } from "@/styles/animations";

type AboutTeaserProps = {
  about: IAboutTeaser;
};

const AboutTeaser = ({ about }: AboutTeaserProps) => {
  const { title, shortCopy, cta } = about;

  return (
    <section className="rounded-section bg-secondary">
      <SectionTag tag="About Us" />
      <div className="container min-h-full flex flex-col space-y-4 md:space-y-8 mx-auto">
        <motion.h2
          {...slideUpTransition}
          viewport={{ once: true }}
          className="text-heading text-blanchedalmond"
        >
          {title}
        </motion.h2>
        <div className="min-h-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div>
            <p className="text-body text-white">{shortCopy}</p>
            <Link href={cta.href}>{cta.label}</Link>
          </div>
          <div>
            <CarouselWrapper />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;

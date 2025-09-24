"use client";
import { IAboutTeaser } from "@/types/index";
import { Flower } from "./svgs";
import { Animated } from ".";
import { slideUpTransition } from "@/styles/animations";

type AboutTeaserProps = {
  about: IAboutTeaser;
};

const AboutTeaser = ({ about }: AboutTeaserProps) => {
  const { shortCopy } = about;

  return (
    <section className="rounded-section bg-secondary-light mt-0! relative">
      <Flower className="absolute -bottom-10 right-0 w-40 h-40 text-primary opacity-20" />
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 content-center">
        <div className="border">
          <Animated as="h3" {...slideUpTransition} className="text-1xl sm:text-2xl md:text-3xl font-nunito font-bold text-primary">
            {shortCopy}
          </Animated>

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

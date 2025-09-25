"use client";
import { IAboutTeaser } from "@/types/index";
import { Flower } from "./svgs";
import { Animated } from ".";
import { slideUpTransition } from "@/styles/animations";

type AboutTeaserProps = {
  about: IAboutTeaser;
};

// const { shortCopy } = about;
const AboutTeaser = ({ about }: AboutTeaserProps) => {

  return (
    <section className="max-w-[90%] mx-auto md:max-w-[70%] mt-0! relative">
      <Flower className="absolute -bottom-10 right-0 w-40 h-40 text-primary opacity-20" />
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 content-center">
        <div className="p-4 gradient-container-white">
          <Animated as="h3" {...slideUpTransition} className="leading-11 text-1xl sm:text-1xl md:text-2xl font-nunito font-bold text-secondary mb-4 text-center">
            <span className="block">Founded with</span>
            <span className="font-bold text-3xl md:text-5xl text-complementary"  > care and intention, </span>
            <span className="block">Roots & Routines Family Concierge is a</span>
            <span className="text-3xl md:text-5xl text-complementary"> personalized service dedicated to helping families </span>
            create smoother home routines, find trusted support, and make confident decisions for their child&apos;s wellbeing.
          </Animated>

          {/* <Button
            asChild
            className="bg-[var(--bg-accent)] hover:scale-[0.9] hover:bg-[var(--bg-accent)] text-white font-bold cursor-pointer"
            size="lg"
          >
            <Link href={cta.href}>{cta.label}</Link>
          </Button> */}
        </div>
        <div className="w-full bg-accent/50 rounded-r-2xl">

        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;

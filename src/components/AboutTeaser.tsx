"use client";
import { IAboutTeaser } from "@/types/index";
import { Animated, ContactOptions, MediaBlock } from ".";
import { slideUpTransition } from "@/styles/animations";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

type AboutTeaserProps = {
  about: IAboutTeaser;
};

// const { shortCopy } = about;
const AboutTeaser = ({ about }: AboutTeaserProps) => {

  return (
    <section className="relative md:max-w-[95%] mx-auto">
      <div className="grid grid-cols-1 gap-6 lg:gap-12 content-center">
        <MediaBlock type="image" src="/hi-illustration.jpg">
          <Animated as="h3" {...slideUpTransition} className="leading-11 text-1xl sm:text-1xl md:text-2xl font-nunito font-bold text-secondary/50 mb-4 text-center">
              <span className="block">Founded with</span>
              <span className="font-bold text-3xl md:text-5xl text-complementary"  > care and intention, </span>
              <span className="block">Roots & Routines Family Concierge is a</span>
              <span className="text-3xl md:text-5xl text-complementary"> personalized service dedicated to helping families </span>
              create smoother home routines, find trusted support, and make confident decisions for their child&apos;s wellbeing.
            </Animated>
        </MediaBlock>
        <div className="w-full h-80 lg:col-span-2 bg-complementary/70 rounded-4xl">
          <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent className="bg-secondary rounded-4xl md:max-w-3xl w-[90%]">
              <DialogHeader>
                <DialogTitle>Ready to transform your family&apos;s daily life?</DialogTitle>
                <DialogDescription className="my-4">
                  <ContactOptions />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;

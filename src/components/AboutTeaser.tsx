"use client";
import ContactOptions from "./ContactOptions";
import MediaBlock from "./MediaBlock";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

// const { shortCopy } = about;
const AboutTeaser = () => {

  return (
    <section className="relative md:max-w-[95%] mx-auto">
      <div className="grid grid-cols-1 gap-6 lg:gap-12 content-center">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 content-center'>
          <div className="p-4 animate-on-scroll">
            <h3 className="leading-11 animate-on-scroll text-1xl sm:text-1xl md:text-2xl font-nunito font-bold text-secondary/50 mb-4 text-center">
              <span className="block">Founded with</span>
              <span className="font-bold text-3xl md:text-5xl text-complementary"  > care and intention, </span>
              <span className="block">Roots & Routines Family Concierge is a</span>
              <span className="text-3xl md:text-5xl text-complementary"> personalized service dedicated to helping families </span>
              create smoother home routines, find trusted support, and make confident decisions for their child&apos;s wellbeing.
            </h3>
          </div>
          <div className='w-full top-0 rounded-4xl overflow-hidden flex justify-center items-center'>
            <h3 className="leading-11 animate-on-scroll text-1xl sm:text-1xl md:text-2xl font-nunito font-bold text-secondary/50 mb-4 text-center">
              Your families rhythm doesn&apos;t have to match anyone&apos;s else&apos;s.
              <span className="font-bold text-3xl md:text-5xl text-accent" > Build routines that work</span>
              for you - ones that bring more laughter and less stress
            </h3>
          </div>
        </div>
        <div className="w-full h-80 lg:col-span-2 border border-green rounded-4xl">
          <h3 className="leading-11 animate-on-scroll text-1xl sm:text-1xl md:text-2xl font-nunito font-bold text-accent/50 mb-4 text-center">
            <span className="block font-bold text-3xl md:text-5xl text-secondary">No more guess work.</span>
            Ever feel like you&apos;re winging it everyday? <br />The mental load that comes with parenting is real. Having a home structure helps to
            <span className="block">free up brain space, reduce decision fatigue and gives your </span>

            <span className="text-3xl md:text-5xl text-secondary">family more time to connect. </span><br />
            Let us help you build a flow that works for you
          </h3>
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

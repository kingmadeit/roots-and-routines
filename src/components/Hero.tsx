import Image from "next/image";
import { pagesData } from "@/data";
import { PiShootingStarLight } from "react-icons/pi";
import { PiStarFourFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { FaRegPaperPlane } from "react-icons/fa";

const {
  home: {
    hero: { title, subtitle, cta, image },
  },
} = pagesData;

export default function Hero() {
  return (
    <section className="hero">
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-heading text-[#fff8a9]">{title}</h1>
        <h2 className="text-sub-heading text-accent">{subtitle}</h2>
        <div className="flex gap-4 mt-6 relative">
          <Button variant="destructive" size="lg">
            Get Started
          </Button>
          <Button variant="secondary" size="lg">
            Learn More
          </Button>
          <FaRegPaperPlane className="absolute bottom-[-50px] left-[0] w-6 h-6 text-accent" />
        </div>
      </div>
      <PiStarFourFill className="absolute bottom-[-60px] right-[-20px] w-16 h-16 text-accent opacity-30 animate-pulse" />
      <PiShootingStarLight className="absolute top-[-80px] left-[-20px] w-16 h-16 text-secondary-light opacity-90 animate-pulse" />
    </section>
  );
}

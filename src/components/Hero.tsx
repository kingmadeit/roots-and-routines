import { PiShootingStarLight } from "react-icons/pi";
import { PiStarFourFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { FaRegPaperPlane } from "react-icons/fa";
import { HeroSection } from "@/types";

type HeroProps = {
  info: HeroSection;
};

let splitTitle: string[];

export default function Hero({ info }: HeroProps) {
  const { title, subtitle, titleSeparator } = info;

  if (titleSeparator) splitTitle = title.split(titleSeparator);

  return (
    <section className="hero leading-[0.5]">
      <div className="flex flex-col space-y-4 items-center">
        <h1 className="hero-title text-[#fff8a9] max-w-[80%] md:max-w-[60%] text-shadow-md">
          {splitTitle ? (
            <>
              <span className="block w-full">{splitTitle[0]}</span>
              <span className="block w-full">{splitTitle[1]}</span>
            </>
          ) : (
            title
          )}
        </h1>
        <h2 className="hero-sub-title max-w-[90%] md:max-w-[55%]">
          {subtitle}
        </h2>
        <div className="flex gap-4 mt-6 relative">
          <Button
            className="bg-[var(--bg-secondary)] hover:scale-[0.9] hover:bg-[var(--bg-secondary)] text-white font-bold cursor-pointer"
            size="lg"
          >
            Get Started
          </Button>
          <Button
            className="bg-[var(--bg-accent)] text-white hover:scale-[0.9] hover:bg-[var(--bg-accent)] font-bold cursor-pointer"
            size="lg"
          >
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

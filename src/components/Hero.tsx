import Image from "next/image";
import { siteData } from "@/data";
import { PiShootingStarLight } from "react-icons/pi";
import { PiStarFourFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { FaRegPaperPlane } from "react-icons/fa";

const { company: { tagline, slogan } } = siteData;

export default function Hero() {
  return (
    <section className="flex justify-between items-center hero min-h-screen gap-4">
      <div>
        <h1 className="text-heading text-secondary">{tagline}</h1>
        <h2 className="text-sub-heading text-accent">{slogan}</h2>
        <div className="flex gap-4 mt-6 relative">
          <Button variant="destructive" size="lg">Get Started</Button>
          <Button variant="secondary" size="lg">Learn More</Button>
          <FaRegPaperPlane className="absolute bottom-[-50px] left-[0] w-6 h-6 text-accent" />
        </div>
      </div>
      <div className="overlay relative">
        <div className="hero-img-wrapper">
          <Image src="/smiling-child.jpg" alt="Description" width={500} height={300} />
        </div>
        <PiShootingStarLight className="absolute top-[-80px] left-[-20px] w-16 h-16 text-secondary-light opacity-90 animate-pulse" />
        <PiStarFourFill className="absolute bottom-[-60px] right-[-20px] w-16 h-16 text-accent opacity-30 animate-pulse" />
      </div>
    </section>
  );
}

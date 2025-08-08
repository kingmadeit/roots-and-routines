import Image from "next/image";
import { siteData } from "@/data";
import { PiShootingStarLight } from "react-icons/pi";
import { PiStarFourFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";

const { company: { tagline, slogan } } = siteData;

export default function Home() {
  return (
    <section className="flex justify-between items-center hero gap-4">
      <div>
        <h1 className="text-heading text-secondary">{tagline}</h1>
        <h2 className="text-sub-heading text-accent">{slogan}</h2>
        <div>
          <Button variant="outline">Get Started</Button>
          <Button variant="link">Learn More</Button>
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

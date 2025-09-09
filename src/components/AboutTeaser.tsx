import { IAboutTeaser } from "@/types/index";
import Link from "next/link";
import Carousel from "./ui/carousel";

type AboutTeaserProps = {
  about: IAboutTeaser;
};

const AboutTeaser = ({ about }: AboutTeaserProps) => {
  const { title, shortCopy, cta } = about;

  return (
    <section className="flex min-h-screen  flex-col space-y-4 md:space-y-8 px-4 md:px-16 pt-8 pb-32 md:pt-16 bg-secondary rounded-t-[3rem]">
      <h4 className="section-name">About Us</h4>
      <div className="container flex flex-col space-y-4 md:space-y-8 mx-auto">
        <h2 className="text-heading text-blanchedalmond">{title}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div>
            <p className="text-body text-white">{shortCopy}</p>
            <Link href={cta.href}>{cta.label}</Link>
          </div>
          <div>
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;

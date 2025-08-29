import { IAboutTeaser } from "@/types/index";
import Link from "next/link";

type AboutTeaserProps = {
  about: IAboutTeaser;
};

const AboutTeaser = ({ about }: AboutTeaserProps) => {
  const { title, shortCopy, cta } = about;

  return (
    <section className="flex min-h-screen  flex-col space-y-4 md:space-y-8 px-4 md:px-16 pt-8 pb-32 md:pt-16 bg-secondary rounded-t-[3rem]">
      <h4 className="section-name">About Us</h4>
      <div className="flex flex-col space-y-4 md:space-y-8 ">
        <h2 className="text-heading text-blanchedalmond">{title}</h2>
        <p className="text-body text-white">{shortCopy}</p>
        <Link href={cta.href}>{cta.label}</Link>
      </div>
    </section>
  );
};

export default AboutTeaser;

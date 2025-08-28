import { pagesData } from "@/data";
import Link from "next/link";

const {
  home: {
    aboutTeaser: { title, shortCopy, cta },
  },
} = pagesData;

const CompanySummary = () => {
  return (
    <section className="company-summary px-4 md:px-16 pt-8 pb-32 md:pt-16 bg-secondary rounded-t-[3rem]">
      <h4 className="text-sub-heading text-accent">About Us</h4>

      <div>
        <h2 className="text-heading text-blanchedalmond">{title}</h2>
        <p className="text-body text-white">{shortCopy}</p>
        <Link href={cta.href}>{cta.label}</Link>
      </div>
    </section>
  );
};

export default CompanySummary;

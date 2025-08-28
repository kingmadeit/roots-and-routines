import Link from "next/link";
import { pagesData } from "@/data";

const {
  home: {
    servicesTeaser: { title, description, featuredServices },
  },
} = pagesData;

export default function ServiceTeaser() {
  return (
    <section className="relative top-[-50px] company-summary px-4 md:px-16 pt-8 md:pt-16 pb-32 bg-white rounded-t-[3rem]">
      <h4 className="text-sub-heading text-accent">{title}</h4>

      <div>
        <h2 className="text-heading text-secondary">{title}</h2>
        <p className="text-body text-secondary">{description}</p>
        {/* <Link href={cta.href}>{cta.label}</Link> */}
      </div>
    </section>
  );
}

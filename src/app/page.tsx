import {
  Hero,
  AboutTeaser,
  ServiceTeaser,
  PackagesTeaser,
  FounderQuote,
} from "@/components";
import { pagesData } from "@/data";
import { siteData } from "@/data";
const {
  home: { hero, servicesTeaser, aboutTeaser, meta },
} = pagesData;

export const metaData = meta;

export default function Home() {
  return (
    <>
      <Hero info={hero} />
      {/* About */}
      <AboutTeaser about={aboutTeaser} />
      {/* service */}
      <ServiceTeaser services={servicesTeaser} />
      {/* pricing */}
      <PackagesTeaser />
      {/* Founder Quote */}
      <FounderQuote
        founderName={siteData.founder.name}
        quote={siteData.company.philosophy}
      />
    </>
  );
}

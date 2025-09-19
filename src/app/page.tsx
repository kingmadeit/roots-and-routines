import {
  Hero,
  AboutTeaser,
  ServiceTeaser,
  PackagesTeaser,
  ContactTeaser,
} from "@/components";
import { pagesData } from "@/data";
import { siteData } from "@/data";
const {
  home: { hero, servicesTeaser, aboutTeaser, meta },
} = pagesData;

export const metadata = meta;

export default function Home() {
  return (
    <>
      <Hero info={hero} />
      {/* About */}
      <AboutTeaser about={aboutTeaser} />
      {/* service */}
      {/* <ServiceTeaser services={servicesTeaser} /> */}
      <ServiceTeaser />
      {/* pricing */}
      <PackagesTeaser />
      {/* Founder Quote */}
      <ContactTeaser
        founderName={siteData.founder.name}
        quote={siteData.company.philosophy}
      />
    </>
  );
}

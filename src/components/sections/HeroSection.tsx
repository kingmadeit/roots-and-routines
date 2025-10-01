import { pagesData } from "@/data/pages";
import Hero from "../Hero";

const {
    home: { hero, meta, gallery }
  } = pagesData;
  
const HeroSection = () => {
    return  <Hero info={hero} gallery={gallery} />;
}

export default HeroSection;
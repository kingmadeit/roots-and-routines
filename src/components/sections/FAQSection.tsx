import { siteData } from "@/data/full-site";
import FAQ from "../FAQ";

const {
  faq
} = siteData;

const FAQSection = () => <FAQ data={faq} maxItemsToShow={6} />

export default FAQSection;
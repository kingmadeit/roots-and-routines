import { siteData } from "@/data/full-site";
import FAQ from "../FAQ";

const {
  faq
} = siteData;

const FAQSection = () => {
  return (
    <div className="rounded-section bg-complementary/90 relative">
      <FAQ data={faq} maxItemsToShow={6} />
    </div>
  );
};

export default FAQSection;
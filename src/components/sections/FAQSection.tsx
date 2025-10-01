import { siteData } from "@/data/full-site";
import FAQ from "../FAQ";

const { 
    faq
  } = siteData;

const FAQSection = () => {
    return (
      <div className="container mx-auto">
        <div className="rounded-section bg-accent/90 relative">
          <FAQ data={faq} maxItemsToShow={6} />
        </div>
      </div>
    );
};

export default FAQSection;
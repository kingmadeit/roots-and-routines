import { siteData } from "@/data/full-site";
import ContactTeaser from "../ContactTeaser";
const { 
    founder: { name: founderName },
    company: { philosophy: companyPhilosophy },
  } = siteData;
  
const ContactSection = () => {
    return (
      <div className="container mx-auto">
        <ContactTeaser 
          founderName={founderName}
          quote={companyPhilosophy}
        />
      </div>
    );
}

export default ContactSection;
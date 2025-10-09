import { siteData } from "@/data/full-site";
import ContactTeaser from "../ContactTeaser";
const {
  founder: { name: founderName },
  company: { philosophy: companyPhilosophy },
} = siteData;

const ContactSection = () => {
  return (
    <ContactTeaser
      founderName={founderName}
      quote={companyPhilosophy}
    />
  );
}

export default ContactSection;
import {
  Phone,
  Mail,
} from "lucide-react";

const ContactInfo = () => {
  <section>
    <div className="flex-col flex mt-8 items-start justify-center space-y-8 md:flex-row md:space-x-8">
      <div className="flex flex-col space-y-2 items-center">
        <Mail />
        <span>Email</span>
      </div>
      <div className="flex flex-col space-y-2 items-center">
        <Phone />
        <span>WhatsApp</span>
      </div>
    </div>
  </section>;
};

export default ContactInfo;

import { SectionTag } from ".";
import { Button } from "./ui/button";

type FounderQuoteProps = {
  quote: string;
  founderName: string;
};

const ContactTeaser = ({ quote }: FounderQuoteProps) => {
  return (
    <section className="rounded-section translate-y-[-150px] bg-accent">
      <SectionTag tag="Get Started" />
      <div className="flex flex-col justify-center min-h-screen">
        <div className="rounded-full w-[70%] mx-auto bg-primary text-secondary text-center font-bold p-16 ">
          <div className="text-center">
            <h2 className="text-heading  text-secondary!">
              Ready to get started?
            </h2>
            <p className="font-medium inline-block mt-4 w-[70%]">{quote}</p>
          </div>
          <Button
            className="mt-8 bg-[var(--bg-accent)] text-white hover:scale-[0.9] hover:bg-[var(--bg-accent)] font-bold cursor-pointer"
            size="lg"
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactTeaser;

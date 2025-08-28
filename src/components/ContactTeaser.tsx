import { Button } from "./ui/button";

type FounderQuoteProps = {
  quote: string;
  founderName: string;
};

const ContactTeaser = ({ quote }: FounderQuoteProps) => {
  return (
    <section className="flex items-center justify-center translate-y-[-150px] px-4 md:px-16 pb-32 bg-secondary min-h-screen rounded-t-[3rem]">
      <h4 className="section-name absolute top-20 left-16">Get Started</h4>
      <div className="w-[70%] bg-primary text-secondary text-center font-bold p-16 ">
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
    </section>
  );
};

export default ContactTeaser;

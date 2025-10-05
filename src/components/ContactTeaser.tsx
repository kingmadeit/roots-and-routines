'use client'
import { Button } from "./ui/button";
import ContactOptions from "./ContactOptions";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

type FounderQuoteProps = {
  quote: string;
  founderName: string;
};

const ContactTeaser = ({ quote }: FounderQuoteProps) => {
  return (
    <section className="rounded-section pt-0! mt-0!">
      <div className="flex flex-col justify-center min-h-screen/2">
        <div className="rounded-full w-[70%] mx-auto bg-secondary-light text-secondary text-center font-bold p-16 ">
          <div className="text-center">

            <h2 className="text-heading  text-primary!">
              prices start from E60
            </h2>
            <p className="font-medium text-primary inline-block mt-4 w-[70%]">get in touch to get started</p>
          </div>
          <Dialog>
            <DialogTrigger>
              <Button
                className="mt-8 bg-[var(--bg-accent)] text-white hover:scale-[0.9] hover:bg-[var(--bg-accent)] font-bold cursor-pointer"
                size="lg"
              >
                Enquire Now
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-secondary rounded-4xl md:max-w-3xl w-[90%]">
              <DialogHeader>
                <DialogTitle>Ready to transform your family&apos;s daily life?</DialogTitle>
                <DialogDescription className="my-4">
                  <ContactOptions />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default ContactTeaser;

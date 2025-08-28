type FounderQuoteProps = {
  quote: string;
  founderName: string;
};

const FounderQuote = ({ founderName, quote }: FounderQuoteProps) => {
  return (
    <section className="flex items-center justify-center translate-y-[-150px] px-4 md:px-16 pb-32 bg-secondary min-h-screen rounded-t-[3rem]">
      <h4 className="section-name absolute top-20 left-16">Get Started</h4>
      <div className="w-[70%] bg-primary text-secondary text-center font-bold p-16 ">
        <blockquote>{quote}</blockquote>
        <span className="font-medium inline-block mt-4">
          -&nbsp;{founderName}
        </span>
      </div>
    </section>
  );
};

export default FounderQuote;

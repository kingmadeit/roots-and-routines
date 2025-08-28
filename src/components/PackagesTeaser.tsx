"use client";
import { pagesData } from "@/data";

const {
  home: {
    packagesTeaser: { title, description, packages },
  },
} = pagesData;

export default function PackagesTeaser() {
  return (
    <div className="translate-y-[-100px] px-4 md:px-16 pb-32 bg-primary rounded-t-[3rem]">
      <h4 className="absolute top-10 section-name text-secondary!">Pricing</h4>
      <Pricing4 />
    </div>
  );
}

interface CheckIconProps {
  className?: string;
}

const CheckIcon = ({ className = "w-6 h-6" }: CheckIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

interface ProPlanIconProps {
  className?: string;
}

const ProPlanIcon = ({ className = "w-5 h-5" }: ProPlanIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
    <path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"></path>
  </svg>
);

// --- Reusable Components ---

interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps) => (
  <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-bold px-3 py-1 rounded-full tracking-wider">
    <span className="w-2 h-2 bg-orange-500 dark:bg-orange-400 rounded-full"></span>
    {text}
  </div>
);

interface GetStartedButtonProps {
  isFeatured: boolean;
  label?: string;
}

const GetStartedButton = ({
  isFeatured,
  label = "Get Started",
}: GetStartedButtonProps) => (
  <button
    type="button"
    aria-label={label}
    className={`w-full text-center py-3.5 rounded-lg font-semibold text-md transition-all duration-300 ease-in-out transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
      isFeatured
        ? "bg-white dark:bg-gray-900 text-orange-700 dark:text-orange-300 hover:text-orange-800 dark:hover:text-orange-200 ring-orange-500 ring-offset-orange-500/20"
        : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 ring-gray-300 dark:ring-gray-600 ring-offset-white dark:ring-offset-black"
    }`}
  >
    {label}
  </button>
);

interface FeatureListItemProps {
  children: React.ReactNode;
  isFeatured: boolean;
}

const FeatureListItem = ({ children, isFeatured }: FeatureListItemProps) => (
  <li className="flex items-start gap-3">
    <div
      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
        isFeatured ? "bg-white/25" : "bg-gray-200 dark:bg-gray-700"
      }`}
    >
      <CheckIcon
        className={`${
          isFeatured ? "text-white" : "text-gray-700 dark:text-gray-300"
        } w-3.5 h-3.5`}
      />
    </div>
    <span
      className={`text-sm ${
        isFeatured ? "text-white/90" : "text-gray-600 dark:text-gray-300"
      }`}
    >
      {children}
    </span>
  </li>
);

// --- Main Section Components ---

const Header = () => (
  <header className="relative text-center mb-12 md:mb-20 px-4 z-10">
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary rounded-full filter blur-3xl opacity-20 -z-10"
      aria-hidden="true"
    ></div>

    <h1 className="text-4xl sm:text-5xl md:text-6xl font-quicksand font-bold leading-tight tracking-tighter animate-fade-in-down">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500">
        {title}
      </span>
    </h1>

    <p
      className="text-secondary mt-6 text-base sm:text-lg max-w-2xl mx-auto animate-fade-in-down"
      style={{ animationDelay: "0.4s" }}
    >
      {description}
    </p>
  </header>
);

interface PricingCardProps {
  plan: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard = ({
  plan,
  currency = "$",
  price,
  description,
  features,
  isFeatured = false,
}: PricingCardProps) => (
  <article
    className={`relative p-6 md:p-8 rounded-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 ${
      isFeatured
        ? "bg-gradient-to-b from-red-500 to-orange-500 text-white shadow-2xl lg:scale-105"
        : "bg-white dark:bg-black text-gray-900 dark:text-white shadow-lg dark:shadow-gray-800/50"
    }`}
    aria-label={`${plan} plan`}
  >
    {isFeatured && (
      <div className="absolute -top-3 right-6">
        <span className="inline-flex items-center rounded-full bg-accent/70 text-white/90 text-xs font-semibold px-3 py-1 backdrop-blur">
          Most popular
        </span>
      </div>
    )}
    <div className="flex items-center gap-3 mb-6">
      <ProPlanIcon
        className={`w-5 h-5 ${
          isFeatured ? "text-white/80" : "text-gray-400 dark:text-gray-500"
        }`}
      />
      <h3
        className={`text-xs font-bold tracking-widest uppercase ${
          isFeatured ? "text-white/80" : "text-gray-400 dark:text-gray-500"
        }`}
      >
        {plan}
      </h3>
    </div>

    <div className="mb-6 flex items-baseline gap-1.5">
      {price === 0 ? (
        <>
          <span
            className={`text-4xl sm:text-5xl font-bold ${
              isFeatured ? "text-white" : "text-gray-900 dark:text-white"
            }`}
          >
            Free
          </span>
          <span
            className={`${
              isFeatured ? "text-white/70" : "text-gray-400 dark:text-gray-500"
            } text-sm`}
          >
            &nbsp;Forever
          </span>
        </>
      ) : (
        <>
          <span
            className={`text-4xl sm:text-5xl font-bold ${
              isFeatured ? "text-white" : "text-gray-900 dark:text-white"
            }`}
          >
            {currency}
            {price}
          </span>
          <span
            className={`${
              isFeatured ? "text-white/70" : "text-gray-400 dark:text-gray-500"
            } text-sm`}
          >
            &nbsp;/ month
          </span>
        </>
      )}
    </div>

    <p
      className={`mb-8 min-h-[4.5rem] text-sm ${
        isFeatured ? "text-white/85" : "text-gray-600 dark:text-gray-300"
      }`}
    >
      {description}
    </p>

    <div className="mb-8">
      <GetStartedButton
        isFeatured={isFeatured}
        label={price === 0 ? "Get Started Free" : "Get Started"}
      />
    </div>

    <ul className="space-y-4">
      {features.map((feature, index) => (
        <FeatureListItem key={`${plan}-${index}`} isFeatured={isFeatured}>
          {feature}
        </FeatureListItem>
      ))}
    </ul>
  </article>
);

export function Pricing4() {
  const pricingPlans = packages.map((pkg) => {
    const { id, name, price, currency, description, features, isPopular } = pkg;

    return {
      id,
      plan: name,
      price,
      currency,
      description,
      features,
      isFeatured: !!isPopular,
    };
  });

  return (
    <>
      {/* CSS for animations is added here */}
      <style>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out both;
        }
      `}</style>
      <div className="relative font-sans flex flex-col items-center justify-center overflow-x-hidden min-h-screen">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <Header />
          <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={`${plan.plan}-${index}`} {...plan} />
            ))}
          </main>
        </div>
      </div>
    </>
  );
}

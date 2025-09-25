"use client";
import { useMemo, memo } from "react";
import { Check, Circle } from "lucide-react";
import { pagesData } from "@/data";
import { slideUpTransition } from "@/styles/animations";
import { motion } from "motion/react";
// Constants
const ANIMATION_DELAY = "0.4s";
const BLUR_SIZE = "w-96 h-96";

// Utility functions
const getFeaturedStyles = (isFeatured: boolean) => ({
  card: isFeatured
    ? "bg-gradient-to-b from-[#ad8d3b] to-[#cba647] text-white shadow-2xl lg:scale-105"
    : "bg-white/40 text-white shadow-lg",
  button: isFeatured
    ? "hover:bg-[#514117] text-[#e7be52] cursor-pointer bg-[#251c06]"
    : "bg-[#e5f6d7] text-shadow-white text-secondary cursor-pointer hover:bg-secondary hover:text-white/80! ring-secondary ring-offset-secondary/20",
  text: isFeatured ? "text-white" : "text-[#48543e]",
  textSecondary: isFeatured ? "text-white/70" : "text-secondary",
  textTertiary: isFeatured ? "text-white/90" : "text-[#546148]",
  checkBg: isFeatured ? "bg-white/25" : "bg-secondary/20",
  checkIcon: isFeatured ? "text-white" : "text-secondary",
  featureText: isFeatured ? "text-white" : "text-[#546148]",
});

// Memoized components
const GetStartedButton = memo<{ isFeatured: boolean; label?: string }>(
  ({ isFeatured, label = "Get Started" }) => {
    const styles = getFeaturedStyles(isFeatured);
    
    return (
      <button
        type="button"
        aria-label={label}
        className={`w-full text-center py-3.5 rounded-lg font-semibold text-md transition-all duration-300 ease-in-out transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${styles.button}`}
      >
        {label}
      </button>
    );
  }
);

const FeatureListItem = memo<{ children: React.ReactNode; isFeatured: boolean }>(
  ({ children, isFeatured }) => {
    const styles = getFeaturedStyles(isFeatured);
    
    return (
      <li className="flex items-start gap-3">
        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${styles.checkBg}`}>
          <Check className={`${styles.checkIcon} w-3.5 h-3.5`} />
        </div>
        <span className={`text-sm ${styles.featureText}`}>
          {children}
        </span>
      </li>
    );
  }
);

const PricingHeader = memo(() => {
  const { title, description } = pagesData.home.packagesTeaser;
  
  return (
    <header className="relative text-center mb-12 md:mb-20 px-4 z-10">
      <div
        aria-hidden="true"
      />
      <motion.h1
        {...slideUpTransition}
        className="text-heading"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-500">
          {title}
        </span>
      </motion.h1>
      <p
        className="text-secondary mt-6 text-base sm:text-lg max-w-2xl mx-auto animate-fade-in-down"
        style={{ animationDelay: ANIMATION_DELAY }}
      >
        {description}
      </p>
    </header>
  );
});

const PricingCard = memo<{
  plan: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}>(({ plan, currency = "$", price, description, features, isFeatured = false }) => {
  const styles = getFeaturedStyles(isFeatured);
  const buttonLabel = price === 0 ? "Get Started Free" : "Get Started";
  
  return (
    <article
      className={`relative p-6 md:p-8 rounded-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 ${styles.card}`}
      aria-label={`${plan} plan`}
    >
      {isFeatured && (
        <div className="absolute -top-3 right-6">
          <span className="inline-flex items-center rounded-full bg-[#b45f22] text-white/80 text-xs font-semibold px-3 py-1 backdrop-blur">
            Most popular
          </span>
        </div>
      )}
      
      <div className="flex items-center gap-3 mb-6">
        <div className="relative">
          <Circle className={`w-5 h-5 ${styles.textSecondary}`} />
          <Circle className={`w-2 h-2 ${styles.textSecondary}`} />
        </div>
        <h3 className={`text-xs font-bold tracking-widest uppercase ${styles.textSecondary}`}>
          {plan}
        </h3>
      </div>

      <div className="mb-6 flex items-baseline gap-1.5">
        {price === 0 ? (
          <>
            <span className={`text-4xl sm:text-5xl font-bold ${styles.text}`}>
              Free
            </span>
            <span className={`${styles.textSecondary} text-sm`}>
              &nbsp;Forever
            </span>
          </>
        ) : (
          <>
            <span className={`text-4xl sm:text-5xl font-bold ${styles.text}`}>
              {currency}{price}
            </span>
            <span className={`${styles.textSecondary} text-sm`}>
              &nbsp;/ month
            </span>
          </>
        )}
      </div>

      <p className={`mb-8 min-h-[4.5rem] text-sm ${styles.textTertiary}`}>
        {description}
      </p>

      <div className="mb-8">
        <GetStartedButton isFeatured={isFeatured} label={buttonLabel} />
      </div>

      <ul className="space-y-4">
        {features.map((feature, index) => (
          <FeatureListItem key={`${plan}-feature-${index}`} isFeatured={isFeatured}>
            {feature}
          </FeatureListItem>
        ))}
      </ul>
    </article>
  );
});

const Pricing4 = memo(() => {
  const pricingPlans = useMemo(() => 
    pagesData.home.packagesTeaser.packages.map((pkg) => ({
      id: pkg.id,
      plan: pkg.name,
      price: pkg.price,
      currency: pkg.currency,
      description: pkg.description,
      features: pkg.features,
      isFeatured: !!pkg.isPopular,
    })), []
  );

  return (
    <div className="relative font-nunito flex flex-col items-center justify-center overflow-x-hidden min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <PricingHeader />
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </main>
      </div>
    </div>
  );
});

// Display names for better debugging
GetStartedButton.displayName = "GetStartedButton";
FeatureListItem.displayName = "FeatureListItem";
PricingHeader.displayName = "PricingHeader";
PricingCard.displayName = "PricingCard";
Pricing4.displayName = "Pricing4";

export default function PackagesTeaser() {
  return (
    <div id="pricing" className="rounded-section mt-0! w-full py-0!">
      <Pricing4 />
    </div>
  );
}

export { Pricing4 };
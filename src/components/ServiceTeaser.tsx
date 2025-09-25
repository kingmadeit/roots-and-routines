"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";
import { slideUpTransition } from "@/styles/animations";
import { siteData } from "@/data/full-site";
import { ServiceData } from "@/types";

interface TabData {
  id: string;
  title: string;
  color: string;
  description: string;
  cardContent: React.ReactNode | null;
}

interface ServiceCardProps {
  service: ServiceData;
}

interface SmoothTabProps {
  className?: string;
}

interface ServiceTeaserProps {
  services?: ServiceData[];
}

const tabs: TabData[] = [
  {
    id: "daily-operations",
    title: "Daily Operations",
    color: "bg-accent",
    description: "Streamline your family's daily routines",
    cardContent: null,
  },
  {
    id: "finding-support",
    title: "Finding Support",
    color: "bg-secondary",
    description: "Connect with trusted professionals",
    cardContent: null,
  },
  {
    id: "wellness-growth",
    title: "Wellness & Growth",
    color: "bg-complementary",
    description: "Support your family's wellbeing journey",
    cardContent: null,
  },
];

const { services } = siteData;

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white h-full flex flex-col border border-white/20">
      {/* Icon with illustration background */}
      <div className="relative w-20 h-20 mb-6">
        <div className="absolute inset-0 bg-white/20 rounded-2xl flex items-center justify-center">
          <IconComponent className="w-10 h-10 text-white" />
        </div>
        {/* Decorative background illustration */}
        <div className="absolute -inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-3xl -z-10"></div>
        <div className="absolute top-2 right-2 w-4 h-4 bg-white/30 rounded-full"></div>
        <div className="absolute bottom-1 left-1 w-2 h-2 bg-white/40 rounded-full"></div>
      </div>

      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-white/90 mb-6 flex-grow text-sm leading-relaxed font-nunito">
        {service.fullCopy}
      </p>

      <div className="space-y-3 mb-6">
        {service.features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-start text-sm">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-3 mt-2 flex-shrink-0"></div>
            <span className="text-white/80">{feature}</span>
          </div>
        ))}
        {service.features.length > 3 && (
          <div className="text-sm text-white/60 ml-4">
            +{service.features.length - 3} more features
          </div>
        )}
      </div>

      <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center group backdrop-blur-sm border border-white/30">
        Learn More
        <svg
          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

const SmoothTab: React.FC<SmoothTabProps> = ({ className }) => {
  const [selected, setSelected] = useState<string>("daily-operations");
  const [direction, setDirection] = useState<number>(0);
  const [dimensions, setDimensions] = useState<{ width: number; left: number }>(
    { width: 0, left: 0 }
  );

  const buttonRefs = React.useRef<Map<string, HTMLButtonElement>>(new Map());
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const updateDimensions = (): void => {
      const selectedButton = buttonRefs.current.get(selected);
      const container = containerRef.current;

      if (selectedButton && container) {
        const rect = selectedButton.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        setDimensions({
          width: rect.width,
          left: rect.left - containerRect.left - 8,
        });
      }
    };

    requestAnimationFrame(() => {
      updateDimensions();
    });

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [selected]);

  const handleTabClick = (tabId: string): void => {
    const currentIndex = tabs.findIndex((tab) => tab.id === selected);
    const newIndex = tabs.findIndex((tab) => tab.id === tabId);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setSelected(tabId);
  };

  const selectedTab = tabs.find((tab) => tab.id === selected);
  console.log(selectedTab);
  const selectedServices = services.filter(
    (service) => service.category === selected
  );

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      filter: "blur(8px)",
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      filter: "blur(8px)",
      scale: 0.95,
    }),
  };

  const transition = {
    duration: 0.4,
    ease: [0.32, 0.72, 0, 1] as const,
  };

  return (
    <div className={`w-full max-w-[90%] mx-auto ${className || ""}`}>
      {/* Tab Navigation - Moved to top */}
      <div className="flex justify-center mb-8">
        <div
          ref={containerRef}
          className={clsx(
            "flex items-start gap-2 p-2 relative rounded-3xl max-w-full",
            {
              "bg-accent/40": selectedTab?.id === "daily-operations",
              "bg-secondary/40": selectedTab?.id === "finding-support",
              "bg-complementary/40": selectedTab?.id === "wellness-growth",
            }
          )}
        >
          {/* Sliding Background */}
          <motion.div
            className={`absolute rounded-2xl z-[1] ${
              selectedTab?.color || "bg-accent"
            } shadow-lg`}
            initial={false}
            animate={{
              width: dimensions.width,
              x: dimensions.left,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            style={{ height: "calc(100% - 16px)", top: "8px" }}
          />

          <div className="flex gap-2 relative z-[2]">
            {tabs.map((tab) => {
              const isSelected = selected === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  ref={(el) => {
                    if (el) buttonRefs.current.set(tab.id, el);
                    else buttonRefs.current.delete(tab.id);
                  }}
                  type="button"
                  onClick={() => handleTabClick(tab.id)}
                  className={`relative flex flex-col items-center text-white/90 hover:text-white justify-center rounded-2xl px-6 py-4 text-sm font-medium transition-all duration-300 whitespace-nowrap min-w-0 ${
                    isSelected && "text-white"
                  }`}
                >
                  <span className="font-semibold">{tab.title}</span>
                  <span
                    className={`text-xs mt-1 font-nunito ${
                      isSelected ? "text-white" : "text-white/90"
                    }`}
                  >
                    {tab.description}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Area with tab color background */}
      <div className="relative min-h-[500px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={selected}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className={`${
              selectedTab?.color || "bg-accent/40"
            } rounded-3xl p-8 relative overflow-hidden`}
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-white/10 rounded-3xl"></div>
            <div className="absolute top-8 right-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>

            {/* Content grid */}
            <div className="relative z-10 grid gap-6 grid-cols-1 md:grid-cols-2">
              {selectedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const ServiceTeaser: React.FC<ServiceTeaserProps> = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 relative">
          <motion.h2
            {...slideUpTransition}
            className="text-heading text-accent! mx-auto"
          >
            Supporting families <br/> through every stage
          </motion.h2>
          <motion.p
            {...slideUpTransition}
            className="my-8 mx-auto text-body text-secondary max-w-xl"
          >
            From daily meal planning to finding the right childcare, we&apos;re here
            to make family life smoother and more joyful.
          </motion.p>
        </div>

        <SmoothTab />
      </div>
    </section>
  );
};

export default ServiceTeaser;

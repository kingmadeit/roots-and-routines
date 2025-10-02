"use client";
import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { slideUpTransition } from "@/styles/animations";
import { siteData } from "@/data/full-site";
import { ServiceData } from "@/types";
import { serviceCategories } from "@/constants/services";
import SmoothTabNav from "./SmoothTabNav";


interface ServiceCardProps {
  service: ServiceData;
}

interface SmoothTabProps {
  className?: string;
}

interface ServiceTeaserProps {
  services?: ServiceData[];
}

const tabs = serviceCategories;

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
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const selectedTab = tabs[selectedIndex];
  const selectedServices = services.filter(
    (service) => service.category === selectedTab.id
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

  const handleTabClick = useCallback((tabId: string): void => {
    const currentIndex = tabs.findIndex((tab) => tab.id === selectedTab.id);
    const newIndex = tabs.findIndex((tab) => tab.id === tabId);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setSelectedIndex(newIndex);
  },[]);

  return (
    <div className={`w-full max-w-[90%] mx-auto ${className || ""}`}>
      {/* Tab Navigation */}
      <SmoothTabNav
        tabs={tabs}
        selectedIndex={selectedIndex}
        onChange={handleTabClick}
      />

      {/* Content Area with tab color background */}
      <div className="relative min-h-[500px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={selectedTab.id}
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
            className="text-heading text-transparent bg-clip-text bg-gradient-to-r from-complementary to-accent"
          >
            Supporting families <br/> through every stage
          </motion.h2>
          <motion.p
            {...slideUpTransition}
            className="my-8 mx-auto text-body text-secondary max-w-xl font-medium"
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

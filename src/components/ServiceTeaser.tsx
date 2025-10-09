// "use client";
// import React, { useState, useCallback } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import { siteData } from "@/data/full-site";
// import { ServiceData } from "@/types";
// import { serviceCategories } from "@/constants/services";
// import SmoothTabNav from "./SmoothTabNav";
// import Link from "next/link";


// interface ServiceCardProps {
//   service: ServiceData;
// }

// interface SmoothTabProps {
//   className?: string;
// }

// interface ServiceTeaserProps {
//   services?: ServiceData[];
// }

// const tabs = serviceCategories;

// const { services } = siteData;

// const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
//   const IconComponent = service.icon;

//   return (
//     <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white h-full flex flex-col border border-white/20">
//       {/* Icon with illustration background */}
//       <div className="relative w-20 h-20 mb-6">
//         <div className="absolute inset-0 bg-white/20 rounded-2xl flex items-center justify-center">
//           <IconComponent className="w-10 h-10 text-white" />
//         </div>
//         {/* Decorative background illustration */}
//         <div className="absolute -inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-3xl -z-10"></div>
//         <div className="absolute top-2 right-2 w-4 h-4 bg-white/30 rounded-full"></div>
//         <div className="absolute bottom-1 left-1 w-2 h-2 bg-white/40 rounded-full"></div>
//       </div>

//       <h3 className="text-xl font-bold mb-3">{service.title}</h3>
//       <p className="text-white/90 mb-6 flex-grow text-sm leading-relaxed font-nunito">
//         {service.fullCopy}
//       </p>
//     </div>
//   );
// };


// const SmoothTab: React.FC<SmoothTabProps> = ({ className }) => {
//   const [selectedIndex, setSelectedIndex] = useState<number>(0);
//   const [direction, setDirection] = useState<number>(0);
//   const selectedTab = tabs[selectedIndex];
//   const selectedServices = services.filter(
//     (service) => service.category === selectedTab.id
//   );
//   const slideVariants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? "100%" : "-100%",
//       opacity: 0,
//       filter: "blur(8px)",
//       scale: 0.95,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       filter: "blur(0px)",
//       scale: 1,
//     },
//     exit: (direction: number) => ({
//       x: direction < 0 ? "100%" : "-100%",
//       opacity: 0,
//       filter: "blur(8px)",
//       scale: 0.95,
//     }),
//   };

//   const transition = {
//     duration: 0.4,
//     ease: [0.32, 0.72, 0, 1] as const,
//   };

//   const handleTabClick = useCallback((tabId: string): void => {
//     const currentIndex = tabs.findIndex((tab) => tab.id === selectedTab.id);
//     const newIndex = tabs.findIndex((tab) => tab.id === tabId);
//     setDirection(newIndex > currentIndex ? 1 : -1);
//     setSelectedIndex(newIndex);
//   }, []);

//   return (
//     <div className={`w-full max-w-[90%] mx-auto ${className || ""}`}>
//       {/* Tab Navigation */}
//       <SmoothTabNav
//         tabs={tabs}
//         selectedIndex={selectedIndex}
//         onChange={handleTabClick}
//       />

//       {/* Content Area with tab color background */}
//       <div className="relative min-h-[500px]">
//         <AnimatePresence mode="wait" custom={direction}>
//           <motion.div
//             key={selectedTab.id}
//             custom={direction}
//             variants={slideVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={transition}
//             className={`${selectedTab?.color || "bg-accent/40"
//               } rounded-3xl p-8 relative overflow-hidden`}
//           >
//             {/* Background decoration */}
//             <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-white/10 rounded-3xl"></div>
//             <div className="absolute top-8 right-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
//             <div className="absolute bottom-8 left-8 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>

//             {/* Content grid */}
//             <div className="relative z-10 grid gap-6 grid-cols-1 md:grid-cols-2">
//               {selectedServices.map((service, index) => (
//                 <motion.div
//                   key={service.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <ServiceCard service={service} />
//                 </motion.div>
//               ))}
//             </div>
//             <Link href={`/services/${selectedTab.id}`} className="relative cursor-pointer z-11">
//               <button className=" mx-auto mt-8 bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center group backdrop-blur-sm border border-white/30">
//                 Learn More
//                 <svg
//                   className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>

//               </button>
//             </Link>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// const ServiceTeaser: React.FC<ServiceTeaserProps> = () => {
//   return (
//     <section className="py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12 relative">
//           <h2
//             className="animate-on-scroll text-heading text-transparent bg-clip-text bg-gradient-to-r from-complementary to-accent"
//           >
//             Supporting families <br /> through every stage
//           </h2>
//           <p
//             className="animate-on-scroll my-8 mx-auto text-body text-secondary max-w-xl font-medium"
//           >
//             From daily meal planning to finding the right childcare, we&apos;re here
//             to make family life smoother and more joyful.
//           </p>
//         </div>

//         <SmoothTab />
//       </div>
//     </section>
//   );
// };

// export default ServiceTeaser;
"use client"
import type React from "react"
import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import { siteData } from "@/data/full-site"
import type { ServiceData } from "@/types"
import { serviceCategories } from "@/constants/services"
import Link from "next/link"
import SmoothTabNav from "./SmoothTabNav"

interface ServiceCardProps {
  service: ServiceData
}

interface SmoothTabProps {
  className?: string
}

interface ServiceTeaserProps {
  services?: ServiceData[]
}

const tabs = serviceCategories

const { services } = siteData

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = service.icon

  return (
    <div className="group bg-white/15 backdrop-blur-md rounded-3xl p-8 text-white h-full flex flex-col border border-white/30 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-1 relative overflow-hidden">
      {/* Organic background decoration */}
      <svg
        className="absolute -top-10 -right-10 w-40 h-40 opacity-10 group-hover:opacity-20 transition-opacity"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.2,87.1C-23.2,86.6,-38.4,82.6,-52.1,75.2C-65.8,67.8,-78,57,-84.6,43.2C-91.2,29.4,-92.2,12.6,-89.8,-3.4C-87.4,-19.4,-81.6,-34.6,-72.8,-47.4C-64,-60.2,-52.2,-70.6,-38.6,-78.1C-25,-85.6,-9.6,-90.2,4.2,-97.2C18,-104.2,30.6,-83.6,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Icon with enhanced styling */}
      <div className="relative w-24 h-24 mb-6">
        <div className="absolute inset-0 bg-white/25 rounded-3xl flex items-center justify-center backdrop-blur-sm group-hover:bg-white/35 transition-all duration-300 group-hover:scale-105">
          <IconComponent className="w-12 h-12 text-white drop-shadow-lg" />
        </div>
        {/* Decorative elements */}
        <div className="absolute -inset-3 bg-gradient-to-br from-white/15 to-transparent rounded-[2rem] -z-10 group-hover:from-white/25 transition-all"></div>
        <div className="absolute top-3 right-3 w-5 h-5 bg-white/40 rounded-full group-hover:scale-110 transition-transform"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 bg-white/50 rounded-full group-hover:scale-110 transition-transform"></div>
      </div>

      <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-quicksand)] tracking-wide">
        {service.title}
      </h3>
      <p className="text-white/95 mb-6 flex-grow text-base leading-relaxed font-[family-name:var(--font-nunito)]">
        {service.fullCopy}
      </p>
    </div>
  )
}

const TabNavigation: React.FC<{
  tabs: typeof serviceCategories
  selectedIndex: number
  onChange: (tabId: string) => void
}> = ({ tabs, selectedIndex, onChange }) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex bg-white/10 backdrop-blur-md rounded-2xl p-2 border border-white/20">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`relative px-8 py-4 rounded-xl font-bold transition-all duration-300 font-[family-name:var(--font-quicksand)] text-lg ${selectedIndex === index ? "text-white" : "text-white/60 hover:text-white/80"
              }`}
          >
            {selectedIndex === index && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-white/20 rounded-xl border border-white/30"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.title}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

const SmoothTab: React.FC<SmoothTabProps> = ({ className }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [direction, setDirection] = useState<number>(0)
  const selectedTab = tabs[selectedIndex]
  const selectedServices = services.filter((service) => service.category === selectedTab.id)

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
  }

  const transition = {
    duration: 0.4,
    ease: [0.32, 0.72, 0, 1] as const,
  }

  const handleTabClick = useCallback(
    (tabId: string): void => {
      const currentIndex = tabs.findIndex((tab) => tab.id === selectedTab.id)
      const newIndex = tabs.findIndex((tab) => tab.id === tabId)
      setDirection(newIndex > currentIndex ? 1 : -1)
      setSelectedIndex(newIndex)
    },
    [selectedTab.id],
  )

  return (
    <div className={`w-full max-w-7xl mx-auto ${className || ""}`}>
      {/* Tab Navigation */}
      <div className="block md:hidden ">
        <TabNavigation tabs={tabs} selectedIndex={selectedIndex} onChange={handleTabClick} />
      </div>
      <div className="sm:hidden md:block">
        <SmoothTabNav
          tabs={tabs}
          selectedIndex={selectedIndex}
          onChange={handleTabClick}
        />
      </div>

      {/* Content Area with animated transitions */}
      <div className="relative min-h-[600px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={selectedTab.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className={`${selectedTab?.color || "bg-accent/40"} rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl`}
          >
            {/* Organic SVG background illustrations */}
            <svg
              className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
              viewBox="0 0 1200 800"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Large organic shape top right */}
              <path
                fill="currentColor"
                d="M800,100 Q950,150 1000,300 T950,500 Q900,600 800,650 T650,600 Q600,550 650,450 T800,100"
                opacity="0.3"
              />

              {/* Medium organic shape bottom left */}
              <path
                fill="currentColor"
                d="M200,500 Q300,450 400,500 T500,650 Q450,750 350,700 T200,500"
                opacity="0.25"
              />

              {/* Small accent circles */}
              <circle cx="150" cy="200" r="80" fill="currentColor" opacity="0.2" />
              <circle cx="1050" cy="650" r="60" fill="currentColor" opacity="0.15" />
              <circle cx="600" cy="150" r="40" fill="currentColor" opacity="0.2" />

              {/* Flowing lines */}
              <path
                d="M0,400 Q300,350 600,400 T1200,400"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.15"
              />
              <path
                d="M0,450 Q300,500 600,450 T1200,450"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.1"
              />
            </svg>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/15 via-transparent to-white/15 rounded-[2.5rem]"></div>

            {/* Decorative blurred circles */}
            <div className="absolute top-12 right-12 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-12 left-12 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

            {/* Category header */}
            <div className="relative z-10 mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 font-[family-name:var(--font-antonio)] tracking-wide uppercase">
                {selectedTab.title}
              </h3>
              <p className="text-white/90 text-base md:text-lg font-[family-name:var(--font-nunito)]">
                {selectedTab.description}
              </p>
            </div>

            {/* Content grid with staggered animations */}
            <div className="relative z-10 grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 mb-8">
              {selectedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </div>

            {/* Enhanced CTA button */}
            <Link href={`/service/${selectedTab.id}`} className="relative z-10 block">
              <button className="mx-auto mt-4 bg-white/25 hover:bg-white/35 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 flex items-center justify-center group backdrop-blur-md border-2 border-white/40 hover:border-white/60 hover:shadow-xl hover:shadow-white/20 hover:scale-105 font-[family-name:var(--font-quicksand)] text-lg">
                Explore {selectedTab.title}
                <svg
                  className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

const ServiceTeaser: React.FC<ServiceTeaserProps> = () => {
  return (
    <section className="py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced hero heading */}
        <div className="text-center mb-12 md:mb-16 relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-complementary via-accent to-complementary leading-tight font-[family-name:var(--font-antonio)] tracking-wide px-4">
            Supporting families through every stage
          </h2>
          <p className="mt-6 text-lg md:text-xl text-secondary max-w-3xl mx-auto font-[family-name:var(--font-nunito)] px-4">
            From daily meal planning to finding the right childcare, we&apos;re here to make family life smoother and
            more joyful.
          </p>

          {/* Decorative underline */}
          <div className="flex justify-center mt-6">
            <svg
              width="200"
              height="12"
              viewBox="0 0 200 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden md:block"
            >
              <path d="M2 6C50 2, 150 10, 198 6" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#bc9b0a" />
                  <stop offset="50%" stopColor="#ca6c28" />
                  <stop offset="100%" stopColor="#bc9b0a" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <SmoothTab />
      </div>
    </section>
  )
}

export default ServiceTeaser

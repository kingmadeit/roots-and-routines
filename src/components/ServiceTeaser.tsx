// "use client";
// import React, { ElementType, useState } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import {
//   Calendar,
//   Users,
//   Heart,
//   BookOpen,
//   UserCheck,
//   Baby,
// } from "lucide-react";

// // Types
// interface ServiceData {
//   id: string;
//   title: string;
//   shortCopy: string;
//   fullCopy: string;
//   features: string[];
//   category: string;
// }

// interface TabData {
//   id: string;
//   title: string;
//   color: string;
//   description: string;
//   cardContent: React.ReactNode | null;
// }

// interface ServiceCardProps {
//   service: ServiceData;
//   tabColor: string;
// }

// interface SmoothTabProps {
//   className?: string;
// }

// interface ServiceTeaserProps {
//   services?: ServiceData[];
// }

// // Mock data based on your services
// const services: ServiceData[] = [
//   {
//     id: "family-meals",
//     title: "Family Meals & Nutrition",
//     shortCopy:
//       "Stress-free meal planning and nutrition support tailored to your family.",
//     fullCopy:
//       "Dinner doesn't have to be stressful. At Roots & Routines, we help busy families create weekly meal plans, generate grocery lists that fit your nutritional goals, and provide light meal prep guidance. We also give tips for picky eaters, ensuring every child gets the nourishment they need.",
//     features: [
//       "Weekly meal planning",
//       "Tailored grocery shopping lists",
//       "Light meal prep guidance",
//       "Child nutrition tips",
//       "Picky eater strategies",
//     ],
//     category: "daily-operations",
//   },
//   {
//     id: "routines-scheduling",
//     title: "Routines & Scheduling",
//     shortCopy:
//       "Custom family routines and scheduling support for a smoother daily flow.",
//     fullCopy:
//       "We create bespoke daily, weekly, and monthly routines to help your family thrive. From calendars to consistent habits, our support ensures structure without stress, making it easier to balance work, school, and family life.",
//     features: [
//       "Custom daily/weekly/monthly routines",
//       "Calendar and schedule planning",
//       "Support building consistent habits",
//     ],
//     category: "daily-operations",
//   },
//   {
//     id: "sourcing-referrals",
//     title: "Sourcing & Referrals",
//     shortCopy:
//       "Vetted professionals and family-friendly services delivered to your fingertips.",
//     fullCopy:
//       "Finding reliable childcare, tutors, or enrichment programs can be stressful. We connect you with vetted babysitters, therapists, tutors, holiday clubs, after-school activities, and family-friendly events to ensure your household runs smoothly with trustworthy support.",
//     features: [
//       "Vetted babysitters and nannies",
//       "Child therapists and tutors",
//       "Holiday clubs and after-school activities",
//       "Family-friendly events and outings",
//     ],
//     category: "finding-support",
//   },
//   {
//     id: "education-guidance",
//     title: "School & Activity Guidance",
//     shortCopy:
//       "Expert guidance to find schools, nurseries, and activities aligned with your values.",
//     fullCopy:
//       "We help families find nurseries, schools, and after-school clubs that match your values and needs. From shortlisting and visit prep to application guidance, we support decision-making and connect you with trusted educational professionals.",
//     features: [
//       "School and nursery search aligned with family values",
//       "Support with visits, shortlisting, and applications",
//       "Referrals to tutors and educational therapists",
//     ],
//     category: "finding-support",
//   },
//   {
//     id: "parent-support",
//     title: "New Parent Support",
//     shortCopy:
//       "Guidance and trusted referrals for new parents navigating early family life.",
//     fullCopy:
//       "Navigating early parenthood can be overwhelming. We provide referrals to trusted maternity and night nannies, offer breastfeeding and weaning tips, support daily routines and sleep schedules, and provide emotional well-being guidance to help parents feel supported and confident.",
//     features: [
//       "Trusted maternity and night nanny referrals",
//       "Breastfeeding and weaning guidance",
//       "Daily routine and sleep support",
//       "Emotional well-being strategies for parents",
//     ],
//     category: "wellness-growth",
//   },
//   {
//     id: "family-wellness",
//     title: "Family Wellness Add-Ons",
//     shortCopy:
//       "Holistic support for sleep, emotional regulation, and stress reduction.",
//     fullCopy:
//       "We offer additional wellness support for families, including establishing healthy sleep and hygiene routines, strategies for children's emotional regulation, and stress reduction plans for parents, ensuring the entire family thrives together.",
//     features: [
//       "Sleep and hygiene routines",
//       "Emotional regulation strategies for children",
//       "Parent stress reduction plans and wellness support",
//     ],
//     category: "wellness-growth",
//   },
// ];

// const tabs: TabData[] = [
//   {
//     id: "daily-operations",
//     title: "Daily Operations",
//     color: "bg-blue-500 hover:bg-blue-600",
//     description: "Streamline your family's daily routines",
//     cardContent: null, // Will be populated with services
//   },
//   {
//     id: "finding-support",
//     title: "Finding Support",
//     color: "bg-purple-500 hover:bg-purple-600",
//     description: "Connect with trusted professionals",
//     cardContent: null,
//   },
//   {
//     id: "wellness-growth",
//     title: "Wellness & Growth",
//     color: "bg-emerald-500 hover:bg-emerald-600",
//     description: "Support your family's wellbeing journey",
//     cardContent: null,
//   },
// ];

// const WaveformPath: React.FC = () => (
//   <motion.path
//     d="M0 50
//            C 20 40, 40 30, 60 50
//            C 80 70, 100 60, 120 50
//            C 140 40, 160 30, 180 50
//            C 200 70, 220 60, 240 50
//            C 260 40, 280 30, 300 50
//            C 320 70, 340 60, 360 50
//            C 380 40, 400 30, 420 50
//            L 420 100 L 0 100 Z"
//     initial={false}
//     animate={{
//       x: [0, 10, 0],
//       transition: {
//         duration: 5,
//         ease: "linear",
//         repeat: Infinity,
//       },
//     }}
//   />
// );

// const ServiceCard: React.FC<ServiceCardProps> = ({ service, tabColor }) => {
//   // const IconComponent = service.icon;

//   return (
//     <div
//       className={`${tabColor
//         .replace("hover:bg-", "bg-")
//         .replace(
//           "-600",
//           "-500"
//         )} rounded-xl p-6 text-white h-full flex flex-col`}
//     >
//       {/* Icon instead of Lottie placeholder */}
//       {/* <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
//         <IconComponent className="w-8 h-8 text-white" />
//       </div> */}

//       <h3 className="text-xl font-bold mb-3">{service.title}</h3>
//       <p className="text-white/90 mb-4 flex-grow">{service.fullCopy}</p>

//       <div className="space-y-2 mb-6">
//         {service.features.slice(0, 3).map((feature, index) => (
//           <div key={index} className="flex items-center text-sm">
//             <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-2"></div>
//             <span className="text-white/80">{feature}</span>
//           </div>
//         ))}
//         {service.features.length > 3 && (
//           <div className="text-sm text-white/60">
//             +{service.features.length - 3} more features
//           </div>
//         )}
//       </div>

//       <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group">
//         Learn More
//         <svg
//           className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9 5l7 7-7 7"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// };

// const SmoothTab: React.FC<SmoothTabProps> = ({ className }) => {
//   const [selected, setSelected] = useState<string>("daily-operations");
//   const [direction, setDirection] = useState<number>(0);
//   const [dimensions, setDimensions] = useState<{ width: number; left: number }>(
//     { width: 0, left: 0 }
//   );

//   const buttonRefs = React.useRef<Map<string, HTMLButtonElement>>(new Map());
//   const containerRef = React.useRef<HTMLDivElement>(null);

//   React.useLayoutEffect(() => {
//     const updateDimensions = (): void => {
//       const selectedButton = buttonRefs.current.get(selected);
//       const container = containerRef.current;

//       if (selectedButton && container) {
//         const rect = selectedButton.getBoundingClientRect();
//         const containerRect = container.getBoundingClientRect();

//         setDimensions({
//           width: rect.width,
//           left: rect.left - containerRect.left,
//         });
//       }
//     };

//     requestAnimationFrame(() => {
//       updateDimensions();
//     });

//     window.addEventListener("resize", updateDimensions);
//     return () => window.removeEventListener("resize", updateDimensions);
//   }, [selected]);

//   const handleTabClick = (tabId: string): void => {
//     const currentIndex = tabs.findIndex((tab) => tab.id === selected);
//     const newIndex = tabs.findIndex((tab) => tab.id === tabId);
//     setDirection(newIndex > currentIndex ? 1 : -1);
//     setSelected(tabId);
//   };

//   const selectedTab = tabs.find((tab) => tab.id === selected);
//   const selectedServices = services.filter(
//     (service) => service.category === selected
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

//   return (
//     <div className={`w-full max-w-6xl mx-auto ${className || ""}`}>
//       {/* Content Area */}
//       <div className="mb-8 relative min-h-[400px]">
//         <AnimatePresence mode="wait" custom={direction}>
//           <motion.div
//             key={selected}
//             custom={direction}
//             variants={slideVariants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={transition}
//             className="grid gap-6 grid-cols-1 md:grid-cols-2"
//           >
//             {selectedServices.map((service, index) => (
//               <motion.div
//                 key={service.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <ServiceCard
//                   service={service}
//                   tabColor={selectedTab?.color || "bg-blue-500"}
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Tab Navigation */}
//       <div
//         ref={containerRef}
//         className="flex items-center justify-center gap-1 py-1 relative bg-gray-100 rounded-xl max-w-2xl mx-auto"
//       >
//         {/* Sliding Background */}
//         <motion.div
//           className={`absolute rounded-lg z-[1] ${
//             selectedTab?.color || "bg-blue-500"
//           }`}
//           initial={false}
//           animate={{
//             width: dimensions.width - 8,
//             x: dimensions.left + 4,
//             opacity: 1,
//           }}
//           transition={{
//             type: "spring",
//             stiffness: 400,
//             damping: 30,
//           }}
//           style={{ height: "calc(100% - 8px)", top: "4px" }}
//         />

//         <div className="grid grid-cols-3 w-full gap-1 relative z-[2]">
//           {tabs.map((tab) => {
//             const isSelected = selected === tab.id;
//             return (
//               <motion.button
//                 key={tab.id}
//                 ref={(el) => {
//                   if (el) buttonRefs.current.set(tab.id, el);
//                   else buttonRefs.current.delete(tab.id);
//                 }}
//                 type="button"
//                 onClick={() => handleTabClick(tab.id)}
//                 className={`relative flex flex-col items-center justify-center rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 ${
//                   isSelected
//                     ? "text-white"
//                     : "text-gray-600 hover:text-gray-900"
//                 }`}
//               >
//                 <span className="font-semibold">{tab.title}</span>
//                 <span
//                   className={`text-xs mt-1 ${
//                     isSelected ? "text-white/80" : "text-gray-500"
//                   }`}
//                 >
//                   {tab.description}
//                 </span>
//               </motion.button>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// const ServiceTeaser: React.FC<ServiceTeaserProps> = ({
//   services: propServices,
// }) => {
//   return (
//     <section className="py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Supporting families through every stage
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             From daily meal planning to finding the right childcare, we're here
//             to make family life smoother and more joyful.
//           </p>
//         </div>

//         <SmoothTab />
//       </div>
//     </section>
//   );
// };

// export default ServiceTeaser;
"use client";
import React, { ElementType, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  Users,
  Heart,
  BookOpen,
  UserCheck,
  Baby,
  Utensils,
  Clock,
  GraduationCap,
  UserSearch,
} from "lucide-react";
import clsx from "clsx";
import { slideUpTransition } from "@/styles/animations";
import { StarKite } from "./svgs";

// Types
interface ServiceData {
  id: string;
  title: string;
  shortCopy: string;
  fullCopy: string;
  features: string[];
  category: string;
  icon: ElementType;
}

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

// Mock data based on your services
const services: ServiceData[] = [
  {
    id: "family-meals",
    title: "Family Meals & Nutrition",
    shortCopy:
      "Stress-free meal planning and nutrition support tailored to your family.",
    fullCopy:
      "Dinner doesn't have to be stressful. At Roots & Routines, we help busy families create weekly meal plans, generate grocery lists that fit your nutritional goals, and provide light meal prep guidance. We also give tips for picky eaters, ensuring every child gets the nourishment they need.",
    features: [
      "Weekly meal planning",
      "Tailored grocery shopping lists",
      "Light meal prep guidance",
      "Child nutrition tips",
      "Picky eater strategies",
    ],
    category: "daily-operations",
    icon: Utensils,
  },
  {
    id: "routines-scheduling",
    title: "Routines & Scheduling",
    shortCopy:
      "Custom family routines and scheduling support for a smoother daily flow.",
    fullCopy:
      "We create bespoke daily, weekly, and monthly routines to help your family thrive. From calendars to consistent habits, our support ensures structure without stress, making it easier to balance work, school, and family life.",
    features: [
      "Custom daily/weekly/monthly routines",
      "Calendar and schedule planning",
      "Support building consistent habits",
    ],
    category: "daily-operations",
    icon: Clock,
  },
  {
    id: "sourcing-referrals",
    title: "Sourcing & Referrals",
    shortCopy:
      "Vetted professionals and family-friendly services delivered to your fingertips.",
    fullCopy:
      "Finding reliable childcare, tutors, or enrichment programs can be stressful. We connect you with vetted babysitters, therapists, tutors, holiday clubs, after-school activities, and family-friendly events to ensure your household runs smoothly with trustworthy support.",
    features: [
      "Vetted babysitters and nannies",
      "Child therapists and tutors",
      "Holiday clubs and after-school activities",
      "Family-friendly events and outings",
    ],
    category: "finding-support",
    icon: UserSearch,
  },
  {
    id: "education-guidance",
    title: "School & Activity Guidance",
    shortCopy:
      "Expert guidance to find schools, nurseries, and activities aligned with your values.",
    fullCopy:
      "We help families find nurseries, schools, and after-school clubs that match your values and needs. From shortlisting and visit prep to application guidance, we support decision-making and connect you with trusted educational professionals.",
    features: [
      "School and nursery search aligned with family values",
      "Support with visits, shortlisting, and applications",
      "Referrals to tutors and educational therapists",
    ],
    category: "finding-support",
    icon: GraduationCap,
  },
  {
    id: "parent-support",
    title: "New Parent Support",
    shortCopy:
      "Guidance and trusted referrals for new parents navigating early family life.",
    fullCopy:
      "Navigating early parenthood can be overwhelming. We provide referrals to trusted maternity and night nannies, offer breastfeeding and weaning tips, support daily routines and sleep schedules, and provide emotional well-being guidance to help parents feel supported and confident.",
    features: [
      "Trusted maternity and night nanny referrals",
      "Breastfeeding and weaning guidance",
      "Daily routine and sleep support",
      "Emotional well-being strategies for parents",
    ],
    category: "wellness-growth",
    icon: Baby,
  },
  {
    id: "family-wellness",
    title: "Family Wellness Add-Ons",
    shortCopy:
      "Holistic support for sleep, emotional regulation, and stress reduction.",
    fullCopy:
      "We offer additional wellness support for families, including establishing healthy sleep and hygiene routines, strategies for children's emotional regulation, and stress reduction plans for parents, ensuring the entire family thrives together.",
    features: [
      "Sleep and hygiene routines",
      "Emotional regulation strategies for children",
      "Parent stress reduction plans and wellness support",
    ],
    category: "wellness-growth",
    icon: Heart,
  },
];

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
    color: "bg-complimentary",
    description: "Support your family's wellbeing journey",
    cardContent: null,
  },
];

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
        console.log(dimensions);
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
              "bg-complimentary/40": selectedTab?.id === "wellness-growth",
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

const ServiceTeaser: React.FC<ServiceTeaserProps> = ({
  services: propServices,
}) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 relative">
          <StarKite className="absolute top-[-2rem] left-0 text-accent opacity-30" />
          <motion.h2
            {...slideUpTransition}
            className="text-heading text-accent! max-w-xl mx-auto"
          >
            Supporting families through every stage
          </motion.h2>
          <motion.p
            {...slideUpTransition}
            className="my-8 mx-auto text-body text-secondary max-w-xl"
          >
            From daily meal planning to finding the right childcare, we're here
            to make family life smoother and more joyful.
          </motion.p>
        </div>

        <SmoothTab />
      </div>
    </section>
  );
};

export default ServiceTeaser;

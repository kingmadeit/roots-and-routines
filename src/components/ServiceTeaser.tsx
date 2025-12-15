"use client"
import type React from "react"
import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { ServiceData } from "@/types"
import { serviceCategories } from "@/constants/services"
import Link from "next/link"

interface SmoothTabProps {
  className?: string
}

interface ServiceTeaserProps {
  services?: ServiceData[]
}

const tabs = serviceCategories

const TabNavigation: React.FC<{
  tabs: typeof serviceCategories
  selectedIndex: number
  onChange: (tabId: string) => void
}> = ({ tabs, selectedIndex, onChange }) => {
  const selectedTab = tabs[selectedIndex]

  const getContainerBgClass = () => {
    switch (selectedTab.id) {
      case "everyday-support":
        return "bg-accent/40"
      case "helping-hands-and-resources":
        return "bg-secondary/40"
      case "wellness-growth":
        return "bg-complementary/40"
      default:
        return "bg-white/40"
    }
  }

  return (
    <div className="flex justify-start md:justify-center mb-12 overflow-x-auto pb-2 scrollbar-hide">
      <div
        className={`inline-flex ${getContainerBgClass()} backdrop-blur-md rounded-3xl p-2 border border-white/20 min-w-max mx-auto md:mx-0 transition-colors duration-300`}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`relative px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold transition-all duration-300 font-[family-name:var(--font-quicksand)] text-base md:text-md whitespace-nowrap flex flex-col items-center ${selectedIndex === index ? "text-white" : "text-white/70 hover:text-white/90"
              }`}
          >
            {selectedIndex === index && (
              <motion.div
                layoutId="activeTab"
                className={`absolute inset-0 ${selectedTab.color} rounded-xl border border-white/30 shadow-lg`}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative ">{tab.title}</span>
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
      <TabNavigation tabs={tabs} selectedIndex={selectedIndex} onChange={handleTabClick} />

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
            {/* Content grid with staggered animations */}
            <div className="relative  grid gap-6 md:gap-8 grid-cols-1">
              <motion.div
                key={selectedTab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                {/* <ServiceCard service={service} /> */}
                <h2 className="font-bold text-center mb-6 text-2xl md:text-3xl lg:text-4xl">{selectedTab.description}</h2>
              </motion.div>
            </div>

            {/*  CTA button */}
            <Link href={`/services/${selectedTab.id}`} className="relative pt-1  block">
              <button className="mx-auto mt-4 bg-white hover:bg-[#581b04] text-[#581b04] hover:text-white font-bold py-5 px-10 rounded-full transition-all duration-300 flex flex-col items-center justify-center group shadow-lg hover:shadow-2xl hover:shadow-white/30 hover:scale-105 font-[family-name:var(--font-quicksand)] cursor-pointer">
                <div className="flex items-center">
                  <span className="text-lg">Explore {selectedTab.title}</span>
                  <svg
                    className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
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
        <SmoothTab />
      </div>
    </section>
  )
}

export default ServiceTeaser

"use client"
import { memo, useMemo } from "react"
import type { HeroSection } from "@/types"
// import CircularGallery from "./CircularGallery"

// Types
interface HeroProps {
  info: HeroSection
  gallery?: {
    image: string
    text: string
  }[]
}

interface TitleDisplayProps {
  title: string
  splitTitle?: string[]
}


const HeroBackgroundShapes = memo(function HeroBackgroundShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large flowing shape bottom left */}
      <svg
        className="absolute bottom-0 -left-0 w-[600px] h-[600px] text-accent/5 animate-pulse"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.2,87.1C-23.2,86.6,-38.4,82.6,-52.1,75.2C-65.8,67.8,-78,57,-84.6,43.2C-91.2,29.4,-92.2,12.6,-89.8,-3.4C-87.4,-19.4,-81.6,-34.6,-72.8,-47.8C-64,-61,-52.2,-72.2,-38.6,-79.6C-25,-87,-12.5,-90.6,1.4,-93.1C15.3,-95.6,30.6,-83.6,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Complementary shape top right */}
      <svg
        className="absolute animate-pulse animation-delay-200 -top-20 -right-20 w-[500px] h-[500px] text-complementary/5 animation-duration-5000"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M51.1,-84.4C64.8,-76.2,73.9,-60.5,80.3,-44.2C86.7,-27.9,90.4,-10.9,88.9,5.3C87.4,21.5,80.7,36.9,71.2,49.8C61.7,62.7,49.4,73.1,35.3,79.8C21.2,86.5,5.3,89.5,-10.8,88.8C-26.9,88.1,-43.2,83.7,-57.3,75.8C-71.4,67.9,-83.3,56.5,-89.1,42.4C-94.9,28.3,-94.6,11.5,-91.2,-4.2C-87.8,-19.9,-81.3,-34.5,-71.8,-46.8C-62.3,-59.1,-49.8,-69.1,-35.8,-77.1C-21.8,-85.1,-6.2,-91.1,9.2,-89.8C24.6,-88.5,37.4,-92.6,51.1,-84.4Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Secondary shape bottom right */}
      <svg
        className="absolute -bottom-50 -right-32 w-[400px] h-[400px] text-secondary/20 animate-pulse animation-delay-1000 animation-duration-5000"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M39.5,-65.9C51.4,-58.1,61.3,-47.3,68.4,-34.8C75.5,-22.3,79.8,-8.1,79.2,6.1C78.6,20.3,73.1,34.5,64.2,46.8C55.3,59.1,43,69.5,28.8,75.8C14.6,82.1,-1.5,84.3,-17.1,81.2C-32.7,78.1,-47.8,69.7,-59.8,57.8C-71.8,45.9,-80.7,30.5,-83.4,14.2C-86.1,-2.1,-82.6,-19.3,-74.8,-34.2C-67,-49.1,-54.9,-61.7,-41.3,-68.9C-27.7,-76.1,-12.6,-78,0.9,-79.4C14.4,-80.8,27.6,-73.7,39.5,-65.9Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-accent/5 to-complementary/5 blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-tl from-secondary/5 to-secondary-light/5 blur-3xl" />

      {/* Decorative accent lines */}
      <div className="absolute top-1/3 left-20 w-24 h-0.5 bg-gradient-to-r from-accent/30 to-transparent" />
      <div className="absolute top-1/2 right-32 w-32 h-0.5 bg-gradient-to-l from-complementary/30 to-transparent" />

      {/* Refined dot patterns */}
      <div className="absolute top-1/4 right-24 grid grid-cols-4 gap-3 opacity-20">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-complementary" />
        ))}
      </div>

      <div className="absolute bottom-1/3 left-32 grid grid-cols-3 gap-2 opacity-15">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-accent" />
        ))}
      </div>
    </div>
  )
})

const TitleDisplay = memo<TitleDisplayProps>(function TitleDisplay({ title, splitTitle }) {
  return (
    <div className="relative">
      <h1 className="animate-on-scroll hero-title relative font-nunito hyphens-auto">
        {splitTitle ? (
          <>
            {/* Line 1: Accent color for initial emphasis */}
            <span className="block w-full text-[clamp(2rem,6vw,6rem)] bg-gradient-to-r from-[#581b04] via-[#581b04] to-accent bg-clip-text text-transparent font-bold leading-[0.9] my-1">
              {splitTitle[0]}
            </span>

            {/* Line 2: Secondary gradient for main emphasis */}
            <span className="block w-full uppercase text-[clamp(4rem,10vw,12rem)]  text-accent font-extrabold leading-[0.9] my-1">
              {splitTitle[1]}
            </span>

            {/* Line 3 & 4: Dark brown with complementary accent */}
            <div className="flex items-baseline justify-center gap-3 leading-tight">
              <span className="text-[clamp(1rem,2vw,2.5rem)] text-[#581b04]/70 font-semibold">{splitTitle[2]}</span>
              <span className="text-complementary text-[clamp(1.75rem,4vw,5rem)] font-quicksand font-bold">
                {splitTitle[3]}
              </span>
            </div>

            {/* Line 5: Dark brown subtitle */}
            <span className="block w-full text-[#581b04]/70 text-[clamp(1rem,2vw,2.5rem)] text-center leading-relaxed font-semibold mt-2 italic">
              {splitTitle[4]}
            </span>
          </>
        ) : (
          title
        )}
      </h1>

      <div className="absolute -top-8 right-[15%] w-16 h-16">
        <svg viewBox="0 0 100 100" className="w-full h-full text-complementary/40 animate-pulse">
          <circle cx="50" cy="50" r="3" fill="currentColor" />
          <circle cx="30" cy="30" r="2" fill="currentColor" />
          <circle cx="70" cy="30" r="2" fill="currentColor" />
          <circle cx="30" cy="70" r="2" fill="currentColor" />
          <circle cx="70" cy="70" r="2" fill="currentColor" />
          <path
            d="M50 50 L30 30 M50 50 L70 30 M50 50 L30 70 M50 50 L70 70"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </div>
    </div>
  )
})

const ContentSection = memo<{
  title: string
  subtitle: string
  splitTitle?: string[]
}>(function ContentSection({ title, subtitle, splitTitle }) {
  return (
    <div className="relative p-4 md:p-16 flex flex-col space-y-6 items-center justify-center">
      <TitleDisplay title={title} splitTitle={splitTitle} />

      <h2 className="animate-on-scroll max-w-[90%] md:max-w-[500px] font-bold text-md md:text-lg text-accent text-center leading-relaxed">
        {subtitle}
      </h2>
    </div>
  )
})

const Hero = memo<HeroProps>(function Hero({ info }) {
  const { title, subtitle, titleSeparator } = info
  // const peekHeight = useGalleryPeekHeight()

  const splitTitle = useMemo(() => title.split(titleSeparator), [title, titleSeparator])

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-primary/40 via-primary/60 to-primary/50">
      <HeroBackgroundShapes />

      <div className="relative hero-content">
        <div className="w-full">
          <ContentSection title={title} subtitle={subtitle} splitTitle={splitTitle || undefined} />
        </div>
      </div>
      {/* 
      <div className="relative  gallery-peek-area" style={{ height: `${peekHeight}px` }}>
        <div className="gallery-container">
          <CircularGallery items={gallery} bend={5} borderRadius={0.05} scrollEase={0.02} />
        </div>
      </div> */}
    </section>
  )
})

export default Hero

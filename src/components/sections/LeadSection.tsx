"use client"

import { useEffect } from "react"

interface LeadSectionProps {
  text?: string
  variant?: "default" | "gradient" | "accent"
  fadeColor?: string
  className?: string
}

const LeadSection = ({
  text = "Let us help you build the flow that works for you",
  variant = "default",
  className = "",
}: LeadSectionProps) => {
  useEffect(() => {
    const styleSheet = document.createElement("style")
    styleSheet.innerText = `
      @keyframes marquee-right {
        from {
          transform: translateX(-50%);
        }
        to {
          transform: translateX(0%);
        }
      }
      @keyframes marquee-left {
        from {
          transform: translateX(0%);
        }
        to {
          transform: translateX(-50%);
        }
      }
    `
    document.head.appendChild(styleSheet)
    return () => {
      document.head.removeChild(styleSheet)
    }
  }, [])

  // Duplicate text for seamless infinite scroll
  const marqueeText = Array(10).fill(text)

  const getTextClasses = () => {
    switch (variant) {
      case "gradient":
        return "bg-clip-text text-transparent bg-gradient-to-r from-complementary to-secondary"
      case "accent":
        return "text-accent"
      default:
        return "text-white/40"
    }
  }

  return (
    <div className={`relative overflow-hidden py-16 ${className}`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-complementary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative space-y-2">
        {[0, 2].map((_, i) => (
          <div key={`marquee-${i}`} className="relative overflow-hidden">
            <div
              className="flex gap-8 whitespace-nowrap w-max"
              style={{
                animation: `marquee-${(i + 1) % 2 === 0 ? 'right' : 'left'} 140s linear infinite`,
              }}
            >
              {marqueeText.map((item, index) => (
                <h2
                  key={`${i + 1 % 2 === 0 ? 'right' : 'left'}-${index}`}
                  className={`text-4xl md:text-5xl lg:text-7xl leading-[1.3] font-quicksand font-extrabold ${getTextClasses()} ${i}`}
                >
                  {item}
                  <span className="mx-8 text-complementary/40">•</span>
                </h2>
              ))}
            </div>
          </div>
        ))}

      </div>

      {/* Gradient fade edges */}
      {/* <div
        className="absolute inset-y-0 left-0 w-32 pointer-events-none "
        style={{
          background: `linear-gradient(to right, var(--${fadeColor}), transparent)`,
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-32 pointer-events-none "
        style={{
          background: `linear-gradient(to left, transparent, var(--${fadeColor})`,
        }}
      /> */}
    </div>
  )
}

export default LeadSection

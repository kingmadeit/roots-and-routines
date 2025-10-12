"use client"

import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { ServiceData } from "@/types"
import { serviceCategories } from "@/constants/services"
import type { JSX } from "react"

interface ServiceCategoryContentProps {
  services: ServiceData[]
  categoryColor?: string
}

export function ServiceCategoryContent({ services, categoryColor }: ServiceCategoryContentProps) {
  if (!services.length) return null

  const categoryName = services[0].category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" & ")

  const categoryInfo = serviceCategories.find((cat) => cat.id === services[0].category)
  const categoryBgClass = categoryInfo?.color || "bg-accent"

  const getCategoryClasses = (bgClass: string) => {
    const colorMap: Record<string, { text: string; border: string; bg: string }> = {
      "bg-accent": { text: "text-accent", border: "border-accent", bg: "bg-accent" },
      "bg-secondary": { text: "text-secondary", border: "border-secondary", bg: "bg-secondary" },
      "bg-complementary": { text: "text-complementary", border: "border-complementary", bg: "bg-complementary" },
    }
    return colorMap[bgClass] || colorMap["bg-accent"]
  }

  const categoryClasses = getCategoryClasses(categoryBgClass)

  return (
    <main className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-32 lg:px-8 lg:pt-32 lg:pb-40 overflow-hidden bg-primary/70">
        {/* Organic background shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 opacity-20">
          <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M150 50 Q250 100 250 200 Q200 280 100 250 Q20 200 50 100 Q100 50 150 50 Z"
              fill="url(#heroGrad1)"
            />
            <defs>
              <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#788a68" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#a3b185" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute bottom-20 right-10 w-96 h-96 opacity-15">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="150" fill="url(#heroGrad2)" />
            <circle cx="200" cy="200" r="100" fill="url(#heroGrad3)" />
            <defs>
              <linearGradient id="heroGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ca6c28" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#bc9b0a" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="heroGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f0bf99" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#fdf2e0" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="mx-auto max-w-5xl relative">
          <div className="text-center space-y-12">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border ${categoryClasses.border}/20`}
            >
              <div className={`w-1.5 h-1.5 rounded-full ${categoryClasses.bg} animate-pulse`} />
              <span className={`${categoryClasses.text} font-medium text-sm tracking-wide`}>
                {services.length} {services.length === 1 ? "Service" : "Services"} Available
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="font-quicksand text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
                <span className={categoryClasses.text}>{categoryName}</span>
              </h1>

              <p className="text-2xl md:text-3xl text-foreground/60 leading-relaxed font-nunito font-light max-w-3xl mx-auto">
                Discover transformative services designed to elevate your family's journey
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-4">
              <div className={`h-px w-16 ${categoryClasses.bg}`} />
              <p className={`text-sm uppercase tracking-widest ${categoryClasses.text} font-medium font-quicksand`}>
                Tailored for you
              </p>
              <div className={`h-px w-16 ${categoryClasses.bg}`} />
            </div>

            {/* Decorative dots */}
            <div className="flex justify-center gap-2 pt-8">
              <div className="w-2 h-2 rounded-full bg-accent/40" />
              <div className="w-2 h-2 rounded-full bg-secondary/40" />
              <div className="w-2 h-2 rounded-full bg-complementary/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-16 lg:px-8 lg:py-24 bg-white/90">
        <div className="mx-auto max-w-7xl space-y-32">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} categoryClasses={categoryClasses} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-accent p-12 lg:p-16">
            {/* Organic background shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
              <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" fill="white" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10">
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M200 50C250 50 300 80 320 130C340 180 330 240 290 280C250 320 180 340 130 320C80 300 40 250 40 190C40 130 90 50 200 50Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="relative  text-center space-y-8">
              <div className="space-y-4">
                <h2 className="font-quicksand text-4xl lg:text-5xl font-bold text-white">
                  Ready to Begin Your Journey?
                </h2>
                <p className="text-xl text-white/90 font-nunito font-light max-w-2xl mx-auto">
                  Let's create a personalised plan that aligns with your goals and values
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="/contact" className="cursor-pointer">
                  <Button
                    size="lg"
                    className="bg-white hover:bg-white/90 text-accent font-semibold px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-quicksand cursor-pointer"
                  >
                    Schedule a Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-8 pt-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="font-nunito">personalised approach</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="font-nunito">Flexible scheduling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

const iconIllustrations: Record<string, JSX.Element> = {
  Utensils: (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
      {/* Plate */}
      <circle cx="200" cy="200" r="90" fill="url(#utensilsGrad1)" opacity="0.3" />
      <circle cx="200" cy="200" r="85" stroke="url(#utensilsGrad2)" strokeWidth="3" fill="none" opacity="0.5" />

      {/* Apple */}
      <circle cx="160" cy="180" r="25" fill="url(#utensilsGrad3)" opacity="0.6" />
      <path d="M160 155 Q165 145 170 150" stroke="url(#utensilsGrad4)" strokeWidth="3" fill="none" opacity="0.5" />
      <ellipse cx="165" cy="152" rx="4" ry="6" fill="url(#utensilsGrad4)" opacity="0.5" />

      {/* Carrot */}
      <path d="M220 170 L235 210" stroke="url(#utensilsGrad5)" strokeWidth="12" strokeLinecap="round" opacity="0.6" />
      <path
        d="M220 170 L215 160 M220 170 L225 160 M220 170 L220 158"
        stroke="url(#utensilsGrad4)"
        strokeWidth="2"
        opacity="0.5"
      />

      {/* Leafy greens */}
      <ellipse
        cx="180"
        cy="220"
        rx="18"
        ry="25"
        fill="url(#utensilsGrad4)"
        opacity="0.5"
        transform="rotate(-20 180 220)"
      />
      <ellipse
        cx="195"
        cy="225"
        rx="16"
        ry="22"
        fill="url(#utensilsGrad4)"
        opacity="0.5"
        transform="rotate(15 195 225)"
      />

      {/* Berries */}
      <circle cx="240" cy="190" r="8" fill="url(#utensilsGrad6)" opacity="0.6" />
      <circle cx="250" cy="195" r="7" fill="url(#utensilsGrad6)" opacity="0.6" />
      <circle cx="245" cy="205" r="7" fill="url(#utensilsGrad6)" opacity="0.6" />

      {/* Avocado half */}
      <ellipse cx="210" cy="230" rx="20" ry="25" fill="url(#utensilsGrad4)" opacity="0.5" />
      <circle cx="210" cy="230" r="8" fill="url(#utensilsGrad7)" opacity="0.6" />

      {/* Fork */}
      <line x1="120" y1="240" x2="120" y2="290" stroke="url(#utensilsGrad2)" strokeWidth="4" opacity="0.5" />
      <line x1="115" y1="240" x2="115" y2="260" stroke="url(#utensilsGrad2)" strokeWidth="3" opacity="0.5" />
      <line x1="125" y1="240" x2="125" y2="260" stroke="url(#utensilsGrad2)" strokeWidth="3" opacity="0.5" />

      {/* Knife */}
      <line x1="280" y1="240" x2="280" y2="290" stroke="url(#utensilsGrad2)" strokeWidth="4" opacity="0.5" />
      <path d="M275 240 L285 240 L283 230 L277 230 Z" fill="url(#utensilsGrad2)" opacity="0.5" />

      <defs>
        <linearGradient id="utensilsGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdf2e0" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
        <linearGradient id="utensilsGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#a3b185" />
        </linearGradient>
        <linearGradient id="utensilsGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ca6c28" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
        <linearGradient id="utensilsGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#a3b185" />
        </linearGradient>
        <linearGradient id="utensilsGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ca6c28" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
        <linearGradient id="utensilsGrad6" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ca6c28" />
          <stop offset="100%" stopColor="#bc9b0a" />
        </linearGradient>
        <linearGradient id="utensilsGrad7" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bc9b0a" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
      </defs>
    </svg>
  ),
  Clock: (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
      {/* Calendar/Schedule illustration */}
      <rect x="100" y="100" width="200" height="220" rx="12" fill="url(#clockGrad1)" opacity="0.4" />
      <rect x="100" y="100" width="200" height="50" rx="12" fill="url(#clockGrad2)" opacity="0.6" />

      {/* Calendar binding rings */}
      <rect x="110" y="85" width="15" height="30" rx="3" fill="url(#clockGrad2)" opacity="0.5" />
      <rect x="275" y="85" width="15" height="30" rx="3" fill="url(#clockGrad2)" opacity="0.5" />

      {/* Calendar grid */}
      <line x1="100" y1="170" x2="300" y2="170" stroke="#788a68" strokeWidth="2" opacity="0.3" />
      <line x1="100" y1="210" x2="300" y2="210" stroke="#788a68" strokeWidth="2" opacity="0.3" />
      <line x1="100" y1="250" x2="300" y2="250" stroke="#788a68" strokeWidth="2" opacity="0.3" />
      <line x1="100" y1="290" x2="300" y2="290" stroke="#788a68" strokeWidth="2" opacity="0.3" />
      <line x1="150" y1="150" x2="150" y2="320" stroke="#788a68" strokeWidth="2" opacity="0.3" />
      <line x1="200" y1="150" x2="200" y2="320" stroke="#788a68" strokeWidth="2" opacity="0.3" />
      <line x1="250" y1="150" x2="250" y2="320" stroke="#788a68" strokeWidth="2" opacity="0.3" />

      {/* Clock in center */}
      <circle cx="200" cy="230" r="40" stroke="url(#clockGrad3)" strokeWidth="3" fill="white" opacity="0.6" />
      <line
        x1="200"
        y1="230"
        x2="200"
        y2="205"
        stroke="url(#clockGrad3)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
      <line
        x1="200"
        y1="230"
        x2="220"
        y2="230"
        stroke="url(#clockGrad3)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="200" cy="230" r="4" fill="url(#clockGrad3)" opacity="0.8" />

      {/* Event markers */}
      <circle cx="125" cy="190" r="6" fill="url(#clockGrad4)" opacity="0.6" />
      <circle cx="275" cy="270" r="6" fill="url(#clockGrad5)" opacity="0.6" />
      <rect x="120" y="300" width="25" height="8" rx="2" fill="url(#clockGrad3)" opacity="0.5" />

      <defs>
        <linearGradient id="clockGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdf2e0" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
        <linearGradient id="clockGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#a3b185" />
        </linearGradient>
        <linearGradient id="clockGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ca6c28" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
        <linearGradient id="clockGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bc9b0a" />
          <stop offset="100%" stopColor="#ca6c28" />
        </linearGradient>
        <linearGradient id="clockGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#bc9b0a" />
        </linearGradient>
      </defs>
    </svg>
  ),
  UserSearch: (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
      {/* Central hub */}
      <circle cx="200" cy="200" r="35" fill="url(#referralGrad1)" opacity="0.6" />
      <circle cx="200" cy="200" r="28" fill="white" opacity="0.8" />

      {/* Network nodes - outer ring */}
      <circle cx="200" cy="100" r="25" fill="url(#referralGrad2)" opacity="0.5" />
      <circle cx="300" cy="200" r="25" fill="url(#referralGrad2)" opacity="0.5" />
      <circle cx="200" cy="300" r="25" fill="url(#referralGrad2)" opacity="0.5" />
      <circle cx="100" cy="200" r="25" fill="url(#referralGrad2)" opacity="0.5" />

      {/* Network nodes - diagonal */}
      <circle cx="270" cy="130" r="20" fill="url(#referralGrad3)" opacity="0.5" />
      <circle cx="270" cy="270" r="20" fill="url(#referralGrad3)" opacity="0.5" />
      <circle cx="130" cy="270" r="20" fill="url(#referralGrad3)" opacity="0.5" />
      <circle cx="130" cy="130" r="20" fill="url(#referralGrad3)" opacity="0.5" />

      {/* Connection lines */}
      <line
        x1="200"
        y1="200"
        x2="200"
        y2="125"
        stroke="url(#referralGrad4)"
        strokeWidth="3"
        opacity="0.4"
        strokeDasharray="5,5"
      />
      <line
        x1="200"
        y1="200"
        x2="275"
        y2="200"
        stroke="url(#referralGrad4)"
        strokeWidth="3"
        opacity="0.4"
        strokeDasharray="5,5"
      />
      <line
        x1="200"
        y1="200"
        x2="200"
        y2="275"
        stroke="url(#referralGrad4)"
        strokeWidth="3"
        opacity="0.4"
        strokeDasharray="5,5"
      />
      <line
        x1="200"
        y1="200"
        x2="125"
        y2="200"
        stroke="url(#referralGrad4)"
        strokeWidth="3"
        opacity="0.4"
        strokeDasharray="5,5"
      />
      <line
        x1="200"
        y1="200"
        x2="255"
        y2="145"
        stroke="url(#referralGrad5)"
        strokeWidth="2"
        opacity="0.3"
        strokeDasharray="3,3"
      />
      <line
        x1="200"
        y1="200"
        x2="255"
        y2="255"
        stroke="url(#referralGrad5)"
        strokeWidth="2"
        opacity="0.3"
        strokeDasharray="3,3"
      />
      <line
        x1="200"
        y1="200"
        x2="145"
        y2="255"
        stroke="url(#referralGrad5)"
        strokeWidth="2"
        opacity="0.3"
        strokeDasharray="3,3"
      />
      <line
        x1="200"
        y1="200"
        x2="145"
        y2="145"
        stroke="url(#referralGrad5)"
        strokeWidth="2"
        opacity="0.3"
        strokeDasharray="3,3"
      />

      {/* Handshake in center */}
      <path d="M185 195 L175 205 L180 210 L190 200 Z" fill="url(#referralGrad1)" opacity="0.6" />
      <path d="M215 195 L225 205 L220 210 L210 200 Z" fill="url(#referralGrad1)" opacity="0.6" />
      <rect x="180" y="200" width="40" height="8" rx="2" fill="url(#referralGrad1)" opacity="0.6" />

      {/* Referral arrows */}
      <path
        d="M200 90 L200 80 M195 85 L200 80 L205 85"
        stroke="url(#referralGrad2)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M310 200 L320 200 M315 195 L320 200 L315 205"
        stroke="url(#referralGrad2)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Connection indicators */}
      <circle cx="200" cy="100" r="4" fill="#ca6c28" opacity="0.7" />
      <circle cx="300" cy="200" r="4" fill="#bc9b0a" opacity="0.7" />
      <circle cx="200" cy="300" r="4" fill="#788a68" opacity="0.7" />
      <circle cx="100" cy="200" r="4" fill="#ca6c28" opacity="0.7" />

      {/* Sparkle effects */}
      <path
        d="M90 100 L92 106 L98 108 L92 110 L90 116 L88 110 L92 108 L88 106 Z"
        fill="url(#referralGrad3)"
        opacity="0.5"
      />
      <path
        d="M310 100 L312 106 L318 108 L312 110 L310 116 L308 110 L302 108 L308 106 Z"
        fill="url(#referralGrad3)"
        opacity="0.5"
      />

      <defs>
        <linearGradient id="referralGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#a3b185" />
        </linearGradient>
        <linearGradient id="referralGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a3b185" />
          <stop offset="100%" stopColor="#bc9b0a" />
        </linearGradient>
        <linearGradient id="referralGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bc9b0a" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
        <linearGradient id="referralGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ca6c28" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
        <linearGradient id="referralGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#ca6c28" />
        </linearGradient>
      </defs>
    </svg>
  ),
  GraduationCap: (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
      {/* Compass/guidance center */}
      <circle cx="200" cy="200" r="60" stroke="url(#guidanceGrad1)" strokeWidth="4" fill="white" opacity="0.6" />
      <circle cx="200" cy="200" r="50" stroke="url(#guidanceGrad2)" strokeWidth="2" fill="none" opacity="0.4" />

      {/* Compass directions */}
      <path
        d="M200 140 L200 160 M195 145 L200 140 L205 145"
        stroke="url(#guidanceGrad1)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M260 200 L240 200 M255 195 L260 200 L255 205"
        stroke="url(#guidanceGrad2)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M200 260 L200 240 M195 255 L200 260 L205 255"
        stroke="url(#guidanceGrad3)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M140 200 L160 200 M145 195 L140 200 L145 205"
        stroke="url(#guidanceGrad4)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Compass needle */}
      <path d="M200 200 L200 170 L210 200 L200 230 L190 200 Z" fill="url(#guidanceGrad1)" opacity="0.6" />
      <circle cx="200" cy="200" r="6" fill="url(#guidanceGrad2)" opacity="0.8" />

      {/* Activity icons around compass */}
      {/* Soccer ball */}
      <circle cx="120" cy="120" r="22" fill="url(#guidanceGrad2)" opacity="0.5" />
      <path d="M120 98 L120 142 M98 120 L142 120" stroke="white" strokeWidth="2" opacity="0.6" />
      <circle cx="120" cy="120" r="15" stroke="white" strokeWidth="2" fill="none" opacity="0.6" />

      {/* Book */}
      <rect x="258" y="98" width="44" height="44" rx="4" fill="url(#guidanceGrad3)" opacity="0.5" />
      <line x1="280" y1="98" x2="280" y2="142" stroke="white" strokeWidth="2" opacity="0.6" />
      <line x1="268" y1="115" x2="292" y2="115" stroke="white" strokeWidth="2" opacity="0.5" />
      <line x1="268" y1="125" x2="292" y2="125" stroke="white" strokeWidth="2" opacity="0.5" />

      {/* Music note */}
      <circle cx="280" cy="280" r="22" fill="url(#guidanceGrad4)" opacity="0.5" />
      <ellipse cx="275" cy="285" rx="6" ry="8" fill="white" opacity="0.7" />
      <rect x="281" y="270" width="3" height="20" fill="white" opacity="0.7" />
      <path d="M284 270 Q290 268 290 275 L290 285" stroke="white" strokeWidth="3" fill="none" opacity="0.7" />

      {/* Art palette */}
      <ellipse cx="120" cy="280" rx="24" ry="20" fill="url(#guidanceGrad5)" opacity="0.5" />
      <circle cx="115" cy="275" r="4" fill="#ca6c28" opacity="0.7" />
      <circle cx="125" cy="275" r="4" fill="#bc9b0a" opacity="0.7" />
      <circle cx="120" cy="285" r="4" fill="#788a68" opacity="0.7" />
      <ellipse cx="130" cy="290" rx="6" ry="4" fill="white" opacity="0.6" />

      {/* Guidance stars */}
      <path
        d="M200 90 L203 98 L211 100 L205 106 L206 114 L200 110 L194 114 L195 106 L189 100 L197 98 Z"
        fill="url(#guidanceGrad1)"
        opacity="0.6"
      />
      <path
        d="M310 200 L313 208 L321 210 L315 216 L316 224 L310 220 L304 224 L305 216 L299 210 L307 208 Z"
        fill="url(#guidanceGrad2)"
        opacity="0.5"
      />

      <defs>
        <linearGradient id="guidanceGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#a3b185" />
        </linearGradient>
        <linearGradient id="guidanceGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a3b185" />
          <stop offset="100%" stopColor="#bc9b0a" />
        </linearGradient>
        <linearGradient id="guidanceGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bc9b0a" />
          <stop offset="100%" stopColor="#ca6c28" />
        </linearGradient>
        <linearGradient id="guidanceGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ca6c28" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
        <linearGradient id="guidanceGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#bc9b0a" />
        </linearGradient>
      </defs>
    </svg>
  ),
  Baby: (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
      {/* Parent figure holding baby */}
      <ellipse cx="180" cy="140" rx="35" ry="40" fill="url(#babyGrad1)" opacity="0.6" />
      <circle cx="180" cy="140" r="22" fill="white" opacity="0.4" />
      <path d="M145 180 Q180 170 215 180 L212 250 Q180 260 148 250 Z" fill="url(#babyGrad1)" opacity="0.6" />

      {/* Parent arms cradling */}
      <path
        d="M145 200 Q130 210 125 230 Q120 245 130 255"
        stroke="url(#babyGrad1)"
        strokeWidth="14"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M215 200 Q230 210 235 230 Q240 245 230 255"
        stroke="url(#babyGrad1)"
        strokeWidth="14"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Baby in parent's arms */}
      <ellipse cx="180" cy="240" rx="25" ry="28" fill="url(#babyGrad2)" opacity="0.7" />
      <circle cx="180" cy="240" r="18" fill="white" opacity="0.5" />
      <path d="M155 268 Q180 262 205 268 L203 295 Q180 300 157 295 Z" fill="url(#babyGrad2)" opacity="0.7" />

      {/* Baby's little arms */}
      <path
        d="M155 275 Q145 280 140 285"
        stroke="url(#babyGrad2)"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M205 275 Q215 280 220 285"
        stroke="url(#babyGrad2)"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Baby bottle */}
      <rect x="270" y="150" width="30" height="60" rx="8" fill="url(#babyGrad3)" opacity="0.6" />
      <rect x="275" y="145" width="20" height="10" rx="3" fill="url(#babyGrad3)" opacity="0.6" />
      <rect x="275" y="160" width="20" height="35" fill="white" opacity="0.4" />
      <line x1="275" y1="175" x2="295" y2="175" stroke="url(#babyGrad4)" strokeWidth="2" opacity="0.5" />
      <line x1="275" y1="185" x2="295" y2="185" stroke="url(#babyGrad4)" strokeWidth="2" opacity="0.5" />

      {/* Pacifier */}
      <circle cx="100" cy="180" r="18" fill="url(#babyGrad4)" opacity="0.6" />
      <ellipse cx="100" cy="180" rx="12" ry="10" fill="white" opacity="0.5" />
      <rect x="95" y="195" width="10" height="8" rx="2" fill="url(#babyGrad4)" opacity="0.6" />

      {/* Baby crib/cradle */}
      <rect
        x="80"
        y="280"
        width="70"
        height="50"
        rx="6"
        stroke="url(#babyGrad5)"
        strokeWidth="3"
        fill="none"
        opacity="0.5"
      />
      <line x1="90" y1="280" x2="90" y2="330" stroke="url(#babyGrad5)" strokeWidth="2" opacity="0.4" />
      <line x1="105" y1="280" x2="105" y2="330" stroke="url(#babyGrad5)" strokeWidth="2" opacity="0.4" />
      <line x1="120" y1="280" x2="120" y2="330" stroke="url(#babyGrad5)" strokeWidth="2" opacity="0.4" />
      <line x1="135" y1="280" x2="135" y2="330" stroke="url(#babyGrad5)" strokeWidth="2" opacity="0.4" />
      <path d="M80 295 Q115 285 150 295" stroke="url(#babyGrad5)" strokeWidth="2" fill="none" opacity="0.4" />

      {/* Heart symbols for care */}
      <path
        d="M260 240 C250 230 240 230 240 220 C240 210 250 205 260 210 C270 205 280 210 280 220 C280 230 270 230 260 240 Z"
        fill="url(#babyGrad3)"
        opacity="0.6"
      />
      <path
        d="M100 120 C95 115 90 115 90 110 C90 105 95 102 100 105 C105 102 110 105 110 110 C110 115 95 115 100 120 Z"
        fill="url(#babyGrad3)"
        opacity="0.5"
      />

      {/* Support stars */}
      <path
        d="M300 120 L302 126 L308 128 L302 130 L300 136 L298 130 L292 128 L298 126 Z"
        fill="url(#babyGrad4)"
        opacity="0.5"
      />
      <path
        d="M70 240 L72 246 L78 248 L72 250 L70 256 L68 250 L62 248 L68 246 Z"
        fill="url(#babyGrad4)"
        opacity="0.5"
      />

      {/* Nurturing circle */}
      <circle
        cx="180"
        cy="200"
        r="100"
        stroke="url(#babyGrad5)"
        strokeWidth="2"
        strokeDasharray="8,4"
        fill="none"
        opacity="0.3"
      />

      <defs>
        <linearGradient id="babyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#a3b185" />
        </linearGradient>
        <linearGradient id="babyGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0bf99" />
          <stop offset="100%" stopColor="#fdf2e0" />
        </linearGradient>
        <linearGradient id="babyGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ca6c28" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
        <linearGradient id="babyGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bc9b0a" />
          <stop offset="100%" stopColor="#ca6c28" />
        </linearGradient>
        <linearGradient id="babyGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#bc9b0a" />
        </linearGradient>
      </defs>
    </svg>
  ),
  Heart: (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
      {/* Central wellness heart */}
      <path
        d="M200 280 C160 240 120 240 120 200 C120 160 160 140 200 160 C240 140 280 160 280 200 C280 240 240 240 200 280 Z"
        fill="url(#heartGrad1)"
        opacity="0.6"
      />
      <path
        d="M200 270 C170 245 145 245 145 215 C145 185 170 170 200 185 C230 170 255 185 255 215 C255 245 230 245 200 270 Z"
        fill="white"
        opacity="0.3"
      />

      {/* Heartbeat line through center */}
      <path
        d="M100 200 L140 200 L155 180 L170 220 L185 200 L260 200"
        stroke="url(#heartGrad2)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />

      {/* Movement figures around heart */}
      {/* Figure 1 - stretching */}
      <ellipse cx="120" cy="120" rx="15" ry="18" fill="url(#heartGrad3)" opacity="0.5" />
      <path d="M105 138 Q120 132 135 138 L132 170 Q120 175 108 170 Z" fill="url(#heartGrad3)" opacity="0.5" />
      <path d="M105 150 Q90 155 85 165" stroke="url(#heartGrad3)" strokeWidth="8" strokeLinecap="round" opacity="0.5" />
      <path
        d="M135 150 Q150 155 155 165"
        stroke="url(#heartGrad3)"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Figure 2 - active */}
      <ellipse cx="280" cy="120" rx="15" ry="18" fill="url(#heartGrad4)" opacity="0.5" />
      <path d="M265 138 Q280 132 295 138 L292 170 Q280 175 268 170 Z" fill="url(#heartGrad4)" opacity="0.5" />
      <path
        d="M265 150 Q250 160 245 175"
        stroke="url(#heartGrad4)"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M295 150 Q310 145 320 150"
        stroke="url(#heartGrad4)"
        strokeWidth="8"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Wellness symbols */}
      <circle cx="200" cy="100" r="25" stroke="url(#heartGrad5)" strokeWidth="3" fill="none" opacity="0.4" />
      <path d="M200 75 L200 125 M175 100 L225 100" stroke="url(#heartGrad5)" strokeWidth="3" opacity="0.5" />

      {/* Energy waves */}
      <path
        d="M80 200 Q70 190 70 180"
        stroke="url(#heartGrad2)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M60 200 Q50 190 50 180"
        stroke="url(#heartGrad2)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M320 200 Q330 190 330 180"
        stroke="url(#heartGrad2)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M340 200 Q350 190 350 180"
        stroke="url(#heartGrad2)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />

      {/* Wellness stars */}
      <path
        d="M100 300 L103 308 L111 310 L105 316 L106 324 L100 320 L94 324 L95 316 L89 310 L97 308 Z"
        fill="url(#heartGrad3)"
        opacity="0.5"
      />
      <path
        d="M300 300 L303 308 L311 310 L305 316 L306 324 L300 320 L294 324 L295 316 L289 310 L297 308 Z"
        fill="url(#heartGrad4)"
        opacity="0.5"
      />

      {/* Balance circles at bottom */}
      <circle cx="160" cy="320" r="12" fill="url(#heartGrad5)" opacity="0.4" />
      <circle cx="200" cy="330" r="15" fill="url(#heartGrad5)" opacity="0.5" />
      <circle cx="240" cy="320" r="12" fill="url(#heartGrad5)" opacity="0.4" />

      <defs>
        <linearGradient id="heartGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ca6c28" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
        <linearGradient id="heartGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bc9b0a" />
          <stop offset="100%" stopColor="#ca6c28" />
        </linearGradient>
        <linearGradient id="heartGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#a3b185" />
        </linearGradient>
        <linearGradient id="heartGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a3b185" />
          <stop offset="100%" stopColor="#bc9b0a" />
        </linearGradient>
        <linearGradient id="heartGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bc9b0a" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
      </defs>
    </svg>
  ),
}

const defaultIllustration = (
  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
    <circle cx="200" cy="200" r="80" fill="url(#defaultGrad)" opacity="0.3" />
    <circle cx="200" cy="200" r="120" stroke="url(#defaultGrad)" strokeWidth="2" fill="none" opacity="0.2" />
    <defs>
      <linearGradient id="defaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#788a68" />
        <stop offset="100%" stopColor="#ca6c28" />
      </linearGradient>
    </defs>
  </svg>
)

function ServiceCard({
  service,
  index,
  categoryClasses,
}: {
  service: ServiceData
  index: number
  categoryClasses: { text: string; border: string; bg: string }
}) {
  const isEven = index % 2 === 0

  const illustration = service.icon ? iconIllustrations[service.icon] || defaultIllustration : defaultIllustration

  const getHoverClasses = () => {
    if (categoryClasses.bg === "bg-accent") {
      return "hover:bg-accent! hover:text-white hover:border-accent!"
    } else if (categoryClasses.bg === "bg-secondary") {
      return "hover:bg-secondary! hover:text-white hover:border-secondary!"
    } else if (categoryClasses.bg === "bg-complementary") {
      return "hover:bg-complementary! hover:text-white hover:border-complementary!"
    }
    return "hover:bg-accent! hover:text-white hover:border-accent!"
  }

  return (
    <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}>
      {/* Content Side */}
      <div className={`space-y-8 ${!isEven ? "lg:col-start-2" : ""}`}>
        {/* Header */}
        <div className="space-y-6">
          <h2 className={`font-quicksand text-4xl lg:text-5xl font-bold ${categoryClasses.text} leading-tight`}>
            {service.title}
          </h2>

          <p className="text-xl text-foreground/70 leading-relaxed font-nunito font-light">{service.fullCopy}</p>
        </div>

        <div className="space-y-4">
          {service.features.map((feature, i) => (
            <div key={`${feature}-${i}`} className="group flex gap-4 items-start">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className={`w-5 h-5 ${categoryClasses.text}`} />
              </div>
              <p className="text-foreground/80 leading-relaxed flex-1 font-nunito">{feature}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <Link href="/contact" className="cursor-pointer">
            <Button
              variant="outline"
              size="lg"
              className={`cursor-pointer border-2 ${categoryClasses.border} ${categoryClasses.text} ${getHoverClasses()} font-semibold rounded-full px-8 transition-all duration-300 font-quicksand`}
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Visual Side - Service-specific Illustration */}
      <div className={`relative ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
        <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary-light/40 to-white/40 border-2 border-accent/10">
          {illustration}

          {/* Service number badge */}
          <div
            className={`absolute bottom-8 right-8 w-20 h-20 rounded-full bg-white border-2 ${categoryClasses.border} flex items-center justify-center shadow-lg`}
          >
            <span className={`text-3xl font-bold ${categoryClasses.text} font-quicksand`}>
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Floating accent elements */}
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-complementary/20 blur-2xl" />
        <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-secondary/20 blur-2xl" />
      </div>
    </div>
  )
}

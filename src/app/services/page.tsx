import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | Roots & Routines",
  description: "Comprehensive, personalized family support services designed around your unique needs and rhythm",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-32 lg:px-8 lg:pt-32 lg:pb-40 overflow-hidden">
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
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-accent/20">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-medium text-sm tracking-wide">Our Services</span>
            </div>

            <div className="space-y-6">
              <h1 className="font-quicksand text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
                <span className="text-complementary-dark text-[#715204]">How we support</span>
                <br />
                <span className="text-secondary">your family</span>
              </h1>

              <p className="text-2xl md:text-3xl text-foreground/60 leading-relaxed font-nunito font-light max-w-3xl mx-auto">
                Comprehensive, personalized services designed around your unique needs and rhythm
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-4">
              <div className="h-px w-16 bg-accent" />
              <p className="text-sm uppercase tracking-widest text-accent font-medium font-quicksand">
                Tailored for you
              </p>
              <div className="h-px w-16 bg-accent" />
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

      {/* Services Grid Section */}
      <section className="px-6 py-16 lg:px-8 lg:py-24 relative overflow-hidden">
        <div className="absolute bottom-20 right-0 w-96 h-96 opacity-15">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M200 50C250 50 300 80 320 130C340 180 330 240 290 280C250 320 180 340 130 320C80 300 40 250 40 190C40 130 90 50 200 50Z"
              fill="url(#servicesBg2)"
            />
            <defs>
              <linearGradient id="servicesBg2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ca6c28" />
                <stop offset="100%" stopColor="#bc9b0a" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="mx-auto max-w-[1400px] relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "School Searches",
                description:
                  "Finding the perfect educational environment that aligns with your values and your child's needs",
                icon: (
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M100 30 L160 60 L160 120 L100 150 L40 120 L40 60 Z" fill="#ca6c28" opacity="0.2" />
                    <path d="M100 50 L140 70 L140 110 L100 130 L60 110 L60 70 Z" fill="#ca6c28" opacity="0.6" />
                    <rect x="85" y="80" width="30" height="35" fill="#ca6c28" />
                  </svg>
                ),
              },
              {
                title: "Nanny Placements",
                description: "Connecting you with trusted, qualified caregivers who become part of your family",
                icon: (
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="100" cy="70" r="35" fill="#788a68" opacity="0.6" />
                    <path d="M60 120 Q100 110 140 120 L135 170 Q100 180 65 170 Z" fill="#788a68" opacity="0.6" />
                    <circle cx="85" cy="65" r="5" fill="#788a68" />
                    <circle cx="115" cy="65" r="5" fill="#788a68" />
                    <path d="M90 85 Q100 90 110 85" stroke="#788a68" strokeWidth="3" fill="none" />
                  </svg>
                ),
              },
              {
                title: "Nutritional Meal Prep",
                description: "Tailored meal planning that nourishes your family and fits your lifestyle",
                icon: (
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <ellipse cx="100" cy="100" rx="60" ry="70" fill="#bc9b0a" opacity="0.2" />
                    <path
                      d="M100 40 L130 70 L130 110 C130 130 115 145 100 145 C85 145 70 130 70 110 L70 70 Z"
                      fill="#bc9b0a"
                      opacity="0.6"
                    />
                    <line x1="80" y1="80" x2="120" y2="80" stroke="#bc9b0a" strokeWidth="3" />
                    <line x1="80" y1="100" x2="120" y2="100" stroke="#bc9b0a" strokeWidth="3" />
                    <circle cx="100" cy="120" r="8" fill="#bc9b0a" />
                  </svg>
                ),
              },
              {
                title: "Activity Planning",
                description: "Enriching experiences and routines that support development and joy",
                icon: (
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="100" cy="100" r="60" fill="#a3b185" opacity="0.2" />
                    <path
                      d="M100 40 L110 75 L145 80 L117 105 L125 140 L100 122 L75 140 L83 105 L55 80 L90 75 Z"
                      fill="#a3b185"
                      opacity="0.7"
                    />
                    <circle cx="100" cy="100" r="15" fill="#a3b185" />
                  </svg>
                ),
              },
              {
                title: "Home Routines",
                description: "Creating sustainable structure that brings ease and flow to daily life",
                icon: (
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path d="M100 30 L170 80 L155 80 L155 150 L45 150 L45 80 L30 80 Z" fill="#ca6c28" opacity="0.6" />
                    <rect x="75" y="100" width="50" height="50" fill="#ca6c28" opacity="0.3" />
                    <rect x="80" y="105" width="15" height="15" fill="white" opacity="0.5" />
                    <rect x="105" y="105" width="15" height="15" fill="white" opacity="0.5" />
                  </svg>
                ),
              },
              {
                title: "Family Guidance",
                description: "Strategic support for confident parenting decisions and household management",
                icon: (
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <circle cx="100" cy="65" r="30" fill="#788a68" opacity="0.6" />
                    <path
                      d="M100 95 L100 130 M80 110 L100 130 L120 110"
                      stroke="#788a68"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.6"
                    />
                    <circle cx="70" cy="140" r="20" fill="#788a68" opacity="0.4" />
                    <circle cx="130" cy="140" r="20" fill="#788a68" opacity="0.4" />
                  </svg>
                ),
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-accent/10 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 0 L100 50 Q100 100 50 100 L0 100 L0 0 Z" fill="url(#cornerGrad)" opacity="0.1" />
                    <defs>
                      <linearGradient id="cornerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ca6c28" />
                        <stop offset="100%" stopColor="#bc9b0a" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-quicksand font-bold text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative">
                  <div className="w-20 h-20 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="font-quicksand text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed font-light">{service.description}</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-complementary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 lg:px-8 lg:py-32 relative overflow-hidden">
        {/* Organic background shapes */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] opacity-10">
          <svg viewBox="0 0 550 550" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M275 75 Q400 125 450 250 Q500 375 375 475 Q250 525 125 450 Q50 350 75 225 Q125 100 275 75 Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] opacity-10">
          <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="210" cy="210" r="170" fill="white" />
          </svg>
        </div>

        {/* Decorative dots */}
        <div className="absolute top-24 left-24 w-3 h-3 rounded-full bg-white/30 animate-pulse" />
        <div className="absolute bottom-32 right-32 w-2 h-2 rounded-full bg-white/20" />
        <div
          className="absolute top-1/3 right-1/3 w-4 h-4 rounded-full bg-white/25 animate-pulse"
          style={{ animationDelay: "0.8s" }}
        />

        <div className="mx-auto container relative z-10">
          <div className="relative rounded-[2.5rem] bg-white/95 backdrop-blur-sm shadow-2xl p-12 lg:p-16 border border-white/20">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-complementary/20 rounded-tl-[2.5rem]" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-accent/20 rounded-br-[2.5rem]" />

            <div className="text-center space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-complementary/10 border border-complementary/20">
                  <Sparkles className="w-4 h-4 text-complementary" />
                  <span className="text-sm font-bold text-complementary font-quicksand tracking-wide">Get Started</span>
                </div>

                <h2 className="font-quicksand text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Ready to explore how we can support your family?
                </h2>
                <p className="text-xl text-foreground/70 leading-relaxed font-light font-nunito max-w-2xl mx-auto">
                  Browse our service categories to find the perfect fit for your needs
                </p>
              </div>

              {/* Decorative divider */}
              <div className="flex items-center justify-center gap-3 py-4">
                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-complementary/30" />
                <div className="w-2 h-2 rounded-full bg-complementary/50" />
                <div className="w-16 h-[2px] bg-complementary/30" />
                <div className="w-2 h-2 rounded-full bg-accent/50" />
                <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-complementary/30" />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/service/wellness-growth"
                  className="inline-flex items-center gap-3 bg-complementary hover:bg-complementary/90 text-white font-quicksand text-lg px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  Wellness & Growth
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/service/daily-operations"
                  className="inline-flex items-center gap-3 border-2 border-complementary text-complementary hover:bg-complementary/5 bg-transparent font-quicksand text-lg px-10 py-4 rounded-full font-bold transition-all hover:scale-105"
                >
                  Daily Operations
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-sm text-foreground/60 font-nunito">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="font-medium">Personalized approach</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <span className="font-medium">Expert guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-complementary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-complementary" />
                  </div>
                  <span className="font-medium">Proven results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

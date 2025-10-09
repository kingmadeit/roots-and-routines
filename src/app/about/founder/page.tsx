import type { Metadata } from "next"
import Link from "next/link"
import { Heart, Lightbulb, Users, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Meet the Founder | Roots & Routines",
  description: "Learn about the experience and passion behind Roots & Routines Family Concierge.",
}

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-32 lg:px-8 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute top-10 left-0 w-96 h-96 opacity-20">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="200" cy="200" rx="150" ry="180" fill="url(#heroGrad)" />
            <defs>
              <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#788a68" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#a3b185" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-accent/20 via-complementary/20 to-secondary/20 rounded-[3rem] blur-3xl" />
                <div className="relative aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br from-secondary via-secondary-light to-accent overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <circle cx="150" cy="150" r="80" fill="white" opacity="0.1" />
                      <path
                        d="M150 100 C170 100 185 115 185 135 C185 155 170 170 150 170 C130 170 115 155 115 135 C115 115 130 100 150 100 Z"
                        fill="white"
                        opacity="0.2"
                      />
                      <path
                        d="M150 180 L150 250 M130 210 L150 230 L170 210 M120 270 L180 270"
                        stroke="white"
                        strokeWidth="3"
                        opacity="0.2"
                      />
                      <text
                        x="150"
                        y="330"
                        textAnchor="middle"
                        fill="white"
                        fontSize="32"
                        opacity="0.9"
                        fontFamily="serif"
                      >
                        Heart meets strategy
                      </text>
                    </svg>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-accent/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-medium text-sm tracking-wide">Meet the Founder</span>
                </div>

                <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground leading-[0.95]">
                  Helping families
                  <br />
                  <span className="text-accent italic">thrive</span>
                </h1>
              </div>

              <p className="text-2xl md:text-3xl text-foreground/60 leading-relaxed font-light">
                Years of hands-on experience combined with strategic thinking
              </p>

              <div className="flex items-center gap-3 pt-4">
                <div className="h-px w-16 bg-accent" />
                <p className="text-sm uppercase tracking-widest text-accent font-medium">Not just survive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="px-6 py-24 lg:px-8 lg:py-32 bg-white/40">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-8">
                <div className="w-12 h-1 bg-accent rounded-full" />

                <h2 className="font-serif text-4xl lg:text-5xl font-light text-foreground leading-tight">
                  The Journey to Roots & Routines
                </h2>

                <div className="prose prose-xl max-w-none space-y-6">
                  <p className="text-xl text-foreground/80 leading-relaxed font-light">
                    With years of hands-on experience in nannying, nutrition, office and household management and a deep
                    passion for child wellbeing and family support, I created Roots & Routines to help families thrive,
                    not just survive.
                  </p>

                  <p className="text-xl text-foreground/70 leading-relaxed font-light">
                    Whether it's building nourishing routines, finding the right nanny or planning meals that work for
                    your lifestyle—I've seen firsthand how a bit of guidance can create lasting ease and joy at home.
                  </p>

                  <div className="relative p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-accent to-[#d97d3f] overflow-hidden my-12">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="relative">
                      <p className="text-2xl lg:text-3xl text-white leading-relaxed font-light">
                        My background also includes research, admin and logistics, which means with me you're not just
                        getting heart—<span className="font-medium">you're getting strategy.</span>
                      </p>
                    </div>
                  </div>

                  <p className="text-xl text-foreground/70 leading-relaxed font-light">
                    With you as the lead, let's build your family's rhythm together.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-8 space-y-6">
                <div className="bg-white rounded-2xl p-8 border border-accent/10 shadow-lg">
                  <h3 className="font-serif text-2xl text-foreground mb-6">Core Values</h3>
                  <div className="space-y-5">
                    {[
                      { label: "Parent-led approach", color: "#ca6c28" },
                      { label: "Experience-based", color: "#bc9b0a" },
                      { label: "Strategic thinking", color: "#788a68" },
                      { label: "Hands-on expertise", color: "#a3b185" },
                      { label: "Personalized support", color: "#ca6c28" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full"
                          >
                            <circle cx="20" cy="20" r="18" fill={item.color} opacity="0.2" />
                            <path
                              d="M15 20 L18 23 L25 16"
                              stroke={item.color}
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <p className="text-foreground/80 font-light">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Bring Section */}
      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl mb-20">
            <h2 className="font-serif text-5xl lg:text-6xl font-light text-foreground mb-6 leading-tight">
              What I bring to your family
            </h2>
            <p className="text-xl text-foreground/60 leading-relaxed font-light">
              A unique combination of heart, strategy, and hands-on experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
            <div className="relative p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-accent to-[#d97d3f] overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative">
                <Heart className="w-14 h-14 text-white/90 mb-8" />
                <h3 className="font-serif text-3xl text-white mb-4">Heart</h3>
                <p className="text-white/90 text-lg leading-relaxed font-light">
                  Deep passion for child wellbeing and genuine care for every family's unique journey
                </p>
              </div>
            </div>

            <div className="relative p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-complementary to-[#d4b00b] overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative">
                <Lightbulb className="w-14 h-14 text-white/90 mb-8" />
                <h3 className="font-serif text-3xl text-white mb-4">Strategy</h3>
                <p className="text-white/90 text-lg leading-relaxed font-light">
                  Research, admin and logistics expertise to create systems that actually work
                </p>
              </div>
            </div>

            <div className="relative p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-secondary to-secondary-light overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative">
                <Users className="w-14 h-14 text-white/90 mb-8" />
                <h3 className="font-serif text-3xl text-white mb-4">Experience</h3>
                <p className="text-white/90 text-lg leading-relaxed font-light">
                  Years of hands-on work in nannying, nutrition, and household management
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-10 lg:p-16 border border-accent/10">
            <h3 className="font-serif text-3xl text-foreground mb-12 text-center">Areas of Expertise</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Nannying & Childcare", color: "#ca6c28" },
                { title: "Nutrition & Meal Planning", color: "#bc9b0a" },
                { title: "Office Management", color: "#788a68" },
                { title: "Household Management", color: "#a3b185" },
                { title: "Research & Analysis", color: "#ca6c28" },
                { title: "Administrative Systems", color: "#bc9b0a" },
                { title: "Logistics & Planning", color: "#788a68" },
                { title: "Family Support Services", color: "#a3b185" },
              ].map((expertise, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-accent/10 hover:border-accent/30 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-foreground/80 font-light group-hover:text-accent transition-colors relative z-10">
                    {expertise.title}
                  </p>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" fill={expertise.color} />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-secondary via-secondary-light to-secondary shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-complementary/10 rounded-full blur-3xl" />

            <div className="relative p-12 lg:p-20 text-center">
              <div className="max-w-3xl mx-auto space-y-10">
                <div className="space-y-6">
                  <Sparkles className="w-16 h-16 text-white/90 mx-auto" />
                  <h2 className="font-serif text-4xl lg:text-5xl font-light text-white leading-tight">
                    Let's create your family's rhythm together
                  </h2>
                  <p className="text-xl text-white/90 leading-relaxed font-light">
                    Parent-led, experience-based support tailored to your unique needs
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button
                    size="lg"
                    className="bg-white hover:bg-white/90 text-secondary text-lg px-10 py-7 h-auto rounded-full font-medium shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                  >
                    Get in Touch
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 bg-transparent text-lg px-10 py-7 h-auto rounded-full font-medium backdrop-blur-sm"
                  >
                    <Link href="/about">Explore Our Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

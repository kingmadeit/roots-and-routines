import { ValuesCard } from "@/components/ValuesCard"
import type { Metadata } from "next"
import Link from "next/link"
import { Heart, Lightbulb, Users, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Meet the Founder | Roots & Routines",
  description: "Learn about the experience and passion behind Roots & Routines Family Concierge.",
}

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-primary/70 pt-24 md:pt-0">
      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-32 lg:px-8 lg:pt-55 lg:pb-40 overflow-hidden">
        {/* Organic background shapes */}
        <div className="absolute top-20 right-0 w-96 h-96 opacity-30">
          <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M200 50C250 50 300 80 320 130C340 180 330 240 290 280C250 320 180 340 130 320C80 300 40 250 40 190C40 130 90 50 200 50Z"
              fill="url(#gradient1)"
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#788a68" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#bc9b0a" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="w-full text-left relative max-w-[1400px] mx-auto">
          {/* SVG Illustration - Positioned on right side */}
          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-[400px] h-[400px]">
            <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-lg">
              {/* Background circle */}
              <circle cx="150" cy="150" r="130" fill="#ca6c28" opacity="0.12" />

              {/* Tree trunk/stem - representing growth */}
              <path
                d="M 140 200 L 140 120 Q 140 110 150 110 Q 160 110 160 120 L 160 200"
                fill="#788a68"
                opacity="0.85"
              />

              {/* Roots - organic flowing lines */}
              <path
                d="M 145 200 Q 120 220 100 240 M 155 200 Q 180 220 200 240 M 150 205 Q 150 230 150 250"
                stroke="#788a68"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                opacity="0.7"
              />

              {/* Root details - smaller branches */}
              <path
                d="M 110 230 Q 90 240 80 250 M 190 230 Q 210 240 220 250"
                stroke="#a3b185"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.6"
              />

              {/* Heart at the center - representing care */}
              <path
                d="M 150 100 C 145 95 138 95 135 100 C 132 105 132 110 135 115 L 150 130 L 165 115 C 168 110 168 105 165 100 C 162 95 155 95 150 100 Z"
                fill="#ca6c28"
                opacity="0.9"
              />

              {/* Strategic grid pattern emerging from heart */}
              <g opacity="0.6">
                {/* Grid lines */}
                <line x1="130" y1="70" x2="170" y2="70" stroke="#bc9b0a" strokeWidth="1.5" />
                <line x1="130" y1="80" x2="170" y2="80" stroke="#bc9b0a" strokeWidth="1.5" />
                <line x1="130" y1="90" x2="170" y2="90" stroke="#bc9b0a" strokeWidth="1.5" />
                <line x1="140" y1="60" x2="140" y2="95" stroke="#bc9b0a" strokeWidth="1.5" />
                <line x1="150" y1="60" x2="150" y2="95" stroke="#bc9b0a" strokeWidth="1.5" />
                <line x1="160" y1="60" x2="160" y2="95" stroke="#bc9b0a" strokeWidth="1.5" />
              </g>

              {/* Decorative dots around the composition */}
              <circle cx="80" cy="120" r="3" fill="#ca6c28" opacity="0.7" />
              <circle cx="220" cy="120" r="3" fill="#bc9b0a" opacity="0.7" />
              <circle cx="100" cy="180" r="2.5" fill="#788a68" opacity="0.6" />
              <circle cx="200" cy="180" r="2.5" fill="#788a68" opacity="0.6" />
              <circle cx="150" cy="50" r="2" fill="#ca6c28" opacity="0.5" />

              {/* Sparkle elements */}
              <path d="M 90 100 L 92 102 L 90 104 L 88 102 Z" fill="#bc9b0a" opacity="0.8" />
              <path d="M 210 100 L 212 102 L 210 104 L 208 102 Z" fill="#bc9b0a" opacity="0.8" />
              <path d="M 150 260 L 152 262 L 150 264 L 148 262 Z" fill="#ca6c28" opacity="0.7" />
            </svg>
          </div>

          {/* Left-aligned Text Content */}
          <div className="space-y-8 relative  max-w-4xl">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-accent/20">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-medium text-sm tracking-wide">Meet the Founder</span>
              </div>

              <h1 className="font-quicksand text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#581b04] leading-[0.95]">
                Where heart
                <br />
                <span className="text-accent italic font-light">meets strategy</span>
              </h1>
            </div>

            <p className="text-2xl md:text-3xl text-[#581b04]/60 leading-relaxed font-light">
              Bringing years of experience in childcare, education, and family support
            </p>

            <div className="flex items-center gap-3 pt-4">
              <div className="h-px w-16 bg-accent" />
              <p className="text-sm uppercase tracking-widest text-accent font-medium">Experience-based · Parent-led</p>
              <div className="h-px w-16 bg-accent" />
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

                <h2 className="font-quicksand text-4xl lg:text-5xl font-bold text-[#581b04] leading-tight">
                  The Journey to Roots & Routines
                </h2>

                <div className="prose prose-xl max-w-none space-y-6">
                  <p className="text-xl text-[#581b04]/80 leading-relaxed font-light">
                    With years of hands-on experience in nannying, nutrition, office and household management and a deep
                    passion for child wellbeing and family support, I created Roots & Routines to help families thrive,
                    not just survive.
                  </p>

                  <p className="text-xl text-[#581b04]/70 leading-relaxed font-light">
                    Whether it&apos;s building nourishing routines, finding the right nanny or planning meals that work
                    for your lifestyle—I've seen firsthand how a bit of guidance can create lasting ease and joy at
                    home.
                  </p>

                  <div className="relative p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-complementary to-[#d4b00b] overflow-hidden my-12">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10">
                      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M20 45C20 30 28 20 40 20C48 20 54 26 54 34C54 42 48 48 40 48C38 48 36 47 34 46C34 54 38 60 46 60C48 60 50 59 52 58L54 66C50 68 46 70 40 70C28 70 20 60 20 45ZM60 45C60 30 68 20 80 20C88 20 94 26 94 34C94 42 88 48 80 48C78 48 76 47 74 46C74 54 78 60 86 60C88 60 90 59 92 58L94 66C90 68 86 70 80 70C68 70 60 60 60 45Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="relative">
                      <p className="text-2xl lg:text-3xl text-white leading-relaxed font-light">
                        My background also includes research, admin and logistics, which means with me you're not just
                        getting heart—<span className="font-medium">you're getting strategy.</span>
                      </p>
                    </div>
                  </div>

                  <p className="text-xl text-[#581b04]/70 leading-relaxed font-light">
                    With you as the lead, let's build your family's rhythm together.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-8 space-y-6">
                <div className="relative bg-primary/30 rounded-3xl p-8 border-2 border-accent/20 shadow-xl overflow-hidden">
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-complementary/5 rounded-full blur-2xl" />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="font-quicksand text-2xl font-bold text-[#581b04]">Core Values</h3>
                    </div>

                    <div className="space-y-4">
                      {[
                        { label: "Parent-led approach", color: "#ca6c28" },
                        { label: "Experience-based", color: "#bc9b0a" },
                        { label: "Strategic thinking", color: "#788a68" },
                        { label: "Hands-on expertise", color: "#a3b185" },
                        { label: "personalised support", color: "#ca6c28" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 group/item p-3 rounded-xl hover:bg-primary/50 transition-all duration-300 hover:scale-105 bg-white/50"
                        >
                          <div className="relative">
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300"
                              style={{ backgroundColor: `${item.color}15` }}
                            >
                              <CheckCircle2 className="w-5 h-5" style={{ color: item.color }} />
                            </div>
                          </div>
                          <p className="text-[#581b04]/80 font-nunito group-hover/item:text-[#581b04] transition-colors">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
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
          <div className="w-12 h-1 bg-accent mb-6 rounded-full" />
          <div className="max-w-3xl mb-20">
            <h2 className="font-quicksand text-5xl lg:text-6xl font-bold text-[#581b04] mb-6 leading-tight">
              What I bring to your family
            </h2>
            <p className="text-xl text-[#581b04]/60 leading-relaxed font-light">
              A unique combination of heart, strategy, and hands-on experience
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
            <ValuesCard
              icon={Heart}
              title="Heart"
              description="Deep passion for child wellbeing and genuine care for every family's unique journey"
              gradientId="gradientHeart"
              gradientFrom="#788a68"
              gradientTo="#d97d3f"
              borderColor="border-accent/20 hover:border-accent/40"
              iconBgColor="bg-accent/5"
              titleColor="text-accent"
            />
            <ValuesCard
              icon={Lightbulb}
              title="Strategy"
              description="Research, admin and logistics expertise to create systems that actually work"
              gradientId="gradientStrategy"
              gradientFrom="#bc9b0a"
              gradientTo="#d4b00b"
              borderColor="border-complementary/20 hover:border-complementary/40"
              iconBgColor="bg-complementary/5"
              titleColor="text-complementary"
            />
            <ValuesCard
              icon={Users}
              title="Experience"
              description="Years of hands-on work in nannying, nutrition, and household management"
              gradientId="gradientExperience"
              gradientFrom="#788a68"
              gradientTo="#a3b185"
              borderColor="border-secondary/20 hover:border-secondary/40"
              iconBgColor="bg-secondary/5"
              titleColor="text-secondary"
            />
          </div>

          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-complementary/5 rounded-full blur-3xl" />

            <div className="relative bg-white/60 backdrop-blur-sm rounded-[2.5rem] p-10 lg:p-16 border-2 border-accent/10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-accent/10 px-5 py-2.5 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-accent font-quicksand font-bold text-sm tracking-wide">Expertise</span>
                </div>
                <h3 className="font-quicksand text-3xl lg:text-4xl font-bold text-[#581b04]">Areas of Expertise</h3>
              </div>

              {/* Pill-style expertise badges */}
              <div className="flex flex-wrap justify-center gap-3">
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
                    className="group/pill relative px-4 py-2 rounded-full border-2 border-[#581b04]/30 hover:border-[#581b04]/50 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white"
                  >
                    {/* Hover gradient background */}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover/pill:opacity-100 transition-opacity duration-300 bg-[#581b04]/5" />

                    <p className="relative font-nunito text-sm font-medium text-[#581b04]/80 group-hover/pill:text-[#581b04] group-hover/pill:font-bold transition-all">
                      {expertise.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 lg:px-8 lg:py-32 relative overflow-hidden bg-complementary/80">
        {/* Organic background shapes */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] opacity-10">
          <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M300 100 Q450 150 500 300 Q550 450 400 550 Q250 600 150 500 Q50 400 100 250 Q150 100 300 100 Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] opacity-10">
          <svg viewBox="0 0 450 450" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="225" cy="225" rx="180" ry="200" fill="white" />
          </svg>
        </div>

        {/* Decorative dots */}
        <div className="absolute top-32 right-32 w-3 h-3 rounded-full bg-white/30 animate-pulse" />
        <div className="absolute bottom-40 left-40 w-2 h-2 rounded-full bg-white/20" />
        <div
          className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-white/25 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="max-w-5xl mx-auto relative">
          <div className="relative rounded-[2.5rem] bg-white/95 backdrop-blur-sm shadow-2xl p-12 lg:p-20 border border-white/20">
            {/* Decorative corner accents */}
            <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-secondary/20 rounded-tr-[2.5rem]" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-accent/20 rounded-bl-[2.5rem]" />

            <div className="text-center space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/10 border border-secondary/20">
                  <Heart className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-bold text-secondary font-quicksand tracking-wide">Let's Connect</span>
                </div>

                <h2 className="font-quicksand text-4xl lg:text-5xl font-bold text-[#581b04] leading-tight">
                  Let's create your family's rhythm together
                </h2>
                <p className="text-xl text-black/70 leading-relaxed font-light font-nunito max-w-2xl mx-auto">
                  Parent-led, experience-based support tailored to your unique needs
                </p>
              </div>

              {/* Decorative divider */}
              <div className="flex items-center justify-center gap-3 py-4">
                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-secondary/30" />
                <div className="w-2 h-2 rounded-full bg-secondary/50" />
                <div className="w-16 h-[2px] bg-secondary/30" />
                <div className="w-2 h-2 rounded-full bg-accent/50" />
                <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-secondary/30" />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-complementary hover:bg-complementary/90 text-white font-quicksand text-lg px-10 py-7 h-auto rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-complementary text-complementary hover:bg-complementary/70! bg-transparent font-quicksand text-lg px-10 py-7 h-auto rounded-full font-bold transition-all hover:scale-105"
                >
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-sm text-foreground/60 font-nunito">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <span className="font-medium">Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-complementary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-complementary" />
                  </div>
                  <span className="font-medium">No obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <span className="font-medium">Quick response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

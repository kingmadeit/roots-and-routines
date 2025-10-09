import type { Metadata } from "next"
import Link from "next/link"
import { Heart, Lightbulb, Users, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ValuesCard } from "@/components/ValuesCard"

export const metadata: Metadata = {
  title: "Meet the Founder | Roots & Routines",
  description: "Learn about the experience and passion behind Roots & Routines Family Concierge.",
}

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-32 lg:px-8 lg:pt-32 lg:pb-40 overflow-hidden">
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
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-accent/20">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-medium text-sm tracking-wide">Meet the Founder</span>
            </div>

            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="font-quicksand text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[0.95]">
                Helping families
                <br />
                <span className="text-accent italic font-nunito font-light">thrive</span>
              </h1>

              <p className="text-2xl md:text-3xl text-foreground/60 leading-relaxed font-nunito font-light max-w-3xl mx-auto">
                Years of hands-on experience combined with strategic thinking
              </p>
            </div>

            {/* Decorative element */}
            <div className="flex items-center justify-center gap-3 pt-4">
              <div className="h-px w-16 bg-accent" />
              <p className="text-sm uppercase tracking-widest text-accent font-medium font-quicksand">
                Not just survive
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

      {/* Journey Section */}
      <section className="px-6 py-24 lg:px-8 lg:py-32 bg-white/40">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-8">
                <div className="w-12 h-1 bg-accent rounded-full" />

                <h2 className="font-quicksand text-4xl lg:text-5xl font-bold text-foreground leading-tight">
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

                  <p className="text-xl text-foreground/70 leading-relaxed font-light">
                    With you as the lead, let's build your family's rhythm together.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-8 space-y-6">
                <div className="relative bg-white rounded-3xl p-8 border-2 border-accent/20 shadow-xl overflow-hidden">
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-complementary/5 rounded-full blur-2xl" />

                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="font-quicksand text-2xl font-bold text-foreground">Core Values</h3>
                    </div>

                    <div className="space-y-4">
                      {[
                        { label: "Parent-led approach", color: "#ca6c28" },
                        { label: "Experience-based", color: "#bc9b0a" },
                        { label: "Strategic thinking", color: "#788a68" },
                        { label: "Hands-on expertise", color: "#a3b185" },
                        { label: "Personalized support", color: "#ca6c28" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 group/item p-3 rounded-xl hover:bg-primary/50 transition-all duration-300"
                        >
                          <div className="relative">
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300"
                              style={{ backgroundColor: `${item.color}15` }}
                            >
                              <CheckCircle2 className="w-5 h-5" style={{ color: item.color }} />
                            </div>
                          </div>
                          <p className="text-foreground/80 font-nunito group-hover/item:text-foreground transition-colors">
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
          <div className="max-w-3xl mb-20">
            <h2 className="font-quicksand text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              What I bring to your family
            </h2>
            <p className="text-xl text-foreground/60 leading-relaxed font-light">
              A unique combination of heart, strategy, and hands-on experience
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
            <ValuesCard
              icon={Heart}
              title="Heart"
              description="Deep passion for child wellbeing and genuine care for every family's unique journey"
              gradientId="gradientHeart"
              gradientFrom="#ca6c28"
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
                <h3 className="font-quicksand text-3xl lg:text-4xl font-bold text-foreground">Areas of Expertise</h3>
              </div>

              {/* Pill-style expertise badges */}
              <div className="flex flex-wrap justify-center gap-4">
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
                    className="group/pill relative px-8 py-4 rounded-full border-2 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white"
                    style={{ borderColor: `${expertise.color}40` }}
                  >
                    {/* Hover gradient background */}
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover/pill:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: `${expertise.color}08` }}
                    />

                    <p
                      className="relative font-nunito font-medium text-foreground/80 group-hover/pill:font-bold transition-all"
                      style={{ color: expertise.color }}
                    >
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

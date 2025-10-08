

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
    <main className="min-h-screen bg-brand-primary">
      <section className="relative px-6 pt-24 pb-32 lg:px-8 lg:pt-32 lg:pb-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-brand-accent/20 via-brand-complementary/20 to-brand-secondary/20 rounded-[3rem] blur-3xl" />
                <div className="relative aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br from-brand-secondary via-brand-secondary-light to-brand-accent overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-6 p-12">
                      <Heart className="w-24 h-24 text-white/20 mx-auto" />
                      <p className="text-white text-3xl font-serif font-light">Heart meets strategy</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-brand-accent/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                  <span className="text-brand-accent font-medium text-sm tracking-wide">Meet the Founder</span>
                </div>

                <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground leading-[0.95]">
                  Helping families
                  <br />
                  <span className="text-brand-accent italic">thrive</span>
                </h1>
              </div>

              <p className="text-2xl md:text-3xl text-foreground/60 leading-relaxed font-light">
                Years of hands-on experience combined with strategic thinking
              </p>

              <div className="flex items-center gap-3 pt-4">
                <div className="h-px w-16 bg-brand-accent" />
                <p className="text-sm uppercase tracking-widest text-brand-accent font-medium">Not just survive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8 lg:py-32 bg-white/40">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-8">
                <div className="w-12 h-1 bg-brand-accent rounded-full" />

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

                  <div className="relative p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-brand-accent to-[#d97d3f] overflow-hidden my-12">
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
                <div className="bg-white rounded-2xl p-8 border border-brand-accent/10 shadow-lg">
                  <h3 className="font-serif text-2xl text-foreground mb-6">Core Values</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Parent-led approach", icon: "👨‍👩‍👧" },
                      { label: "Experience-based", icon: "⭐" },
                      { label: "Strategic thinking", icon: "🎯" },
                      { label: "Hands-on expertise", icon: "🤝" },
                      { label: "Personalized support", icon: "💚" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 group">
                        <span className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</span>
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
            <div className="relative p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-brand-accent to-[#d97d3f] overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative">
                <Heart className="w-14 h-14 text-white/90 mb-8" />
                <h3 className="font-serif text-3xl text-white mb-4">Heart</h3>
                <p className="text-white/90 text-lg leading-relaxed font-light">
                  Deep passion for child wellbeing and genuine care for every family's unique journey
                </p>
              </div>
            </div>

            <div className="relative p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-brand-complementary to-[#d4b00b] overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              <div className="relative">
                <Lightbulb className="w-14 h-14 text-white/90 mb-8" />
                <h3 className="font-serif text-3xl text-white mb-4">Strategy</h3>
                <p className="text-white/90 text-lg leading-relaxed font-light">
                  Research, admin and logistics expertise to create systems that actually work
                </p>
              </div>
            </div>

            <div className="relative p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-brand-secondary to-brand-secondary-light overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
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

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-10 lg:p-16 border border-brand-accent/10">
            <h3 className="font-serif text-3xl text-foreground mb-12 text-center">Areas of Expertise</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Nannying & Childcare",
                "Nutrition & Meal Planning",
                "Office Management",
                "Household Management",
                "Research & Analysis",
                "Administrative Systems",
                "Logistics & Planning",
                "Family Support Services",
              ].map((expertise, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-brand-accent/10 hover:border-brand-accent/30 hover:-translate-y-1"
                >
                  <p className="text-foreground/80 font-light group-hover:text-brand-accent transition-colors">
                    {expertise}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-brand-secondary via-brand-secondary-light to-brand-secondary shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-accent/20 via-transparent to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-complementary/10 rounded-full blur-3xl" />

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
                    className="bg-white hover:bg-white/90 text-brand-secondary text-lg px-10 py-7 h-auto rounded-full font-medium shadow-xl hover:shadow-2xl transition-all hover:scale-105"
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


// export default function FounderPage() {
//   return (
//     <div className="mt-40 container text-accent min-h-screen">
//       <p className="font-bold text-lg leading-10 text-center md:max-w-[50%] md:mx-auto">
//         With years of hands-on experience in nannying, nutrition, office and household management and a deep passion for child wellbeing and family support I created Roots & Routines to help families thrive, not just survive.

//         Whether it`&apos;s building nourishing routines, finding the right nanny or planning meals that work for your lifestyle - I`&apos;ve seen firsthand how a bit of guidance can create lasting ease and joy at home.

//         My background also includes research, admin and logistics, which means with me you`&apos;re not just getting heart you`&apos;re getting strategy.

//         With you as the lead let`&apos;s build your family`&apos;s rhythm together
//       </p>
//     </div>
//   );
// }
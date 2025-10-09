import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Heart, Sparkles, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
    title: "About Us | Roots & Routines",
    description: "Every family deserves tailored support to feel grounded, balanced and at ease in their daily lives.",
}

export default function ClientAboutPage() {
    return (
        <main className="min-h-screen bg-primary">
            {/* Hero Section */}
            <section className="relative px-6 pt-24 pb-32 lg:px-8 lg:pt-32 lg:pb-40 overflow-hidden">
                <div className="absolute top-20 right-0 w-96 h-96 opacity-30">
                    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M200 50C250 50 300 80 320 130C340 180 330 240 290 280C250 320 180 340 130 320C80 300 40 250 40 190C40 130 90 50 200 50Z"
                            fill="url(#gradient1)"
                        />
                        <defs>
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ca6c28" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#bc9b0a" stopOpacity="0.2" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="mx-auto max-w-[1400px]">
                    <div className="grid lg:grid-cols-12 gap-16 items-end">
                        <div className="lg:col-span-7 space-y-8 relative z-10">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-accent/20">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                    <span className="text-accent font-medium text-sm tracking-wide">About Roots & Routines</span>
                                </div>

                                <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground leading-[0.95]">
                                    Every family
                                    <br />
                                    <span className="text-accent italic">deserves support</span>
                                </h1>
                            </div>

                            <p className="text-2xl md:text-3xl text-foreground/60 leading-relaxed max-w-2xl font-light">
                                Tailored guidance to help you feel grounded, balanced, and at ease in daily life
                            </p>

                            <div className="flex items-center gap-3 pt-4">
                                <div className="h-px w-16 bg-accent" />
                                <p className="text-sm uppercase tracking-widest text-accent font-medium">
                                    Parent-led · Experience-based
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 via-complementary/20 to-secondary/20 rounded-[2rem] blur-2xl" />
                                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-accent/10 shadow-xl">
                                    <div className="w-full h-48 mb-6">
                                        <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                            <circle cx="100" cy="75" r="40" fill="#f0bf99" opacity="0.3" />
                                            <path
                                                d="M100 45 L110 65 L130 70 L115 85 L118 105 L100 95 L82 105 L85 85 L70 70 L90 65 Z"
                                                fill="#ca6c28"
                                            />
                                            <circle cx="60" cy="60" r="15" fill="#788a68" opacity="0.4" />
                                            <circle cx="140" cy="90" r="20" fill="#bc9b0a" opacity="0.3" />
                                            <path d="M50 120 Q100 100 150 120" stroke="#ca6c28" strokeWidth="2" fill="none" />
                                        </svg>
                                    </div>
                                    <p className="text-xl text-foreground/80 leading-relaxed font-light">
                                        Founded with care and intention to help families create smoother routines and confident decisions
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="px-6 py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-[1400px]">
                    <div className="grid lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-4 flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-1 bg-accent rounded-full mb-8" />
                                <h2 className="font-serif text-4xl lg:text-5xl font-light text-foreground leading-tight">
                                    Our
                                    <br />
                                    Philosophy
                                </h2>
                            </div>

                            <div className="hidden lg:block mt-12">
                                <div className="flex items-center gap-4">
                                    <Heart className="w-8 h-8 text-accent" />
                                    <div className="h-px flex-1 bg-accent/30" />
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-8 space-y-8">
                            <div className="prose prose-xl max-w-none">
                                <p className="text-2xl text-foreground/80 leading-relaxed font-light mb-8">
                                    At Roots & Routines we believe every family deserves tailored support to feel grounded, balanced and
                                    at ease in their daily lives.
                                </p>

                                <p className="text-xl text-foreground/70 leading-relaxed font-light">
                                    Our support is parent-led and experience-based. Roots and Routines Family Concierge is a personalised
                                    service dedicated to helping families create smoother home routines, find trusted support and make
                                    confident decisions for their child's wellbeing.
                                </p>
                            </div>

                            <div className="relative mt-12 p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-secondary via-secondary-light to-secondary overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
                                <div className="relative">
                                    <p className="text-2xl lg:text-3xl text-white leading-relaxed font-light">
                                        From school searches to nanny placements, from nutritional meal prep to activity planning—we're here
                                        to take the stress out of the everyday so you can focus on what matters most:{" "}
                                        <span className="font-medium">connection, calm and quality time.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="px-6 py-24 lg:px-8 lg:py-32 bg-white/40">
                <div className="mx-auto max-w-[1400px]">
                    <div className="max-w-3xl mb-20">
                        <h2 className="font-serif text-5xl lg:text-6xl font-light text-foreground mb-6 leading-tight">
                            How we support your family
                        </h2>
                        <p className="text-xl text-foreground/60 leading-relaxed font-light">
                            Comprehensive, personalized services designed around your unique needs and rhythm
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "School Searches",
                                description:
                                    "Finding the perfect educational environment that aligns with your values and your child's needs",
                                color: "from-secondary to-secondary-light",
                                svgPath:
                                    "M100 30 L140 50 L140 110 L100 130 L60 110 L60 50 Z M100 60 L120 70 L120 100 L100 110 L80 100 L80 70 Z",
                            },
                            {
                                title: "Nanny Placements",
                                description: "Connecting you with trusted, qualified caregivers who become part of your family",
                                color: "from-accent to-[#d97d3f]",
                                svgPath:
                                    "M100 40 C120 40 135 55 135 75 C135 95 120 110 100 110 C80 110 65 95 65 75 C65 55 80 40 100 40 Z M70 120 L130 120 L125 150 L75 150 Z",
                            },
                            {
                                title: "Nutritional Meal Prep",
                                description: "Tailored meal planning that nourishes your family and fits your lifestyle",
                                color: "from-complementary to-[#d4b00b]",
                                svgPath:
                                    "M100 30 L130 60 L130 100 C130 120 115 135 100 135 C85 135 70 120 70 100 L70 60 Z M85 70 L115 70 M85 90 L115 90",
                            },
                            {
                                title: "Activity Planning",
                                description: "Enriching experiences and routines that support development and joy",
                                color: "from-secondary-light to-secondary",
                                svgPath: "M100 40 L110 70 L140 75 L115 95 L120 125 L100 110 L80 125 L85 95 L60 75 L90 70 Z",
                            },
                            {
                                title: "Home Routines",
                                description: "Creating sustainable structure that brings ease and flow to daily life",
                                color: "from-[#d97d3f] to-accent",
                                svgPath: "M100 30 L150 70 L140 70 L140 130 L60 130 L60 70 L50 70 Z M85 90 L115 90 M85 110 L115 110",
                            },
                            {
                                title: "Family Guidance",
                                description: "Strategic support for confident parenting decisions and household management",
                                color: "from-secondary to-accent",
                                svgPath:
                                    "M100 50 C115 50 127 62 127 77 C127 92 115 104 100 104 C85 104 73 92 73 77 C73 62 85 50 100 50 Z M100 104 L100 130 M80 115 L100 130 L120 115",
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-accent/10 hover:border-accent/30 hover:-translate-y-2 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="50" cy="50" r="40" fill="url(#serviceGrad)" opacity="0.1" />
                                        <defs>
                                            <linearGradient id="serviceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#ca6c28" />
                                                <stop offset="100%" stopColor="#bc9b0a" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>

                                <div className="relative">
                                    <div className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                            <path d={service.svgPath} fill="#ca6c28" opacity="0.8" />
                                        </svg>
                                    </div>
                                    <h3 className="font-serif text-2xl text-foreground mb-4 group-hover:text-accent transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-foreground/70 leading-relaxed font-light">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="px-6 py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-[1400px]">
                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                        <div className="relative p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-accent to-[#d97d3f] overflow-hidden group hover:shadow-2xl transition-all duration-500">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                            <div className="relative">
                                <Heart className="w-12 h-12 text-white/90 mb-8" />
                                <h3 className="font-serif text-3xl text-white mb-4">Connection</h3>
                                <p className="text-white/90 text-lg leading-relaxed font-light">
                                    Building meaningful relationships and trust with every family we support
                                </p>
                            </div>
                        </div>

                        <div className="relative p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-secondary to-secondary-light overflow-hidden group hover:shadow-2xl transition-all duration-500">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                            <div className="relative">
                                <Sparkles className="w-12 h-12 text-white/90 mb-8" />
                                <h3 className="font-serif text-3xl text-white mb-4">Calm</h3>
                                <p className="text-white/90 text-lg leading-relaxed font-light">
                                    Creating peaceful routines that reduce stress and bring ease to your days
                                </p>
                            </div>
                        </div>

                        <div className="relative p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-complementary to-[#d4b00b] overflow-hidden group hover:shadow-2xl transition-all duration-500">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                            <div className="relative">
                                <Users className="w-12 h-12 text-white/90 mb-8" />
                                <h3 className="font-serif text-3xl text-white mb-4">Quality Time</h3>
                                <p className="text-white/90 text-lg leading-relaxed font-light">
                                    Freeing you to focus on what truly matters—being present with your family
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-[1400px]">
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-secondary via-secondary-light to-secondary shadow-2xl">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />

                        <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-0">
                            <div className="p-12 lg:p-16 flex flex-col justify-center">
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="font-serif text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                                            Ready to bring more ease to your family life?
                                        </h2>
                                        <p className="text-xl text-white/90 leading-relaxed font-light">
                                            Discover the heart and experience behind Roots & Routines
                                        </p>
                                    </div>

                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-white hover:bg-white/90 text-secondary text-lg px-10 py-7 h-auto rounded-full font-medium shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-fit"
                                    >
                                        <Link href="/founder" className="inline-flex items-center gap-3">
                                            Meet the Founder
                                            <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="hidden lg:flex items-center justify-center p-16 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
                                <svg
                                    viewBox="0 0 300 300"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-full max-w-sm"
                                >
                                    <circle cx="150" cy="150" r="100" fill="white" opacity="0.1" />
                                    <path
                                        d="M150 80 L170 120 L210 130 L180 160 L188 200 L150 178 L112 200 L120 160 L90 130 L130 120 Z"
                                        fill="white"
                                        opacity="0.3"
                                    />
                                    <circle cx="100" cy="100" r="30" fill="white" opacity="0.15" />
                                    <circle cx="200" cy="180" r="40" fill="white" opacity="0.1" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

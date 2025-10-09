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

                                <h1 className="font-quicksand text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[0.95]">
                                    Every family
                                    <br />
                                    <span className="text-accent italic font-light">deserves support</span>
                                </h1>
                            </div>

                            <p className="text-2xl md:text-3xl text-foreground/60 leading-relaxed font-light">
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
                                <h2 className="font-quicksand text-4xl lg:text-5xl font-bold text-foreground leading-tight">
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

                            <div className="relative mt-12 p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-complementary via-[#d4b00b] to-complementary overflow-hidden">
                                <div className="absolute top-8 left-8 opacity-10">
                                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M25 55C25 38.4315 38.4315 25 55 25V25C55 41.5685 41.5685 55 25 55V55Z"
                                            fill="white"
                                            fillOpacity="0.5"
                                        />
                                        <path
                                            d="M25 95C25 78.4315 38.4315 65 55 65V65C55 81.5685 41.5685 95 25 95V95Z"
                                            fill="white"
                                            fillOpacity="0.5"
                                        />
                                        <path
                                            d="M65 55C65 38.4315 78.4315 25 95 25V25C95 41.5685 81.5685 55 65 55V55Z"
                                            fill="white"
                                            fillOpacity="0.5"
                                        />
                                        <path
                                            d="M65 95C65 78.4315 78.4315 65 95 65V65C95 81.5685 81.5685 95 65 95V95Z"
                                            fill="white"
                                            fillOpacity="0.5"
                                        />
                                    </svg>
                                </div>
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
                                <div className="relative">
                                    <p className="text-2xl lg:text-3xl text-white leading-relaxed font-light">
                                        From school searches to nanny placements, from nutritional meal prep to activity planning—we're here
                                        to take the stress out of the everyday so you can focus on what matters most:{" "}
                                        <span className="font-medium italic">connection, calm and quality time.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="px-6 py-24 lg:px-8 lg:py-32 bg-white/40 relative overflow-hidden">
                <div className="absolute top-20 left-0 w-96 h-96 opacity-20">
                    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M200 50C250 50 300 80 320 130C340 180 330 240 290 280C250 320 180 340 130 320C80 300 40 250 40 190C40 130 90 50 200 50Z"
                            fill="url(#servicesBg1)"
                        />
                        <defs>
                            <linearGradient id="servicesBg1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#788a68" />
                                <stop offset="100%" stopColor="#a3b185" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="mx-auto max-w-[1400px] relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-accent/20 mb-8">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            <span className="text-accent font-medium text-sm tracking-wide">Our Services</span>
                        </div>

                        <h2 className="font-nunito text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            How we support your family
                        </h2>
                        <p className="text-xl text-foreground/60 leading-relaxed font-light mb-12">
                            From school searches to nanny placements, from nutritional meal prep to activity planning—comprehensive
                            support designed around your unique needs
                        </p>

                        <Link
                            href="/services"
                            className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white font-quicksand text-lg px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                        >
                            Explore All Services
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="px-6 py-24 lg:px-8 lg:py-32 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-10">
                    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M250 100C320 100 380 140 410 200C440 260 430 340 370 400C310 460 210 480 150 450C90 420 40 350 40 270C40 190 120 100 250 100Z"
                            fill="url(#valuesBg)"
                        />
                        <defs>
                            <linearGradient id="valuesBg" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ca6c28" />
                                <stop offset="50%" stopColor="#788a68" />
                                <stop offset="100%" stopColor="#bc9b0a" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="mx-auto max-w-[1400px] relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="font-quicksand text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Core Values</h2>
                        <p className="text-xl text-foreground/60 font-light">The principles that guide everything we do</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Connection Card */}
                        <div className="group relative">
                            {/* Decorative SVG frame */}
                            <svg
                                className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                                viewBox="0 0 400 500"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M50 50 Q50 50 50 100 L50 400 Q50 450 100 450 L300 450 Q350 450 350 400 L350 100 Q350 50 300 50 L100 50 Q50 50 50 50"
                                    stroke="url(#gradientConnection)"
                                    strokeWidth="3"
                                    fill="none"
                                    strokeDasharray="10 5"
                                />
                                <defs>
                                    <linearGradient id="gradientConnection" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ca6c28" />
                                        <stop offset="100%" stopColor="#d97d3f" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <div className="relative p-10 lg:p-12 rounded-3xl border-2 border-accent/20 hover:border-accent/40 transition-all duration-500 bg-white/60 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-2">
                                {/* Decorative corner elements */}
                                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent/40 rounded-tl-xl" />
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent/40 rounded-br-xl" />

                                <div className="relative">
                                    <div className="w-16 h-16 rounded-2xl border-2 border-accent/30 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 bg-accent/5">
                                        <Heart className="w-8 h-8 text-accent" />
                                    </div>
                                    <h3 className="font-quicksand text-3xl font-bold text-accent mb-4">Connection</h3>
                                    <p className="text-foreground/70 text-lg leading-relaxed font-light">
                                        Building meaningful relationships and trust with every family we support
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Calm Card */}
                        <div className="group relative">
                            {/* Decorative SVG frame */}
                            <svg
                                className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                                viewBox="0 0 400 500"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M50 50 Q50 50 50 100 L50 400 Q50 450 100 450 L300 450 Q350 450 350 400 L350 100 Q350 50 300 50 L100 50 Q50 50 50 50"
                                    stroke="url(#gradientCalm)"
                                    strokeWidth="3"
                                    fill="none"
                                    strokeDasharray="10 5"
                                />
                                <defs>
                                    <linearGradient id="gradientCalm" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#788a68" />
                                        <stop offset="100%" stopColor="#a3b185" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <div className="relative p-10 lg:p-12 rounded-3xl border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-500 bg-white/60 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-2">
                                {/* Decorative corner elements */}
                                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-secondary/40 rounded-tl-xl" />
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-secondary/40 rounded-br-xl" />

                                <div className="relative">
                                    <div className="w-16 h-16 rounded-2xl border-2 border-secondary/30 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 bg-secondary/5">
                                        <Sparkles className="w-8 h-8 text-secondary" />
                                    </div>
                                    <h3 className="font-quicksand text-3xl font-bold text-secondary mb-4">Calm</h3>
                                    <p className="text-foreground/70 text-lg leading-relaxed font-light">
                                        Creating peaceful routines that reduce stress and bring ease to your days
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quality Time Card */}
                        <div className="group relative">
                            {/* Decorative SVG frame */}
                            <svg
                                className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                                viewBox="0 0 400 500"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M50 50 Q50 50 50 100 L50 400 Q50 450 100 450 L300 450 Q350 450 350 400 L350 100 Q350 50 300 50 L100 50 Q50 50 50 50"
                                    stroke="url(#gradientQuality)"
                                    strokeWidth="3"
                                    fill="none"
                                    strokeDasharray="10 5"
                                />
                                <defs>
                                    <linearGradient id="gradientQuality" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#bc9b0a" />
                                        <stop offset="100%" stopColor="#d4b00b" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <div className="relative p-10 lg:p-12 rounded-3xl border-2 border-complementary/20 hover:border-complementary/40 transition-all duration-500 bg-white/60 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-2">
                                {/* Decorative corner elements */}
                                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-complementary/40 rounded-tl-xl" />
                                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-complementary/40 rounded-br-xl" />

                                <div className="relative">
                                    <div className="w-16 h-16 rounded-2xl border-2 border-complementary/30 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 bg-complementary/5">
                                        <Users className="w-8 h-8 text-complementary" />
                                    </div>
                                    <h3 className="font-quicksand text-3xl font-bold text-complementary mb-4">Quality Time</h3>
                                    <p className="text-foreground/70 text-lg leading-relaxed font-light">
                                        Freeing you to focus on what truly matters—being present with your family
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-[1400px]">
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary via-complementary to-secondary-light">
                        <div className="absolute inset-0 opacity-20">
                            <svg viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                <path
                                    d="M600 50C680 50 750 90 780 160C810 230 790 320 720 370C650 420 540 430 470 400C400 370 350 300 350 220C350 140 480 50 600 50Z"
                                    fill="white"
                                    opacity="0.3"
                                />
                                <circle cx="200" cy="200" r="100" fill="white" opacity="0.2" />
                            </svg>
                        </div>

                        <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-0">
                            <div className="p-12 lg:p-16 flex flex-col justify-center">
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="font-nunito text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                            Ready to bring more ease to your family life?
                                        </h2>
                                        <p className="text-xl text-white/90 leading-relaxed font-light">
                                            Discover the heart and experience behind Roots & Routines
                                        </p>
                                    </div>

                                    <Button
                                        asChild
                                        size="lg"
                                        className="bg-white hover:bg-white/90 text-secondary font-quicksand text-lg px-10 py-7 h-auto rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-fit"
                                    >
                                        <Link href="/founder" className="inline-flex items-center gap-3">
                                            Meet the Founder
                                            <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="hidden lg:flex items-center justify-center p-16 relative">
                                <svg
                                    viewBox="0 0 300 300"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-full max-w-sm"
                                >
                                    <circle cx="150" cy="150" r="100" fill="white" opacity="0.15" />
                                    <path
                                        d="M150 80 L170 120 L210 130 L180 160 L188 200 L150 178 L112 200 L120 160 L90 130 L130 120 Z"
                                        fill="white"
                                        opacity="0.4"
                                    />
                                    <circle cx="100" cy="100" r="30" fill="white" opacity="0.2" />
                                    <circle cx="200" cy="180" r="40" fill="white" opacity="0.15" />
                                    <path d="M80 200 Q150 180 220 200" stroke="white" strokeWidth="3" opacity="0.3" fill="none" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

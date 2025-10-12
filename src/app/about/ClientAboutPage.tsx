import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Heart, Sparkles, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ValuesCard } from "@/components/ValuesCard"

export const metadata: Metadata = {
    title: "About Us | Roots & Routines",
    description: "Every family deserves tailored support to feel grounded, balanced and at ease in their daily lives.",
}

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-primary/60 pt-32 lg:pt-0">
            {/* Hero Section */}
            <section className="relative px-6 pt-24 pb-32 lg:px-8 lg:pt-55 lg:pb-40 overflow-hidden">
                <div className="absolute top-20 right-0 w-96 h-96 opacity-20">
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

                <div className="mx-auto text-left relative max-w-[1400px]">
                    <div className="flex items-center gap-16 ">
                        <div className=" space-y-8 relative ">
                            <div className="space-y-6">
                                <h1 className="font-quicksand text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-complementary leading-[0.95]">
                                    Every family
                                    <br />
                                    <span className="text-accent italic font-light">deserves support</span>
                                </h1>
                            </div>

                            <p className="text-2xl md:text-3xl text-[#581b04]/60 leading-relaxed font-light">
                                Tailored guidance to help you feel grounded, balanced, and at ease in daily life
                            </p>

                            <div className="flex items-center gap-3 pt-4">
                                <div className="h-px w-16 bg-accent" />
                                <p className="text-sm uppercase tracking-widest text-accent font-medium">
                                    Parent-led · Experience-based
                                </p>
                            </div>
                        </div>

                        <div className="absolute opacity-30 lg:opacity-90 -bottom-70 -right-40 lg:static lg:block backdrop-blur-sm rounded-3xl p-10 w-full max-w-sm lg:max-w-lg aspect-square mb-6">
                            <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-lg">
                                {/* Background circle */}
                                <circle cx="150" cy="150" r="130" fill="#788a68" opacity="0.12" />

                                {/* Main organic shape */}
                                <path
                                    d="M 150 60 Q 195 75 215 120 Q 235 165 210 205 Q 185 245 140 240 Q 95 235 75 195 Q 55 155 70 115 Q 85 75 130 65 Q 145 60 150 60 Z"
                                    fill="#ca6c28"
                                    opacity="0.85"
                                />

                                {/* Inner accent shape */}
                                <path
                                    d="M 150 100 Q 175 110 185 135 Q 195 160 180 180 Q 165 200 145 195 Q 120 185 110 160 Q 100 135 115 115 Q 130 95 150 100 Z"
                                    fill="#f0bf99"
                                    opacity="0.75"
                                />

                                {/* Decorative dots */}
                                <circle cx="150" cy="150" r="7" fill="#fff8a9" />
                                <circle cx="125" cy="135" r="5" fill="#bc9b0a" opacity="0.7" />
                                <circle cx="175" cy="145" r="6" fill="#a3b185" opacity="0.7" />
                                <circle cx="140" cy="175" r="4" fill="#fdf2e0" />
                                <circle cx="165" cy="125" r="4" fill="#ca6c28" opacity="0.5" />

                                {/* Leaf-like elements */}
                                <path
                                    d="M 150 150 Q 165 125 180 115"
                                    stroke="#788a68"
                                    strokeWidth="2.5"
                                    fill="none"
                                    strokeLinecap="round"
                                />
                                <ellipse
                                    cx="185"
                                    cy="110"
                                    rx="7"
                                    ry="13"
                                    fill="#a3b185"
                                    opacity="0.75"
                                    transform="rotate(45 185 110)"
                                />

                                <path
                                    d="M 150 150 Q 130 170 115 185"
                                    stroke="#788a68"
                                    strokeWidth="2.5"
                                    fill="none"
                                    strokeLinecap="round"
                                />
                                <ellipse
                                    cx="110"
                                    cy="190"
                                    rx="7"
                                    ry="13"
                                    fill="#a3b185"
                                    opacity="0.75"
                                    transform="rotate(-30 110 190)"
                                />

                                {/* Heart icon integrated into design */}
                                <g transform="translate(150, 150)">
                                    <circle cx="0" cy="0" r="22" fill="white" opacity="0.95" />
                                    <path
                                        d="M 0 -5 L -6 -11 Q -10 -15 -10 -10 Q -10 -5 -6 -1 L 0 5 L 6 -1 Q 10 -5 10 -10 Q 10 -15 6 -11 Z"
                                        fill="#ca6c28"
                                    />
                                </g>

                                {/* Sparkle elements */}
                                <g transform="translate(190, 120)">
                                    <path
                                        d="M 0 -4 L 1 -1 L 4 0 L 1 1 L 0 4 L -1 1 L -4 0 L -1 -1 Z"
                                        fill="#bc9b0a"
                                        opacity="0.8"
                                    />
                                </g>
                                <g transform="translate(110, 130)">
                                    <path
                                        d="M 0 -3 L 0.7 -0.7 L 3 0 L 0.7 0.7 L 0 3 L -0.7 0.7 L -3 0 L -0.7 -0.7 Z"
                                        fill="#ca6c28"
                                        opacity="0.6"
                                    />
                                </g>
                            </svg>

                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="px-6 py-24 bg-white/40 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-[1400px]">
                    <div className="grid lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-4 flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-1 bg-accent rounded-full mb-8" />
                                <h2 className="font-quicksand text-4xl lg:text-5xl font-bold text-[#581b04] leading-tight">
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
                                <p className="text-2xl text-[#581b04]/80 leading-relaxed font-light mb-8">
                                    At Roots & Routines we believe every family deserves tailored support to feel grounded, balanced and
                                    at ease in their daily lives.
                                </p>

                                <p className="text-xl text-[#581b04]/70 leading-relaxed font-light">
                                    Our support is parent-led and experience-based. Roots and Routines Family Concierge is a personalised
                                    service dedicated to helping families create smoother home routines, find trusted support and make
                                    confident decisions for their child&apos;s wellbeing.
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
                                        From school searches to nanny placements, from nutritional meal prep to activity planning—we&apos;re here
                                        to take the stress out of the everyday so you can focus on what matters most:{" "}
                                        <span className="font-medium italic">connection, calm and quality time.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
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

                <div className="mx-auto max-w-[1400px] relative ">
                    <div className="text-center mb-16">
                        <h2 className="font-quicksand text-4xl lg:text-5xl font-bold text-[#581b04] mb-4">Our Core Values</h2>
                        <p className="text-xl text-[#581b04]/60 font-light">The principles that guide everything we do</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                        <ValuesCard
                            icon={Heart}
                            title="Connection"
                            description="Building meaningful relationships and trust with every family we support"
                            gradientId="gradientConnection"
                            gradientFrom="#ca6c28"
                            gradientTo="#d97d3f"
                            borderColor="border-accent/20 hover:border-accent/40"
                            iconBgColor="bg-accent/5"
                            titleColor="text-accent"
                        />
                        <ValuesCard
                            icon={Sparkles}
                            title="Calm"
                            description="Creating peaceful routines that reduce stress and bring ease to your days"
                            gradientId="gradientCalm"
                            gradientFrom="#788a68"
                            gradientTo="#a3b185"
                            borderColor="border-secondary/20 hover:border-secondary/40"
                            iconBgColor="bg-secondary/5"
                            titleColor="text-secondary"
                        />
                        <ValuesCard
                            icon={Users}
                            title="Quality Time"
                            description="Freeing you to focus on what truly matters—being present with your family"
                            gradientId="gradientQuality"
                            gradientFrom="#bc9b0a"
                            gradientTo="#d4b00b"
                            borderColor="border-complementary/20 hover:border-complementary/40"
                            iconBgColor="bg-complementary/5"
                            titleColor="text-complementary"
                        />
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

                <div className="mx-auto max-w-[1400px] relative ">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20 mb-8">
                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-sm font-bold text-accent font-quicksand tracking-wide">Our Services</span>
                        </div>

                        <h2 className="font-nunito text-5xl lg:text-6xl font-bold text-[#581b04] mb-6 leading-tight">
                            How we support your family
                        </h2>
                        <p className="text-xl text-[#581b04]/60 leading-relaxed font-light mb-12">
                            From school searches to nanny placements, from nutritional meal prep to activity planning—comprehensive
                            support designed around your unique needs
                        </p>

                        <Link
                            href="/services"
                            className="inline-flex items-center gap-3 bg-complementary hover:bg-complementary/90 text-white font-quicksand text-lg px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-fit"
                        >
                            Explore All Services
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 py-24 lg:px-8 lg:py-32 relative overflow-hidden">
                {/* Organic background shapes */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10">
                    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M250 50 Q350 100 400 200 Q450 300 350 400 Q250 450 150 400 Q50 300 50 200 Q100 100 250 50 Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10">
                    <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="200" cy="200" r="150" fill="white" />
                    </svg>
                </div>

                {/* Decorative dots */}
                <div className="absolute top-20 left-20 w-3 h-3 rounded-full bg-white/30 animate-pulse" />
                <div className="absolute top-40 right-40 w-2 h-2 rounded-full bg-white/20" />
                <div
                    className="absolute bottom-32 left-1/3 w-4 h-4 rounded-full bg-white/25 animate-pulse"
                    style={{ animationDelay: "1s" }}
                />

                <div className="max-w-5xl mx-auto relative ">
                    <div className="relative rounded-[2.5rem] bg-white/95 backdrop-blur-sm shadow-2xl p-12 lg:p-20 border border-white/20">
                        {/* Decorative corner accents */}
                        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-accent/20 rounded-tl-[2.5rem]" />
                        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-complementary/20 rounded-br-[2.5rem]" />

                        <div className="text-center space-y-8">
                            <div className="space-y-6">
                                <h2 className="font-quicksand text-4xl lg:text-5xl font-bold text-[#581b04] leading-tight">
                                    Ready to bring more ease to your family life?
                                </h2>
                                <p className="text-xl text-[#581b04]/70 leading-relaxed font-light font-nunito max-w-2xl mx-auto">
                                    Discover the heart and experience behind Roots & Routines
                                </p>
                            </div>

                            {/* Decorative divider */}
                            <div className="flex items-center justify-center gap-3 py-4">
                                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-accent/30" />
                                <div className="w-2 h-2 rounded-full bg-accent/50" />
                                <div className="w-16 h-[2px] bg-accent/30" />
                                <div className="w-2 h-2 rounded-full bg-complementary/50" />
                                <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-accent/30" />
                            </div>

                            <Button
                                asChild
                                size="lg"
                                className="bg-accent hover:bg-accent/90 text-white font-quicksand text-lg px-10 py-7 h-auto rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-fit"
                            >
                                <Link href="/about/founder" className="inline-flex items-center gap-3">
                                    Meet the Founder
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </Button>

                            {/* Trust indicators */}
                            <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-sm text-[#581b04]/60 font-nunito">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-complementary/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-complementary" />
                                    </div>
                                    <span className="font-medium">Parent-led approach</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-secondary" />
                                    </div>
                                    <span className="font-medium">Experience-based</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-accent" />
                                    </div>
                                    <span className="font-medium">personalised support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

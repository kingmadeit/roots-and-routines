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
        <main className="min-h-screen bg-brand-primary">
            <section className="relative px-6 pt-24 pb-32 lg:px-8 lg:pt-32 lg:pb-40">
                <div className="mx-auto max-w-[1400px]">
                    <div className="grid lg:grid-cols-12 gap-16 items-end">
                        <div className="lg:col-span-7 space-y-8">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-brand-accent/20">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                                    <span className="text-brand-accent font-medium text-sm tracking-wide">About Roots & Routines</span>
                                </div>

                                <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground leading-[0.95]">
                                    Every family
                                    <br />
                                    <span className="text-brand-accent italic">deserves support</span>
                                </h1>
                            </div>

                            <p className="text-2xl md:text-3xl text-foreground/60 leading-relaxed max-w-2xl font-light">
                                Tailored guidance to help you feel grounded, balanced, and at ease in daily life
                            </p>

                            <div className="flex items-center gap-3 pt-4">
                                <div className="h-px w-16 bg-brand-accent" />
                                <p className="text-sm uppercase tracking-widest text-brand-accent font-medium">
                                    Parent-led · Experience-based
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-brand-accent/20 via-brand-complementary/20 to-brand-secondary/20 rounded-[2rem] blur-2xl" />
                                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-brand-accent/10 shadow-xl">
                                    <Sparkles className="w-12 h-12 text-brand-accent mb-6" />
                                    <p className="text-xl text-foreground/80 leading-relaxed font-light">
                                        Founded with care and intention to help families create smoother routines and confident decisions
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-[1400px]">
                    <div className="grid lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-4 flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-1 bg-brand-accent rounded-full mb-8" />
                                <h2 className="font-serif text-4xl lg:text-5xl font-light text-foreground leading-tight">
                                    Our
                                    <br />
                                    Philosophy
                                </h2>
                            </div>

                            <div className="hidden lg:block mt-12">
                                <div className="flex items-center gap-4">
                                    <Heart className="w-8 h-8 text-brand-accent" />
                                    <div className="h-px flex-1 bg-brand-accent/30" />
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

                            <div className="relative mt-12 p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-brand-secondary via-brand-secondary-light to-brand-secondary overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl" />
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
                                color: "from-brand-secondary to-brand-secondary-light",
                                icon: "🎓",
                            },
                            {
                                title: "Nanny Placements",
                                description: "Connecting you with trusted, qualified caregivers who become part of your family",
                                color: "from-brand-accent to-[#d97d3f]",
                                icon: "👥",
                            },
                            {
                                title: "Nutritional Meal Prep",
                                description: "Tailored meal planning that nourishes your family and fits your lifestyle",
                                color: "from-brand-complementary to-[#d4b00b]",
                                icon: "🥗",
                            },
                            {
                                title: "Activity Planning",
                                description: "Enriching experiences and routines that support development and joy",
                                color: "from-brand-secondary-light to-brand-secondary",
                                icon: "✨",
                            },
                            {
                                title: "Home Routines",
                                description: "Creating sustainable structure that brings ease and flow to daily life",
                                color: "from-[#d97d3f] to-brand-accent",
                                icon: "🏡",
                            },
                            {
                                title: "Family Guidance",
                                description: "Strategic support for confident parenting decisions and household management",
                                color: "from-brand-secondary to-brand-accent",
                                icon: "💚",
                            },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-brand-accent/10 hover:border-brand-accent/30 hover:-translate-y-1"
                            >
                                <div
                                    className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
                                    style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
                                />

                                <div className="relative">
                                    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">
                                        {service.icon}
                                    </div>
                                    <h3 className="font-serif text-2xl text-foreground mb-4 group-hover:text-brand-accent transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-foreground/70 leading-relaxed font-light">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-[1400px]">
                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                        <div className="relative p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-brand-accent to-[#d97d3f] overflow-hidden group hover:shadow-2xl transition-all duration-500">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                            <div className="relative">
                                <Heart className="w-12 h-12 text-white/90 mb-8" />
                                <h3 className="font-serif text-3xl text-white mb-4">Connection</h3>
                                <p className="text-white/90 text-lg leading-relaxed font-light">
                                    Building meaningful relationships and trust with every family we support
                                </p>
                            </div>
                        </div>

                        <div className="relative p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-brand-secondary to-brand-secondary-light overflow-hidden group hover:shadow-2xl transition-all duration-500">
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                            <div className="relative">
                                <Sparkles className="w-12 h-12 text-white/90 mb-8" />
                                <h3 className="font-serif text-3xl text-white mb-4">Calm</h3>
                                <p className="text-white/90 text-lg leading-relaxed font-light">
                                    Creating peaceful routines that reduce stress and bring ease to your days
                                </p>
                            </div>
                        </div>

                        <div className="relative p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-brand-complementary to-[#d4b00b] overflow-hidden group hover:shadow-2xl transition-all duration-500">
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

            <section className="px-6 py-24 lg:px-8 lg:py-32">
                <div className="mx-auto max-w-[1400px]">
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-brand-secondary via-brand-secondary-light to-brand-secondary shadow-2xl">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-accent/20 via-transparent to-transparent" />

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
                                        className="bg-white hover:bg-white/90 text-brand-secondary text-lg px-10 py-7 h-auto rounded-full font-medium shadow-xl hover:shadow-2xl transition-all hover:scale-105 w-fit"
                                    >
                                        <Link href="/founder" className="inline-flex items-center gap-3">
                                            Meet the Founder
                                            <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="hidden lg:flex items-center justify-center p-16 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent" />
                                <div className="relative w-64 h-64 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                    <Heart className="w-32 h-32 text-white/30" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}


// const ClientAboutPage = () => {
//     // useInViewObserver({ selector: `.animate-on-scroll` });

//     return (
//         <div className="w-full">
//             <div className="container pt-32">
//                 <p className="text-accent text-xl font-bold leading-10 md:max-w-[50%] mx-auto">
//                     At Roots & Routines we believe every family deserves tailored support to feel grounded, balanced and at ease in their daily lives. Our support is parent led and experience based

//                     Founded with care and intention, Roots and Routines Family Concierge is a personalised service dedicated to helping families create smoother home routines, find trusted support and make confident decisions for their child`&apos;s wellbeing.

//                     From school searches to nanny placements, from nutritional meal prep to activity planning - we`&apos;re here to take the stress out of the everyday so you can focus on what matters most: connection, calm and quality time.
//                 </p>
//                 <MediaBlock src={""} type={"video"} wrapperClassName="bg-complementary/80 rounded-xl p-4 my-24" contentContainerClassName="gradient-container-complementary text-white">
//                     <h1 className=" text-xl relative font-large text-inherit font-nunito hyphens-auto" >
//                         Families today are stretched - and we believe support shouldn`&apos;t be one-size-fits-all. With a background in childcare, nutrition, household management, office management, research skills and administration, Routes & Routines was born to provide modern families with the kind of personal, reliable and thoughtful support they truly deserve.
//                         <Sparkles className="absolute top-[-4rem] right-[50%] w-16 h-16 text-complementary opacity-40" />
//                     </h1>
//                 </MediaBlock>

//             </div>
//         </div>
//     )
// }

// export default ClientAboutPage;
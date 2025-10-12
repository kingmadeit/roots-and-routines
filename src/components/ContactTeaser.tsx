"use client"
// import ContactOptions from "./ContactOptions"
import { Button } from "./ui/button"
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import Link from 'next/link';

const ContactTeaser = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-primary/50 via-primary-light/30 to-primary/50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top right organic shape */}
        <svg className="absolute -top-20 -right-20 w-96 h-96 opacity-20" viewBox="0 0 400 400">
          <path
            d="M 200 50 Q 280 80 320 160 Q 360 240 300 310 Q 240 380 160 350 Q 80 320 60 240 Q 40 160 100 100 Q 160 40 200 50 Z"
            fill="currentColor"
            className="text-accent"
          />
        </svg>

        {/* Bottom left organic shape */}
        <svg className="absolute -bottom-32 -left-32 w-80 h-80 opacity-15" viewBox="0 0 400 400">
          <path
            d="M 200 80 Q 260 100 290 160 Q 320 220 280 280 Q 240 340 180 320 Q 120 300 100 240 Q 80 180 120 130 Q 160 80 200 80 Z"
            fill="currentColor"
            className="text-secondary"
          />
        </svg>

        {/* Center decorative dots */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-complementary/30 animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-accent/20" />
        <div
          className="absolute bottom-1/4 right-1/4 w-4 h-4 rounded-full bg-secondary/20 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-[2.5rem] bg-white/80 backdrop-blur-md shadow-2xl p-8 md:p-12 lg:p-16 border border-secondary/10">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-accent/30 rounded-tl-[2.5rem]" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-secondary/30 rounded-br-[2.5rem]" />

            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary font-quicksand leading-tight text-balance">
                  Prices start from{" "}
                  <span className="text-accent relative inline-block">
                    &#163;60
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-3"
                      viewBox="0 0 200 12"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 0 6 Q 50 0 100 6 T 200 6"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        className="text-accent/30"
                      />
                    </svg>
                  </span>
                </h2>

                <p className="text-lg md:text-xl font-medium text-secondary/80 font-nunito max-w-2xl mx-auto leading-relaxed">
                  Get in touch to get started on your journey to a more organised, joyful home
                </p>
              </div>

              {/* Decorative divider */}
              <div className="flex items-center justify-center gap-3 py-4">
                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-secondary/30" />
                <div className="w-2 h-2 rounded-full bg-accent/50" />
                <div className="w-16 h-[2px] bg-secondary/30" />
                <div className="w-2 h-2 rounded-full bg-complementary/50" />
                <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-secondary/30" />
              </div>
              <Link href="/contact">
                <Button
                  className="mt-4 bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-quicksand group relative overflow-hidden"
                  size="lg"
                >
                  <span className="relative  flex items-center gap-2">
                    Enquire Now
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactTeaser

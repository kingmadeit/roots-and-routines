"use client"
import ContactOptions from "./ContactOptions"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"

type ContactTeaserProps = {
  quote?: string
  founderName?: string
}

const ContactTeaser = ({ quote }: ContactTeaserProps) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-primary via-primary-light/30 to-primary">
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-[2.5rem] bg-white/80 backdrop-blur-md shadow-2xl p-8 md:p-12 lg:p-16 border border-secondary/10">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-accent/30 rounded-tl-[2.5rem]" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-secondary/30 rounded-br-[2.5rem]" />

            <div className="text-center space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-complementary/10 border border-complementary/20">
                <div className="w-2 h-2 rounded-full bg-complementary animate-pulse" />
                <span className="text-sm font-semibold text-secondary font-quicksand">Special Offer</span>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary font-quicksand leading-tight text-balance">
                  Prices start from{" "}
                  <span className="text-accent relative inline-block">
                    €60
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
                  Get in touch to get started on your journey to a more organized, joyful home
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

              {/* CTA Button with Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="mt-4 bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-quicksand group relative overflow-hidden"
                    size="lg"
                  >
                    <span className="relative z-10 flex items-center gap-2">
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
                </DialogTrigger>
                <DialogContent className="bg-secondary/95 backdrop-blur-xl rounded-[2rem] md:max-w-4xl w-[95%] border-2 border-white/10 shadow-2xl">
                  <DialogHeader className="space-y-3">
                    <DialogTitle className="text-2xl md:text-3xl font-bold text-white font-quicksand text-balance">
                      Ready to transform your family&apos;s daily life?
                    </DialogTitle>
                    <DialogDescription className="text-white/80 font-nunito text-base">
                      Choose your preferred way to get in touch with us
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6">
                    <ContactOptions />
                  </div>
                </DialogContent>
              </Dialog>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-secondary/60 font-nunito">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-complementary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-complementary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">No Obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-complementary" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Quick Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactTeaser

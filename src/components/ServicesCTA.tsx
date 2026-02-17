import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ServicesCTA = () => {
  return (
    <div className="mx-auto max-w-5xl relative z-10">
      <div className="relative rounded-[2.5rem] bg-white/95 backdrop-blur-sm shadow-2xl p-12 lg:p-16 border border-white/20">
        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-complementary/20 rounded-tl-[2.5rem]" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-accent/20 rounded-br-[2.5rem]" />

        <div className="text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-complementary/10 border border-complementary/20">
              <Sparkles className="w-4 h-4 text-complementary" />
              <span className="text-sm font-bold text-complementary font-quicksand tracking-wide">
                Get Started
              </span>
            </div>

            {/* Updated text color */}
            <h2 className="font-quicksand text-4xl lg:text-5xl font-bold text-[#581b04] leading-tight">
              Ready to explore how we can support your family?
            </h2>
            {/* Updated text color */}
            <p className="text-xl text-[#581b04]/70 leading-relaxed font-light font-nunito max-w-2xl mx-auto">
              Browse our service categories to find the perfect fit for your
              needs
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 py-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-complementary/30" />
            <div className="w-2 h-2 rounded-full bg-complementary/50" />
            <div className="w-16 h-[2px] bg-complementary/30" />
            <div className="w-2 h-2 rounded-full bg-accent/50" />
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-complementary/30" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/services/wellness-growth"
              className="inline-flex items-center gap-3 bg-complementary hover:bg-complementary/90 text-white font-quicksand text-lg px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
            >
              Wellness & Growth
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services/everyday-support"
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white font-quicksand text-lg px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
            >
              Everyday Support
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services/helping-hands-and-resources"
              className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary/90 text-white font-quicksand text-lg px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
            >
              Helping Hands and Resources
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Updated text color */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 text-sm text-[#581b04]/60 font-nunito">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
              <span className="font-medium">Personalised approach</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-secondary" />
              </div>
              <span className="font-medium">Expert guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-complementary/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-complementary" />
              </div>
              <span className="font-medium">Proven results</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesCTA

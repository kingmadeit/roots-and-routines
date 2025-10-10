import type { Metadata } from "next"
import { siteData } from "@/data"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import FAQ from "@/components/FAQ"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description: "Find answers to common questions about our services and approach",
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-primary/70">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="relative">
            {/* Badge */}
            <div className="inline-block mb-6">
              <div className="bg-accent/10 backdrop-blur-sm rounded-full px-6 py-2 border border-accent/30 shadow-sm">
                <span className="font-quicksand font-bold text-accent text-sm uppercase tracking-wider">
                  Help Center
                </span>
              </div>
            </div>

            {/* Decorative accent line */}
            <div className="absolute -left-8 top-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent to-accent/30 hidden md:block" />
            <div className="absolute -right-8 top-1/2 w-16 h-0.5 bg-gradient-to-l from-transparent to-complementary/30 hidden md:block" />

            <h1 className="font-quicksand text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-accent">How Can We</span>
              <span className="block text-[#581b04] mt-2">Help You?</span>
            </h1>

            {/* Decorative dots */}
            <div className="absolute -top-4 left-1/4 w-2 h-2 rounded-full bg-complementary animate-pulse" />
            <div className="absolute top-8 right-1/4 w-2 h-2 rounded-full bg-accent animate-pulse delay-75" />

            <p className="font-nunito text-lg md:text-xl text-[#581b04]/80 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about our services, process, and how we can support your journey to wellness
              and balance.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ data={siteData.faq} showTitle={false} />

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-accent p-8 md:p-12 text-center shadow-xl">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <svg
                className="absolute -top-10 -right-10 w-64 h-64 opacity-10"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="100" cy="100" r="80" fill="white" />
                <circle cx="140" cy="60" r="40" fill="white" />
              </svg>
              <svg
                className="absolute -bottom-10 -left-10 w-48 h-48 opacity-10"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="100" cy="100" r="60" fill="white" />
              </svg>
            </div>

            <div className="relative z-10">
              <h2 className="font-quicksand text-3xl md:text-4xl font-bold text-white mb-4">Still Have Questions?</h2>
              <p className="font-nunito text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                We're here to help! Reach out and we'll get back to you as soon as possible.
              </p>
              <Link
                href="/contact"
                className="cursor-pointer inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-quicksand font-bold text-lg hover:bg-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

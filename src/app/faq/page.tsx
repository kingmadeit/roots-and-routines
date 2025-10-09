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
    <main className="min-h-screen bg-complementary">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-12 px-4">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <svg
            className="absolute top-0 left-0 w-full h-full opacity-10"
            viewBox="0 0 1200 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Subtle flowing shapes */}
            <path
              d="M0 300C200 250 400 350 600 300C800 250 1000 350 1200 300V600H0V300Z"
              fill="currentColor"
              className="text-secondary"
            />
            {/* Minimal decorative circles */}
            <circle cx="200" cy="150" r="50" fill="currentColor" className="text-accent opacity-20" />
            <circle cx="1000" cy="120" r="35" fill="currentColor" className="text-primary opacity-30" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors duration-300 mb-8 font-nunito font-semibold group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Home
          </Link>

          {/* Hero Content */}
          <div className="relative">
            <div className="inline-block mb-4">
              <div className="bg-accent/10 backdrop-blur-sm rounded-full px-6 py-2 border border-accent/20">
                <span className="font-quicksand font-bold text-accent text-sm uppercase tracking-wider">
                  Help Center
                </span>
              </div>
            </div>
            <h1 className="font-antonio text-5xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6">
              How Can We
              <span className="block text-accent mt-2">Help You?</span>
            </h1>
            <p className="font-nunito text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto leading-relaxed">
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
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary to-accent p-8 md:p-12 text-center">
            {/* Decorative SVG */}
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
            </div>

            <div className="relative z-10">
              <h2 className="font-antonio text-3xl md:text-4xl font-bold text-white mb-4">Still Have Questions?</h2>
              <p className="font-nunito text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                We're here to help! Reach out and we'll get back to you as soon as possible.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-quicksand font-bold text-lg hover:bg-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
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

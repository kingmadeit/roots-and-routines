import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Terms & Conditions | Roots & Routines",
  description: "Terms and conditions for Roots & Routines family concierge services",
}

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-secondary/5 via-white to-complementary/5 py-16">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-quicksand text-4xl md:text-5xl lg:text-6xl font-bold text-[#581b04] mb-6">
            Terms & Conditions
          </h1>
          <p className="text-lg text-[#581b04]/70 font-nunito">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-[#581b04]/80 font-nunito leading-relaxed mb-4">
                Welcome to Roots & Routines. These Terms and Conditions outline the rules and regulations for the use of
                our family concierge services.
              </p>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed">
                By accessing and using our services, you accept and agree to be bound by these terms. If you disagree
                with any part of these terms, please do not use our services.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="font-quicksand text-2xl md:text-3xl font-bold text-[#581b04] mb-4">
                1. Services Provided
              </h2>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed mb-4">
                Roots & Routines provides family concierge services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#581b04]/80 font-nunito">
                <li>Meal planning and nutrition guidance</li>
                <li>Family routine and scheduling support</li>
                <li>Sourcing and referrals for childcare professionals</li>
                <li>School and activity guidance</li>
                <li>New parent support services</li>
                <li>Family wellness consultations</li>
              </ul>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed mt-4">
                All services are provided on a consultancy and advisory basis. We do not directly employ or manage
                childcare professionals, educators, or other third-party service providers.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="font-quicksand text-2xl md:text-3xl font-bold text-[#581b04] mb-4">
                2. Client Responsibilities
              </h2>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed mb-4">
                As a client of Roots & Routines, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#581b04]/80 font-nunito">
                <li>Provide accurate and complete information about your family's needs</li>
                <li>Communicate openly and honestly about your expectations</li>
                <li>Conduct your own due diligence when engaging third-party professionals we recommend</li>
                <li>Make timely payments for services rendered</li>
                <li>Respect our team's time and professional boundaries</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="font-quicksand text-2xl md:text-3xl font-bold text-[#581b04] mb-4">
                3. Referrals and Recommendations
              </h2>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed mb-4">
                While we carefully vet all professionals we recommend, including nannies, babysitters, tutors, and
                therapists, the ultimate responsibility for hiring and managing these individuals rests with you.
              </p>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed">
                We recommend conducting your own background checks, interviews, and reference verifications. Roots &
                Routines is not liable for the actions, conduct, or performance of any third-party professionals.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="font-quicksand text-2xl md:text-3xl font-bold text-[#581b04] mb-4">4. Payment Terms</h2>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed mb-4">
                Payment terms will be outlined in your service agreement. Services may be offered as:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#581b04]/80 font-nunito">
                <li>One-time consultations</li>
                <li>Package-based support</li>
                <li>Ongoing monthly retainers</li>
              </ul>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed mt-4">
                Payment is due as specified in your agreement. Late payments may result in suspension of services.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="font-quicksand text-2xl md:text-3xl font-bold text-[#581b04] mb-4">
                5. Cancellation and Refund Policy
              </h2>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed mb-4">
                Cancellations must be made at least 48 hours in advance to receive a full refund. Cancellations made
                with less than 48 hours notice may be subject to a cancellation fee.
              </p>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed">
                For package-based services, refunds will be prorated based on services already rendered.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="font-quicksand text-2xl md:text-3xl font-bold text-[#581b04] mb-4">6. Confidentiality</h2>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed">
                We respect your family's privacy. All information shared with Roots & Routines will be kept strictly
                confidential and will not be disclosed to third parties without your explicit consent, except as
                required by law.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="font-quicksand text-2xl md:text-3xl font-bold text-[#581b04] mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed mb-4">
                Roots & Routines provides advisory and consultancy services only. We are not liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#581b04]/80 font-nunito">
                <li>Actions or omissions of third-party professionals we recommend</li>
                <li>Outcomes resulting from implementation of our advice</li>
                <li>Any indirect, incidental, or consequential damages</li>
              </ul>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed mt-4">
                Our total liability shall not exceed the amount paid for services rendered.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="font-quicksand text-2xl md:text-3xl font-bold text-[#581b04] mb-4">
                8. Intellectual Property
              </h2>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed">
                All materials, resources, and content provided by Roots & Routines remain our intellectual property. You
                may use these materials for personal, non-commercial purposes only.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="font-quicksand text-2xl md:text-3xl font-bold text-[#581b04] mb-4">
                9. Modifications to Terms
              </h2>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                posting to our website. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="font-quicksand text-2xl md:text-3xl font-bold text-[#581b04] mb-4">10. Governing Law</h2>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed">
                These terms shall be governed by and construed in accordance with applicable local laws. Any disputes
                shall be resolved through good faith negotiation or, if necessary, through appropriate legal channels.
              </p>
            </div>

            {/* Contact CTA Section */}
            <div className="mt-20 relative">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="80" fill="#788a68" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-48 h-48 opacity-5">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="80" fill="#ca6c28" />
                </svg>
              </div>

              <div className="relative rounded-[2rem] bg-white/95 backdrop-blur-sm shadow-xl p-10 text-center lg:p-14 border border-secondary/10">
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-secondary/20 rounded-tl-[2rem]" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-accent/20 rounded-br-[2rem]" />

                <div className="space-y-6 relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                    <span className="text-sm font-bold text-secondary font-quicksand tracking-wide">Questions?</span>
                  </div>

                  <h2 className="font-quicksand text-3xl lg:text-4xl font-bold text-[#581b04] leading-tight">
                    Need clarification on our terms?
                  </h2>
                  <p className="text-lg text-[#581b04]/70 font-nunito leading-relaxed">
                    If you have any questions about these Terms and Conditions, we're here to help.
                  </p>

                  {/* Decorative divider */}
                  <div className="flex items-center gap-3 py-2 justify-center">
                    <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-secondary/30" />
                    <div className="w-2 h-2 rounded-full bg-secondary/50" />
                    <div className="w-16 h-[2px] bg-secondary/30" />
                    <div className="w-2 h-2 rounded-full bg-accent/50" />
                    <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-secondary/30" />
                  </div>
                    <Button
                      asChild
                      size="lg"
                      className="bg-secondary mt-2 hover:bg-secondary/90 text-white font-quicksand text-base px-8 py-6 h-auto rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                      <Link href="/contact" className="inline-flex items-center gap-2">
                        <Mail className="w-5 h-5" />
                        Get in Touch
                        <ArrowRight className="w-4 h-4" />
                      </Link>
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

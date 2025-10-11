import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy Policy | Roots & Routines",
  description: "Privacy policy for Roots & Routines family concierge services",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen py-16 bg-gradient-to-b from-complementary/5 via-white to-secondary/5">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-quicksand text-4xl md:text-5xl lg:text-6xl font-bold text-[#581b04] mb-6">
            Privacy Policy
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
                At Roots & Routines, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                protect, and share information about you when you use our family concierge services.
              </p>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed">
                By using our services, you consent to the practices described in this policy.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-10">
              <h2 className="font-quicksand text-2xl md:text-3xl font-bold text-[#581b04] mb-4">
                1. Information We Collect
              </h2>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#581b04]/80 font-nunito mb-4">
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, mailing address
                </li>
                <li>
                  <strong>Family Information:</strong> Details about your family structure, children's ages, dietary
                  preferences, and specific needs
                </li>
                <li>
                  <strong>Service Preferences:</strong> Information about the services you're interested in and your
                  scheduling preferences
                </li>
                <li>
                  <strong>Payment Information:</strong> Billing details and payment method information (processed
                  securely through third-party payment processors)
                </li>
                <li>
                  <strong>Communication Records:</strong> Correspondence via email, phone, or messaging platforms
                </li>
              </ul>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed">
                We may also automatically collect certain information when you visit our website, including IP address,
                browser type, device information, and usage data through cookies and similar technologies.
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-10">
              <h2 className="font-quicksand text-2xl md:text-3xl font-bold text-[#581b04] mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#581b04]/80 font-nunito">
                <li>Provide, maintain, and improve our family concierge services</li>
                <li>Personalize your experience and tailor recommendations to your family's needs</li>
                <li>Communicate with you about services, appointments, and updates</li>
                <li>Process payments and manage billing</li>
                <li>Source and vet appropriate professionals for your family</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you relevant information, tips, and resources (with your consent)</li>
                <li>Analyze usage patterns to improve our services</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="mb-10">
              <h2 className="font-quicksand text-2xl md:text-3xl font-bold text-[#581b04] mb-4">
                3. Information Sharing and Disclosure
              </h2>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed mb-4">
                We do not sell your personal information. We may share your information only in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#581b04]/80 font-nunito">
                <li>
                  <strong>With Your Consent:</strong> When you explicitly authorize us to share information with third
                  parties
                </li>
                <li>
                  <strong>Service Providers:</strong> With trusted third-party professionals (nannies, tutors,
                  therapists) when necessary to provide requested services
                </li>
                <li>
                  <strong>Business Partners:</strong> With vetted partners who help us deliver services (e.g., payment
                  processors, scheduling tools)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, court order, or to protect rights,
                  property, or safety
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                </li>
              </ul>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed mt-4">
                All third parties we work with are required to maintain the confidentiality and security of your
                information.
              </p>
            </div>

            {/* Section 4 */}
            <div className="mb-10">
              <h2 className="font-quicksand text-2xl md:text-3xl font-bold text-[#581b04] mb-4">4. Data Security</h2>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#581b04]/80 font-nunito">
                <li>Secure data encryption during transmission and storage</li>
                <li>Regular security assessments and updates</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Secure payment processing through trusted third-party providers</li>
              </ul>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed mt-4">
                However, no method of transmission over the internet is 100% secure. While we strive to protect your
                information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 5 */}
            <div className="mb-10">
              <h2 className="font-quicksand text-2xl md:text-3xl font-bold text-[#581b04] mb-4">5. Data Retention</h2>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed">
                We retain your personal information for as long as necessary to provide our services, comply with legal
                obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we
                securely delete or anonymize it.
              </p>
            </div>

            {/* Section 6 */}
            <div className="mb-10">
              <h2 className="font-quicksand text-2xl md:text-3xl font-bold text-[#581b04] mb-4">
                6. Your Rights and Choices
              </h2>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#581b04]/80 font-nunito">
                <li>
                  <strong>Access:</strong> Request a copy of the personal information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or incomplete information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information (subject to legal
                  obligations)
                </li>
                <li>
                  <strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time
                </li>
                <li>
                  <strong>Data Portability:</strong> Request a copy of your data in a portable format
                </li>
                <li>
                  <strong>Restriction:</strong> Request restriction of processing in certain circumstances
                </li>
              </ul>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed mt-4">
                To exercise these rights, please contact us at hello@rootsandroutines.com.
              </p>
            </div>

            {/* Section 7 */}
            <div className="mb-10">
              <h2 className="font-quicksand text-2xl md:text-3xl font-bold text-[#581b04] mb-4">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies help
                us:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#581b04]/80 font-nunito">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve website functionality and performance</li>
                <li>Provide personalized content and recommendations</li>
              </ul>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed mt-4">
                You can control cookies through your browser settings. However, disabling cookies may affect your
                ability to use certain features of our website.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="font-quicksand text-2xl md:text-3xl font-bold text-[#581b04] mb-4">
                8. Children's Privacy
              </h2>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed">
                While our services are designed to support families with children, our website and services are intended
                for use by adults (18 years and older). We do not knowingly collect personal information from children
                under 18 without parental consent.
              </p>
            </div>

            {/* Section 9 */}
            <div className="mb-10">
              <h2 className="font-quicksand text-2xl md:text-3xl font-bold text-[#581b04] mb-4">
                9. Third-Party Links
              </h2>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed">
                Our website may contain links to third-party websites or services. We are not responsible for the
                privacy practices of these external sites. We encourage you to review their privacy policies before
                providing any personal information.
              </p>
            </div>

            {/* Section 10 */}
            <div className="mb-10">
              <h2 className="font-quicksand text-2xl md:text-3xl font-bold text-[#581b04] mb-4">
                10. International Data Transfers
              </h2>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed">
                If you are accessing our services from outside our primary operating region, please note that your
                information may be transferred to, stored, and processed in different jurisdictions. We ensure
                appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
              </p>
            </div>

            {/* Section 11 */}
            <div className="mb-10">
              <h2 className="font-quicksand text-2xl md:text-3xl font-bold text-[#581b04] mb-4">
                11. Changes to This Privacy Policy
              </h2>
              <p className="text-[#581b04]/80 font-nunito leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                requirements. We will notify you of significant changes by posting the updated policy on our website
                with a new "Last Updated" date. Your continued use of our services after changes constitutes acceptance
                of the updated policy.
              </p>
            </div>

            {/* Contact */}
            <div className="mt-20 relative">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="80" fill="#bc9b0a" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-48 h-48 opacity-5">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="80" fill="#788a68" />
                </svg>
              </div>

              <div className="relative rounded-[2rem] text-center  bg-white/95 backdrop-blur-sm shadow-xl p-10 lg:p-14 border border-complementary/10">
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-complementary/20 rounded-tl-[2rem]" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-secondary/20 rounded-br-[2rem]" />

                <div className="space-y-6 relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-complementary/10 border border-complementary/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-complementary animate-pulse" />
                    <span className="text-sm font-bold text-complementary font-quicksand tracking-wide">
                      Privacy Matters
                    </span>
                  </div>

                  <h2 className="font-quicksand text-3xl lg:text-4xl font-bold text-[#581b04] leading-tight">
                    Questions about your privacy?
                  </h2>
                  <p className="text-lg text-[#581b04]/70 font-nunito leading-relaxed">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your
                    personal information, we're here to help.
                  </p>

                  {/* Decorative divider */}
                  <div className="flex items-center justify-center gap-3 py-2">
                    <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-complementary/30" />
                    <div className="w-2 h-2 rounded-full bg-complementary/50" />
                    <div className="w-16 h-[2px] bg-complementary/30" />
                    <div className="w-2 h-2 rounded-full bg-secondary/50" />
                    <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-complementary/30" />
                  </div>
                  <Button
                      asChild
                      size="lg"
                      className="bg-complementary pt-2 hover:bg-complementary/90 text-white font-quicksand text-base px-8 py-6 h-auto rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
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

import type React from "react"
import Link from "next/link"
import { siteData } from "@/data"
import { Mail, Phone } from "lucide-react"
import LeadSection from "./sections/LeadSection"

interface IconProps {
  className?: string
}

const TikTokIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.296-1.956-1.296-3.205V1h-3.73v14.72c0 2.252-1.835 4.087-4.087 4.087s-4.087-1.835-4.087-4.087 1.835-4.087 4.087-4.087c.3 0 .593.033.873.095V7.999a7.84 7.84 0 0 0-.873-.049C4.284 7.95.533 11.701.533 16.342S4.284 24.734 8.925 24.734s8.392-3.751 8.392-8.392V9.188a9.63 9.63 0 0 0 5.283 1.562V7.021a6.255 6.255 0 0 1-3.279-1.459z" />
  </svg>
)

const WhatsAppIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.085" />
  </svg>
)

const InstagramIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

type IconComponent = React.ComponentType<{ className?: string }>

const socialIcons: Record<string, IconComponent> = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  whatsapp: WhatsAppIcon,
  phone: Phone,
  email: Mail,
}

export default function Footer() {
  const { company, navigation, socialLinks, contact } = siteData
  const [weekDays, time] = contact.businessHours!.split(",")

  return (
    <footer className="relative bg-secondary/90 pb-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute -top-20 -left-20 w-96 h-96 opacity-10" viewBox="0 0 400 400">
          <path
            d="M200,50 Q300,100 350,200 T300,350 Q200,400 100,350 T50,200 Q100,100 200,50"
            fill="currentColor"
            className="text-white"
          />
        </svg>
        <svg className="absolute -bottom-32 -right-32 w-[500px] h-[500px] opacity-5" viewBox="0 0 500 500">
          <circle cx="250" cy="250" r="200" fill="currentColor" className="text-white" />
          <circle cx="300" cy="200" r="120" fill="currentColor" className="text-primary" />
        </svg>
        <svg className="absolute top-1/2 left-1/4 w-64 h-64 opacity-5" viewBox="0 0 200 200">
          <path
            d="M100,20 Q150,50 170,100 T150,170 Q100,190 50,170 T30,100 Q50,50 100,20"
            fill="currentColor"
            className="text-white"
          />
        </svg>
      </div>

      <LeadSection />

      <div className="relative container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {/* Column 1: Social + Hours with decorative card */}
          <div className="space-y-6">
            <div className="bg-complementary/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg">
              <h4 className="text-lg font-semibold mb-5 text-white flex items-center gap-2">
                <div className="w-1 h-6 bg-accent rounded-full" />
                Connect With Us
              </h4>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {socialLinks.map(({ platform, url, display }) => {
                  const Icon = socialIcons[platform]
                  return (
                    <Link
                      key={platform}
                      href={url}
                      aria-label={display}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex items-center justify-center"
                    >
                      <div className="absolute inset-0 bg-white rounded-xl blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                      <div className="relative bg-white/30 hover:bg-white p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md">
                        {Icon && <Icon className="h-5 w-5 text-white/80 group-hover:text-accent transition-colors" />}
                      </div>
                    </Link>
                  )
                })}
              </div>
              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <div className="space-y-2 text-sm text-white">
                  <div className="flex items-center gap-2 font-medium">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    <p>{weekDays}</p>
                  </div>
                  <p className="pl-4 text-white/80">{time}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Main Nav */}
          <div className="text-center lg:text-right">
            <h4 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Explore
              <span className="absolute -bottom-2 left-0 lg:left-auto lg:right-0 w-12 h-1 bg-white rounded-full" />
            </h4>
            <ul className="space-y-3 text-sm">
              {navigation.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"
                  >
                    <span className="relative">
                      {label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="text-center lg:text-right">
            <h4 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 lg:left-auto lg:right-0 w-12 h-1 bg-white rounded-full" />
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"
                >
                  <span className="relative">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"
                >
                  <span className="relative">
                    FAQ
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="text-center lg:text-right">
            <h4 className="text-lg font-semibold mb-6 text-white relative inline-block">
              Legal
              <span className="absolute -bottom-2 left-0 lg:left-auto lg:right-0 w-12 h-1 bg-white rounded-full" />
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"
                >
                  <span className="relative">
                    Terms of Use
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block group"
                >
                  <span className="relative">
                    Privacy Policy
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/20" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-white px-6 py-2 rounded-full">
              <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} <span className="text-white font-semibold">{company.name}</span>. All rights
            reserved.
          </p>
          <p className="text-xs text-white/60 mt-2">Crafted with care and attention to detail</p>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LegalPageCTAProps {
  badgeText: string
  badgeColor: string
  title: string
  description: string
  buttonColor: string
  buttonHoverColor: string
  decorativeColor1: string
  decorativeColor2: string
  borderColor: string
  cornerBorderColor1: string
  cornerBorderColor2: string
  dividerColor1: string
  dividerColor2: string
}

export function LegalPageCTA({
  badgeText,
  badgeColor,
  title,
  description,
  buttonColor,
  buttonHoverColor,
  decorativeColor1,
  decorativeColor2,
  borderColor,
  cornerBorderColor1,
  cornerBorderColor2,
  dividerColor1,
  dividerColor2,
}: LegalPageCTAProps) {
  return (
    <div className="mb-20 mt-32 relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill={decorativeColor1} />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-5">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill={decorativeColor2} />
        </svg>
      </div>

      <div
        className={`relative rounded-[2rem] bg-white/95 text-center backdrop-blur-sm shadow-xl p-10 lg:p-14 border ${borderColor}`}
      >
        {/* Decorative corner accents */}
        <div
          className={`absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 ${cornerBorderColor1} rounded-tl-[2rem]`}
        />
        <div
          className={`absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 ${cornerBorderColor2} rounded-br-[2rem]`}
        />

        <div className="space-y-6 relative ">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${badgeColor}`}>
            <div
              className={`w-1.5 h-1.5 rounded-full animate-pulse ${badgeColor.replace("/10", "").replace("bg-", "bg-")}`}
            />
            <span
              className={`text-sm font-bold font-quicksand tracking-wide ${badgeColor.replace("/10", "").replace("bg-", "text-")} border-none!`}
            >
              {badgeText}
            </span>
          </div>

          <h2 className="font-quicksand text-3xl lg:text-4xl font-bold text-[#581b04] leading-tight">{title}</h2>
          <p className="text-lg text-[#581b04]/70 font-nunito leading-relaxed">{description}</p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 py-2">
            <div className={`w-12 h-[2px] bg-gradient-to-r from-transparent ${dividerColor1}`} />
            <div className={`w-2 h-2 rounded-full ${dividerColor1.replace("to-", "bg-").replace("/30", "/50")}`} />
            <div className={`w-16 h-[2px] ${dividerColor1.replace("to-", "bg-")}`} />
            <div className={`w-2 h-2 rounded-full ${dividerColor2.replace("to-", "bg-").replace("/30", "/50")}`} />
            <div className={`w-12 h-[2px] bg-gradient-to-l from-transparent ${dividerColor1}`} />
          </div>
          <Button
            asChild
            size="lg"
            className={`${buttonColor} ${buttonHoverColor} text-white font-quicksand text-base px-8 py-6 h-auto rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105`}
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
  )
}

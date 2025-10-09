import { Mail, Phone } from "lucide-react"
import { siteData } from "@/data"

const {
  contact: { email, phone },
} = siteData

const ContactOptions = () => {
  return (
    <div className="w-full p-6 md:p-8 rounded-3xl bg-primary/70 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-0 right-0 w-64 h-64" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="currentColor" className="text-complementary/40" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-48 h-48" viewBox="0 0 200 200">
          <path
            d="M 50 100 Q 100 50 150 100 T 250 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="40"
            className="text-secondary"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="w-full h-full flex items-center justify-center p-8">
          <div className="relative w-full max-w-sm aspect-square">
            {/* Organic illustration with theme colors */}
            <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-2xl">
              {/* Background circle */}
              <circle cx="150" cy="150" r="140" fill="#788a68" opacity="0.15" />

              {/* Main organic shape */}
              <path
                d="M 150 50 Q 200 80 220 130 Q 240 180 200 220 Q 160 250 120 230 Q 70 200 60 150 Q 50 100 90 70 Q 130 40 150 50 Z"
                fill="#ca6c28"
                opacity="0.9"
              />

              {/* Inner accent shape */}
              <path
                d="M 150 90 Q 180 100 190 130 Q 200 160 180 180 Q 160 200 140 190 Q 110 170 105 140 Q 100 110 125 95 Q 140 85 150 90 Z"
                fill="#f0bf99"
                opacity="0.8"
              />

              {/* Decorative dots */}
              <circle cx="150" cy="150" r="8" fill="#fff8a9" />
              <circle cx="120" cy="130" r="5" fill="#bc9b0a" opacity="0.7" />
              <circle cx="180" cy="140" r="6" fill="#a3b185" opacity="0.7" />
              <circle cx="140" cy="180" r="4" fill="#fdf2e0" />

              {/* Leaf-like elements */}
              <path
                d="M 150 150 Q 160 120 180 110"
                stroke="#788a68"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <ellipse cx="185" cy="105" rx="8" ry="15" fill="#a3b185" opacity="0.8" transform="rotate(45 185 105)" />

              <path
                d="M 150 150 Q 130 170 110 185"
                stroke="#788a68"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <ellipse cx="105" cy="190" rx="8" ry="15" fill="#a3b185" opacity="0.8" transform="rotate(-30 105 190)" />

              {/* Contact icons integrated into design */}
              <g transform="translate(135, 140)">
                <circle cx="0" cy="0" r="20" fill="white" opacity="0.9" />
                <path
                  d="M -8 -3 L -8 3 L 8 3 L 8 -3 Z M -6 -1 L 0 4 L 6 -1"
                  stroke="#ca6c28"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>

              <g transform="translate(165, 160)">
                <circle cx="0" cy="0" r="18" fill="white" opacity="0.9" />
                <path
                  d="M -6 -6 Q -4 -8 -2 -6 L 2 -2 Q 4 0 4 2 L 4 6 Q 4 8 2 8 L -4 8 Q -6 8 -6 6 L -6 2 Q -6 0 -4 -2 Z"
                  fill="#ca6c28"
                />
              </g>
            </svg>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start justify-center space-y-6 text-center md:text-left">
          <div className="flex items-center gap-2 pt-2 bg-accent/10 rounded-full border border-accent/40 px-4 py-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-accent/70">Available Monday - Friday, 9AM - 5PM</span>
          </div>
          <div className="space-y-3">
            <h2 className="font-quicksand text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[0.95]">
              Our team is <span className="text-accent italic font-light">here to <br />help</span>
            </h2>
            <div className="w-20 h-1 bg-accent/30 rounded-full mx-auto md:mx-0" />
          </div>

          <p className="text-base md:text-lg font-medium text-secondary max-w-md leading-relaxed">
            Contact us today to schedule your free consultation and take the first step towards a more organized, joyful
            home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <a
              className="group relative rounded-2xl bg-complementary hover:bg-complementary/90 transition-all duration-300 p-5 text-white shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3 min-w-[160px]"
              rel="noopener noreferrer"
              href={`mailto:${email}`}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Mail className="w-5 h-5 relative z-10" />
              <span className="font-semibold relative z-10">Email Us</span>
            </a>

            <a
              className="group relative rounded-2xl bg-secondary hover:bg-secondary/90 transition-all duration-300 p-5 text-white shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3 min-w-[160px]"
              rel="noopener noreferrer"
              href={`tel:${phone}`}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Phone className="w-5 h-5 relative z-10" />
              <span className="font-semibold relative z-10">Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactOptions

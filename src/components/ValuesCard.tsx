import type { LucideIcon } from "lucide-react"

interface ValuesCardProps {
  icon: LucideIcon
  title: string
  description: string
  gradientId: string
  gradientFrom: string
  gradientTo: string
  borderColor: string
  iconBgColor: string
  titleColor: string
}

export function ValuesCard({
  icon: Icon,
  title,
  description,
  gradientId,
  gradientFrom,
  gradientTo,
  borderColor,
  iconBgColor,
  titleColor,
}: ValuesCardProps) {
  return (
    <div className="group relative">
      {/* Decorative SVG frame */}
      <svg
        className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)] opacity-30 group-hover:opacity-50 transition-opacity duration-500"
        viewBox="0 0 400 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 50 Q50 50 50 100 L50 400 Q50 450 100 450 L300 450 Q350 450 350 400 L350 100 Q350 50 300 50 L100 50 Q50 50 50 50"
          stroke={`url(#${gradientId})`}
          strokeWidth="3"
          fill="none"
          strokeDasharray="10 5"
        />
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={gradientFrom} />
            <stop offset="100%" stopColor={gradientTo} />
          </linearGradient>
        </defs>
      </svg>

      <div
        className={`relative p-10 lg:p-12 rounded-3xl border-2 ${borderColor} transition-all duration-500 bg-white/60 backdrop-blur-sm hover:shadow-2xl hover:-translate-y-2`}
      >
        {/* Decorative corner elements */}
        <div className={`absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 ${borderColor} rounded-tl-xl`} />
        <div className={`absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 ${borderColor} rounded-br-xl`} />

        <div className="relative">
          <div
            className={`w-16 h-16 rounded-2xl border-2 ${borderColor} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${iconBgColor}`}
          >
            <Icon className={`w-8 h-8 ${titleColor}`} />
          </div>
          <h3 className={`font-quicksand text-3xl font-bold ${titleColor} mb-4`}>{title}</h3>
          <p className="text-foreground/70 text-lg leading-relaxed font-light">{description}</p>
        </div>
      </div>
    </div>
  )
}

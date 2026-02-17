import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ServiceCategoryProps {
  children: ReactNode
  heroClassName?: string
  contentClassName?: string
}

export function ServiceCategory({ children, heroClassName, contentClassName }: ServiceCategoryProps) {
  return (
    <div className="min-h-screen bg-primary">
      {/* Decorative hero section with organic shapes */}
      <div className={cn("relative overflow-hidden", heroClassName)}>
        {/* Organic background pattern */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <path
              d="M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z"
              fill="currentColor"
              className="text-complementary/20"
            />
            <path
              d="M0,250 Q400,150 800,250 T1200,250 L1200,400 L0,400 Z"
              fill="currentColor"
              className="text-secondary/30"
            />
          </svg>
        </div>

        {/* Content container */}
        <div className={cn("relative ", contentClassName)}>{children}</div>
      </div>
    </div>
  )
}

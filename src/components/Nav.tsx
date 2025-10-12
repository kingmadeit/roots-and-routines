"use client"
import { useState } from "react"
import { siteData } from "@/data"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="nav relative z-99">
      <ul className="hidden gap-8 items-center bg-white/60 backdrop-blur-md px-6 py-3 rounded-full border border-primary/20">
        {siteData.navigation.map((item, index) => {
          const isActive = pathname === item.href

          return (
            <li key={item.href} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <Link
                href={item.href}
                className="relative text-secondary font-bold font-quicksand text-base group py-2 px-1 block"
              >
                <span
                  className={`relative  transition-colors duration-300 ${isActive ? "text-accent" : "group-hover:text-accent"
                    }`}
                >
                  {item.label}
                </span>

                <svg
                  className={`absolute inset-0 w-full h-full - transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  viewBox="0 0 100 40"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M10,20 Q30,5 50,20 T90,20 Q90,30 50,30 T10,20"
                    fill="url(#navGradient)"
                    className="animate-blob-morph"
                  />
                  <defs>
                    <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgb(240, 191, 153)" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="rgb(202, 108, 40)" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>

                <span
                  className={`absolute -top-1 -right-1 w-1.5 h-1.5 bg-complementary rounded-full transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                />
              </Link>
            </li>
          )
        })}
      </ul>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer p-4 fixed top-4 bg-accent right-4 text-white z-[60] hover:bg-secondary! rounded-2xl transition-all duration-300 shadow-lg ${isOpen ? "rotate-90 scale-110" : "backdrop-blur-md border border-primary/20"
          }`}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-secondary md:hidden z-50 transition-all duration-500 ease-out shadow-2xl ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute -top-20 -right-20 w-64 h-64 opacity-20" viewBox="0 0 200 200">
            <path d="M50,100 Q80,50 120,70 T170,100 Q170,140 130,150 T50,100" fill="url(#mobileGradient1)" />
            <defs>
              <linearGradient id="mobileGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(255, 255, 255)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(240, 191, 153)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          <svg className="absolute -bottom-20 -left-10 w-56 h-56 opacity-15" viewBox="0 0 200 200">
            <path d="M30,100 Q60,60 100,80 T150,100 Q150,130 110,140 T30,100" fill="url(#mobileGradient2)" />
            <defs>
              <linearGradient id="mobileGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(255, 255, 255)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="rgb(202, 108, 40)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute top-32 left-8 w-2 h-2 bg-white/30 rounded-full" />
          <div className="absolute top-40 left-12 w-1.5 h-1.5 bg-complementary/40 rounded-full" />
          <div className="absolute bottom-40 right-12 w-2 h-2 bg-white/30 rounded-full" />
          <div className="absolute bottom-48 right-8 w-1 h-1 bg-accent/40 rounded-full" />
        </div>

        <div className="relative h-full flex flex-col justify-between p-8 pt-24">
          <ul className="flex flex-col gap-10">
            {siteData.navigation.map((item, index) => {
              const isActive = pathname === item.href

              return (
                <li
                  key={item.href}
                  className={`transform transition-all duration-500 ${isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                    }`}
                  style={{ transitionDelay: isOpen ? `${index * 100 + 200}ms` : "0ms" }}
                >
                  <Link
                    href={item.href}
                    className={`relative font-bold font-quicksand text-3xl group flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 ${isActive ? "bg-white text-[#581b04]" : "bg-primary text-white hover:bg-white hover:text-[#581b04]"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span
                      className={`h-0.5 transition-all duration-300 ${isActive ? "w-8 bg-accent" : "w-0 group-hover:w-8 group-hover:bg-accent"
                        }`}
                    />

                    <span className="relative">
                      {item.label}
                      <span
                        className={`absolute -top-2 -right-6 text-xs font-nunito transition-colors duration-300 ${isActive ? "text-complementary/60" : "text-complementary/40 group-hover:text-complementary/60"
                          }`}
                      >
                        0{index + 1}
                      </span>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="border-t border-white/20 pt-6 space-y-3">
            <p className="text-sm text-white/80 font-nunito italic">Building routines that work for your family</p>
            <div className="flex gap-2">
              <div className="w-12 h-1 bg-accent/50 rounded-full" />
              <div className="w-8 h-1 bg-complementary/40 rounded-full" />
              <div className="w-4 h-1 bg-white/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-secondary/20 backdrop-blur-sm md:hidden z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
    </nav>
  )
}

export default Nav

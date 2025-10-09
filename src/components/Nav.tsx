"use client"
import { useState } from "react"
import { siteData } from "@/data"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="nav relative z-50">
      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 items-center">
        {siteData.navigation.map((item, index) => (
          <li key={item.href} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <Link href={item.href} className="relative text-accent font-bold font-quicksand text-lg group">
              <span className="relative z-10">{item.label}</span>
              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-complementary group-hover:w-full transition-all duration-300 ease-out" />
              {/* Hover glow effect */}
              <span className="absolute inset-0 bg-accent/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10" />
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Burger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden p-3 fixed top-4 right-4 z-[60] rounded-full transition-all duration-300 ${isOpen ? "bg-white text-accent shadow-lg" : "bg-accent/20 text-accent backdrop-blur-sm"
          }`}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation - Full Screen */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-accent via-complementary to-secondary md:hidden z-50 transition-all duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Decorative background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        </div>

        <ul className="relative h-full flex flex-col items-center justify-center gap-8 p-8">
          {siteData.navigation.map((item, index) => (
            <li
              key={item.href}
              className={`transform transition-all duration-500 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
              style={{ transitionDelay: isOpen ? `${index * 100}ms` : "0ms" }}
            >
              <Link
                href={item.href}
                className="text-white font-bold font-quicksand text-3xl hover:text-primary transition-colors duration-300 relative group"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative">
                  {item.label}
                  {/* Animated underline for mobile */}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-300" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav

"use client";
import { useState } from "react";
import { siteData } from "@/data";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-4 pr-4">
        {siteData.navigation.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="relative text-shadow-md text-white font-bold link-lightning hover:text-orange-300"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Burger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-white fixed top-5 right-5 z-55"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation - Full Screen */}
      {isOpen && (
        <ul
          className="fixed inset-0 bg-accent/95 backdrop-blur-sm md:hidden grid place-items-center z-50"
          style={{
            gridTemplateRows: `repeat(${siteData.navigation.length}, 1fr)`,
          }}
        >
          {siteData.navigation.map((item) => (
            <li
              key={item.href}
              className="flex items-center justify-center w-full h-full" // update each background to match color theme
            >
              <Link
                href={item.href}
                className="text-shadow-md text-primary font-bold link-lightning hover:text-orange-300 text-2xl text-center"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;

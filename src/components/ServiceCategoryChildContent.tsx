"use client";

import { CheckCircle2, ArrowRight, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { JSX } from "react";

// ─── Extended Service Type ────────────────────────────────────────────────────

export interface ServiceDataFull {
  id: string;
  title: string;
  shortCopy: string;
  fullCopy: string;
  features: string[];
  whoIsItFor: string[];
  howItWorks: string[];
  category: string;
  icon: string;
}

// ─── Service Category Config ──────────────────────────────────────────────────

const serviceCategories = [
  { id: "everyday-support", color: "bg-accent" },
  { id: "helping-hands-and-resources", color: "bg-secondary" },
  { id: "wellness-growth", color: "bg-complementary" },
];

// ─── Color Utilities ──────────────────────────────────────────────────────────

type CategoryClasses = { text: string; border: string; bg: string };

const colorMap: Record<string, CategoryClasses> = {
  "bg-accent": {
    text: "text-accent",
    border: "border-accent",
    bg: "bg-accent",
  },
  "bg-secondary": {
    text: "text-secondary",
    border: "border-secondary",
    bg: "bg-secondary",
  },
  "bg-complementary": {
    text: "text-complementary",
    border: "border-complementary",
    bg: "bg-complementary",
  },
};

function getCategoryClasses(bgClass: string): CategoryClasses {
  return colorMap[bgClass] ?? colorMap["bg-accent"];
}

// ─── Name Helpers ─────────────────────────────────────────────────────────────

const catNameOverrides: Record<string, string> = {
  "wellness-growth": "Wellness & Growth",
  "helping-hands-and-resources": "Helping Hands & Resources",
};

function deriveCategoryName(categoryId: string): string {
  if (catNameOverrides[categoryId]) return catNameOverrides[categoryId];
  return categoryId
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

// ─── Icon Illustrations ───────────────────────────────────────────────────────

export const iconIllustrations: Record<string, JSX.Element> = {
  Utensils: (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 400"
      fill="none"
    >
      <circle
        cx="200"
        cy="200"
        r="90"
        fill="url(#utensilsGrad1)"
        opacity="0.3"
      />
      <circle
        cx="200"
        cy="200"
        r="85"
        stroke="url(#utensilsGrad2)"
        strokeWidth="3"
        fill="none"
        opacity="0.5"
      />
      <circle
        cx="160"
        cy="180"
        r="25"
        fill="url(#utensilsGrad3)"
        opacity="0.6"
      />
      <path
        d="M160 155 Q165 145 170 150"
        stroke="url(#utensilsGrad4)"
        strokeWidth="3"
        fill="none"
        opacity="0.5"
      />
      <ellipse
        cx="165"
        cy="152"
        rx="4"
        ry="6"
        fill="url(#utensilsGrad4)"
        opacity="0.5"
      />
      <path
        d="M220 170 L235 210"
        stroke="url(#utensilsGrad5)"
        strokeWidth="12"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M220 170 L215 160 M220 170 L225 160 M220 170 L220 158"
        stroke="url(#utensilsGrad4)"
        strokeWidth="2"
        opacity="0.5"
      />
      <ellipse
        cx="180"
        cy="220"
        rx="18"
        ry="25"
        fill="url(#utensilsGrad4)"
        opacity="0.5"
        transform="rotate(-20 180 220)"
      />
      <ellipse
        cx="195"
        cy="225"
        rx="16"
        ry="22"
        fill="url(#utensilsGrad4)"
        opacity="0.5"
        transform="rotate(15 195 225)"
      />
      <circle
        cx="240"
        cy="190"
        r="8"
        fill="url(#utensilsGrad6)"
        opacity="0.6"
      />
      <circle
        cx="250"
        cy="195"
        r="7"
        fill="url(#utensilsGrad6)"
        opacity="0.6"
      />
      <circle
        cx="245"
        cy="205"
        r="7"
        fill="url(#utensilsGrad6)"
        opacity="0.6"
      />
      <ellipse
        cx="210"
        cy="230"
        rx="20"
        ry="25"
        fill="url(#utensilsGrad4)"
        opacity="0.5"
      />
      <circle
        cx="210"
        cy="230"
        r="8"
        fill="url(#utensilsGrad7)"
        opacity="0.6"
      />
      <line
        x1="120"
        y1="240"
        x2="120"
        y2="290"
        stroke="url(#utensilsGrad2)"
        strokeWidth="4"
        opacity="0.5"
      />
      <line
        x1="115"
        y1="240"
        x2="115"
        y2="260"
        stroke="url(#utensilsGrad2)"
        strokeWidth="3"
        opacity="0.5"
      />
      <line
        x1="125"
        y1="240"
        x2="125"
        y2="260"
        stroke="url(#utensilsGrad2)"
        strokeWidth="3"
        opacity="0.5"
      />
      <line
        x1="280"
        y1="240"
        x2="280"
        y2="290"
        stroke="url(#utensilsGrad2)"
        strokeWidth="4"
        opacity="0.5"
      />
      <path
        d="M275 240 L285 240 L283 230 L277 230 Z"
        fill="url(#utensilsGrad2)"
        opacity="0.5"
      />
      <defs>
        <linearGradient id="utensilsGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdf2e0" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
        <linearGradient id="utensilsGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#a3b185" />
        </linearGradient>
        <linearGradient id="utensilsGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ca6c28" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
        <linearGradient id="utensilsGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#a3b185" />
        </linearGradient>
        <linearGradient id="utensilsGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ca6c28" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
        <linearGradient id="utensilsGrad6" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ca6c28" />
          <stop offset="100%" stopColor="#bc9b0a" />
        </linearGradient>
        <linearGradient id="utensilsGrad7" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bc9b0a" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
      </defs>
    </svg>
  ),
  Clock: (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 400"
      fill="none"
    >
      <rect
        x="100"
        y="100"
        width="200"
        height="220"
        rx="12"
        fill="url(#clockGrad1)"
        opacity="0.4"
      />
      <rect
        x="100"
        y="100"
        width="200"
        height="50"
        rx="12"
        fill="url(#clockGrad2)"
        opacity="0.6"
      />
      <rect
        x="110"
        y="85"
        width="15"
        height="30"
        rx="3"
        fill="url(#clockGrad2)"
        opacity="0.5"
      />
      <rect
        x="275"
        y="85"
        width="15"
        height="30"
        rx="3"
        fill="url(#clockGrad2)"
        opacity="0.5"
      />
      <line
        x1="100"
        y1="170"
        x2="300"
        y2="170"
        stroke="#788a68"
        strokeWidth="2"
        opacity="0.3"
      />
      <line
        x1="100"
        y1="210"
        x2="300"
        y2="210"
        stroke="#788a68"
        strokeWidth="2"
        opacity="0.3"
      />
      <line
        x1="100"
        y1="250"
        x2="300"
        y2="250"
        stroke="#788a68"
        strokeWidth="2"
        opacity="0.3"
      />
      <line
        x1="100"
        y1="290"
        x2="300"
        y2="290"
        stroke="#788a68"
        strokeWidth="2"
        opacity="0.3"
      />
      <line
        x1="150"
        y1="150"
        x2="150"
        y2="320"
        stroke="#788a68"
        strokeWidth="2"
        opacity="0.3"
      />
      <line
        x1="200"
        y1="150"
        x2="200"
        y2="320"
        stroke="#788a68"
        strokeWidth="2"
        opacity="0.3"
      />
      <line
        x1="250"
        y1="150"
        x2="250"
        y2="320"
        stroke="#788a68"
        strokeWidth="2"
        opacity="0.3"
      />
      <circle
        cx="200"
        cy="230"
        r="40"
        stroke="url(#clockGrad3)"
        strokeWidth="3"
        fill="white"
        opacity="0.6"
      />
      <line
        x1="200"
        y1="230"
        x2="200"
        y2="205"
        stroke="url(#clockGrad3)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
      <line
        x1="200"
        y1="230"
        x2="220"
        y2="230"
        stroke="url(#clockGrad3)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
      <circle cx="200" cy="230" r="4" fill="url(#clockGrad3)" opacity="0.8" />
      <circle cx="125" cy="190" r="6" fill="url(#clockGrad4)" opacity="0.6" />
      <circle cx="275" cy="270" r="6" fill="url(#clockGrad5)" opacity="0.6" />
      <rect
        x="120"
        y="300"
        width="25"
        height="8"
        rx="2"
        fill="url(#clockGrad3)"
        opacity="0.5"
      />
      <defs>
        <linearGradient id="clockGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdf2e0" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
        <linearGradient id="clockGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#a3b185" />
        </linearGradient>
        <linearGradient id="clockGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ca6c28" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
        <linearGradient id="clockGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bc9b0a" />
          <stop offset="100%" stopColor="#ca6c28" />
        </linearGradient>
        <linearGradient id="clockGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#bc9b0a" />
        </linearGradient>
      </defs>
    </svg>
  ),
  UserSearch: (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 400"
      fill="none"
    >
      <circle
        cx="200"
        cy="200"
        r="35"
        fill="url(#referralGrad1)"
        opacity="0.6"
      />
      <circle cx="200" cy="200" r="28" fill="white" opacity="0.8" />
      <circle
        cx="200"
        cy="100"
        r="25"
        fill="url(#referralGrad2)"
        opacity="0.5"
      />
      <circle
        cx="300"
        cy="200"
        r="25"
        fill="url(#referralGrad2)"
        opacity="0.5"
      />
      <circle
        cx="200"
        cy="300"
        r="25"
        fill="url(#referralGrad2)"
        opacity="0.5"
      />
      <circle
        cx="100"
        cy="200"
        r="25"
        fill="url(#referralGrad2)"
        opacity="0.5"
      />
      <circle
        cx="270"
        cy="130"
        r="20"
        fill="url(#referralGrad3)"
        opacity="0.5"
      />
      <circle
        cx="270"
        cy="270"
        r="20"
        fill="url(#referralGrad3)"
        opacity="0.5"
      />
      <circle
        cx="130"
        cy="270"
        r="20"
        fill="url(#referralGrad3)"
        opacity="0.5"
      />
      <circle
        cx="130"
        cy="130"
        r="20"
        fill="url(#referralGrad3)"
        opacity="0.5"
      />
      <line
        x1="200"
        y1="200"
        x2="200"
        y2="125"
        stroke="url(#referralGrad4)"
        strokeWidth="3"
        opacity="0.4"
        strokeDasharray="5,5"
      />
      <line
        x1="200"
        y1="200"
        x2="275"
        y2="200"
        stroke="url(#referralGrad4)"
        strokeWidth="3"
        opacity="0.4"
        strokeDasharray="5,5"
      />
      <line
        x1="200"
        y1="200"
        x2="200"
        y2="275"
        stroke="url(#referralGrad4)"
        strokeWidth="3"
        opacity="0.4"
        strokeDasharray="5,5"
      />
      <line
        x1="200"
        y1="200"
        x2="125"
        y2="200"
        stroke="url(#referralGrad4)"
        strokeWidth="3"
        opacity="0.4"
        strokeDasharray="5,5"
      />
      <circle cx="200" cy="100" r="4" fill="#ca6c28" opacity="0.7" />
      <circle cx="300" cy="200" r="4" fill="#bc9b0a" opacity="0.7" />
      <circle cx="200" cy="300" r="4" fill="#788a68" opacity="0.7" />
      <circle cx="100" cy="200" r="4" fill="#ca6c28" opacity="0.7" />
      <defs>
        <linearGradient id="referralGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#a3b185" />
        </linearGradient>
        <linearGradient id="referralGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a3b185" />
          <stop offset="100%" stopColor="#bc9b0a" />
        </linearGradient>
        <linearGradient id="referralGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bc9b0a" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
        <linearGradient id="referralGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ca6c28" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
        <linearGradient id="referralGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#ca6c28" />
        </linearGradient>
      </defs>
    </svg>
  ),
  GraduationCap: (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 400"
      fill="none"
    >
      <circle
        cx="200"
        cy="200"
        r="60"
        stroke="url(#guidanceGrad1)"
        strokeWidth="4"
        fill="white"
        opacity="0.6"
      />
      <circle
        cx="200"
        cy="200"
        r="50"
        stroke="url(#guidanceGrad2)"
        strokeWidth="2"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M200 140 L200 160 M195 145 L200 140 L205 145"
        stroke="url(#guidanceGrad1)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M260 200 L240 200 M255 195 L260 200 L255 205"
        stroke="url(#guidanceGrad2)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M200 260 L200 240 M195 255 L200 260 L205 255"
        stroke="url(#guidanceGrad3)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M140 200 L160 200 M145 195 L140 200 L145 205"
        stroke="url(#guidanceGrad4)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M200 200 L200 170 L210 200 L200 230 L190 200 Z"
        fill="url(#guidanceGrad1)"
        opacity="0.6"
      />
      <circle
        cx="200"
        cy="200"
        r="6"
        fill="url(#guidanceGrad2)"
        opacity="0.8"
      />
      <circle
        cx="120"
        cy="120"
        r="22"
        fill="url(#guidanceGrad2)"
        opacity="0.5"
      />
      <rect
        x="258"
        y="98"
        width="44"
        height="44"
        rx="4"
        fill="url(#guidanceGrad3)"
        opacity="0.5"
      />
      <line
        x1="280"
        y1="98"
        x2="280"
        y2="142"
        stroke="white"
        strokeWidth="2"
        opacity="0.6"
      />
      <circle
        cx="280"
        cy="280"
        r="22"
        fill="url(#guidanceGrad4)"
        opacity="0.5"
      />
      <ellipse
        cx="120"
        cy="280"
        rx="24"
        ry="20"
        fill="url(#guidanceGrad5)"
        opacity="0.5"
      />
      <defs>
        <linearGradient id="guidanceGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#a3b185" />
        </linearGradient>
        <linearGradient id="guidanceGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a3b185" />
          <stop offset="100%" stopColor="#bc9b0a" />
        </linearGradient>
        <linearGradient id="guidanceGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bc9b0a" />
          <stop offset="100%" stopColor="#ca6c28" />
        </linearGradient>
        <linearGradient id="guidanceGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ca6c28" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
        <linearGradient id="guidanceGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#bc9b0a" />
        </linearGradient>
      </defs>
    </svg>
  ),
  Baby: (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 400"
      fill="none"
    >
      <ellipse
        cx="180"
        cy="140"
        rx="35"
        ry="40"
        fill="url(#babyGrad1)"
        opacity="0.6"
      />
      <circle cx="180" cy="140" r="22" fill="white" opacity="0.4" />
      <path
        d="M145 180 Q180 170 215 180 L212 250 Q180 260 148 250 Z"
        fill="url(#babyGrad1)"
        opacity="0.6"
      />
      <path
        d="M145 200 Q130 210 125 230 Q120 245 130 255"
        stroke="url(#babyGrad1)"
        strokeWidth="14"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M215 200 Q230 210 235 230 Q240 245 230 255"
        stroke="url(#babyGrad1)"
        strokeWidth="14"
        strokeLinecap="round"
        opacity="0.6"
      />
      <ellipse
        cx="180"
        cy="240"
        rx="25"
        ry="28"
        fill="url(#babyGrad2)"
        opacity="0.7"
      />
      <circle cx="180" cy="240" r="18" fill="white" opacity="0.5" />
      <path
        d="M155 268 Q180 262 205 268 L203 295 Q180 300 157 295 Z"
        fill="url(#babyGrad2)"
        opacity="0.7"
      />
      <path
        d="M260 240 C250 230 240 230 240 220 C240 210 250 205 260 210 C270 205 280 210 280 220 C280 230 270 230 260 240 Z"
        fill="url(#babyGrad3)"
        opacity="0.6"
      />
      <circle
        cx="180"
        cy="200"
        r="100"
        stroke="url(#babyGrad5)"
        strokeWidth="2"
        strokeDasharray="8,4"
        fill="none"
        opacity="0.3"
      />
      <defs>
        <linearGradient id="babyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#a3b185" />
        </linearGradient>
        <linearGradient id="babyGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0bf99" />
          <stop offset="100%" stopColor="#fdf2e0" />
        </linearGradient>
        <linearGradient id="babyGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ca6c28" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
        <linearGradient id="babyGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bc9b0a" />
          <stop offset="100%" stopColor="#ca6c28" />
        </linearGradient>
        <linearGradient id="babyGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#bc9b0a" />
        </linearGradient>
      </defs>
    </svg>
  ),
  Heart: (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 400"
      fill="none"
    >
      <path
        d="M200 280 C160 240 120 240 120 200 C120 160 160 140 200 160 C240 140 280 160 280 200 C280 240 240 240 200 280 Z"
        fill="url(#heartGrad1)"
        opacity="0.6"
      />
      <path
        d="M200 270 C170 245 145 245 145 215 C145 185 170 170 200 185 C230 170 255 185 255 215 C255 245 230 245 200 270 Z"
        fill="white"
        opacity="0.3"
      />
      <path
        d="M100 200 L140 200 L155 180 L170 220 L185 200 L260 200"
        stroke="url(#heartGrad2)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <ellipse
        cx="120"
        cy="120"
        rx="15"
        ry="18"
        fill="url(#heartGrad3)"
        opacity="0.5"
      />
      <ellipse
        cx="280"
        cy="120"
        rx="15"
        ry="18"
        fill="url(#heartGrad4)"
        opacity="0.5"
      />
      <circle
        cx="200"
        cy="100"
        r="25"
        stroke="url(#heartGrad5)"
        strokeWidth="3"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M200 75 L200 125 M175 100 L225 100"
        stroke="url(#heartGrad5)"
        strokeWidth="3"
        opacity="0.5"
      />
      <defs>
        <linearGradient id="heartGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ca6c28" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
        <linearGradient id="heartGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bc9b0a" />
          <stop offset="100%" stopColor="#ca6c28" />
        </linearGradient>
        <linearGradient id="heartGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#a3b185" />
        </linearGradient>
        <linearGradient id="heartGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a3b185" />
          <stop offset="100%" stopColor="#bc9b0a" />
        </linearGradient>
        <linearGradient id="heartGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bc9b0a" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
      </defs>
    </svg>
  ),
  Sparkles: (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 400 400"
      fill="none"
    >
      <circle
        cx="200"
        cy="200"
        r="50"
        fill="url(#sparklesGrad1)"
        opacity="0.6"
      />
      <circle cx="200" cy="200" r="40" fill="white" opacity="0.4" />
      <g transform="translate(200, 100)">
        <rect
          x="-20"
          y="-20"
          width="40"
          height="40"
          rx="6"
          fill="url(#sparklesGrad2)"
          opacity="0.6"
        />
        <circle cx="-8" cy="5" r="4" fill="#ca6c28" opacity="0.7" />
        <circle cx="0" cy="8" r="4" fill="#bc9b0a" opacity="0.7" />
        <circle cx="8" cy="5" r="4" fill="#788a68" opacity="0.7" />
      </g>
      <g transform="translate(280, 160)">
        <circle cx="0" cy="0" r="25" fill="url(#sparklesGrad3)" opacity="0.6" />
      </g>
      <g transform="translate(280, 240)">
        <circle cx="0" cy="0" r="25" fill="url(#sparklesGrad4)" opacity="0.6" />
        <circle
          cx="0"
          cy="0"
          r="18"
          stroke="white"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
      </g>
      <g transform="translate(200, 300)">
        <ellipse
          cx="0"
          cy="0"
          rx="22"
          ry="28"
          fill="url(#sparklesGrad5)"
          opacity="0.6"
        />
      </g>
      <g transform="translate(120, 240)">
        <circle cx="0" cy="0" r="25" fill="url(#sparklesGrad6)" opacity="0.6" />
      </g>
      <g transform="translate(120, 160)">
        <rect
          x="-18"
          y="-22"
          width="36"
          height="44"
          rx="4"
          fill="url(#sparklesGrad2)"
          opacity="0.6"
        />
        <line
          x1="0"
          y1="-22"
          x2="0"
          y2="22"
          stroke="white"
          strokeWidth="2"
          opacity="0.6"
        />
      </g>
      <path
        d="M200 50 L203 60 L213 63 L205 70 L207 80 L200 75 L193 80 L195 70 L187 63 L197 60 Z"
        fill="url(#sparklesGrad3)"
        opacity="0.7"
      />
      <circle
        cx="200"
        cy="200"
        r="130"
        stroke="url(#sparklesGrad3)"
        strokeWidth="2"
        strokeDasharray="10,5"
        fill="none"
        opacity="0.3"
      />
      <defs>
        <linearGradient id="sparklesGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bc9b0a" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
        <linearGradient id="sparklesGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#a3b185" />
        </linearGradient>
        <linearGradient id="sparklesGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ca6c28" />
          <stop offset="100%" stopColor="#f0bf99" />
        </linearGradient>
        <linearGradient id="sparklesGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bc9b0a" />
          <stop offset="100%" stopColor="#ca6c28" />
        </linearGradient>
        <linearGradient id="sparklesGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a3b185" />
          <stop offset="100%" stopColor="#bc9b0a" />
        </linearGradient>
        <linearGradient id="sparklesGrad6" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#788a68" />
          <stop offset="100%" stopColor="#ca6c28" />
        </linearGradient>
      </defs>
    </svg>
  ),
};

const defaultIllustration = (
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 400 400"
    fill="none"
  >
    <circle cx="200" cy="200" r="80" fill="url(#defaultGrad)" opacity="0.3" />
    <circle
      cx="200"
      cy="200"
      r="120"
      stroke="url(#defaultGrad)"
      strokeWidth="2"
      fill="none"
      opacity="0.2"
    />
    <defs>
      <linearGradient id="defaultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#788a68" />
        <stop offset="100%" stopColor="#ca6c28" />
      </linearGradient>
    </defs>
  </svg>
);

// ─── Props ────────────────────────────────────────────────────────────────────

interface ServiceCategoryChildContentProps {
  service: ServiceDataFull;
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function ServiceCategoryChlidContent({
  service,
}: ServiceCategoryChildContentProps) {
  if (!service) return null;

  const categoryId = service.category;
  const categoryInfo = serviceCategories.find((cat) => cat.id === categoryId);
  const categoryBgClass = categoryInfo?.color || "bg-accent";
  const categoryClasses = getCategoryClasses(categoryBgClass);

  return (
    <main className="min-h-screen pt-32 bg-primary">
      {/* ── Hero ── */}
      <section className="relative min-h-scren px-6 pt-24 pb-32 lg:px-8 lg:pt-32 lg:pb-48 overflow-hidden bg-primary/70">
        {/* Organic background shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 opacity-20 pointer-events-none">
          <svg
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M150 50 Q250 100 250 200 Q200 280 100 250 Q20 200 50 100 Q100 50 150 50 Z"
              fill="url(#heroGrad1)"
            />
            <defs>
              <linearGradient
                id="heroGrad1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#788a68" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#a3b185" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-20 right-10 w-96 h-96 opacity-15 pointer-events-none">
          <svg
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="200" cy="200" r="150" fill="url(#heroGrad2)" />
            <defs>
              <linearGradient
                id="heroGrad2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ca6c28" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#bc9b0a" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="mx-auto max-w-5xl relative">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <h1 className="font-quicksand text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
                <span className={categoryClasses.text}>{service.title}</span>
              </h1>

              <p className="text-2xl md:text-3xl text-[#581b04]/60 leading-relaxed font-nunito font-light max-w-3xl mx-auto">
                {service.shortCopy}
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-4">
              <div className={`h-px w-16 ${categoryClasses.bg}`} />
              <p
                className={`text-sm uppercase tracking-widest ${categoryClasses.text} font-medium font-quicksand`}
              >
                Tailored for you
              </p>
              <div className={`h-px w-16 ${categoryClasses.bg}`} />
            </div>

            <div className="flex justify-center gap-2 pt-4">
              <div className="w-2 h-2 rounded-full bg-accent/40" />
              <div className="w-2 h-2 rounded-full bg-secondary/40" />
              <div className="w-2 h-2 rounded-full bg-complementary/40" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="px-6 py-16 lg:px-8 lg:py-24 bg-white/90">
        <div className="mx-auto max-w-7xl space-y-40">
          <ServiceCard
            key={service.id}
            service={service}
            categoryClasses={categoryClasses}
          />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-accent p-12 lg:p-20">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none">
              <svg viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="80" fill="white" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10 pointer-events-none">
              <svg viewBox="0 0 400 400" fill="none">
                <path
                  d="M200 50C250 50 300 80 320 130C340 180 330 240 290 280C250 320 180 340 130 320C80 300 40 250 40 190C40 130 90 50 200 50Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="relative z-10 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="font-quicksand text-4xl lg:text-5xl font-bold text-white">
                  Ready to Begin Your Journey?
                </h2>
                <p className="text-xl text-white/90 font-nunito font-light max-w-2xl mx-auto">
                  Let&apos;s create a personalised plan that aligns with your
                  goals and values
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href="/contact" className="cursor-pointer">
                  <Button
                    size="lg"
                    className="bg-white hover:bg-white/90 text-accent font-semibold px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-quicksand cursor-pointer"
                  >
                    Schedule a Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>

              <div className="flex items-center justify-center gap-8 pt-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="font-nunito">Personalised approach</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span className="font-nunito">Flexible scheduling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────

function ServiceCard({
  service,
  categoryClasses,
}: {
  service: ServiceDataFull;
  categoryClasses: CategoryClasses;
}) {
  const isEven = true;
  const illustration = service.icon
    ? iconIllustrations[service.icon] ?? defaultIllustration
    : defaultIllustration;

  const getHoverClasses = () => {
    if (categoryClasses.bg === "bg-accent")
      return "hover:bg-accent! hover:text-white hover:border-accent!";
    if (categoryClasses.bg === "bg-secondary")
      return "hover:bg-secondary! hover:text-white hover:border-secondary!";
    if (categoryClasses.bg === "bg-complementary")
      return "hover:bg-complementary! hover:text-white hover:border-complementary!";
    return "hover:bg-accent! hover:text-white hover:border-accent!";
  };

  return (
    <article className="space-y-16">
      {/* Top row: illustration + main copy */}
      <div
        className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          !isEven ? "lg:grid-flow-dense" : ""
        }`}
      >
        {/* ── Content ── */}
        <div className={`space-y-8 ${!isEven ? "lg:col-start-2" : ""}`}>
          {/* Full copy */}
          <p className="text-xl text-[#581b04]/70 leading-relaxed font-nunito font-light">
            {service.fullCopy}
          </p>

          {/* What we offer */}
          <div className="space-y-4">
            <h3
              className={`font-quicksand text-sm uppercase tracking-widest font-semibold ${categoryClasses.text} opacity-70`}
            >
              What we offer
            </h3>
            <div className="space-y-3">
              {service.features.map((feature, i) => (
                <div key={`${feature}-${i}`} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2
                      className={`w-5 h-5 ${categoryClasses.text}`}
                    />
                  </div>
                  <p
                    className={`font-bold text-${categoryClasses.bg.replace(
                      "bg-",
                      ""
                    )} text-lg md:text-xl leading-relaxed flex-1 font-nunito`}
                  >
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <Link href="/contact" className="cursor-pointer">
              <Button
                variant="outline"
                size="lg"
                className={`cursor-pointer border-2 ${categoryClasses.border} ${
                  categoryClasses.text
                } ${getHoverClasses()} font-semibold rounded-full px-8 transition-all duration-300 font-quicksand`}
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* ── Illustration ── */}
        <div
          className={`relative ${
            !isEven ? "lg:col-start-1 lg:row-start-1" : ""
          }`}
        >
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary-light/40 to-white/40 border-2 border-accent/10">
            {illustration}
          </div>
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-complementary/20 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-secondary/20 blur-2xl pointer-events-none" />
        </div>
      </div>

      {/* ── Bottom row: Who Is It For + How It Works ── */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Who Is It For */}
        <div
          className={`rounded-2xl border border-accent/10 bg-primary/30 p-8 lg:p-10 space-y-6`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full ${categoryClasses.bg} flex items-center justify-center flex-shrink-0`}
            >
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3
              className={`font-quicksand text-xl font-bold ${categoryClasses.text}`}
            >
              Who is this for?
            </h3>
          </div>
          <ul className="space-y-3">
            {service.whoIsItFor.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div
                  className={`flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full ${categoryClasses.bg}`}
                />
                <p className="text-[#581b04]/70 font-nunito text-base leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* How It Works */}
        <div
          className={`rounded-2xl border border-accent/10 bg-white/60 p-8 lg:p-10 space-y-6`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full ${categoryClasses.bg} flex items-center justify-center flex-shrink-0`}
            >
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <h3
              className={`font-quicksand text-xl font-bold ${categoryClasses.text}`}
            >
              How it works
            </h3>
          </div>
          <ol className="space-y-4">
            {service.howItWorks.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span
                  className={`flex-shrink-0 w-7 h-7 rounded-full ${categoryClasses.bg} text-white text-xs font-bold font-quicksand flex items-center justify-center mt-0.5`}
                >
                  {i + 1}
                </span>
                <p className="text-[#581b04]/70 font-nunito text-base leading-relaxed">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Divider — not shown after last item */}
      <div
        className={`h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent`}
      />
    </article>
  );
}

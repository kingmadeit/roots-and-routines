"use client";

import { useEffect, useState } from "react";
import { TestimonialData } from "@/types";

// ─── Palettes ─────────────────────────────────────────────────────────────────

const CARD_PALETTES = [
  {
    cardBg: "bg-[#fdf2e0]",
    border: "border-[#f0bf99]/60",
    quoteMark: "text-[#ca6c28]",
    headline: "text-[#581b04]",
    body: "text-[#581b04]/75",
    divider: "border-[#ca6c28]/20",
    avatarBg: "bg-[#ca6c28]",
    avatarText: "text-white",
    author: "text-[#581b04]/60",
  },
  {
    cardBg: "bg-[#788a68]/70",
    border: "border-[#a3b185]/40",
    quoteMark: "text-white",
    headline: "text-white",
    body: "text-white/80",
    divider: "border-white/20",
    avatarBg: "bg-white",
    avatarText: "text-[#788a68]",
    author: "text-white/60",
  },
  {
    cardBg: "bg-[#f0bf99]/70",
    border: "border-[#ca6c28]/30",
    quoteMark: "text-[#581b04]",
    headline: "text-[#581b04]",
    body: "text-[#581b04]/75",
    divider: "border-[#581b04]/15",
    avatarBg: "bg-[#581b04]",
    avatarText: "text-white",
    author: "text-[#581b04]/60",
  },
  {
    cardBg: "bg-[#ca6c28]/90",
    border: "border-[#f0bf99]/30",
    quoteMark: "text-white",
    headline: "text-white",
    body: "text-white/85",
    divider: "border-white/20",
    avatarBg: "bg-white",
    avatarText: "text-[#ca6c28]",
    author: "text-white/60",
  },
  {
    cardBg: "bg-[#a3b185]/80",
    border: "border-[#788a68]/40",
    quoteMark: "text-white",
    headline: "text-white",
    body: "text-white/85",
    divider: "border-white/20",
    avatarBg: "bg-white",
    avatarText: "text-[#788a68]",
    author: "text-white/60",
  },
  {
    cardBg: "bg-[#bc9b0a]/80",
    border: "border-[#715204]/30",
    quoteMark: "text-white",
    headline: "text-white",
    body: "text-white/85",
    divider: "border-white/20",
    avatarBg: "bg-white",
    avatarText: "text-[#715204]",
    author: "text-white/60",
  },
] as const;

// ─── Card ─────────────────────────────────────────────────────────────────────
// • Dynamic width: text grows rightward (min 220px / max 420px)
// • Fixed height: fills the 160px row container
// • Body clamped to 4 lines so nothing overflows vertically

const TestimonyCard = ({
  testimonial,
  index,
}: {
  testimonial: TestimonialData;
  index: number;
}) => {
  const p = CARD_PALETTES[index % CARD_PALETTES.length];

  return (
    <article
      className={`
        group relative flex flex-col justify-between gap-2
        rounded-2xl border ${p.cardBg} ${p.border}
        px-5 py-4 h-full
        transition-all duration-300 hover:brightness-105 hover:shadow-lg
        opacity-80 hover:opacity-100
      `}
      style={{ minWidth: "220px", maxWidth: "420px", width: "max-content" }}
    >
      <div className="flex flex-col gap-1.5 flex-1 min-w-0">
        {/* Inline quote mark */}
        <span
          className={`font-quicksand text-2xl leading-none select-none ${p.quoteMark} opacity-30`}
          aria-hidden="true"
        >
          &ldquo;
        </span>

        {/* Optional headline */}
        {testimonial.headline && (
          <h3
            className={`font-quicksand text-sm font-bold ${p.headline} leading-snug`}
          >
            {testimonial.headline}
          </h3>
        )}

        {/* Body — strictly 4 lines max */}
        <blockquote
          className={`font-nunito text-sm leading-relaxed ${p.body}`}
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {testimonial.content}
        </blockquote>
      </div>

      {/* Author */}
      <footer
        className={`flex items-center gap-2 pt-2 border-t ${p.divider} flex-shrink-0`}
      >
        <div
          className={`w-6 h-6 rounded-full ${p.avatarBg} flex items-center justify-center flex-shrink-0`}
        >
          <span
            className={`font-quicksand text-[9px] font-bold ${p.avatarText}`}
          >
            {testimonial.author.split(" ")[0].charAt(0).toUpperCase()}
          </span>
        </div>
        <span
          className={`font-quicksand text-[11px] font-semibold tracking-wide ${p.author} whitespace-nowrap`}
        >
          — {testimonial.author}
        </span>
      </footer>
    </article>
  );
};

// ─── Testimonial Section ──────────────────────────────────────────────────────

const Testimonial = ({
  data = [],
}: {
  data: TestimonialData[] | undefined;
}) => {
  const [activeQuote, setActiveQuote] = useState(0);

  const featured = data.filter((t) => t.headline);

  useEffect(() => {
    if (featured.length <= 1) return;
    const id = setInterval(
      () => setActiveQuote((prev) => (prev + 1) % featured.length),
      5000
    );
    return () => clearInterval(id);
  }, [featured.length]);

  if (!data || data.length === 0) return null;

  // Row split — evens → row 1 (scrolls left), odds → row 2 (scrolls right)
  const row1 = data.filter((_, i) => i % 2 === 0);
  const row2 = data.filter((_, i) => i % 2 !== 0);

  // Triple so the loop is seamless even on wide screens
  const marqueeRow1 = [...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2];

  return (
    <section className="relative bg-[#fdf2e0] py-20 lg:py-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 pointer-events-none">
        <svg viewBox="0 0 500 500" fill="none">
          <path
            d="M250 50 Q400 100 420 250 Q440 400 280 430 Q120 460 80 300 Q40 140 250 50Z"
            fill="url(#tBg1)"
          />
          <defs>
            <linearGradient id="tBg1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ca6c28" />
              <stop offset="100%" stopColor="#788a68" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] opacity-10 pointer-events-none">
        <svg viewBox="0 0 300 300" fill="none">
          <circle cx="150" cy="150" r="130" fill="url(#tBg2)" />
          <defs>
            <linearGradient id="tBg2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#bc9b0a" />
              <stop offset="100%" stopColor="#a3b185" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ── Header ── */}
      <div className="px-6 lg:px-8 mx-auto max-w-7xl relative mb-16 lg:mb-20">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-[#ca6c28]" />
            <p className="text-sm uppercase tracking-widest text-[#ca6c28] font-medium font-quicksand">
              Families we&apos;ve supported
            </p>
            <div className="h-px w-16 bg-[#ca6c28]" />
          </div>
          <h2 className="font-quicksand text-5xl lg:text-6xl font-bold text-[#ca6c28] leading-tight">
            What families say
          </h2>
          <p className="text-xl text-[#581b04]/60 font-nunito font-light max-w-2xl mx-auto leading-relaxed">
            Real experiences from real families — shared with warmth and
            honesty.
          </p>
        </div>

        {/* ── Featured rotating quote ── */}
        {featured.length > 0 && featured[activeQuote] && (
          <div className="mt-14">
            <div className="relative mx-auto max-w-3xl rounded-3xl bg-complementary p-10 lg:p-14 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/10 pointer-events-none" />
              <span
                className="font-quicksand text-8xl leading-none text-white/20 select-none absolute top-6 left-10"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <div className="relative z-10 space-y-5">
                <h3 className="font-quicksand text-2xl font-bold text-white">
                  {featured[activeQuote].headline}
                </h3>
                <p className="font-nunito text-white/85 text-lg leading-relaxed">
                  {featured[activeQuote].content}
                </p>
                <p className="font-quicksand text-sm font-semibold text-white/60 tracking-wide">
                  — {featured[activeQuote].author}
                </p>
              </div>
              {featured.length > 1 && (
                <div className="flex gap-2 mt-8">
                  {featured.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveQuote(i)}
                      aria-label={`Show quote ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeQuote ? "bg-white w-6" : "bg-white/30 w-1.5"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ── CSS keyframes ── */}
      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scroll-right {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .track-left  {
          display: flex;
          width: max-content;
          animation: scroll-left 50s linear infinite;
        }
        .track-right {
          display: flex;
          width: max-content;
          animation: scroll-right 62s linear infinite;
        }
        .marquee-wrap:hover .track-left,
        .marquee-wrap:hover .track-right {
          animation-play-state: paused;
        }
      `}</style>

      {/*
        Two rows, each 200px tall.
        Cards are h-full so they fill the row.
        Width is driven by content (min/max clamped via inline style).
        Edge fades use the exact section bg colour.
      */}
      <div className="marquee-wrap relative space-y-3">
        {/* Row 1 → left */}
        <div className="overflow-hidden" style={{ height: "230px" }}>
          <div className="track-left gap-3 h-full">
            {marqueeRow1.map((t, i) => (
              <div key={`r1-${i}`} className="h-full flex-shrink-0">
                <TestimonyCard testimonial={t} index={i % row1.length} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 → right */}
        <div className="overflow-hidden" style={{ height: "230px" }}>
          <div className="track-right gap-3 h-full">
            {marqueeRow2.map((t, i) => (
              <div key={`r2-${i}`} className="h-full flex-shrink-0">
                <TestimonyCard
                  testimonial={t}
                  index={(i % row2.length) + row1.length}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative dots */}
      <div className="flex justify-center gap-2 pt-14">
        <div className="w-2 h-2 rounded-full bg-[#ca6c28]/40" />
        <div className="w-2 h-2 rounded-full bg-[#788a68]/40" />
        <div className="w-2 h-2 rounded-full bg-[#bc9b0a]/40" />
      </div>
    </section>
  );
};

export default Testimonial;

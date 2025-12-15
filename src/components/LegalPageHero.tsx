interface LegalPageHeroProps {
  title: string
  lastUpdated: string
  gradientFrom?: string
  gradientVia?: string
  gradientTo?: string
}

export function LegalPageHero({
  title,
  lastUpdated,
}: LegalPageHeroProps) {
  return (
    <section className="relative py-32 md:pt-40 overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="font-quicksand text-4xl md:text-5xl lg:text-6xl font-bold text-[#581b04] mb-6">{title}</h1>
        <p className="text-lg text-[#581b04]/70 font-nunito">Last updated: {lastUpdated}</p>
      </div>
    </section>
  )
}

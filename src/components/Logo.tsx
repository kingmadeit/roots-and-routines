import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="relative group cursor-pointer z-50">
      <div className="w-20 h-20 md:w-24 md:h-24 relative rounded-full ring-bg-primary/20 group-hover:ring-2 group-hover:ring-bg-accent transition-all duration-300 ease-out group-hover:scale-105">
        <Image
          src="/logo.png"
          alt="Roots & Routines Logo"
          width={96}
          height={96}
          className="rounded-full shadow-lg"
          priority
          sizes="(max-width: 768px) 80px, 96px"
        />
        {/* Decorative accent dot */}
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>
  )
}

export default Logo

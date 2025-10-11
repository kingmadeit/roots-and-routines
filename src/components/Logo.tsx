import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="relative group mt-4 cursor-pointer">
      <div className="w-20 h-20 md:w-24 md:h-24 relative transition-transform duration-300 ease-out hover:scale-105">
        <Image
          src="/logo.png"
          alt="Roots & Routines Logo"
          width={96}
          height={96}
          className="rounded-full shadow-lg border border-transparent ring-4 ring-accent group-hover:border-1 group-hover:border-accent/50 transition-all duration-300"
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

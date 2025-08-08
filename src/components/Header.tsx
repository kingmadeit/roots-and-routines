import { Nav } from "@/components"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className="header absolute top-0 left-0 w-full flex items-center justify-between px-16">
      <div className="logo">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={100}
            height={50}
          />
        </Link>
      </div>
      <Nav />
    </header>
  )
}

export default Header
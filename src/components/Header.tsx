import { Nav } from "@/components"
import Image from "next/image"

const Header = () => {
  return (
    <header className="header flex items-center justify-between p-8">
      <div className="logo">
        <Image
          src="/logo.png"
          alt="Company Logo"
          width={100}
          height={50}
        />
      </div>
      <Nav />
    </header>
  )
}

export default Header
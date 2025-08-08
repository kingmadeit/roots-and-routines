import { siteData } from "@/data"
import Link from "next/link"
const Nav = () => {
  return (
    <nav className="nav flex gap-4 pr-4">
      <ul className="flex gap-4">
        {siteData.navigation.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="relative text-accent font-bold link-lightning text-accent hover:text-orange-500">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
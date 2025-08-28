import { siteData } from "@/data";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className="nav flex gap-4 pr-4">
      <ul className="flex gap-4">
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
    </nav>
  );
};

export default Nav;

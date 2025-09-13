import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/data";
import { FaInstagram, FaTiktok, FaWhatsapp, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialIcons: Record<string, React.ElementType> = {
  instagram: FaInstagram,
  tiktok: FaTiktok,
  whatsapp: FaWhatsapp,
  phone: FaPhone,
  email: MdEmail,
};

export default function Footer() {
  const { company, navigation, socialLinks, contact } = siteData;

  return (
    <footer className="bg-secondary py-12 translate-y-[60px]">
      <div className=" max-w-7xl mx-auto px-4 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Logo + Hours + Socials */}
        <div>
          <div className="logo rounded-full overflow-hidden">
            <Link href="/" className="cursor-pointer">
              <Image
                className="rounded-full"
                src="/logo.png"
                alt="Company Logo"
                width={100}
                height={50}
                objectFit="cover"
              />
            </Link>
          </div>
          <h2 className="text-2xl font-bold mb-4">{company.name}</h2>
          <p className="text-sm mb-4">{contact.businessHours}</p>
          <div className="flex gap-4">
            {socialLinks.map(({ platform, url, display }) => {
              const Icon = socialIcons[platform];
              return (
                <Link
                  key={platform}
                  href={url}
                  aria-label={display}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Icon && (
                    <Icon className="h-5 w-5 hover:text-white transition" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Column 2: Main Nav */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {navigation.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Utility Pages */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/terms" className="hover:text-white transition">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-10 text-center text-xs">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}

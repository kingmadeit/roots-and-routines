import Link from "next/link";
import { siteData } from "@/data";
import { Mail, Phone } from "lucide-react";


interface IconProps {
  className?: string;
}

const TikTokIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.296-1.956-1.296-3.205V1h-3.73v14.72c0 2.252-1.835 4.087-4.087 4.087s-4.087-1.835-4.087-4.087 1.835-4.087 4.087-4.087c.3 0 .593.033.873.095V7.999a7.84 7.84 0 0 0-.873-.049C4.284 7.95.533 11.701.533 16.342S4.284 24.734 8.925 24.734s8.392-3.751 8.392-8.392V9.188a9.63 9.63 0 0 0 5.283 1.562V7.021a6.255 6.255 0 0 1-3.279-1.459z"/>
  </svg>
);

const WhatsAppIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.085"/>
  </svg>
);

const InstagramIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// Type for icon components
type IconComponent = React.ComponentType<{ className?: string }>;

const socialIcons: Record<string, IconComponent> = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  whatsapp: WhatsAppIcon,
  phone: Phone,
  email: Mail,
};

export default function Footer() {
  const { company, navigation, socialLinks, contact } = siteData;
  const [ weekDays, time ] = contact.businessHours!.split(',');
  return (
    <footer className="bg-secondary/90 pt-12 pb-8 translate-y-[60px] rounded-t-full">
      <div className=" max-w-7xl mx-auto px-4 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Logo + Hours + Socials */}
        <div className="text-center sm:text-center">
          <div className="flex gap-4 justify-center items-center">
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
          <p className="text-sm mt-4">{weekDays}</p>
          <p className="text-sm mt-4">{time}</p>
        </div>

        {/* Column 2: Main Nav */}
        <div className="text-center sm:text-center">
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
        <div className="text-center sm:text-center">
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
        <div className="text-center sm:text-center">
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
      <div className="mt-10 text-center text-x text-white/30">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}

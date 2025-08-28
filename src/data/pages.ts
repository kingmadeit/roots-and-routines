import { SiteData } from "@/types";
import { siteData } from "@/data";

export const pagesData = {
  home: {
    meta: {
      title: `${siteData.company.name} | ${siteData.company.tagline}`,
      description: siteData.company.story,
      image: "/images/home-og.jpg",
    },
    hero: {
      title: siteData.company.tagline,
      subtitle: siteData.company.slogan,
      cta: { label: "Get Started", href: "/contact" },
      image: "/img-2.jpg",
    },
    aboutTeaser: {
      shortCopy: siteData.company.story,
      cta: { label: "Learn More", href: "/about" },
    },
    servicesTeaser: {
      title: "Our Services",
      description:
        "Practical, personalized support for every stage of family life.",
      featuredServices: siteData.services.map((service) => ({
        id: service.id,
        title: service.title,
        shortCopy: service.shortCopy,
        href: `/services/${service.id}`,
      })),
    },
    packagesTeaser: {
      title: "Packages & Pricing",
      description: "Flexible support options to fit your family’s needs.",
      featuredPackages: siteData.packages.map((pkg) => ({
        id: pkg.id,
        name: pkg.name,
        price: pkg.price,
        currency: pkg.currency,
        shortDescription: pkg.description,
        href: `/packages/${pkg.id}`,
        isPopular: pkg.isPopular ?? false,
      })),
    },
    founderTeaser: {
      name: siteData.founder.name,
      title: siteData.founder.title,
      shortCopy: siteData.founder.shortCopy,
      href: "/about#founder",
    },
    contactCTA: {
      title: "Get in Touch",
      description:
        "Not sure what you need? Start with a call and we'll guide you from there.",
      cta: { label: "Contact Us", href: "/contact" },
    },
  },

  about: {
    meta: {
      title: `About | ${siteData.company.name}`,
      description: siteData.company.story,
      image: "/images/about-og.jpg",
    },
    fullCopy: siteData.company.story,
    mission: siteData.company.mission,
    philosophy: siteData.company.philosophy,
    whyItMatters: siteData.company.story,
    founder: {
      name: siteData.founder.name,
      title: siteData.founder.title,
      fullCopy: siteData.founder.fullCopy,
      background: siteData.founder.background,
      meta: siteData.founder.meta,
    },
  },

  founder: {
    meta: siteData.founder.meta,
    fullCopy: siteData.founder.fullCopy,
    background: siteData.founder.background,
  },

  services: siteData.services.reduce((acc, service) => {
    acc[service.id] = {
      meta: service.meta,
      title: service.title,
      fullCopy: service.fullCopy,
      features: service.features,
    };
    return acc;
  }, {} as Record<string, { meta?: { title: string; description: string; image?: string }; title: string; fullCopy: string; features: string[] }>),

  packages: siteData.packages.reduce((acc, pkg) => {
    acc[pkg.id] = {
      meta: pkg.meta,
      name: pkg.name,
      price: pkg.price,
      currency: pkg.currency,
      duration: pkg.duration,
      description: pkg.description,
      features: pkg.features,
      isPopular: pkg.isPopular ?? false,
    };
    return acc;
  }, {} as Record<string, { meta?: { title: string; description: string; image?: string }; name: string; price: number; currency: string; duration?: string; description: string; features: string[]; isPopular: boolean }>),

  contact: {
    meta: {
      title: `Contact | ${siteData.company.name}`,
      description:
        "Get in touch with Roots & Routines for personalized family support.",
      image: "/images/contact-og.jpg",
    },
    email: siteData.contact.email,
    phone: siteData.contact.phone,
    whatsapp: siteData.contact.whatsapp,
    businessHours: siteData.contact.businessHours,
  },
};

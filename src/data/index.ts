import { SiteData } from "@/types";

// Main site data structure
// This is a mock data structure for the Roots & Routines website
// It includes company information, navigation, social links, services, packages, founder info, and contact details

export const siteData: SiteData = {
  company: {
    name: "Roots & Routines",
    tagline: "Empowering Families to Thrive",
    slogan: "Tailored Support for the Modern Family", 
    mission: "Whether you're navigating early parenthood, school admissions, or simply juggling life's many moving parts, we're here to help simplify the process and to help families feel rooted in their values and confident in their routines – through curated, caring and comprehensive support.",
    whyItMatters: "Families today are stretched – and we believe support shouldn't be one-size-fits-all. With a background in childcare, nutrition, household management, office management, research skills and administration, Roots & Routines was born to provide modern families with the kind of personal, reliable and thoughtful support they truly deserve.",
    foundedWith: "At Roots & Routines we believe every family deserves tailored support to feel grounded, balanced and at ease in their daily lives. Our support is parent led and experience based. Founded with care and intention, Roots and Routines Family Concierge is a personalised service dedicated to helping families create smoother home routines, find trusted support and make confident decisions for their child's wellbeing."
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Founder", href: "/founder" },
    { label: "Contact", href: "/contact" }
  ],

  socialLinks: [
    { platform: "instagram", url: "#", display: "Instagram" }, 
    { platform: "tiktok", url: "#", display: "TikTok" },
    { platform: "email", url: "mailto:hello@rootsandroutines.co.uk", display: "hello@rootsandroutines.co.uk" },
    { platform: "whatsapp", url: "#", display: "WhatsApp" }, 
    { platform: "phone", url: "tel:+44", display: "+44" } 
  ],

  services: [
    {
      id: "family-meals-nutrition",
      title: "Family Meals & Nutrition",
      shortDescription: "Weekly meal planning, grocery lists, and nutrition coaching tailored to your family's needs.",
      features: [
        "Weekly meal planning",
        "Tailored grocery shopping lists to fit your families nutritional needs",
        "Meal prep support",
        "Child nutrition tips and guidance",
        "Picky eater tips & nutrition coaching"
      ],
      categories: []
    },
    {
      id: "parent-support",
      title: "New Parent Support",
      shortDescription: "Comprehensive support for new parents including trusted referrals and guidance.",
      features: [
        "Referrals to trusted maternity nannies, night nannies, live-in and live-out nannies",
        "Breastfeeding and weaning tips",
        "Daily routine and sleep routine tips and support",
        "Emotional well-being tips and supports for parents",
        "Sleep tips & emotional support for new parents"
      ],
      categories: []
    },
    {
      id: "sourcing-referrals",
      title: "Sourcing & Referrals",
      shortDescription: "Vetted professionals and trusted services for your family's needs.",
      features: [
        "Babysitters",
        "Child therapists",
        "Holiday clubs and after school activities",
        "Family friendly events and days out",
        "Vetted babysitters, therapists, tutors",
        "Enrichment classes"
      ],
      categories: []
    },
    {
      id: "education-guidance",
      title: "School and Activity Guidance",
      shortDescription: "Expert help finding schools, nurseries, and activities that align with your family values.",
      features: [
        "Help finding nurseries, schools and after school clubs that align with the values, needs & wants of your family",
        "Support with applications and decision-making",
        "Support with visits, shortlisting & application prep",
        "Referrals to tutors & educational therapists"
      ],
      categories: []
    },
    {
      id: "routines-scheduling",
      title: "Routines & Scheduling",
      shortDescription: "Custom family routines and scheduling support for smoother daily flow.",
      features: [
        "Custom daily/weekly/monthly family routines",
        "Calendar and schedule planning for busy households",
        "Bespoke family routines (daily & weekly)",
        "Calendar creation for smoother flow",
        "Support in building consistency & habits"
      ],
      categories: []
    },
    {
      id: "family-wellness",
      title: "Family Wellness Add-Ons",
      shortDescription: "Holistic wellness support for the whole family's wellbeing.",
      features: [
        "Sleep and hygiene routines",
        "Emotional regulation strategies for children",
        "Stress reduction plans for parents",
        "Parent wellness planning & stress reduction tools"
      ],
      categories: []
    }
  ],

  packages: [
    {
      id: "first-steps",
      name: "First Steps Call",
      price: 60,
      currency: "£",
      description: "One-hour phone or Zoom consult + tailored email summary with next steps and trusted resources.",
      features: [
        "1-hour consultation (phone or Zoom)",
        "Tailored email summary",
        "Next steps guidance",
        "Trusted resource recommendations"
      ]
    },
    {
      id: "family-planning",
      name: "Family Planning Session",
      price: 250,
      currency: "£",
      description: "Comprehensive guidance on school/nursery search, referrals, custom family routine & nutrition planning.",
      features: [
        "School/nursery search guidance",
        "Trusted referrals",
        "Custom family routine planning",
        "Nutrition planning",
        "Comprehensive support session"
      ],
      isPopular: true
    },
    {
      id: "monthly-concierge",
      name: "Monthly Concierge",
      price: 400,
      currency: "£",
      duration: "month",
      description: "Ongoing flexible support with weekly check-ins, tailored planning, and unlimited email access.",
      features: [
        "Weekly check-ins",
        "Tailored ongoing planning",
        "Unlimited email access",
        "Flexible support as needed",
        "Priority booking"
      ]
    }
  ],

  founder: {
    name: "Samantha Houston",
    title: "Founder & Family Concierge",
    bio: "Hi I'm the heart behind Roots & Routines – and trust me, I get it. Life with little ones can be beautiful, busy and sometimes completely bonkers.",
    background: [
      "Background in nannying, nutrition and family wellbeing",
      "Years of experience in office management, admin and research",
      "Supported busy households and coordinated schedules",
      "Sourced trusted childcare and created organizational systems",
      "Passion for helping families not just manage – but thrive"
    ]
  },

  contact: {
    email: "hello@rootsandroutines.co.uk", 
    phone: "+44 11 1234 5678", 
    whatsapp: "#123456789", 
    businessHours: "Monday - Friday, 9:00 AM - 6:00 PM" 
  }
};
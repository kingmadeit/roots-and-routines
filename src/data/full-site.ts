import { SiteData } from "@/types";
import {
  Heart,
  Baby,
  Utensils,
  Clock,
  GraduationCap,
  UserSearch,
} from "lucide-react";
const sloganSplit = "--split--";

export const siteData: SiteData = {
  company: {
    name: "Roots & Routines",
    tagline: "Empowering Families to Thrive",
    subline:
      "Support that grows with your family - helping to bring structure, calm & clarity. From early years to school transitions and beyond",
    slogan: `Tailored${sloganSplit} support ${sloganSplit} for the ${sloganSplit} Modern Family ${sloganSplit} Parent led and experience based`,
    sloganSplit,
    mission:
      "We help families feel grounded, confident, and supported in their daily lives, simplifying routines and providing trusted guidance every step of the way.",
    philosophy:
      "Families today are stretched, and one-size-fits-all solutions don’t work. Our experience in childcare, nutrition, and household management ensures personalised, reliable support for your unique family needs.",
    story:
      "Founded with care and intention, Roots & Routines Family Concierge is a personalised service dedicated to helping families create smoother home routines, find trusted support, and make confident decisions for their child's wellbeing.",
    logo: "/logo.png",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "What We Offer", href: "/services" },
    { label: "Founder", href: "/about/founder" },
    { label: "Contact", href: "/contact" },
  ],

  socialLinks: [
    { platform: "instagram", url: "https://www.instagram.com/routinesandroots", display: "Instagram" },
    { platform: "tiktok", url: "#", display: "TikTok" },
    {
      platform: "email",
      url: "mailto:rootsandroutines@gmail.com",
      display: "rootsandroutines@gmail.com",
    },
    { platform: "whatsapp", url: "#", display: "WhatsApp" },
    { platform: "phone", url: "tel:+44", display: "+44" },
  ],

  services: [
    {
      id: "family-meals",
      title: "Family Meals & Nutrition",
      shortCopy:
        "Stress-free meal planning and nutrition support tailored to your family.",
      fullCopy:
        "Dinner doesn't have to be stressful. At Roots & Routines, we help busy families create weekly meal plans, generate grocery lists that fit your nutritional goals, and provide light meal prep guidance. We also give tips for picky eaters, ensuring every child gets the nourishment they need.",
      features: [
        "Weekly meal planning",
        "Tailored grocery shopping lists",
        "Light meal prep guidance",
        "Child nutrition tips",
        "Picky eater strategies",
      ],
      category: "daily-operations",
      icon: 'Utensils',
    },
    {
      id: "routines-scheduling",
      title: "Routines & Scheduling",
      shortCopy:
        "Custom family routines and scheduling support for a smoother daily flow.",
      fullCopy:
        "We create bespoke daily, weekly, and monthly routines to help your family thrive. From calendars to consistent habits, our support ensures structure without stress, making it easier to balance work, school, and family life.",
      features: [
        "Custom daily/weekly/monthly routines",
        "Calendar and schedule planning",
        "Support building consistent habits",
      ],
      category: "daily-operations",
      icon: 'Clock',
    },
    {
      id: "sourcing-referrals",
      title: "Sourcing & Referrals",
      shortCopy:
        "Vetted professionals and family-friendly services delivered to your fingertips.",
      fullCopy:
        "Finding reliable childcare, tutors, or enrichment programs can be stressful. We connect you with vetted babysitters, therapists, tutors, holiday clubs, after-school activities, and family-friendly events to ensure your household runs smoothly with trustworthy support.",
      features: [
        "Vetted babysitters and nannies",
        "Child therapists and tutors",
        "Holiday clubs and after-school activities",
        "Family-friendly events and outings",
      ],
      category: "finding-support",
      icon: 'UserSearch',
    },
    {
      id: "education-guidance",
      title: "School & Activity Guidance",
      shortCopy:
        "Expert guidance to find schools, nurseries, and activities aligned with your values.",
      fullCopy:
        "We help families find nurseries, schools, and after-school clubs that match your values and needs. From shortlisting and visit prep to application guidance, we support decision-making and connect you with trusted educational professionals.",
      features: [
        "School and nursery search aligned with family values",
        "Support with visits, shortlisting, and applications",
        "Referrals to tutors and educational therapists",
      ],
      category: "finding-support",
      icon: 'GraduationCap',
    },
    {
      id: "parent-support",
      title: "New Parent Support",
      shortCopy:
        "Guidance and trusted referrals for new parents navigating early family life.",
      fullCopy:
        "Navigating early parenthood can be overwhelming. We provide referrals to trusted maternity and night nannies, offer breastfeeding and weaning tips, support daily routines and sleep schedules, and provide emotional well-being guidance to help parents feel supported and confident.",
      features: [
        "Trusted maternity and night nanny referrals",
        "Breastfeeding and weaning guidance",
        "Daily routine and sleep support",
        "Emotional well-being strategies for parents",
      ],
      category: "wellness-growth",
      icon: 'Baby',
    },
    {
      id: "family-wellness",
      title: "Family Wellness Add-Ons",
      shortCopy:
        "Holistic support for sleep, emotional regulation, and stress reduction.",
      fullCopy:
        "We offer additional wellness support for families, including establishing healthy sleep and hygiene routines, strategies for children's emotional regulation, and stress reduction plans for parents, ensuring the entire family thrives together.",
      features: [
        "Sleep and hygiene routines",
        "Emotional regulation strategies for children",
        "Parent stress reduction plans and wellness support",
      ],
      category: "wellness-growth",
      icon: 'Heart',
    },
  ],
  packages: [
    {
      id: "first-steps",
      name: "First Steps Call",
      price: 60,
      currency: "£",
      description:
        "One-hour phone or Zoom consult with a tailored email summary and trusted next steps.",
      features: [
        "1-hour consultation (phone or Zoom)",
        "Tailored follow-up email",
        "Next steps guidance",
        "Trusted resources included",
      ],
      meta: {
        title: "First Steps Call | Roots & Routines",
        description:
          "Start with a one-hour consultation to understand your family's needs and get trusted guidance.",
      },
    },
    {
      id: "family-planning",
      name: "Family Planning Session",
      price: 250,
      currency: "£",
      description:
        "Comprehensive guidance on school searches, referrals, routines, and nutrition planning.",
      features: [
        "School/nursery search guidance",
        "Trusted referrals",
        "Custom family routine planning",
        "Nutrition planning",
        "Comprehensive support session",
      ],
      isPopular: true,
      meta: {
        title: "Family Planning Session | Roots & Routines",
        description:
          "Full family planning session to guide school search, routines, and nutrition for your household.",
      },
    },
    {
      id: "monthly-concierge",
      name: "Monthly Concierge",
      price: 400,
      currency: "£",
      duration: "month",
      description:
        "Ongoing flexible support with weekly check-ins, planning, and unlimited email access.",
      features: [
        "Weekly check-ins",
        "Tailored ongoing planning",
        "Unlimited email access",
        "Flexible support",
        "Priority scheduling",
      ],
      meta: {
        title: "Monthly Concierge | Roots & Routines",
        description:
          "Ongoing concierge support for your family with weekly check-ins, planning, and flexible assistance.",
      },
    },
  ],

  founder: {
    name: "Samantha Houston",
    title: "Founder & Family Concierge",
    shortCopy: "Helping families thrive with structure, care, and confidence.",
    fullCopy:
      "Hi, I’m Samantha Houston, the heart behind Roots & Routines. With experience in nannying, nutrition, family wellbeing, and office management, I help families organize routines, find trusted childcare, and make everyday life smoother. My passion is ensuring parents feel supported and children thrive.",
    background: [
      "Nannying, nutrition, and family wellbeing expertise",
      "Years in office management, admin, and research",
      "Supported busy households and coordinated schedules",
      "Sourced trusted childcare and organized daily routines",
      "Passionate about helping families thrive",
    ],
    meta: {
      title: "Samantha Houston | Founder of Roots & Routines",
      description:
        "Meet Samantha Houston, founder of Roots & Routines, providing thoughtful family support and concierge services.",
    },
  },

  contact: {
    email: "hello@rootsandroutines.co.uk",
    phone: "+44 11 1234 5678",
    whatsapp: "#123456789",
    businessHours: "Monday - Friday, 9:00 AM - 6:00 PM",
  },

  faq: {
    title: "Frequently Asked Questions",
    categories: [
      {
        id: "general",
        name: "General",
        questions: [
          {
            id: "faq-general-1",
            category: "general",
            question: "What is Roots & Routines Family Concierge?",
            answer:
              "Roots & Routines is a family-focused concierge service designed to bring ease, structure, and support into your home. We help parents with everything from meal planning and nutrition guidance to sourcing childcare, setting routines, and finding trusted family resources. Think of us as your go-to support system for family life.",
          },
          {
            id: "faq-general-2",
            category: "general",
            question: "Who can benefit from your services?",
            answer:
              "Any parent, parent-to-be, or family who wants extra support in managing the busy demands of home life. Whether you're a new parent navigating sleepless nights, a busy family juggling schedules, or simply looking for more structure and calm—we're here for you.",
          },
          {
            id: "faq-general-3",
            category: "general",
            question: "How do I get started with Roots & Routines?",
            answer:
              "You can start by reaching out through our contact form or social media links. We'll arrange an initial consultation to understand your family's needs and create a tailored support plan that works for you.",
          },
          {
            id: "faq-general-4",
            category: "general",
            question: "Do you work with families outside of your location?",
            answer:
              "Yes! While we love working with families locally, many of our services—such as meal planning, nutrition support, routines, and sourcing—can be provided virtually.",
          },
        ],
      },
      {
        id: "services",
        name: "Services & Support",
        questions: [
          {
            id: "faq-services-1",
            category: "services",
            question: "What types of support do you provide for new parents?",
            answer:
              "We offer practical and emotional support including referrals to trusted maternity and night nannies, breastfeeding and weaning guidance, sleep and hygiene routines, and wellbeing add-ons like stress reduction and emotional regulation tips for new parents.",
          },
          {
            id: "faq-services-2",
            category: "services",
            question: "Do you help with finding childcare (nannies, babysitters, maternity nurses, night nannies)?",
            answer:
              "Yes. We carefully source and recommend childcare professionals, ensuring they are trusted, experienced, and suited to your family's unique needs.",
          },
          {
            id: "faq-services-3",
            category: "services",
            question: "Can you assist with meal planning and nutrition?",
            answer:
              "Absolutely. From tailored weekly grocery lists to healthy meal prep and child nutrition advice, we help families eat well with ease.",
          },
          {
            id: "faq-services-4",
            category: "services",
            question: "Do you help families find schools, nurseries, or after-school clubs?",
            answer:
              "Yes—we research and provide recommendations for schools, nurseries, after-school activities, holiday clubs, and even family-friendly events to fit your lifestyle and needs.",
          },
          {
            id: "faq-services-5",
            category: "services",
            question: "Do you provide routine or scheduling support for families?",
            answer:
              "We specialise in creating personalised routines that bring balance to your home—covering sleep, meals, school schedules, playtime, and parent self-care.",
          },
        ],
      },
      {
        id: "bookings",
        name: "Bookings & Pricing",
        questions: [
          {
            id: "faq-bookings-1",
            category: "bookings",
            question: "How do I book your services?",
            answer:
              "Simply contact us via email or social media. We'll arrange a consultation to understand your needs and suggest the best support package.",
          },
          {
            id: "faq-bookings-2",
            category: "bookings",
            question: "Do you offer one-time consultations or ongoing support packages?",
            answer:
              "Both. Some families prefer one-time guidance, while others benefit from ongoing, hands-on support. We'll work with you to find the right fit.",
          },
          {
            id: "faq-bookings-3",
            category: "bookings",
            question: "What are your rates?",
            answer:
              "Our services are tailored, so pricing depends on your specific needs. We'll provide a clear outline after our initial consultation.",
          },
          {
            id: "faq-bookings-4",
            category: "bookings",
            question: "Is there a minimum or maximum commitment required?",
            answer:
              "No—you can book what works best for your family, whether that's a single session or a long-term package.",
          },
        ],
      },
      {
        id: "trust",
        name: "Trust & Safety",
        questions: [
          {
            id: "faq-trust-1",
            category: "trust",
            question: "How do you choose or vet the professionals you recommend (nannies, therapists, etc.)?",
            answer:
              "We only recommend trusted, experienced professionals. Each referral is thoroughly researched, and we ensure they meet high standards for safety, professionalism, and care.",
          },
          {
            id: "faq-trust-2",
            category: "trust",
            question: "Are your services confidential?",
            answer:
              "Yes. Your family's privacy is our priority. All conversations and arrangements are kept completely confidential.",
          },
          {
            id: "faq-trust-3",
            category: "trust",
            question: "Do you provide references or testimonials?",
            answer: "Yes—upon request, we're happy to share feedback from families we've supported.",
          },
        ],
      },
      {
        id: "extras",
        name: "Extras",
        questions: [
          {
            id: "faq-extras-1",
            category: "extras",
            question: "Can I gift Roots & Routines services to a family member or friend?",
            answer:
              "Yes! Support is a beautiful gift. We offer gift options for expecting parents, new parents, and busy families.",
          },
          {
            id: "faq-extras-2",
            category: "extras",
            question: "Do you offer virtual support as well as in-person?",
            answer:
              "Yes—many of our services, such as meal planning, routines, nutrition support, and sourcing, are available virtually for families everywhere.",
          },
        ],
      },
    ],
  },

};

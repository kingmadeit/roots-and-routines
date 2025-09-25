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
      "From school searches to meal planning and trusted childcare, we make daily life simpler—so you can focus on what matters most.",
    slogan: `tailored${sloganSplit} support ${sloganSplit} for the ${sloganSplit} Modern Family ${sloganSplit} Parent led and experience based`,
    sloganSplit,
    mission:
      "We help families feel grounded, confident, and supported in their daily lives, simplifying routines and providing trusted guidance every step of the way.",
    philosophy:
      "Families today are stretched, and one-size-fits-all solutions don’t work. Our experience in childcare, nutrition, and household management ensures personalized, reliable support for your unique family needs.",
    story:
      "Founded with care and intention, Roots & Routines Family Concierge is a personalised service dedicated to helping families create smoother home routines, find trusted support, and make confident decisions for their child's wellbeing.",
    logo: "/logo.png",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Founder", href: "/about/founder" },
    { label: "Contact", href: "/contact" },
  ],

  socialLinks: [
    { platform: "instagram", url: "#", display: "Instagram" },
    { platform: "tiktok", url: "#", display: "TikTok" },
    {
      platform: "email",
      url: "mailto:hello@rootsandroutines.co.uk",
      display: "hello@rootsandroutines.co.uk",
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
      icon: Utensils,
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
      icon: Clock,
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
      icon: UserSearch,
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
      icon: GraduationCap,
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
      icon: Baby,
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
      icon: Heart,
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
    subtitle: "Everything you need to know about our family support services",
    questions: [
      {
        id: "what-is-roots-routines",
        question: "What is Roots & Routines Family Concierge?",
        answer: "We're a personalized family support service that helps busy families create smoother routines, find trusted childcare, and make confident decisions for their children's wellbeing. From meal planning to school searches, we provide tailored guidance and vetted referrals to simplify your family life."
      },
      {
        id: "how-to-get-started",
        question: "How do I get started with your services?",
        answer: "The best way to start is with our First Steps Call - a one-hour consultation where we understand your family's unique needs and provide immediate, actionable guidance. From there, we can recommend the most suitable ongoing support package for your situation."
      },
      {
        id: "areas-covered",
        question: "What areas do you cover?",
        answer: "We primarily serve families in the UK, with specialized knowledge of local schools, childcare providers, and family services. For certain services like meal planning and routine guidance, we can support families remotely regardless of location."
      },
      {
        id: "meal-planning-process",
        question: "How does your meal planning service work?",
        answer: "We create customized weekly meal plans based on your family's dietary needs, preferences, and busy schedule. This includes tailored grocery shopping lists, light meal prep guidance, and strategies for picky eaters. We focus on nutritious, family-friendly meals that fit your lifestyle."
      },
      {
        id: "childcare-vetting",
        question: "How do you vet childcare providers?",
        answer: "All our childcare referrals undergo thorough background checks, reference verification, and personal interviews. We assess their experience, qualifications, and compatibility with different family dynamics. We only recommend providers we would trust with our own families."
      },
      {
        id: "school-search-support",
        question: "What's included in your school search guidance?",
        answer: "We help you identify schools and nurseries aligned with your family values, provide shortlisting support, prepare you for visits and interviews, assist with applications, and connect you with trusted educational professionals. Our guidance is tailored to your child's specific needs and your family's priorities."
      },
      {
        id: "routine-customization",
        question: "How do you customize family routines?",
        answer: "We assess your current family dynamics, work schedules, and goals to create bespoke daily, weekly, and monthly routines. This includes calendar organization, habit-building support, and flexible systems that grow with your family's changing needs."
      },
      {
        id: "package-differences",
        question: "What's the difference between your service packages?",
        answer: "Our First Steps Call (£60) is perfect for immediate guidance on specific questions. The Family Planning Session (£250) offers comprehensive support across multiple areas like school searches and routine planning. Our Monthly Concierge (£400) provides ongoing flexible support with weekly check-ins and unlimited email access."
      },
      {
        id: "payment-options",
        question: "What payment options do you offer?",
        answer: "We accept bank transfers, online payments, and can arrange payment plans for our Monthly Concierge service. Payment is required at the time of booking for consultations, and monthly packages are billed in advance."
      },
      {
        id: "response-time",
        question: "How quickly do you respond to requests?",
        answer: "We aim to respond to all emails within 24 hours during business days (Monday-Friday, 9 AM-6 PM). Monthly concierge clients receive priority response times, typically within 4-6 hours during business hours."
      },
      {
        id: "emergency-support",
        question: "Do you offer emergency childcare support?",
        answer: "While we don't provide emergency services, our network includes trusted providers who may have last-minute availability. Monthly concierge clients have priority access to our rapid referral service for urgent childcare needs."
      },
      {
        id: "follow-up-support",
        question: "What follow-up support do you provide?",
        answer: "All consultations include a detailed follow-up email with personalized recommendations and trusted resources. We're available for brief follow-up questions via email, and can schedule additional sessions as your family's needs evolve."
      }
    ]
  }

};

import { SiteData } from "@/types";

const sloganSplit = "--split--";

export const siteData: SiteData = {
  company: {
    name: "Roots & Routines",
    tagline: "Empowering Families to Thrive",
    subline:
      "From school searches to meal planning and trusted childcare, we make daily life simpler—so you can focus on what matters most.",
    slogan: `Tailored Support ${sloganSplit} for the Modern Family`,
    sloganSplit,
    mission:
      "We help families feel grounded, confident, and supported in their daily lives, simplifying routines and providing trusted guidance every step of the way.",
    philosophy:
      "Families today are stretched, and one-size-fits-all solutions don’t work. Our experience in childcare, nutrition, and household management ensures personalized, reliable support for your unique family needs.",
    story:
      "Founded with care and intention, Roots & Routines Family Concierge is a personalised service dedicated to helping families create smoother home routines, find trusted support, and make confident decisions for their child's wellbeing.",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
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
        "Dinner doesn’t have to be stressful. At Roots & Routines, we help busy families create weekly meal plans, generate grocery lists that fit your nutritional goals, and provide light meal prep guidance. We also give tips for picky eaters, ensuring every child gets the nourishment they need.",
      features: [
        "Weekly meal planning",
        "Tailored grocery shopping lists",
        "Light meal prep guidance",
        "Child nutrition tips",
        "Picky eater strategies",
      ],
      categories: [],
      meta: {
        title: "Family Meals & Nutrition | Roots & Routines",
        description:
          "Tailored meal planning, grocery lists, and nutrition guidance to simplify mealtimes for your family.",
      },
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
      categories: [],
      meta: {
        title: "New Parent Support | Roots & Routines",
        description:
          "Trusted referrals, sleep and routine support, and guidance for new parents to navigate early parenthood.",
      },
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
      categories: [],
      meta: {
        title: "Sourcing & Referrals | Roots & Routines",
        description:
          "Vetted childcare, tutors, and family activities to simplify planning and ensure trusted support.",
      },
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
      categories: [],
      meta: {
        title: "School & Activity Guidance | Roots & Routines",
        description:
          "Support in choosing schools, nurseries, and activities for your child with expert guidance and referrals.",
      },
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
      categories: [],
      meta: {
        title: "Routines & Scheduling | Roots & Routines",
        description:
          "Personalized family routines and scheduling solutions to simplify your household flow.",
      },
    },
    {
      id: "family-wellness",
      title: "Family Wellness Add-Ons",
      shortCopy:
        "Holistic support for sleep, emotional regulation, and stress reduction.",
      fullCopy:
        "We offer additional wellness support for families, including establishing healthy sleep and hygiene routines, strategies for children’s emotional regulation, and stress reduction plans for parents, ensuring the entire family thrives together.",
      features: [
        "Sleep and hygiene routines",
        "Emotional regulation strategies for children",
        "Parent stress reduction plans and wellness support",
      ],
      categories: [],
      meta: {
        title: "Family Wellness | Roots & Routines",
        description:
          "Support your family’s overall wellbeing with sleep, emotional regulation, and stress reduction guidance.",
      },
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
};

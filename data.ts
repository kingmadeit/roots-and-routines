import { WebsiteData } from './types';

export const websiteData: WebsiteData = {
  homePage: {
    logo: "Roots & Routines",
    navigation: [
      { label: "Instagram", url: "https://instagram.com/rootsandroutines", external: true },
      { label: "TikTok", url: "https://tiktok.com/@rootsandroutines", external: true }
    ],
    businessSlogan: "Coming soon - slogan in development"
  },

  aboutPage: {
    introduction: "At Roots & Routines we believe every family deserves tailored support to feel grounded, balanced and at ease in their daily lives. Our support is parent led and experience based.\n\nFounded with care and intention, Roots and Routines Family Concierge is a personalised service dedicated to helping families create smoother home routines, find trusted support and make confident decisions for their child's wellbeing.\n\nFrom school searches to nanny placements, from nutritional meal prep to activity planning - we're here to take the stress out of the everyday so you can focus on what matters most: connection, calm and quality time.",
    
    mission: "Whether you're navigating early parenthood, school admissions, or simply juggling life's many moving parts were to help simplify the process and to help families feel rooted in their values and confident in their routines – through curated, caring and comprehensive support.",
    
    whyItMatters: "Families today are stretched – and we believe support shouldn't be one-size-fits-all. With a background in childcare, nutrition, household management, office management, research skills and administration, Routes & Routines was born to provide modern families with the kind of personal, reliable and thoughtful support they truly deserve.",
    
    whatWeOffer: [
      {
        title: "PARENT SUPPORT",
        services: [
          "Referrals to trusted maternity nannies, night nannies, live-in and live-out nannies",
          "Breastfeeding and weaning tips",
          "Daily routine and sleep routine tips and support",
          "Emotional well-being tips and supports for parents"
        ]
      },
      {
        title: "SCHOOL AND ACTIVITY GUIDANCE",
        services: [
          "Help finding nurseries, schools and after school clubs that align with the values, needs & wants of your family",
          "Support with applications and decision-making"
        ]
      },
      {
        title: "TRUSTED SOURCING",
        services: [
          "Babysitters",
          "Child therapists",
          "Holiday clubs and after school activities",
          "Family friendly events and days out"
        ]
      },
      {
        title: "FAMILY MEALS AND NUTRITION",
        services: [
          "Weekly meal planning",
          "Tailored grocery shopping lists to fit your families nutritional needs",
          "Meal prep support",
          "Child nutrition tips and guidance"
        ]
      },
      {
        title: "ROUTINES & SCHEDULING",
        services: [
          "Custom daily/weekly/monthly family routines",
          "Calendar and schedule planning for busy households"
        ]
      },
      {
        title: "FAMILY WELLNESS ADD-ONS",
        services: [
          "Sleep and hygiene routines",
          "Emotional regulation strategies for children",
          "Stress reduction plans for parents"
        ]
      }
    ]
  },

  founderPage: {
    name: "Samantha Houston",
    bio: "Hi I'm the heart behind Roots & Routines – and trust me, I get it. Life with little ones can be beautiful, busy and sometimes completely bonkers.\n\nWith my background in nannying, nutrition and family wellbeing – plus years of experience in office management, admin and research – I bring both the heart and the systems that help families run smoothly. My background and experience allows me to approach each family's needs with a combination of empathy, precision and efficiency. I know how to create structure in the chaos, tailor solutions for different parenting styles and maintain discretion, reliability and professionalism throughout.\n\nWhether its organising a weekly meal plan, finding a great nursery/school or helping a new parent get some sleep (and peace of mind) I've been there and I know how to help. I've supported busy households, coordinated schedules, sourced trusted childcare and even colour coded routines that actually stick.\n\nI started Routes and Routines because I believe family support should be thoughtful, personal and practical. I have a passion for helping families not just manage – but thrive. This isn't just what I do – its what I love. Because when families feel supported, everything flows better.\n\nI'm here to to make daily life a little lighter.\n\nLet's build your family's rhythm together.",
    signOff: "With care\n\nSamantha Houston"
  },

  contactPage: {
    email: "hello@rootsandroutines.co.uk",
    whatsapp: "To be provided",
    phone: "To be provided"
  },

  servicesPage: {
    introduction: "At Roots & Routines, we offer practical, personal support tailored to your family's needs - from early years to school transitions and beyond. We simplify the mental load by helping you plan, organise, and source what's best for your children and your home life.",
    
    services: [
      {
        title: "Family Meals & Nutrition",
        description: "Nutritional support and meal planning for busy families",
        items: [
          "Weekly meal planning",
          "Grocery shopping lists",
          "Light meal prep support",
          "Picky eater tips & nutrition coaching"
        ]
      },
      {
        title: "New Parent Support",
        description: "Comprehensive support for families with newborns and young children",
        items: [
          "Trusted referrals to maternity nurses, nannies (night/live-in/live-out)",
          "Breastfeeding & weaning guidance",
          "Sleep tips & emotional support for new parents"
        ]
      },
      {
        title: "Sourcing & Referrals",
        description: "Vetted professionals and services for your family's needs",
        items: [
          "Vetted babysitters, therapists, tutors",
          "Holiday clubs, after-school activities, and enrichment classes",
          "Family-friendly events, activities & days out"
        ]
      },
      {
        title: "Routines & Scheduling",
        description: "Custom organization systems for smoother family life",
        items: [
          "Bespoke family routines (daily & weekly)",
          "Calendar creation for smoother flow",
          "Support in building consistency & habits"
        ]
      },
      {
        title: "Family Wellness Add-Ons",
        description: "Holistic wellbeing support for the whole family",
        items: [
          "Sleep & hygiene routines",
          "Emotional regulation support for children",
          "Parent wellness planning & stress reduction tools"
        ]
      },
      {
        title: "Education Guidance",
        description: "Expert guidance through educational decisions and transitions",
        items: [
          "Help finding schools & nurseries that match your values",
          "Support with visits, shortlisting & application prep",
          "Referrals to tutors & educational therapists"
        ]
      }
    ]
  },

  packagesAndPricing: {
    packages: [
      {
        name: "First Steps Call",
        price: "£60",
        description: "One-hour phone or Zoom consult + tailored email summary with next steps and trusted resources."
      },
      {
        name: "Family Planning Session",
        price: "£250",
        description: "Includes guidance on school/nursery search, referrals, custom family routine & nutrition planning."
      },
      {
        name: "Monthly Concierge",
        price: "£400/month",
        description: "Ongoing flexible support with weekly check-ins, tailored planning, and unlimited email access."
      }
    ],
    contactInfo: {
      note: "Not sure what you need? Start with a First Steps Call and we'll guide you from there.",
      email: "hello@rootsandroutines.co.uk"
    }
  }
};

export default websiteData;
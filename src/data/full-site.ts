import { SiteData } from "@/types";
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
      "Founded with care and intention, Roots & Routines Family Concierge is a personalised service dedicated to helping families create smoother home routines, find trusted support, and make confident decisions for the wellbeing of their children.",
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
    {
      platform: "instagram",
      url: "https://www.instagram.com/routinesandroots",
      display: "Instagram",
    },
    {
      platform: "tiktok",
      url: "https://www.tiktok.com/@rootsroutines6",
      display: "TikTok",
    },
    {
      platform: "email",
      url: "mailto:rootsandroutines@gmail.com",
      display: "rootsandroutines@gmail.com",
    },
    {
      platform: "whatsapp",
      url: "https://wa.me/447784972534",
      display: "WhatsApp",
    },
    { platform: "phone", url: "tel:+447784972534", display: "+44" },
  ],

  services: [
    {
      id: "family-meals",
      title: "Meals & Nutrition",
      shortCopy:
        "Stress-free meal planning and nutrition support tailored to your family.",
      fullCopy:
        "Dinner doesn't have to be stressful. At Roots & Routines, we help busy families create weekly meal plans, generate grocery lists that fit your nutritional goals and needs, and provide easy meal prep guidance. We also give tips for fussy eaters, ensuring every child gets the nourishment they need.",
      features: [
        "Weekly meal planning and tailored grocery list",
        "Simple, balanced recipes",
        "Weaning and snack support for little ones",
        "Easy and nutritious lunch box planning and prep",
        "Nutrition support for fussy eaters",
      ],
      category: "everyday-support",
      icon: "Utensils",
    },
    {
      id: "routines-scheduling",
      title: "Routines & Scheduling",
      shortCopy:
        "Custom family routines and scheduling support for a smoother daily flow.",
      fullCopy:
        "We create bespoke daily, weekly, and monthly routines to help your family thrive. From calendars to consistent habits, our support ensures structure without stress, making it easier to balance work, school, and family life.",
      features: [
        "Family calendar and customised time management plan",
        "After school and weekend activity scheduling",
        "Morning and bedtime routine support and planning",
        "Support in creating a calm and consistent rhythm at home",
      ],
      category: "everyday-support",
      icon: "Clock",
    },
    {
      id: "childcare",
      title: "Childcare",
      shortCopy:
        "Trusted childcare professionals tailored to your family's needs.",
      fullCopy:
        "Finding reliable childcare can be stressful. We connect you with trusted nannies, maternity nurses, night nannies and babysitters for ongoing or short-term support tailored to the need of your children.",
      features: [
        "Trusted nannies, maternity nurses, night nannies and babysitters",
        "Ongoing or short-term support tailored to your child's needs",
      ],
      category: "helping-hands-and-resources",
      icon: "UserSearch",
    },
    // {
    //   id: "sourcing-referrals",
    //   title: "Sourcing & Referrals",
    //   shortCopy: "Vetted professionals and family-friendly services delivered to your fingertips.",
    //   fullCopy:
    //     "Finding reliable childcare, tutors, or enrichment programs can be stressful. We connect you with vetted babysitters, therapists, tutors, holiday clubs, after-school activities, and family-friendly events to ensure your household runs smoothly with trustworthy support.",
    //   features: [
    //     "Vetted babysitters and nannies",
    //     "Child therapists and tutors",
    //     "Holiday clubs and after-school activities",
    //     "Family-friendly events and outings",
    //   ],
    //   category: "helping-hands-and-resources",
    //   icon: "UserSearch",
    // },
    {
      id: "education-guidance",
      title: "Education & Learning",
      shortCopy:
        "Expert guidance to find schools, nurseries, and activities aligned with your values.",
      fullCopy:
        "We help families find nurseries, schools, and after-school clubs that match your values and needs. From shortlisting and visit prep to application guidance, we support decision-making and connect you with trusted educational professionals.",
      features: [
        "Nursery, school & tutor recommendations",
        "Guidance and support through applications and admissions",
        "Shortlisting and decision making support",
      ],
      category: "helping-hands-and-resources",
      icon: "GraduationCap",
    },
    {
      id: "activities-enrichment",
      title: "Activities & Enrichment",
      shortCopy: "Enriching activities and experiences for your family.",
      fullCopy:
        "We help you find local after school clubs, weekend classes, holiday camps and family-friendly events. From cultural experiences to creative activities, we connect you with enriching opportunities for children of all ages.",
      features: [
        "Finding local after school clubs, weekend classes and activities",
        "Holiday camps and family friendly local and national events",
        "Finding cultural and creative experiences for families and children of all ages",
      ],
      category: "helping-hands-and-resources",
      icon: "Activity",
    },
    {
      id: "parent-support",
      title: "New Parent Support",
      shortCopy:
        "Guidance and trusted referrals for new parents navigating early family life.",
      fullCopy:
        "Navigating early parenthood can be overwhelming. We provide referrals to trusted maternity and night nannies, offer breastfeeding and weaning tips, support daily routines and sleep schedules, and provide emotional well-being guidance to help parents feel supported and confident.",
      features: [
        "Prenatal and postnatal nutrition guidance and wellbeing support",
        "Access to trusted local resources and services",
        "Referrals to maternity and night nannies",
        "Feeding, weaning and sleeping guidance",
        "Gentle scheduling for daily balance and calm",
      ],
      category: "wellness-growth",
      icon: "Baby",
    },
    {
      id: "family-wellness",
      title: "Wellness + Add-Ons",
      shortCopy:
        "Holistic support for sleep, emotional regulation, and stress reduction.",
      fullCopy:
        "We offer additional wellness support for families, including establishing healthy sleep and hygiene routines, strategies for children's emotional regulation, and stress reduction plans for parents, ensuring the entire family thrives together.",
      features: [
        "Family wellbeing check-ins and resources",
        "Stress reduction and mindfulness strategies",
        "Sleep and hygiene guidance for children",
        "Emotional regulation and behavioural support",
        "Connections to local family support groups and services",
      ],
      category: "wellness-growth",
      icon: "Heart",
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
      "Sourced trusted childcare and organised daily routines",
      "Passionate about helping families thrive",
    ],
    meta: {
      title: "Samantha Houston | Founder of Roots & Routines",
      description:
        "Meet Samantha Houston, founder of Roots & Routines, providing thoughtful family support and concierge services.",
    },
  },

  contact: {
    email: "rootsandroutines@gmail.com",
    phone: "+447784972534",
    whatsapp: "https://wa.me/447784972534",
    businessHours: "Monday - Friday, 9:00 AM - 6:00 PM",
  },
  testimonials: [
    {
      headline: "The support we didn’t realise we needed.",
      content:
        "Working with Roots & Routines was one of the best decisions we made as new parents. The guidance was calm, practical and never overwhelming. It felt like having someone in our corner who truly understood what early parenthood is like.",
      author: "Emily & Daniel",
    },
    {
      headline: null,
      content:
        "What began as support during the newborn stage has grown into a trusted relationship. The guidance continues to help us as our child grows.",
      author: "Maya & Jonathan",
    },
    {
      headline: null,
      content:
        "Roots & Routines provided a level of personalised support that felt truly concierge. Every detail was thoughtfully considered, and the nanny we were matched with has been wonderful.",
      author: "Charlotte & Oliver",
    },
    {
      headline: null,
      content:
        "With a toddler already at home, welcoming a newborn felt overwhelming. The support helped us balance both children and create routines that worked for the whole family.",
      author: "Sophie",
    },
    {
      headline: null,
      content:
        "Our families live abroad, so we felt quite alone when our baby arrived. Roots & Routines helped create the sense of a village we were missing",
      author: "Anna & Daniel",
    },
    {
      headline: null,
      content:
        "We appreciated how respectful and thoughtful the support was around our cultural traditions and parenting preferences. It felt very personal and conditioner.",
      author: "Fatima & Khalid",
    },
    {
      headline: null,
      content:
        "Recovering from a C-section while learning to care for a newborn was challenging. The support we received allowed me to focus on healing while still feeling involved and confident as a new mum.",
      author: "Natalie",
    },
    {
      headline: null,
      content:
        "As first-time parents we had so many questions. Sammie-Joe never made us feel silly for asking them. Her guidance helped us feel confident in our decisions and reminded us that every family finds their own rhythm.",
      author: "Isabelle",
    },
    {
      headline: null,
      content:
        "Having twins was wonderful but also incredibly intense in the early weeks. The support and structure we received through Roots & Routines helped us establish a rhythm that worked for both babies and ourselves.",
      author: "Laura & Ben",
    },
    {
      headline: null,
      content:
        "Moving to London with a newborn felt overwhelming at first. Roots & Routines helped us build a support network, from childcare guidance to local recommendations. It felt like having someone who truly understood what families need when settling into a new city.",
      author: "Amira & Hassan",
    },
    {
      headline: null,
      content:
        "With demanding careers and no family nearby, we knew we needed the right support after our daughter arrived. Roots & Routines helped us find a maternity nurse who was exceptional, and the guidance we received made the transition into parenthood far calmer than we expected.",
      author: "Victoria & James",
    },
    {
      headline: "Parent-led support that truly listens.",
      content:
        "What we loved most was that nothing felt forced. Sammie-Joe listened to what we wanted for our baby and helped us build routines that worked for our family rather than pushing a rigid system. That approach made all the difference.",
      author: "Aisha & Kareem",
    },
    {
      headline: "A calm presence during a very emotional time.",
      content:
        "Those first weeks after our baby arrived were a mixture of joy and exhaustion. Having guidance and reassurance from someone experienced helped us feel more confident and less alone.",
      author: "Hannah",
    },
    {
      headline: "Like having a village again.",
      content:
        "We don’t have family nearby, so having Roots & Routines support us felt like having a village around us. The help was thoughtful, personalised and exactly what we needed.",
      author: "Laura & James",
    },
    {
      headline: "Professional yet deeply personal support.",
      content:
        "The experience and care behind Roots & Routines is clear from the moment you start working together. It’s not just childcare support — it’s guidance that helps families feel confident and supported.",
      author: "Sophie & Daniel",
    },
  ],
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
            question: "What is Roots & Routines?",
            answer:
              "We're a family-focused concierge service offering tailored support for parents and children - from nutrition to childcare sourcing, school help and family wellness. We bring ease, structure and joy into everyday family life.",
          },
          {
            id: "faq-general-2",
            category: "general",
            question: "Who do we support?",
            answer:
              "We work with families of all shapes and sizes - new parents, busy working families and those looking for balance and structure at home.",
          },
          {
            id: "faq-general-3",
            category: "general",
            question: "Are your services only available in the UK?",
            answer:
              "We support families across the UK and internationally - our services are available both online and in-person.",
          },
          {
            id: "faq-general-4",
            category: "general",
            question: "How do I get started?",
            answer:
              "You can get in touch via email or WhatsApp. We'll schedule a short consultation to understand your needs and create a plan that suits your family.",
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
            question: "What kind of support do you offer?",
            answer:
              "Our services include nutrition advice and support, family routines and scheduling, new parents guidance, sourcing childcare and schools, activity and extra curricular sourcing and family wellness add-ons.",
          },
          {
            id: "faq-services-2",
            category: "services",
            question: "Can I choose a combination of services?",
            answer:
              "We specialise in personalised family plans - whether you need a one-off consultation or ongoing support we'll tailor it to fit the lifestyle, needs and values of your family.",
          },
          {
            id: "faq-services-3",
            category: "services",
            question: "Do you help find nannies and babysitters?",
            answer:
              "Yes. We connect families with trusted and vetted childcare professionals - from nannies to au pairs, babysitters, maternity nurses and night nannies. All on either long-term or short-term basis.",
          },
          {
            id: "faq-services-4",
            category: "services",
            question: "Can you help with school and nursery applications?",
            answer:
              "Yes - we do the research and shortlisting based on your needs, wants and expectations. We guide you through every step to help you make confident decisions.",
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
            question:
              "How do you ensure the professionals you recommend are trustworthy?",
            answer:
              "We carefully vet all professionals - we check references, qualifications, experience and have DBS checks.",
          },
          {
            id: "faq-trust-2",
            category: "trust",
            question: "Is my family's information kept private?",
            answer:
              "We take confidentiality very seriously. Your personal information and family's details are always handled with care and discretion. Any sensitive information you choose to share with us is only known by our founder and any other professional you work with through us and only when you've given us permission to share it with them.",
          },
          {
            id: "faq-trust-3",
            category: "trust",
            question: "Are your recommendations independent?",
            answer:
              "YES! With you leading and us supporting we choose what's genuinely best for your family with no third party influence or sponsorship.",
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
            question: "How do I book a consultation or service?",
            answer: "You can book by contacting us through email or WhatsApp.",
          },
          {
            id: "faq-bookings-2",
            category: "bookings",
            question: "Do you offer packages or one-time sessions?",
            answer:
              "Both. You can book single sessions for specific needs or choose ongoing concierge packages for consistent family support.",
          },
          {
            id: "faq-bookings-3",
            category: "bookings",
            question: "How do I make payments?",
            answer:
              "We accept secure online payments via bank transfer or payment links once your service plan is confirmed.",
          },
          {
            id: "faq-bookings-4",
            category: "bookings",
            question: "Do you charge for the initial consultation?",
            answer:
              "We offer a paid consultation to discuss your family's needs in detail and outline the best plan for you. If you choose to go ahead with our services the consultation fee is then credited towards your chosen service package.",
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
            question: "Do you provide ongoing check-ins?",
            answer:
              "Yes! Families who book an ongoing service receive regular check-ins, updates and follow-ups for continued support and adjustments.",
          },
          {
            id: "faq-extras-2",
            category: "extras",
            question:
              "Can you customise a plan if we have specific family needs?",
            answer:
              "Of course - every family is different and we pride ourselves in offering flexible, thoughtful and personal guidance.",
          },
          {
            id: "faq-extras-3",
            category: "extras",
            question: "Can you help with family events and holidays?",
            answer:
              "Definitely - we can help source family friendly getaways both nationally and internationally, local activities and events to help you create lasting memories together.",
          },
        ],
      },
    ],
  },
};

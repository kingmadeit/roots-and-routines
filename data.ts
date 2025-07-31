import { WebsiteData } from './types';

export const websiteData: WebsiteData = {
  home: {
    logo: '/logo.png', // Placeholder - update with actual logo path
    slogan: 'Tailored Support for the Modern Family', // Placeholder - update when slogan is ready
    navigation: [
      {
        id: 'about',
        label: 'About',
        href: '/about'
      },
      {
        id: 'services',
        label: 'Our Services',
        href: '/services'
      },
      {
        id: 'founders',
        label: 'Founders',
        href: '/founders'
      },
      {
        id: 'contact',
        label: 'Contact',
        href: '/contact'
      }
    ],
    socialLinks: [
      {
        id: 'instagram',
        platform: 'Instagram',
        url: 'https://instagram.com/rootsandroutines', // Placeholder - update with actual URL
        icon: 'instagram'
      },
      {
        id: 'tiktok',
        platform: 'TikTok',
        url: 'https://tiktok.com/@rootsandroutines', // Placeholder - update with actual URL
        icon: 'tiktok'
      }
    ]
  },
  about: {
    sections: [
      {
        id: 'intro',
        title: 'About Roots & Routines',
        content: 'At Roots & Routines we believe every family deserves tailored support to feel grounded, balanced and at ease in their daily lives. Our support is parent led and experience based.'
      },
      {
        id: 'founded',
        title: 'Founded with Care and Intention',
        content: 'Founded with care and intention, Roots and Routines Family Concierge is a personalised service dedicated to helping families create smoother home routines, find trusted support and make confident decisions for their child\'s wellbeing.'
      },
      {
        id: 'what-we-do',
        title: 'What We Do',
        content: 'From school searches to nanny placements, from nutritional meal prep to activity planning - we\'re here to take the stress out of the everyday so you can focus on what matters most: connection, calm and quality time.'
      }
    ],
    services: [
      {
        id: 'parent-support',
        title: 'Parent Support',
        description: 'Comprehensive support for new and experienced parents',
        features: [
          'Referrals to trusted maternity nannies, night nannies, live-in and live-out nannies',
          'Breastfeeding and weaning tips',
          'Daily routine and sleep routine tips and support',
          'Emotional well-being tips and supports for parents'
        ]
      },
      {
        id: 'school-guidance',
        title: 'School and Activity Guidance',
        description: 'Expert guidance for educational decisions',
        features: [
          'Help finding nurseries, schools and after school clubs that align with the values, needs & wants of your family',
          'Support with applications and decision-making'
        ]
      },
      {
        id: 'trusted-sourcing',
        title: 'Trusted Sourcing',
        description: 'Vetted and reliable service providers',
        features: [
          'Babysitters',
          'Child therapists',
          'Holiday clubs and after school activities',
          'Family friendly events and days out'
        ]
      },
      {
        id: 'family-meals',
        title: 'Family Meals and Nutrition',
        description: 'Nutritional planning and meal preparation support',
        features: [
          'Weekly meal planning',
          'Tailored grocery shopping lists to fit your families nutritional needs',
          'Meal prep support',
          'Child nutrition tips and guidance'
        ]
      },
      {
        id: 'routines',
        title: 'Routines & Scheduling',
        description: 'Custom scheduling and routine creation',
        features: [
          'Custom daily/weekly/monthly family routines',
          'Calendar and schedule planning for busy households'
        ]
      },
      {
        id: 'wellness',
        title: 'Family Wellness Add-Ons',
        description: 'Additional wellness and wellbeing support',
        features: [
          'Sleep and hygiene routines',
          'Emotional regulation strategies for children',
          'Stress reduction plans for parents'
        ]
      }
    ],
    mission: 'Whether you\'re navigating early parenthood, school admissions, or simply juggling life\'s many moving parts were to help simplify the process and to help families feel rooted in their values and confident in their routines – through curated, caring and comprehensive support.',
    whyItMatters: 'Families today are stretched – and we believe support shouldn\'t be one-size-fits-all. With a background in childcare, nutrition, household management, office management, research skills and administration, Routes & Routines was born to provide modern families with the kind of personal, reliable and thoughtful support they truly deserve.'
  },
  services: {
    services: [
      {
        id: 'family-meals-nutrition',
        title: 'Family Meals & Nutrition',
        description: 'At Roots & Routines, we offer practical, personal support tailored to your family\'s needs - from early years to school transitions and beyond. We simplify the mental load by helping you plan, organise, and source what\'s best for your children and your home life.',
        features: [
          'Weekly meal planning',
          'Grocery shopping lists',
          'Light meal prep support',
          'Picky eater tips & nutrition coaching'
        ]
      },
      {
        id: 'new-parent-support',
        title: 'New Parent Support',
        description: 'Comprehensive support for new parents navigating the early days',
        features: [
          'Trusted referrals to maternity nurses, nannies (night/live-in/live-out)',
          'Breastfeeding & weaning guidance',
          'Sleep tips & emotional support for new parents'
        ]
      },
      {
        id: 'sourcing-referrals',
        title: 'Sourcing & Referrals',
        description: 'Vetted and trusted service providers for your family',
        features: [
          'Vetted babysitters, therapists, tutors',
          'Holiday clubs, after-school activities, and enrichment classes',
          'Family-friendly events, activities & days out'
        ]
      },
      {
        id: 'routines-scheduling',
        title: 'Routines & Scheduling',
        description: 'Custom scheduling solutions for busy families',
        features: [
          'Bespoke family routines (daily & weekly)',
          'Calendar creation for smoother flow',
          'Support in building consistency & habits'
        ]
      },
      {
        id: 'family-wellness',
        title: 'Family Wellness Add-Ons',
        description: 'Additional wellness support for the whole family',
        features: [
          'Sleep & hygiene routines',
          'Emotional regulation support for children',
          'Parent wellness planning & stress reduction tools'
        ]
      },
      {
        id: 'education-guidance',
        title: 'Education Guidance',
        description: 'Expert guidance for educational decisions and transitions',
        features: [
          'Help finding schools & nurseries that match your values',
          'Support with visits, shortlisting & application prep',
          'Referrals to tutors & educational therapists'
        ]
      }
    ],
    packages: [
      {
        id: 'first-steps',
        name: 'First Steps Call',
        price: 60,
        currency: 'GBP',
        description: 'One-hour phone or Zoom consult + tailored email summary with next steps and trusted resources.',
        features: [
          'One-hour consultation',
          'Tailored email summary',
          'Next steps guidance',
          'Trusted resources'
        ],
        duration: '1 hour'
      },
      {
        id: 'family-planning',
        name: 'Family Planning Session',
        price: 250,
        currency: 'GBP',
        description: 'Includes guidance on school/nursery search, referrals, custom family routine & nutrition planning.',
        features: [
          'School/nursery search guidance',
          'Trusted referrals',
          'Custom family routine',
          'Nutrition planning'
        ]
      },
      {
        id: 'monthly-concierge',
        name: 'Monthly Concierge',
        price: 400,
        currency: 'GBP',
        description: 'Ongoing flexible support with weekly check-ins, tailored planning, and unlimited email access.',
        features: [
          'Weekly check-ins',
          'Tailored planning',
          'Unlimited email access',
          'Ongoing flexible support'
        ],
        duration: 'Monthly',
        popular: true
      }
    ]
  },
  contact: {
    contactMethods: [
      {
        id: 'email',
        type: 'email',
        label: 'Email',
        value: 'hello@rootsandroutines.co.uk', // Placeholder - update with actual email
        icon: 'email'
      },
      {
        id: 'whatsapp',
        type: 'whatsapp',
        label: 'WhatsApp',
        value: '+44 123 456 7890', // Placeholder - update with actual number
        icon: 'whatsapp'
      },
      {
        id: 'phone',
        type: 'phone',
        label: 'Phone',
        value: '+44 123 456 7890', // Placeholder - update with actual number
        icon: 'phone'
      }
    ],
    businessEmail: 'hello@rootsandroutines.co.uk' // Placeholder - update with actual email
  },
  founders: {
    founder: {
      name: 'Samantha Houston',
      title: 'Founder & Family Concierge',
      bio: `Hi I'm the heart behind Roots & Routines – and trust me, I get it. Life with little ones can be beautiful, busy and sometimes completely bonkers.

With my background in nannying, nutrition and family wellbeing – plus years of experience in office management, admin and research – I bring both the heart and the systems that help families run smoothly. My background and experience allows me to approach each family's needs with a combination of empathy, precision and efficiency. I know how to create structure in the chaos, tailor solutions for different parenting styles and maintain discretion, reliability and professionalism throughout.

Whether its organising a weekly meal plan, finding a great nursery/school or helping a new parent get some sleep (and peace of mind) I've been there and I know how to help. I've supported busy households, coordinated schedules, sourced trusted childcare and even colour coded routines that actually stick.

I started Routes and Routines because I believe family support should be thoughtful, personal and practical. I have a passion for helping families not just manage – but thrive. This isn't just what I do – its what I love. Because when families feel supported, everything flows better.

I'm here to to make daily life a little lighter.

Let's build your family's rhythm together.

With care
Samantha Houston`,
      credentials: [
        'Background in nannying',
        'Nutrition expertise',
        'Family wellbeing specialist',
        'Office management experience',
        'Administration skills',
        'Research capabilities'
      ]
    }
  }
};
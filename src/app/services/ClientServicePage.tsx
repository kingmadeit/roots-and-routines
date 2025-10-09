"use client"
import type React from "react"
import { siteData } from "@/data/full-site"
import type { ServiceData } from "@/types"
import { serviceCategories } from "@/constants/services"
import Link from "next/link"

interface ServiceCardProps {
  service: ServiceData
}

interface SmoothTabProps {
  className?: string
}

interface ServiceTeaserProps {
  services?: ServiceData[]
}

const { services } = siteData

const groupedServices = Object.values(
  services.reduce(
    (acc, service) => {
      if (!acc[service.category]) {
        acc[service.category] = {
          category: service.category,
          color: serviceCategories.find((category) => category.id === service.category)?.color ?? "bg-accent",
          services: [],
        }
      }
      acc[service.category].services.push(service)
      return acc
    },
    {} as Record<string, { category: string; color: string; services: typeof services }>,
  ),
)

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = service.icon

  return (
    <div className="group bg-white/15 backdrop-blur-md rounded-3xl p-8 text-white h-full flex flex-col border border-white/30 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-1 relative overflow-hidden">
      {/* Organic background decoration */}
      <svg
        className="absolute -top-10 -right-10 w-40 h-40 opacity-10 group-hover:opacity-20 transition-opacity"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,39.8,76.8C25.8,84.6,8.8,87.6,-7.2,87.1C-23.2,86.6,-38.4,82.6,-52.1,75.2C-65.8,67.8,-78,57,-84.6,43.2C-91.2,29.4,-92.2,12.6,-89.8,-3.4C-87.4,-19.4,-81.6,-34.6,-72.8,-47.4C-64,-60.2,-52.2,-70.6,-38.6,-78.1C-25,-85.6,-9.6,-90.2,4.2,-97.2C18,-104.2,30.6,-83.6,44.7,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Icon with enhanced styling */}
      <div className="relative w-24 h-24 mb-6">
        <div className="absolute inset-0 bg-white/25 rounded-3xl flex items-center justify-center backdrop-blur-sm group-hover:bg-white/35 transition-all duration-300 group-hover:scale-105">
          {/* <IconComponent className="w-12 h-12 text-white drop-shadow-lg" /> */}
        </div>
        {/* Decorative elements */}
        <div className="absolute -inset-3 bg-gradient-to-br from-white/15 to-transparent rounded-[2rem] -z-10 group-hover:from-white/25 transition-all"></div>
        <div className="absolute top-3 right-3 w-5 h-5 bg-white/40 rounded-full group-hover:scale-110 transition-transform"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 bg-white/50 rounded-full group-hover:scale-110 transition-transform"></div>
      </div>

      <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-quicksand)] tracking-wide">
        {service.title}
      </h3>
      <p className="text-white/95 mb-6 flex-grow text-base leading-relaxed font-[family-name:var(--font-nunito)]">
        {service.fullCopy}
      </p>

      {/* Enhanced features list */}
      <div className="space-y-3 mb-6">
        {service.features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-start text-sm group/item">
            <div className="w-6 h-6 bg-white/30 rounded-full mr-3 flex-shrink-0 flex items-center justify-center group-hover/item:bg-white/40 transition-colors">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-white/90 font-[family-name:var(--font-nunito)] leading-relaxed">{feature}</span>
          </div>
        ))}
        {service.features.length > 3 && (
          <div className="text-sm text-white/70 ml-9 font-[family-name:var(--font-nunito)] italic">
            +{service.features.length - 3} more features
          </div>
        )}
      </div>
    </div>
  )
}

const SmoothTab: React.FC<SmoothTabProps> = ({ className }) => {
  return (
    <div className={`w-full max-w-[90%] mx-auto ${className || ""}`}>
      <div className="relative min-h-[500px]">
        {groupedServices.map(({ category, color, services }, categoryIndex) => (
          <div key={category} className={`${color} rounded-[2.5rem] p-12 mb-32 relative overflow-hidden shadow-2xl`}>
            {/* Organic SVG background illustrations */}
            <svg
              className="absolute top-0 left-0 w-full h-full opacity-10"
              viewBox="0 0 1200 800"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Large organic shape top right */}
              <path
                fill="currentColor"
                d="M800,100 Q950,150 1000,300 T950,500 Q900,600 800,650 T650,600 Q600,550 650,450 T800,100"
                opacity="0.3"
              />

              {/* Medium organic shape bottom left */}
              <path
                fill="currentColor"
                d="M200,500 Q300,450 400,500 T500,650 Q450,750 350,700 T200,500"
                opacity="0.25"
              />

              {/* Small accent circles */}
              <circle cx="150" cy="200" r="80" fill="currentColor" opacity="0.2" />
              <circle cx="1050" cy="650" r="60" fill="currentColor" opacity="0.15" />
              <circle cx="600" cy="150" r="40" fill="currentColor" opacity="0.2" />

              {/* Flowing lines */}
              <path
                d="M0,400 Q300,350 600,400 T1200,400"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.15"
              />
              <path
                d="M0,450 Q300,500 600,450 T1200,450"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.1"
              />
            </svg>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/15 via-transparent to-white/15 rounded-[2.5rem]"></div>

            {/* Decorative blurred circles */}
            <div className="absolute top-12 right-12 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-12 left-12 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

            {/* Category header */}
            <div className="relative z-10 mb-10">
              <h3 className="text-4xl font-bold text-white mb-3 font-[family-name:var(--font-antonio)] tracking-wide uppercase">
                {/* {serviceCategories.find((cat) => cat.id === category)?.name} */}
              </h3>
              <p className="text-white/90 text-lg font-[family-name:var(--font-nunito)]">
                {serviceCategories.find((cat) => cat.id === category)?.description}
              </p>
            </div>

            {/* Content grid */}
            <div className="relative z-10 grid gap-8 grid-cols-1 md:grid-cols-2 mb-8">
              {services.map((service, index) => (
                <div key={service.id}>
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>

            {/* Enhanced CTA button */}
            <Link href={`/service/${category}`} className="relative z-10 block">
              <button className="mx-auto mt-4 bg-white/25 hover:bg-white/35 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 flex items-center justify-center group backdrop-blur-md border-2 border-white/40 hover:border-white/60 hover:shadow-xl hover:shadow-white/20 hover:scale-105 font-[family-name:var(--font-quicksand)] text-lg">
                {/* Explore {serviceCategories.find((cat) => cat.id === category)?.name} */}
                <svg
                  className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

const ServiceTeaser: React.FC<ServiceTeaserProps> = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced hero heading */}
        <div className="text-center mb-16 relative">
          <h2 className="mt-32 text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-complementary via-accent to-complementary leading-tight font-[family-name:var(--font-antonio)] tracking-wide">
            From daily meal planning to finding the right childcare, <br /> we&apos;re here to make family life smoother
            and more joyful.
          </h2>

          {/* Decorative underline */}
          <div className="flex justify-center mt-6">
            <svg width="200" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 6C50 2, 150 10, 198 6" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#bc9b0a" />
                  <stop offset="50%" stopColor="#ca6c28" />
                  <stop offset="100%" stopColor="#bc9b0a" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <SmoothTab />
      </div>
    </section>
  )
}

export default ServiceTeaser


// {/* Services Section */ }
// <section className="px-6 py-24 lg:px-8 lg:py-32 bg-white/40 relative overflow-hidden">
//   <div className="absolute top-20 left-0 w-96 h-96 opacity-20">
//     <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path
//         d="M200 50C250 50 300 80 320 130C340 180 330 240 290 280C250 320 180 340 130 320C80 300 40 250 40 190C40 130 90 50 200 50Z"
//         fill="url(#servicesBg1)"
//       />
//       <defs>
//         <linearGradient id="servicesBg1" x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" stopColor="#788a68" />
//           <stop offset="100%" stopColor="#a3b185" />
//         </linearGradient>
//       </defs>
//     </svg>
//   </div>

//   <div className="mx-auto max-w-[1400px] relative z-10">
//     <div className="max-w-3xl mb-20">
//       <h2 className="font-nunito text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
//         How we support your family
//       </h2>
//       <p className="text-xl text-foreground/60 leading-relaxed font-light">
//         Comprehensive, personalized services designed around your unique needs and rhythm
//       </p>
//     </div>

//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {[
//         {
//           title: "School Searches",
//           description:
//             "Finding the perfect educational environment that aligns with your values and your child's needs",
//           icon: (
//             <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//               <path d="M100 30 L160 60 L160 120 L100 150 L40 120 L40 60 Z" fill="#ca6c28" opacity="0.2" />
//               <path d="M100 50 L140 70 L140 110 L100 130 L60 110 L60 70 Z" fill="#ca6c28" opacity="0.6" />
//               <rect x="85" y="80" width="30" height="35" fill="#ca6c28" />
//             </svg>
//           ),
//         },
//         {
//           title: "Nanny Placements",
//           description: "Connecting you with trusted, qualified caregivers who become part of your family",
//           icon: (
//             <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//               <circle cx="100" cy="70" r="35" fill="#788a68" opacity="0.6" />
//               <path d="M60 120 Q100 110 140 120 L135 170 Q100 180 65 170 Z" fill="#788a68" opacity="0.6" />
//               <circle cx="85" cy="65" r="5" fill="#788a68" />
//               <circle cx="115" cy="65" r="5" fill="#788a68" />
//               <path d="M90 85 Q100 90 110 85" stroke="#788a68" strokeWidth="3" fill="none" />
//             </svg>
//           ),
//         },
//         {
//           title: "Nutritional Meal Prep",
//           description: "Tailored meal planning that nourishes your family and fits your lifestyle",
//           icon: (
//             <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//               <ellipse cx="100" cy="100" rx="60" ry="70" fill="#bc9b0a" opacity="0.2" />
//               <path
//                 d="M100 40 L130 70 L130 110 C130 130 115 145 100 145 C85 145 70 130 70 110 L70 70 Z"
//                 fill="#bc9b0a"
//                 opacity="0.6"
//               />
//               <line x1="80" y1="80" x2="120" y2="80" stroke="#bc9b0a" strokeWidth="3" />
//               <line x1="80" y1="100" x2="120" y2="100" stroke="#bc9b0a" strokeWidth="3" />
//               <circle cx="100" cy="120" r="8" fill="#bc9b0a" />
//             </svg>
//           ),
//         },
//         {
//           title: "Activity Planning",
//           description: "Enriching experiences and routines that support development and joy",
//           icon: (
//             <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//               <circle cx="100" cy="100" r="60" fill="#a3b185" opacity="0.2" />
//               <path
//                 d="M100 40 L110 75 L145 80 L117 105 L125 140 L100 122 L75 140 L83 105 L55 80 L90 75 Z"
//                 fill="#a3b185"
//                 opacity="0.7"
//               />
//               <circle cx="100" cy="100" r="15" fill="#a3b185" />
//             </svg>
//           ),
//         },
//         {
//           title: "Home Routines",
//           description: "Creating sustainable structure that brings ease and flow to daily life",
//           icon: (
//             <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//               <path d="M100 30 L170 80 L155 80 L155 150 L45 150 L45 80 L30 80 Z" fill="#ca6c28" opacity="0.6" />
//               <rect x="75" y="100" width="50" height="50" fill="#ca6c28" opacity="0.3" />
//               <rect x="80" y="105" width="15" height="15" fill="white" opacity="0.5" />
//               <rect x="105" y="105" width="15" height="15" fill="white" opacity="0.5" />
//             </svg>
//           ),
//         },
//         {
//           title: "Family Guidance",
//           description: "Strategic support for confident parenting decisions and household management",
//           icon: (
//             <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
//               <circle cx="100" cy="65" r="30" fill="#788a68" opacity="0.6" />
//               <path
//                 d="M100 95 L100 130 M80 110 L100 130 L120 110"
//                 stroke="#788a68"
//                 strokeWidth="8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 opacity="0.6"
//               />
//               <circle cx="70" cy="140" r="20" fill="#788a68" opacity="0.4" />
//               <circle cx="130" cy="140" r="20" fill="#788a68" opacity="0.4" />
//             </svg>
//           ),
//         },
//       ].map((service, index) => (
//         <div
//           key={index}
//           className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-accent/10 overflow-hidden"
//         >
//           <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//             <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M100 0 L100 50 Q100 100 50 100 L0 100 L0 0 Z" fill="url(#cornerGrad)" opacity="0.1" />
//               <defs>
//                 <linearGradient id="cornerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#ca6c28" />
//                   <stop offset="100%" stopColor="#bc9b0a" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </div>

//           <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
//             <span className="text-accent font-quicksand font-bold text-sm">
//               {String(index + 1).padStart(2, "0")}
//             </span>
//           </div>

//           <div className="relative">
//             <div className="w-20 h-20 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
//               {service.icon}
//             </div>
//             <h3 className="font-quicksand text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
//               {service.title}
//             </h3>
//             <p className="text-foreground/70 leading-relaxed font-light">{service.description}</p>
//           </div>

//           <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-complementary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
//         </div>
//       ))}
//     </div>
//   </div>
// </section>
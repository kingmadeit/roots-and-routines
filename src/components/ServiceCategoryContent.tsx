// import { Animated, MediaBlock } from '@/components';
// import { slideUpTransition } from '@/styles/animations';
// import React from 'react';

// interface Service {
//   id: string;
//   title: string;
//   fullCopy: string;
//   shortCopy?: string;
//   features: string[];
// }

// interface ServiceContentContentProps {
//   services: Service[];
// }

// export default function ServiceCategoryContent({ services }: ServiceContentContentProps) {
//   return (
//     <>
//       {services.map((service, i) => (
//         <>
//           <h1>{service.title}</h1>
//           <p>{service.fullCopy}</p>

//           <ul>
//             {service.features.map((feature, i) => (
//               <li key={i}>{feature}</li>
//             ))}
//           </ul>
//         </>
//         // <MediaBlock key={service.id} type={(i+1)%2===0? 'video': 'image'} isReverse={(i+1)%2===0} src="/hi-illustration.jpg">
//         //   <h1>{service.title}</h1>
//         //   <p>{service.fullCopy}</p>
//         //   <h3
//         //     className="leading-11 text-1xl sm:text-1xl md:text-2xl font-nunito font-bold text-secondary/50 mb-4 text-center"
//         //   > {/* TODO:: TIHS SHOULD BE A COMPONENT*/}
//         //     <span className="block">Founded with</span>
//         //     <span className="font-bold text-3xl md:text-5xl text-complementary"> care and intention, </span>
//         //     <span className="block">Roots & Routines Family Concierge is a</span>
//         //     <span className="text-3xl md:text-5xl text-complementary"> personalized service dedicated to helping families </span>
//         //     create smoother home routines, find trusted support, and make confident decisions for their child&apos;s wellbeing.
//         //   </h3>
//         //   <ul>
//         //     {service.features.map((feature, i) => (
//         //       <li key={i}>{feature}</li>
//         //     ))}
//         //   </ul>
//         // </MediaBlock>
//       ))}
//     </>
//   );
// }
"use client"

import { cn } from "@/lib/utils"
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceData } from "@/types"

// import { Badge } from "@/components/ui/badge"
type Service = Omit<ServiceData, "icon">;

interface ServiceCategoryContentProps {
  services: Service[]
}

export function ServiceCategoryContent({ services }: ServiceCategoryContentProps) {
  if (!services.length) return null

  return (
    <div className="container mx-auto px-4 py-16 lg:py-24">
      {/* Category Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <div
          // variant="outline"
          className="mb-6 border-accent/30 text-accent bg-accent/5 px-6 py-2 text-sm font-medium"
        >
          <Sparkles className="w-4 h-4 mr-2 inline" />
          {services.length} Services Available
        </div>

        <h1 className="text-5xl lg:text-7xl font-serif font-bold text-accent mb-6 text-balance">
          {services[0].category
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" & ")}
        </h1>

        <p className="text-xl lg:text-2xl text-secondary leading-relaxed text-pretty">
          Discover transformative services designed to elevate your journey
        </p>
      </div>

      {/* Services Grid */}
      <div className="space-y-32">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-32 max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary/20 via-primary to-complementary/10 p-12 lg:p-16 border-2 border-secondary/20">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-complementary/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-accent mb-4 text-balance">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-secondary mb-8 text-pretty max-w-2xl mx-auto">
              Let's create a personalized plan that aligns with your goals and values
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const isEven = index % 2 === 0

  return (
    <div className={cn("grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", !isEven && "lg:grid-flow-dense")}>
      {/* Content Side */}
      <div className={cn("space-y-8", !isEven && "lg:col-start-2")}>
        {/* Header */}
        <div className="space-y-4">

          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-accent text-balance">{service.title}</h2>

          <p className="text-xl text-secondary-light leading-relaxed text-pretty">{service.fullCopy}</p>
        </div>

        {/* Bullet Points - Creative Layout */}
        <div className="space-y-4">
          {service.features.map((feature, i) => (
            <div
              key={`${feature}-${i}`}
              className="group flex gap-4 p-4 rounded-2xl bg-primary-light/20 hover:bg-primary-light/30 transition-all duration-300 border border-transparent hover:border-accent/20"
              style={{
                animationDelay: `${i * 100}ms`,
              }}
            >
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                </div>
              </div>

              <p className="text-secondary leading-relaxed flex-1 text-pretty">{feature}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-primary font-semibold rounded-full px-8 transition-all duration-300 bg-transparent"
          >
            Learn More
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Visual Side - Creative Illustration */}
      <div className={cn("relative", !isEven && "lg:col-start-1 lg:row-start-1")}>
        <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-secondary/20 to-complementary/20 border-2 border-secondary/20">
          {/* Decorative pattern overlay */}
          <div className="absolute inset-0 opacity-40">
            <svg className="w-full h-full" viewBox="0 0 400 400">
              <defs>
                <pattern id={`pattern-${index}`} x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <circle cx="40" cy="40" r="2" fill="currentColor" className="text-accent/30" />
                </pattern>
              </defs>
              <rect width="400" height="400" fill={`url(#pattern-${index})`} />
            </svg>
          </div>

          {/* Organic shapes */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-3/4 h-3/4">
              <div
                className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "4s", animationDelay: "0s" }}
              />
              <div
                className="absolute inset-0 bg-complementary/20 rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "4s", animationDelay: "2s" }}
              />
              <div
                className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
              />
            </div>
          </div>

          {/* Service number */}
          <div className="absolute bottom-8 right-8 w-20 h-20 rounded-full bg-primary border-2 border-accent flex items-center justify-center">
            <span className="text-3xl font-bold text-accent">{String(index + 1).padStart(2, "0")}</span>
          </div>
        </div>

        {/* Floating accent element */}
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-complementary/30 blur-2xl" />
        <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-secondary/30 blur-2xl" />
      </div>
    </div>
  )
}

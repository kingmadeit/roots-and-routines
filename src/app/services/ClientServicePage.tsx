"use client";
import React from "react";
import { siteData } from "@/data/full-site";
import { ServiceData } from "@/types";
import { serviceCategories } from "@/constants/services";
import Link from "next/link";

interface ServiceCardProps {
  service: ServiceData;
}

interface SmoothTabProps {
  className?: string;
}

interface ServiceTeaserProps {
  services?: ServiceData[];
}


const { services } = siteData;

const groupedServices = Object.values(
  services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = {
        category: service.category,
        color: serviceCategories.find((category) => category.id === service.category)?.color ?? 'bg-accent',
        services: []
      };
    }
    acc[service.category].services.push(service);
    return acc;
  }, {} as Record<string, { category: string; color: string; services: typeof services }>)
);

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white h-full flex flex-col border border-white/20">
      {/* Icon with illustration background */}
      <div className="relative w-20 h-20 mb-6">
        <div className="absolute inset-0 bg-white/20 rounded-2xl flex items-center justify-center">
          <IconComponent className="w-10 h-10 text-white" />
        </div>
        {/* Decorative background illustration */}
        <div className="absolute -inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-3xl -z-10"></div>
        <div className="absolute top-2 right-2 w-4 h-4 bg-white/30 rounded-full"></div>
        <div className="absolute bottom-1 left-1 w-2 h-2 bg-white/40 rounded-full"></div>
      </div>

      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-white/90 mb-6 flex-grow text-sm leading-relaxed font-nunito">
        {service.fullCopy}
      </p>

      <div className="space-y-3 mb-6">
        {service.features.slice(0, 3).map((feature, index) => (
          <div key={index} className="flex items-start text-sm">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-3 mt-2 flex-shrink-0"></div>
            <span className="text-white/80">{feature}</span>
          </div>
        ))}
        {service.features.length > 3 && (
          <div className="text-sm text-white/60 ml-4">
            +{service.features.length - 3} more features
          </div>
        )}
      </div>
    </div>
  );
};


const SmoothTab: React.FC<SmoothTabProps> = ({ className }) => {
  return (
    <div className={`w-full max-w-[90%] mx-auto ${className || ""}`}>
      {/* Content Area with tab color background */}
      <div className="relative min-h-[500px]">
        {groupedServices.map(({ category, color, services }) => (
          <div
            key={category}
            className={`${color} rounded-3xl p-8 mb-32 relative overflow-hidden`}>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-white/10 rounded-3xl"></div>
            <div className="absolute top-8 right-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>

            {/* Content grid */}
            <div className="relative z-10 grid gap-6 grid-cols-1 md:grid-cols-2">
              {services.map((service, index) => (
                <div
                  key={service.id}
                >
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
            <Link href={`/services/${category}`} className="relative cursor-pointer z-11">
              <button className=" mx-auto mt-8 bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center group backdrop-blur-sm border border-white/30">
                Learn More
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>

              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const ServiceTeaser: React.FC<ServiceTeaserProps> = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 relative">
          <h2
            className="mt-32 text-heading text-transparent bg-clip-text bg-gradient-to-r from-complementary to-accent"
          >
            From daily meal planning to finding the right childcare, <br /> we&apos;re here
            to make family life smoother and more joyful.
          </h2>
        </div>

        <SmoothTab />
      </div>
    </section>
  );
};

export default ServiceTeaser;

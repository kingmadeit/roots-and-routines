import type React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Utensils,
  Clock,
  UserSearch,
  GraduationCap,
  Baby,
  Heart,
  Activity,
} from "lucide-react";
import { siteData } from "@/data";
import dynamic from "next/dynamic";

const loading = () => (<div className="animate-pulse h-[300px]" />);
const ContactTeaser = dynamic(() => import('@/components/ContactTeaser'), { loading });
  

export const metadata: Metadata = {
  title: "Our Services | Roots & Routines",
  description:
    "Comprehensive, personalised family support services designed around your unique needs and rhythm",
};

const getCategoryClasses = (category: string) => {
  switch (category) {
    case "everyday-support":
      return {
        bg: "bg-accent",
        text: "text-accent",
        border: "border-accent",
        gradient: "from-accent to-accent/70",
      };
    case "helping-hands-and-resources":
      return {
        bg: "bg-secondary",
        text: "text-secondary",
        border: "border-secondary",
        gradient: "from-secondary to-secondary/70",
      };
    case "wellness-growth":
      return {
        bg: "bg-complementary",
        text: "text-complementary",
        border: "border-complementary",
        gradient: "from-complementary to-complementary/70",
      };
    default:
      return {
        bg: "bg-accent",
        text: "text-accent",
        border: "border-accent",
        gradient: "from-accent to-accent/70",
      };
  }
};

const getHoverTextClass = (category: string) => {
  switch (category) {
    case "everyday-support":
      return "group-hover:text-accent";
    case "helping-hands-and-resources":
      return "group-hover:text-secondary";
    case "wellness-growth":
      return "group-hover:text-complementary";
    default:
      return "group-hover:text-accent";
  }
};

const iconComponents: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Utensils,
  Clock,
  UserSearch,
  GraduationCap,
  Baby,
  Heart,
  Activity,
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-primary/60">
      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-32 lg:px-8 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 opacity-20">
          <svg
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M150 50 Q250 100 250 200 Q200 280 100 250 Q20 200 50 100 Q100 50 150 50 Z"
              fill="url(#heroGrad1)"
            />
            <defs>
              <linearGradient
                id="heroGrad1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#788a68" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#a3b185" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute bottom-20 right-10 w-96 h-96 opacity-15">
          <svg
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="200" cy="200" r="150" fill="url(#heroGrad2)" />
            <circle cx="200" cy="200" r="100" fill="url(#heroGrad3)" />
            <defs>
              <linearGradient
                id="heroGrad2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ca6c28" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#bc9b0a" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient
                id="heroGrad3"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#f0bf99" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#fdf2e0" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="mx-auto max-w-5xl relative">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <h1 className="font-quicksand text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.5] text-primary-light">
                Comprehensive, <br />
                <span className="font-nunito text-6xl md:text-7xl lg:text-8xl text-accent font-nunito font-extrabold">
                  personalised services
                </span>
                <br /> designed around your <br />
                <span className="font-nunito text-5xl md:text-7xl lg:text-8xl text-[#581b04] font-nunito font-extrabold">
                  unique needs
                </span>{" "}
                and rhythm
              </h1>
            </div>

            <div className="flex items-center justify-center gap-3 pt-4">
              <div className="h-px w-16 bg-[#581b04]" />
              <p className="text-sm uppercase tracking-widest text-[#581b04] font-medium font-quicksand">
                Tailored for you
              </p>
              <div className="h-px w-16 bg-[#581b04]" />
            </div>

            {/* Decorative dots */}
            <div className="flex justify-center gap-2 pt-8">
              <div className="w-2 h-2 rounded-full bg-accent/40" />
              <div className="w-2 h-2 rounded-full bg-secondary/40" />
              <div className="w-2 h-2 rounded-full bg-complementary/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="px-6 py-16 bg-complementary/70 lg:px-8 lg:py-24 relative overflow-hidden">
        <div className="absolute top-20 -right-10 animate-pulse animation-duration-5000 w-96 h-96 rounded-full bg-accent/30"></div>
        <div className="absolute -bottom-10 left-5 w-96 h-96 animate-pulse animation-duration-5000 rounded-full bg-secondary/15"></div>

        <div className="mx-auto max-w-[1400px] relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-quicksand text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Our Services
            </h2>
            <p className="text-xl text-white/90 font-nunito font-light max-w-2xl mx-auto">
              Explore our comprehensive range of family support services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteData.services.map((service) => {
              const categoryClasses = getCategoryClasses(service.category);
              const hoverTextClass = getHoverTextClass(service.category);
              const IconComponent = service.icon
                ? iconComponents[service.icon]
                : null;

              return (
                <Link
                  key={service.id}
                  href={`/services/${service.category}`}
                  className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-accent/20 overflow-hidden cursor-pointer"
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${categoryClasses.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 0 L100 50 Q100 100 50 100 L0 100 L0 0 Z"
                        fill="currentColor"
                        className={`${categoryClasses.text} opacity-10`}
                      />
                    </svg>
                  </div>

                  {/* Category badge */}
                  <div
                    className={`absolute top-6 right-6 px-3 py-1.5 rounded-full ${categoryClasses.bg}/10 border ${categoryClasses.border}/20`}
                  >
                    <ArrowRight className={`w-4 h-4 ${categoryClasses.text}`} />
                  </div>

                  <div className="relative space-y-4">
                    <div
                      className={`w-16 h-16 rounded-2xl ${categoryClasses.bg}/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                    >
                      {IconComponent ? (
                        <IconComponent
                          className={`w-8 h-8 ${categoryClasses.text}`}
                        />
                      ) : (
                        <div
                          className={`w-8 h-8 rounded-lg ${categoryClasses.bg}/20`}
                        />
                      )}
                    </div>

                    {/* Updated text color */}
                    <h3
                      className={`font-quicksand text-2xl font-bold text-[#581b04] ${hoverTextClass} transition-colors duration-300`}
                    >
                      {service.title}
                    </h3>

                    {/* Updated text color */}
                    <p className="text-[#581b04]/70 leading-relaxed font-light font-nunito">
                      {service.shortCopy}
                    </p>

                    {/* Learn more indicator */}
                    <div
                      className={`flex items-center gap-2 pt-2 ${categoryClasses.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    >
                      <span className="text-sm font-medium font-quicksand">
                        Learn more
                      </span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${categoryClasses.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <ContactTeaser />
    </main>
  );
}

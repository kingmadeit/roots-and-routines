import { FeaturedService, SectionTag } from "@/components";
import { fadeInTransition, slideUpTransition } from "@/styles/animations";
import { ServicesTeaser } from "@/types";
import * as motion from "motion/react-client";

type ServiceTeaserProps = {
  services: ServicesTeaser;
};

export default function ServiceTeaser({ services }: ServiceTeaserProps) {
  const { title, description, featuredServices } = services;
  return (
    <section
      id="services"
      className="rounded-section translate-y-[-50px] bg-accent"
    >
      <SectionTag tag={title} />

      <div className="flex flex-col space-y-16 ">
        <motion.h2
          {...slideUpTransition}
          className="text-heading max-w-[80%] mx-auto md:max-w-[60%] text-center text-primary"
        >
          {description}
        </motion.h2>
        <div className="flex flex-col justify-center md:flex-row md:flex-wrap gap-4 items-center">
          {featuredServices.map((service, i) => (
            <motion.div
              {...fadeInTransition}
              transition={{ delay: 0.4 * i }}
              key={service.id}
            >
              <FeaturedService service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

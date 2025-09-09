import { FeaturedService } from "@/components";
import { ServicesTeaser } from "@/types";

type ServiceTeaserProps = {
  services: ServicesTeaser;
};

export default function ServiceTeaser({ services }: ServiceTeaserProps) {
  const { title, description, featuredServices } = services;
  return (
    <section
      id="services"
      className="translate-y-[-50px] px-4 md:px-16 pt-8 pb-32 bg-accent rounded-t-[3rem]"
    >
      <h4 className="section-name">{title}</h4>

      <div className="flex flex-col space-y-16 ">
        <h2 className="text-heading max-w-[80%] mx-auto md:max-w-[60%] text-center text-primary">
          {description}
        </h2>
        <div className="flex flex-col justify-center md:flex-row md:flex-wrap gap-4 items-center">
          {featuredServices.map((service) => (
            <FeaturedService key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

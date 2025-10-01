import { Animated, MediaBlock } from '@/components';
import { slideUpTransition } from '@/styles/animations';
import React from 'react';

interface Service {
  id: string;
  title: string;
  fullCopy: string;
  shortCopy?: string;
  features: string[];
}

interface ServiceContentContentProps {
  services: Service[];
}

export default function ServiceCategoryContent({ services }: ServiceContentContentProps) {
  return (
    <>
      {services.map((service, i) => (
        <MediaBlock key={service.id} type="image" isReverse={(i+1)%2===0} src="/hi-illustration.jpg">
          <h1>{service.title}</h1>
          <p>{service.fullCopy}</p>
          <Animated
            as="h3"
            {...slideUpTransition}
            className="leading-11 text-1xl sm:text-1xl md:text-2xl font-nunito font-bold text-secondary/50 mb-4 text-center"
          >
            <span className="block">Founded with</span>
            <span className="font-bold text-3xl md:text-5xl text-complementary"> care and intention, </span>
            <span className="block">Roots & Routines Family Concierge is a</span>
            <span className="text-3xl md:text-5xl text-complementary"> personalized service dedicated to helping families </span>
            create smoother home routines, find trusted support, and make confident decisions for their child&apos;s wellbeing.
          </Animated>
          <ul>
            {service.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </MediaBlock>
      ))}
    </>
  );
}

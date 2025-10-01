import { Animated, MediaBlock } from '@/components'
import { slideUpTransition } from '@/styles/animations'
import React from 'react'
import { siteData } from '@/data'
import ServiceTypePage from '../../../components/ServiceCategory';

const { services } = siteData;

const wellnessSerivices = services.filter((service) => service.category === 'wellness-growth')

export const metadata = {
  title: "Wellness and Growth | Roots & Routines",
  description: wellnessSerivices[0].shortCopy ?? '',
  openGraph: {
    title: "Wellness and Growth at Roots & Routines",
    description: wellnessSerivices[1].shortCopy ?? '',
  }
};

console.log('FFFFFFFFHERE')


console.log(wellnessSerivices)
const WellnessPage = () => {
  return (
    <ServiceTypePage heroClassName='bg-accent/40' contentClassName='text-accent'>
      { wellnessSerivices.map(wellness => (
      <MediaBlock key={wellness.id} type="video" src="/hi-illustration.jpg">
        <h1>{wellness.title}</h1>
        <p>{wellness.fullCopy}</p>
        <Animated as="h3" {...slideUpTransition} className="leading-11 text-1xl sm:text-1xl md:text-2xl font-nunito font-bold text-secondary/50 mb-4 text-center">
            <span className="block">Founded with</span>
            <span className="font-bold text-3xl md:text-5xl text-complementary"  > care and intention, </span>
            <span className="block">Roots & Routines Family Concierge is a</span>
            <span className="text-3xl md:text-5xl text-complementary"> personalized service dedicated to helping families </span>
            create smoother home routines, find trusted support, and make confident decisions for their child&apos;s wellbeing.
          </Animated>
          <ul>
            {wellness.features.map(feature => (
              <li>{feature}</li>
            ))}
          </ul>
      </MediaBlock>
    ))}
    </ServiceTypePage>
  )
}

export default WellnessPage
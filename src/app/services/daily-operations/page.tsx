import { Animated, MediaBlock } from '@/components'
import { slideUpTransition } from '@/styles/animations'
import React from 'react'
import { siteData } from '@/data'

const { services } = siteData;

const dailyOperations = services.filter((service) => service.category === 'daily-operations')

export const metadata = {
  title: "Daily Operations | Roots & Routines",
  description: dailyOperations[0].shortCopy ?? '',
  openGraph: {
    title: "Daily Routines at Roots & Routines",
    description: dailyOperations[1].shortCopy ?? '',
  }
};

console.log(dailyOperations)
const DailyOperations = () => {
  return (
    <div className='relative'>
      <div className='bg-accent/40 min-h-[70vh] rounded-b-4xl'></div>
      <div className='container text-accent'>
        { dailyOperations.map(operation => (
          <MediaBlock key={operation.id} type="video" src="/hi-illustration.jpg">
            <h1>{operation.title}</h1>
            <p>{operation.fullCopy}</p>
            <Animated as="h3" {...slideUpTransition} className="leading-11 text-1xl sm:text-1xl md:text-2xl font-nunito font-bold text-secondary/50 mb-4 text-center">
                <span className="block">Founded with</span>
                <span className="font-bold text-3xl md:text-5xl text-complementary"  > care and intention, </span>
                <span className="block">Roots & Routines Family Concierge is a</span>
                <span className="text-3xl md:text-5xl text-complementary"> personalized service dedicated to helping families </span>
                create smoother home routines, find trusted support, and make confident decisions for their child&apos;s wellbeing.
              </Animated>
              <ul>
                {operation.features.map(feature => (
                  <li>{feature}</li>
                ))}
              </ul>
          </MediaBlock>
        ))}
      </div>

    </div>
  )
}

export default DailyOperations
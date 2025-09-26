import { Mail, Phone } from 'lucide-react'
import React from 'react'
import {siteData} from '@/data/full-site';

const { 
  contact: { email, phone },
} = siteData;
const ContactOptions = () => {
  return (
    <div className='w-full p-4 rounded-2xl bg-white/20 text-white grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center items-center'>
      <div className='w-full h-full bg-accent/40 rounded-2xl mb-4'>

      </div>
      <div className='flex flex-col items-center space-y-8 text-center font-bold'>
        <h3 className='text-primary font-extrabold text-3xl md:text-4xl'>Our team is here to help</h3>
        <span className='text-sm font-semibold text-primary'>Please reach out to us through one of the following methods:</span>
        <div className="flex space-x-4 md:space-x-8 text-2xl">
          <a className="rounded-full bg-white/40 hover:bg-white/50 p-4 text-white" rel="noopener noreferrer" href={`mailto:${email}`} >
              <Mail />
          </a>
          <a className="rounded-full bg-white/40 hover:bg-white/50 p-4 text-white" rel="noopener noreferrer" href={`tel:${phone}`}>
              <Phone />
          </a>
        </div>
      </div>

    </div>
  )
}

export default ContactOptions

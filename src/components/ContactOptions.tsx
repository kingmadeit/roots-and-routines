import { Mail, Phone } from 'lucide-react'
import React from 'react'
import {siteData} from '@/data/full-site';

const { 
  contact: { email, phone },
} = siteData;
const ContactOptions = () => {
  return (
    <div className='p-4 rounded-2xl bg-accent text-white flex flex-col items-center space-y-4 text-center font-bold'>
      <h3 className='font-extrabold text-3xl md:text-4xl'>Our team is here to help you</h3>
      <p>Please reach out to us through one of the following methods:</p>
      <div className="flex space-x-4 md:space-x-8 text-2xl">
        <a rel="noopener noreferrer" href={`mailto:${email}`} className="text-blue-500 hover:underline">
            <Mail />
        </a>
        <a rel="noopener noreferrer" href={`tel:${phone}`} className="text-blue-500 hover:underline">
            <Phone />
        </a>
      </div>
    </div>
  )
}

export default ContactOptions

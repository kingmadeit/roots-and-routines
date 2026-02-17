import ServicesCTA from '@/components/ServicesCTA'
import ContactOptions from '@/components/ContactOptions'

const Contact = () => {
  return (
    <div className='w-full min-h-screen grid grid-col-1 place-content-center'>
      <ContactOptions />
      <div className="mx-auto my-16 px-16 md:my-32 max-w-5xl">

      <ServicesCTA />
      </div>
    </div>
  )
}

export default Contact
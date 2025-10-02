import ContactOptions from '@/components/ContactOptions'
import { div } from 'motion/react-client'

const Contact = () => {
  return (
    <div className='container'>
      <div className='w-full min-h-screen grid grid-col-1 place-content-center'>
        <ContactOptions />
      </div>
    </div>
  )
}

export default Contact
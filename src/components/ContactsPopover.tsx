import ContactOptions from "./ContactOptions"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

  
const ContactsPopover = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger className="m-4 rounded bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">
          Contact Us
        </PopoverTrigger>
        <PopoverContent className="max-w-[600px] w-[90%] bg-accent/40 p-4">
          <ContactOptions />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default ContactsPopover

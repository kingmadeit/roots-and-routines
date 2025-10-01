import clsx from "clsx";
import { ReactNode } from "react";

interface ServiceCategoryProps {
    type?: string;
    children: ReactNode;
    heroClassName?: string;
    contentClassName?: string;
}

export default function ServiceCategory (
    {type, children, heroClassName='', contentClassName=''}: ServiceCategoryProps
) {
    return (
      <div className='relative w-full'>
       <div className={clsx('min-h-[70vh] rounded-b-4xl', heroClassName)}></div>
       <div className={clsx('container', contentClassName)}>
          {children}
        </div>
        <div className="w-full h-[60px] md:h-[100px]  bg-primary rounded-lg absolute top-0"></div>
      </div>        
    )
}
import { FC, ReactNode } from "react";
import Image from "next/image";
import { Animated } from ".";
import { slideUpTransition } from "@/styles/animations";
import clsx from "clsx";

interface MediaBlockProps {
    src: string;
    children: ReactNode;
    type: 'image' | 'video';
    mediaContainerClassName?: string;
    contentContainerClassName?: string;
}

const MediaBlock:FC<MediaBlockProps> = ({type, src, children, mediaContainerClassName = '', contentContainerClassName = ''}) => {

    const mediaContent: ReactNode = type === 'video' ? (
        <video 
            src={src} 
            controls 
            className="rounded-[20%]"
            width={500}
            height={600}
        />
    ) : (
        <Image 
            src={src} 
            alt="hi illustration" 
            width={500} 
            height={600}
            className="mix-blend-multiply rounded-[20%]"
        />
    );
    

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 content-center">
            <Animated as="div" {...slideUpTransition} className={clsx("p-4 gradient-container-white", contentContainerClassName)}>
               {children}
            </Animated>
            <div className={
                clsx(
                    'w-full sticky top-0 rounded-4xl overflow-hidden flex justify-center items-center',
                    mediaContainerClassName
                )}>
                {mediaContent}
            </div>
        </div>
    )
}

export default MediaBlock;
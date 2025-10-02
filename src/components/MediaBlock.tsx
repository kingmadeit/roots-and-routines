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
    wrapperClassName?: string;
    isReverse?: boolean;
}

const MediaBlock:FC<MediaBlockProps> = ({type, src, children, mediaContainerClassName = '', contentContainerClassName = '', wrapperClassName = '', isReverse = false}) => {

    const mediaContent: ReactNode = type === 'video' ? (
        <video 
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
            controls={false} 
            className="rounded-[20%]"
            width={500}
            height={600}
            autoPlay={true}
            loop={true}
            muted
        />
    ) : (
        <Image 
            src={src} 
            alt="hi illustration" 
            width={300} 
            height={300}
            className="mix-blend-multiply rounded-[20%]"
            quality={75}
            loading="lazy"
        />
    );
    

    return (
        <div className={clsx('grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 content-center', wrapperClassName)}>
            <div className={
                clsx("p-4 animate-on-scroll", 
                isReverse ? 'order-1 md:order-2' : 'order-1',
                contentContainerClassName)}>
               {children}
            </div>
            <div className={
                clsx(
                    'w-full sticky top-0 rounded-4xl overflow-hidden flex justify-center items-center',
                    isReverse ? 'order-2 md:order-1' : 'order-2',
                    mediaContainerClassName
                )}>
                {mediaContent}
            </div>
        </div>
    )
}

export default MediaBlock;
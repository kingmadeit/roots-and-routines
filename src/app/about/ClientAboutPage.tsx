'use client'
import MediaBlock from "@/components/MediaBlock";
import { Sparkles } from "lucide-react";
import { pagesData } from "@/data/pages";
import useInViewObserver from "@/hooks/useInViewObserver";

const {
    about: {
        fullCopy, mission, philosophy, whyItMatters
    }
} = pagesData;

const ClientAboutPage = () => {
    useInViewObserver({selector: '.animate-on-scroll'});

    return (
        <div className="w-full">
            <div className="container pt-32">
                <div className="w-full p-4 flex flex-col justify-center items-center mb-32 rounded-[20%] bg-complementary min-h-[50vh] relative after:absolute after:content-[''] after:bg-white/40 after:h-[calc(100%-16px)] after:w-full after:top-8 ">
                    <h3 className="animate-on-scroll leading-11 text-1xl sm:text-1xl md:text-2xl font-nunito font-bold text-secondary/50 mb-4 text-center z-1">
                        <span className="block">Founded with</span>
                        <span className="font-bold text-3xl md:text-5xl text-complementary"  > care and intention, </span>
                        <span className="block">Roots & Routines Family Concierge is a</span>
                        <span className="text-3xl md:text-5xl text-complementary"> personalized service dedicated to helping families </span>
                        create smoother home routines, find trusted support, and make confident decisions for their child&apos;s wellbeing.
                    </h3>
                </div>
                <h1 className="text-3xl my-4 font-bold text-accent text-center">Our Mission</h1>
                <MediaBlock src={""} type={"video"} wrapperClassName="bg-secondary-light rounded-xl p-4 mb-24" contentContainerClassName="gradient-container-complementary text-white">
                    <h1 className="animate-on-scroll text-xl relative font-large text-inherit font-nunito hyphens-auto" >
                            <span>{mission}</span>
                        <Sparkles className="absolute top-[-4rem] right-[50%] w-16 h-16 text-complementary opacity-40"/>
                    </h1>
                </MediaBlock>
                <h1 className="text-3xl my-4 font-bold text-accent text-center">Our Philosophy</h1>
                <MediaBlock src="/hi-illustration.jpg" type={"image"} wrapperClassName="bg-accent/80 rounded-xl p-4 mb-24" isReverse={true} contentContainerClassName="gradient-container-complementary text-white">
                    <h1 className="animate-on-scroll text-xl relative font-large text-inherit font-nunito hyphens-auto"
                        >
                            <span>{philosophy}</span>
                        <Sparkles className="absolute top-[-4rem] right-[50%] w-16 h-16 text-green/50 opacity-40"/>
                    </h1>
                </MediaBlock>
                <h1 className="text-3xl my-4 font-bold text-accent text-center">Why It Matters</h1>
                <MediaBlock src={""} type={"video"} wrapperClassName="bg-complementary/80 rounded-xl mb-24 p-4" contentContainerClassName="gradient-container-complementary text-white">
                    <h1 className="relative text-xl text-inherit font-nunito hyphens-auto">
                            <span>{whyItMatters}</span>
                        <Sparkles className="absolute top-[-3.5rem] right-[50%] w-16 h-16 text-accent opacity-40"/>
                    </h1>
                </MediaBlock>

            </div>
        </div>
    )
}

export default ClientAboutPage;
import Animated from "@/components/Animated";
import ComingSoon from "@/components/ComingSoon";
import MediaBlock from "@/components/MediaBlock";
import { slideUpTransition } from "@/styles/animations";
import { Sparkles } from "lucide-react";
import { pagesData } from "@/data/pages";

const {
    about: {
        fullCopy, mission, philosophy, whyItMatters
    }
} = pagesData;

const ClientAboutPage = () => {
    return (
        <div className="w-full">
            <div className="container pt-32">
                <div className="w-full mb-32 rounded-[20%] bg-complementary/40 min-h-[50vh]"></div>
                <h1 className="text-3xl my-4 font-bold text-accent text-center">Our Mission</h1>
                <MediaBlock src={""} type={"video"} wrapperClassName="bg-secondary-light rounded-xl p-4 mb-24" contentContainerClassName="gradient-container-complementary text-white">
                    <Animated as="h1"
                        {...slideUpTransition}
                        className="relative font-large text-inherit font-nunito hyphens-auto"
                        >
                            <span>{mission}</span>
                        <Sparkles className="absolute top-[-3rem] right-[50%] w-16 h-16 text-secondary-light opacity-40"/>
                    </Animated>
                </MediaBlock>
                <h1 className="text-3xl my-4 font-bold text-accent text-center">Our Philosophy</h1>
                <MediaBlock src="/hi-illustration.jpg" type={"image"} wrapperClassName="bg-accent/80 rounded-xl p-4 mb-24" isReverse={true} contentContainerClassName="gradient-container-complementary text-white">
                    <Animated as="h1"
                        {...slideUpTransition}
                        className="relative font-large text-inherit font-nunito hyphens-auto"
                        >
                            <span>{philosophy}</span>
                        <Sparkles className="absolute top-[-3rem] right-[50%] w-16 h-16 text-secondary-light opacity-40"/>
                    </Animated>
                </MediaBlock>
                <h1 className="text-3xl my-4 font-bold text-accent text-center">Why It Matters</h1>
                <MediaBlock src={""} type={"video"} wrapperClassName="bg-complementary/80 rounded-xl mb-24 p-4" contentContainerClassName="gradient-container-complementary text-white">
                    <Animated as="h1"
                        {...slideUpTransition}
                        className="relative font-large text-inherit font-nunito hyphens-auto"
                        >
                            <span>{whyItMatters}</span>
                        <Sparkles className="absolute top-[-3rem] right-[50%] w-16 h-16 text-secondary-light opacity-40"/>
                    </Animated>
                </MediaBlock>

            </div>
        </div>
    )
}

export default ClientAboutPage;
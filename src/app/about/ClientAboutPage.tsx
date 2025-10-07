`use client`;
import MediaBlock from "@/components/MediaBlock";
import { Sparkles } from "lucide-react";
import useInViewObserver from "@/hooks/useInViewObserver";



const ClientAboutPage = () => {
    // useInViewObserver({ selector: `.animate-on-scroll` });

    return (
        <div className="w-full">
            <div className="container pt-32">
                <p className="text-accent text-xl font-bold leading-10 md:max-w-[50%] mx-auto">
                    At Roots & Routines we believe every family deserves tailored support to feel grounded, balanced and at ease in their daily lives. Our support is parent led and experience based

                    Founded with care and intention, Roots and Routines Family Concierge is a personalised service dedicated to helping families create smoother home routines, find trusted support and make confident decisions for their child`&apos;s wellbeing.

                    From school searches to nanny placements, from nutritional meal prep to activity planning - we`&apos;re here to take the stress out of the everyday so you can focus on what matters most: connection, calm and quality time.
                </p>
                <MediaBlock src={""} type={"video"} wrapperClassName="bg-complementary/80 rounded-xl p-4 my-24" contentContainerClassName="gradient-container-complementary text-white">
                    <h1 className=" text-xl relative font-large text-inherit font-nunito hyphens-auto" >
                        Families today are stretched - and we believe support shouldn`&apos;t be one-size-fits-all. With a background in childcare, nutrition, household management, office management, research skills and administration, Routes & Routines was born to provide modern families with the kind of personal, reliable and thoughtful support they truly deserve.
                        <Sparkles className="absolute top-[-4rem] right-[50%] w-16 h-16 text-complementary opacity-40" />
                    </h1>
                </MediaBlock>

            </div>
        </div>
    )
}

export default ClientAboutPage;
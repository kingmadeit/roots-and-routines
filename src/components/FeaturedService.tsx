import { ServiceData } from "@/types";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

type FeaturedServiceProps = {
  service: Partial<ServiceData>;
};

const FeatureService = ({ service }: FeaturedServiceProps) => {
  const { title, shortCopy, href, icon: Icon } = service;

  return (
    <section className="group rounded-xl max-w-full md:w-[400px] p-8 flex bg-primary text-center text-secondary flex-col space-y-4 items-center transition-all duration-300 ease-in-out transform will-change-transform hover:-translate-y-2">
      <div className='bg-secondary/30 p-4 rounded-full'>{Icon && <Icon className="w-6 h-6 group-hover:scale-[1.5] transition-all duration-300 ease-in-out transform" />}</div>
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="font-normal">{shortCopy}</p>
      <Link href={href!} className="font-semibold">
        Learn more
        <FaArrowRightLong className="ml-2 inline" />
      </Link>
    </section>
  );
};

export default FeatureService;

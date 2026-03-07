import { TestimonialData } from "@/types";

// TODO: implement
const TestimonyCard = () => {};

const Testimonial = ({ data }: { data: TestimonialData[] | undefined }) => {
  if (!data) return;
  console.log(`TES`);
  return <div>Testimonial {data?.length ?? 0}</div>;
};

export default Testimonial;

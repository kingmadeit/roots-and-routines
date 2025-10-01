
import { pagesData } from "@/data";
import SiteLanding from "@/components/sections/SiteLanding";

const {
  home: { meta }
} = pagesData;



export const metadata = meta;

// Main page component with floating icons overlay
export default function HomePage() {
  return (
      <>
        <SiteLanding />
      </>
  );
}
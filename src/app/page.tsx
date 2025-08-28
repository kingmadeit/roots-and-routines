import { Hero, CompanySummary, ServiceTeaser, PackagesTeaser } from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      {/* About */}
      <CompanySummary />
      {/* service */}
      <ServiceTeaser />
      {/* pricing */}
      <PackagesTeaser />
    </>
  );
}

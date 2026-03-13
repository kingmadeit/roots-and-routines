import type { Metadata } from "next";
import { siteData } from "@/data";
import { notFound } from "next/navigation";
import { ServiceCategoryContent } from "@/components/ServiceCategoryContent";
type Params = {
  category: string;
  child: string;
};

export async function generateStaticParams() {
  // Generate a route for every individual service ID nested under its category
  return siteData.services.map((service) => ({
    category: service.category,
    child: service.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category, child } = await params;

  // Find the exact service
  const service = siteData.services.find(
    (s) => s.category === category && s.id === child
  );

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | Roots & Routines`,
    description: service.shortCopy,
    openGraph: {
      title: `${service.title} | Roots & Routines`,
      description: service.shortCopy,
    },
  };
}

export default async function ServiceChildPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category, child } = await params;

  console.log(category, params);

  const service = siteData.services.find(
    (s) => s.category === category && s.id === child
  );

  if (!service) {
    // triggers the global not-found.tsx page
    notFound();
  }

  return <ServiceCategoryContent services={[service]} isChildContent={true} />;
}

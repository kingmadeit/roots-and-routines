import { Metadata } from 'next';
import { siteData } from '@/data';
import { ServiceCategory, ServiceCategoryContent } from '@/components';

type Params = {
  category: string;
};

// use this non-dynamic service routes
const exclude: string[] = []; // ['wellness-growth', 'daily-operations'];

export async function generateStaticParams() {
  const categories = [...new Set(siteData.services.map((s) => s.category))].filter((category) => !exclude.includes(category));
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { category } = params;
  const serviceData = siteData.services.filter((s) => s.category === category);

  if (!serviceData.length) {
    return {
      title: 'Service Not Found',
      description: 'This service category does not exist.',
    };
  }

  return {
    title: `${serviceData[0].title} | Roots & Routines`,
    description: serviceData[0].shortCopy ?? '',
    openGraph: {
      title: `${serviceData[0].title} at Roots & Routines`,
      description: serviceData[1]?.shortCopy ?? '',
    },
  };
}

export default function ServiceCategoryPage({ params }: { params: Params }) {
  const { category } = params;
  const filteredServices = siteData.services.filter((s) => s.category === category);

  if (!filteredServices.length) {
    return <div>Service category not found.</div>;
  }

  return (
    <ServiceCategory heroClassName="bg-accent/40" contentClassName="text-accent">
      <ServiceCategoryContent services={filteredServices} />
    </ServiceCategory>
  );
}

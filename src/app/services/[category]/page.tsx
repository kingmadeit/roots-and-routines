// import { Metadata } from 'next';
// import { siteData } from '@/data';
// import { ServiceCategory, ServiceCategoryContent } from '@/components';
// import { serviceCategories } from '@/constants/services';

// type Params = {
//   category: string;
// };

// // use this non-dynamic service routes
// const exclude: string[] = ['']; // ['wellness-growth', 'daily-operations'];
// console.log('HERE from /service/[]/page.tsx')

// export async function generateStaticParams() {
//   const categories = [...new Set(siteData.services.map((s) => s.category))].filter((category) => !exclude.includes(category));
//   return categories.map((category) => ({ category }));
// }

// console.log(await generateStaticParams())

// export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
//   const { category } = await params;
//   const serviceData = siteData.services.filter((s) => s.category === category);

//   if (!serviceData.length) {
//     return {
//       title: 'Service Not Found',
//       description: 'This service category does not exist.',
//     };
//   }

//   return {
//     title: `${serviceData[0].title} | Roots & Routines`,
//     description: serviceData[0].shortCopy ?? '',
//     openGraph: {
//       title: `${serviceData[0].title} at Roots & Routines`,
//       description: serviceData[1]?.shortCopy ?? '',
//     },
//   };
// }


// export default async function ServiceCategoryPage({ params }: { params: Params }) {
//   const { category } = await params;
//   const filteredServices = siteData.services.filter((s) => s.category === category);
//   const categoryColor = serviceCategories.find(c => c.id === category)?.color;

//   if (!filteredServices.length) {
//     return (<div>Service category not found.</div>);
//   }

//   return (
//     <ServiceCategory heroClassName={`${categoryColor}/40`} contentClassName="text-accent">
//       <ServiceCategoryContent services={filteredServices} />
//     </ServiceCategory>
//   );
// }
import type { Metadata } from "next"
import { siteData } from "@/data"
import { serviceCategories } from "@/constants/services"
import { ServiceCategory } from "@/components/ServiceCategory"
import { ServiceCategoryContent } from "@/components/ServiceCategoryContent"

type Params = {
  category: string
}

const exclude: string[] = []

export async function generateStaticParams() {
  const categories = [...new Set(siteData.services.map((s) => s.category))].filter(
    (category) => !exclude.includes(category),
  )
  return categories.map((category) => ({ category }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category } = await params
  const serviceData = siteData.services.filter((s) => s.category === category)

  if (!serviceData.length) {
    return {
      title: "Service Not Found",
      description: "This service category does not exist.",
    }
  }

  return {
    title: `${serviceData[0].title} | Roots & Routines`,
    description: serviceData[0].shortCopy ?? "",
    openGraph: {
      title: `${serviceData[0].title} at Roots & Routines`,
      description: serviceData[0].shortCopy ?? "",
    },
  }
}

export default async function ServiceCategoryPage({ params }: { params: Promise<Params> }) {
  const { category } = await params
  const filteredServices = siteData.services.filter((s) => s.category === category)
  const categoryColor = serviceCategories.find((c) => c.id === category)?.color

  if (!filteredServices.length) {
    return <div>Service category not found.</div>
  }

  return (
    <ServiceCategory contentClassName="text-accent">
      <ServiceCategoryContent services={filteredServices} />
    </ServiceCategory>
  )
}

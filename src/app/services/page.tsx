import { serviceCategories } from "@/constants/services";
import ClientServicePage from "./ClientServicePage"; 

const categoriesWithLinks = serviceCategories.map((category) => ({
  ...category,
  linksTo: `/services/${category.id}`,
}));

export default function ServicePage() {
  return <ClientServicePage categories={categoriesWithLinks} />;
}

import { serviceCategories } from "@/constants/services";
import ClientServicePage from "./ClientServicePage"; // 👈 New file

const categoriesWithLinks = serviceCategories.map((category) => ({
  ...category,
  linksTo: `/services/${category.id}`,
}));

export default function ServicePage() {
  return <ClientServicePage categories={categoriesWithLinks} />;
}

export interface ServiceCategory {
    id: string;
    title: string;
    color: string;
    description: string;
    linksTo?: string;
  }
  
export const serviceCategories: ServiceCategory[] = [
    {
      id: "daily-operations",
      title: "Daily Operations",
      color: "bg-accent",
      description: "Streamline your family's daily routines",
    },
    {
      id: "finding-support",
      title: "Finding Support",
      color: "bg-secondary",
      description: "Connect with trusted professionals",
    },
    {
      id: "wellness-growth",
      title: "Wellness & Growth",
      color: "bg-complementary",
      description: "Support your family's wellbeing journey",
    },
  ];
export interface ServiceCategory {
  id: string;
  title: string;
  color: string;
  description: string;
  linksTo?: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "everyday-support",
    title: "Everyday Support",
    color: "bg-accent",
    description: "Bringing ease and balance to your home through simple structure, nourishing meals and mindful routines. From meal planning to personalised daily schedules we’ve got you covered.",
  },
  {
    id: "helping-hands-and-resources",
    title: "Helping Hands & Resources",
    color: "bg-secondary",
    description: "We take guesswork out of decision making by researching, shortlisting and connecting you with trusted professionals and enriching experiences that suit your family’s lifestyle and values.",
  },
  {
    id: "wellness-growth",
    title: "Wellness & Growth",
    color: "bg-complementary",
    description: "From early days of parenthood to the ever evolving needs of family life we give compassionate guidance every step of the way - from feeding tips to gentle and practical support. We support your emotional well-being and nurture balance from the comfort of your own home. Supporting parents through every stage with ease and empathy",
  },
];
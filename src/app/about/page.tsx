import { pagesData } from "@/data";

export const metadata = {
  title: "About Us",
  description: "Supporting parents with routines, school activities, and more.",
  keywords: ["parenting", "maternity", "after school", "family routines"],
  authors: [{ name: "Roots and Routines Team" }],
  robots: "index, follow",
  openGraph: {
    title: "About Roots and Routines",
    description: "Supporting families with services they can trust.",
    url: "https://rootsnroutines.com/about",
    siteName: "Roots and Routines",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Roots and Routines",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const {
  about: {},
} = pagesData;

const About = () => {
  return <section className="w-full p-16"></section>;
};

export default About;

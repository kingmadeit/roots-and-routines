import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.rootsnroutines.com';

  // static routes
  const staticRoutes = [
    { url: '', priority: 1, changeFrequency: 'weekly' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/about/founder', priority: 0.7, changeFrequency: 'yearly' as const },
    { url: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/contact', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { url: '/terms-conditions', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  // service slugs
  const services = [
    'everyday-support',
    'helping-hands-resources',
    'wellness-growth',
  ];

  // service routes
  const serviceRoutes = services.map((service) => ({
    url: `/services/${service}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  // all routes
  const allRoutes = [...staticRoutes, ...serviceRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
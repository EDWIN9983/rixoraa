import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rixoraa.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://rixoraa.com/portfolio/realty",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://rixoraa.com/portfolio/salon",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://rixoraa.com/portfolio/restaurant",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://rixoraa.com/portfolio/boutique",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
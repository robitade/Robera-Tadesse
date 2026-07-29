import type { MetadataRoute } from "next";

const BASE_URL = "https://robera-tadesse.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectSlugs = [
    "applizy",
    "mela",
    "zayno",
    "eic",
    "gelagle",
    "emeda",
    "learn",
    "planz",
  ];

  const projectEntries: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${BASE_URL}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...projectEntries,
  ];
}

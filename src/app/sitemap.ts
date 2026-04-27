import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecoprorenove.fr";

const routes = [
  "",
  "bardage",
  "isolation-combles",
  "isolation-toiture-rampants",
  "destratificateur-air",
  "extracteur-air",
  "financement-cee",
  "accompagnement-strategique",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${SITE_URL}/${route}`.replace(/\/$/, "") || SITE_URL,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

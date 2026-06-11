import type { APIRoute } from "astro";

const siteUrl = "https://maloka-experience.com";

const pages = [
  {
    path: "/",
    priority: "1.0",
    changefreq: "weekly"
  },
  {
    path: "/blog/",
    priority: "0.7",
    changefreq: "weekly"
  },
  {
    path: "/comment-aller-en-colombie/",
    priority: "0.8",
    changefreq: "monthly"
  },
  {
    path: "/combien-de-temps-visiter-colombie/",
    priority: "0.8",
    changefreq: "monthly"
  },
  {
    path: "/premier-voyage-colombie-erreurs-a-eviter/",
    priority: "0.8",
    changefreq: "monthly"
  }
];

export const GET: APIRoute = () => {
  const urls = pages
    .map(
      ({ path, priority, changefreq }) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};

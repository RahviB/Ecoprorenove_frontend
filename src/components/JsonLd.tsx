type Json = Record<string, unknown>;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecoprorenove.fr";

export function OrganizationJsonLd() {
  const data: Json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ECOPRORENOVE",
    url: SITE_URL,
    description:
      "Rénovation énergétique pour les bâtiments tertiaires, résidentiels et agricoles — CEE, MaPrimeRénov', pose RGE.",
    areaServed: ["FR", "RE"],
    sameAs: [],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data: Json = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ECOPRORENOVE",
    url: SITE_URL,
    inLanguage: "fr-FR",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const data: Json = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: { "@type": "Organization", name: "ECOPRORENOVE", url: SITE_URL },
    areaServed: ["FR", "RE"],
    url: `${SITE_URL}${url}`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data: Json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

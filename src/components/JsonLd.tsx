type Json = Record<string, unknown>;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecoprorenove.fr";

export function OrganizationJsonLd() {
  const data: Json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "ECOPRORENOVE",
    legalName: "EB CONSEILS – Ecoprorenove",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-ecoprorenove-final.webp`,
    image: `${SITE_URL}/images/logo-ecoprorenove-final.webp`,
    description:
      "Rénovation énergétique pour les bâtiments tertiaires, résidentiels et agricoles — CEE, MaPrimeRénov', pose RGE (Qualibat). Métropole et La Réunion.",
    email: "contact@ecoprorenove.fr",
    telephone: "+33619798391",
    vatID: "FR91894975150",
    founder: { "@type": "Person", name: "Emmanuel Boyer" },
    areaServed: ["FR", "RE"],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "3 rue Jacqueline et Roland de Pury",
        postalCode: "69002",
        addressLocality: "Lyon",
        addressCountry: "FR",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "104 C avenue Leconte de Lisle",
        postalCode: "97490",
        addressLocality: "Saint-Denis",
        addressRegion: "La Réunion",
        addressCountry: "FR",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+33619798391",
        contactType: "customer service",
        areaServed: "FR",
        availableLanguage: "French",
      },
      {
        "@type": "ContactPoint",
        telephone: "+262693546253",
        contactType: "customer service",
        areaServed: "RE",
        availableLanguage: "French",
      },
    ],
    // TODO(manuel): ajouter les URLs Google Business Profile + réseaux sociaux ici
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

export function FaqJsonLd({ items }: { items: { q: string; a: string }[] }) {
  const data: Json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
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

import Link from "next/link";

type Related = { slug: string; title: string; lead: string; group: "solution" | "subvention" };

const CATALOG: Record<string, Related> = {
  "isolation-toiture-rampants": {
    slug: "isolation-toiture-rampants",
    title: "Isolation toiture sous rampants",
    lead: "Airflex 30 sous tôle métallique, sans dépose. CEE BAT-EN-106.",
    group: "solution",
  },
  "isolation-combles": {
    slug: "isolation-combles",
    title: "Isolation des combles",
    lead: "Soufflage ou déroulé selon configuration. CEE BAT-EN-101.",
    group: "solution",
  },
  bardage: {
    slug: "bardage",
    title: "Bardage fibre-ciment",
    lead: "Isolation par l'extérieur, 7 finitions, durabilité 50 ans+.",
    group: "solution",
  },
  "destratificateur-air": {
    slug: "destratificateur-air",
    title: "Destratificateur d'air",
    lead: "Récupère la chaleur sous plafond. Économies en grand volume.",
    group: "solution",
  },
  "extracteur-air": {
    slug: "extracteur-air",
    title: "Extracteur d'air statique",
    lead: "Tornado Windmaster® — évacuation passive, 0 W consommation.",
    group: "solution",
  },
  "vmc-double-flux": {
    slug: "vmc-double-flux",
    title: "VMC double flux agricole",
    lead: "Thaleos — récupération de chaleur 65-71 %. CEE AGR-TH-119.",
    group: "solution",
  },
  "accompagnement-strategique": {
    slug: "accompagnement-strategique",
    title: "Accompagnement stratégique",
    lead: "Direction énergie externalisée — conformité, courtage, projets.",
    group: "solution",
  },
  "courtage-energie": {
    slug: "courtage-energie",
    title: "Courtage en énergie",
    lead: "Mise en concurrence gaz & électricité, indépendance, suivi continu.",
    group: "solution",
  },
  "prime-cee": {
    slug: "prime-cee",
    title: "Prime CEE",
    lead: "Mobiliser le dispositif national. Dossier sécurisé, recevable.",
    group: "subvention",
  },
  "ma-prime-renov": {
    slug: "ma-prime-renov",
    title: "MaPrimeRénov'",
    lead: "Aide de l'État pour la rénovation. 3 parcours, cumul possible.",
    group: "subvention",
  },
};

export default function RelatedSolutions({ items }: { items: string[] }) {
  const cards = items.map((slug) => CATALOG[slug]).filter(Boolean);
  if (cards.length === 0) return null;
  return (
    <section className="related-solutions" aria-labelledby="related-solutions-title">
      <div className="container">
        <header className="related-solutions__header">
          <p className="section-label">Continuez votre lecture</p>
          <h2 id="related-solutions-title" className="related-solutions__title">
            Pages <em>en lien</em>
          </h2>
        </header>
        <div className="related-solutions__grid">
          {cards.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className={`related-card related-card--${c.group}`}
            >
              <span className="related-card__group">
                {c.group === "subvention" ? "Subvention" : "Solution"}
              </span>
              <h3 className="related-card__title">{c.title}</h3>
              <p className="related-card__lead">{c.lead}</p>
              <span className="related-card__cta" aria-hidden="true">
                Découvrir
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

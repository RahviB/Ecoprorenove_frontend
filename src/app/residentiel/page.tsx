import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Résidentiel — copropriétés, bailleurs, particuliers (CEE + MaPrimeRénov')",
  description:
    "Rénovation énergétique résidentielle : cumul CEE et MaPrimeRénov', interlocuteur unique pour copropriétés, bailleurs et particuliers, gestion des syndics. Métropole et La Réunion.",
  alternates: { canonical: "/residentiel" },
  openGraph: {
    url: "/residentiel",
    title: "Résidentiel — Rénovation énergétique · ECOPRORENOVE",
    description:
      "Cumul CEE + MaPrimeRénov', copropriétés, bailleurs, particuliers. Un interlocuteur unique du diagnostic à la prime.",
  },
};

const operations: Array<[string, string]> = [
  [
    "Cumul CEE + MaPrimeRénov'",
    "Pour la plupart des opérations résidentielles, les deux dispositifs sont cumulables. Nous montons les deux dossiers en parallèle pour optimiser le reste à charge réel du ménage ou de la copropriété.",
  ],
  [
    "Copropriétés & syndics",
    "Présentation en assemblée générale, coordination avec le syndic, dépôt MaPrimeRénov' Copropriété, dossier CEE collectif. Un seul interlocuteur pour le conseil syndical, du vote au versement des aides.",
  ],
  [
    "Bailleurs sociaux & privés",
    "Programmes de rénovation patrimoniale, traitement des passoires thermiques, conformité aux échéances de location. Nous structurons le dossier de financement adapté à votre statut.",
  ],
  [
    "Particuliers — maison individuelle",
    "Diagnostic, choix des opérations prioritaires, vérification d’éligibilité, dépôt des dossiers. Pose RGE Qualibat par nos équipes ou partenaires qualifiés.",
  ],
  [
    "Isolation prioritaire",
    "Combles perdus, rampants, façades par bardage extérieur. Premier levier d’économie d’énergie en résidentiel — souvent le plus rapide à amortir.",
  ],
  [
    "Qualité d’air & ventilation",
    "VMC, extracteurs adaptés au logement collectif. Maintenir une ventilation saine après isolation est aussi important que l’isolation elle-même.",
  ],
];

const solutions: Array<[string, string, string]> = [
  ["Isolation des combles", "/isolation-combles", "Premier poste d'économie en maison individuelle et copropriété."],
  ["Bardage", "/bardage", "Isolation thermique par l'extérieur — performance et façade neuve."],
  ["Extracteur d'air", "/extracteur-air", "Renouvellement d'air et qualité d'ambiance après isolation."],
  ["Financement CEE", "/financement-cee", "CEE et MaPrimeRénov' montés en parallèle pour optimiser le reste à charge."],
];

export default function ResidentielPage() {
  return (
    <div className="page-residentiel">
      {/* HERO */}
      <section className="hero hero--drift">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__content fade-in">
              <div className="hero__badges">
                <span className="tag tag--white">Résidentiel</span>
                <span className="tag tag--white">CEE + MaPrimeRénov&apos;</span>
                <span className="tag tag--white">Copropriétés &amp; bailleurs</span>
              </div>

              <h1 className="hero__title">
                Rénover en <em>résidentiel,</em>
                <br />
                avec un seul interlocuteur.
              </h1>

              <p className="hero__subtitle">
                Copropriétés, bailleurs sociaux et privés, particuliers : ECOPRORENOVE
                cumule CEE et MaPrimeRénov&apos; pour optimiser votre reste à charge,
                gère la coordination avec votre syndic et structure le dossier
                administratif jusqu&apos;au versement des aides.
              </p>

              <div className="hero__actions">
                <a href="mailto:contact@ecoprorenove.fr" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  Étudier mon projet résidentiel
                </a>
                <a href="tel:+33619798391" className="btn btn--secondary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.63-.63a2 2 0 0 1 2.11-.45c.9.386 1.86.647 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +33 6 19 79 83 91
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATIONS BLOCK */}
      <section>
        <div className="container">
          <p className="section-label fade-in">Opérations en résidentiel</p>
          <h2 className="section-title fade-in">
            Cumul des aides &amp; gestion
            <br />
            <em>complète</em> du parcours.
          </h2>
          <div className="divider fade-in"></div>
          <p className="section-intro fade-in">
            Le résidentiel a ses propres règles : cumul CEE + MaPrimeRénov&apos;, AG de
            copropriété, plafonds de ressources. Voici comment nous structurons un
            projet selon votre situation.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22, marginTop: 40 }}>
            {operations.map(([title, text], i) => (
              <article key={title} className={`why-home-card fade-in delay-${(i % 6) + 1}`}>
                <div className="why-home-card__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="why-home-card__title">{title}</h3>
                <p className="why-home-card__text">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS BLOCK */}
      <section>
        <div className="container">
          <p className="section-label fade-in">Solutions adaptées</p>
          <h2 className="section-title fade-in">
            Les <em>services ECOPRORENOVE</em>
            <br />
            mobilisables en résidentiel.
          </h2>
          <div className="divider fade-in"></div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22, marginTop: 40 }}>
            {solutions.map(([title, href, text], i) => (
              <Link key={href} href={href} className={`why-home-card fade-in delay-${(i % 6) + 1}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                <div className="why-home-card__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
                <h3 className="why-home-card__title">{title}</h3>
                <p className="why-home-card__text">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <div className="container">
          <div className="cta-final__inner fade-in">
            <p className="cta-final__eyebrow">Parlons de votre projet résidentiel</p>
            <h2 className="cta-final__title">
              Un dossier complet,
              <br />
              <em>de l&apos;AG au versement.</em>
            </h2>
            <p className="cta-final__subtitle">
              Copropriétés, bailleurs, particuliers : nous prenons en charge le cumul
              CEE + MaPrimeRénov&apos; et coordonnons l&apos;ensemble du parcours. Sans
              engagement.
            </p>
            <div className="cta-final__actions">
              <a href="mailto:contact@ecoprorenove.fr" className="btn btn--primary btn--lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Nous écrire
              </a>
              <a href="tel:+33619798391" className="btn btn--secondary btn--lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.63-.63a2 2 0 0 1 2.11-.45c.9.386 1.86.647 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Nous appeler
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

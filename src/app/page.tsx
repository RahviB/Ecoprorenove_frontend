import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import Faq from "@/components/Faq";
import HeroAnimations from "@/components/HeroAnimations";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";

function W({ children, d }: { children: React.ReactNode; d: number }) {
  return (
    <span className="word-mask">
      <span
        className="word-rev"
        style={{ ["--w-d" as string]: `${d * 0.04}s` } as React.CSSProperties}
      >
        {children}
      </span>
    </span>
  );
}

export const metadata: Metadata = {
  title: "Rénovation énergétique tertiaire, résidentielle & agricole",
  description:
    "ECOPRORENOVE accompagne les maîtres d'ouvrage sur des opérations d'efficacité énergétique finançables par les CEE et MaPrimeRénov'. Interlocuteur unique, pose RGE, dossier sécurisé. Métropole et La Réunion.",
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "ECOPRORENOVE — Rénovation énergétique tertiaire, résidentielle & agricole",
    description:
      "Interlocuteur unique, dossier CEE sécurisé, pose RGE. Métropole et La Réunion.",
  },
};

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <HeroAnimations />
      {/* =================  HERO  ================= */}
      <section className="hero hero--drift">
        <div className="container container--wide">
          <div className="hero__inner">
            <div className="hero__content">
              <div className="hero__badges">
                <span className="tag tag--white">Tertiaire</span>
                <span className="tag tag--white">Résidentiel</span>
                <span className="tag tag--white">Agricole</span>
              </div>

              <h1 className="hero__title">
                <W d={0}>La</W>{" "}
                <W d={1}>rénovation</W>{" "}
                <W d={2}>énergétique,</W>
                <br />
                <em>
                  <W d={3}>bien</W>{" "}
                  <W d={4}>conduite</W>
                </em>{" "}
                <W d={5}>—</W>{" "}
                <W d={6}>de</W>{" "}
                <W d={7}>l&apos;audit</W>
                <br />
                <W d={8}>à</W>{" "}
                <W d={9}>la</W>{" "}
                <W d={10}>finalisation</W>{" "}
                <W d={11}>CEE.</W>
              </h1>

              <p className="hero__subtitle">
                ECOPRORENOVE accompagne les maîtres d&apos;ouvrage sur des opérations
                d&apos;efficacité énergétique finançables par les Certificats d&apos;Économies
                d&apos;Énergie et MaPrimeRénov&apos;. Un interlocuteur unique, une approche
                technique et honnête, un dossier sécurisé.
              </p>

              <div className="hero__actions">
                <a href="#contact" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  Étudier mon projet gratuitement
                </a>
                <a href="#solutions" className="btn btn--secondary">
                  Voir nos solutions
                </a>
                <a
                  href="#"
                  aria-disabled="true"
                  tabIndex={-1}
                  title="Numéro à venir"
                  className="hero__phone-link"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.63-.63a2 2 0 0 1 2.11-.45c.9.386 1.86.647 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  ou nous appeler
                </a>
              </div>

              <div className="hero__reassurance">
                <div className="hero__reassurance-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.65)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Pose RGE
                </div>
                <div className="hero__reassurance-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.65)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Dossier CEE sécurisé
                </div>
                <div className="hero__reassurance-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.65)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Métropole &amp; La Réunion
                </div>
              </div>
            </div>

            <div className="hero__visual">
              <div className="hero__photo-frame">
                <div className="hero__photo-zoom">
                  <Image
                    src="/uploads/maison-modern-grey.jpeg"
                    alt="Bâtiment habillé d'un bardage moderne — exemple de rénovation énergétique"
                    fill
                    priority
                    sizes="(max-width: 1024px) 92vw, 600px"
                    className="hero__photo"
                  />
                </div>
              </div>

              <div className="hero__stat-card">
                <div className="hero__stat-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </div>
                <div className="hero__stat-text">
                  <strong>
                    <CountUp end={40000} prefix="+" suffix=" m²" thinSpace duration={1400} />
                  </strong>
                  isolés par nos équipes*
                </div>
              </div>

              <div className="hero__badge-top">
                <strong>
                  <CountUp end={500} prefix="+" duration={1200} />
                </strong>
                clients
                <br />
                accompagnés*
              </div>
            </div>
          </div>

          <p className="hero__footnote">
            * Chiffres indicatifs, cumulés depuis la création d&apos;ECOPRORENOVE.
          </p>
        </div>
      </section>

      {/* =================  NUMBERS  ================= */}
      <section className="numbers">
        <div className="container">
          <div className="numbers__grid">
            <div className="numbers__item fade-in delay-1">
              <div className="numbers__value">
                <CountUp end={500} prefix="+" duration={1200} />
              </div>
              <div className="numbers__label">clients accompagnés dans leur projet de rénovation</div>
            </div>
            <div className="numbers__item fade-in delay-2">
              <div className="numbers__value">
                <CountUp end={40000} prefix="+" thinSpace duration={1500} />
                <span className="unit"> m²</span>
              </div>
              <div className="numbers__label">de surfaces isolées par nos équipes</div>
            </div>
            <div className="numbers__item fade-in delay-3">
              <div className="numbers__value">
                <CountUp end={200000} thinSpace duration={1700} />
                <span className="unit"> MWh cumac</span>
              </div>
              <div className="numbers__label">d&apos;économies d&apos;énergie valorisées en CEE</div>
            </div>
            <div className="numbers__item fade-in delay-4">
              <div className="numbers__value">
                <CountUp end={2} duration={800} />
                <span className="unit"> territoires</span>
              </div>
              <div className="numbers__label">Métropole &amp; La Réunion — équipes locales</div>
            </div>
          </div>
          <p className="numbers__disclaimer">
            * Chiffres cumulés depuis la création d&apos;ECOPRORENOVE — indicatifs, susceptibles d&apos;évoluer.
          </p>
        </div>
      </section>

      {/* =================  SECTORS  ================= */}
      <section className="sectors" id="secteurs">
        <div className="container">
          <div className="sectors__header fade-in">
            <p className="section-label">Trois secteurs, une méthode</p>
            <h2 className="section-title">
              Nous intervenons sur les bâtiments<br />
              qui <em>pèsent</em> énergétiquement
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Chaque secteur a ses contraintes — techniques, réglementaires, d&apos;usage.
              Notre rôle est de cadrer l&apos;opération au plus juste de votre réalité, pas
              d&apos;appliquer une recette standard.
            </p>
          </div>

          <div className="sectors__grid">
            <a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible" className="sector-card sector-card--tertiaire fade-in delay-1">
              <div className="sector-card__header">
                <span className="sector-card__tag">01 · Tertiaire</span>
                <svg className="sector-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="4" y="3" width="16" height="18" rx="1" />
                  <line x1="9" y1="7" x2="9" y2="7.01" /><line x1="15" y1="7" x2="15" y2="7.01" />
                  <line x1="9" y1="11" x2="9" y2="11.01" /><line x1="15" y1="11" x2="15" y2="11.01" />
                  <line x1="9" y1="15" x2="9" y2="15.01" /><line x1="15" y1="15" x2="15" y2="15.01" />
                </svg>
              </div>
              <div className="sector-card__body">
                <h3 className="sector-card__title">Tertiaire</h3>
                <p className="sector-card__desc">
                  Bâtiments qui concentrent consommations énergétiques et obligations réglementaires —
                  décret tertiaire, normes de confort, continuité d&apos;exploitation.
                </p>
                <div className="sector-card__types">
                  <span className="tag">Bureaux</span>
                  <span className="tag">Commerces</span>
                  <span className="tag">Santé</span>
                  <span className="tag">Enseignement</span>
                  <span className="tag">Hôtellerie</span>
                </div>
                <span className="sector-card__link">
                  Découvrir le parcours tertiaire
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </a>

            <a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible" className="sector-card sector-card--residentiel fade-in delay-2">
              <div className="sector-card__header">
                <span className="sector-card__tag">02 · Résidentiel</span>
                <svg className="sector-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 10 L12 3 L21 10 V21 H3 Z" />
                  <path d="M9 21 V14 H15 V21" />
                </svg>
              </div>
              <div className="sector-card__body">
                <h3 className="sector-card__title">Résidentiel</h3>
                <p className="sector-card__desc">
                  Copropriétés, bailleurs sociaux, maisons individuelles. Cumul CEE + MaPrimeRénov&apos;,
                  gestion des assemblées, coordination des syndics et des résidents.
                </p>
                <div className="sector-card__types">
                  <span className="tag">Copropriétés</span>
                  <span className="tag">Bailleurs</span>
                  <span className="tag">Particuliers</span>
                  <span className="tag">Parc social</span>
                </div>
                <span className="sector-card__link">
                  Découvrir le parcours résidentiel
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </a>

            <a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible" className="sector-card sector-card--agricole fade-in delay-3">
              <div className="sector-card__header">
                <span className="sector-card__tag">03 · Agricole</span>
                <svg className="sector-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 20 V11 L8 7 L13 11 V20 Z" />
                  <path d="M13 20 V14 H21 V20" />
                  <line x1="7" y1="20" x2="7" y2="15" />
                  <line x1="17" y1="20" x2="17" y2="17" />
                </svg>
              </div>
              <div className="sector-card__body">
                <h3 className="sector-card__title">Agricole</h3>
                <p className="sector-card__desc">
                  Bâtiments d&apos;élevage, serres, hangars. Enjeux spécifiques — ambiance, hygrométrie,
                  ventilation — et fiches CEE adaptées au monde agricole.
                </p>
                <div className="sector-card__types">
                  <span className="tag">Élevage</span>
                  <span className="tag">Serres</span>
                  <span className="tag">Hangars</span>
                  <span className="tag">Stockage</span>
                </div>
                <span className="sector-card__link">
                  Découvrir le parcours agricole
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* =================  SOLUTIONS  ================= */}
      <section className="solutions" id="solutions">
        <div className="container">
          <div className="solutions__header">
            <div className="fade-in">
              <p className="section-label">Nos huit solutions</p>
              <h2 className="section-title">
                Des opérations ciblées,<br />
                pensées pour <em>votre bâtiment</em>
              </h2>
              <div className="divider"></div>
            </div>
            <p className="section-intro fade-in delay-2">
              Huit offres concrètes qui couvrent l&apos;enveloppe du bâtiment, l&apos;aéraulique et le pilotage
              énergétique. Chaque solution précise pour quels secteurs elle s&apos;applique.
            </p>
          </div>

          <div className="solutions__category fade-in">
            <span className="solutions__category-title">Isolation thermique</span>
            <span className="solutions__category-line"></span>
          </div>

          <div className="solutions__grid">
            <Link href="/isolation-toiture-rampants" className="solution-card fade-in delay-1">
              <div className="solution-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="3 12 12 4 21 12" />
                  <line x1="3" y1="16" x2="21" y2="16" />
                  <line x1="3" y1="20" x2="21" y2="20" />
                </svg>
              </div>
              <h3 className="solution-card__title">Isolation toiture — thermoréflectif</h3>
              <p className="solution-card__desc">
                Réduire les transferts thermiques sous la couverture, sans reprise lourde de la
                charpente.
              </p>
              <div className="solution-card__meta">
                <span className="mini-tag">Tertiaire</span>
                <span className="mini-tag">Agricole</span>
              </div>
            </Link>

            <Link href="/isolation-combles" className="solution-card fade-in delay-2">
              <div className="solution-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 4 L20 10 V20 H4 V10 Z" />
                  <line x1="4" y1="14" x2="20" y2="14" />
                </svg>
              </div>
              <h3 className="solution-card__title">Isolation des combles</h3>
              <p className="solution-card__desc">
                Soufflage ou déroulé selon la configuration. Jusqu&apos;à 30 % des pertes traitées à la source.
              </p>
              <div className="solution-card__meta">
                <span className="mini-tag">Tertiaire</span>
                <span className="mini-tag">Résidentiel</span>
              </div>
            </Link>

            <Link href="/bardage" className="solution-card solution-card--premium fade-in delay-3">
              <span className="solution-card__badge">Premium</span>
              <div className="solution-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="4" y="3" width="16" height="18" rx="1" />
                  <line x1="4" y1="9" x2="20" y2="9" />
                  <line x1="4" y1="15" x2="20" y2="15" />
                </svg>
              </div>
              <h3 className="solution-card__title">Bardage</h3>
              <p className="solution-card__desc">
                Isolation par l&apos;extérieur, traitement des ponts thermiques et habillage architectural durable.
              </p>
              <div className="solution-card__meta">
                <span className="mini-tag">Tertiaire</span>
                <span className="mini-tag">Résidentiel</span>
                <span className="mini-tag">Agricole</span>
              </div>
            </Link>
          </div>

          <div className="solutions__category fade-in">
            <span className="solutions__category-title">Gestion énergétique &amp; aéraulique</span>
            <span className="solutions__category-line"></span>
          </div>

          <div className="solutions__grid">
            <Link href="/destratificateur-air" className="solution-card fade-in delay-1">
              <div className="solution-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 3 A4 4 0 0 1 12 11" />
                  <path d="M21 12 A4 4 0 0 1 13 12" />
                  <path d="M12 21 A4 4 0 0 1 12 13" />
                  <path d="M3 12 A4 4 0 0 1 11 12" />
                </svg>
              </div>
              <h3 className="solution-card__title">Destratificateur d&apos;air</h3>
              <p className="solution-card__desc">
                Redistribuer la chaleur accumulée en hauteur pour réduire les consommations de chauffage.
              </p>
              <div className="solution-card__meta">
                <span className="mini-tag">Tertiaire</span>
                <span className="mini-tag">Agricole</span>
              </div>
            </Link>

            <a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible" className="solution-card fade-in delay-2">
              <div className="solution-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </div>
              <h3 className="solution-card__title">Extracteur d&apos;air</h3>
              <p className="solution-card__desc">
                Renouvellement d&apos;air maîtrisé et évacuation des charges thermiques ou polluants de process.
              </p>
              <div className="solution-card__meta">
                <span className="mini-tag">Tertiaire</span>
                <span className="mini-tag">Agricole</span>
              </div>
            </a>

            <a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible" className="solution-card fade-in delay-3">
              <div className="solution-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 8 H12 A4 4 0 0 1 16 12" />
                  <path d="M20 16 H12 A4 4 0 0 1 8 12" />
                  <polyline points="14 6 16 8 14 10" />
                  <polyline points="10 14 8 16 10 18" />
                </svg>
              </div>
              <h3 className="solution-card__title">VMC Double flux</h3>
              <p className="solution-card__desc">
                Récupération de chaleur sur l&apos;air extrait. Solution dédiée aux bâtiments agricoles.
              </p>
              <div className="solution-card__meta">
                <span className="mini-tag">Agricole</span>
              </div>
            </a>

            <a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible" className="solution-card fade-in delay-4">
              <div className="solution-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="3 17 9 11 13 15 21 7" />
                  <polyline points="14 7 21 7 21 14" />
                </svg>
              </div>
              <h3 className="solution-card__title">Courtage en énergie</h3>
              <p className="solution-card__desc">
                Mise en concurrence des fournisseurs pour optimiser votre contrat gaz / électricité.
              </p>
              <div className="solution-card__meta">
                <span className="mini-tag">Tertiaire</span>
                <span className="mini-tag">Résidentiel</span>
                <span className="mini-tag">Agricole</span>
              </div>
            </a>
          </div>

          <div className="solutions__category fade-in">
            <span className="solutions__category-title">Conseil &amp; pilotage</span>
            <span className="solutions__category-line"></span>
          </div>

          <div className="solutions__grid">
            <a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible" className="solution-card fade-in delay-1" style={{ gridColumn: "span 2" }}>
              <div className="solution-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 15 9 22 9 17 14 18 22 12 18 6 22 7 14 2 9 9 9 12 2" />
                </svg>
              </div>
              <h3 className="solution-card__title">Accompagnement stratégique</h3>
              <p className="solution-card__desc">
                Cadrage long-terme de votre trajectoire énergétique — arbitrage, priorisation, planification pluriannuelle.
              </p>
              <div className="solution-card__meta">
                <span className="mini-tag">Tertiaire</span>
                <span className="mini-tag">Résidentiel</span>
                <span className="mini-tag">Agricole</span>
              </div>
            </a>

            <Link href="/financement-cee" className="solution-card solution-card--cee fade-in delay-2" style={{ gridColumn: "span 2" }}>
              <div className="solution-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="solution-card__title">Financement CEE &amp; MaPrimeRénov&apos;</h3>
              <p className="solution-card__desc">
                Mobilisation et structuration des leviers de financement — depuis l&apos;analyse d&apos;éligibilité jusqu&apos;à la clôture du dossier.
              </p>
              <div className="solution-card__meta">
                <span className="mini-tag">Transverse</span>
                <span className="mini-tag mini-tag--accent">Toutes opérations</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* =================  CEE BAND  ================= */}
      <section className="cee-band" id="cee">
        <div className="container">
          <div className="cee-band__inner">
            <div className="cee-band__content fade-in">
              <span className="tag tag--white" style={{ marginBottom: 20 }}>
                Dispositif CEE + MaPrimeRénov&apos;
              </span>
              <h2 className="section-title section-title--white">
                Un levier de financement<br />
                <em className="acc" style={{ color: "#ff9570" }}>réel</em> — quand il est<br />
                bien mobilisé.
              </h2>
              <div className="divider divider--white"></div>
              <p className="section-intro section-intro--white" style={{ maxWidth: "none" }}>
                Les Certificats d&apos;Économies d&apos;Énergie peuvent financer une part significative
                d&apos;une opération éligible. Encore faut-il lancer les démarches{" "}
                <strong style={{ color: "#fff" }}>avant le début des travaux</strong>, documenter
                correctement le dossier et respecter la chronologie. C&apos;est précisément là que nous
                intervenons.
              </p>

              <div className="cee-band__stats">
                <div className="cee-stat">
                  <div className="cee-stat__value">
                    <CountUp end={200000} thinSpace duration={1700} /> <span className="unit">MWh cumac</span>
                  </div>
                  <div className="cee-stat__label">Volume d&apos;économies valorisées*</div>
                </div>
                <div className="cee-stat">
                  <div className="cee-stat__value">
                    <CountUp end={500} prefix="+" duration={1200} /> <span className="unit">dossiers</span>
                  </div>
                  <div className="cee-stat__label">Clients accompagnés*</div>
                </div>
              </div>

              <div className="cee-band__actions">
                <Link href="/financement-cee" className="btn btn--accent btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  Comprendre le dispositif CEE
                </Link>
                <a href="#contact" className="btn btn--secondary">
                  Tester mon éligibilité
                </a>
              </div>

              <p style={{ marginTop: 16, fontSize: ".72rem", color: "rgba(255,255,255,.45)", fontStyle: "italic" }}>
                * Volumes cumulés depuis la création d&apos;ECOPRORENOVE — indicatifs.
              </p>
            </div>

            <div className="cee-diagram fade-in delay-2">
              <p className="cee-diagram__title">Le parcours CEE, en clair</p>
              <div className="cee-flow">
                <div className="cee-flow__step">
                  <div className="cee-flow__num">1</div>
                  <div className="cee-flow__text">
                    Analyse d&apos;éligibilité
                    <small>Avant tout engagement — fiche CEE identifiée, chronologie validée.</small>
                  </div>
                </div>
                <div className="cee-flow__step cee-flow__step--alt">
                  <div className="cee-flow__num">2</div>
                  <div className="cee-flow__text">
                    Montage du dossier
                    <small>Pièces requises, conformité technique, coordination des acteurs.</small>
                  </div>
                </div>
                <div className="cee-flow__step">
                  <div className="cee-flow__num">3</div>
                  <div className="cee-flow__text">
                    Travaux &amp; pose RGE
                    <small>Entreprises qualifiées, documents de chantier sécurisés.</small>
                  </div>
                </div>
                <div className="cee-flow__step cee-flow__step--alt">
                  <div className="cee-flow__num">4</div>
                  <div className="cee-flow__text">
                    Finalisation &amp; valorisation
                    <small>Dépôt, validation obligé, versement du financement.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================  METHOD  ================= */}
      <section className="method-home" id="methode">
        <div className="container">
          <div className="method-home__header fade-in">
            <p className="section-label">Notre méthode</p>
            <h2 className="section-title">
              De la première conversation<br />
              à la <em>clôture administrative</em>
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Un parcours structuré en cinq temps — pensé pour que vous ayez, à chaque étape, une
              vision claire de ce qui se passe, de ce qu&apos;il reste à faire, et de ce que cela implique.
            </p>
          </div>

          <div className="method-home__steps">
            {[
              { n: "01", t: "Échange initial", p: "Nous comprenons votre bâtiment, vos objectifs, vos contraintes — avant toute démarche formelle." },
              { n: "02", t: "Analyse technique", p: "Étude des travaux envisagés, cohérence réglementaire, identification des opérations CEE pertinentes." },
              { n: "03", t: "Structuration du dossier", p: "Montage administratif, coordination des acteurs, pièces techniques et conformité." },
              { n: "04", t: "Travaux & pose RGE", p: "Entreprises qualifiées, suivi de chantier, documents réglementaires sécurisés." },
              { n: "05", t: "Clôture & valorisation", p: "Finalisation du dossier CEE, validation obligé, versement du financement." },
            ].map((s, i) => (
              <div key={s.n} className={`method-step-home fade-in delay-${i + 1}`}>
                <div className="method-step-home__num">{s.n}</div>
                <h3 className="method-step-home__title">{s.t}</h3>
                <p className="method-step-home__text">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================  WHY  ================= */}
      <section className="why-home" id="pourquoi">
        <div className="container">
          <div className="why-home__inner">
            <div className="fade-in">
              <p className="section-label">Nos engagements</p>
              <h2 className="section-title">
                Interlocuteur <em>unique,</em>
                <br />
                approche technique<br />
                et honnête.
              </h2>
              <div className="divider"></div>
              <p className="section-intro">
                Nous intervenons là où projet technique, dossier administratif et logique de
                financement se croisent — et qu&apos;il faut quelqu&apos;un qui tienne les trois ensemble.
                Pas de survente, pas de promesse creuse.
              </p>
              <div style={{ marginTop: 32 }}>
                <a href="#contact" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  Étudier mon projet gratuitement
                </a>
              </div>
            </div>

            <div className="why-home__grid">
              <div className="why-home-card fade-in delay-1">
                <div className="why-home-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="why-home-card__title">Interlocuteur unique</h3>
                <p className="why-home-card__text">
                  Un seul point de contact, de l&apos;analyse à la clôture. Pas d&apos;allers-retours entre
                  bureaux d&apos;étude, entreprises et obligés CEE.
                </p>
              </div>

              <div className="why-home-card fade-in delay-2">
                <div className="why-home-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="why-home-card__title">Dossier CEE sécurisé</h3>
                <p className="why-home-card__text">
                  Nous vérifions l&apos;éligibilité en amont, documentons chaque étape et respectons la
                  chronologie réglementaire — pour éviter les refus.
                </p>
              </div>

              <div className="why-home-card fade-in delay-3">
                <div className="why-home-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="why-home-card__title">Pose RGE</h3>
                <p className="why-home-card__text">
                  Nos équipes et nos partenaires installateurs sont qualifiés RGE — condition
                  indispensable pour la plupart des opérations CEE.
                </p>
              </div>

              <div className="why-home-card fade-in delay-4">
                <div className="why-home-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <h3 className="why-home-card__title">Honnêteté technique</h3>
                <p className="why-home-card__text">
                  Si une opération n&apos;est pas pertinente pour votre bâtiment, nous vous le disons.
                  Et nous cherchons le bon levier avec vous.
                </p>
              </div>
            </div>
          </div>

          <div className="partners fade-in">
            <p className="partners__intent">Ils nous font confiance</p>
            <p className="partners__label">Certifications &amp; partenaires</p>
            <ul className="partners__list">
              <li className="partner-cert">RGE Qualibat</li>
              <li className="partner-cert">RGE Qualibois</li>
              <li className="partner-cert">Obligé CEE</li>
              <li className="partner-cert">MaPrimeRénov&apos;</li>
            </ul>
          </div>
        </div>
      </section>

      {/* =================  FAQ  ================= */}
      <section className="faq-home" id="faq">
        <div className="container">
          <div className="micro-divider fade-in" aria-hidden="true"></div>
          <div className="faq-home__header fade-in">
            <p className="section-label">Questions fréquentes</p>
            <h2 className="section-title">
              Ce que l&apos;on nous demande<br />
              <em>le plus souvent</em>
            </h2>
            <div className="divider divider--center"></div>
          </div>

          <div className="faq-home__list">
            <Faq
              items={[
                {
                  q: "Qu'est-ce qui différencie ECOPRORENOVE d'une entreprise de travaux classique ?",
                  a: "Nous ne nous limitons pas à poser un produit. Nous structurons un projet — cadrage technique, montage administratif, mobilisation des financements, coordination des entreprises, suivi jusqu'à la clôture. Notre valeur ajoutée se situe dans l'articulation de ces trois volets, que personne ne tient habituellement en même temps.",
                },
                {
                  q: "Mon bâtiment est-il éligible aux CEE ou à MaPrimeRénov' ?",
                  a: "L'éligibilité dépend du type de bâtiment, de son usage, de la nature des travaux envisagés et des équipements retenus. MaPrimeRénov' concerne le résidentiel ; les CEE couvrent un spectre plus large — tertiaire, agricole et résidentiel. Une analyse personnalisée reste indispensable avant tout engagement. Nous la réalisons gratuitement et sans engagement.",
                },
                {
                  q: "À quel moment faut-il nous contacter — avant les travaux, pendant, après ?",
                  a: (
                    <>
                      Le plus tôt possible — et impérativement <strong>avant le début des travaux</strong>. C&apos;est une condition sine qua non pour que le dossier CEE soit recevable. Attendre la fin du chantier pour s&apos;interroger sur le financement, c&apos;est souvent trop tard. Dès la phase de conception ou de chiffrage, nous pouvons cadrer l&apos;opération pour qu&apos;elle reste éligible.
                    </>
                  ),
                },
                {
                  q: "Le financement CEE couvre-t-il l'intégralité des travaux ?",
                  a: (
                    <>
                      Non. Les CEE constituent un financement <strong>partiel</strong> dont le montant dépend du type d&apos;opération, de la taille du projet et du contexte de marché. L&apos;objectif est d&apos;améliorer l&apos;équation économique du projet, pas de l&apos;annuler. Nous vous aidons à évaluer honnêtement ce financement potentiel, sans surestimation.
                    </>
                  ),
                },
                {
                  q: "Intervenez-vous uniquement en Métropole ?",
                  a: (
                    <>
                      Non — nous intervenons en <strong>Métropole</strong> et à <strong>La Réunion</strong>, avec des équipes locales dans chaque territoire. Le dispositif CEE s&apos;adapte aux spécificités ultramarines ; nous maîtrisons les particularités du marché réunionnais.
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* =================  CTA FINAL  ================= */}
      <section className="cta-final" id="contact">
        <div className="container">
          <div className="cta-final__inner fade-in">
            <p className="cta-final__eyebrow">Parlons de votre projet</p>
            <h2 className="cta-final__title">
              Votre projet mérite<br />
              d&apos;être <em>bien étudié.</em>
            </h2>
            <p className="cta-final__subtitle">
              Échangeons sur votre bâtiment, vos objectifs, vos contraintes. Nous analysons ensemble
              la faisabilité technique, les financements mobilisables et la meilleure façon de
              structurer l&apos;opération — sans engagement.
            </p>

            <div className="cta-final__actions">
              <a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible" className="btn btn--primary btn--lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
                Demander une étude de projet
              </a>
              <a href="#" aria-disabled="true" tabIndex={-1} title="Numéro à venir" className="btn btn--secondary btn--lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.63-.63a2 2 0 0 1 2.11-.45c.9.386 1.86.647 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Nous appeler directement
              </a>
            </div>

            <div className="cta-final__reassurance">
              <div className="cta-final__reassurance-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Analyse sans engagement
              </div>
              <div className="cta-final__reassurance-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Réponse sous 48h ouvrées
              </div>
              <div className="cta-final__reassurance-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Métropole &amp; La Réunion
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

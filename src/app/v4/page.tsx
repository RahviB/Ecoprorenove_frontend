import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import Faq from "@/components/Faq";
import HeroAnimations from "@/components/HeroAnimations";
import HorizontalScrolly from "@/components/HorizontalScrolly";

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
  title: "Homepage v4 (Aggressive)",
  description: "Variante v4 — page d'accueil ECOPRORENOVE en 4 sections, bento + scrolly horizontal.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/v4" },
};

const PARCOURS = [
  { n: "01", t: "Échange initial", p: "Comprendre votre bâtiment, vos objectifs, vos contraintes — avant toute démarche formelle." },
  { n: "02", t: "Analyse technique & éligibilité CEE", p: "Étude des travaux envisagés, fiche CEE identifiée, chronologie validée." },
  { n: "03", t: "Montage du dossier", p: "Pièces requises, conformité, coordination des acteurs administratifs et techniques." },
  { n: "04", t: "Travaux & pose RGE", p: "Entreprises qualifiées, suivi de chantier, documents réglementaires sécurisés." },
  { n: "05", t: "Suivi & coordination", p: "Pilotage opérationnel, contrôle qualité, ajustements en temps réel." },
  { n: "06", t: "Clôture & valorisation", p: "Dépôt, validation par l'obligé, versement du financement CEE." },
];

const ENGAGEMENTS = [
  { t: "Interlocuteur unique", p: "Un seul point de contact, de l'analyse à la clôture." },
  { t: "Dossier sécurisé", p: "Éligibilité vérifiée en amont, chronologie respectée." },
  { t: "Pose RGE", p: "Équipes et installateurs qualifiés RGE." },
  { t: "Honnêteté technique", p: "Si l'opération n'est pas pertinente, nous le disons." },
];

export default function HomePageV4() {
  return (
    <div className="page-home-v4">
      <HeroAnimations />
      <HorizontalScrolly targetSelector=".page-home-v4 .scrolly" />

      {/* =================  1. HERO with floating glass stat chips ================= */}
      <section className="hero hero--drift hero--v4">
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
                d&apos;efficacité énergétique finançables par les CEE et MaPrimeRénov&apos;.
              </p>

              <div className="hero__actions">
                <a href="#contact" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  Étudier mon projet
                </a>
                <a href="#bento" className="btn btn--secondary">
                  Voir nos solutions
                </a>
              </div>
            </div>

            <div className="hero__visual">
              <div className="hero__photo-frame">
                <div className="hero__photo-zoom">
                  <Image
                    src="/uploads/maison-modern-grey.jpeg"
                    alt="Bâtiment habillé d'un bardage moderne"
                    fill
                    priority
                    sizes="(max-width: 1024px) 92vw, 600px"
                    className="hero__photo"
                  />
                </div>
              </div>

              {/* Floating glass stat chips */}
              <div className="hero-glass hero-glass--tl">
                <strong>
                  <CountUp end={500} prefix="+" duration={1200} />
                </strong>
                <span>clients accompagnés</span>
              </div>
              <div className="hero-glass hero-glass--tr">
                <strong>
                  <CountUp end={40000} prefix="+" thinSpace duration={1500} />
                  <span className="unit"> m²</span>
                </strong>
                <span>isolés</span>
              </div>
              <div className="hero-glass hero-glass--bl">
                <strong>
                  <CountUp end={200000} thinSpace duration={1700} />
                </strong>
                <span>MWh CEE valorisés</span>
              </div>
              <div className="hero-glass hero-glass--br">
                <strong>
                  <CountUp end={2} duration={800} />
                </strong>
                <span>territoires : Métropole &amp; La Réunion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================  2. BENTO — Sectors × Solutions ================= */}
      <section className="bento" id="bento">
        <div className="container container--wide">
          <div className="bento__header fade-in">
            <p className="section-label">Trois secteurs · Huit opérations</p>
            <h2 className="section-title">
              Une grille d&apos;intervention <em>cohérente</em>
            </h2>
            <div className="divider divider--center"></div>
          </div>

          {/* Sectors row */}
          <div className="bento__sectors">
            <a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible" className="bento-sector bento-sector--tertiaire fade-in delay-1">
              <span className="bento-sector__num">01</span>
              <h3 className="bento-sector__title">Tertiaire</h3>
              <p className="bento-sector__desc">Décret tertiaire, normes de confort, continuité d&apos;exploitation.</p>
              <div className="bento-sector__chips">
                <span>Bureaux</span><span>Commerces</span><span>Santé</span><span>Hôtels</span>
              </div>
            </a>
            <a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible" className="bento-sector bento-sector--residentiel fade-in delay-2">
              <span className="bento-sector__num">02</span>
              <h3 className="bento-sector__title">Résidentiel</h3>
              <p className="bento-sector__desc">Cumul CEE + MaPrimeRénov&apos;, gestion des syndics et résidents.</p>
              <div className="bento-sector__chips">
                <span>Copropriétés</span><span>Bailleurs</span><span>Particuliers</span>
              </div>
            </a>
            <a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible" className="bento-sector bento-sector--agricole fade-in delay-3">
              <span className="bento-sector__num">03</span>
              <h3 className="bento-sector__title">Agricole</h3>
              <p className="bento-sector__desc">Ambiance, hygrométrie, ventilation — fiches CEE adaptées.</p>
              <div className="bento-sector__chips">
                <span>Élevage</span><span>Serres</span><span>Hangars</span>
              </div>
            </a>
          </div>

          {/* Solutions bento grid */}
          <div className="bento__grid">
            <Link href="/bardage" className="bento-card bento-card--xl bento-card--accent">
              <span className="bento-card__badge">Premium</span>
              <div className="bento-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="4" y="3" width="16" height="18" rx="1" />
                  <line x1="4" y1="9" x2="20" y2="9" />
                  <line x1="4" y1="15" x2="20" y2="15" />
                </svg>
              </div>
              <h3 className="bento-card__title">Bardage</h3>
              <p className="bento-card__desc">Isolation par l&apos;extérieur, traitement des ponts thermiques, habillage architectural durable.</p>
            </Link>

            <Link href="/isolation-toiture-rampants" className="bento-card">
              <div className="bento-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="3 12 12 4 21 12" />
                  <line x1="3" y1="16" x2="21" y2="16" />
                  <line x1="3" y1="20" x2="21" y2="20" />
                </svg>
              </div>
              <h3 className="bento-card__title">Isolation toiture</h3>
              <p className="bento-card__desc">Thermoréflectif sous la couverture, sans reprise charpente.</p>
            </Link>

            <Link href="/isolation-combles" className="bento-card">
              <div className="bento-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 4 L20 10 V20 H4 V10 Z" />
                  <line x1="4" y1="14" x2="20" y2="14" />
                </svg>
              </div>
              <h3 className="bento-card__title">Isolation combles</h3>
              <p className="bento-card__desc">Soufflage ou déroulé. Jusqu&apos;à 30 % des pertes traitées.</p>
            </Link>

            <Link href="/destratificateur-air" className="bento-card">
              <div className="bento-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 3 A4 4 0 0 1 12 11" />
                  <path d="M21 12 A4 4 0 0 1 13 12" />
                  <path d="M12 21 A4 4 0 0 1 12 13" />
                  <path d="M3 12 A4 4 0 0 1 11 12" />
                </svg>
              </div>
              <h3 className="bento-card__title">Destratificateur d&apos;air</h3>
              <p className="bento-card__desc">Redistribuer la chaleur en hauteur, réduire le chauffage.</p>
            </Link>

            <Link href="/extracteur-air" className="bento-card">
              <div className="bento-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </div>
              <h3 className="bento-card__title">Extracteur d&apos;air</h3>
              <p className="bento-card__desc">Renouvellement maîtrisé, évacuation des polluants.</p>
            </Link>

            <a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible" className="bento-card">
              <div className="bento-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 8 H12 A4 4 0 0 1 16 12" />
                  <path d="M20 16 H12 A4 4 0 0 1 8 12" />
                  <polyline points="14 6 16 8 14 10" />
                  <polyline points="10 14 8 16 10 18" />
                </svg>
              </div>
              <h3 className="bento-card__title">VMC Double flux</h3>
              <p className="bento-card__desc">Récupération de chaleur sur l&apos;air extrait. Agricole.</p>
            </a>

            <a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible" className="bento-card">
              <div className="bento-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="3 17 9 11 13 15 21 7" />
                  <polyline points="14 7 21 7 21 14" />
                </svg>
              </div>
              <h3 className="bento-card__title">Courtage en énergie</h3>
              <p className="bento-card__desc">Mise en concurrence des fournisseurs gaz / électricité.</p>
            </a>

            <Link href="/accompagnement-strategique" className="bento-card bento-card--wide">
              <div className="bento-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 15 9 22 9 17 14 18 22 12 18 6 22 7 14 2 9 9 9 12 2" />
                </svg>
              </div>
              <h3 className="bento-card__title">Accompagnement stratégique</h3>
              <p className="bento-card__desc">Cadrage long-terme, arbitrage, priorisation, planification pluriannuelle des opérations.</p>
            </Link>

            <Link href="/financement-cee" className="bento-card bento-card--full bento-card--cee">
              <div className="bento-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="bento-card__title">Financement CEE &amp; MaPrimeRénov&apos;</h3>
              <p className="bento-card__desc">
                Mobilisation des leviers — analyse d&apos;éligibilité, montage, dépôt, valorisation. Toutes opérations.
              </p>
              <span className="bento-card__cta">
                Comprendre le dispositif
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =================  3. SCROLLY — Parcours horizontal ================= */}
      <section className="scrolly" id="parcours" aria-label="Parcours en six étapes">
        <div className="scrolly__intro">
          <div className="container">
            <p className="section-label section-label--white">Notre méthode</p>
            <h2 className="scrolly__title">
              De la première conversation<br />
              à la <em>clôture administrative</em>
            </h2>
            <p className="scrolly__hint" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
              Faites défiler
            </p>
          </div>
        </div>

        <div className="scrolly__viewport">
          <ol className="scrolly__track">
            {PARCOURS.map((s, i) => (
              <li key={s.n} className="scrolly__panel">
                <div className="scrolly__num">{s.n}</div>
                <h3 className="scrolly__step-title">{s.t}</h3>
                <p className="scrolly__step-text">{s.p}</p>
                <span className="scrolly__index">{i + 1} / {PARCOURS.length}</span>
              </li>
            ))}
            <li className="scrolly__panel scrolly__panel--end">
              <div className="scrolly__end">
                {ENGAGEMENTS.map((e) => (
                  <div key={e.t} className="scrolly__end-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a8e296" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <div>
                      <h4>{e.t}</h4>
                      <p>{e.p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* =================  4. CLOSER — CTA + FAQ + partners ================= */}
      <section className="closer" id="contact">
        <div className="container">
          <div className="closer__cta fade-in">
            <p className="cta-final__eyebrow">Parlons de votre projet</p>
            <h2 className="cta-final__title">
              Votre projet mérite<br />
              d&apos;être <em>bien étudié.</em>
            </h2>
            <p className="cta-final__subtitle">
              Échangeons sur votre bâtiment, vos objectifs, vos contraintes — sans engagement.
            </p>
            <div className="cta-final__actions">
              <a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible" className="btn btn--primary btn--lg">
                Demander une étude
              </a>
              <a href="#" aria-disabled="true" tabIndex={-1} title="Numéro à venir" className="btn btn--secondary btn--lg">
                Nous appeler
              </a>
            </div>
          </div>

          <div className="closer__faq fade-in delay-2">
            <div className="closer__faq-head">
              <p className="section-label">Questions fréquentes</p>
              <h3>Ce qu&apos;on nous demande le plus souvent</h3>
            </div>
            <Faq
              items={[
                {
                  q: "Qu'est-ce qui différencie ECOPRORENOVE d'une entreprise classique ?",
                  a: "Nous structurons un projet — cadrage technique, montage administratif, mobilisation des financements, suivi jusqu'à la clôture.",
                },
                {
                  q: "Mon bâtiment est-il éligible aux CEE ou à MaPrimeRénov' ?",
                  a: "MaPrimeRénov' concerne le résidentiel ; les CEE couvrent tertiaire, agricole et résidentiel. Analyse personnalisée gratuite.",
                },
                {
                  q: "À quel moment faut-il nous contacter ?",
                  a: (
                    <>
                      Le plus tôt possible — et impérativement <strong>avant le début des travaux</strong>.
                    </>
                  ),
                },
                {
                  q: "Le financement CEE couvre-t-il l'intégralité des travaux ?",
                  a: "Non. C'est un financement partiel dont le montant dépend du type d'opération, de la taille et du marché.",
                },
                {
                  q: "Intervenez-vous uniquement en Métropole ?",
                  a: "Non — Métropole et La Réunion, équipes locales dans chaque territoire.",
                },
              ]}
            />
          </div>

          <div className="closer__partners fade-in delay-3">
            <p className="partners__intent">Ils nous font confiance</p>
            <ul className="partners__list">
              <li className="partner-cert">RGE Qualibat</li>
              <li className="partner-cert">RGE Qualibois</li>
              <li className="partner-cert">Obligé CEE</li>
              <li className="partner-cert">MaPrimeRénov&apos;</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

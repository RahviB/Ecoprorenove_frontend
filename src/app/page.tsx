import type { Metadata } from "next";
import Image from "next/image";
import AidesCallout from "@/components/AidesCallout";
import ContactForm from "@/components/contact/ContactForm";
import CountUp from "@/components/CountUp";
import Faq from "@/components/Faq";
import HeroAnimations from "@/components/HeroAnimations";
import SolutionsTabs from "@/components/SolutionsTabs";
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

const SOLUTIONS = [
  {
    href: "/bardage",
    title: "Bardage",
    desc: "Isolation par l'extérieur, traitement des ponts thermiques, habillage durable.",
    sectors: ["tertiaire", "residentiel", "agricole"] as const,
    premium: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <line x1="4" y1="9" x2="20" y2="9" />
        <line x1="4" y1="15" x2="20" y2="15" />
      </svg>
    ),
  },
  {
    href: "/isolation-toiture-rampants",
    title: "Isolation toiture — thermoréflectif",
    desc: "Réduire les transferts thermiques sous la couverture, sans reprise de la charpente.",
    sectors: ["tertiaire", "agricole"] as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="3 12 12 4 21 12" />
        <line x1="3" y1="16" x2="21" y2="16" />
        <line x1="3" y1="20" x2="21" y2="20" />
      </svg>
    ),
  },
  {
    href: "/isolation-combles",
    title: "Isolation des combles",
    desc: "Soufflage ou déroulé. Jusqu'à 30 % des pertes traitées à la source.",
    sectors: ["tertiaire", "residentiel"] as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 4 L20 10 V20 H4 V10 Z" />
        <line x1="4" y1="14" x2="20" y2="14" />
      </svg>
    ),
  },
  {
    href: "/destratificateur-air",
    title: "Destratificateur d'air",
    desc: "Redistribuer la chaleur en hauteur pour réduire les consommations de chauffage.",
    sectors: ["tertiaire"] as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3 A4 4 0 0 1 12 11" />
        <path d="M21 12 A4 4 0 0 1 13 12" />
        <path d="M12 21 A4 4 0 0 1 12 13" />
        <path d="M3 12 A4 4 0 0 1 11 12" />
      </svg>
    ),
  },
  {
    href: "/extracteur-air",
    title: "Extracteur d'air",
    desc: "Renouvellement d'air maîtrisé, évacuation des charges thermiques et polluants.",
    sectors: ["tertiaire", "residentiel", "agricole"] as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
  {
    href: "/vmc-double-flux",
    title: "VMC Double flux",
    desc: "Récupération de chaleur sur l'air extrait. Solution dédiée aux bâtiments agricoles.",
    sectors: ["agricole"] as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 8 H12 A4 4 0 0 1 16 12" />
        <path d="M20 16 H12 A4 4 0 0 1 8 12" />
        <polyline points="14 6 16 8 14 10" />
        <polyline points="10 14 8 16 10 18" />
      </svg>
    ),
  },
  {
    href: "/courtage-energie",
    title: "Courtage en énergie",
    desc: "Mise en concurrence des fournisseurs gaz / électricité.",
    sectors: ["tertiaire", "agricole"] as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="3 17 9 11 13 15 21 7" />
        <polyline points="14 7 21 7 21 14" />
      </svg>
    ),
  },
  {
    href: "/accompagnement-strategique",
    title: "Accompagnement stratégique",
    desc: "Cadrage long-terme — arbitrage, priorisation, planification pluriannuelle.",
    sectors: ["tertiaire", "agricole"] as const,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15 9 22 9 17 14 18 22 12 18 6 22 7 14 2 9 9 9 12 2" />
      </svg>
    ),
  },
  {
    href: "/prime-cee",
    title: "Prime CEE & MaPrimeRénov'",
    desc: "Mobilisation et structuration des leviers de financement — analyse jusqu'à la clôture.",
    sectors: ["transverse"] as const,
    cee: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

const PARCOURS_STEPS = [
  { n: "01", t: "Échange initial", p: "Comprendre le bâtiment, vos objectifs, vos contraintes." },
  { n: "02", t: "Analyse technique & éligibilité CEE", p: "Étude des travaux, fiche CEE identifiée, chronologie validée." },
  { n: "03", t: "Montage du dossier", p: "Pièces requises, conformité, coordination des acteurs." },
  { n: "04", t: "Travaux & pose RGE", p: "Entreprises qualifiées, documents de chantier sécurisés." },
  { n: "05", t: "Suivi & coordination", p: "Pilotage, qualité, ajustements en temps réel." },
  { n: "06", t: "Clôture & valorisation", p: "Dépôt, validation obligé, versement du financement." },
];

export default function HomePage() {
  return (
    <div className="page-home-v3">
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <HeroAnimations />

      {/* =================  1. HERO+ (numbers as inline chips) ================= */}
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
                </em>
                <W d={5}>.</W>
              </h1>

              <p className="hero__subtitle">
                ECOPRORENOVE accompagne les maîtres d&apos;ouvrage sur des opérations
                d&apos;efficacité énergétique finançables par les CEE et MaPrimeRénov&apos;.
                Interlocuteur unique, dossier sécurisé.
              </p>

              <div className="hero__actions">
                <a href="#contact" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  Étudier mon projet
                </a>
                <a href="#solutions" className="btn btn--secondary">
                  Voir nos solutions
                </a>
              </div>

              {/* Numbers inlined as chips */}
              <div className="hero__numchips">
                <div className="hero__numchip">
                  <strong>
                    <CountUp end={500} prefix="+" duration={1200} />
                  </strong>
                  <span>clients</span>
                </div>
                <div className="hero__numchip">
                  <strong>
                    <CountUp end={40000} prefix="+" thinSpace duration={1500} />
                  </strong>
                  <span>m² isolés</span>
                </div>
                <div className="hero__numchip">
                  <strong>
                    <CountUp end={200000} thinSpace duration={1700} />
                  </strong>
                  <span>MWh CEE</span>
                </div>
                <div className="hero__numchip">
                  <strong>
                    <CountUp end={2} duration={800} />
                  </strong>
                  <span>territoires</span>
                </div>
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
                  Métropole &amp; La Réunion
                </div>
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
            </div>
          </div>
        </div>
      </section>

      {/* =================  2. SOLUTIONS TABBED (replaces Sectors + Solutions) ================= */}
      <section className="solutions" id="solutions">
        <div className="container">
          <div className="solutions__header">
            <div className="fade-in">
              <p className="section-label">Solutions par secteur</p>
              <h2 className="section-title">
                Trois secteurs, <em>huit opérations</em> ciblées
              </h2>
              <div className="divider"></div>
            </div>
          </div>

          <SolutionsTabs solutions={SOLUTIONS} />
        </div>
      </section>

      {/* =================  3. NOTRE PROCESSUS ================= */}
      <section className="parcours-unifie" id="parcours">
        <div className="container">
          <div className="parcours-unifie__header fade-in">
            <p className="section-label section-label--white">Notre méthode</p>
            <h2 className="section-title section-title--white">
              Six étapes, <em className="acc" style={{ color: "#ff9570" }}>un dossier maîtrisé</em>
            </h2>
            <div className="divider divider--white divider--center"></div>
            <p className="section-intro section-intro--white">
              De la première conversation à la livraison de votre projet.
            </p>
          </div>

          <ol className="parcours-unifie__timeline">
            {PARCOURS_STEPS.map((s, i) => (
              <li key={s.n} className={`parcours-step fade-in delay-${(i % 6) + 1}`}>
                <div className="parcours-step__num">{s.n}</div>
                <h3 className="parcours-step__title">{s.t}</h3>
                <p className="parcours-step__text">{s.p}</p>
              </li>
            ))}
          </ol>

          <AidesCallout />
        </div>
      </section>

      {/* =================  4. ENGAGEMENTS + FAQ (2-col) ================= */}
      <section className="enga-faq" id="engagements">
        <div className="container">
          <div className="enga-faq__inner">
            <div className="enga-faq__left fade-in">
              <p className="section-label">Nos engagements</p>
              <h2 className="section-title">
                Interlocuteur <em>unique,</em><br />
                approche honnête.
              </h2>
              <div className="divider"></div>

              <div className="enga-faq__cards">
                <div className="why-home-card">
                  <div className="why-home-card__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="9" y1="15" x2="15" y2="15" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="why-home-card__title">Étude gratuite, sans engagement</h3>
                    <p className="why-home-card__text">Analyse technique offerte. Vous décidez si la suite a du sens.</p>
                  </div>
                </div>

                <div className="why-home-card">
                  <div className="why-home-card__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="why-home-card__title">Dossier CEE sécurisé</h3>
                    <p className="why-home-card__text">Éligibilité vérifiée, chronologie respectée.</p>
                  </div>
                </div>

                <div className="why-home-card">
                  <div className="why-home-card__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="why-home-card__title">Pose RGE</h3>
                    <p className="why-home-card__text">Équipes et installateurs qualifiés RGE.</p>
                  </div>
                </div>

                <div className="why-home-card">
                  <div className="why-home-card__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="why-home-card__title">Honnêteté technique</h3>
                    <p className="why-home-card__text">Si l&apos;opération n&apos;est pas pertinente, nous le disons.</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="enga-faq__right fade-in delay-2">
              <p className="section-label">Questions fréquentes</p>
              <h2 className="section-title">
                Ce qu&apos;on nous demande<br />
                <em>le plus souvent</em>
              </h2>
              <div className="divider"></div>

              <Faq
                items={[
                  {
                    q: "Qu'est-ce qui différencie ECOPRORENOVE d'une entreprise de travaux classique ?",
                    a: "Nous structurons un projet — cadrage technique, montage administratif, mobilisation des financements, coordination des entreprises, suivi jusqu'à la clôture.",
                  },
                  {
                    q: "Mon bâtiment est-il éligible aux CEE ou à MaPrimeRénov' ?",
                    a: "L'éligibilité dépend du type de bâtiment, de son usage, des travaux. MaPrimeRénov' concerne le résidentiel ; les CEE couvrent tertiaire, agricole et résidentiel. Analyse personnalisée gratuite et sans engagement.",
                  },
                  {
                    q: "À quel moment faut-il nous contacter ?",
                    a: (
                      <>
                        Le plus tôt possible — et impérativement <strong>avant le début des travaux</strong>. Condition sine qua non pour la recevabilité du dossier CEE.
                      </>
                    ),
                  },
                  {
                    q: "Le financement CEE couvre-t-il l'intégralité des travaux ?",
                    a: (
                      <>
                        Non. Les CEE constituent un financement <strong>partiel</strong> dont le montant dépend du type d&apos;opération, de la taille du projet et du contexte de marché.
                      </>
                    ),
                  },
                  {
                    q: "Intervenez-vous uniquement en Métropole ?",
                    a: (
                      <>
                        Non — nous intervenons en <strong>Métropole</strong> et à <strong>La Réunion</strong>, avec des équipes locales.
                      </>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =================  4b. TRUST MARQUEE ================= */}
      <section className="trust-marquee" aria-label="Ils nous font confiance">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label">Ils nous font confiance</p>
        </div>
        <div className="trust-marquee__viewport">
          <ul className="trust-marquee__track" aria-hidden="false">
            <li className="trust-cert">RGE Qualibat</li>
            <li className="trust-cert">RGE Qualibois</li>
            <li className="trust-cert">Obligé CEE</li>
            <li className="trust-cert">MaPrimeRénov&apos;</li>
            <li className="trust-cert" aria-hidden="true">RGE Qualibat</li>
            <li className="trust-cert" aria-hidden="true">RGE Qualibois</li>
            <li className="trust-cert" aria-hidden="true">Obligé CEE</li>
            <li className="trust-cert" aria-hidden="true">MaPrimeRénov&apos;</li>
          </ul>
        </div>
      </section>

      {/* =================  5. CTA FINAL ================= */}
      <section className="cta-final" id="contact">
        <div className="container">
          <div className="cta-final__inner fade-in">
            <p className="section-label section-label--white">Parlons de votre projet</p>
            <h2 className="cta-final__title">
              Votre projet mérite<br />
              d&apos;être <em>bien étudié.</em>
            </h2>
            <p className="cta-final__subtitle">
              Échangeons sur votre bâtiment, vos objectifs, vos contraintes — sans engagement.
            </p>

            <div className="form-card fade-in delay-2">
              <ContactForm source="home">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="h-prenom">Prénom *</label>
                    <input className="form-input" type="text" id="h-prenom" name="prenom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="h-nom">Nom *</label>
                    <input className="form-input" type="text" id="h-nom" name="nom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="h-email">Email *</label>
                    <input className="form-input" type="email" id="h-email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="h-tel">Téléphone *</label>
                    <input className="form-input" type="tel" id="h-tel" name="telephone" required />
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="h-secteur">Secteur</label>
                    <select className="form-select" id="h-secteur" name="secteur" defaultValue="">
                      <option value="" disabled>Sélectionnez</option>
                      <option value="tertiaire">Tertiaire (bureaux, commerces, ERP)</option>
                      <option value="residentiel">Résidentiel (maison, copropriété)</option>
                      <option value="agricole">Agricole (exploitation, hangar)</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="h-message">Décrivez votre projet</label>
                    <textarea className="form-textarea" id="h-message" name="message" placeholder="Type de bâtiment, surface, objectifs, contraintes…" rows={4}></textarea>
                  </div>
                  <div className="form-group form-group--full">
                    <div className="form-consent">
                      <input type="checkbox" id="h-rgpd" name="rgpd" required />
                      <label htmlFor="h-rgpd">J&apos;accepte que mes données soient utilisées par ECOPRORENOVE pour l&apos;étude de mon projet. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles.</label>
                    </div>
                  </div>
                  <div className="form-group form-group--full">
                    <button type="submit" className="btn btn--primary btn--lg form-submit">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                      Demander une étude
                    </button>
                  </div>
                </div>
              </ContactForm>
            </div>

            <p className="cta-final__phones-label">Ou nous appeler directement</p>
            <div className="cta-final__phones">
              <a href="tel:+262693546253" className="phone-link phone-link--primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.63-.63a2 2 0 0 1 2.11-.45c.9.386 1.86.647 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>
                  <span className="phone-link__region">La Réunion</span>
                  <span className="phone-link__number">+262 6 93 54 62 53</span>
                </span>
              </a>
              <a href="tel:+33619798391" className="phone-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.63-.63a2 2 0 0 1 2.11-.45c.9.386 1.86.647 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>
                  <span className="phone-link__region">Métropole</span>
                  <span className="phone-link__number">+33 6 19 79 83 91</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

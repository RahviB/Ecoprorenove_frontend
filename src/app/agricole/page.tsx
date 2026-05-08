import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Agricole — bâtiments d'élevage, serres, hangars (CEE BAT-EN, IND-UT)",
  description:
    "Rénovation énergétique agricole : isolation sous toiture, ambiance et hygrométrie pour bétail et serres, fiches CEE BAT-EN et IND-UT. Métropole et La Réunion.",
  alternates: { canonical: "/agricole" },
  openGraph: {
    url: "/agricole",
    title: "Agricole — Rénovation énergétique · ECOPRORENOVE",
    description:
      "Bâtiments d'élevage, serres, hangars. Fiches CEE BAT-EN et IND-UT. Confort animal, hygrométrie, isolation lourde.",
  },
};

const operations: Array<[string, string]> = [
  [
    "Bâtiments d’élevage",
    "Isolation, coolroofing, ventilation, extraction d’air ou récupération de chaleur : nous recherchons les solutions adaptées pour améliorer l’ambiance intérieure, limiter les surchauffes et mieux maîtriser l’humidité.",
  ],
  [
    "Hangars agricoles",
    "Stockage de matériel, fourrage, céréales ou marchandises : nous étudions les solutions d’isolation, de ventilation ou de protection thermique compatibles avec la structure existante.",
  ],
  [
    "Serres & cultures abritées",
    "Nous analysons les besoins liés à la température, à l’hygrométrie et au renouvellement d’air afin d’identifier les solutions adaptées : déshumidification, ventilation, récupération de chaleur ou pilotage climatique selon le projet. À noter : la fiche AGRI-TH-119 correspond à un système de déshumidification avec air extérieur, avec ventilation forcée et pilotage climatique.",
  ],
  [
    "Fiches CEE adaptées au bâtiment",
    "Selon l’usage réel du site, l’opération peut relever de fiches agricoles, tertiaires ou industrielles. Nous vérifions la bonne classification du bâtiment et les conditions de la fiche avant toute proposition.",
  ],
  [
    "Hygrométrie & ambiance intérieure",
    "Température, humidité, renouvellement d’air et évacuation de l’air chaud sont des paramètres essentiels en élevage, en stockage ou en cultures abritées. Nous proposons une approche adaptée à chaque usage.",
  ],
  [
    "Chantier adapté à votre exploitation",
    "Nous planifions les interventions selon vos contraintes : accès, périodes creuses, présence d’animaux, zones de stockage, règles sanitaires et continuité d’activité.",
  ],
];

const solutions: Array<[string, string, string]> = [
  ["Isolation toiture - thermoreflectif", "/isolation-toiture-rampants", "Limiter les surchauffes sous toiture et améliorer le confort thermique des bâtiments agricoles."],
  ["Bardage", "/bardage", "Protéger les façades, améliorer l’aspect du bâtiment et renforcer le confort thermique selon la configuration."],
  ["Extracteur d'air", "/extracteur-air", "Évacuer l’air chaud ou humide et améliorer le renouvellement d’air dans les bâtiments d’élevage, hangars ou zones de stockage."],
  ["Prime CEE", "/prime-cee", "Identifier les fiches applicables selon votre besoin de travaux et sécuriser le dossier avant engagement, selon le bâtiment, l’usage et l’opération envisagée."],
];

export default function AgricolePage() {
  return (
    <div className="page-secteur page-agricole">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Agricole", url: "/agricole" },
        ]}
      />
      {/* HERO */}
      <section className="hero hero--drift">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__content fade-in">
              <div className="hero__badges">
                <span className="tag tag--white">Secteur agricole</span>
                <span className="tag tag--white">Élevage · Serres · Hangars</span>
                <span className="tag tag--white">CEE BAT-EN &amp; IND-UT</span>
              </div>

              <h1 className="hero__title">
                Améliorer le confort thermique
                <br />
                des bâtiments <em>agricoles.</em>
              </h1>

              <p className="hero__subtitle">
                Élevage, culture, production ou stockage : ECOPRORENOVE étudie votre
                besoin, identifie les solutions énergétiques adaptées et vérifie les
                aides CEE mobilisables selon l&apos;usage réel du site et les
                contraintes de votre exploitation.
              </p>

              <div className="hero__actions">
                <a href="#contact" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  Étudier mon projet
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATIONS */}
      <section className="secteur-section secteur-section--alt">
        <div className="container">
          <header className="secteur-section__header fade-in">
            <p className="section-label">Opérations en agricole</p>
            <h2 className="section-title">
              Élevage, stockage, cultures —<br />
              <em>une approche</em> par bâtiment.
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Chaque exploitation a ses propres contraintes : type de bâtiment, usage
              réel, ventilation, éclairage, humidité, température, accès, sécurité
              sanitaire et périodes d&apos;activité. Nous adaptons les solutions et le
              montage du dossier selon le bâtiment concerné.
            </p>
          </header>

          <div className="secteur-grid">
            {operations.map(([title, text], i) => (
              <article key={title} className={`secteur-card fade-in delay-${(i % 6) + 1}`}>
                <div className="secteur-card__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="secteur-card__title">{title}</h3>
                <p className="secteur-card__text">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="secteur-section">
        <div className="container">
          <header className="secteur-section__header fade-in">
            <p className="section-label">Solutions adaptées</p>
            <h2 className="section-title">
              Nos <em>solutions</em><br />
              pour les bâtiments agricoles.
            </h2>
            <div className="divider divider--center"></div>
          </header>

          <div className="secteur-grid">
            {solutions.map(([title, href, text], i) => (
              <Link key={href} href={href} className={`secteur-card secteur-card--link fade-in delay-${(i % 6) + 1}`}>
                <div className="secteur-card__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
                <h3 className="secteur-card__title">{title}</h3>
                <p className="secteur-card__text">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="cta-final" id="contact">
        <div className="container">
          <div className="cta-final__inner fade-in">
            <p className="section-label section-label--white">Parlons de votre exploitation</p>
            <h2 className="cta-final__title">
              Un bâtiment agricole<br />
              <em>à améliorer ?</em>
            </h2>
            <p className="cta-final__subtitle">
              Décrivez-nous votre exploitation, le type de bâtiment et vos contraintes.
              Nous vérifions les solutions techniques adaptées et les aides CEE
              éventuellement mobilisables, sans engagement.
            </p>

            <div className="form-card form-card--secteur fade-in delay-2">
              <ContactForm source="agricole">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="a-prenom">Prénom *</label>
                    <input className="form-input" type="text" id="a-prenom" name="prenom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="a-nom">Nom *</label>
                    <input className="form-input" type="text" id="a-nom" name="nom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="a-societe">Exploitation</label>
                    <input className="form-input" type="text" id="a-societe" name="societe" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="a-tel">Téléphone *</label>
                    <input className="form-input" type="tel" id="a-tel" name="telephone" required />
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="a-email">Email *</label>
                    <input className="form-input" type="email" id="a-email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="a-typebat">Type de bâtiment</label>
                    <select className="form-select" id="a-typebat" name="type_batiment" defaultValue="">
                      <option value="" disabled>Sélectionnez</option>
                      <option value="elevage">Bâtiment d&apos;élevage</option>
                      <option value="hangar">Hangar de stockage</option>
                      <option value="serre">Serre / cultures abritées</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="a-surface">Surface (m²)</label>
                    <input className="form-input" type="text" id="a-surface" name="surface" placeholder="Ex. 800 m²" />
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="a-message">Décrivez votre projet</label>
                    <textarea className="form-textarea" id="a-message" name="message" placeholder="Type de bâtiment, charpente existante, contraintes sanitaires / saisonnières, calendrier souhaité…" rows={4}></textarea>
                  </div>
                  <div className="form-group form-group--full">
                    <div className="form-consent">
                      <input type="checkbox" id="a-rgpd" name="rgpd" required />
                      <label htmlFor="a-rgpd">J&apos;accepte que mes données soient utilisées par ECOPRORENOVE pour l&apos;étude de mon projet. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles.</label>
                    </div>
                  </div>
                  <div className="form-group form-group--full">
                    <button type="submit" className="btn btn--primary btn--lg form-submit">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                      Étudier mon projet
                    </button>
                  </div>
                </div>
              </ContactForm>
            </div>

            <div className="cta-final__actions">
              <a href="tel:+33619798391" className="btn btn--secondary btn--lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.63-.63a2 2 0 0 1 2.11-.45c.9.386 1.86.647 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Ou nous appeler directement
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

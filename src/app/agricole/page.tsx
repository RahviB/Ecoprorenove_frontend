import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Agricole — bâtiments d'élevage, serres, hangars (CEE BAT-EN, IND-UT)",
  description:
    "Rénovation énergétique pour exploitations agricoles : isolation lourde sous toiture, ambiance et hygrométrie pour le bétail, fiches CEE spécifiques (BAT-EN, IND-UT). Métropole et La Réunion.",
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
    "Stabulations, porcheries, poulaillers : isolation sous toiture pour stabiliser l’ambiance, maîtriser l’hygrométrie et améliorer le confort thermique du bétail. Impact direct sur la productivité et la santé animale.",
  ],
  [
    "Hangars agricoles",
    "Stockage matériel, fourrage, céréales : isolation lourde et ventilation adaptées aux contraintes structurelles des charpentes existantes — bois, métal, fermettes industrielles.",
  ],
  [
    "Serres & cultures abritées",
    "Maîtrise des consommations de chauffage et déstratification de l’air dans les volumes vitrés ou bâchés, sans compromettre la luminosité ou la conduite culturale.",
  ],
  [
    "Fiches CEE spécifiques",
    "BAT-EN (bâtiments tertiaires et agricoles) et IND-UT (industriel et utilités) : nous identifions la bonne fiche selon la nature de votre bâtiment et de l’opération, et structurons un dossier conforme.",
  ],
  [
    "Hygrométrie & ambiance",
    "Le bien-être animal et la conservation des récoltes dépendent autant de l’humidité que de la température. Extracteurs, déstratificateurs et ventilation adaptés au contexte agricole.",
  ],
  [
    "Coordination chantier en exploitation",
    "Périodes creuses, accès cour de ferme, contraintes sanitaires en élevage : nous calons le chantier sur votre calendrier d’exploitation, pas l’inverse.",
  ],
];

const solutions: Array<[string, string, string]> = [
  ["Isolation toiture & rampants", "/isolation-toiture-rampants", "Isolation lourde sous toiture pour bâtiments d'élevage et hangars."],
  ["Bardage", "/bardage", "Habillage thermique des façades de bâtiments agricoles."],
  ["Extracteur d'air", "/extracteur-air", "Renouvellement d'air et hygrométrie maîtrisée pour le bétail."],
  ["VMC double flux agricole", "/vmc-double-flux", "Récupération de chaleur sur l'air extrait — fiche CEE AGR-TH-119."],
  ["Accompagnement stratégique", "/accompagnement-strategique", "Cadrage du programme et arbitrages selon votre contexte d'exploitation."],
  ["Prime CEE", "/prime-cee", "Mobilisation des fiches BAT-EN et IND-UT pour le secteur agricole."],
];

export default function AgricolePage() {
  return (
    <div className="page-secteur page-agricole">
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
                Rénover un bâtiment <em>agricole,</em>
                <br />
                avec les bonnes fiches CEE.
              </h1>

              <p className="hero__subtitle">
                Bâtiments d&apos;élevage, hangars de stockage, serres : ECOPRORENOVE
                identifie les fiches CEE applicables (BAT-EN, IND-UT, AGR-TH-119) et
                structure des opérations qui tiennent compte du confort animal, de
                l&apos;hygrométrie et des contraintes d&apos;exploitation. Pose RGE et
                coordination chantier sur votre calendrier.
              </p>

              <div className="hero__actions">
                <a href="#contact" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  Étudier mon bâtiment agricole
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
              Un poulailler, un hangar à céréales et une serre maraîchère ne s&apos;isolent
              pas de la même façon. Nous adaptons l&apos;opération — et le dossier CEE —
              au type de bâtiment et à son usage réel.
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
              Les <em>services ECOPRORENOVE</em><br />
              mobilisables en agricole.
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
            <p className="cta-final__eyebrow">Parlons de votre exploitation</p>
            <h2 className="cta-final__title">
              Un bâtiment agricole,<br />
              <em>une fiche CEE adaptée.</em>
            </h2>
            <p className="cta-final__subtitle">
              BAT-EN, IND-UT, AGR-TH-119, isolation lourde, ambiance bétail : nous
              identifions le bon montage pour votre exploitation. Sans engagement.
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

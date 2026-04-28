import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Tertiaire — bureaux, commerces, santé, enseignement, hôtellerie",
  description:
    "Rénovation énergétique tertiaire : décret tertiaire (−40 % d'ici 2030), continuité d'exploitation, dossier CEE structuré. Métropole et La Réunion.",
  alternates: { canonical: "/tertiaire" },
  openGraph: {
    url: "/tertiaire",
    title: "Tertiaire — Rénovation énergétique · ECOPRORENOVE",
    description:
      "Décret tertiaire, continuité d'exploitation, dossier CEE structuré. Bureaux, commerces, santé, enseignement, hôtellerie.",
  },
};

const operations: Array<[string, string]> = [
  [
    "Décret tertiaire & trajectoire réglementaire",
    "Bâtiments de plus de 1 000 m² : -40% de consommation d'ici 2030, -50% d'ici 2040, -60% d'ici 2050. Nous structurons un programme de travaux cohérent avec la trajectoire et déclarable sur OPERAT.",
  ],
  [
    "Isolation de l'enveloppe",
    "Combles, toitures-terrasses, rampants, façades par bardage. Réduction directe des besoins de chauffage et de climatisation — particulièrement en bureaux et établissements à forte occupation.",
  ],
  [
    "Traitement & qualité d'air",
    "Extracteurs, ventilation contrôlée, déstratificateurs en grands volumes (commerces, halls, salles de sport). Confort des occupants et réduction des consommations de chauffage.",
  ],
  [
    "Pilotage technique du bâtiment",
    "Régulation, GTB, accompagnement stratégique pour cadrer les arbitrages techniques et financiers en lien avec votre direction immobilière ou vos services généraux.",
  ],
  [
    "Continuité d'exploitation",
    "Phasage des chantiers, interventions hors heures d'ouverture, coordination avec les exploitants. L'activité du bâtiment ne s'arrête pas — les travaux s'adaptent.",
  ],
  [
    "Dossier CEE adapté à la gouvernance",
    "SCI, foncière, exploitant, locataire, copropriété de bureaux : nous identifions le bon porteur de dossier et sécurisons la chronologie administrative selon votre structure.",
  ],
];

const solutions: Array<[string, string, string]> = [
  ["Isolation des combles", "/isolation-combles", "Solution rapide en immobilier tertiaire à toiture-terrasse ou combles perdus."],
  ["Isolation toiture & rampants", "/isolation-toiture-rampants", "Traitement de l'enveloppe haute pour bâtiments tertiaires existants."],
  ["Bardage", "/bardage", "Habillage thermique des façades — esthétique et performance."],
  ["Déstratificateur d'air", "/destratificateur-air", "Homogénéisation thermique en grands volumes (commerces, halls, ateliers)."],
  ["Extracteur d'air", "/extracteur-air", "Renouvellement d'air et qualité d'ambiance pour locaux occupés."],
  ["Accompagnement stratégique", "/accompagnement-strategique", "Cadrage du programme, arbitrages techniques, pilotage de bout en bout."],
  ["Prime CEE", "/prime-cee", "Mobilisation des Certificats d'Économies d'Énergie pour vos travaux tertiaires."],
];

export default function TertiairePage() {
  return (
    <div className="page-secteur page-tertiaire">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Tertiaire", url: "/tertiaire" },
        ]}
      />
      {/* HERO */}
      <section className="hero hero--drift">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__content fade-in">
              <div className="hero__badges">
                <span className="tag tag--white">Secteur tertiaire</span>
                <span className="tag tag--white">Décret tertiaire</span>
                <span className="tag tag--white">Continuité d&apos;exploitation</span>
              </div>

              <h1 className="hero__title">
                Rénovation énergétique des bâtiments
                <br />
                <em>tertiaires</em> — sans interrompre votre activité.
              </h1>

              <p className="hero__subtitle">
                Bureaux, commerces, établissements de santé, enseignement, hôtellerie —
                ECOPRORENOVE accompagne les maîtres d&apos;ouvrage tertiaires dans la
                trajectoire du décret tertiaire (-40&nbsp;% d&apos;ici 2030), avec un
                dossier CEE adapté à votre gouvernance et un phasage qui préserve la
                continuité d&apos;exploitation.
              </p>

              <div className="hero__actions">
                <a href="#contact" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  Étudier mon programme tertiaire
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
            <p className="section-label">Opérations adaptées au tertiaire</p>
            <h2 className="section-title">
              Les leviers concrets pour<br />
              un parc <em>tertiaire performant.</em>
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Chaque bâtiment tertiaire a ses contraintes propres — usage, occupation,
              gouvernance, contrats d&apos;exploitation. Voici les opérations que nous
              mobilisons le plus souvent dans ce secteur.
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
              mobilisables pour le tertiaire.
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
            <p className="cta-final__eyebrow">Parlons de votre parc tertiaire</p>
            <h2 className="cta-final__title">
              Un patrimoine tertiaire,<br />
              <em>une trajectoire claire.</em>
            </h2>
            <p className="cta-final__subtitle">
              Décret tertiaire, dossier CEE, phasage des travaux : nous cadrons votre
              programme de bout en bout. Sans engagement.
            </p>

            <div className="form-card form-card--secteur fade-in delay-2">
              <ContactForm source="tertiaire">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="t-prenom">Prénom *</label>
                    <input className="form-input" type="text" id="t-prenom" name="prenom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="t-nom">Nom *</label>
                    <input className="form-input" type="text" id="t-nom" name="nom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="t-societe">Société / collectivité</label>
                    <input className="form-input" type="text" id="t-societe" name="societe" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="t-tel">Téléphone *</label>
                    <input className="form-input" type="tel" id="t-tel" name="telephone" required />
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="t-email">Email *</label>
                    <input className="form-input" type="email" id="t-email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="t-typebat">Type de bâtiment</label>
                    <select className="form-select" id="t-typebat" name="type_batiment" defaultValue="">
                      <option value="" disabled>Sélectionnez</option>
                      <option value="bureaux">Bureaux / siège</option>
                      <option value="commerce">Commerce / retail</option>
                      <option value="sante">Santé / médico-social</option>
                      <option value="enseignement">Enseignement</option>
                      <option value="hotellerie">Hôtellerie / restauration</option>
                      <option value="autre">Autre tertiaire</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="t-surface">Surface concernée (m²)</label>
                    <input className="form-input" type="text" id="t-surface" name="surface" placeholder="Ex. 1 200 m²" />
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="t-message">Décrivez votre programme</label>
                    <textarea className="form-textarea" id="t-message" name="message" placeholder="Trajectoire décret tertiaire, contraintes d'exploitation, gouvernance (SCI, foncière, exploitant), calendrier souhaité…" rows={4}></textarea>
                  </div>
                  <div className="form-group form-group--full">
                    <div className="form-consent">
                      <input type="checkbox" id="t-rgpd" name="rgpd" required />
                      <label htmlFor="t-rgpd">J&apos;accepte que mes données soient utilisées par ECOPRORENOVE pour l&apos;étude de mon projet. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles.</label>
                    </div>
                  </div>
                  <div className="form-group form-group--full">
                    <button type="submit" className="btn btn--primary btn--lg form-submit">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                      Étudier mon programme
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

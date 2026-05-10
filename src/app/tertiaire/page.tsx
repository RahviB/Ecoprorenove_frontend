import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Tertiaire — décret tertiaire & dossier CEE",
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
    "Décret tertiaire & trajectoire énergétique",
    "Pour les bâtiments tertiaires concernés, nous vous aidons à structurer une trajectoire cohérente avec les objectifs réglementaires : réduction des consommations, choix des actions prioritaires et suivi des données à déclarer.",
  ],
  [
    "Isolation de l'enveloppe",
    "Toitures, combles, rampants, planchers bas, façades ou bardage : nous traitons les postes qui influencent directement le confort thermique et les besoins en climatisation ou chauffage.",
  ],
  [
    "Ventilation & qualité d'air",
    "Extracteurs, VMC, destratification ou solutions d'aéraulique : nous améliorons le renouvellement d'air, le confort des occupants et l'équilibre thermique des grands volumes.",
  ],
  [
    "Pilotage énergétique du bâtiment",
    "Nous vous accompagnons dans les choix techniques : régulation, suivi des consommations, priorisation des travaux et arbitrage entre performance, budget et financement.",
  ],
  [
    "Travaux sans interruption d'activité",
    "Les interventions sont phasées selon vos contraintes : horaires d'ouverture, zones occupées, sécurité, accès, exploitation du site et continuité de service.",
  ],
  [
    "Dossier CEE & aides mobilisables",
    "Nous vérifions l'éligibilité, la chronologie, les pièces nécessaires et le bon porteur du dossier : propriétaire, exploitant, SCI, collectivité, bailleur ou locataire selon les cas.",
  ],
];

const solutions: Array<[string, string, string]> = [
  ["Isolation toiture - thermoréflectif", "/isolation-toiture-rampants", "Réduire les apports de chaleur et améliorer le confort sous toiture."],
  ["Isolation des combles", "/isolation-combles", "Limiter les déperditions ou les surchauffes selon la configuration du bâtiment."],
  ["Isolation des planchers bas", "/isolation-planchers-bas", "Réduire les pertes par le sol et améliorer le confort des locaux situés au-dessus de zones froides ou non chauffées."],
  ["Bardage & façade ventilée", "/bardage", "Améliorer l'esthétique, protéger la façade et renforcer la performance thermique."],
  ["Destratification d'air", "/destratificateur-air", "Homogénéiser la température dans les grands volumes."],
  ["Extraction d'air", "/extracteur-air", "Évacuer l'air chaud ou vicié et améliorer le confort des occupants."],
  ["Accompagnement stratégique", "/accompagnement-strategique", "Cadrer les priorités, les aides mobilisables, le phasage et la cohérence globale du programme."],
  ["Prime CEE", "/prime-cee", "Mobiliser les Certificats d'Économies d'Énergie lorsque l'opération est éligible."],
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
                <em>tertiaires</em>
              </h1>

              <p className="hero__subtitle">
                Bureaux, commerces, établissements de santé, écoles, hôtels ou
                bâtiments mixtes : ECOPRORENOVE accompagne les maîtres d&apos;ouvrage
                tertiaires dans leurs projets d&apos;efficacité énergétique, en tenant
                compte des objectifs du décret tertiaire, des aides CEE mobilisables
                et des contraintes d&apos;exploitation du site.
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
              Nos <em>solutions</em><br />
              pour les bâtiments tertiaires.
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
            <h2 className="cta-final__title">
              Vous avez un bâtiment tertiaire<br />
              <em>à améliorer ?</em>
            </h2>
            <p className="cta-final__subtitle">
              Décrivez-nous votre bâtiment, vos contraintes et vos objectifs. Nous
              vous indiquerons les solutions pertinentes et les aides mobilisables,
              sans engagement.
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
                      Étudier mon projet
                    </button>
                  </div>
                </div>
              </ContactForm>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

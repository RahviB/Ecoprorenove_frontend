import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import SolutionsTabs from "@/components/SolutionsTabs";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Accueil V2 — comparaison locale",
  description: "Version alternative de la page d'accueil ECOPRORENOVE pour comparaison locale.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/home-v2" },
};

const solutions = [
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
    title: "Isolation toiture",
    desc: "Réduire les transferts thermiques sous couverture, sans reprise lourde de charpente.",
    sectors: ["tertiaire", "agricole"] as const,
    ceeFinance: true,
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
    ceeFinance: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 4 L20 10 V20 H4 V10 Z" />
        <line x1="4" y1="14" x2="20" y2="14" />
      </svg>
    ),
  },
  {
    href: "/isolation-planchers-bas",
    title: "Isolation des planchers bas",
    desc: "Sous-face, vide sanitaire, parking ou local non chauffé.",
    sectors: ["tertiaire", "residentiel"] as const,
    ceeFinance: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="1" />
        <line x1="3" y1="14" x2="21" y2="14" />
        <line x1="6" y1="18" x2="6" y2="20" />
        <line x1="18" y1="18" x2="18" y2="20" />
      </svg>
    ),
  },
  {
    href: "/destratificateur-air",
    title: "Destratificateur d'air",
    desc: "Redistribuer la chaleur en hauteur pour réduire les consommations.",
    sectors: ["tertiaire"] as const,
    ceeFinance: true,
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
    desc: "Renouvellement d'air maîtrisé, évacuation des charges thermiques.",
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
    href: "/prime-cee",
    title: "Prime CEE & MaPrimeRénov'",
    desc: "Mobilisation et structuration des leviers de financement.",
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

const sectors = [
  ["Tertiaire", "Bureaux, commerces, santé, enseignement", "/tertiaire-v2"],
  ["Résidentiel", "Copropriétés, bailleurs, maisons individuelles", "/residentiel-v2"],
  ["Agricole", "Élevage, serres, hangars et stockage", "/agricole-v2"],
];

const process = [
  ["01", "Lecture du bâtiment", "Usage, surface, contraintes, pathologies et calendrier."],
  ["02", "Éligibilité aides", "CEE, MaPrimeRénov' ou fiche spécifique selon le secteur."],
  ["03", "Plan de travaux", "Priorités techniques, phasage et entreprises qualifiées."],
  ["04", "Dossier sécurisé", "Pièces, chronologie, suivi administratif et clôture."],
];

export default function HomeV2Page() {
  return (
    <div className="page-home-v2x">
      <OrganizationJsonLd />
      <WebSiteJsonLd />

      <section className="home-v2-hero">
        <div className="container container--wide">
          <div className="home-v2-compare">
            <Link href="/" className="home-v2-compare__link">Page actuelle</Link>
            <span>Accueil V2</span>
          </div>

          <div className="home-v2-hero__grid">
            <div className="home-v2-hero__copy">
              <p className="home-v2-eyebrow">Rénovation énergétique · CEE · Pose RGE</p>
              <h1>
                Des travaux d&apos;efficacité énergétique <em>bien cadrés dès le départ.</em>
              </h1>
              <p className="home-v2-hero__lead">
                ECOPRORENOVE accompagne les maîtres d&apos;ouvrage tertiaires, résidentiels et agricoles : diagnostic, choix des opérations, dossier de financement, pose qualifiée et suivi jusqu&apos;à la clôture.
              </p>

              <div className="home-v2-hero__actions">
                <a href="#contact" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  Demander une étude
                </a>
                <a href="#solutions" className="btn btn--outline-dark">Voir les solutions</a>
              </div>

              <div className="home-v2-proof" aria-label="Indicateurs ECOPRORENOVE">
                <div><strong>500+</strong><span>clients accompagnés</span></div>
                <div><strong>40 000 m²</strong><span>isolés ou traités</span></div>
                <div><strong>CEE</strong><span>dossier cadré avant travaux</span></div>
              </div>
            </div>

            <div className="home-v2-hero__visual" aria-label="Exemples de travaux ECOPRORENOVE">
              <div className="home-v2-photo home-v2-photo--main">
                <Image
                  src="/images/bardage/maison-modern-grey.webp"
                  alt="Maison rénovée avec bardage moderne"
                  fill
                  priority
                  sizes="(max-width: 900px) 92vw, 620px"
                />
                <span>Bardage & ITE</span>
              </div>

              <div className="home-v2-photo home-v2-photo--small home-v2-photo--roof">
                <Image src="/images/isolation-toiture-rampants.webp" alt="Isolation sous toiture" fill sizes="220px" />
                <span>Isolation toiture</span>
              </div>

              <div className="home-v2-photo home-v2-photo--small home-v2-photo--air">
                <Image src="/images/extracteur/tornado-toiture-installation.webp" alt="Extracteurs d'air statiques installés en toiture" fill sizes="240px" />
                <span>Ventilation</span>
              </div>

              <div className="home-v2-flow" aria-hidden="true">
                <span>Étude</span>
                <span>CEE</span>
                <span>Travaux</span>
                <span>Clôture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-v2-sector-strip" aria-label="Secteurs accompagnés">
        <div className="container">
          <div className="home-v2-sector-strip__grid">
            {sectors.map(([title, text, href]) => (
              <Link key={title} href={href} className="home-v2-sector-link">
                <strong>{title}</strong>
                <span>{text}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-v2-section" id="solutions">
        <div className="container">
          <header className="home-v2-section__header">
            <p className="home-v2-eyebrow">Solutions</p>
            <h2>Les opérations à mobiliser selon le bâtiment.</h2>
            <p>Une lecture par secteur pour aller vite : enveloppe, qualité d&apos;air, financement et pilotage.</p>
          </header>
          <SolutionsTabs solutions={solutions} />
        </div>
      </section>

      <section className="home-v2-section home-v2-section--green" id="methode">
        <div className="container">
          <header className="home-v2-section__header">
            <p className="home-v2-eyebrow">Méthode</p>
            <h2>Un projet lisible avant devis, travaux et aides.</h2>
          </header>
          <div className="home-v2-process">
            {process.map(([step, title, text]) => (
              <article key={step}>
                <span>{step}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-v2-contact" id="contact">
        <div className="container">
          <div className="home-v2-contact__grid">
            <div>
              <p className="home-v2-eyebrow">Contact</p>
              <h2>Votre projet mérite une première lecture claire.</h2>
              <p>
                Donnez-nous le type de bâtiment, la surface et les contraintes principales. Nous revenons avec une première orientation technique et financement.
              </p>
            </div>

            <div className="form-card home-v2-form">
              <ContactForm source="home-v2">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="home-v2-prenom">Prénom *</label>
                    <input className="form-input" type="text" id="home-v2-prenom" name="prenom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="home-v2-nom">Nom *</label>
                    <input className="form-input" type="text" id="home-v2-nom" name="nom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="home-v2-email">Email *</label>
                    <input className="form-input" type="email" id="home-v2-email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="home-v2-tel">Téléphone *</label>
                    <input className="form-input" type="tel" id="home-v2-tel" name="telephone" required />
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="home-v2-secteur">Secteur</label>
                    <select className="form-select" id="home-v2-secteur" name="secteur" defaultValue="">
                      <option value="" disabled>Sélectionnez</option>
                      <option value="tertiaire">Tertiaire</option>
                      <option value="residentiel">Résidentiel</option>
                      <option value="agricole">Agricole</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="home-v2-message">Décrivez votre projet</label>
                    <textarea className="form-textarea" id="home-v2-message" name="message" placeholder="Type de bâtiment, surface, objectifs, contraintes..." rows={4}></textarea>
                  </div>
                  <div className="form-group form-group--full">
                    <div className="form-consent">
                      <input type="checkbox" id="home-v2-rgpd" name="rgpd" required />
                      <label htmlFor="home-v2-rgpd">J&apos;accepte que mes données soient utilisées par ECOPRORENOVE pour l&apos;étude de mon projet.</label>
                    </div>
                  </div>
                  <div className="form-group form-group--full">
                    <button type="submit" className="btn btn--primary btn--lg form-submit">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                      Envoyer ma demande
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

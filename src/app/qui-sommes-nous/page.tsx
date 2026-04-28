import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Qui sommes-nous ?",
  description:
    "ECOPRORENOVE — bureau d'études et coordination de rénovation énergétique. Tertiaire, résidentiel, agricole. Métropole et La Réunion. Pose RGE, dossier CEE sécurisé.",
  alternates: { canonical: "/qui-sommes-nous" },
  openGraph: {
    url: "/qui-sommes-nous",
    title: "Qui sommes-nous ? · ECOPRORENOVE",
    description:
      "Bureau d'études et coordination de rénovation énergétique. Tertiaire, résidentiel, agricole. Métropole et La Réunion.",
  },
};

export default function QuiSommesNousPage() {
  return (
    <div className="page-about">
      {/* ========== HERO ========== */}
      <section className="hero">
        <div className="container container--wide">
          <div className="hero__inner">
            <div className="hero__content">
              <p className="section-label section-label--white">Qui sommes-nous&nbsp;?</p>
              <h1 className="hero__title">
                Un interlocuteur <em>unique</em> pour la rénovation énergétique
                <br />
                de votre bâtiment.
              </h1>
              <p className="hero__subtitle">
                ECOPRORENOVE — bureau d&apos;études et coordination — accompagne les
                maîtres d&apos;ouvrage tertiaires, résidentiels et agricoles, de
                l&apos;analyse technique à la clôture du dossier CEE. Métropole et La
                Réunion.
              </p>

              <div className="hero__actions">
                <a href="#contact" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  Discuter de votre projet
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

      {/* ========== POSITIONNEMENT ========== */}
      <section className="about-pos">
        <div className="container">
          <div className="about-pos__inner fade-in">
            <p className="section-label">Notre positionnement</p>
            <h2 className="section-title">
              Nous ne posons pas pour <em>poser&nbsp;:</em><br />
              nous structurons un projet.
            </h2>
            <div className="divider"></div>
            <p className="section-intro">
              La rénovation énergétique est un terrain où les promesses sont nombreuses et
              les déceptions fréquentes. Notre rôle est d&apos;arbitrer en amont&nbsp;:
              identifier les bonnes opérations, sécuriser le financement, coordonner les
              entreprises et livrer un dossier CEE conforme. Si une opération n&apos;est
              pas pertinente pour votre bâtiment, nous le disons.
            </p>
          </div>
        </div>
      </section>

      {/* ========== L'ENTREPRISE — chiffres + équipe ========== */}
      <section className="about-company">
        <div className="container">
          <div className="about-company__grid">
            <div className="about-company__lead fade-in">
              <p className="section-label">L&apos;entreprise</p>
              <h2 className="section-title">
                EB CONSEILS – Ecoprorenove,<br />
                <em>fondée à Lyon.</em>
              </h2>
              <div className="divider"></div>
              <p>
                Société par Actions Simplifiée immatriculée sous le SIREN
                894&nbsp;975&nbsp;150, ECOPRORENOVE opère depuis deux établissements&nbsp;:
                <strong> Lyon</strong> pour la Métropole et <strong>Saint-Denis</strong>{" "}
                pour La Réunion. Cette double implantation nous permet de couvrir des
                contextes climatiques radicalement différents — gestion thermique
                hivernale en Métropole, traitement de la chaleur tropicale et de
                l&apos;hygrométrie en Outre-Mer.
              </p>
              <p>
                Le pilotage est assuré par <strong>Emmanuel Boyer</strong>, fondateur, en
                tant que directeur de la publication et représentant légal.
              </p>
            </div>

            <ul className="about-company__stats">
              <li>
                <strong>+500</strong>
                <span>clients accompagnés</span>
              </li>
              <li>
                <strong>+40&nbsp;000&nbsp;m²</strong>
                <span>isolés</span>
              </li>
              <li>
                <strong>200&nbsp;000&nbsp;MWh</strong>
                <span>cumac valorisés</span>
              </li>
              <li>
                <strong>2 territoires</strong>
                <span>Métropole &amp; La Réunion</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========== ENGAGEMENTS ========== */}
      <section className="about-values">
        <div className="container">
          <div className="about-values__header fade-in">
            <p className="section-label">Nos engagements</p>
            <h2 className="section-title">
              Quatre principes qui <em>tiennent</em>,<br />
              quel que soit le projet.
            </h2>
            <div className="divider"></div>
          </div>

          <div className="about-values__grid">
            <article className="about-value fade-in delay-1">
              <div className="about-value__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Interlocuteur unique</h3>
              <p>
                Un seul point de contact, de l&apos;analyse à la clôture. Vous ne courez
                pas après un installateur, un courtier et un administrateur — c&apos;est
                nous qui orchestrons.
              </p>
            </article>

            <article className="about-value fade-in delay-2">
              <div className="about-value__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Dossier CEE sécurisé</h3>
              <p>
                Éligibilité vérifiée, chronologie respectée, pièces conformes. Le dossier
                est suivi jusqu&apos;au versement effectif du financement par
                l&apos;obligé.
              </p>
            </article>

            <article className="about-value fade-in delay-3">
              <div className="about-value__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>Pose RGE Qualibat</h3>
              <p>
                Équipes et installateurs partenaires qualifiés RGE Qualibat. Garantie
                décennale et responsabilité civile pro souscrites auprès d&apos;APRIL.
              </p>
            </article>

            <article className="about-value fade-in delay-4">
              <div className="about-value__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h3>Honnêteté technique</h3>
              <p>
                Si une opération n&apos;a pas de sens pour votre bâtiment — orientation,
                exposition, état de la couverture, occupation — nous le disons avant le
                devis, pas après.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ========== COORDONNÉES ========== */}
      <section className="about-contact" id="contact">
        <div className="container">
          <div className="about-contact__inner fade-in">
            <p className="section-label section-label--white">Nos coordonnées</p>
            <h2 className="section-title section-title--white">
              Deux établissements, <em className="acc">une équipe.</em>
            </h2>
            <div className="divider divider--white divider--center"></div>

            <div className="about-contact__grid">
              <article className="about-office">
                <p className="about-office__city">Métropole · Lyon</p>
                <p className="about-office__addr">
                  3 rue Jacqueline et Roland de Pury<br />
                  69002 Lyon
                </p>
                <a href="tel:+33619798391" className="about-office__phone">
                  +33&nbsp;6&nbsp;19&nbsp;79&nbsp;83&nbsp;91
                </a>
              </article>

              <article className="about-office">
                <p className="about-office__city">La Réunion · Saint-Denis</p>
                <p className="about-office__addr">
                  104 C avenue Leconte de Lisle<br />
                  97490 Saint-Denis
                </p>
                <a href="tel:+262693546253" className="about-office__phone">
                  +262&nbsp;6&nbsp;93&nbsp;54&nbsp;62&nbsp;53
                </a>
              </article>
            </div>

            <p className="about-contact__email">
              <a href="mailto:contact@ecoprorenove.fr">contact@ecoprorenove.fr</a> ·
              horaires&nbsp;: 9h00 – 17h00
            </p>
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="cta-final">
        <div className="container">
          <div className="cta-final__inner fade-in">
            <p className="cta-final__eyebrow">Parlons de votre projet</p>
            <h2 className="cta-final__title">
              Votre projet mérite<br />
              d&apos;être <em>bien étudié.</em>
            </h2>
            <p className="cta-final__subtitle">
              Échangeons sur votre bâtiment, vos objectifs, vos contraintes — sans
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

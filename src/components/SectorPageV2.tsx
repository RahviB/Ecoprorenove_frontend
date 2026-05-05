import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import ContactForm from "@/components/contact/ContactForm";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

type SectorKey = "tertiaire" | "residentiel" | "agricole";

type SectorSolution = {
  title: string;
  href: string;
  text: string;
};

type SectorFeature = {
  title: string;
  text: string;
};

type SectorMetric = {
  value: string;
  label: string;
};

type SectorVisual = {
  src: string;
  alt: string;
  label: string;
};

type SectorFormField = {
  id: string;
  label: string;
  name: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  placeholder?: string;
  options?: Array<[string, string]>;
};

type SectorPageV2Props = {
  sector: SectorKey;
  label: string;
  originalHref: string;
  eyebrow: string;
  title: ReactNode;
  lead: string;
  badges: string[];
  metrics: SectorMetric[];
  features: SectorFeature[];
  solutions: SectorSolution[];
  visuals: SectorVisual[];
  formTitle: ReactNode;
  formLead: string;
  formSource: string;
  formFields: SectorFormField[];
  messagePlaceholder: string;
};

const sectorLinks: Array<[SectorKey, string, string, string]> = [
  ["tertiaire", "Tertiaire", "/tertiaire-v2", "/tertiaire"],
  ["residentiel", "Résidentiel", "/residentiel-v2", "/residentiel"],
  ["agricole", "Agricole", "/agricole-v2", "/agricole"],
];

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.63-.63a2 2 0 0 1 2.11-.45c.9.386 1.86.647 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function SectorPageV2({
  sector,
  label,
  originalHref,
  eyebrow,
  title,
  lead,
  badges,
  metrics,
  features,
  solutions,
  visuals,
  formTitle,
  formLead,
  formSource,
  formFields,
  messagePlaceholder,
}: SectorPageV2Props) {
  return (
    <div className={`page-secteur-v2 page-secteur-v2--${sector}`}>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: `${label} V2`, url: `/${sector}-v2` },
        ]}
      />

      <section className="sector-v2-hero">
        <div className="container container--wide">
          <div className="sector-v2-compare">
            <div className="sector-v2-compare__links" aria-label="Comparer les versions secteur">
              {sectorLinks.map(([key, name, v2Href, oldHref]) => (
                <Link key={key} href={key === sector ? oldHref : v2Href} className={key === sector ? "is-current" : ""}>
                  {name}
                  <span>{key === sector ? "Original" : "V2"}</span>
                </Link>
              ))}
            </div>
            <Link href={originalHref} className="sector-v2-compare__original">
              Voir la page actuelle
            </Link>
          </div>

          <div className="sector-v2-hero__grid">
            <div className="sector-v2-hero__content fade-in">
              <p className="sector-v2-eyebrow">{eyebrow}</p>
              <h1>{title}</h1>
              <p className="sector-v2-hero__lead">{lead}</p>

              <div className="sector-v2-badges">
                {badges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>

              <div className="sector-v2-hero__actions">
                <a href="#contact" className="btn btn--primary btn--lg">
                  <ArrowIcon />
                  Demander une étude
                </a>
                <a href="tel:+33619798391" className="btn btn--outline-dark">
                  <PhoneIcon />
                  +33 6 19 79 83 91
                </a>
              </div>
            </div>

            <div className="sector-v2-hero__panel fade-in delay-2">
              <div className="sector-v2-media">
                {visuals.map((visual, index) => (
                  <figure key={visual.src} className={`sector-v2-media__item sector-v2-media__item--${index + 1}`}>
                    <Image src={visual.src} alt={visual.alt} fill sizes="(max-width: 900px) 86vw, 360px" priority={index === 0} />
                    <figcaption>{visual.label}</figcaption>
                  </figure>
                ))}
              </div>

              <div className="sector-v2-proof">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sector-v2-section sector-v2-section--white">
        <div className="container">
          <div className="sector-v2-section__header fade-in">
            <p className="sector-v2-eyebrow">Ce que la V2 rend plus clair</p>
            <h2>Un parcours lisible par décision, travaux et financement.</h2>
            <p>
              Cette version garde le contenu métier des pages actuelles, mais le découpe en cartes plus rapides à scanner pour aider un visiteur à comprendre où il se situe.
            </p>
          </div>

          <div className="sector-v2-feature-grid">
            {features.map((feature, index) => (
              <article key={feature.title} className={`sector-v2-feature fade-in delay-${(index % 6) + 1}`}>
                <div className="sector-v2-feature__index">{String(index + 1).padStart(2, "0")}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sector-v2-section sector-v2-section--soft">
        <div className="container">
          <div className="sector-v2-split">
            <div className="sector-v2-section__header sector-v2-section__header--left fade-in">
              <p className="sector-v2-eyebrow">Solutions associées</p>
              <h2>Les pages à ouvrir depuis ce secteur.</h2>
              <p>
                Les liens restent les mêmes que sur la version actuelle, avec une hiérarchie plus directe entre besoin, solution et financement.
              </p>
            </div>

            <div className="sector-v2-solutions">
              {solutions.map((solution, index) => (
                <Link key={solution.href} href={solution.href} className={`sector-v2-solution fade-in delay-${(index % 6) + 1}`}>
                  <span className="sector-v2-solution__icon">
                    <ArrowIcon />
                  </span>
                  <span>
                    <strong>{solution.title}</strong>
                    <small>{solution.text}</small>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sector-v2-cta" id="contact">
        <div className="container">
          <div className="sector-v2-cta__grid">
            <div className="sector-v2-cta__copy fade-in">
              <p className="sector-v2-eyebrow">Contact</p>
              <h2>{formTitle}</h2>
              <p>{formLead}</p>
              <ul>
                <li><CheckIcon /> Analyse du bâtiment et de l&apos;usage réel</li>
                <li><CheckIcon /> Vérification CEE, MaPrimeRénov&apos; ou fiche dédiée</li>
                <li><CheckIcon /> Retour clair sur la faisabilité et les étapes</li>
              </ul>
            </div>

            <div className="form-card form-card--secteur sector-v2-form fade-in delay-2">
              <ContactForm source={formSource}>
                <div className="form-grid">
                  {formFields.map((field) => (
                    <div key={field.id} className={field.options ? "form-group form-group--full" : "form-group"}>
                      <label className="form-label" htmlFor={field.id}>{field.label}</label>
                      {field.options ? (
                        <select className="form-select" id={field.id} name={field.name} defaultValue="">
                          <option value="" disabled>Sélectionnez</option>
                          {field.options.map(([value, optionLabel]) => (
                            <option key={value} value={value}>{optionLabel}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          className="form-input"
                          type={field.type ?? "text"}
                          id={field.id}
                          name={field.name}
                          required={field.required}
                          placeholder={field.placeholder}
                        />
                      )}
                    </div>
                  ))}

                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor={`${sector}-v2-message`}>Décrivez votre projet</label>
                    <textarea className="form-textarea" id={`${sector}-v2-message`} name="message" placeholder={messagePlaceholder} rows={4}></textarea>
                  </div>
                  <div className="form-group form-group--full">
                    <div className="form-consent">
                      <input type="checkbox" id={`${sector}-v2-rgpd`} name="rgpd" required />
                      <label htmlFor={`${sector}-v2-rgpd`}>J&apos;accepte que mes données soient utilisées par ECOPRORENOVE pour l&apos;étude de mon projet.</label>
                    </div>
                  </div>
                  <div className="form-group form-group--full">
                    <button type="submit" className="btn btn--primary btn--lg form-submit">
                      <ArrowIcon />
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

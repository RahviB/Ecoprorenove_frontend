import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import Faq from "@/components/Faq";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ScrollNav from "@/components/ScrollNav";

export const metadata: Metadata = {
  title: "VMC Double Flux agricole — Déshumidification de serre, AGR-TH-119",
  description:
    "VMC double flux Thaleos pour serres et bâtiments agricoles. Récupération de chaleur 65-71 %, fiche CEE AGR-TH-119, financement jusqu'à 100 %. Pose RGE.",
  alternates: { canonical: "/vmc-double-flux" },
  openGraph: {
    url: "/vmc-double-flux",
    title: "VMC Double Flux agricole — ECOPRORENOVE",
    description:
      "Solution Thaleos pour serres maraîchères : 4 000 m³/h, 1 000 m² couverts, fiche CEE AGR-TH-119.",
  },
};

export default function VmcDoubleFluxPage() {
  return (
    <div className="page-service solution-template page-vmc">
      <ServiceJsonLd
        name="VMC Double Flux agricole — Thaleos THACTA11901"
        description="Système de ventilation double flux avec récupération de chaleur pour serres et bâtiments agricoles. Fiche CEE AGR-TH-119."
        url="/vmc-double-flux"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "VMC Double flux agricole", url: "/vmc-double-flux" },
        ]}
      />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__content fade-in">
              <h1 className="hero__title hero__title--t1">
                <span className="hero__title-eyebrow">Bâtiment agricole — CEE AGR-TH-119</span>
                <span className="hero__title-anchor">Déshumidifiez votre serre</span>
                <span className="hero__title-italic">récupérez la chaleur, sans investissement initial.</span>
              </h1>

              <p className="hero__stat-line">
                Jusqu&apos;à <strong>71&thinsp;%</strong> de récupération de chaleur
              </p>

              <p className="hero__subtitle">
                La VMC double flux Thaleos THACTA11901 capte la chaleur de l&apos;air extrait pour
                préchauffer l&apos;air entrant tout en maintenant une hygrométrie maîtrisée.
                Solution conforme à la fiche d&apos;opération standardisée CEE AGR-TH-119,
                finançable jusqu&apos;à 100 %.
              </p>

              <div className="hero__actions">
                <a href="#contact" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  Vérifier mon éligibilité
                </a>
                <a href="#solution" className="btn btn--secondary">Voir la solution Thaleos</a>
              </div>
            </div>

            <div className="hero__visual fade-in delay-3">
              <div className="hero__img hero__img--placeholder" aria-label="Photo à venir" />
              <div className="hero__bubble hero__bubble--temp">
                <strong>65 — 71 %</strong>
                <small>récupération<br />de chaleur</small>
              </div>
              <div className="hero__bubble hero__bubble--life">
                <strong>17 ans</strong>
                <small>durée de vie<br />conventionnelle</small>
              </div>
              <div className="hero__bubble hero__bubble--cee">
                <strong>CEE</strong>
                <small>AGR-TH-119</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollNav
        sections={[
          { id: "probleme", label: "Le problème" },
          { id: "solution", label: "Solution Thaleos" },
          { id: "processus", label: "Fonctionnement" },
          { id: "eligibilite", label: "Éligibilité" },
          { id: "faq", label: "FAQ" },
          { id: "contact", label: "Contact" },
        ]}
      />

      {/* HERO BANDEAU — proof points */}
      <div className="hero-bandeau">
        <div className="container">
          <div className="hero-bandeau__inner">
            {[
              "Pose RGE — installateurs qualifiés",
              "Régulation automatique (T°, hygrométrie, sondes)",
              "Durée de vie conventionnelle 17 ans",
            ].map((t) => (
              <div key={t} className="hero-bandeau__item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROBLEM */}
      <section className="benefits" id="probleme">
        <div className="container">
          <div className="benefits__header fade-in">
            <p className="section-label">L&apos;ennemi n°1 de vos cultures</p>
            <h2 className="section-title">
              L&apos;humidité non maîtrisée<br />
              compromet <em>vos rendements.</em>
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Un environnement non régulé est le terreau idéal des risques majeurs pour
              l&apos;exploitation : humidité excessive, condensation, écarts thermiques. Une VMC
              double flux change la donne.
            </p>
          </div>

          <div className="benefits__grid">
            {[
              {
                t: "Maladies cryptogamiques",
                p: "Développement rapide de champignons et moisissures lorsque l'humidité ambiante stagne au-delà des seuils. Une ventilation maîtrisée prévient ces foyers d'infection avant qu'ils ne s'installent.",
              },
              {
                t: "Condensation excessive",
                p: "L'air saturé provoque des gouttes d'eau directes sur les feuillages et les structures, accélérant la dégradation des cultures et de la serre. La double flux abaisse l'humidité relative en continu.",
              },
              {
                t: "Pertes de rendement",
                p: "Impact direct sur la qualité visuelle et gustative — donc sur la valeur marchande à la sortie. Un climat de serre stable se traduit par des rendements plus prévisibles d'une saison à l'autre.",
              },
            ].map((b, i) => (
              <div key={b.t} className={`benefit-card fade-in delay-${i + 1}`}>
                <div className="benefit-card__icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="12" y1="20" x2="12" y2="10"/>
                    <line x1="18" y1="20" x2="18" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="16"/>
                  </svg>
                </div>
                <h3 className="benefit-card__title">{b.t}</h3>
                <p className="benefit-card__text">{b.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION + STATS */}
      <section className="modes" id="solution">
        <div className="container">
          <div className="modes__header fade-in">
            <p className="section-label">Innovation Thaleos</p>
            <h2 className="section-title">
              VMC Double Flux <em>THACTA11901</em><br />
              avec récupération bidirectionnelle
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Marque française. Conception adaptée aux atmosphères humides et poussiéreuses des
              serres et bâtiments agricoles. Échangeur thermique haute performance pour récupérer
              entre 65 % et 71 % de la chaleur sortante.
            </p>
          </div>

          <div className="vmc-stats fade-in">
            <div className="vmc-stat">
              <div className="vmc-stat__value">4 000</div>
              <div className="vmc-stat__label">m³/h de débit nominal</div>
            </div>
            <div className="vmc-stat">
              <div className="vmc-stat__value">1 000</div>
              <div className="vmc-stat__label">m² couverts par unité</div>
            </div>
            <div className="vmc-stat">
              <div className="vmc-stat__value">17 ans</div>
              <div className="vmc-stat__label">durée de vie conventionnelle</div>
            </div>
            <div className="vmc-stat">
              <div className="vmc-stat__value">57 dB(A)</div>
              <div className="vmc-stat__label">niveau sonore maîtrisé</div>
            </div>
          </div>

          <div className="vmc-spec fade-in delay-2">
            <h3 className="vmc-spec__title">Caractéristiques techniques — THACTA11901</h3>
            <div className="vmc-spec__grid">
              {[
                ["Type de système", "Ventilation double flux"],
                ["Usage", "Bâtiment agricole, serre maraîchère"],
                ["Débit d'air", "4 000 m³/h"],
                ["Surface de couverture", "1 000 m²"],
                ["Pression maximale", "450 Pa"],
                ["Tension nominale", "380 V"],
                ["Puissance moteur", "2 200 W"],
                ["Niveau sonore", "57 dB(A)"],
                ["Dimensions (L × l × H)", "1 400 × 1 200 × 480 mm"],
                ["Poids", "120 kg"],
                ["Matériau", "Tôle galvanisée — émail cuit au four (gris mat)"],
                ["Filtrage", "Primaire + efficacité moyenne"],
                ["Rendement de récupération", "65 — 71 %"],
                ["Régulation", "Fréquence fixe — sondes T° / hygro / horaire"],
              ].map(([k, v]) => (
                <div key={k} className="vmc-spec__row">
                  <span className="vmc-spec__key">{k}</span>
                  <span className="vmc-spec__val">{v}</span>
                </div>
              ))}
            </div>
            <p className="vmc-spec__footnote">
              * Données fournisseur — Thaleos se réserve le droit d&apos;ajuster les
              caractéristiques sans préavis dans un objectif d&apos;amélioration produit. Fiche
              produit mise à jour janvier 2026.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works" id="processus">
        <div className="container">
          <div className="how-it-works__header fade-in">
            <p className="section-label">Votre transition en 4 étapes</p>
            <h2 className="section-title">
              D&apos;une <em>visite technique</em><br />
              à la mise en service.
            </h2>
            <div className="divider divider--center"></div>
          </div>

          <div className="how-it-works__steps">
            {[
              ["01", "Diagnostic", "Analyse hygrométrique et structurelle de votre serre par nos experts. Relevé du dimensionnement, de l'exposition, des contraintes d'exploitation."],
              ["02", "Étude & devis", "Dimensionnement précis Thaleos THACTA11901, validation de la fiche CEE AGR-TH-119, chiffrage 100 % du financement mobilisable."],
              ["03", "Installation", "Pose par nos installateurs certifiés RGE — sans arrêt d'activité. Branchement en amont et en aval directement sur les alimentations."],
              ["04", "Mise en service", "Paramétrage de l'auto-pilotage (température, hygrométrie, programmation). Formation à la gestion des flux d'air."],
            ].map(([n, t, p]) => (
              <div key={n} className="how-step fade-in">
                <div className="how-step__num">{n}</div>
                <h3 className="how-step__title">{t}</h3>
                <p className="how-step__text">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="cee-mechanism" id="eligibilite">
        <div className="container">
          <div className="cee-mechanism__header fade-in">
            <p className="section-label">Financement</p>
            <h2 className="section-title">
              Fiche <em>AGR-TH-119</em> — financement<br />
              jusqu&apos;à 100 % via les CEE
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Grâce au dispositif des Certificats d&apos;Économies d&apos;Énergie (CEE), votre
              installation de VMC double flux peut être financée intégralement, sous conditions de
              respect de la fiche d&apos;opération standardisée AGR-TH-119.
            </p>
          </div>

          <div className="vmc-elig">
            <div className="vmc-elig__pricecard fade-in">
              <div className="vmc-elig__big">0&nbsp;€</div>
              <p className="vmc-elig__big-label">d&apos;investissement initial possible</p>
              <p className="vmc-elig__big-text">
                Quand le projet est éligible, le dispositif CEE peut couvrir l&apos;intégralité du
                coût d&apos;installation. <strong>Aucun reste à charge</strong> pour
                l&apos;exploitant. Nous prenons en charge l&apos;ensemble du dossier administratif.
              </p>
            </div>

            <div className="vmc-elig__criteres fade-in delay-2">
              <h3 className="vmc-elig__title">Critères d&apos;éligibilité — AGR-TH-119</h3>
              <ul className="vmc-elig__list">
                {[
                  ["Secteur maraîchage", "Activité de production maraîchère sous serre."],
                  ["Débit ≥ 1 vol/h", "Respect des normes de renouvellement d'air pour le volume traité."],
                  ["Auto-pilotage", "Système de gestion automatisé obligatoire (sondes, programmation)."],
                  ["Installation professionnelle", "Pose par une entreprise qualifiée. Visite préalable du chantier."],
                  ["Murs rigides", "Structure de serre compatible — parois rigides exigées par la fiche."],
                ].map(([t, d]) => (
                  <li key={t}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#49a739" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    <div>
                      <span className="vmc-elig__crit-name">{t}</span>
                      <span className="vmc-elig__crit-desc">{d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="cee-notice fade-in">
            <strong>À noter :</strong> le niveau de financement effectif dépend du contexte de
            chaque projet et du cours en vigueur des CEE. Le dossier doit impérativement être déposé{" "}
            <strong>avant le démarrage des travaux</strong>. ECOPRORENOVE vérifie ces points en
            amont, au cours d&apos;une analyse sans engagement.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="faq__header fade-in">
            <p className="section-label">Questions fréquentes</p>
            <h2 className="section-title">
              Ce que les exploitants<br />
              nous demandent <em>le plus.</em>
            </h2>
            <div className="divider divider--center"></div>
          </div>
          <div className="faq__list">
            <Faq
              items={[
                { q: "La VMC double flux Thaleos est-elle adaptée à toutes les serres ?", a: "L'unité THACTA11901 est dimensionnée pour 1 000 m² de serre maraîchère à parois rigides, avec un débit nominal de 4 000 m³/h. Pour les serres plus grandes, il est possible d'installer plusieurs unités en régulation simultanée (jusqu'à 9-18 machines selon le système de pilotage retenu). L'éligibilité finale se vérifie sur visite technique." },
                { q: "Quel impact concret sur la culture ?", a: "Une ventilation double flux maîtrisée permet de stabiliser l'hygrométrie, de réduire la condensation et de prévenir les maladies cryptogamiques. Les retours terrain montrent une amélioration de la qualité visuelle et gustative des cultures, ainsi qu'une plus grande prévisibilité des rendements d'une saison à l'autre. Les gains économiques varient selon l'exploitation, le type de culture et la conduite climatique." },
                { q: "Le chantier perturbe-t-il l'activité de la serre ?", a: "L'installation est conçue pour limiter l'impact : les unités sont posées en amont et en aval des alimentations existantes, sans intervention lourde sur la structure. Nos équipes coordonnent le planning avec votre exploitation pour intervenir en dehors des phases sensibles. La maintenance courante en milieu agricole est facilitée par la conception de l'unité." },
                { q: "Quelle est la durée de vie de l'équipement ?", a: "La durée de vie conventionnelle indiquée par le fabricant est de 17 ans. La structure est entièrement en tôle galvanisée avec émail cuit au four (gris mat), conçue pour résister aux atmosphères humides et poussiéreuses propres aux exploitations agricoles. Les câbles électriques utilisés sont à trois conducteurs, conformes aux exigences de sécurité." },
                { q: "Comment se passe le montage du dossier CEE AGR-TH-119 ?", a: "Nous prenons en charge l'intégralité du dossier : vérification de l'éligibilité, choix de l'obligé, constitution des pièces administratives, respect strict de la chronologie (engagement avant travaux), suivi jusqu'au versement de la prime. Le dossier doit être ouvert avant le début du chantier — nous vérifions ce point dès la première analyse, avant tout engagement de votre part." },
              ]}
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-form-section" id="contact">
        <div className="container">
          <div className="contact-form-section__inner">
            <div className="contact-info fade-in">
              <p className="section-label">Nous contacter</p>
              <h2 className="contact-info__title">Vérifions<br />votre éligibilité</h2>
              <div className="divider"></div>
              <p className="contact-info__text">
                Décrivez-nous votre exploitation — type de serre, surface, configuration. Nous
                revenons vers vous avec un dimensionnement Thaleos préliminaire et une estimation
                du financement CEE AGR-TH-119 mobilisable.
              </p>
              <div className="contact-info__items">
                <div className="contact-info__item">
                  <div className="contact-info__item-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.63-.63a2 2 0 0 1 2.11-.45c.9.386 1.86.647 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <span>+33 6 19 79 83 91</span>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__item-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <span>contact@ecoprorenove.fr</span>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__item-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <span>Réponse sous 48h ouvrées</span>
                </div>
              </div>
            </div>

            <div className="form-card fade-in delay-2">
              <h3 className="form-card__title">Demande d&apos;étude — sans engagement</h3>
              <ContactForm source="vmc-double-flux">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="v-prenom">Prénom *</label>
                    <input className="form-input" type="text" id="v-prenom" name="prenom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="v-nom">Nom *</label>
                    <input className="form-input" type="text" id="v-nom" name="nom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="v-societe">Exploitation</label>
                    <input className="form-input" type="text" id="v-societe" name="societe" placeholder="Nom de votre exploitation" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="v-tel">Téléphone *</label>
                    <input className="form-input" type="tel" id="v-tel" name="telephone" required />
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="v-email">Email *</label>
                    <input className="form-input" type="email" id="v-email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="v-batiment">Type de bâtiment</label>
                    <select className="form-select" id="v-batiment" name="type_batiment" defaultValue="">
                      <option value="" disabled>Sélectionnez</option>
                      <option value="serre-maraichage">Serre maraîchère</option>
                      <option value="serre-horticole">Serre horticole</option>
                      <option value="elevage">Bâtiment d&apos;élevage</option>
                      <option value="stockage">Local de production / stockage</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="v-surface">Surface (m²)</label>
                    <input className="form-input" type="text" id="v-surface" name="surface" placeholder="Ex. 1 500 m²" />
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="v-message">Décrivez votre projet</label>
                    <textarea className="form-textarea" id="v-message" name="message" placeholder="Configuration de la serre (parois, hauteur, ventilation actuelle), type de cultures, contraintes d'exploitation, calendrier souhaité…" rows={4}></textarea>
                  </div>
                  <div className="form-group form-group--full">
                    <div className="form-consent">
                      <input type="checkbox" id="v-rgpd" name="rgpd" required />
                      <label htmlFor="v-rgpd">J&apos;accepte que mes données soient utilisées par ECOPRORENOVE pour l&apos;étude de mon projet. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles.</label>
                    </div>
                  </div>
                  <div className="form-group form-group--full">
                    <button type="submit" className="btn btn--primary btn--lg form-submit">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
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

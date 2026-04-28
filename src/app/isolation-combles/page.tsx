import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import Faq from "@/components/Faq";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ScrollNav from "@/components/ScrollNav";

export const metadata: Metadata = {
  title: "Isolation des combles — CEE BAT-EN-101 / 106",
  description:
    "Soufflage ou déroulé, jusqu'à 30 % d'économies de chauffage. Pose RGE et dossier CEE sécurisé pour bâtiments tertiaires. Étude gratuite.",
  alternates: { canonical: "/isolation-combles" },
  openGraph: {
    url: "/isolation-combles",
    title: "Isolation des combles — ECOPRORENOVE",
    description:
      "Soufflage ou déroulé, jusqu'à 30 % d'économies de chauffage. Pose RGE.",
  },
};

export default function IsolationComblesPage() {
  return (
    <div className="page-service solution-template">
      <ServiceJsonLd
        name="Isolation des combles"
        description="Soufflage ou déroulé, jusqu'à 30 % d'économies de chauffage. Pose RGE, fiches CEE BAT-EN-101 et BAT-EN-106."
        url="/isolation-combles"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Isolation des combles", url: "/isolation-combles" },
        ]}
      />
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__content fade-in">
              <h1 className="hero__title hero__title--t1">
                <span className="hero__title-eyebrow">Bâtiment tertiaire — CEE BAT-EN-101 / 106</span>
                <span className="hero__title-anchor">Isolez les combles</span>
                <span className="hero__title-italic">stoppez les fuites par le haut.</span>
              </h1>

              <p className="hero__stat-line">
                Jusqu&apos;à <strong>−30&thinsp;%</strong> sur la facture de chauffage
              </p>

              <p className="hero__subtitle">
                L&apos;isolation des combles est l&apos;opération la plus rentable pour réduire vos
                consommations de chauffage et de climatisation. En soufflage ou en déroulé selon la
                configuration, ECOPRORENOVE déploie la solution adaptée — et mobilise les CEE pour
                alléger votre reste à charge.
              </p>

              <div className="hero__actions">
                <a href="#contact" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  Obtenir une étude gratuite
                </a>
                <a href="#modes" className="btn btn--secondary">Voir les deux modes</a>
              </div>
            </div>

            <div className="hero__visual fade-in delay-3">
              <div className="hero__img hero__img--placeholder" aria-label="Photo à venir" />
              <div className="hero__bubble hero__bubble--temp">
                <strong>30 %</strong>
                <small>déperditions<br />par la toiture</small>
              </div>
              <div className="hero__bubble hero__bubble--life">
                <strong>R ≥ 7</strong>
                <small>m²·K/W<br />BAT-EN-101</small>
              </div>
              <div className="hero__bubble hero__bubble--cee">
                <strong>CEE</strong>
                <small>BAT-EN 101 · 106</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollNav
        sections={[
          { id: "probleme", label: "Le problème" },
          { id: "modes", label: "Techniques" },
          { id: "benefices", label: "Bénéfices" },
          { id: "batiments", label: "Bâtiments" },
          { id: "cee", label: "CEE" },
          { id: "methode", label: "Méthode" },
          { id: "faq", label: "FAQ" },
          { id: "contact", label: "Contact" },
        ]}
      />

      {/* HERO BANDEAU — proof points */}
      <div className="hero-bandeau">
        <div className="container">
          <div className="hero-bandeau__inner">
            {[
              "R ≥ 7 m²·K/W — BAT-EN-101",
              "Chantier rapide, sans interruption d'activité",
              "Pose RGE certifiée",
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
      <section className="problem" id="probleme">
        <div className="container">
          <div className="problem__inner">
            <div className="loss-schema fade-in">
              <p className="loss-schema__title">Répartition des déperditions thermiques</p>
              <div className="loss-building">
                <div className="loss-roof">
                  <span className="loss-roof__label">Toiture / combles</span>
                  <span className="loss-roof__pct">25 – 30 %</span>
                </div>
                <div className="loss-arrows">
                  <span className="loss-arrow">↑</span>
                  <span className="loss-arrow">↑</span>
                  <span className="loss-arrow">↑</span>
                  <span className="loss-arrow">↑</span>
                </div>
                <div className="loss-interior">
                  <div className="loss-interior__text">
                    Bâtiment non isolé
                    <small>L&apos;air chaud s&apos;échappe par le haut</small>
                  </div>
                </div>
              </div>
              <div className="loss-others">
                <div className="loss-others__item">
                  <div className="loss-others__pct">20 – 25 %</div>
                  <div className="loss-others__name">Murs</div>
                </div>
                <div className="loss-others__item">
                  <div className="loss-others__pct">10 – 15 %</div>
                  <div className="loss-others__name">Vitrages</div>
                </div>
                <div className="loss-others__item">
                  <div className="loss-others__pct">7 – 10 %</div>
                  <div className="loss-others__name">Planchers</div>
                </div>
              </div>
              <p className="loss-schema__caption">Sources : ADEME — ordres de grandeur pour un bâtiment non isolé</p>
            </div>

            <div className="problem__content fade-in delay-2">
              <p className="section-label">Le poste de perte n°1</p>
              <h2 className="section-title">
                La toiture&nbsp;:<br />
                <em>le premier poste<br />
                de déperdition thermique.</em>
              </h2>
              <div className="divider"></div>
              <p className="section-intro">
                L&apos;air chaud monte. Dans un bâtiment tertiaire non isolé — ou mal isolé — la chaleur
                produite pour le confort des occupants s&apos;échappe massivement par le plafond et la
                toiture. Isoler les combles, c&apos;est traiter la première cause de surconsommation.
              </p>

              <div className="problem__list">
                <div className="problem-item">
                  <div className="problem-item__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <div>
                    <p className="problem-item__title">Une facture énergétique qui grimpe chaque hiver</p>
                    <p className="problem-item__desc">Le chauffage tourne plus longtemps, plus fort, pour compenser les pertes par le haut. Les économies possibles sont pourtant considérables dès la première saison suivant les travaux.</p>
                  </div>
                </div>

                <div className="problem-item">
                  <div className="problem-item__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17.66 8L12 2.35 6.34 8A8 8 0 1 0 17.66 8z"/></svg>
                  </div>
                  <div>
                    <p className="problem-item__title">Un confort d&apos;été dégradé sous les toits</p>
                    <p className="problem-item__desc">Sans isolation performante, les combles accumulent la chaleur en été et la restituent vers les locaux. Températures en hausse, inconfort croissant, sollicitation accrue de la climatisation.</p>
                  </div>
                </div>

                <div className="problem-item">
                  <div className="problem-item__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  </div>
                  <div>
                    <p className="problem-item__title">Des obligations réglementaires qui se durcissent</p>
                    <p className="problem-item__desc">Décret tertiaire, DPE, obligations de réduction de consommation : les bâtiments tertiaires doivent baisser leur consommation énergétique. L&apos;isolation des combles est un levier prioritaire, fiable et mesurable.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODES */}
      <section className="modes" id="modes">
        <div className="container">
          <div className="modes__header fade-in">
            <p className="section-label">Deux techniques selon votre bâtiment</p>
            <h2 className="section-title">
              Soufflage ou déroulé&nbsp;:<br />
              la <em>bonne technique</em> au bon endroit
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Chaque configuration de combles appelle une technique d&apos;isolation différente.
              ECOPRORENOVE vous oriente vers la méthode la plus efficace, la plus adaptée à la
              géométrie de votre toiture et aux contraintes de votre activité.
            </p>
          </div>

          <div className="modes__grid">
            <div className="mode-card fade-in">
              <div className="mode-card__header">
                <div className="mode-card__icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 2v3M12 19v3M22 12h-3M5 12H2M19.07 4.93l-2.12 2.12M7.05 16.95l-2.12 2.12M19.07 19.07l-2.12-2.12M7.05 7.05L4.93 4.93"/>
                  </svg>
                </div>
                <div>
                  <span className="mode-card__tag">Mode 1</span>
                  <h3 className="mode-card__title">Isolation par soufflage</h3>
                </div>
              </div>
              <p className="mode-card__lead">
                De la laine minérale (verre ou roche) ou végétale est projetée mécaniquement en vrac
                sur le plancher des combles perdus, formant une couche homogène, continue et sans
                pont thermique.
              </p>

              <div className="mode-card__features">
                {[
                  ["Pose rapide", "Une journée type suffit pour plusieurs centaines de m²."],
                  ["Couverture parfaite", "Pénètre les recoins, les irrégularités, les obstacles — aucune zone laissée à découvert."],
                  ["Zéro pont thermique", "Le flocon se répartit en tapis continu, sans joints ni raccords."],
                ].map(([title, desc]) => (
                  <div key={title} className="mode-feat">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#49a739" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    <div><strong>{title}</strong><span>{desc}</span></div>
                  </div>
                ))}
              </div>

              <div className="mode-card__when">
                <p className="mode-card__when-label">Recommandé pour</p>
                <p className="mode-card__when-text">Combles perdus non aménageables, difficiles d&apos;accès, encombrés de réseaux (gaines, conduits). Bâtiments à grande surface de plancher haut.</p>
              </div>
            </div>

            <div className="mode-card mode-card--roll fade-in delay-2">
              <div className="mode-card__header">
                <div className="mode-card__icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="7" width="20" height="10" rx="2"/>
                    <line x1="6" y1="7" x2="6" y2="17"/>
                    <line x1="10" y1="7" x2="10" y2="17"/>
                    <line x1="14" y1="7" x2="14" y2="17"/>
                    <line x1="18" y1="7" x2="18" y2="17"/>
                  </svg>
                </div>
                <div>
                  <span className="mode-card__tag">Mode 2</span>
                  <h3 className="mode-card__title">Isolation en déroulé</h3>
                </div>
              </div>
              <p className="mode-card__lead">
                Des rouleaux ou panneaux d&apos;isolant semi-rigide (laine minérale, biosourcé) sont
                déroulés manuellement au sol des combles, en une ou deux couches croisées pour
                éliminer les ponts thermiques.
              </p>

              <div className="mode-card__features">
                {[
                  ["Pose maîtrisée", "Épaisseur parfaitement contrôlée, visuellement vérifiable."],
                  ["Zone circulable", "Permet de laisser un accès pour circulation ou stockage avec platelage complémentaire."],
                  ["Compatible biosourcé", "Large choix de matériaux, y compris écologiques (ouate, chanvre, fibre de bois)."],
                ].map(([title, desc]) => (
                  <div key={title} className="mode-feat">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    <div><strong>{title}</strong><span>{desc}</span></div>
                  </div>
                ))}
              </div>

              <div className="mode-card__when">
                <p className="mode-card__when-label">Recommandé pour</p>
                <p className="mode-card__when-text">Combles accessibles, surfaces planes et dégagées, souhait de conserver un accès technique ou un espace de circulation au-dessus de l&apos;isolant.</p>
              </div>
            </div>
          </div>

          <div className="modes__compare fade-in">
            <h3 className="modes__compare-title">Comparatif synthétique des deux techniques</h3>
            <table className="compare-table">
              <thead>
                <tr><th>Critère</th><th>Soufflage</th><th>Déroulé</th></tr>
              </thead>
              <tbody>
                {[
                  ["Accessibilité des combles", "Difficile d'accès, encombré", "Accessible, plan, dégagé"],
                  ["Rapidité de pose", "Très rapide (mécanisé)", "Rapide (manuel)"],
                  ["Maîtrise visuelle de l'épaisseur", "Contrôlée par piges graduées", "Contrôle direct sur chaque lé"],
                  ["Traitement des irrégularités", "Excellent — couvre tout", "Bon — découpes manuelles"],
                  ["Circulation / stockage au-dessus", "Non recommandé", "Possible avec platelage"],
                  ["Choix des matériaux", "Laine minérale, ouate vrac", "Rouleaux et panneaux (large gamme)"],
                  ["Fiche CEE applicable", "BAT-EN-101 ou BAT-EN-106", "BAT-EN-101 ou BAT-EN-106"],
                ].map(([k, v1, v2]) => (
                  <tr key={k}><td>{k}</td><td>{v1}</td><td>{v2}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works" id="fonctionnement">
        <div className="container">
          <div className="how-it-works__header fade-in">
            <p className="section-label">Déroulement d&apos;un chantier</p>
            <h2 className="section-title">
              Comment se déroule<br />
              un <em>chantier d&apos;isolation des combles</em>&nbsp;?
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Que ce soit en soufflage ou en déroulé, la mise en œuvre suit une méthodologie rigoureuse — conforme au DTU et aux exigences des fiches CEE — pour garantir la performance dans le temps.
            </p>
          </div>

          <div className="how-steps fade-in">
            {[
              ["01", "Préparation du support", "Vérification du plancher haut, repérage des points singuliers (trappes, spots, conduits), pose éventuelle d'un écran pare-vapeur si nécessaire."],
              ["02", "Protection des éléments sensibles", "Coffrages autour des conduits de fumée, capots sur les spots encastrés, rehausse de la trappe d'accès, protection des appareillages électriques."],
              ["03", "Pose de l'isolant", "Soufflage mécanisé à épaisseur contrôlée par piges graduées, ou déroulé en une / deux couches croisées selon l'épaisseur totale requise pour atteindre la résistance thermique visée."],
              ["04", "Contrôle & réception", "Vérification de l'épaisseur, de l'homogénéité et de la continuité de l'isolation. Repère visuel de l'épaisseur posée, photos de chantier, remise du PV de fin de travaux pour le dossier CEE."],
            ].map(([n, t, p]) => (
              <div key={n} className="how-step">
                <div className="how-step__num">{n}</div>
                <h3 className="how-step__title">{t}</h3>
                <p className="how-step__text">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="benefits" id="benefices">
        <div className="container">
          <div className="benefits__header fade-in">
            <p className="section-label">Résultats concrets</p>
            <h2 className="section-title">
              Les bénéfices d&apos;une<br />
              isolation <em>bien posée</em>
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Une isolation des combles conforme aux exigences CEE produit des effets mesurables dès la première saison — sur la facture, sur le confort, sur la valeur du bâtiment.
            </p>
          </div>

          <div className="benefits__grid">
            {[
              { value: "–20 à 30 %", title: "Réduction de la facture de chauffage", text: "En supprimant la principale voie de déperdition du bâtiment, l'isolation des combles produit l'un des meilleurs rapports performance/investissement du marché.", disc: "* Estimation variable selon l'état initial, la zone climatique et le niveau d'isolation posé." },
              { value: "R ≥ 7", title: "Performance thermique CEE", text: "Les fiches BAT-EN-101 et BAT-EN-106 imposent une résistance thermique minimale — gage d'une isolation réellement performante, durable, et conforme aux standards nationaux.", disc: "* Résistance thermique minimale exigée selon la fiche applicable à votre projet." },
              { value: "+ confort", title: "Été comme hiver", text: "L'isolation limite les surchauffes sous toiture en été et maintient la chaleur en hiver. Un confort homogène, plus stable, pour l'ensemble des occupants du bâtiment." },
              { value: "1 à 3 ans", title: "Retour sur investissement rapide", text: "Combinée à la prime CEE, l'opération présente un retour sur investissement généralement rapide — parmi les meilleurs de tous les travaux d'efficacité énergétique.", disc: "* Délai indicatif variable selon la surface, le mode de chauffage et le niveau de prime CEE obtenu." },
              { value: "Décret tertiaire", title: "Mise en conformité", text: "Les travaux d'isolation des combles contribuent directement aux objectifs de baisse de consommation du décret tertiaire (−40 % en 2030, −50 % en 2040, −60 % en 2050)." },
              { value: "DPE ↑", title: "Valorisation du bâtiment", text: "Un diagnostic de performance énergétique amélioré valorise l'actif immobilier — atout lors d'une vente, d'une location ou d'une renégociation de bail." },
            ].map((b, i) => (
              <div key={b.title} className={`benefit-card fade-in delay-${(i % 3) + 1}`}>
                <div className="benefit-card__icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="12" y1="20" x2="12" y2="10"/>
                    <line x1="18" y1="20" x2="18" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="16"/>
                  </svg>
                </div>
                <div className="benefit-card__value">{b.value}</div>
                <h3 className="benefit-card__title">{b.title}</h3>
                <p className="benefit-card__text">{b.text}</p>
                {b.disc && <p className="benefit-card__disclaimer">{b.disc}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILDINGS */}
      <section className="buildings" id="batiments">
        <div className="container">
          <div className="buildings__header fade-in">
            <p className="section-label">Applications tertiaires</p>
            <h2 className="section-title">
              Quels bâtiments sont<br />
              <em>concernés</em>&nbsp;?
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Les fiches CEE BAT-EN-101 et BAT-EN-106 couvrent l&apos;ensemble des bâtiments tertiaires — publics ou privés — dotés de combles ou de plafonds à isoler.
            </p>
          </div>

          <div className="buildings__grid">
            {[
              ["Bureaux & tertiaires", "Immeubles de bureaux, sièges sociaux, espaces de coworking, centres d'affaires."],
              ["Commerces & boutiques", "Supermarchés, boutiques, galeries marchandes, showrooms et enseignes commerciales."],
              ["Enseignement", "Écoles, collèges, lycées, universités, centres de formation publics ou privés."],
              ["Santé & médico-social", "Cliniques, cabinets médicaux, EHPAD, maisons de santé, établissements hospitaliers."],
              ["Hôtellerie & restauration", "Hôtels, résidences de tourisme, restaurants, salles de réception et traiteurs."],
              ["Entrepôts & logistique", "Plateformes de stockage, locaux logistiques, bâtiments industriels chauffés."],
              ["Collectivités publiques", "Mairies, crèches, médiathèques, équipements culturels et administratifs."],
              ["Équipements sportifs", "Gymnases, salles polyvalentes, clubs de sport, équipements municipaux."],
            ].map(([name, desc], i) => (
              <div key={name} className={`building-card fade-in delay-${(i % 4) + 1}`}>
                <div className="building-card__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <line x1="3" y1="9" x2="21" y2="9"/>
                    <line x1="9" y1="21" x2="9" y2="9"/>
                  </svg>
                </div>
                <h3 className="building-card__name">{name}</h3>
                <p className="building-card__desc">{desc}</p>
              </div>
            ))}
          </div>

          <div className="buildings__notice fade-in">
            <strong>À noter :</strong> les fiches BAT-EN-101 et BAT-EN-106 s&apos;appliquent aux bâtiments tertiaires existants (≥ 2 ans). L&apos;éligibilité précise dépend du type de comble, de la résistance thermique visée, de la conformité technique de la pose et du respect de la chronologie administrative. ECOPRORENOVE vérifie chaque point avant d&apos;engager les travaux.
          </div>
        </div>
      </section>

      {/* CEE BLOCK */}
      <section className="cee-block" id="cee">
        <div className="container">
          <div className="cee-block__inner">
            <div className="cee-block__content fade-in">
              <p className="section-label" style={{ color: "rgba(255,255,255,.55)" }}>Financement CEE</p>
              <h2 className="section-title section-title--white">
                Vos combles isolés,<br />
                <em style={{ color: "#a8e296" }}>en partie financés</em><br />
                par les CEE
              </h2>
              <div className="divider divider--white"></div>
              <p className="section-intro section-intro--white" style={{ marginBottom: 32 }}>
                L&apos;isolation des combles est l&apos;une des opérations les plus activement valorisées dans le dispositif des Certificats d&apos;Économies d&apos;Énergie. Deux fiches standardisées couvrent les cas les plus fréquents dans le bâtiment tertiaire :{" "}
                <strong style={{ color: "#fff" }}>BAT-EN-101</strong> et <strong style={{ color: "#fff" }}>BAT-EN-106</strong>.
              </p>
              <div className="cee-block__cta-wrap">
                <a href="#contact" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  Vérifier mon éligibilité
                </a>
              </div>
            </div>

            <div className="fiche-cards fade-in delay-2">
              <div className="fiche-card">
                <div className="fiche-card__head">
                  <span className="fiche-card__badge">BAT-EN-101</span>
                  <span className="fiche-card__type">Fiche CEE · Tertiaire</span>
                </div>
                <p className="fiche-card__title">Isolation de combles ou de toitures</p>
                <p className="fiche-card__text">Opération standardisée couvrant la mise en place d&apos;un isolant thermique sur plancher de combles perdus ou en rampants de toiture, pour les bâtiments tertiaires existants.</p>
                <div className="fiche-card__meta">
                  <div className="fiche-card__meta-item"><strong>R minimale</strong>R ≥ 7 m²·K/W</div>
                  <div className="fiche-card__meta-item"><strong>Modes</strong>Soufflage · Déroulé</div>
                  <div className="fiche-card__meta-item"><strong>Certification</strong>Pose RGE obligatoire</div>
                </div>
              </div>

              <div className="fiche-card">
                <div className="fiche-card__head">
                  <span className="fiche-card__badge">BAT-EN-106</span>
                  <span className="fiche-card__type">Fiche CEE · Tertiaire</span>
                </div>
                <p className="fiche-card__title">Isolation des toitures-terrasses &amp; plafonds</p>
                <p className="fiche-card__text">Opération standardisée pour l&apos;isolation thermique de toitures-terrasses ou de plafonds hauts dans les bâtiments tertiaires existants, selon la configuration architecturale.</p>
                <div className="fiche-card__meta">
                  <div className="fiche-card__meta-item"><strong>R minimale</strong>Selon fiche en vigueur</div>
                  <div className="fiche-card__meta-item"><strong>Surface</strong>Plafond haut / toit-terrasse</div>
                  <div className="fiche-card__meta-item"><strong>Certification</strong>Pose RGE obligatoire</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="method" id="methode">
        <div className="container">
          <div className="method__header fade-in">
            <p className="section-label">Notre méthode</p>
            <h2 className="section-title">
              Comment ECOPRORENOVE<br />
              <em>pilote votre projet</em>
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              De la première visite à la clôture du dossier CEE, nous structurons chaque étape pour que votre projet soit bien cadré, bien posé, bien financé.
            </p>
          </div>

          <div className="method__steps">
            {[
              ["01", "Visite technique & diagnostic", "Relevé des combles, état de l'existant, identification des points singuliers et de la technique la plus adaptée (soufflage ou déroulé)."],
              ["02", "Étude thermique & dimensionnement", "Calcul de la résistance thermique cible, choix du matériau, détermination de l'épaisseur nécessaire pour satisfaire aux exigences de la fiche CEE applicable."],
              ["03", "Proposition chiffrée & éligibilité CEE", "Devis détaillé, estimation de la prime CEE, identification de la fiche applicable (BAT-EN-101 ou 106) et calendrier prévisionnel du chantier."],
              ["04", "Montage du dossier administratif", "Engagement du dossier CEE avant travaux, constitution des pièces techniques, respect strict de la chronologie imposée par le dispositif."],
              ["05", "Réalisation du chantier", "Intervention par nos équipes certifiées RGE, dans le respect du DTU et des règles de l'art. Protection des occupants, minimisation des nuisances, chantier propre."],
              ["06", "Réception & clôture CEE", "PV de réception, attestation de fin de travaux, photos et relevé d'épaisseur pour le dossier CEE. Suivi jusqu'au versement effectif de la prime."],
            ].map(([n, t, p], i) => (
              <div key={n} className={`method__step fade-in delay-${(i % 3) + 1}`}>
                <div className="method__step-num">{n}</div>
                <h3 className="method__step-title">{t}</h3>
                <p className="method__step-text">{p}</p>
              </div>
            ))}
          </div>

          <div className="method__cta-wrap fade-in">
            <a href="#contact" className="btn btn--primary btn--lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              Lancer l&apos;étude de mon projet
            </a>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-us">
        <div className="container">
          <div className="why-us__header fade-in">
            <p className="section-label">Nos engagements</p>
            <h2 className="section-title">
              Pourquoi confier votre projet<br />
              à <em>ECOPRORENOVE</em>&nbsp;?
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Un bon projet d&apos;isolation, c&apos;est un bon diagnostic, un bon matériau, une bonne pose — et un dossier CEE bien ficelé. Nous pilotons les quatre volets.
            </p>
          </div>

          <div className="why-us__grid">
            {[
              ["Interlocuteur unique", "Un seul point de contact pour toutes les dimensions du projet : technique, administrative, financière. Simplicité et cohérence du début à la fin."],
              ["Qualification RGE", "Nos équipes de pose sont qualifiées RGE — une exigence obligatoire pour ouvrir droit au financement CEE sur ce type d'opération."],
              ["Dossier CEE sécurisé", "Nous maîtrisons les règles du dispositif. Engagement avant travaux, pièces conformes, chronologie respectée — pour que la prime soit bien versée."],
              ["Approche honnête", "Nous ne promettons que ce que nous pouvons tenir. Pas d'éligibilité survendue, pas de surface gonflée, pas de mauvaise surprise au versement de la prime."],
            ].map(([t, p], i) => (
              <div key={t} className={`why-us-card fade-in delay-${i + 1}`}>
                <div className="why-us-card__icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                </div>
                <h3 className="why-us-card__title">{t}</h3>
                <p className="why-us-card__text">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE BANNER */}
      <section className="value-banner">
        <div className="container">
          <div className="value-banner__inner fade-in">
            <p className="value-banner__eyebrow">L&apos;essentiel à retenir</p>
            <h2 className="value-banner__title">
              Isoler les combles, c&apos;est traiter la première cause de surconsommation.<br />
              Le reste, c&apos;est de la méthode.
            </h2>
            <p className="value-banner__subtitle">
              Bon diagnostic, bonne technique (soufflage ou déroulé), bonne résistance thermique, bon dossier CEE. ECOPRORENOVE assemble les quatre — sur chaque projet, pour chaque bâtiment.
            </p>
            <a href="#contact" className="btn btn--secondary" style={{ borderColor: "rgba(255,255,255,.6)", color: "#fff", fontSize: "1rem", padding: "16px 34px" }}>
              Discutons de votre bâtiment
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="faq__header fade-in">
            <p className="section-label">Questions fréquentes</p>
            <h2 className="section-title">
              Tout ce que vous devez<br />
              savoir sur l&apos;<em>isolation des combles</em>
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Des réponses claires, techniques et directement utiles pour avancer sur votre projet.
            </p>
          </div>
          <div className="faq__list">
            <Faq
              items={[
                { q: "Quelle est la différence entre l'isolation en soufflage et en déroulé ?", a: "Le soufflage consiste à projeter mécaniquement un isolant en vrac (flocons de laine minérale ou ouate de cellulose) sur le plancher des combles. Il est idéal pour les combles perdus difficiles d'accès ou encombrés. Le déroulé consiste à poser manuellement des rouleaux ou panneaux d'isolant semi-rigide, en général en une ou deux couches croisées. Il est adapté aux combles plans, accessibles, où l'on souhaite conserver une zone de circulation ou de stockage. Les deux techniques atteignent les mêmes niveaux de performance thermique, mais le choix dépend de la configuration réelle du bâtiment." },
                { q: "Quelle est la résistance thermique minimale exigée pour être éligible aux CEE ?", a: "Pour l'isolation de combles ou de rampants de toiture dans le tertiaire (fiche BAT-EN-101), la résistance thermique R de l'isolant mis en œuvre doit être supérieure ou égale à 7 m²·K/W. Pour les toitures-terrasses (fiche BAT-EN-106), le seuil peut être différent selon la configuration. Nous vérifions systématiquement le seuil applicable à votre projet lors de l'étude préalable — et l'épaisseur d'isolant à poser est calculée en conséquence." },
                { q: "Mon bâtiment tertiaire est-il éligible aux fiches BAT-EN-101 et BAT-EN-106 ?", a: "Les deux fiches concernent les bâtiments du secteur tertiaire — publics ou privés — existants depuis au moins 2 ans. Cela couvre une très large majorité de bureaux, commerces, établissements d'enseignement, hôtels, établissements de santé, bâtiments de la collectivité, locaux associatifs ou équipements sportifs. BAT-EN-101 vise les combles et rampants, BAT-EN-106 couvre les toitures-terrasses et plafonds hauts. ECOPRORENOVE identifie la fiche applicable à votre situation lors de la visite technique." },
                { q: "Le chantier perturbe-t-il l'activité du bâtiment ?", a: "Dans la grande majorité des cas, non. Les interventions se font dans les combles — zone non occupée — et n'impliquent pas d'arrêt de l'activité en dessous. Le soufflage est rapide (quelques heures à une journée pour plusieurs centaines de m²). Le déroulé est également peu intrusif. Nous adaptons systématiquement le planning à vos contraintes (intervention de nuit, week-end, vacances scolaires pour les écoles, etc.)." },
                { q: "Quels matériaux isolants sont utilisés ?", a: "Pour le soufflage, nous utilisons principalement la laine de verre, la laine de roche ou la ouate de cellulose en vrac. Pour le déroulé, la laine minérale en rouleaux ou panneaux est la plus courante, mais les isolants biosourcés (fibre de bois, chanvre, coton recyclé, etc.) sont également possibles. Tous les matériaux que nous utilisons sont certifiés ACERMI, répondent aux exigences des fiches CEE et disposent d'une documentation technique conforme à la réglementation en vigueur." },
                { q: "Quel est le montant de la prime CEE pour mon projet ?", a: "La prime CEE est proportionnelle à la surface isolée, à la zone climatique du bâtiment et au type d'usage (chauffé, chauffé + climatisé). Le montant varie également selon les obligés et les bonifications en vigueur à la date d'engagement du dossier. Nous vous communiquons une estimation précise dès la remise du devis, avant tout engagement. Pour connaître le montant applicable à votre projet, la solution la plus rapide est de demander une étude gratuite via le formulaire en bas de page." },
                { q: "Faut-il engager le dossier CEE avant le début des travaux ?", a: (<>Oui — et c&apos;est un point critique. Le dispositif CEE impose impérativement que le dossier soit engagé <strong>avant</strong> le début des travaux, avec une signature de devis postérieure à la date d&apos;engagement auprès de l&apos;obligé. Un chantier démarré avant cette étape devient inéligible, sans possibilité de rattrapage. C&apos;est précisément pour éviter ce type d&apos;erreur que nous pilotons chaque dossier en chronologie stricte.</>) },
                { q: "Combien de temps dure un chantier d'isolation des combles ?", a: "Cela dépend de la surface et de la configuration. À titre indicatif : pour un soufflage, plusieurs centaines de mètres carrés sont traités en une journée. Pour un déroulé, le rythme est légèrement inférieur mais reste très productif. Sur des bâtiments de grande surface, le chantier peut s'étendre sur plusieurs jours, avec des phases de préparation, de pose et de réception. Le planning est toujours calé sur vos contraintes d'activité." },
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <div className="container">
          <div className="cta-final__inner fade-in">
            <p style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.45)", marginBottom: 16 }}>Passez à l&apos;action</p>
            <h2 className="cta-final__title">
              Votre bâtiment perd<br />
              de la chaleur <em>en ce moment même.</em>
            </h2>
            <p className="cta-final__subtitle">
              Parlons de votre projet. Nous évaluons la configuration de vos combles, la technique adaptée, le potentiel d&apos;économies et la prime CEE mobilisable — sans engagement.
            </p>
            <div className="cta-final__actions">
              <a href="#contact" className="btn btn--primary btn--lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                Demander une étude gratuite
              </a>
              <a href="tel:+33619798391" className="btn btn--secondary btn--lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.63-.63a2 2 0 0 1 2.11-.45c.9.386 1.86.647 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Nous appeler
              </a>
            </div>
            <div className="cta-final__reassurance">
              {["Étude sans engagement", "Éligibilité CEE vérifiée", "Réponse sous 48h ouvrées"].map((t) => (
                <div key={t} className="cta-final__reassurance-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <ContactSection />
    </div>
  );
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-section__inner">
          <div className="contact-info fade-in">
            <p className="section-label">Nous contacter</p>
            <h2 className="contact-info__title">Parlons de<br />vos combles</h2>
            <div className="divider"></div>
            <p className="contact-info__text">
              Que vous ayez un projet précis ou que vous souhaitiez simplement savoir si votre bâtiment est concerné par les fiches BAT-EN-101 ou BAT-EN-106, nous sommes disponibles pour répondre à vos questions et vous donner une première orientation claire.
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
            <ContactForm source="isolation-combles">
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="prenom">Prénom *</label>
                  <input className="form-input" type="text" id="prenom" name="prenom" placeholder="Votre prénom" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="nom">Nom *</label>
                  <input className="form-input" type="text" id="nom" name="nom" placeholder="Votre nom" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="societe">Société</label>
                  <input className="form-input" type="text" id="societe" name="societe" placeholder="Nom de votre société" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="telephone">Téléphone *</label>
                  <input className="form-input" type="tel" id="telephone" name="telephone" placeholder="06 XX XX XX XX" required />
                </div>
                <div className="form-group form-group--full">
                  <label className="form-label" htmlFor="email">Email *</label>
                  <input className="form-input" type="email" id="email" name="email" placeholder="votre@email.fr" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="type-batiment">Type de bâtiment</label>
                  <select className="form-select" id="type-batiment" name="type_batiment" defaultValue="">
                    <option value="" disabled>Sélectionnez</option>
                    <option value="bureaux">Bureaux / tertiaire</option>
                    <option value="commerce">Commerce / boutique</option>
                    <option value="enseignement">Enseignement</option>
                    <option value="sante">Santé / médico-social</option>
                    <option value="hotellerie">Hôtellerie / restauration</option>
                    <option value="entrepot">Entrepôt / logistique</option>
                    <option value="collectivite">Collectivité publique</option>
                    <option value="sport">Équipement sportif</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="type-combles">Type de combles</label>
                  <select className="form-select" id="type-combles" name="type_combles" defaultValue="">
                    <option value="" disabled>Sélectionnez</option>
                    <option value="perdus">Combles perdus</option>
                    <option value="amenages">Combles aménagés / rampants</option>
                    <option value="terrasse">Toiture-terrasse</option>
                    <option value="plafond-haut">Plafond haut</option>
                    <option value="nsp">Je ne sais pas</option>
                  </select>
                </div>
                <div className="form-group form-group--full">
                  <label className="form-label" htmlFor="surface">Surface approximative (m²)</label>
                  <input className="form-input" type="text" id="surface" name="surface" placeholder="Ex. 1 200 m²" />
                </div>
                <div className="form-group form-group--full">
                  <label className="form-label" htmlFor="message">Décrivez votre projet ou votre besoin</label>
                  <textarea className="form-textarea" id="message" name="message" placeholder="État actuel de l'isolation, accessibilité des combles, mode de chauffage, contraintes d'activité, questions spécifiques..."></textarea>
                </div>
                <div className="form-group form-group--full">
                  <div className="form-consent">
                    <input type="checkbox" id="rgpd" name="rgpd" required />
                    <label htmlFor="rgpd">J&apos;accepte que mes données soient utilisées par ECOPRORENOVE pour l&apos;étude de mon projet. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles.</label>
                  </div>
                </div>
                <div className="form-group form-group--full">
                  <button type="submit" className="btn btn--primary btn--lg form-submit">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    Envoyer ma demande d&apos;étude
                  </button>
                </div>
              </div>
            </ContactForm>
          </div>
        </div>
      </div>
    </section>
  );
}


import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";
import Faq from "@/components/Faq";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ScrollNav from "@/components/ScrollNav";
import RelatedSolutions from "@/components/RelatedSolutions";

export const metadata: Metadata = {
  title: "Isolation des combles — Tertiaire & résidentiel",
  description:
    "Soufflage, déroulé ou pose traditionnelle. Combles perdus, rampants ou plafonds hauts. Aides CEE et MaPrimeRénov' selon le projet.",
  alternates: { canonical: "/isolation-combles" },
  openGraph: {
    url: "/isolation-combles",
    title: "Isolation des combles — ECOPRORENOVE",
    description:
      "Soufflage, déroulé ou pose traditionnelle. Aides CEE et MaPrimeRénov' selon le projet.",
  },
};

export default function IsolationComblesPage() {
  return (
    <div className="page-service solution-template">
      <ServiceJsonLd
        name="Isolation des combles"
        description="Soufflage, déroulé ou pose traditionnelle. Tertiaire et résidentiel : fiches CEE BAT-EN-101 / BAT-EN-106 ou BAR-EN-101 / BAR-EN-106."
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
                <span className="hero__title-eyebrow">Bâtiment tertiaire et résidentiel</span>
                <span className="hero__title-anchor">Isolez les combles</span>
                <span className="hero__title-italic">stoppez les fuites par le haut.</span>
              </h1>

              <p className="hero__stat-line">
                Jusqu&apos;à <strong>−30&thinsp;%</strong> sur la facture de chauffage
              </p>

              <p className="hero__subtitle">
                Combles perdus, rampants, plafonds hauts ou zones sous toiture&nbsp;: ECOPRORENOVE
                étudie la solution d&apos;isolation la plus adaptée à votre bâtiment, en soufflage,
                déroulé ou pose traditionnelle, avec mobilisation des aides CEE selon le secteur,
                le territoire et la configuration du projet.
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
              <Image
                src="/images/isolation-combles.webp"
                alt="Pose d'un isolant en laine minérale en rouleau dans des combles perdus"
                width={1400}
                height={906}
                className="hero__img"
                priority
              />
              <div className="hero__bubble hero__bubble--temp">
                <strong>30 %</strong>
                <small>déperditions<br />par la toiture</small>
              </div>
              <div className="hero__bubble hero__bubble--life">
                <strong>R ≥ 7</strong>
                <small>m²·K/W<br />BAT-EN-101</small>
              </div>
              <div className="hero__bubble hero__bubble--cee">
                <strong>100&thinsp;%</strong>
                <small>Financé<br />CEE</small>
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
              "Aides CEE & MaPrimeRénov'",
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
                En Métropole, une toiture mal isolée laisse s&apos;échapper une part importante de la
                chaleur en hiver. En Outre-mer, elle devient surtout une source majeure d&apos;apports
                thermiques sous l&apos;effet du soleil. Dans les deux cas, isoler les combles, les
                rampants ou les plafonds hauts permet d&apos;améliorer le confort intérieur, de réduire
                les besoins en chauffage ou en climatisation, et de limiter les consommations
                énergétiques du bâtiment.
              </p>

              <div className="problem__list">
                <div className="problem-item">
                  <div className="problem-item__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <div>
                    <p className="problem-item__title">Une facture énergétique mieux maîtrisée</p>
                    <p className="problem-item__desc">En hiver, l&apos;isolation limite les pertes de chaleur par le haut. En climat chaud, elle réduit les apports thermiques venant de la toiture. Résultat : le chauffage ou la climatisation sont moins sollicités.</p>
                  </div>
                </div>

                <div className="problem-item">
                  <div className="problem-item__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17.66 8L12 2.35 6.34 8A8 8 0 1 0 17.66 8z"/></svg>
                  </div>
                  <div>
                    <p className="problem-item__title">Un meilleur confort toute l&apos;année</p>
                    <p className="problem-item__desc">Des combles ou rampants bien isolés permettent de limiter les sensations de froid en hiver, les surchauffes en été et les variations de température dans les pièces situées sous toiture.</p>
                  </div>
                </div>

                <div className="problem-item">
                  <div className="problem-item__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  </div>
                  <div>
                    <p className="problem-item__title">Un levier adapté aux aides CEE</p>
                    <p className="problem-item__desc">Selon le bâtiment, le territoire et la nature des travaux, l&apos;isolation des combles peut relever des fiches CEE adaptées : BAT-EN-101 ou BAT-EN-106 pour le tertiaire, BAR-EN-101 ou BAR-EN-106 pour le résidentiel.</p>
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
              Chaque bâtiment a sa propre configuration : combles perdus, rampants, plancher haut,
              accès technique ou zones partiellement circulables. ECOPRORENOVE identifie la méthode
              la plus adaptée pour garantir une isolation efficace, continue et compatible avec vos
              contraintes d&apos;usage.
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
                  ["Pose rapide", "Une mise en œuvre efficace, particulièrement adaptée aux grandes surfaces de combles perdus."],
                  ["Couverture homogène", "L'isolant se répartit dans les zones difficiles d'accès et limite les discontinuités."],
                  ["Limitation des ponts thermiques", "La pose en vrac permet de former une couche continue, sous réserve d'une mise en œuvre soignée."],
                ].map(([title, desc]) => (
                  <div key={title} className="mode-feat">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#49a739" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    <div><strong>{title}</strong><span>{desc}</span></div>
                  </div>
                ))}
              </div>

              <div className="mode-card__when">
                <p className="mode-card__when-label">Recommandé pour</p>
                <p className="mode-card__when-text">Combles perdus non aménageables, accès réduits, zones encombrées de réseaux, grandes surfaces de plancher haut ou bâtiments où la circulation dans les combles n&apos;est pas nécessaire.</p>
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
                Des rouleaux ou panneaux isolants sont posés manuellement sur le plancher des combles,
                en une ou plusieurs couches selon la performance recherchée. Cette technique convient
                particulièrement aux zones accessibles, régulières et facilement contrôlables.
              </p>

              <div className="mode-card__features">
                {[
                  ["Pose contrôlable", "L'épaisseur, les recouvrements et la continuité de l'isolant sont facilement vérifiables."],
                  ["Accès technique possible", "La solution peut être adaptée pour conserver certains cheminements ou accès de maintenance."],
                  ["Large choix de matériaux", "Laine minérale, isolants biosourcés ou panneaux semi-rigides selon le projet et les contraintes du bâtiment."],
                ].map(([title, desc]) => (
                  <div key={title} className="mode-feat">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    <div><strong>{title}</strong><span>{desc}</span></div>
                  </div>
                ))}
              </div>

              <div className="mode-card__when">
                <p className="mode-card__when-label">Recommandé pour</p>
                <p className="mode-card__when-text">Combles accessibles, surfaces planes et dégagées, zones techniques nécessitant un accès ponctuel, bâtiments où l&apos;on souhaite garder une circulation maîtrisée au-dessus de l&apos;isolant.</p>
              </div>
            </div>
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
              { value: "–20 à 30 %", title: "Chauffage ou climatisation moins sollicités", text: "En réduisant les échanges thermiques par la toiture, l'isolation des combles peut limiter les besoins en chauffage ou en climatisation, selon le climat, l'usage des locaux et l'état initial du bâtiment.", disc: "* Estimation variable selon la configuration du bâtiment, le niveau d'isolation existant et les équipements en place." },
              { value: "+ confort", title: "Été comme hiver", text: "L'isolation des combles limite les pertes de chaleur en hiver et réduit les apports thermiques par la toiture en climat chaud. Les locaux deviennent plus stables et plus confortables au quotidien." },
              { value: "DPE", title: "Amélioration de la performance énergétique", text: "En résidentiel, l'isolation des combles peut contribuer à améliorer le DPE, selon la configuration du logement, les travaux réalisés, les équipements existants et le diagnostic établi." },
              { value: "Prime CEE", title: "Un reste à charge optimisé", text: "Lorsque l'opération est éligible, la prime CEE peut être directement déduite du devis et de la facture. Dans certains cas, elle peut couvrir jusqu'à 100 % du montant HT des travaux. Dans le cadre d'une rénovation d'ampleur, MaPrimeRénov' peut également être étudiée selon le profil du ménage, le logement et le bouquet de travaux envisagé." },
              { value: "Décret tertiaire", title: "Trajectoire de réduction des consommations", text: "Dans le tertiaire, l'isolation des combles peut contribuer aux objectifs de réduction des consommations énergétiques, en complément d'autres actions sur l'enveloppe, les équipements et le pilotage du bâtiment." },
              { value: "Valorisation", title: "Un actif plus confortable et plus performant", text: "Un bâtiment mieux isolé est plus agréable à occuper, plus cohérent avec les attentes énergétiques actuelles et plus facile à valoriser dans le cadre d'une vente, d'une location ou d'une rénovation globale." },
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
            <p className="section-label">Applications tertiaires &amp; résidentielles</p>
            <h2 className="section-title">
              Quels bâtiments sont<br />
              <em>concernés</em>&nbsp;?
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Maisons individuelles, copropriétés, logements collectifs ou bâtiments tertiaires :
              l&apos;isolation des combles peut être étudiée en Métropole comme en Outre-mer, avec une
              fiche CEE adaptée selon le secteur, le territoire et la configuration du projet.
            </p>
          </div>

          <div className="buildings__grid">
            {[
              ["Maisons individuelles", "Villas, maisons ou logements avec combles perdus, rampants de toiture ou plafonds hauts à isoler."],
              ["Copropriétés", "Immeubles collectifs avec combles, toitures ou parties communes pouvant faire l'objet d'une isolation globale."],
              ["Logements collectifs", "Résidences, bailleurs sociaux ou privés, logements groupés avec zones sous toiture ou planchers hauts à traiter."],
              ["Bureaux & locaux administratifs", "Sièges sociaux, bureaux, espaces de coworking ou locaux administratifs avec combles, rampants ou plafonds isolables."],
              ["Commerces & grandes surfaces", "Boutiques, supermarchés, galeries, showrooms ou réserves avec zones sous toiture à améliorer thermiquement."],
              ["Établissements publics & collectivités", "Mairies, crèches, écoles, médiathèques, salles communales ou bâtiments administratifs avec toiture isolable."],
              ["Santé, médico-social & enseignement", "Cliniques, cabinets, EHPAD, écoles, centres de formation ou établissements recevant du public selon les contraintes du site."],
              ["Hôtellerie, restauration & locaux d'activité", "Hôtels, restaurants, salles de réception, locaux associatifs ou bâtiments professionnels avec combles ou plafonds hauts à traiter."],
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
            <strong>À noter :</strong> l&apos;isolation des combles peut relever de différentes fiches CEE selon le bâtiment et le territoire : BAR-EN-101 ou BAR-EN-106 pour le résidentiel, BAT-EN-101 ou BAT-EN-106 pour le tertiaire. ECOPRORENOVE vérifie la fiche applicable, la résistance thermique exigée, la configuration du bâtiment et la chronologie du dossier avant tout engagement.
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
                <em style={{ color: "#a8e296" }}>jusqu&apos;à 100&thinsp;% financés</em><br />
                par les CEE*
              </h2>
              <div className="divider divider--white"></div>
              <p className="section-intro section-intro--white" style={{ marginBottom: 32 }}>
                L&apos;isolation des combles fait partie des opérations fortement valorisées dans le
                dispositif des Certificats d&apos;Économies d&apos;Énergie. La prime CEE peut être
                directement déduite du devis et de la facture. Dans certains cas, elle peut couvrir
                jusqu&apos;à <strong style={{ color: "#fff" }}>100&thinsp;%</strong> du montant HT des
                travaux.
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
                  <span className="fiche-card__badge">BAT-EN-101 / 106</span>
                  <span className="fiche-card__type">Fiche CEE · Tertiaire</span>
                </div>
                <p className="fiche-card__title">Tertiaire</p>
                <p className="fiche-card__text">Isolation de combles, rampants ou toitures selon la localisation du bâtiment : Métropole ou Outre-mer.</p>
                <div className="fiche-card__meta">
                  <div className="fiche-card__meta-item"><strong>Financement possible</strong>Prime CEE directement déduite du devis, jusqu&apos;à 100&thinsp;% HT financé selon éligibilité.</div>
                  <div className="fiche-card__meta-item"><strong>Points vérifiés</strong>Usage du bâtiment, surface, résistance thermique, mode de pose, chronologie et conformité du dossier.</div>
                </div>
              </div>

              <div className="fiche-card">
                <div className="fiche-card__head">
                  <span className="fiche-card__badge">BAR-EN-101 / 106</span>
                  <span className="fiche-card__type">Fiche CEE · Résidentiel</span>
                </div>
                <p className="fiche-card__title">Résidentiel</p>
                <p className="fiche-card__text">Isolation des combles en maison individuelle, copropriété ou logement collectif, selon le territoire et la configuration.</p>
                <div className="fiche-card__meta">
                  <div className="fiche-card__meta-item"><strong>Financement possible</strong>Prime CEE mobilisable selon les conditions du dossier, avec possibilité d&apos;un reste à charge fortement réduit.</div>
                  <div className="fiche-card__meta-item"><strong>Aides complémentaires</strong>MaPrimeRénov&apos; peut également être étudiée dans le cadre d&apos;une rénovation d&apos;ampleur.</div>
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
              Nous cadrons chaque étape : étude technique, choix de la solution, financement CEE,
              réalisation des travaux et clôture du dossier.
            </p>
          </div>

          <div className="method__steps">
            {[
              ["01", "Visite technique", "Nous analysons votre bâtiment : accès, surface à isoler, configuration des combles, rampants ou plafonds hauts, et contraintes d'intervention."],
              ["02", "Choix de la solution", "Nous déterminons la méthode la plus adaptée : soufflage, déroulé ou pose spécifique selon la configuration du bâtiment."],
              ["03", "Étude des aides", "Nous vérifions la fiche CEE applicable, les conditions techniques à respecter et le financement mobilisable pour votre projet. Nous montons la demande MaPrimeRénov' si le projet y est éligible."],
              ["04", "Devis avec prime déduite", "Vous recevez une proposition claire, avec la prime CEE directement déduite lorsque l'opération est éligible."],
              ["05", "Réalisation des travaux", "Les travaux sont réalisés par des professionnels qualifiés, avec une pose soignée et un chantier organisé pour limiter les contraintes sur site."],
              ["06", "Fin de chantier & dossier CEE", "Nous contrôlons les éléments de fin de travaux, préparons les justificatifs, accompagnons le contrôle éventuel par organisme accrédité COFRAC et transmettons le dossier pour validation."],
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
              Un bon projet d&apos;isolation, c&apos;est une solution adaptée au bâtiment, une pose
              maîtrisée, un dossier d&apos;aide sécurisé et un accompagnement clair jusqu&apos;à la fin
              du chantier.
            </p>
          </div>

          <div className="why-us__grid">
            {[
              ["Interlocuteur unique", "Un seul point de contact pour toutes les dimensions du projet : technique, administrative, financière. Simplicité et cohérence du début à la fin."],
              ["Pose maîtrisée", "Nous sélectionnons la technique adaptée à votre bâtiment : soufflage, déroulé ou pose spécifique, avec une mise en œuvre conforme aux exigences du projet."],
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
              Une isolation efficace<br />
              commence par le bon choix de solution.
            </h2>
            <p className="value-banner__subtitle">
              Soufflage, déroulé, combles perdus, rampants ou plafonds hauts : nous identifions la
              bonne méthode, vérifions les aides mobilisables et pilotons le projet jusqu&apos;à la
              clôture du dossier.
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
                { q: "Quelle est la différence entre l'isolation en soufflage et en déroulé ?", a: "Le soufflage consiste à projeter mécaniquement un isolant en vrac sur le plancher des combles. Il est particulièrement adapté aux combles perdus, difficiles d'accès ou encombrés. Le déroulé consiste à poser manuellement des rouleaux ou panneaux isolants. Il convient plutôt aux combles accessibles, aux surfaces planes ou aux zones où l'on souhaite conserver un accès technique. Dans les deux cas, la technique est choisie selon la configuration réelle du bâtiment et les exigences de la fiche CEE applicable." },
                { q: "Quelle résistance thermique faut-il atteindre pour être éligible aux CEE ?", a: "La résistance thermique minimale dépend de la fiche CEE applicable, du secteur concerné et du territoire : résidentiel ou tertiaire, Métropole ou Outre-mer. ECOPRORENOVE vérifie la fiche concernée, la performance thermique exigée et l'épaisseur d'isolant nécessaire avant toute proposition." },
                { q: "Mon bâtiment est-il éligible aux CEE ?", a: (<>L&apos;éligibilité dépend du type de bâtiment, de son usage, de sa localisation, de la configuration des combles ou rampants, de la surface à isoler et du respect de la chronologie administrative. Selon le cas, l&apos;opération peut relever d&apos;une fiche tertiaire <strong>BAT-EN-101 / BAT-EN-106</strong> ou d&apos;une fiche résidentielle <strong>BAR-EN-101 / BAR-EN-106</strong>. ECOPRORENOVE identifie la fiche applicable lors de l&apos;étude technique.</>) },
                { q: "Le chantier perturbe-t-il l'activité du bâtiment ?", a: "Dans la majorité des cas, l'impact est limité. Les interventions se font principalement dans les combles, les rampants ou les zones techniques, avec un planning adapté à l'occupation du site. Pour les bâtiments professionnels, nous pouvons organiser le chantier par zones ou sur des créneaux adaptés à votre activité." },
                { q: "Quels matériaux isolants sont utilisés ?", a: "Le matériau dépend de la technique retenue, de la configuration du bâtiment et des exigences du projet. En soufflage, on utilise généralement des isolants en vrac comme la laine minérale ou la ouate de cellulose. En déroulé, on utilise plutôt des rouleaux ou panneaux isolants. Les matériaux retenus doivent disposer des justificatifs techniques nécessaires pour le dossier CEE." },
                { q: "Quel est le montant de la prime CEE pour mon projet ?", a: (<>Le montant dépend de plusieurs éléments : surface isolée, fiche applicable, territoire, type de bâtiment, usage des locaux, performance thermique visée et valorisation CEE disponible au moment de l&apos;engagement. Lorsque l&apos;opération est éligible, la prime CEE peut être directement déduite du devis et de la facture. Dans certains cas, elle peut couvrir jusqu&apos;à <strong>100&thinsp;% du montant HT des travaux</strong>.</>) },
                { q: "Faut-il engager le dossier CEE avant le début des travaux ?", a: "Oui, c'est indispensable. Le dossier doit être étudié et engagé avant le démarrage des travaux, avec une chronologie administrative stricte. Un chantier commencé trop tôt peut rendre l'opération non recevable au titre des CEE. C'est pour éviter ce type d'erreur qu'ECOPRORENOVE pilote le dossier avant le lancement du chantier." },
                { q: "Combien de temps dure un chantier d'isolation des combles ?", a: "La durée dépend de la surface, de l'accessibilité, de la technique retenue et des contraintes du bâtiment. Un soufflage peut être rapide sur plusieurs centaines de mètres carrés, tandis qu'un déroulé ou un chantier plus complexe peut nécessiter davantage de temps. Le planning est toujours défini après la visite technique." },
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
      <RelatedSolutions
        items={["isolation-toiture-rampants", "destratificateur-air", "ma-prime-renov"]}
      />

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
              Que vous ayez un projet précis ou que vous souhaitiez simplement savoir si votre bâtiment est concerné par les fiches CEE applicables (BAR-EN ou BAT-EN selon le secteur), nous sommes disponibles pour répondre à vos questions et vous donner une première orientation claire.
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
                    <option value="maison-individuelle">Maison individuelle</option>
                    <option value="copropriete">Copropriété / logement collectif</option>
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


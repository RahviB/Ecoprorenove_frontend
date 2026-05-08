import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";
import Faq from "@/components/Faq";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ScrollNav from "@/components/ScrollNav";
import RelatedSolutions from "@/components/RelatedSolutions";

export const metadata: Metadata = {
  title: "Isolation des planchers bas — CEE BAR-EN-103 / BAT-EN-103",
  description:
    "Isolez les planchers situés au-dessus d'un vide sanitaire, d'un parking ou d'un local non chauffé. Flocage ou panneaux rigides, R ≥ 3 m²·K/W, pose RGE et fiches CEE BAR-EN-103 (résidentiel) et BAT-EN-103 (tertiaire). Étude gratuite.",
  alternates: { canonical: "/isolation-planchers-bas" },
  openGraph: {
    url: "/isolation-planchers-bas",
    title: "Isolation des planchers bas — ECOPRORENOVE",
    description:
      "Stopper les ponts thermiques par le sol. Flocage ou panneaux rigides, pose RGE, dossiers CEE BAR-EN-103 et BAT-EN-103.",
  },
};

export default function IsolationPlanchersBasPage() {
  return (
    <div className="page-service solution-template page-planchers-bas">
      <ServiceJsonLd
        name="Isolation des planchers bas"
        description="Isolation thermique des planchers situés au-dessus d'un vide sanitaire, d'un parking ou d'un local non chauffé. Flocage ou panneaux rigides, pose RGE, fiches CEE BAR-EN-103 (résidentiel) et BAT-EN-103 (tertiaire)."
        url="/isolation-planchers-bas"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Isolation des planchers bas", url: "/isolation-planchers-bas" },
        ]}
      />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__content fade-in">
              <h1 className="hero__title hero__title--t1">
                <span className="hero__title-eyebrow">Tertiaire &amp; résidentiel — CEE BAR-EN-103 et BAT-EN-103</span>
                <span className="hero__title-anchor">Isolez les planchers bas</span>
                <span className="hero__title-italic">stoppez les ponts thermiques par le sol.</span>
              </h1>

              <p className="hero__subtitle">
                Les planchers situés au-dessus d&apos;un vide sanitaire, d&apos;un parking ou
                d&apos;un local non chauffé sont des ponts thermiques majeurs. ECOPRORENOVE met en
                œuvre la technique adaptée — flocage projeté ou panneaux rigides — et mobilise les
                CEE pour alléger votre reste à charge.
              </p>

              <div className="hero__actions">
                <a href="#contact" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  Obtenir une étude gratuite
                </a>
                <a href="#modes" className="btn btn--secondary">Voir les deux techniques</a>
              </div>
            </div>

            <div className="hero__visual fade-in delay-3">
              <Image
                src="/images/isolation-planchers-bas.webp"
                alt="Pose d'un isolant en sous-face de plancher bas avec membrane réflective"
                width={1448}
                height={1086}
                className="hero__img"
                priority
              />
              <div className="hero__bubble hero__bubble--temp">
                <strong>7 – 10 %</strong>
                <small>déperditions<br />par le plancher</small>
              </div>
              <div className="hero__bubble hero__bubble--life">
                <strong>R ≥ 3</strong>
                <small>m²·K/W<br />BAR / BAT-EN-103</small>
              </div>
              <div className="hero__bubble hero__bubble--cee">
                <strong>100%</strong>
                <small>financée<br />CEE</small>
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
              "R ≥ 3 m²·K/W — BAR-EN-103 / BAT-EN-103",
              "Pose en sous-face, sans interruption d'activité",
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
                  <span className="loss-roof__label">Plancher bas</span>
                  <span className="loss-roof__pct">7 – 10 %</span>
                </div>
                <div className="loss-arrows">
                  <span className="loss-arrow" style={{ transform: "rotate(180deg)" }}>↑</span>
                  <span className="loss-arrow" style={{ transform: "rotate(180deg)" }}>↑</span>
                  <span className="loss-arrow" style={{ transform: "rotate(180deg)" }}>↑</span>
                  <span className="loss-arrow" style={{ transform: "rotate(180deg)" }}>↑</span>
                </div>
                <div className="loss-interior">
                  <div className="loss-interior__text">
                    Plancher bas non isolé
                    <small>L&apos;air froid remonte par le sol</small>
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
                  <div className="loss-others__name">Planchers bas</div>
                </div>
              </div>
              <p className="loss-schema__caption">Sources : ADEME — ordres de grandeur pour un bâtiment non isolé</p>
            </div>

            <div className="problem__content fade-in delay-2">
              <p className="section-label">Le pont thermique du dessous</p>
              <h2 className="section-title">
                Vide sanitaire, parking, sous-sol&nbsp;:<br />
                <em>votre plancher devient une zone<br />
                d&apos;échange thermique.</em>
              </h2>
              <div className="divider"></div>
              <p className="section-intro">
                Lorsqu&apos;un plancher donne sur un vide sanitaire, un parking, une cave, un sous-sol ou un local non chauffé, la dalle reste exposée aux variations de température.
              </p>
              <p className="section-intro">
                Sans isolation, les échanges thermiques se font directement par le dessous&nbsp;: sensation de sol froid, inconfort dans les pièces occupées et besoins énergétiques plus importants.
              </p>
              <p className="section-intro">
                Isoler le plancher bas permet de traiter cette zone à la source, sans intervenir à l&apos;intérieur des locaux.
              </p>

              <div className="problem__list">
                <div className="problem-item">
                  <div className="problem-item__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <div>
                    <p className="problem-item__title">Pertes thermiques sous-estimées</p>
                    <p className="problem-item__desc">Le plancher bas peut représenter une part significative des déperditions d&apos;un bâtiment non isolé. En isolant la sous-face de dalle, on limite les échanges avec les volumes froids ou non chauffés situés en dessous.</p>
                  </div>
                </div>

                <div className="problem-item">
                  <div className="problem-item__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17.66 8L12 2.35 6.34 8A8 8 0 1 0 17.66 8z"/></svg>
                  </div>
                  <div>
                    <p className="problem-item__title">Meilleur confort au quotidien</p>
                    <p className="problem-item__desc">Sol froid, sensation d&apos;humidité, inconfort dans les zones occupées&nbsp;: un plancher bas mal isolé dégrade rapidement la perception du bâtiment. L&apos;isolation améliore le confort ressenti sans modifier l&apos;usage des locaux.</p>
                  </div>
                </div>

                <div className="problem-item">
                  <div className="problem-item__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  </div>
                  <div>
                    <p className="problem-item__title">Performance énergétique améliorée</p>
                    <p className="problem-item__desc">En réduisant les pertes par le sol, le bâtiment consomme moins pour maintenir une température confortable. C&apos;est un levier concret pour améliorer l&apos;étiquette énergétique et avancer sur les objectifs de sobriété énergétique.</p>
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
              Flocage ou panneaux&nbsp;:<br />
              la <em>bonne technique</em> au bon endroit
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Chaque plancher bas a ses contraintes&nbsp;: accès, hauteur disponible, réseaux,
              humidité, sécurité incendie, usage du local situé en dessous. ECOPRORENOVE
              choisit la technique la plus adaptée pour isoler efficacement la sous-face du plancher.
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
                  <h3 className="mode-card__title">Flocage projeté</h3>
                </div>
              </div>
              <p className="mode-card__lead">
                Le flocage consiste à projeter mécaniquement un isolant en sous-face de dalle. C&apos;est une solution particulièrement adaptée aux parkings, vides sanitaires, sous-sols techniques ou zones avec réseaux apparents.
              </p>

              <div className="mode-card__features">
                {[
                  ["Bonne continuité d'isolation", "Le flocage épouse les reliefs du support et facilite le traitement des poutres, gaines, conduits et points singuliers."],
                  ["Adapté aux grandes surfaces", "Une solution efficace pour traiter rapidement des sous-faces importantes, notamment en parking ou sous-sol."],
                  ["Compatible avec les contraintes du site", "Le produit est choisi selon le support, l'humidité, les exigences feu, l'usage du local et la performance thermique recherchée."],
                ].map(([title, desc]) => (
                  <div key={title} className="mode-feat">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#49a739" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    <div><strong>{title}</strong><span>{desc}</span></div>
                  </div>
                ))}
              </div>

              <div className="mode-card__when">
                <p className="mode-card__when-label">Recommandé pour</p>
                <p className="mode-card__when-text">Parkings, vides sanitaires accessibles, sous-sols, locaux techniques, sous-faces irrégulières ou zones avec réseaux apparents.</p>
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
                  <h3 className="mode-card__title">Panneaux rigides</h3>
                </div>
              </div>
              <p className="mode-card__lead">
                Les panneaux isolants sont fixés en sous-face de plancher, par collage ou fixation mécanique selon le support. Cette solution convient surtout aux surfaces planes, dégagées et facilement accessibles.
              </p>

              <div className="mode-card__features">
                {[
                  ["Finition propre", "La sous-face reste régulière et visuellement plus nette lorsque l'aspect final est important."],
                  ["Épaisseur maîtrisée", "L'épaisseur, les joints et la continuité de pose sont facilement contrôlables."],
                  ["Adapté aux zones simples", "Les panneaux sont pertinents lorsque la dalle est plane, avec peu d'obstacles et peu de réseaux à contourner."],
                ].map(([title, desc]) => (
                  <div key={title} className="mode-feat">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    <div><strong>{title}</strong><span>{desc}</span></div>
                  </div>
                ))}
              </div>

              <div className="mode-card__when">
                <p className="mode-card__when-label">Recommandé pour</p>
                <p className="mode-card__when-text">Caves, sous-sols dégagés, locaux techniques simples, sous-faces planes ou zones où l&apos;aspect final compte davantage.</p>
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
              Une isolation des planchers bas conforme aux exigences CEE produit des effets mesurables dès la première saison — sur la facture, sur le confort, sur la valeur du bâtiment.
            </p>
          </div>

          <div className="benefits__grid">
            {[
              { value: "Jusqu'à 10 à 15 %", title: "Économies d'énergie potentielles", text: "En limitant les échanges thermiques entre les locaux chauffés ou climatisés et les volumes non traités situés en dessous, l'isolation du plancher bas permet de réduire les besoins énergétiques du bâtiment.", disc: "* Estimation variable selon l'état initial du bâtiment, la surface traitée, l'usage des locaux et le niveau d'isolation posé." },
              { value: "R ≥ 3", title: "Performance thermique conforme CEE", text: "La fiche BAT-EN-103 impose une résistance thermique minimale de R ≥ 3 m²·K/W pour l'isolation installée. Cette exigence garantit un niveau de performance adapté aux opérations d'isolation des planchers bas en bâtiment tertiaire.", disc: "* Résistance thermique minimale exigée dans le cadre de la fiche CEE BAT-EN-103." },
              { value: "+ confort", title: "Réduction de l'effet de paroi froide", text: "L'isolation limite la sensation de sol froid et améliore le confort ressenti dans les locaux situés au-dessus. Le bâtiment devient plus agréable à utiliser, avec une température plus homogène et un meilleur confort pour les occupants." },
              { value: "Prime CEE", title: "Un reste à charge optimisé", text: "Lorsque l'opération est éligible, la prime CEE peut être directement déduite du devis et de la facture. Dans certains cas, elle peut couvrir jusqu'à 100 % du montant HT des travaux." },
              { value: "Décret tertiaire", title: "Mise en conformité", text: "L'isolation du plancher bas contribue directement aux objectifs de baisse de consommation du décret tertiaire (−40 % en 2030, −50 % en 2040, −60 % en 2050)." },
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
            <p className="section-label">Applications tertiaires &amp; résidentielles</p>
            <h2 className="section-title">
              Quels bâtiments sont<br />
              <em>concernés</em>&nbsp;?
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Les fiches CEE BAR-EN-103 (résidentiel) et BAT-EN-103 (tertiaire) couvrent les bâtiments — publics ou privés — disposant d&apos;un plancher bas au-dessus d&apos;un vide sanitaire, d&apos;un parking ou d&apos;un local non chauffé.
            </p>
          </div>

          <div className="buildings__grid">
            {[
              ["Maisons individuelles", "Maisons ou villas avec plancher sur vide sanitaire, garage, cave, passage ouvert ou sous-sol non chauffé."],
              ["Copropriétés & logements collectifs", "Immeubles résidentiels avec logements situés au-dessus de parkings, caves, sous-sols ou locaux techniques."],
              ["Bureaux & locaux tertiaires", "Bureaux, sièges sociaux, locaux administratifs ou espaces professionnels avec plancher bas isolable."],
              ["Commerces & grandes surfaces", "Magasins, supermarchés, galeries ou surfaces de vente au-dessus de parkings, réserves ou volumes non chauffés."],
              ["Santé & médico-social", "Cliniques, EHPAD, cabinets médicaux ou maisons de santé avec planchers bas accessibles par le dessous."],
              ["Enseignement & collectivités", "Écoles, crèches, mairies, médiathèques ou bâtiments publics avec vide sanitaire, sous-sol ou local non chauffé."],
              ["Hôtellerie & restauration", "Hôtels, restaurants, salles de réception ou résidences de tourisme avec caves, sous-sols ou zones techniques."],
              ["Locaux d'activité & équipements sportifs", "Gymnases, salles polyvalentes, vestiaires, locaux associatifs ou bâtiments d'activité à usage éligible, sous réserve d'analyse."],
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
            <strong>À noter :</strong> les fiches BAR-EN-103 et BAT-EN-103 peuvent s&apos;appliquer à l&apos;isolation des planchers bas lorsque le bâtiment, le support et la configuration respectent les conditions du dispositif CEE. ECOPRORENOVE vérifie notamment l&apos;usage réel du bâtiment, la surface isolable, la résistance thermique exigée, l&apos;accessibilité de la sous-face, la conformité technique de la pose et la chronologie administrative avant tout engagement.
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
                Vos planchers bas<br />
                <em style={{ color: "#a8e296" }}>jusqu&apos;à 100% financés</em><br />
                par les CEE
              </h2>
              <div className="divider divider--white"></div>
              <p className="section-intro section-intro--white" style={{ marginBottom: 32 }}>
                L&apos;isolation des planchers bas figure parmi les opérations standardisées du dispositif des Certificats d&apos;Économies d&apos;Énergie. Deux fiches dédiées couvrent l&apos;ensemble des cas&nbsp;:{" "}
                <strong style={{ color: "#fff" }}>BAR-EN-103</strong> pour le résidentiel et{" "}
                <strong style={{ color: "#fff" }}>BAT-EN-103</strong> pour le tertiaire.
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
                  <span className="fiche-card__badge">BAT-EN-103</span>
                  <span className="fiche-card__type">Fiche CEE · Tertiaire</span>
                </div>
                <p className="fiche-card__title">Isolation d&apos;un plancher bas</p>
                <p className="fiche-card__text">Opération standardisée couvrant la mise en place d&apos;un isolant thermique en sous-face d&apos;un plancher situé au-dessus d&apos;un vide sanitaire, d&apos;un parking ou d&apos;un local non chauffé, pour les bâtiments tertiaires existants.</p>
                <div className="fiche-card__meta">
                  <div className="fiche-card__meta-item"><strong>R minimale</strong>R ≥ 3 m²·K/W</div>
                  <div className="fiche-card__meta-item"><strong>Modes</strong>Flocage · Panneaux</div>
                  <div className="fiche-card__meta-item"><strong>Certification</strong>Pose RGE obligatoire</div>
                </div>
              </div>

              <div className="fiche-card">
                <div className="fiche-card__head">
                  <span className="fiche-card__badge">BAR-EN-103</span>
                  <span className="fiche-card__type">Fiche CEE · Résidentiel</span>
                </div>
                <p className="fiche-card__title">Isolation d&apos;un plancher bas</p>
                <p className="fiche-card__text">Opération standardisée pour les logements résidentiels existants — maisons individuelles, copropriétés, logements collectifs — disposant d&apos;un plancher bas au-dessus d&apos;un vide sanitaire, d&apos;un parking ou d&apos;un local non chauffé.</p>
                <div className="fiche-card__meta">
                  <div className="fiche-card__meta-item"><strong>R minimale</strong>R ≥ 3 m²·K/W</div>
                  <div className="fiche-card__meta-item"><strong>Cumul possible</strong>MaPrimeRénov&apos;</div>
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
              Nous cadrons chaque étape&nbsp;: visite technique, choix de la solution, financement CEE, réalisation des travaux et clôture du dossier.
            </p>
          </div>

          <div className="method__steps">
            {[
              ["01", "Visite technique", "Nous analysons le plancher bas : accès, surface, support, réseaux, humidité, hauteur disponible et contraintes du site."],
              ["02", "Choix de la solution", "Nous déterminons la technique la plus adaptée : flocage projeté, panneaux isolants ou traitement spécifique selon la configuration."],
              ["03", "Étude CEE", "Nous vérifions la fiche applicable, la résistance thermique exigée, la surface éligible et le financement mobilisable."],
              ["04", "Devis avec prime déduite", "Vous recevez une proposition claire, avec la prime CEE directement déduite lorsque l'opération est éligible."],
              ["05", "Réalisation des travaux", "La pose est réalisée en sous-face du plancher, depuis le vide sanitaire, le parking, la cave ou le local concerné, avec un chantier organisé selon vos contraintes."],
              ["06", "Fin de chantier & validation CEE", "Nous préparons les justificatifs, le reportage photo et les documents de fin de travaux, puis accompagnons le contrôle éventuel par un organisme accrédité COFRAC avant transmission du dossier."],
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
              Un bon projet d&apos;isolation des planchers bas, c&apos;est un bon diagnostic, une technique adaptée, une pose maîtrisée et un dossier CEE sécurisé. Nous pilotons chaque étape.
            </p>
          </div>

          <div className="why-us__grid">
            {[
              ["Interlocuteur unique", "Un seul point de contact pour toutes les dimensions du projet : technique, administrative, financière. Simplicité et cohérence du début à la fin."],
              ["Technique adaptée", "Flocage, panneaux ou solution spécifique : nous choisissons la méthode selon le support, l'accès et les contraintes du site."],
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
              Isoler le plancher bas, c&apos;est traiter les échanges thermiques par le dessous.
            </h2>
            <p className="value-banner__subtitle">
              Bon diagnostic, bonne technique, bonne résistance thermique, bon dossier CEE&nbsp;: ECOPRORENOVE structure chaque projet pour améliorer le confort, optimiser le financement et sécuriser les travaux.
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
              savoir sur l&apos;<em>isolation des planchers bas</em>
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Des réponses claires, techniques et directement utiles pour avancer sur votre projet.
            </p>
          </div>
          <div className="faq__list">
            <Faq
              items={[
                { q: "Qu'appelle-t-on exactement un « plancher bas » ?", a: "Le plancher bas désigne le plancher situé au-dessus d'un volume non chauffé ou non traité : vide sanitaire, parking, cave, sous-sol, passage ouvert ou local technique. Lorsqu'il n'est pas isolé, ce plancher devient une zone d'échange thermique entre les locaux occupés et le volume situé en dessous. Cela peut provoquer une sensation de sol froid, une perte de confort et une consommation énergétique plus importante." },
                { q: "Quelle est la différence entre flocage projeté et panneaux rigides ?", a: "Le flocage projeté consiste à projeter mécaniquement un isolant en sous-face de dalle. Il est souvent privilégié pour les parkings, vides sanitaires, sous-sols ou zones techniques, notamment lorsque la sous-face est irrégulière ou traversée par des réseaux. Les panneaux rigides sont fixés sous le plancher, par collage ou fixation mécanique selon le support. Ils conviennent plutôt aux surfaces planes, dégagées et facilement accessibles. Le choix dépend toujours de la configuration réelle du bâtiment, de l'accessibilité, des contraintes feu, de l'humidité, des réseaux et du rendu attendu." },
                { q: "Quelle résistance thermique minimale faut-il atteindre pour être éligible aux CEE ?", a: (<>Pour l&apos;isolation d&apos;un plancher bas, les fiches <strong>BAR-EN-103</strong> et <strong>BAT-EN-103</strong> exigent une résistance thermique minimale de l&apos;isolant installé de <strong>R ≥ 3 m².K/W</strong>. ECOPRORENOVE vérifie la fiche applicable, le matériau retenu, l&apos;épaisseur nécessaire et les justificatifs techniques avant toute proposition.</>) },
                { q: "Mon bâtiment est-il éligible aux fiches BAR-EN-103 ou BAT-EN-103 ?", a: (<>L&apos;éligibilité dépend du type de bâtiment, de son usage réel, de la configuration du plancher bas, de la surface isolable et du respect de la chronologie CEE. La fiche <strong>BAR-EN-103</strong> concerne le résidentiel : maisons individuelles, copropriétés ou logements collectifs. La fiche <strong>BAT-EN-103</strong> concerne les locaux tertiaires existants réservés à une utilisation professionnelle. Dans tous les cas, le plancher doit être situé au-dessus d&apos;un volume adapté : vide sanitaire, sous-sol non chauffé, parking, passage ouvert ou local non chauffé.</>) },
                { q: "Le chantier perturbe-t-il l'activité dans le bâtiment ?", a: "Dans la majorité des cas, l'impact est limité, car l'intervention se fait par le dessous : vide sanitaire, parking, cave, sous-sol ou local technique. Nous organisons le chantier selon les contraintes du site : accès, horaires, zones occupées, sécurité, circulation, protection des réseaux et maintien de l'activité lorsque cela est possible." },
                { q: "Quels matériaux isolants sont utilisés ?", a: "Le matériau dépend de la technique retenue et des contraintes du site. Pour le flocage, on utilise généralement des isolants projetés adaptés aux sous-faces de dalle, parkings ou locaux techniques. Pour les panneaux, le choix dépend du support, de la performance recherchée, de l'humidité, des exigences feu, de l'aspect final et de la facilité de pose. Les matériaux retenus doivent disposer des justificatifs techniques nécessaires pour le dossier CEE." },
                { q: "Quel est le montant de la prime CEE pour mon projet ?", a: (<>Le montant dépend de la surface isolée, de la fiche applicable, du bâtiment, de la zone climatique, de l&apos;usage des locaux et de la valorisation CEE disponible au moment de l&apos;engagement. Lorsque l&apos;opération est éligible, la prime CEE peut être directement déduite du devis et de la facture. Dans certains cas, elle peut couvrir jusqu&apos;à <strong>100 % du montant HT des travaux</strong>. ECOPRORENOVE vous présente toujours une proposition claire avant engagement, avec le financement mobilisable et le reste à charge éventuel.</>) },
                { q: "Faut-il engager le dossier CEE avant le début des travaux ?", a: "Oui, c'est indispensable. Le dossier CEE doit être étudié et engagé avant le démarrage des travaux, avec une chronologie administrative stricte. Un chantier commencé trop tôt peut rendre l'opération non recevable. C'est pour éviter ce type d'erreur qu'ECOPRORENOVE sécurise le dossier avant le lancement du chantier." },
                { q: "Combien de temps dure un chantier d'isolation des planchers bas ?", a: "La durée dépend de la surface, de l'accessibilité, de la technique retenue, de la hauteur disponible, des réseaux présents et des contraintes du site. Le flocage permet généralement de traiter rapidement de grandes surfaces, notamment en parking ou sous-sol. Les panneaux peuvent demander plus de préparation lorsque les découpes, fixations ou finitions sont importantes. Un planning prévisionnel est défini après la visite technique." },
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
              Votre confort se joue<br />
              <em>aussi sous la dalle.</em>
            </h2>
            <p className="cta-final__subtitle">
              Faites vérifier l&apos;accessibilité de votre plancher bas, la technique adaptée et la prime CEE mobilisable pour votre bâtiment.
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

      {/* RELATED + CONTACT */}
      <RelatedSolutions
        items={["isolation-combles", "isolation-toiture-rampants", "prime-cee"]}
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
            <h2 className="contact-info__title">Parlons de<br />vos planchers bas</h2>
            <div className="divider"></div>
            <p className="contact-info__text">
              Que vous ayez un projet précis ou que vous souhaitiez simplement savoir si votre bâtiment est concerné par les fiches BAR-EN-103 ou BAT-EN-103, nous sommes disponibles pour répondre à vos questions et vous donner une première orientation claire.
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
            <ContactForm source="isolation-planchers-bas">
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
                    <option value="maison">Maison individuelle</option>
                    <option value="copropriete">Copropriété / logement collectif</option>
                    <option value="industrie">Industrie / logistique</option>
                    <option value="bureaux">Bureaux / tertiaire</option>
                    <option value="commerce">Commerce / boutique</option>
                    <option value="enseignement">Enseignement</option>
                    <option value="sante">Santé / médico-social</option>
                    <option value="hotellerie">Hôtellerie / restauration</option>
                    <option value="collectivite">Collectivité publique</option>
                    <option value="sport">Équipement sportif</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="type-plancher">Configuration du plancher bas</label>
                  <select className="form-select" id="type-plancher" name="type_plancher" defaultValue="">
                    <option value="" disabled>Sélectionnez</option>
                    <option value="vide-sanitaire">Sur vide sanitaire</option>
                    <option value="parking">Sur parking</option>
                    <option value="local-non-chauffe">Sur local non chauffé</option>
                    <option value="cave">Sur cave / sous-sol</option>
                    <option value="nsp">Je ne sais pas</option>
                  </select>
                </div>
                <div className="form-group form-group--full">
                  <label className="form-label" htmlFor="surface">Surface approximative (m²)</label>
                  <input className="form-input" type="text" id="surface" name="surface" placeholder="Ex. 1 200 m²" />
                </div>
                <div className="form-group form-group--full">
                  <label className="form-label" htmlFor="message">Décrivez votre projet ou votre besoin</label>
                  <textarea className="form-textarea" id="message" name="message" placeholder="Accessibilité du dessous, présence de réseaux, mode de chauffage, contraintes d'activité, questions spécifiques..."></textarea>
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

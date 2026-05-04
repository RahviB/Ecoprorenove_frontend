import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import Faq from "@/components/Faq";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ScrollNav from "@/components/ScrollNav";
import RelatedSolutions from "@/components/RelatedSolutions";

export const metadata: Metadata = {
  title: "Isolation des planchers bas — CEE BAT-EN-103",
  description:
    "Isolez les planchers situés au-dessus d'un vide sanitaire, d'un parking ou d'un local non chauffé. Flocage ou panneaux rigides, R ≥ 3 m²·K/W, pose RGE et fiche CEE BAT-EN-103. Étude gratuite.",
  alternates: { canonical: "/isolation-planchers-bas" },
  openGraph: {
    url: "/isolation-planchers-bas",
    title: "Isolation des planchers bas — ECOPRORENOVE",
    description:
      "Stopper les ponts thermiques par le sol. Flocage ou panneaux rigides, pose RGE, dossier CEE BAT-EN-103.",
  },
};

export default function IsolationPlanchersBasPage() {
  return (
    <div className="page-service solution-template page-planchers-bas">
      <ServiceJsonLd
        name="Isolation des planchers bas"
        description="Isolation thermique des planchers situés au-dessus d'un vide sanitaire, d'un parking ou d'un local non chauffé. Flocage ou panneaux rigides, pose RGE, fiche CEE BAT-EN-103."
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
                <span className="hero__title-eyebrow">Bâtiment tertiaire — CEE BAT-EN-103</span>
                <span className="hero__title-anchor">Isolez les planchers bas</span>
                <span className="hero__title-italic">stoppez les ponts thermiques par le sol.</span>
              </h1>

              <p className="hero__stat-line">
                Jusqu&apos;à <strong>−10&thinsp;%</strong> de pertes énergétiques traitées
              </p>

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
              <div className="hero__img hero__img--placeholder" aria-label="Photo à venir" />
              <div className="hero__bubble hero__bubble--temp">
                <strong>7 – 10 %</strong>
                <small>déperditions<br />par le plancher</small>
              </div>
              <div className="hero__bubble hero__bubble--life">
                <strong>R ≥ 3</strong>
                <small>m²·K/W<br />BAT-EN-103</small>
              </div>
              <div className="hero__bubble hero__bubble--cee">
                <strong>CEE</strong>
                <small>BAT-EN-103</small>
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
              "R ≥ 3 m²·K/W — BAT-EN-103",
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
                  <span className="loss-roof__label">Toiture</span>
                  <span className="loss-roof__pct">25 – 30 %</span>
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
                Vide sanitaire, parking,<br />
                local non chauffé&nbsp;:<br />
                <em>un effet de paroi froide<br />
                permanent.</em>
              </h2>
              <div className="divider"></div>
              <p className="section-intro">
                Sous votre dalle, l&apos;air froid stagne. Sans isolation, ce volume non chauffé pompe
                les calories par conduction — la sensation de froid au sol s&apos;installe, le
                chauffage tourne en permanence, et la facture suit. Isoler le plancher bas, c&apos;est
                couper la fuite à la source.
              </p>

              <div className="problem__list">
                <div className="problem-item">
                  <div className="problem-item__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <div>
                    <p className="problem-item__title">Fuites de calories massives</p>
                    <p className="problem-item__desc">L&apos;air froid stagne sous la dalle et pompe l&apos;énergie thermique par conduction. Le plancher bas représente jusqu&apos;à 10&nbsp;% des pertes d&apos;un bâtiment non isolé — un poste sous-estimé mais traitable simplement.</p>
                  </div>
                </div>

                <div className="problem-item">
                  <div className="problem-item__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17.66 8L12 2.35 6.34 8A8 8 0 1 0 17.66 8z"/></svg>
                  </div>
                  <div>
                    <p className="problem-item__title">Inconfort persistant des occupants</p>
                    <p className="problem-item__desc">Sensation de froid au sol, jambes engourdies, températures hétérogènes entre le pied et la tête. Un confort dégradé qui pèse sur le bien-être, la productivité et la perception du bâtiment par ses utilisateurs.</p>
                  </div>
                </div>

                <div className="problem-item">
                  <div className="problem-item__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  </div>
                  <div>
                    <p className="problem-item__title">Surchauffe du chauffage et du DPE en berne</p>
                    <p className="problem-item__desc">Pour compenser, vos systèmes tournent plus longtemps, plus fort. Consommation énergétique élevée, étiquette DPE pénalisée, distance accrue avec les seuils du décret tertiaire — autant de leviers que l&apos;isolation du plancher bas permet de redresser durablement.</p>
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
              Chaque configuration de plancher bas appelle une technique différente. ECOPRORENOVE
              vous oriente vers la méthode la plus efficace, en fonction de l&apos;accessibilité du
              dessous, des passages de réseaux et de l&apos;usage du local situé en sous-face.
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
                Une laine minérale (verre ou roche) est projetée mécaniquement en sous-face de la
                dalle, formant une couche homogène, continue, sans joint — y compris autour des
                réseaux et points singuliers.
              </p>

              <div className="mode-card__features">
                {[
                  ["Continuité parfaite", "Suit les irrégularités, contourne poutres, gaines et conduits — aucune zone laissée à découvert."],
                  ["Performance acoustique", "Atténuation des bruits d'impact et aériens venant du local situé en dessous."],
                  ["Résistance au feu", "Comportement ignifuge classé A1 — sécurise les vide-sanitaires, parkings et locaux techniques."],
                ].map(([title, desc]) => (
                  <div key={title} className="mode-feat">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#49a739" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    <div><strong>{title}</strong><span>{desc}</span></div>
                  </div>
                ))}
              </div>

              <div className="mode-card__when">
                <p className="mode-card__when-label">Recommandé pour</p>
                <p className="mode-card__when-text">Sous-faces irrégulières, dalles encombrées de réseaux (gaines, conduits, canalisations), vides sanitaires accessibles. Bâtiments industriels, logistiques et tertiaires.</p>
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
                Des panneaux isolants rigides (polystyrène extrudé, polyuréthane, laine de roche
                haute densité) sont fixés mécaniquement en sous-face — solution esthétique et
                ultra-performante pour les locaux techniques accessibles.
              </p>

              <div className="mode-card__features">
                {[
                  ["Performance maximale", "Conductivité thermique faible — atteint des résistances R élevées avec une épaisseur réduite."],
                  ["Finition propre", "Sous-face plane, esthétique, compatible avec un local technique ou un parking accessible aux usagers."],
                  ["Pose maîtrisée", "Épaisseur visuellement vérifiable, joints traités, pose rapide sur dalle plane."],
                ].map(([title, desc]) => (
                  <div key={title} className="mode-feat">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    <div><strong>{title}</strong><span>{desc}</span></div>
                  </div>
                ))}
              </div>

              <div className="mode-card__when">
                <p className="mode-card__when-label">Recommandé pour</p>
                <p className="mode-card__when-text">Parkings souterrains, locaux techniques accessibles au public, sous-faces planes et dégagées, bâtiments où l&apos;esthétique du dessous compte.</p>
              </div>
            </div>
          </div>

          <div className="modes__compare fade-in">
            <h3 className="modes__compare-title">Comparatif synthétique des deux techniques</h3>
            <table className="compare-table">
              <thead>
                <tr><th>Critère</th><th>Flocage projeté</th><th>Panneaux rigides</th></tr>
              </thead>
              <tbody>
                {[
                  ["Sous-face irrégulière", "Excellent — épouse le support", "Difficile — ajustements nombreux"],
                  ["Passages de réseaux", "Couvre sans démontage", "Nécessite découpes et ajustements"],
                  ["Esthétique du dessous", "Aspect texturé, finition mate", "Sous-face plane et propre"],
                  ["Performance R / épaisseur", "Bonne (laine projetée)", "Excellente (XPS, PUR)"],
                  ["Performance acoustique", "Forte atténuation", "Moyenne — variable selon matériau"],
                  ["Accessibilité requise", "Suffisante pour la lance", "Pose mécanique sur dalle plane"],
                  ["Fiche CEE applicable", "BAT-EN-103", "BAT-EN-103"],
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
              un <em>chantier d&apos;isolation des planchers bas</em>&nbsp;?
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Que ce soit en flocage ou en panneaux, la mise en œuvre suit une méthodologie rigoureuse — conforme au DTU et aux exigences de la fiche CEE BAT-EN-103 — pour garantir la performance dans le temps.
            </p>
          </div>

          <div className="how-steps fade-in">
            {[
              ["01", "Diagnostic & relevé", "Audit complet de la sous-face : état du support, accessibilité, repérage des réseaux, identification des zones de déperdition et de la technique la plus adaptée."],
              ["02", "Étude & dimensionnement", "Calcul de la résistance thermique cible (R ≥ 3 m²·K/W), choix du matériau, détermination de l'épaisseur, montage du dossier de financement CEE."],
              ["03", "Mise en œuvre", "Intervention de nos équipes certifiées RGE — flocage projeté ou pose mécanique des panneaux. Protection des réseaux, traitement des points singuliers, contrôle d'épaisseur."],
              ["04", "Réception & clôture", "Vérification de l'épaisseur posée, photos de chantier, PV de fin de travaux. Dépôt et suivi du dossier CEE jusqu'au versement effectif de la prime."],
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
              Une isolation des planchers bas conforme aux exigences CEE produit des effets mesurables dès la première saison — sur la facture, sur le confort, sur la valeur du bâtiment.
            </p>
          </div>

          <div className="benefits__grid">
            {[
              { value: "–7 à 10 %", title: "Réduction de la facture de chauffage", text: "En traitant le pont thermique du dessous, l'isolation des planchers bas supprime un poste de perte invisible mais constant — l'un des meilleurs rapports performance/investissement du marché.", disc: "* Estimation variable selon l'état initial, la zone climatique et le niveau d'isolation posé." },
              { value: "R ≥ 3", title: "Performance thermique CEE", text: "La fiche BAT-EN-103 impose une résistance thermique minimale de 3 m²·K/W — gage d'une isolation réellement performante, durable, et conforme aux standards nationaux.", disc: "* Résistance thermique minimale exigée par la fiche BAT-EN-103 pour les bâtiments tertiaires." },
              { value: "+ confort", title: "Disparition de l'effet de paroi froide", text: "La sensation de froid au sol disparaît. Confort thermique homogène, ressenti amélioré dès l'entrée dans le local, productivité et bien-être en hausse." },
              { value: "1 à 3 ans", title: "Retour sur investissement rapide", text: "Combinée à la prime CEE, l'opération présente un retour sur investissement généralement rapide — parmi les meilleurs de tous les travaux d'efficacité énergétique.", disc: "* Délai indicatif variable selon la surface, le mode de chauffage et le niveau de prime CEE obtenu." },
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
            <p className="section-label">Applications tertiaires</p>
            <h2 className="section-title">
              Quels bâtiments sont<br />
              <em>concernés</em>&nbsp;?
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              La fiche CEE BAT-EN-103 couvre l&apos;ensemble des bâtiments tertiaires — publics ou privés — disposant d&apos;un plancher bas au-dessus d&apos;un vide sanitaire, d&apos;un parking ou d&apos;un local non chauffé.
            </p>
          </div>

          <div className="buildings__grid">
            {[
              ["Industrie & logistique", "Entrepôts, plateformes, ateliers, locaux industriels avec dalle sur vide sanitaire ou hourdis."],
              ["Bureaux & tertiaires", "Immeubles de bureaux, sièges sociaux, espaces de coworking — planchers au-dessus de parkings ou caves."],
              ["Commerces & boutiques", "Supermarchés, galeries marchandes, magasins — souvent posés sur parking ou vide sanitaire."],
              ["Santé & médico-social", "Cliniques, EHPAD, cabinets médicaux — exigences thermiques et hygiéniques élevées."],
              ["Hôtellerie & restauration", "Hôtels, restaurants, salles de réception — planchers techniques et caves voûtées."],
              ["Enseignement", "Écoles, collèges, lycées, universités — bâtiments anciens fréquemment sur vide sanitaire."],
              ["Collectivités publiques", "Mairies, médiathèques, équipements culturels, bâtiments administratifs."],
              ["Équipements sportifs", "Gymnases, salles polyvalentes, vestiaires sur dalle non isolée."],
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
            <strong>À noter :</strong> la fiche BAT-EN-103 s&apos;applique aux bâtiments tertiaires existants (≥ 2 ans). L&apos;éligibilité précise dépend du type de plancher bas (sur vide sanitaire, sur parking, sur local non chauffé), de la résistance thermique visée, de la conformité technique de la pose et du respect de la chronologie administrative. ECOPRORENOVE vérifie chaque point avant d&apos;engager les travaux.
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
                <em style={{ color: "#a8e296" }}>en partie financés</em><br />
                par les CEE
              </h2>
              <div className="divider divider--white"></div>
              <p className="section-intro section-intro--white" style={{ marginBottom: 32 }}>
                L&apos;isolation des planchers bas figure parmi les opérations standardisées du dispositif des Certificats d&apos;Économies d&apos;Énergie. Une fiche dédiée couvre l&apos;ensemble des cas tertiaires :{" "}
                <strong style={{ color: "#fff" }}>BAT-EN-103</strong>.
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
                  <span className="fiche-card__badge">100 % financé</span>
                  <span className="fiche-card__type">Reste à charge</span>
                </div>
                <p className="fiche-card__title">Zéro avance de trésorerie</p>
                <p className="fiche-card__text">Selon le contexte de marché et le profil de votre opération, le reste à charge peut être ramené à zéro. ECOPRORENOVE pilote l&apos;intégralité du montage administratif et déduit la prime directement de la facture.</p>
                <div className="fiche-card__meta">
                  <div className="fiche-card__meta-item"><strong>Avance</strong>Aucune</div>
                  <div className="fiche-card__meta-item"><strong>Dossier</strong>Géré par nos experts</div>
                  <div className="fiche-card__meta-item"><strong>Versement</strong>Suivi jusqu&apos;à clôture</div>
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
              ["01", "Visite technique & diagnostic", "Relevé du plancher bas, état de l'existant, accessibilité de la sous-face, identification des points singuliers et de la technique la plus adaptée (flocage ou panneaux)."],
              ["02", "Étude thermique & dimensionnement", "Calcul de la résistance thermique cible (R ≥ 3 m²·K/W), choix du matériau, détermination de l'épaisseur nécessaire pour satisfaire aux exigences de la fiche BAT-EN-103."],
              ["03", "Proposition chiffrée & éligibilité CEE", "Devis détaillé, estimation de la prime CEE, identification du périmètre éligible et calendrier prévisionnel du chantier."],
              ["04", "Montage du dossier administratif", "Engagement du dossier CEE avant travaux, constitution des pièces techniques, respect strict de la chronologie imposée par le dispositif."],
              ["05", "Réalisation du chantier", "Intervention par nos équipes certifiées RGE, dans le respect du DTU et des règles de l'art. Protection des réseaux, des occupants en surface, chantier propre."],
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
              Isoler le plancher bas, c&apos;est traiter le pont thermique du dessous.<br />
              Le reste, c&apos;est de la méthode.
            </h2>
            <p className="value-banner__subtitle">
              Bon diagnostic, bonne technique (flocage ou panneaux), bonne résistance thermique, bon dossier CEE. ECOPRORENOVE assemble les quatre — sur chaque projet, pour chaque bâtiment.
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
                { q: "Qu'appelle-t-on exactement un « plancher bas » ?", a: "Le plancher bas désigne le plancher du rez-de-chaussée — ou plus généralement le plancher situé au-dessus d'un volume non chauffé : vide sanitaire, parking, cave voûtée, local technique, ou tout local intérieur non chauffé. C'est la frontière thermique entre votre bâtiment chauffé et un volume froid en dessous. Sans isolation, c'est une voie de fuite directe pour vos calories." },
                { q: "Quelle est la différence entre flocage projeté et panneaux rigides ?", a: "Le flocage projeté consiste à projeter mécaniquement une laine minérale (verre ou roche) en sous-face de la dalle. Il est idéal pour les sous-faces irrégulières et les zones encombrées de réseaux, car il épouse parfaitement le support sans démontage. Les panneaux rigides (polystyrène extrudé, polyuréthane, laine de roche haute densité) se fixent mécaniquement sur dalle plane — solution plus esthétique, idéale pour parkings accessibles ou locaux techniques où l'aspect du dessous compte. Les deux techniques atteignent les mêmes niveaux de performance thermique, mais le choix dépend de la configuration réelle du bâtiment." },
                { q: "Quelle résistance thermique minimale pour être éligible aux CEE ?", a: "Pour l'isolation d'un plancher bas dans le tertiaire (fiche BAT-EN-103), la résistance thermique R de l'isolant mis en œuvre doit être supérieure ou égale à 3 m²·K/W. Nous vérifions systématiquement le seuil applicable à votre projet lors de l'étude préalable — et l'épaisseur d'isolant à poser est calculée en conséquence du matériau retenu et de la cible de performance." },
                { q: "Mon bâtiment est-il éligible à la fiche BAT-EN-103 ?", a: "La fiche concerne les bâtiments du secteur tertiaire — publics ou privés — existants depuis au moins 2 ans, dont une partie est chauffée et dont le plancher bas se situe au-dessus d'un vide sanitaire, d'un parking ou d'un local non chauffé. Cela couvre une très large majorité de bureaux, commerces, établissements d'enseignement, hôtels, établissements de santé, bâtiments de la collectivité, locaux logistiques ou équipements sportifs. ECOPRORENOVE identifie les conditions applicables à votre situation lors de la visite technique." },
                { q: "Le chantier perturbe-t-il l'activité dans le bâtiment ?", a: "Dans la grande majorité des cas, non. La pose s'effectue en sous-face — depuis le vide sanitaire, le parking ou le local situé en dessous — et ne nécessite généralement aucun arrêt de l'activité en surface. Le flocage est rapide (plusieurs centaines de m² par jour). La pose de panneaux est également peu intrusive. Nous adaptons systématiquement le planning à vos contraintes (intervention de nuit, week-end, vacances scolaires, etc.)." },
                { q: "Quels matériaux isolants sont utilisés ?", a: "Pour le flocage, nous utilisons principalement la laine de verre projetée ou la laine de roche projetée. Pour les panneaux rigides, le choix dépend de la performance et de la finition recherchées : polystyrène extrudé (XPS) pour le rapport performance/coût, polyuréthane (PUR/PIR) pour la performance thermique maximale à épaisseur réduite, laine de roche haute densité pour les exigences acoustiques et coupe-feu. Tous nos matériaux sont certifiés ACERMI et conformes aux exigences des fiches CEE." },
                { q: "Quel est le montant de la prime CEE pour mon projet ?", a: "La prime CEE est proportionnelle à la surface isolée, à la zone climatique du bâtiment et au type d'usage. Le montant varie également selon les obligés et les bonifications en vigueur à la date d'engagement du dossier. Nous vous communiquons une estimation précise dès la remise du devis, avant tout engagement. Pour connaître le montant applicable à votre projet, la solution la plus rapide est de demander une étude gratuite via le formulaire en bas de page." },
                { q: "Faut-il engager le dossier CEE avant le début des travaux ?", a: (<>Oui — et c&apos;est un point critique. Le dispositif CEE impose impérativement que le dossier soit engagé <strong>avant</strong> le début des travaux, avec une signature de devis postérieure à la date d&apos;engagement auprès de l&apos;obligé. Un chantier démarré avant cette étape devient inéligible, sans possibilité de rattrapage. C&apos;est précisément pour éviter ce type d&apos;erreur que nous pilotons chaque dossier en chronologie stricte.</>) },
                { q: "Combien de temps dure un chantier d'isolation des planchers bas ?", a: "Cela dépend de la surface, de l'accessibilité et de la technique retenue. À titre indicatif : pour un flocage, plusieurs centaines de mètres carrés sont traités en une journée. Pour des panneaux, le rythme est légèrement inférieur mais reste très productif. Sur des bâtiments de grande surface, le chantier peut s'étendre sur plusieurs jours, avec des phases de préparation, de pose et de réception. Le planning est toujours calé sur vos contraintes d'activité." },
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
              Sous votre dalle, l&apos;air froid<br />
              s&apos;installe <em>en ce moment même.</em>
            </h2>
            <p className="cta-final__subtitle">
              Parlons de votre projet. Nous évaluons l&apos;accessibilité du dessous, la technique adaptée, le potentiel d&apos;économies et la prime CEE mobilisable — sans engagement.
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
              Que vous ayez un projet précis ou que vous souhaitiez simplement savoir si votre bâtiment est concerné par la fiche BAT-EN-103, nous sommes disponibles pour répondre à vos questions et vous donner une première orientation claire.
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

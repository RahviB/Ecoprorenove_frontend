import type { Metadata } from "next";
import Image from "next/image";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ContactForm from "@/components/contact/ContactForm";
import Faq from "@/components/Faq";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ScrollNav from "@/components/ScrollNav";
import RelatedSolutions from "@/components/RelatedSolutions";

export const metadata: Metadata = {
  title: "Isolation toiture sous rampants — Airflex 30 (BAT-EN-106)",
  description:
    "Barrière thermo-réfléchissante Airflex 30 sous toiture métallique. Jusqu'à −6 °C ressentis, charge de climatisation réduite. Fiche CEE BAT-EN-106 (DOM).",
  alternates: { canonical: "/isolation-toiture-rampants" },
  openGraph: {
    url: "/isolation-toiture-rampants",
    title: "Isolation toiture sous rampants — ECOPRORENOVE",
    description:
      "Airflex 30 sous tôle, sans dépose de couverture. Fiche CEE BAT-EN-106.",
  },
};

export default function IsolationToitureRampantsPage() {
  return (
    <div className="page-service solution-template page-toiture">
      <ServiceJsonLd
        name="Isolation toiture sous rampants — Airflex 30"
        description="Barrière thermo-réfléchissante Airflex 30 sous toiture métallique. Pose RGE, fiche CEE BAT-EN-106."
        url="/isolation-toiture-rampants"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Isolation toiture sous rampants", url: "/isolation-toiture-rampants" },
        ]}
      />
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__content fade-in">
              <h1 className="hero__title hero__title--t1">
                <span className="hero__title-eyebrow">Sous une toiture métallique,</span>
                <span className="hero__title-anchor">Réduisez la chaleur</span>
                <span className="hero__title-italic">sans déposer la toiture.</span>
              </h1>

              <p className="hero__stat-line">
                Jusqu&apos;à <strong>−6&thinsp;°C</strong> ressentis sous toiture
              </p>

              <p className="hero__subtitle">
                L&apos;Airflex 30 d&apos;ATI&nbsp;Isolation crée une barrière thermo-réfléchissante
                directement sous la tôle. Une solution rapide, sans perte de volume utile,
                éligible au dispositif CEE BAT-EN-106.
              </p>

              <div className="hero__actions">
                <a href="#contact" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  Demander un audit gratuit
                </a>
                <a href="#airflex" className="btn btn--secondary">Découvrir l&apos;Airflex 30</a>
              </div>
            </div>

            <div className="hero__visual fade-in delay-3">
              <Image
                src="/images/isolation-toiture-rampants.webp"
                alt="Pose Airflex 30 en sous-face d'une toiture métallique"
                width={1400}
                height={1086}
                className="hero__img"
                priority
              />
              <div className="hero__bubble hero__bubble--temp">
                <strong>−6 °C</strong>
                <small>ressentis<br />sous toiture</small>
              </div>
              <div className="hero__bubble hero__bubble--life">
                <strong>30 ans</strong>
                <small>durée de vie<br />conventionnelle</small>
              </div>
              <div className="hero__bubble hero__bubble--cee">
                <strong>CEE</strong>
                <small>BAT-EN-106</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollNav
        sections={[
          { id: "probleme", label: "Le problème" },
          { id: "airflex", label: "Airflex 30" },
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
              "R ≥ 1,2 m²·K/W — NF EN ISO 22097",
              "Pose sous tôle, sans dépose de toiture",
              "Durée de vie conventionnelle 30 ans",
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
              <p className="loss-schema__title">Que devient le rayonnement solaire sous une tôle métallique&nbsp;?</p>
              <div className="loss-building">
                <div className="loss-roof">
                  <span className="loss-roof__label">Absorption par la tôle</span>
                  <span className="loss-roof__pct">jusqu&apos;à 90 %</span>
                </div>
                <div className="loss-arrows">
                  {[0, 1, 2, 3].map((i) => (
                    <span key={i} className="loss-arrow" style={{ transform: "rotate(180deg)" }}>↑</span>
                  ))}
                </div>
                <div className="loss-interior">
                  <div className="loss-interior__text">
                    Intérieur non isolé
                    <small>Rayonnement réémis vers les occupants</small>
                  </div>
                </div>
              </div>
              <div className="loss-others">
                {[
                  ["+40 °C", "Sous tôle en été"],
                  ["−6 °C", "Avec Airflex 30*"],
                  ["95 %", "IR bloqué"],
                ].map(([pct, name]) => (
                  <div key={name} className="loss-others__item">
                    <div className="loss-others__pct">{pct}</div>
                    <div className="loss-others__name">{name}</div>
                  </div>
                ))}
              </div>
              <p className="loss-schema__caption">* Données issues de relevés terrain et documentation ATI Isolation — résultats variables selon configuration</p>
            </div>

            <div className="problem__content fade-in delay-2">
              <p className="section-label">Le problème thermique sous tôle</p>
              <h2 className="section-title">
                Une toiture métallique<br />
                sans isolation&nbsp;:<br />
                <em>un four en plein été.</em>
              </h2>
              <div className="divider"></div>
              <p className="section-intro">
                La tôle absorbe le rayonnement solaire et le réémet sous forme de chaleur —
                directement vers l&apos;intérieur. Sans barrière thermique, les occupants, les
                marchandises et les équipements en subissent les effets toute la journée. Et plus la
                climatisation tourne, plus la facture grimpe.
              </p>

              <div className="problem__list">
                {[
                  ["Rayonnement infrarouge non bloqué", "La tôle absorbe jusqu'à 90 % du rayonnement solaire et le réémet sous forme d'infrarouge vers l'intérieur. Sans isolant réfléchissant, rien n'arrête ce flux — c'est une source de chaleur permanente en façade intérieure du toit."],
                  ["Climatisation en surrégime permanent", "Pour compenser la chaleur rayonnée, les systèmes tournent à plein régime. Consommation électrique élevée, usure prématurée du matériel, coûts d'exploitation qui dérivent — une dépense qu'une barrière thermique bien posée rend évitable."],
                  ["Inconfort et perte de productivité", "Locaux en surchauffe, zones inutilisables en milieu de journée, conditions de travail dégradées. C'est un problème structurel que la climatisation seule ne résout pas — elle déplace la charge, elle ne règle pas la source."],
                ].map(([t, p]) => (
                  <div key={t} className="problem-item">
                    <div className="problem-item__icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="4"/>
                        <line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/>
                        <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/>
                        <line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/>
                      </svg>
                    </div>
                    <div>
                      <p className="problem-item__title">{t}</p>
                      <p className="problem-item__desc">{p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUIT — Airflex 30 */}
      <section className="modes" id="airflex">
        <div className="container">
          <div className="modes__header fade-in">
            <p className="section-label">Le produit que nous posons</p>
            <h2 className="section-title">
              L&apos;Airflex 30&nbsp;:<br />
              une <em>barrière thermo-réfléchissante</em> conçue<br />
              pour la tôle en climat chaud
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Développé par ATI Isolation et déployé sur des milliers de m² en France
              d&apos;outre-mer, l&apos;Airflex 30 est un complexe multicouche mince haute
              performance, pensé pour bloquer le rayonnement avant qu&apos;il n&apos;entre dans le
              bâtiment.
            </p>
          </div>

          <div className="modes__grid">
            <div className="mode-card fade-in">
              <div className="mode-card__header">
                <div className="mode-card__icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="5" width="20" height="3"/>
                    <rect x="2" y="10" width="20" height="4"/>
                    <rect x="2" y="16" width="20" height="3"/>
                  </svg>
                </div>
                <div>
                  <span className="mode-card__tag">Composition</span>
                  <h3 className="mode-card__title">Anatomie du complexe</h3>
                </div>
              </div>
              <p className="mode-card__lead">
                L&apos;Airflex 30 combine plusieurs couches fonctionnelles sur une faible épaisseur.
                Chaque strate joue un rôle précis dans la chaîne thermique, du rayonnement solaire
                jusqu&apos;à l&apos;ambiance intérieure.
              </p>
              <div className="mode-card__features">
                {[
                  ["Films aluminium basse émissivité", "Réfléchissent le rayonnement infrarouge et réduisent drastiquement le transfert radiatif vers l'intérieur."],
                  ["Âme fibreuse multicouche", "Couche d'absorption qui complète le blocage radiatif par une résistance conductive."],
                  ["Parement de finition", "Film aluminisé côté intérieur, propre et esthétique, conçu pour rester visible en sous-face."],
                ].map(([t, p]) => (
                  <div key={t} className="mode-feat">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#49a739" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    <div><strong>{t}</strong><span>{p}</span></div>
                  </div>
                ))}
              </div>
              <div className="mode-card__when">
                <p className="mode-card__when-label">Épaisseur totale</p>
                <p className="mode-card__when-text">13 mm — un gain d&apos;espace déterminant en sous-toiture, là où chaque centimètre compte pour préserver la hauteur sous plafond et les passages de réseaux.</p>
              </div>
            </div>

            <div className="mode-card mode-card--roll fade-in delay-2">
              <div className="mode-card__header">
                <div className="mode-card__icon">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="12 2 15 8 22 9 17 14 18 21 12 18 6 21 7 14 2 9 9 8 12 2"/>
                  </svg>
                </div>
                <div>
                  <span className="mode-card__tag">Performance</span>
                  <h3 className="mode-card__title">Pourquoi ce produit</h3>
                </div>
              </div>
              <p className="mode-card__lead">
                Conçu spécifiquement pour les toitures métalliques en zone tropicale et subtropicale,
                l&apos;Airflex 30 coche l&apos;ensemble des critères d&apos;une barrière thermique
                efficace en climat chaud.
              </p>
              <div className="mode-card__features">
                {[
                  ["Conçu pour le climat tropical", "Testé et déployé à la Réunion, aux Antilles, en Guyane — sur le terrain, pas en laboratoire seul."],
                  ["Faible épaisseur, haute performance", "13 mm seulement pour une barrière radiative comparable à plusieurs dizaines de cm d'isolant classique face au rayonnement."],
                  ["Compatible CEE BAT-EN-106", "Mise en œuvre conforme à la fiche tertiaire dédiée — primes mobilisables sur un chantier type."],
                ].map(([t, p]) => (
                  <div key={t} className="mode-feat">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    <div><strong>{t}</strong><span>{p}</span></div>
                  </div>
                ))}
              </div>
              <div className="mode-card__when">
                <p className="mode-card__when-label">Usage recommandé</p>
                <p className="mode-card__when-text">Toitures métalliques (bac acier, tôle ondulée) de bâtiments tertiaires, industriels, commerciaux ou agricoles — neuf ou rénovation sans dépose de couverture.</p>
              </div>
            </div>
          </div>

          {/* Avant / Après — chantier ZR Duparc */}
          <div className="fade-in">
            <BeforeAfterSlider
              beforeSrc="/assets/chantier-duparc-avant.jpeg"
              afterSrc="/assets/chantier-duparc-apres.jpg"
              beforeAlt="Toiture métallique non isolée — charpente nue sous tôle, avant pose de l'Airflex 30"
              afterAlt="Même toiture après pose de l'Airflex 30 — sous-face entièrement tapissée d'une barrière thermo-réfléchissante"
            />
          </div>
          <p className="ba-caption fade-in">
            <strong>Chantier ZR Duparc</strong> — pose de l&apos;Airflex 30 en sous-face de toiture métallique, sans dépose de la couverture existante.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works" id="fonctionnement">
        <div className="container">
          <div className="how-it-works__header fade-in">
            <p className="section-label">Déroulement d&apos;un chantier</p>
            <h2 className="section-title">
              Comment se déroule<br />
              la <em>pose de l&apos;Airflex 30</em>&nbsp;?
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              La mise en œuvre suit une méthodologie rigoureuse — conforme aux prescriptions du fabricant et aux exigences de la fiche CEE BAT-EN-106 — pour garantir la performance radiative dans la durée.
            </p>
          </div>
          <div className="how-steps fade-in">
            {[
              ["01", "Reconnaissance du support", "Relevé de la toiture métallique, repérage de la charpente, des pannes et des fixations existantes, identification des points singuliers (faîtage, rives, traversées, éclairements naturels)."],
              ["02", "Protection de l'activité en place", "Mise en place des accès de chantier, protection des équipements et zones d'exploitation sous la toiture, coordination avec la maîtrise d'ouvrage pour limiter l'impact sur l'exploitation."],
              ["03", "Pose de l'Airflex 30", "Déploiement du complexe en sous-face de la toiture, fixation mécanique sur pannes ou ossature, recouvrement et jonction des lés pour assurer une continuité radiative parfaite, sans rupture réfléchissante."],
              ["04", "Contrôle & réception", "Vérification de la continuité des recouvrements, du soin apporté au traitement des points singuliers, reportage photographique du chantier, remise du PV de fin de travaux pour le dossier CEE."],
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
              barrière thermo-réfléchissante <em>bien posée</em>
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Une barrière Airflex 30 correctement déployée produit des effets mesurables dès les
              premières semaines — sur la température ressentie, sur la consommation de
              climatisation, sur la valeur d&apos;usage du bâtiment.
            </p>
          </div>

          <div className="benefits__grid">
            {[
              { v: "jusqu'à −6 °C", t: "Température ressentie sous toiture", p: "En blocant la réémission infrarouge de la tôle vers l'intérieur, la barrière fait chuter la température ressentie dans les volumes sous toiture aux heures les plus chaudes.", d: "* Gain observé sur relevés terrain — variable selon exposition, configuration et période." },
              { v: "climatisation ↓", t: "Charge de climatisation réduite", p: "Moins de chaleur rayonnée vers l'intérieur, c'est un appel de climatisation réduit tout au long de la journée — et donc une consommation électrique et des coûts d'exploitation allégés.", d: "* Économies variables selon le profil d'usage, la puissance installée et les habitudes d'exploitation." },
              { v: "+ confort", t: "Conditions d'occupation stabilisées", p: "Zones sous toiture redevenues utilisables en milieu de journée, atmosphère plus homogène, baisse visible de la sensation d'étouffement — l'ambiance sous toiture change de nature." },
              { v: "BAT-EN-106", t: "Prime CEE mobilisable", p: "La pose conforme à la fiche tertiaire BAT-EN-106 ouvre droit à une prime CEE qui vient réduire le reste à charge du chantier — un levier de financement à part entière.", d: "* Montant dépendant du volume de CEE généré, de l'obligé retenu et du cours en vigueur." },
              { v: "sans dépose", t: "Chantier non invasif", p: "La pose se fait en sous-face, sans dépose de la couverture existante. L'étanchéité de la toiture reste intacte, l'activité sous le bâtiment continue sans interruption majeure." },
              { v: "valeur ↑", t: "Valeur d'usage du bâtiment", p: "Un bâtiment dont les volumes sous toiture redeviennent pleinement exploitables voit sa valeur locative et d'usage progresser — un argument concret lors d'une relocation ou d'une cession." },
            ].map((b, i) => (
              <div key={b.t} className={`benefit-card fade-in delay-${(i % 3) + 1}`}>
                <div className="benefit-card__icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="12" y1="20" x2="12" y2="10"/>
                    <line x1="18" y1="20" x2="18" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="16"/>
                  </svg>
                </div>
                <div className="benefit-card__value">{b.v}</div>
                <h3 className="benefit-card__title">{b.t}</h3>
                <p className="benefit-card__text">{b.p}</p>
                {b.d && <p className="benefit-card__disclaimer">{b.d}</p>}
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
              L&apos;Airflex 30 s&apos;adresse à tous les bâtiments tertiaires, industriels ou commerciaux dotés d&apos;une toiture métallique en climat chaud — publics ou privés, grandes ou petites surfaces.
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
            ].map(([n, d], i) => (
              <div key={n} className={`building-card fade-in delay-${(i % 4) + 1}`}>
                <div className="building-card__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <line x1="3" y1="9" x2="21" y2="9"/>
                    <line x1="9" y1="21" x2="9" y2="9"/>
                  </svg>
                </div>
                <h3 className="building-card__name">{n}</h3>
                <p className="building-card__desc">{d}</p>
              </div>
            ))}
          </div>

          <div className="buildings__notice fade-in">
            <strong>À noter :</strong> la fiche CEE BAT-EN-106 s&apos;applique aux bâtiments tertiaires existants (≥ 2 ans) en France d&apos;outre-mer. L&apos;éligibilité précise dépend de la configuration de la toiture, de la conformité technique de la pose et du respect strict de la chronologie administrative. ECOPRORENOVE vérifie chaque point avant d&apos;engager les travaux.
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
                Votre toiture isolée,<br />
                <em style={{ color: "#a8e296" }}>en partie financée</em><br />
                par les CEE
              </h2>
              <div className="divider divider--white"></div>
              <p className="section-intro section-intro--white" style={{ marginBottom: 32 }}>
                La pose d&apos;une barrière thermo-réfléchissante sous toiture métallique est valorisée dans le dispositif des Certificats d&apos;Économies d&apos;Énergie. La fiche tertiaire dédiée — <strong style={{ color: "#fff" }}>BAT-EN-106</strong> — couvre les opérations d&apos;isolation de toitures en France d&apos;outre-mer.
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
                  <span className="fiche-card__badge">BAT-EN-106</span>
                  <span className="fiche-card__type">Fiche CEE · Tertiaire DOM</span>
                </div>
                <p className="fiche-card__title">Isolation thermique de toiture en France d&apos;outre-mer</p>
                <p className="fiche-card__text">Opération standardisée pour la mise en œuvre d&apos;un système d&apos;isolation thermique de toiture dans les bâtiments tertiaires existants situés en France d&apos;outre-mer — régions ciblées pour leur climat chaud.</p>
                <div className="fiche-card__meta">
                  <div className="fiche-card__meta-item"><strong>Cible</strong>Toitures métalliques</div>
                  <div className="fiche-card__meta-item"><strong>Produit</strong>Airflex 30 compatible</div>
                  <div className="fiche-card__meta-item"><strong>Certification</strong>Pose RGE exigée</div>
                </div>
              </div>

              <div className="fiche-card">
                <div className="fiche-card__head">
                  <span className="fiche-card__badge">Prime CEE</span>
                  <span className="fiche-card__type">Financement · principe</span>
                </div>
                <p className="fiche-card__title">Un levier de financement concret sur le chantier</p>
                <p className="fiche-card__text">Le volume de CEE généré est fonction de la surface de toiture isolée, de la zone climatique et du cours en vigueur. La prime est versée directement sur le chantier, en déduction du reste à charge.</p>
                <div className="fiche-card__meta">
                  <div className="fiche-card__meta-item"><strong>Versée par</strong>Obligé (énergéticien)</div>
                  <div className="fiche-card__meta-item"><strong>Moment</strong>Après fin de chantier</div>
                  <div className="fiche-card__meta-item"><strong>Condition clé</strong>Dossier engagé avant travaux</div>
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
              ["01", "Visite technique & diagnostic", "Relevé de la toiture métallique, état de la couverture et de la charpente, identification des points singuliers et des contraintes d'exploitation du bâtiment."],
              ["02", "Étude technique & dimensionnement", "Définition du système Airflex 30 adapté, métré précis, planification des recouvrements et du traitement des points singuliers conformément aux prescriptions du fabricant."],
              ["03", "Proposition chiffrée & éligibilité CEE", "Devis détaillé, estimation de la prime CEE au titre de la fiche BAT-EN-106 et calendrier prévisionnel du chantier — tout est posé noir sur blanc avant engagement."],
              ["04", "Montage du dossier administratif", "Engagement du dossier CEE avant travaux, constitution des pièces techniques, respect strict de la chronologie imposée par le dispositif."],
              ["05", "Réalisation du chantier", "Pose par nos équipes certifiées RGE, dans le respect des prescriptions ATI Isolation et des règles de l'art. Coordination avec l'exploitant pour limiter l'impact sur l'activité."],
              ["06", "Réception & clôture CEE", "PV de réception, attestation de fin de travaux, reportage photographique et pièces pour le dossier CEE. Suivi jusqu'au versement effectif de la prime."],
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
              Bloquer le rayonnement avant qu&apos;il n&apos;entre, c&apos;est agir à la source.<br />
              Le reste, c&apos;est de la méthode.
            </h2>
            <p className="value-banner__subtitle">
              Bon diagnostic, bon produit (Airflex 30), bonne pose, bon dossier CEE BAT-EN-106. ECOPRORENOVE assemble les quatre — sur chaque chantier, pour chaque bâtiment à toiture métallique en climat chaud.
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
              savoir sur l&apos;<em>isolation thermoréflectif sous tuile</em>
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Des réponses claires, techniques et directement utiles pour avancer sur votre projet.
            </p>
          </div>
          <div className="faq__list">
            <Faq
              items={[
                { q: "En quoi l'Airflex 30 diffère-t-il d'une laine minérale classique ?", a: "Une laine minérale agit principalement par conduction — elle ralentit la transmission de la chaleur à travers une épaisseur d'isolant. L'Airflex 30 agit d'abord par rayonnement : ses films aluminium basse émissivité réfléchissent les infrarouges émis par la tôle chauffée au soleil, avant qu'ils ne pénètrent dans le bâtiment. Sous une toiture métallique en climat chaud, c'est le rayonnement qui porte l'essentiel de la charge thermique — l'Airflex 30 s'attaque donc au bon vecteur, sur une faible épaisseur (13 mm)." },
                { q: "Faut-il déposer la toiture existante pour poser l'Airflex 30 ?", a: "Non. C'est l'un des avantages décisifs de la solution : l'Airflex 30 se pose en sous-face de toiture, à l'intérieur du bâtiment, sans toucher à la couverture. L'étanchéité existante reste intacte, il n'y a pas d'exposition aux intempéries, et l'activité sous le bâtiment peut généralement se poursuivre avec un aménagement minimal. Cela simplifie drastiquement la logistique et le coût global du projet par rapport à une dépose/repose de couverture." },
                { q: "Mon bâtiment tertiaire outre-mer est-il éligible à la fiche BAT-EN-106 ?", a: "La fiche BAT-EN-106 cible l'isolation thermique de toitures en bâtiments tertiaires existants situés en France d'outre-mer — où le climat chaud justifie un dispositif spécifique. Sont concernés une très large majorité de bureaux, commerces, établissements d'enseignement, hôtels, établissements de santé, bâtiments des collectivités, locaux associatifs ou équipements sportifs, dès lors qu'ils existent depuis au moins 2 ans. ECOPRORENOVE vérifie l'éligibilité précise de votre bâtiment dès la visite technique." },
                { q: "Le chantier perturbe-t-il l'activité du bâtiment ?", a: "Dans la grande majorité des cas, l'impact est contenu. La pose se fait en sous-face de toiture, souvent dans des volumes peu ou pas occupés. Nous coordonnons le planning avec votre exploitation : intervention de nuit, week-end, ou zones traitées par tranches. L'absence de dépose de couverture évite toute exposition aux intempéries et simplifie considérablement la logistique." },
                { q: "Quelle durabilité attendre de l'Airflex 30 une fois posé ?", a: "Posé en sous-face, à l'abri des UV directs et des intempéries, l'Airflex 30 conserve ses propriétés radiatives sur plusieurs décennies. La durabilité effective dépend toujours des conditions de mise en œuvre et de l'environnement du bâtiment, mais le produit est conçu pour une tenue longue sans maintenance spécifique. ECOPRORENOVE vous remet la documentation du fabricant avec les préconisations complètes." },
                { q: "Quel est le montant de la prime CEE pour mon projet ?", a: "La prime CEE au titre de la fiche BAT-EN-106 dépend de la surface de toiture traitée, de la zone climatique et du cours en vigueur au moment de l'engagement du dossier. Le montant varie également selon l'obligé retenu et les bonifications applicables. Nous communiquons une estimation précise dès la remise du devis, avant tout engagement. La façon la plus rapide d'obtenir un chiffre pour votre bâtiment est de demander une étude gratuite via le formulaire en bas de page." },
                { q: "Faut-il engager le dossier CEE avant le début des travaux ?", a: (<>Oui — et c&apos;est un point critique. Le dispositif CEE impose impérativement que le dossier soit engagé <strong>avant</strong> le début des travaux, avec une signature de devis postérieure à la date d&apos;engagement auprès de l&apos;obligé. Un chantier démarré avant cette étape devient inéligible, sans possibilité de rattrapage. C&apos;est précisément pour éviter ce type d&apos;erreur que nous pilotons chaque dossier en chronologie stricte.</>) },
                { q: "Quelle est la durée d'un chantier type sous toiture métallique ?", a: "Cela dépend de la surface, de la hauteur sous toiture et de l'accessibilité. À titre indicatif, la pose de l'Airflex 30 avance rapidement grâce à la légèreté du produit et aux lais de grande largeur. Sur un bâtiment de plusieurs milliers de m², le chantier est généralement découpé en zones successives pour lisser l'impact sur l'activité. Nous vous remettons un planning prévisionnel dès la phase d'étude." },
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
              Votre toiture rayonne<br />
              de la chaleur <em>en ce moment même.</em>
            </h2>
            <p className="cta-final__subtitle">
              Parlons de votre projet. Nous évaluons la configuration de votre toiture métallique, le dimensionnement Airflex 30, le potentiel de gain thermique et la prime CEE BAT-EN-106 mobilisable — sans engagement.
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
        items={["extracteur-air", "isolation-combles", "prime-cee"]}
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
            <h2 className="contact-info__title">Parlons de<br />votre toiture</h2>
            <div className="divider"></div>
            <p className="contact-info__text">
              Que vous ayez un projet précis ou que vous souhaitiez simplement savoir si votre bâtiment est concerné par la fiche CEE BAT-EN-106, nous sommes disponibles pour répondre à vos questions et vous donner une première orientation claire.
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
            <ContactForm source="isolation-toiture-rampants">
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="t-prenom">Prénom *</label>
                  <input className="form-input" type="text" id="t-prenom" name="prenom" placeholder="Votre prénom" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="t-nom">Nom *</label>
                  <input className="form-input" type="text" id="t-nom" name="nom" placeholder="Votre nom" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="t-societe">Société</label>
                  <input className="form-input" type="text" id="t-societe" name="societe" placeholder="Nom de votre société" />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="t-telephone">Téléphone *</label>
                  <input className="form-input" type="tel" id="t-telephone" name="telephone" placeholder="06 XX XX XX XX" required />
                </div>
                <div className="form-group form-group--full">
                  <label className="form-label" htmlFor="t-email">Email *</label>
                  <input className="form-input" type="email" id="t-email" name="email" placeholder="votre@email.fr" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="t-batiment">Type de bâtiment</label>
                  <select className="form-select" id="t-batiment" name="type_batiment" defaultValue="">
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
                  <label className="form-label" htmlFor="t-toiture">Type de toiture</label>
                  <select className="form-select" id="t-toiture" name="type_toiture" defaultValue="">
                    <option value="" disabled>Sélectionnez</option>
                    <option value="bac-acier">Bac acier</option>
                    <option value="tole-ondulee">Tôle ondulée</option>
                    <option value="panneau-sandwich">Panneau sandwich</option>
                    <option value="autre">Autre métallique</option>
                    <option value="nsp">Je ne sais pas</option>
                  </select>
                </div>
                <div className="form-group form-group--full">
                  <label className="form-label" htmlFor="t-surface">Surface approximative (m²)</label>
                  <input className="form-input" type="text" id="t-surface" name="surface" placeholder="Ex. 1 200 m²" />
                </div>
                <div className="form-group form-group--full">
                  <label className="form-label" htmlFor="t-message">Décrivez votre projet ou votre besoin</label>
                  <textarea className="form-textarea" id="t-message" name="message" placeholder="Type de couverture, surface approximative, hauteur sous toiture, contraintes d'activité, questions sur la prime CEE BAT-EN-106, etc." rows={4}></textarea>
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

import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/contact/ContactForm";
import Faq from "@/components/Faq";
import { ServiceJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";
import ScrollNav from "@/components/ScrollNav";
import RelatedSolutions from "@/components/RelatedSolutions";

export const metadata: Metadata = {
  title: "Pompe à chaleur air/eau tertiaire — BAT-TH-163 et Coup de pouce ×3",
  description:
    "Remplacez votre chaudière fioul ou gaz par une PAC air/eau en tertiaire. Fiche BAT-TH-163 et Coup de pouce : volume de CEE ×3. Étude et dossier CEE pilotés.",
  alternates: { canonical: "/pompe-a-chaleur-tertiaire" },
  openGraph: {
    url: "/pompe-a-chaleur-tertiaire",
    title: "Pompe à chaleur air/eau pour bâtiments tertiaires — ECOPRORENOVE",
    description:
      "Fiche BAT-TH-163 et Coup de pouce ×3 : un levier financier puissant pour la décarbonation du parc tertiaire. Étude, financement CEE, coordination technique et suivi du projet.",
  },
};

const IMG = "/images/pac-air-eau-tertiaire";

const CONDITIONS: Array<[string, string]> = [
  ["Un bâtiment tertiaire existant", "Le bâtiment appartient au secteur tertiaire, est réservé à une utilisation professionnelle et existe depuis plus de deux ans."],
  ["Une PAC qui assure le chauffage", "La pompe à chaleur assure le chauffage du bâtiment, seul ou associé à la production d’eau chaude sanitaire. Une installation dédiée uniquement à l’ECS n’est pas éligible."],
  ["Le réseau de chaleur étudié en priorité", "Le raccordement à un réseau de chaleur efficace est étudié en priorité. En cas d’impossibilité technique ou économique, un justificatif adapté est obtenu."],
  ["Le remplacement d’une chaudière fossile", "La pompe à chaleur air/eau remplace une chaudière existante fonctionnant au charbon, au fioul ou au gaz."],
  ["Une installation conforme et dimensionnée", "L’installation est réalisée par un professionnel et respecte les exigences de la fiche BAT-TH-163 : performances minimales et note de dimensionnement."],
  ["La dépose de l’ancienne chaudière", "L’ancienne chaudière est déposée. La facture précise le type d’équipement retiré ainsi que son énergie : charbon, fioul ou gaz."],
];

const COSTS = [
  {
    title: "Chaudière fioul",
    src: `${IMG}/chaudiere-fioul.webp`,
    alt: "Brûleur d’une chaudière fioul",
    width: 900,
    height: 675,
    rows: [["Rendement moyen", "≈ 85 %"], ["Consommation annuelle", "353 MWh"], ["Coût moyen du fioul", "120 €/MWh"]],
    cost: "42 360 €",
  },
  {
    title: "Chaudière gaz",
    src: `${IMG}/chaudiere-gaz.webp`,
    alt: "Chaudière gaz à condensation en chaufferie",
    width: 900,
    height: 675,
    rows: [["Rendement moyen", "≈ 90 %"], ["Consommation annuelle", "333 MWh"], ["Coût moyen du gaz", "80 €/MWh"]],
    cost: "26 640 €",
  },
  {
    title: "Pompe à chaleur collective",
    src: `${IMG}/pac-air-eau.webp`,
    alt: "Pompes à chaleur air/eau collectives",
    width: 900,
    height: 672,
    rows: [["COP moyen", "≈ 3"], ["Consommation électrique", "100 MWh"], ["Coût moyen de l’électricité", "180 €/MWh"]],
    cost: "18 000 €",
    best: true,
  },
];

const HYPOTHESES: Array<[string, string]> = [
  ["Zone climatique", "H1"],
  ["Usage", "Chauffage + ECS"],
  ["Performance", "126 % ≤ Etas < 175 %"],
  ["Surface chauffée", "2 000 m²"],
  ["Facteur activité « bureaux »", "1,2"],
  ["Facteur R", "1"],
  ["Prix des CEE", "0,0072 €/kWh cumac"],
];

const DOCS: Array<[string, string, string]> = [
  ["01", "Note de dimensionnement", "Elle précise la température de base (Tbase), les déperditions thermiques du bâtiment et la surface chauffée. Elle justifie le choix du matériel et garantit l’adéquation entre les besoins et la solution retenue."],
  ["02", "Devis signé", "Signé avant le démarrage effectif des travaux, ce document contractuel engage les deux parties et constitue la première pierre du dossier CEE. Il mentionne les caractéristiques techniques de la pompe à chaleur."],
  ["03", "Facture de fin de travaux", "Elle atteste de la réalisation effective de l’installation, conforme au devis initial, et mentionne précisément les équipements installés, leur référence et leurs caractéristiques principales."],
  ["04", "Justificatif Etas", "La fiche technique du fabricant, ou tout document officiel, atteste de l’efficacité énergétique saisonnière de la pompe à chaleur installée. Cette valeur détermine directement le volume de CEE généré."],
];

const TIMELINE = [
  "Étude d’éligibilité",
  "Offre CEE",
  "Dimensionnement",
  "Devis",
  "Travaux",
  "Facture et pièces techniques",
  "Contrôle administratif",
  "Clôture du dossier",
];

// Text-only so the same entries feed both the accordion and the FAQPage JSON-LD.
const FAQ = [
  {
    q: "Mon bâtiment tertiaire est-il éligible à la fiche BAT-TH-163 ?",
    a: "La fiche BAT-TH-163 concerne les bâtiments tertiaires existants — bureaux, commerces, santé, enseignement, hôtellerie-restauration et autres secteurs — réservés à un usage professionnel et existant depuis plus de deux ans. La pompe à chaleur air/eau doit assurer le chauffage, seul ou associé à l’eau chaude sanitaire ; une installation dédiée uniquement à l’ECS n’est pas éligible. L’installation est réalisée par un professionnel, respecte les performances minimales (Etas) et fait l’objet d’une étude de dimensionnement. ECOPRORENOVE vérifie ces conditions dès le premier échange.",
  },
  {
    q: "Qu’est-ce que le Coup de pouce ×3 et à quelles conditions s’applique-t-il ?",
    a: "Le Coup de pouce « Chauffage des bâtiments résidentiels collectifs et tertiaires » multiplie par 3 le volume de CEE lorsque la pompe à chaleur air/eau remplace une chaudière au charbon, au fioul ou au gaz. L’ancienne chaudière doit être déposée et la facture doit préciser le type d’équipement retiré et son énergie. Le raccordement à un réseau de chaleur efficace est étudié en priorité. Enfin, l’offre du signataire de la charte doit être acceptée avant la signature du devis.",
  },
  {
    q: "Quel montant de prime CEE puis-je espérer ?",
    a: "Le volume de CEE dépend de la zone climatique, de la performance de la pompe à chaleur, de la surface chauffée et du secteur d’activité du bâtiment. Sa valorisation dépend ensuite du prix des CEE et de l’offre commerciale du signataire de la charte Coup de pouce. L’exemple de cette page donne un ordre de grandeur pour des bureaux de 2 000 m². Le montant applicable à votre bâtiment est confirmé après étude et figure sur l’offre CEE, avant tout devis.",
  },
  {
    q: "Faut-il d’abord étudier un raccordement à un réseau de chaleur ?",
    a: "Oui. Pour bénéficier du Coup de pouce, le raccordement à un réseau de chaleur efficace doit être étudié en priorité. Si le raccordement est techniquement ou économiquement impossible, un justificatif adapté est obtenu et la pompe à chaleur air/eau devient la solution retenue. ECOPRORENOVE intègre cette vérification à l’étude d’éligibilité.",
  },
  {
    q: "Jusqu’à quand le dispositif est-il ouvert ?",
    a: "Les opérations doivent être engagées au plus tard le 31 décembre 2030 et achevées au plus tard le 31 décembre 2032. Compte tenu des études préalables, du dimensionnement de l’installation et de la vérification du raccordement à un réseau de chaleur, il est essentiel d’anticiper les projets.",
  },
  {
    q: "Qui réalise les travaux et qui reste mon interlocuteur ?",
    a: "France Global Energies est notre partenaire opérationnel sur la solution pompe à chaleur tertiaire : dimensionnement, réalisation et mise en service. ECOPRORENOVE reste votre interlocuteur unique et pilote l’ensemble du dispositif CEE, de l’étude d’éligibilité à la clôture du dossier.",
  },
  {
    q: "Quelles solutions de financement sont possibles ?",
    a: "La proposition financière peut être exprimée au comptant ou via un crédit-bail avec nos partenaires financiers Grenke, Realease Capital et Locam. La prime CEE, bonifiée par le Coup de pouce, vient réduire le reste à financer. ECOPRORENOVE vous accompagne dans le choix de la formule adaptée à votre projet.",
  },
];

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);

const PhoneIcon = ({ size = 18, stroke = "currentColor" }: { size?: number; stroke?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.63-.63a2 2 0 0 1 2.11-.45c.9.386 1.86.647 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const EuroIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 10h12"/><path d="M4 14h9"/><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"/></svg>
);

const BuildingIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth={size > 20 ? 2.2 : 2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
);

export default function PompeAChaleurTertiairePage() {
  return (
    <div className="page-service solution-template page-pac">
      <ServiceJsonLd
        name="Pompe à chaleur air/eau tertiaire"
        description="Remplacement d’une chaudière fioul ou gaz par une pompe à chaleur air/eau en bâtiment tertiaire. Fiche CEE BAT-TH-163 et Coup de pouce chauffage (volume de CEE ×3)."
        url="/pompe-a-chaleur-tertiaire"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Pompe à chaleur air/eau tertiaire", url: "/pompe-a-chaleur-tertiaire" },
        ]}
      />
      <FaqJsonLd items={FAQ} />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__content fade-in">
              <h1 className="hero__title hero__title--t1">
                <span className="hero__title-eyebrow">Tertiaire — Fiche CEE BAT-TH-163</span>
                <span className="hero__title-anchor">Pompe à chaleur air/eau</span>
                <span className="hero__title-italic">pour bâtiments tertiaires</span>
              </h1>

              <p className="hero__stat-line">
                Coup de pouce&nbsp;: volume de CEE <strong>×3</strong>
              </p>

              <p className="hero__subtitle">
                Remplacez votre chaudière fioul ou gaz par une pompe à chaleur air/eau. Avec la
                fiche BAT-TH-163 et le Coup de pouce chauffage, le volume de CEE est multiplié
                par&nbsp;3&nbsp;: un levier financier puissant pour la décarbonation de votre
                patrimoine. ECOPRORENOVE pilote l’étude, le financement CEE, la coordination
                technique et le suivi du projet.
              </p>

              <div className="hero__actions">
                <a href="#contact" className="btn btn--primary btn--lg">
                  <ArrowIcon />
                  Faire étudier mon bâtiment
                </a>
                <a href="#coup-de-pouce" className="btn btn--secondary">Comprendre le Coup de pouce</a>
              </div>
            </div>

            <div className="hero__visual fade-in delay-3">
              <Image
                src={`${IMG}/hero-pac-toiture.webp`}
                alt="Pompes à chaleur air/eau installées en toiture d’un bâtiment tertiaire"
                width={1600}
                height={1029}
                sizes="(max-width: 1024px) 100vw, 540px"
                className="hero__img"
                preload
              />
              <div className="hero__bubble hero__bubble--temp">
                <strong>×3</strong>
                <small>volume de CEE<br />Coup de pouce</small>
              </div>
              <div className="hero__bubble hero__bubble--life">
                <strong>2030</strong>
                <small>opérations engagées<br />au plus tard</small>
              </div>
              <div className="hero__bubble hero__bubble--cee">
                <strong>CEE</strong>
                <small>BAT-TH-163</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollNav
        sections={[
          { id: "pourquoi", label: "Pourquoi" },
          { id: "coup-de-pouce", label: "Coup de pouce" },
          { id: "comparatif", label: "Comparatif" },
          { id: "bat-th-163", label: "BAT-TH-163" },
          { id: "valorisation", label: "Valorisation" },
          { id: "dossier", label: "Dossier CEE" },
          { id: "accompagnement", label: "Accompagnement" },
          { id: "faq", label: "FAQ" },
          { id: "contact", label: "Contact" },
        ]}
      />

      {/* HERO BANDEAU — proof points */}
      <div className="hero-bandeau">
        <div className="container">
          <div className="hero-bandeau__inner">
            {[
              "Étude d’éligibilité sans engagement",
              "Offre CEE sécurisée avant le devis",
              "Interlocuteur unique de A à Z",
            ].map((t) => (
              <div key={t} className="hero-bandeau__item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* POURQUOI REMPLACER UNE CHAUDIÈRE FOSSILE */}
      <section className="why" id="pourquoi">
        <div className="container">
          <div className="why__inner">
            <div className="why__photo fade-in">
              <Image
                src={`${IMG}/immeuble-tertiaire.webp`}
                alt="Façade vitrée d’un immeuble de bureaux"
                width={1200}
                height={1023}
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <div className="why__photo-card">
                <strong>CO<sub>2</sub> ↓</strong>
                <span>Une pompe à chaleur air/eau diminue fortement les émissions liées au chauffage du bâtiment.</span>
              </div>
            </div>

            <div className="why__content fade-in delay-2">
              <p className="section-label">Pourquoi remplacer une chaudière fossile&nbsp;?</p>
              <h2 className="section-title">
                Décarboner le patrimoine,<br />
                <em>réduire les coûts d’exploitation.</em>
              </h2>
              <div className="divider"></div>
              <p className="section-intro">
                Au-delà de l’aspect financier, le remplacement d’une chaudière gaz ou fioul par une
                pompe à chaleur air/eau s’inscrit pleinement dans les objectifs de décarbonation du
                parc tertiaire français. Grâce à un rendement élevé, la PAC consomme beaucoup moins
                d’énergie finale.
              </p>

              <div className="why__list">
                <div className="why-item">
                  <div className="why-item__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/><path d="m12 12 0 9"/><path d="m9 18 3 3 3-3"/></svg>
                  </div>
                  <div>
                    <p className="why-item__title">Moins d’émissions de CO<sub>2</sub></p>
                    <p className="why-item__desc">La pompe à chaleur diminue significativement les émissions du bâtiment et améliore sa performance énergétique globale.</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-item__icon">
                    <EuroIcon size={20} />
                  </div>
                  <div>
                    <p className="why-item__title">Des charges d’exploitation en baisse</p>
                    <p className="why-item__desc">Une consommation d’énergie finale réduite peut se traduire par une diminution importante de la facture énergétique annuelle et un retour sur investissement plus rapide.</p>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-item__icon">
                    <BuildingIcon size={20} />
                  </div>
                  <div>
                    <p className="why-item__title">Un patrimoine valorisé et conforme</p>
                    <p className="why-item__desc">Cette transformation répond aux exigences réglementaires croissantes et valorise durablement le patrimoine immobilier, tout en contribuant concrètement à la transition énergétique.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COUP DE POUCE */}
      <section className="cdp" id="coup-de-pouce">
        <div className="container">
          <div className="cdp__header fade-in">
            <p className="section-label">Dispositif de financement</p>
            <h2 className="section-title">
              Coup de pouce chauffage tertiaire&nbsp;:<br />
              <em>le volume de CEE multiplié par&nbsp;3</em>
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Le Coup de pouce «&nbsp;Chauffage des bâtiments résidentiels collectifs et
              tertiaires&nbsp;» renforce considérablement le financement du remplacement des
              anciennes chaudières fossiles. Lorsqu’une pompe à chaleur air/eau relevant de la fiche
              BAT-TH-163 remplace une chaudière au charbon, au fioul ou au gaz, le volume de
              Certificats d’Économies d’Énergie généré par l’opération est multiplié par&nbsp;3.
            </p>
          </div>

          {/* Standard vs Coup de pouce */}
          <div className="cdp-compare fade-in">
            <div className="cdp-card cdp-card--before">
              <span className="cdp-card__label">Opération standard</span>
              <div className="cdp-card__bars"><div className="cdp-card__bar">×1</div></div>
              <p className="cdp-card__title">Fiche BAT-TH-163 seule</p>
              <p className="cdp-card__desc">Le volume de CEE est calculé de manière forfaitaire par m² chauffé, selon la zone climatique, la performance de la PAC et le secteur d’activité.</p>
            </div>

            <div className="cdp-arrow fade-in delay-2">
              <div className="cdp-arrow__circle">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
              <span>Bonification</span>
            </div>

            <div className="cdp-card cdp-card--after">
              <span className="cdp-card__label">Avec Coup de pouce</span>
              <div className="cdp-card__bars"><div className="cdp-card__bar">×3</div></div>
              <p className="cdp-card__title">Remplacement d’une chaudière charbon, fioul ou gaz</p>
              <p className="cdp-card__desc">Le même volume de CEE est multiplié par 3. À prix de CEE constant, la valorisation financière de l’opération peut elle aussi approcher un facteur 3. Le montant définitif de la prime dépend de l’offre du signataire de la charte Coup de pouce.</p>
            </div>
          </div>

          {/* Conditions */}
          <div className="cdp__sub fade-in">
            <h3>Les principales <em>conditions d’éligibilité</em></h3>
          </div>

          <div className="cond-grid">
            {CONDITIONS.map(([t, p], i) => (
              <div key={t} className={`cond-card fade-in delay-${(i % 3) + 1}`}>
                <div className="cond-card__num">{i + 1}</div>
                <div>
                  <p className="cond-card__title">{t}</p>
                  <p className="cond-card__text">{p}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dates */}
          <div className="cdp-dates fade-in">
            <div className="date-card date-card--1">
              <div className="date-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </div>
              <div><small>Engagées au plus tard</small><strong>31&nbsp;décembre&nbsp;2030</strong></div>
            </div>
            <div className="date-card date-card--2">
              <div className="date-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="9 16 11 18 15 14"/></svg>
              </div>
              <div><small>Achevées au plus tard</small><strong>31&nbsp;décembre&nbsp;2032</strong></div>
            </div>
            <div className="notice notice--warn">
              <strong>Une démarche à sécuriser avant le devis.</strong> Pour bénéficier de la
              bonification, l’offre Coup de pouce d’un signataire de la charte, ou de l’un de ses
              partenaires, doit impérativement être acceptée <strong>avant la signature du
              devis</strong>. Après réalisation, factures, attestations sur l’honneur, justificatifs
              techniques et note de dimensionnement sont transmis dans les délais prévus.
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIF DES COÛTS ANNUELS */}
      <section className="compare" id="comparatif">
        <div className="container">
          <div className="compare__header fade-in">
            <p className="section-label">Potentiel économique</p>
            <h2 className="section-title">
              Comparatif des coûts annuels&nbsp;:<br />
              <em>bureaux de 2&nbsp;000&nbsp;m²</em>
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Trois solutions de chauffage comparées pour un même bâtiment de bureaux, avec un
              besoin annuel de chauffage et d’eau chaude sanitaire de 300&nbsp;MWh/an.
            </p>
          </div>

          <div className="cmp-grid">
            {COSTS.map((c, i) => (
              <div key={c.title} className={`cmp-card${c.best ? " cmp-card--best" : ""} fade-in delay-${i + 1}`}>
                <Image
                  className="cmp-card__photo"
                  src={c.src}
                  alt={c.alt}
                  width={c.width}
                  height={c.height}
                  sizes="(max-width: 560px) 100vw, (max-width: 1024px) 500px, 340px"
                />
                <h3 className="cmp-card__title">{c.title}</h3>
                <div className="cmp-card__rows">
                  {c.rows.map(([label, value]) => (
                    <div key={label} className="cmp-card__row"><span>{label}</span><strong>{value}</strong></div>
                  ))}
                </div>
                <div className="cmp-card__cost"><small>Coût annuel estimé</small><strong>{c.cost}</strong></div>
              </div>
            ))}
          </div>

          <div className="cmp-hyp fade-in">
            <span className="cmp-hyp__pill">Ces données sont basées sur des hypothèses communes</span>
            <p>
              Bureaux de 2&nbsp;000&nbsp;m² avec un besoin annuel de chauffage et d’eau chaude
              sanitaire (ECS) de 300&nbsp;MWh/an. Consommation = besoin ÷ rendement (ou
              COP)&nbsp;; coût annuel = consommation × prix de l’énergie. Les ordres de grandeur
              des prix de l’énergie permettent d’établir une comparaison illustrative des trois
              solutions.
            </p>
          </div>

          <div className="gains">
            <div className="gain-card fade-in delay-1">
              <div className="gain-card__top">
                <div className="gain-card__icon"><EuroIcon size={24} /></div>
                <div className="gain-card__value">24,4&nbsp;K€</div>
                <div className="gain-card__label"><span>Économie</span>vs fioul</div>
              </div>
              <p>Réduction annuelle estimée des charges énergétiques par rapport à une installation au fioul.</p>
            </div>
            <div className="gain-card fade-in delay-2">
              <div className="gain-card__top">
                <div className="gain-card__icon"><EuroIcon size={24} /></div>
                <div className="gain-card__value">8,6&nbsp;K€</div>
                <div className="gain-card__label"><span>Économie</span>vs gaz</div>
              </div>
              <p>Réduction annuelle estimée des charges énergétiques par rapport à une installation au gaz.</p>
            </div>
          </div>

          <p className="disclaimer">
            Simulation illustrative, sans valeur contractuelle. Les coûts réels dépendent notamment
            du profil de consommation, du rendement réel des équipements, des conditions
            d’exploitation, des tarifs de l’énergie et du dimensionnement de l’installation.
          </p>
          <p className="credits">
            Crédits photo&nbsp;: brûleur fioul, ZngZng (CC BY-SA 3.0)&nbsp;; chaudière gaz, D. Dunn
            (CC BY 2.5), via Wikimedia Commons, images recadrées.
          </p>
        </div>
      </section>

      {/* CADRE RÉGLEMENTAIRE — BAT-TH-163 */}
      <section className="rules" id="bat-th-163">
        <div className="container">
          <div className="rules__header fade-in">
            <p className="section-label">Cadre réglementaire</p>
            <h2 className="section-title">
              La fiche BAT-TH-163&nbsp;:<br />
              <em>quatre paramètres</em> pour calculer le volume de CEE
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              La fiche BAT-TH-163 encadre l’installation d’une pompe à chaleur air/eau dans un
              bâtiment tertiaire existant. Elle s’applique à tous les types d’activités
              tertiaires&nbsp;: bureaux, enseignement, santé, hôtellerie, commerces et autres
              secteurs.
            </p>
          </div>

          <div className="rules__inner">
            <div className="rule-list fade-in">
              <div className="rule-card">
                <div className="rule-card__num">1</div>
                <div className="rule-card__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>
                </div>
                <div>
                  <p className="rule-card__title">
                    Zone climatique{" "}
                    <span className="rule-card__chips"><span>H1</span><span>H2</span><span>H3</span></span>
                  </p>
                  <p className="rule-card__text">Le territoire français est divisé en trois zones selon les besoins en chauffage.</p>
                </div>
              </div>
              <div className="rule-card">
                <div className="rule-card__num">2</div>
                <div className="rule-card__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                </div>
                <div>
                  <p className="rule-card__title">Performances de la PAC</p>
                  <p className="rule-card__text">L’efficacité énergétique saisonnière (Etas) détermine le niveau de performance de l’équipement.</p>
                </div>
              </div>
              <div className="rule-card">
                <div className="rule-card__num">3</div>
                <div className="rule-card__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 3 9 15"/><path d="M12 3H3v18h18v-9"/><path d="M16 3h5v5"/><path d="M14 15H9v-5"/></svg>
                </div>
                <div>
                  <p className="rule-card__title">Surface chauffée</p>
                  <p className="rule-card__text">La surface du bâtiment réellement desservie par le système de chauffage.</p>
                </div>
              </div>
              <div className="rule-card">
                <div className="rule-card__num">4</div>
                <div className="rule-card__icon">
                  <BuildingIcon size={22} />
                </div>
                <div>
                  <p className="rule-card__title">Type d’activité</p>
                  <p className="rule-card__text">Un facteur correctif est appliqué selon le secteur d’activité du bâtiment.</p>
                </div>
              </div>

              <div className="notice">
                <strong>Le volume de CEE est calculé de manière forfaitaire par mètre carré</strong>,
                en combinant ces quatre paramètres. Cette méthode standardisée permet une évaluation
                rapide et fiable du potentiel de valorisation de chaque projet de remplacement.
              </div>
            </div>

            <div className="rules__photo fade-in delay-2">
              <Image
                src={`${IMG}/technicien-pac.webp`}
                alt="Technicien contrôlant une pompe à chaleur avec un jeu de manomètres"
                width={900}
                height={1352}
                sizes="(max-width: 1024px) 100vw, 530px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EXEMPLE DE VALORISATION */}
      <section className="valo" id="valorisation">
        <div className="container">
          <div className="valo__inner">
            <div className="valo__content fade-in">
              <p className="section-label section-label--white">Exemple de valorisation</p>
              <h2 className="section-title section-title--white">
                Bureaux de 2&nbsp;000&nbsp;m²&nbsp;:<br />
                <em>la bonification triple la valorisation</em>
              </h2>
              <div className="divider divider--white"></div>
              <p className="section-intro section-intro--white valo__intro">
                Un immeuble de bureaux de 2&nbsp;000&nbsp;m² chauffé par une pompe à chaleur air/eau
                assurant le chauffage et l’eau chaude sanitaire. Hypothèses de la simulation&nbsp;:
              </p>
              <ul className="hypo">
                {HYPOTHESES.map(([label, value]) => (
                  <li key={label}><span>{label}</span><strong>{value}</strong></li>
                ))}
              </ul>
            </div>

            <div className="valo__cards fade-in delay-2">
              <div className="valo-card">
                <p className="valo-card__label">Calcul du volume de CEE</p>
                <div className="valo-card__formula">
                  <span>1&nbsp;200<small>forfait H1</small></span><i>×</i>
                  <span>2&nbsp;000<small>m²</small></span><i>×</i>
                  <span>1,2<small>activité</small></span><i>×</i>
                  <span>1<small>facteur R</small></span>
                </div>
                <p className="valo-card__result">= 2&nbsp;880&nbsp;000&nbsp;kWh cumac</p>
              </div>

              <div className="valo-results">
                <div className="valo-result valo-result--std">
                  <div className="valo-result__value">20,7&nbsp;K€</div>
                  <span className="valo-result__label">Valorisation standard</span>
                  <p className="valo-result__detail">2&nbsp;880&nbsp;000 × 0,0072<br />= 20&nbsp;736&nbsp;€</p>
                </div>
                <div className="valo-result valo-result--cdp">
                  <div className="valo-result__value">62,2&nbsp;K€</div>
                  <span className="valo-result__label">Avec Coup de pouce ×3</span>
                  <p className="valo-result__detail">Triple la valorisation<br />du volume de CEE généré</p>
                </div>
              </div>

              <div className="valo-conclusion">
                <div className="valo-conclusion__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                </div>
                <p>
                  Pour cet exemple de bureaux de 2&nbsp;000&nbsp;m², la bonification Coup de pouce
                  permet une valorisation supplémentaire de <strong>plus de 41&nbsp;000&nbsp;€</strong>.
                  Ce levier améliore significativement la rentabilité du projet et peut accélérer le
                  retour sur investissement.
                </p>
              </div>

              <p className="disclaimer">
                Exemple de valorisation établi sur les hypothèses ci-dessus, sans valeur
                contractuelle. Le montant de la prime dépend du prix des CEE et de l’offre proposée
                par le signataire de la charte Coup de pouce&nbsp;; il est confirmé après étude de
                votre bâtiment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PIÈCES TECHNIQUES + CHRONOLOGIE */}
      <section className="docs" id="dossier">
        <div className="container">
          <div className="docs__header fade-in">
            <p className="section-label">Pièces techniques obligatoires</p>
            <h2 className="section-title">
              Un projet <em>encadré et sécurisé</em><br />
              à chaque étape
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Quatre pièces conditionnent la délivrance des certificats. ECOPRORENOVE veille à leur
              conformité et à leur chronologie, du dimensionnement à la facture.
            </p>
          </div>

          <div className="docs__grid">
            {DOCS.map(([n, t, p], i) => (
              <div key={n} className={`doc-card fade-in delay-${i + 1}`}>
                <div className="doc-card__num">{n}</div>
                <h3 className="doc-card__title">{t}</h3>
                <p className="doc-card__text">{p}</p>
              </div>
            ))}
          </div>

          <div className="timeline fade-in">
            <h3 className="timeline__title"><em>ECOPRORENOVE</em> sécurise la chronologie du projet</h3>
            <p className="timeline__sub">
              Un interlocuteur unique à chaque étape du dispositif CEE, de l’étude d’éligibilité à
              la clôture du dossier.
            </p>
            <ol className="timeline__steps">
              {TIMELINE.map((label, i) => (
                <li key={label} className="tl-step">
                  <div className="tl-step__dot">{i + 1}</div>
                  <span className="tl-step__label">{label}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ACCOMPAGNEMENT + PARTENAIRES */}
      <section className="why-us" id="accompagnement">
        <div className="container">
          <div className="why-us__header fade-in">
            <p className="section-label">Notre accompagnement</p>
            <h2 className="section-title">
              ECOPRORENOVE, <em>votre interlocuteur unique</em><br />
              de l’étude à la clôture du dossier
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Nous ne vendons pas seulement un équipement&nbsp;: nous accompagnons la réalisation
              complète de votre projet, du premier échange à la clôture du dossier CEE.
            </p>
          </div>

          <div className="why-us__grid">
            <div className="why-us-card fade-in delay-1">
              <div className="why-us-card__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              </div>
              <h3 className="why-us-card__title">Une analyse sur mesure</h3>
              <p className="why-us-card__text">Analyse du bâtiment, étude d’éligibilité et de la solution&nbsp;: chaque projet est étudié selon ses contraintes réelles, sans solution standardisée.</p>
            </div>
            <div className="why-us-card fade-in delay-2">
              <div className="why-us-card__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              </div>
              <h3 className="why-us-card__title">Un financement CEE sécurisé</h3>
              <p className="why-us-card__text">Offre CEE sécurisée avant le devis, constitution administrative, récupération des justificatifs, suivi et clôture du dossier dans les délais.</p>
            </div>
            <div className="why-us-card fade-in delay-3">
              <div className="why-us-card__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              </div>
              <h3 className="why-us-card__title">Des solutions performantes</h3>
              <p className="why-us-card__text">Dimensionnement, coordination technique et réalisation avec notre partenaire opérationnel, dans le respect des exigences de la fiche BAT-TH-163.</p>
            </div>
            <div className="why-us-card fade-in delay-4">
              <div className="why-us-card__icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <h3 className="why-us-card__title">Une approche transparente</h3>
              <p className="why-us-card__text">Le montant de la prime n’est annoncé qu’après étude et figure sur l’offre. Si votre projet n’est pas éligible, nous vous le disons clairement.</p>
            </div>
          </div>

          <div className="pac-partners">
            <div className="partner-card fade-in delay-1">
              <p className="partner-card__label">Financement</p>
              <h3 className="partner-card__title">ECOPRORENOVE accompagne votre financement</h3>
              <p className="partner-card__text">
                La proposition financière peut être exprimée <strong>au comptant</strong> ou via un{" "}
                <strong>crédit-bail</strong> avec nos partenaires financiers.
              </p>
              <div className="partner-card__chips"><span>Grenke</span><span>Realease Capital</span><span>Locam</span></div>
            </div>
            <div className="partner-card fade-in delay-2">
              <p className="partner-card__label">Partenaire opérationnel</p>
              <Image
                className="partner-card__logo"
                src={`${IMG}/logo-france-global-energies.webp`}
                alt="France Global Energies"
                width={122}
                height={54}
              />
              <p className="partner-card__text">
                France Global Energies (FGE) est notre partenaire opérationnel sur la solution pompe
                à chaleur tertiaire. <strong>ECOPRORENOVE reste votre interlocuteur</strong> et vous
                accompagne tout au long du dispositif CEE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE BANNER */}
      <section className="value-banner">
        <div className="container">
          <div className="value-banner__inner fade-in">
            <p className="value-banner__eyebrow">L’essentiel à retenir</p>
            <h2 className="value-banner__title">
              L’offre Coup de pouce doit être acceptée avant la signature du devis.
            </h2>
            <p className="value-banner__subtitle">
              Dans l’autre ordre, la bonification est perdue. C’est pourquoi ECOPRORENOVE sécurise
              la chronologie du projet dès le premier échange&nbsp;: étude d’éligibilité, offre CEE,
              dimensionnement, puis devis.
            </p>
            <a href="#contact" className="btn btn--secondary" style={{ borderColor: "rgba(255,255,255,.6)", color: "#fff", fontSize: "1rem", padding: "16px 34px" }}>
              Vérifier l’éligibilité de mon bâtiment
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
              Tout ce que vous devez savoir<br />
              sur la <em>PAC air/eau en tertiaire</em>
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Des réponses claires pour avancer sur votre projet de remplacement de chaudière.
            </p>
          </div>
          <div className="faq__list">
            <Faq items={FAQ} />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <div className="container">
          <div className="cta-final__inner fade-in">
            <p className="cta-final__eyebrow">Passez à l’action</p>
            <h2 className="cta-final__title">
              Votre projet mérite<br />
              <em>d’être bien étudié.</em>
            </h2>
            <p className="cta-final__subtitle">
              Échangeons sur votre bâtiment, vos objectifs et les financements mobilisables. Un
              premier échange suffit pour vérifier l’éligibilité de votre bâtiment — sans
              engagement.
            </p>
            <div className="cta-final__actions">
              <a href="#contact" className="btn btn--primary btn--lg">
                <ArrowIcon />
                Faire étudier mon bâtiment
              </a>
              <a href="tel:+33619798391" className="btn btn--secondary btn--lg">
                <PhoneIcon />
                06 19 79 83 91
              </a>
            </div>
            <div className="cta-final__reassurance">
              {["Étude d’éligibilité sans engagement", "Accompagnement de A à Z", "Réponse sous 48 h ouvrées"].map((t) => (
                <div key={t} className="cta-final__reassurance-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedSolutions items={["tertiaire", "prime-cee", "destratificateur-air"]} />

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-section__inner">
            <div className="contact-info fade-in">
              <p className="section-label">Nous contacter</p>
              <h2 className="contact-info__title">Parlons de<br />votre bâtiment</h2>
              <div className="divider"></div>
              <p className="contact-info__text">
                Que votre projet de remplacement soit déjà engagé ou que vous souhaitiez simplement
                vérifier l’éligibilité de votre bâtiment, nous vous donnons une première orientation
                claire&nbsp;: éligibilité, chronologie à respecter et financements mobilisables.
              </p>
              <div className="contact-info__items">
                <div className="contact-info__item">
                  <div className="contact-info__item-icon"><PhoneIcon size={20} stroke="#357a28" /></div>
                  <a href="tel:+33619798391">06 19 79 83 91</a>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__item-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <a href="mailto:contact@ecoprorenove.fr">contact@ecoprorenove.fr</a>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__item-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  </div>
                  <span>Réponse sous 48 h ouvrées</span>
                </div>
              </div>
            </div>

            <div className="form-card fade-in delay-2">
              <h3 className="form-card__title">Demande d’étude — sans engagement</h3>
              <ContactForm source="pompe-a-chaleur-tertiaire">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="pac-prenom">Prénom *</label>
                    <input className="form-input" type="text" id="pac-prenom" name="prenom" placeholder="Votre prénom" autoComplete="given-name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="pac-nom">Nom *</label>
                    <input className="form-input" type="text" id="pac-nom" name="nom" placeholder="Votre nom" autoComplete="family-name" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="pac-societe">Société ou organisme</label>
                    <input className="form-input" type="text" id="pac-societe" name="societe" placeholder="Nom de votre structure" autoComplete="organization" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="pac-telephone">Téléphone *</label>
                    <input className="form-input" type="tel" id="pac-telephone" name="telephone" placeholder="06 XX XX XX XX" autoComplete="tel" required />
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="pac-email">Email *</label>
                    <input className="form-input" type="email" id="pac-email" name="email" placeholder="votre@email.fr" autoComplete="email" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="pac-type-batiment">Type de bâtiment</label>
                    <select className="form-select" id="pac-type-batiment" name="type_batiment" defaultValue="">
                      <option value="" disabled>Sélectionnez</option>
                      <option value="bureaux">Bureaux</option>
                      <option value="commerce">Commerce</option>
                      <option value="sante">Santé</option>
                      <option value="enseignement">Enseignement</option>
                      <option value="hotellerie">Hôtellerie, restauration</option>
                      <option value="autre">Autre bâtiment tertiaire</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="pac-energie">Chaudière actuelle</label>
                    <select className="form-select" id="pac-energie" name="energie_actuelle" defaultValue="">
                      <option value="" disabled>Sélectionnez</option>
                      <option value="fioul">Fioul</option>
                      <option value="gaz">Gaz</option>
                      <option value="charbon">Charbon</option>
                      <option value="autre">Autre / je ne sais pas</option>
                    </select>
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="pac-surface">Surface chauffée</label>
                    <select className="form-select" id="pac-surface" name="surface" defaultValue="">
                      <option value="" disabled>Sélectionnez</option>
                      <option value="moins-1000">Moins de 1&nbsp;000 m²</option>
                      <option value="1000-3000">Entre 1&nbsp;000 et 3&nbsp;000 m²</option>
                      <option value="3000-10000">Entre 3&nbsp;000 et 10&nbsp;000 m²</option>
                      <option value="plus-10000">Plus de 10&nbsp;000 m²</option>
                      <option value="nsp">Je ne sais pas</option>
                    </select>
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="pac-message">Décrivez votre projet</label>
                    <textarea className="form-textarea" id="pac-message" name="message" placeholder="Année de la chaudière, puissance, usage chauffage et/ou ECS, échéance souhaitée, questions spécifiques…" rows={4}></textarea>
                  </div>
                  <div className="form-group form-group--full">
                    <div className="form-consent">
                      <input type="checkbox" id="pac-rgpd" name="rgpd" required />
                      <label htmlFor="pac-rgpd">J’accepte que mes données soient utilisées par ECOPRORENOVE pour l’étude de mon projet. Conformément au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression de vos données personnelles.</label>
                    </div>
                  </div>
                  <div className="form-group form-group--full">
                    <button type="submit" className="btn btn--primary btn--lg form-submit">
                      <ArrowIcon />
                      Envoyer ma demande d’étude
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

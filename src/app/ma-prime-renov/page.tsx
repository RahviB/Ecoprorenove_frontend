import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import Faq from "@/components/Faq";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ScrollNav from "@/components/ScrollNav";

export const metadata: Metadata = {
  title: "MaPrimeRénov' — l'aide de l'État pour la rénovation énergétique",
  description:
    "MaPrimeRénov' expliquée : trois parcours (geste, ampleur, copropriété), plafonds de ressources, travaux éligibles. Cumul avec Prêt à taux 0 et aides locales. Accompagnement de bout en bout.",
  alternates: { canonical: "/ma-prime-renov" },
  openGraph: {
    url: "/ma-prime-renov",
    title: "MaPrimeRénov' — ECOPRORENOVE",
    description:
      "Comprendre MaPrimeRénov', vérifier l'éligibilité, mobiliser le bon parcours et cumuler avec les autres aides.",
  },
};

export default function MaPrimeRenovPage() {
  return (
    <div className="page-service page-financement-cee page-mpr solution-template">
      <ServiceJsonLd
        name="Accompagnement MaPrimeRénov'"
        description="Analyse du parcours pertinent (geste, ampleur, copropriété), montage du dossier MaPrimeRénov', coordination jusqu'au versement de la prime."
        url="/ma-prime-renov"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "MaPrimeRénov'", url: "/ma-prime-renov" },
        ]}
      />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__content fade-in">
              <h1 className="hero__title hero__title--t1">
                <span className="hero__title-eyebrow">Aide de l&apos;État — Anah · France Rénov&apos;</span>
                <span className="hero__title-anchor">MaPrimeRénov&apos;</span>
                <span className="hero__title-italic">l&apos;aide unique pour rénover votre logement.</span>
              </h1>

              <p className="hero__stat-line">
                <strong>3,6 Md€</strong> de budget national en 2026
              </p>

              <p className="hero__subtitle">
                MaPrimeRénov&apos; est la principale aide de l&apos;État pour la rénovation
                énergétique. Elle s&apos;adresse à tous les propriétaires — occupants ou bailleurs —
                ainsi qu&apos;aux syndicats de copropriétaires. Trois parcours, des plafonds de
                ressources, et un cumul possible avec d&apos;autres dispositifs (Prime CEE, Éco-PTZ,
                aides locales).
              </p>

              <div className="hero__actions">
                <a href="#contact" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  Vérifier mon éligibilité
                </a>
                <a href="#parcours" className="btn btn--secondary">Voir les 3 parcours</a>
              </div>
            </div>

            <div className="hero__visual fade-in delay-3">
              <div className="hero__img hero__img--placeholder" aria-label="Photo à venir" />
              <div className="hero__bubble hero__bubble--temp">
                <strong>3 parcours</strong>
                <small>geste · ampleur<br />copropriété</small>
              </div>
              <div className="hero__bubble hero__bubble--life">
                <strong>15 ans</strong>
                <small>logement<br />minimum</small>
              </div>
              <div className="hero__bubble hero__bubble--cee">
                <strong>Anah</strong>
                <small>aide de l&apos;État</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollNav
        sections={[
          { id: "parcours", label: "Parcours" },
          { id: "conditions", label: "Conditions" },
          { id: "travaux", label: "Travaux" },
          { id: "cumul", label: "Cumul" },
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
              "Pose RGE obligatoire — partenaires qualifiés",
              "Dossier déposé avant travaux",
              "Cumul Prime CEE et Éco-PTZ",
            ].map((t) => (
              <div key={t} className="hero-bandeau__item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PARCOURS */}
      <section className="cee-mechanism" id="parcours">
        <div className="container">
          <div className="cee-mechanism__header fade-in">
            <p className="section-label">Les trois parcours</p>
            <h2 className="section-title">
              Une aide unique,<br />
              <em>trois parcours</em> selon votre projet
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              MaPrimeRénov&apos; s&apos;adapte à la situation du ménage, au logement et à
              l&apos;ambition du projet. Bien identifier le bon parcours est la première étape pour
              sécuriser le financement.
            </p>
          </div>

          <div className="cee-mechanism__grid">
            <div className="cee-card fade-in delay-1">
              <div className="cee-card__number">01 — Parcours par geste</div>
              <h3 className="cee-card__title">Un ou plusieurs travaux ciblés</h3>
              <p className="cee-card__text">
                Pour réaliser un ou plusieurs gestes d&apos;<strong>isolation thermique</strong> ou
                installer un <strong>système de chauffage / eau chaude sanitaire décarboné</strong>.
                Un geste de ventilation est possible mais conditionné à la réalisation de travaux
                d&apos;isolation. Accessible aux propriétaires <strong>très modestes, modestes et
                intermédiaires</strong>. Le forfait varie selon la catégorie de revenus.
              </p>
            </div>
            <div className="cee-card fade-in delay-2">
              <div className="cee-card__number">02 — Parcours d&apos;ampleur</div>
              <h3 className="cee-card__title">Une rénovation globale, un saut de classe</h3>
              <p className="cee-card__text">
                Pour les rénovations comprenant <strong>au moins deux gestes d&apos;isolation
                thermique</strong> et permettant un <strong>gain de deux classes énergétiques
                minimum</strong> après travaux. Accessible à <strong>tous les ménages</strong>{" "}
                quels que soient leurs revenus. Un <strong>rendez-vous personnalisé avec un
                conseiller France Rénov&apos;</strong> est obligatoire avant le dépôt de la demande.
              </p>
            </div>
            <div className="cee-card fade-in delay-3">
              <div className="cee-card__number">03 — Parcours copropriété</div>
              <h3 className="cee-card__title">Travaux en parties communes</h3>
              <p className="cee-card__text">
                Pour la <strong>rénovation des parties communes</strong> en copropriété et certains
                travaux d&apos;intérêt collectif en parties privatives. Le syndicat de
                copropriétaires est le porteur de la demande. Souvent associé au <strong>Prêt
                collectif</strong> et à un accompagnement obligatoire (AMO).
              </p>
            </div>
          </div>

          <div className="cee-notice fade-in">
            <strong>À retenir :</strong> le montant de l&apos;aide dépend du parcours retenu, des
            revenus du ménage, du logement et des travaux. Il n&apos;existe pas de montant
            standard. ECOPRORENOVE analyse votre situation et vous donne une vision claire et
            honnête du parcours pertinent — avant tout engagement.
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="work-types" id="conditions">
        <div className="container">
          <div className="work-types__inner">
            <div>
              <p className="section-label fade-in">Conditions d&apos;éligibilité</p>
              <h2 className="work-types__title fade-in">
                Qui peut bénéficier<br />
                de MaPrimeRénov&apos;&nbsp;?
              </h2>
              <div className="divider fade-in"></div>
              <p className="work-types__intro fade-in">
                Plusieurs conditions doivent être réunies pour qu&apos;un projet soit recevable. La
                vérification se fait avant le dépôt du dossier — pas après le démarrage des travaux.
              </p>

              <div className="work-list">
                {[
                  ["Statut du demandeur", "Propriétaire occupant, propriétaire bailleur, usufruitier, indivisaire (avec accord). Les nus-propriétaires et personnes morales ne sont pas éligibles au parcours par geste."],
                  ["Logement", "Résidence principale (occupée au moins 8 mois par an), construite depuis au moins 15 ans en Métropole. Une exception existe pour le remplacement d'une chaudière au fioul."],
                  ["Plafonds de ressources", "Le barème distingue 4 catégories — très modestes, modestes, intermédiaires, supérieurs — selon le revenu fiscal de référence et la composition du ménage. Le barème diffère entre Île-de-France et hors Île-de-France."],
                  ["Pose par un artisan RGE", "Recours obligatoire à un professionnel qualifié RGE (Reconnu Garant de l'Environnement). Une visite préalable du chantier est requise avant établissement du devis."],
                  ["Chronologie réglementaire", "Le dossier doit être déposé avant le démarrage des travaux. Démarrer les travaux sans avoir reçu la décision d'octroi expose à un refus de prise en charge."],
                ].map(([n, d], i) => (
                  <div key={n} className={`work-item fade-in delay-${i + 1}`}>
                    <div className="work-item__icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#49a739" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <div>
                      <p className="work-item__name">{n}</p>
                      <p className="work-item__desc">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="work-caution fade-in delay-2">
                <div className="why-card__icon" style={{ marginBottom: 18 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
                <h3 className="work-caution__title">À noter en 2026</h3>
                <p className="work-caution__text">
                  Plusieurs ajustements affectent les dossiers déposés cette année. Voici les
                  points de vigilance que nous vérifions systématiquement avant de constituer le
                  dossier.
                </p>
                <ul>
                  {[
                    <>Les chaudières biomasse et l&apos;isolation des murs ne sont <strong>plus financées dans le parcours par geste</strong></>,
                    <>La méthode de calcul du DPE et de l&apos;audit énergétique a évolué (coefficient électricité passé de 2,3 à 1,9)</>,
                    <>Pour les rénovations d&apos;ampleur, un <strong>RDV France Rénov&apos;</strong> est obligatoire avant dépôt de la demande</>,
                    <>La <strong>vérification d&apos;identité</strong> est renforcée à la création du compte (FranceConnect+ ou code postal)</>,
                    <>Le bailleur s&apos;engage à <strong>louer le bien 6 ans minimum</strong> ; remboursement partiel en cas de non-respect</>,
                  ].map((node, i) => (
                    <li key={i}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#49a739" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>{node}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 28 }}>
                  <a href="#contact" className="btn btn--primary" style={{ fontSize: ".88rem", padding: "13px 22px" }}>
                    Faire vérifier mon dossier
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAVAUX */}
      <section className="cee-mechanism" id="travaux">
        <div className="container">
          <div className="cee-mechanism__header fade-in">
            <p className="section-label">Travaux finançables</p>
            <h2 className="section-title">
              Quels travaux sont<br />
              concernés par <em>MaPrimeRénov&apos;</em>&nbsp;?
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Les équipements et matériaux doivent répondre à des critères techniques de
              performance précis. Voici les grandes familles éligibles — la liste détaillée et les
              forfaits sont consultables dans le guide officiel de l&apos;Anah.
            </p>
          </div>

          <div className="why-renovate__grid">
            {[
              ["Isolation thermique des combles", "Soufflage ou déroulé en isolant minéral ou biosourcé, avec respect des résistances thermiques minimales par poste."],
              ["Isolation des planchers bas", "Isolation par le dessous d'un plancher bas sur sous-sol, vide sanitaire ou passage ouvert. Critère R applicable."],
              ["Isolation des toitures-terrasses", "Mise en œuvre d'un complexe isolant performant en toiture-terrasse, avec ou sans étanchéité associée."],
              ["Chauffage décarboné", "Pompes à chaleur air/eau, géothermique, hybride. Chauffage solaire combiné. Réseaux de chaleur urbains performants."],
              ["Eau chaude sanitaire décarbonée", "Chauffe-eau thermodynamique, chauffe-eau solaire individuel — sous conditions de performance et de pose."],
              ["Ventilation (VMC double flux)", "Sous condition d'être réalisée avec un geste d'isolation thermique. Performance minimale du système exigée."],
              ["Audit énergétique", "Audit réalisé par un auditeur qualifié pour orienter le projet — souvent prérequis au parcours d'ampleur."],
              ["Dépose de cuve à fioul", "Prime spécifique cumulable, en complément du remplacement par un système de chauffage décarboné."],
            ].map(([t, p], i) => (
              <div key={t} className={`why-card fade-in delay-${(i % 3) + 1}`}>
                <div className="why-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#49a739" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <h3 className="why-card__title">{t}</h3>
                <p className="why-card__text">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUMUL — Prêt à taux 0 + Aides locales */}
      <section className="cumul" id="cumul">
        <div className="container">
          <div className="cumul__header fade-in">
            <p className="section-label">Cumul d&apos;aides</p>
            <h2 className="section-title">
              MaPrimeRénov&apos; ne se finance pas<br />
              <em>seule.</em>
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Le reste à charge peut être financé par un prêt à taux 0 et complété par les aides
              proposées par votre région, votre département ou votre commune. Bien orchestré, le
              cumul change l&apos;équation du projet.
            </p>
          </div>

          <div className="cumul__grid">
            <div className="cumul-card fade-in delay-1">
              <div className="cumul-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <p className="cumul-card__eyebrow">Éco-PTZ MaPrimeRénov&apos;</p>
              <h3 className="cumul-card__title">Prêt à taux 0 — jusqu&apos;à 50 000 €</h3>
              <p className="cumul-card__text">
                L&apos;éco-prêt à taux zéro permet de financer le reste à charge des travaux
                éligibles à MaPrimeRénov&apos; — <strong>plafond 50 000 €</strong>, durée de
                remboursement jusqu&apos;à <strong>20 ans</strong>. Sans condition de ressources.
              </p>
              <ul className="cumul-card__points">
                {[
                  "Plafond unifié de 50 000 € pour les bouquets de travaux MaPrimeRénov'",
                  "Durée de remboursement jusqu'à 20 ans",
                  "Démarches simplifiées : la notification d'octroi MaPrimeRénov' remplace la fourniture des devis à la banque",
                  "La banque conserve la décision finale (étude de capacité de remboursement)",
                ].map((p) => (
                  <li key={p}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#49a739" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="cumul-card__footnote">
                Existent aussi : <strong>Prêt avance rénovation</strong> (remboursable au moment de
                la mutation du bien) et autres prêts adaptés aux ménages modestes.
              </p>
            </div>

            <div className="cumul-card fade-in delay-2">
              <div className="cumul-card__icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p className="cumul-card__eyebrow">Aides locales</p>
              <h3 className="cumul-card__title">Régions, départements, communes</h3>
              <p className="cumul-card__text">
                De nombreuses collectivités proposent des aides complémentaires à MaPrimeRénov&apos; —
                souvent <strong>cumulables</strong> avec elle. Les modalités varient fortement : il
                est essentiel de vérifier les dispositifs actifs <strong>dans votre commune et
                votre région</strong> avant d&apos;engager les travaux.
              </p>
              <ul className="cumul-card__points">
                {[
                  "Subventions régionales — programmes de transition énergétique",
                  "Aides départementales — plafonds et critères propres à chaque conseil départemental",
                  "Aides communales / EPCI — dispositifs locaux de soutien à la rénovation",
                  "Exonération possible de taxe foncière (sur délibération de la commune)",
                  "TVA à taux réduit (5,5 %) sur les travaux de rénovation énergétique éligibles",
                ].map((p) => (
                  <li key={p}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#49a739" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <p className="cumul-card__footnote">
                ECOPRORENOVE identifie les aides locales actives à votre adresse au moment du
                dossier, et les intègre à la simulation globale du financement.
              </p>
            </div>
          </div>

          <div className="cumul__notice fade-in">
            <strong>Cumul avec la Prime CEE :</strong> MaPrimeRénov&apos; se cumule avec les
            Certificats d&apos;Économies d&apos;Énergie pour la plupart des opérations résidentielles.
            Le cumul se calcule selon des règles précises — nous vérifions la compatibilité au cas par
            cas pour optimiser votre reste à charge.
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="method" id="methode">
        <div className="container">
          <div className="method__header fade-in">
            <p className="section-label" style={{ color: "rgba(255,255,255,.6)" }}>Notre méthode</p>
            <h2 className="section-title section-title--white">
              De la première analyse<br />
              au <em style={{ color: "#a8e296" }}>versement</em> de la prime
            </h2>
            <div className="divider divider--white divider--center"></div>
            <p className="section-intro section-intro--white section-intro--center">
              Un dossier MaPrimeRénov&apos; bien construit, c&apos;est un dossier validé. Nous
              cadrons chaque étape pour éviter les motifs classiques de refus.
            </p>
          </div>

          <div className="method__steps">
            {[
              ["01", "Analyse de votre situation", "Composition du ménage, revenus fiscaux, statut (occupant ou bailleur), caractéristiques du logement. Identification de la catégorie de ressources."],
              ["02", "Choix du parcours", "Par geste, ampleur ou copropriété. Cohérence entre l'ambition du projet et le parcours sélectionné — incluant le RDV France Rénov' si nécessaire."],
              ["03", "Identification des travaux éligibles", "Vérification des critères techniques (résistances thermiques, performances équipements) et qualification RGE des artisans pressentis."],
              ["04", "Simulation financière complète", "Estimation MaPrimeRénov' + Prime CEE + Éco-PTZ + aides locales. Vision claire du reste à charge avant engagement."],
              ["05", "Constitution & dépôt du dossier", "Création du compte, vérification d'identité, pièces administratives, devis RGE, déclaration des aides. Dépôt avant tout démarrage de travaux."],
              ["06", "Suivi du dossier & versement", "Coordination avec l'Anah, suivi du chantier, dépôt des factures, demande de paiement et accompagnement jusqu'au versement de la prime."],
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
              Démarrer mon dossier
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
              Ce qu&apos;il faut comprendre<br />
              sur <em>MaPrimeRénov&apos;</em>
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Réponses aux questions que se posent la plupart des propriétaires avant
              d&apos;engager un dossier.
            </p>
          </div>
          <div className="faq__list">
            <Faq
              items={[
                { q: "MaPrimeRénov' est-elle accessible à tout le monde ?", a: "L'aide est ouverte aux propriétaires (occupants ou bailleurs) et aux syndicats de copropriétaires. Le parcours par geste est réservé aux ménages très modestes, modestes et intermédiaires. Le parcours d'ampleur est, lui, accessible à tous les ménages quels que soient leurs revenus. Les nus-propriétaires et les personnes morales (sociétés) ne sont pas éligibles au parcours par geste." },
                { q: "Quel logement est concerné ?", a: "MaPrimeRénov' s'adresse aux logements occupés ou loués comme résidence principale (au moins 8 mois par an), construits depuis au moins 15 ans en Métropole. Une exception existe pour le remplacement d'une chaudière au fioul, possible dans un logement plus récent." },
                { q: "Faut-il obligatoirement passer par un artisan RGE ?", a: "Oui. Tous les travaux financés par MaPrimeRénov' doivent être réalisés par un professionnel certifié RGE (Reconnu Garant de l'Environnement). Une visite préalable du chantier est obligatoire avant le devis. Les sous-traitants doivent eux aussi détenir la qualification RGE appropriée." },
                { q: "Peut-on cumuler MaPrimeRénov' avec d'autres aides ?", a: "Oui, c'est même la norme. MaPrimeRénov' se cumule avec la Prime CEE pour la plupart des opérations résidentielles, avec l'Éco-PTZ MaPrimeRénov' (jusqu'à 50 000 €) pour financer le reste à charge, avec la TVA à taux réduit (5,5 %), et avec les aides locales (région, département, commune). Le cumul obéit à des règles précises que nous vérifions au cas par cas." },
                { q: "Quand faut-il déposer la demande ?", a: "Avant le démarrage des travaux — c'est une condition impérative. Démarrer un chantier avant la décision d'octroi expose à un refus de prise en charge. Il est recommandé d'attendre la notification d'octroi avant de signer le devis et de lancer les travaux. La subvention n'est pas de droit ; elle dépend de l'analyse du dossier." },
                { q: "Quelles sont les évolutions en 2026 ?", a: "Les chaudières biomasse et l'isolation des murs ne sont plus financées dans le parcours par geste. La méthode de calcul du DPE a évolué. Un rendez-vous France Rénov' est désormais obligatoire avant tout dépôt de demande pour le parcours d'ampleur. Le budget national est maintenu à 3,6 milliards d'euros pour permettre 120 000 rénovations d'ampleur et 150 000 rénovations par geste." },
                { q: "Comment savoir si mon projet est viable ?", a: "C'est précisément l'objet de notre analyse préalable. Nous étudions votre situation (revenus, logement, projet), vérifions l'éligibilité aux différents parcours, identifions les aides cumulables (Prime CEE, Éco-PTZ, aides locales) et vous donnons une vision claire du reste à charge avant tout engagement. Sans frais, sans engagement." },
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
                Décrivez-nous votre situation et votre projet. Nous revenons vers vous avec une
                analyse claire du parcours pertinent (geste, ampleur ou copropriété), des aides
                cumulables et du reste à charge prévisionnel.
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
              <h3 className="form-card__title">Vérifier mon éligibilité — sans engagement</h3>
              <ContactForm source="ma-prime-renov">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="m-prenom">Prénom *</label>
                    <input className="form-input" type="text" id="m-prenom" name="prenom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="m-nom">Nom *</label>
                    <input className="form-input" type="text" id="m-nom" name="nom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="m-email">Email *</label>
                    <input className="form-input" type="email" id="m-email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="m-tel">Téléphone *</label>
                    <input className="form-input" type="tel" id="m-tel" name="telephone" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="m-statut">Vous êtes</label>
                    <select className="form-select" id="m-statut" name="type_batiment" defaultValue="">
                      <option value="" disabled>Sélectionnez</option>
                      <option value="proprietaire-occupant">Propriétaire occupant</option>
                      <option value="proprietaire-bailleur">Propriétaire bailleur</option>
                      <option value="copropriete">Copropriété (syndic)</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="m-parcours">Parcours envisagé</label>
                    <select className="form-select" id="m-parcours" name="type_combles" defaultValue="">
                      <option value="" disabled>Sélectionnez</option>
                      <option value="par-geste">Par geste (1 ou plusieurs travaux)</option>
                      <option value="ampleur">Rénovation d&apos;ampleur (≥ 2 gestes)</option>
                      <option value="copropriete">Copropriété</option>
                      <option value="je-ne-sais-pas">Je ne sais pas — à étudier</option>
                    </select>
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="m-message">Décrivez votre projet</label>
                    <textarea className="form-textarea" id="m-message" name="message" placeholder="Logement (maison/appartement, surface, année), travaux envisagés, contraintes ou questions spécifiques…" rows={4}></textarea>
                  </div>
                  <div className="form-group form-group--full">
                    <div className="form-consent">
                      <input type="checkbox" id="m-rgpd" name="rgpd" required />
                      <label htmlFor="m-rgpd">J&apos;accepte que mes données soient utilisées par ECOPRORENOVE pour l&apos;étude de mon dossier MaPrimeRénov&apos;. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles.</label>
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

      <p style={{ textAlign: "center", fontSize: ".72rem", color: "var(--gray)", fontStyle: "italic", padding: "16px 24px 64px" }}>
        * Source : guide officiel des aides financières — Anah, édition février 2026. Les
        conditions, plafonds et critères techniques sont susceptibles d&apos;évoluer ;
        ECOPRORENOVE met à jour son analyse au moment du dépôt du dossier.
      </p>
    </div>
  );
}

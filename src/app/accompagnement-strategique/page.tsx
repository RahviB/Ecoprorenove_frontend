import type { Metadata } from "next";
import Faq from "@/components/Faq";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Accompagnement stratégique — ECOPRORENOVE",
  description:
    "ECOPRORENOVE accompagne les professionnels sur leurs obligations réglementaires (BACS, décret tertiaire), l'optimisation énergétique de leurs bâtiments, et le courtage en énergie (gaz, électricité). Une offre globale pour piloter votre stratégie énergétique.",
  alternates: { canonical: "/accompagnement-strategique" },
  openGraph: {
    url: "/accompagnement-strategique",
    title: "Accompagnement stratégique — ECOPRORENOVE",
    description:
      "Une direction énergie externalisée — diagnostic, courtage gaz & électricité, mobilisation des financements. Interlocuteur unique, indépendance, transparence.",
  },
};

export default function AccompagnementStrategiquePage() {
  return (
    <div className="page-service page-accompagnement">
      <ServiceJsonLd
        name="Accompagnement stratégique en performance énergétique"
        description="Diagnostic énergétique, courtage gaz et électricité, mobilisation des dispositifs CEE et aides — articulés autour d'un interlocuteur unique."
        url="/accompagnement-strategique"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Accompagnement stratégique", url: "/accompagnement-strategique" },
        ]}
      />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__content fade-in">
              <div className="hero__badges">
                <span className="tag tag--white">Conformité réglementaire</span>
                <span className="tag tag--white">Pilotage énergétique</span>
                <span className="tag tag--white">Courtage gaz &amp; électricité</span>
              </div>

              <h1 className="hero__title">
                Votre direction énergie <em>externalisée,</em>
                <br />de la stratégie au contrat.
              </h1>

              <p className="hero__subtitle">
                ECOPRORENOVE accompagne les professionnels sur l&apos;ensemble de leur trajectoire énergétique : conformité réglementaire (BACS, décret tertiaire), analyse des besoins, identification des leviers d&apos;optimisation, montage de projets de rénovation et courtage en gaz et électricité. Une seule expertise, articulée autour d&apos;un interlocuteur unique.
              </p>

              <div className="hero__actions">
                <a href="#contact" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  Cadrer mon accompagnement
                </a>
                <a href="#perimetre" className="btn btn--secondary">Voir le périmètre</a>
              </div>

              <div className="hero__reassurance">
                {["Interlocuteur unique", "Indépendance & transparence", "Diagnostic sans engagement"].map((t) => (
                  <div key={t} className="hero__reassurance-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.65)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="hero__visual fade-in delay-3">
              <div className="hero__img-placeholder">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                <span>Insérez votre visuel ici<br /><small>Recommandé : 800 × 600 px</small></span>
              </div>

              <div className="hero__stat-card">
                <div className="hero__stat-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#49a739" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="12 2 15 9 22 9 17 14 18 22 12 18 6 22 7 14 2 9 9 9 12 2"/></svg>
                </div>
                <div className="hero__stat-text">
                  <strong>Une expertise globale</strong>
                  Stratégie · Conformité · Contrats
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY — enjeux */}
      <section className="why-renovate" id="enjeux">
        <div className="container">
          <div className="why-renovate__header fade-in">
            <p className="section-label">Pourquoi un accompagnement&nbsp;?</p>
            <h2 className="section-title">
              L&apos;énergie est devenue<br />
              un <em>sujet stratégique</em>.
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Réglementation, marché de l&apos;énergie, choix techniques, financement : piloter ces dimensions séparément expose au risque d&apos;incohérence et de surcoût. Notre rôle est d&apos;articuler l&apos;ensemble.
            </p>
          </div>

          <div className="why-renovate__grid">
            {[
              { t: "Conformité réglementaire", p: "Décret tertiaire, décret BACS, obligations de reporting : les exigences se densifient. Un cadrage anticipé évite les rattrapages coûteux et les sanctions.", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> },
              { t: "Volatilité du marché", p: "Les prix du gaz et de l'électricité fluctuent fortement. Identifier les bonnes fenêtres de négociation et structurer les contrats devient un véritable levier financier.", icon: <><polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></> },
              { t: "Priorisation des investissements", p: "Tous les travaux ne se valent pas. L'enjeu est d'identifier ceux qui produisent le meilleur rapport coût-bénéfice — techniquement, financièrement, réglementairement.", icon: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></> },
              { t: "Lisibilité sur les coûts", p: "Comprendre une facture d'énergie, c'est décomposer des dizaines de lignes : puissance souscrite, acheminement, taxes, fournitures. Sans méthode, l'optimisation reste à l'aveugle.", icon: <><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></> },
              { t: "Temps des équipes", p: "Audits, devis, comparaisons fournisseurs, conformité administrative : ces sujets mobilisent les équipes internes au détriment de leur cœur de métier.", icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></> },
              { t: "Vision long terme", p: "L'énergie ne se pilote pas à vue : trajectoire pluriannuelle, alignement réglementaire, anticipation des renouvellements de contrats. Une feuille de route change tout.", icon: <polygon points="12 2 15 9 22 9 17 14 18 22 12 18 6 22 7 14 2 9 9 9 12 2"/> },
            ].map((c, i) => (
              <div key={c.t} className={`why-card fade-in delay-${(i % 3) + 1}`}>
                <div className="why-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#49a739" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {c.icon}
                  </svg>
                </div>
                <h3 className="why-card__title">{c.t}</h3>
                <p className="why-card__text">{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERIMETRE */}
      <section className="cee-mechanism" id="perimetre">
        <div className="container">
          <div className="cee-mechanism__header fade-in">
            <p className="section-label">Notre périmètre</p>
            <h2 className="section-title">
              Trois leviers articulés<br />
              pour <em>une trajectoire cohérente</em>.
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              L&apos;accompagnement stratégique d&apos;ECOPRORENOVE repose sur trois leviers complémentaires, pilotés ensemble&nbsp;: comprendre la situation, optimiser les contrats, financer les actions. Chacun a une finalité propre — leur articulation produit le résultat.
            </p>
          </div>

          <div className="cee-mechanism__grid">
            {[
              { n: "01 — Diagnostic & trajectoire", t: "Comprendre avant d'agir", p: "Avant toute recommandation, nous analysons votre situation énergétique réelle : consommations, contrats en cours, état du bâti, équipements techniques, profil d'usage. Ce diagnostic donne une vision claire des marges de manœuvre et permet de construire une trajectoire pluriannuelle priorisée — celle qui produit le meilleur rapport coût-bénéfice, dans votre contexte spécifique." },
              { n: "02 — Courtage en énergie", t: "Acheter mieux, contractualiser juste", p: "Le marché de l'énergie est complexe : multiplicité des fournisseurs, structures tarifaires opaques, fenêtres d'arbitrage étroites. Notre activité de courtage couvre la mise en concurrence des fournisseurs gaz et électricité, l'analyse comparative des offres, la négociation des conditions, et le suivi des renouvellements. L'objectif : sécuriser un coût maîtrisé sur la durée, sans engagement piégeux." },
              { n: "03 — Financement & CEE", t: "Mobiliser les bons dispositifs", p: "Certificats d'Économies d'Énergie, aides territoriales, dispositifs sectoriels : plusieurs mécanismes peuvent cofinancer vos actions de performance énergétique. Nous identifions ceux qui s'appliquent à votre projet, structurons les dossiers, sécurisons les conditions d'éligibilité (date d'engagement, qualité RGE, conformité technique) et pilotons les démarches jusqu'au versement." },
            ].map((c, i) => (
              <div key={c.n} className={`cee-card fade-in delay-${i + 1}`}>
                <div className="cee-card__number">{c.n}</div>
                <h3 className="cee-card__title">{c.t}</h3>
                <p className="cee-card__text">{c.p}</p>
              </div>
            ))}
          </div>

          <div className="cee-notice fade-in">
            <strong>Une logique d&apos;ensemble.</strong> Ces trois leviers ne fonctionnent pleinement qu&apos;articulés&nbsp;: un bon contrat de fourniture sans plan de réduction des consommations limite les gains&nbsp;; des travaux non financés pèsent sur la trésorerie&nbsp;; un audit sans suite reste un document. Notre rôle est de les piloter ensemble.
          </div>
        </div>
      </section>

      {/* WORK-TYPES */}
      <section className="work-types" id="travaux">
        <div className="container">
          <div className="work-types__inner">
            <div className="work-types__left">
              <p className="section-label fade-in">Domaines d&apos;intervention</p>
              <h2 className="work-types__title fade-in">Où nous intervenons<br />concrètement&nbsp;?</h2>
              <div className="divider fade-in"></div>
              <p className="work-types__intro fade-in">
                Notre accompagnement couvre l&apos;ensemble de la chaîne de valeur de la performance énergétique — de la lecture des contrats jusqu&apos;au pilotage des travaux, en passant par la mobilisation des dispositifs de financement.
              </p>

              <div className="work-list">
                {[
                  { t: "Audit & analyse de consommation", p: "Lecture critique des factures, décomposition des postes, identification des dérives et des marges d'optimisation immédiates.", icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/> },
                  { t: "Négociation contrats gaz & électricité", p: "Mise en concurrence, comparaison structurée des offres, négociation des conditions, suivi des renouvellements et indexations.", icon: <><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></> },
                  { t: "Plan de réduction des consommations", p: "Identification des actions à fort impact — isolation, ventilation, chauffage, régulation, GTB — et priorisation coût-bénéfice.", icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/> },
                  { t: "Mobilisation CEE & aides", p: "Vérification d'éligibilité, structuration des dossiers, sécurisation de la chronologie, suivi jusqu'au versement des financements.", icon: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></> },
                  { t: "Conformité réglementaire", p: "Décret tertiaire, décret BACS, obligations sectorielles : cadrage, calendrier, reporting et anticipation des échéances.", icon: <><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></> },
                ].map((w, i) => (
                  <div key={w.t} className={`work-item fade-in delay-${i + 1}`}>
                    <div className="work-item__icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#49a739" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        {w.icon}
                      </svg>
                    </div>
                    <div className="work-item__info">
                      <p className="work-item__name">{w.t}</p>
                      <p className="work-item__desc">{w.p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="work-types__right">
              <div className="work-caution fade-in delay-2">
                <div className="why-card__icon" style={{ width: 52, height: 52, borderRadius: 14, background: "var(--green-light)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>
                <h3 className="work-caution__title">Notre posture : indépendance et rigueur</h3>
                <p className="work-caution__text">
                  ECOPRORENOVE n&apos;est lié à aucun fournisseur d&apos;énergie ni à aucune marque d&apos;équipement. Notre rémunération ne dépend pas du choix que vous ferez. Cette indépendance est la condition même de la valeur que nous apportons.
                </p>
                <ul>
                  {[
                    ["Indépendance", " vis-à-vis des fournisseurs et des fabricants"],
                    ["Transparence", " sur les hypothèses, les coûts et les arbitrages"],
                    ["Rigueur", " technique et administrative à chaque étape"],
                    ["Continuité", " du suivi sur la durée, pas seulement un livrable"],
                    ["Ancrage local", " avec des interlocuteurs identifiés"],
                  ].map(([s, t]) => (
                    <li key={s}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#49a739" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                      <strong>{s}</strong>{t}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 28 }}>
                  <a href="#contact" className="btn btn--primary" style={{ fontSize: ".88rem", padding: "13px 22px" }}>
                    Échanger avec nous
                  </a>
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
            <p className="section-label" style={{ color: "rgba(255,255,255,.6)" }}>Notre méthode</p>
            <h2 className="section-title section-title--white">
              Comment ECOPRORENOVE<br />
              vous <em style={{ color: "#a8e296" }}>accompagne</em> concrètement
            </h2>
            <div className="divider divider--white divider--center"></div>
            <p className="section-intro section-intro--white section-intro--center">
              De la première conversation jusqu&apos;à la finalisation administrative, nous structurons chaque étape pour que vous ayez une vision claire et un projet bien conduit.
            </p>
          </div>

          <div className="method__steps">
            {[
              ["01", "Échange initial sur votre besoin", "Nous commençons par comprendre votre projet, vos objectifs, vos contraintes et le contexte de votre bâtiment — avant toute démarche formelle."],
              ["02", "Analyse du projet et des travaux envisagés", "Nous étudions la nature des travaux, leur cohérence technique, leur faisabilité et leur pertinence au regard des mécanismes de financement disponibles."],
              ["03", "Construction de la trajectoire", "Nous formalisons une feuille de route hiérarchisée : actions à court terme (contrats, quick wins), moyen terme (travaux prioritaires), long terme (conformité réglementaire)."],
              ["04", "Optimisation des contrats d'énergie", "Mise en concurrence, négociation, arbitrages tarifaires : nous structurons l'achat d'énergie pour sécuriser un coût maîtrisé sur la durée."],
              ["05", "Mobilisation des financements", "Identification des dispositifs applicables (CEE, aides territoriales, sectorielles), structuration des dossiers, sécurisation des conditions d'éligibilité."],
              ["06", "Pilotage des travaux", "Coordination des intervenants, suivi de chantier, contrôle de conformité technique et administrative : nous gardons la main sur l'exécution."],
            ].map(([n, t, p], i) => (
              <div key={n} className={`method__step fade-in delay-${(i % 3) + 1}`}>
                <div className="method__step-num">{n}</div>
                <h3 className="method__step-title">{t}</h3>
                <p className="method__step-text">{p}</p>
              </div>
            ))}
            <div className="method__step fade-in delay-1 method__step--full">
              <div className="method__step-num">07</div>
              <h3 className="method__step-title">Suivi dans la durée</h3>
              <p className="method__step-text">L&apos;accompagnement ne s&apos;arrête pas à la réception. Mesure des résultats, ajustements, point annuel sur les contrats et la trajectoire : la performance énergétique se pilote dans le temps.</p>
            </div>
          </div>

          <div className="method__cta-wrap fade-in">
            <a href="#contact" className="btn btn--primary btn--lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              Démarrer l&apos;analyse de mon projet
            </a>
          </div>
        </div>
      </section>

      {/* PROJECT MGMT */}
      <section className="project-mgmt" id="gestion">
        <div className="container">
          <div className="project-mgmt__inner">
            <div className="project-mgmt__visual fade-in">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#e4ebe2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span style={{ color: "var(--gray-mid)", fontSize: ".85rem" }}>Insérez votre visuel ici<br /><small>Recommandé : 600 × 600 px</small></span>
            </div>

            <div className="project-mgmt__content">
              <p className="section-label fade-in">Pilotage &amp; coordination</p>
              <h2 className="section-title fade-in">La gestion de projet avec<br /><em>ECOPRORENOVE</em></h2>
              <div className="divider fade-in"></div>
              <p className="section-intro fade-in">
                Notre rôle ne se limite pas au volet financement. Nous accompagnons aussi le projet dans sa logique globale — pour qu&apos;il soit cohérent, bien cadré et mené avec méthode.
              </p>

              <div className="project-mgmt__list">
                {[
                  ["Lecture précise du besoin", "Avant tout, nous prenons le temps de comprendre votre situation : bâtiment, usage, contraintes techniques et budget disponible."],
                  ["Cohérence entre travaux et objectifs", "Nous vous aidons à vérifier que les travaux envisagés sont cohérents avec vos objectifs énergétiques, votre budget et les mécanismes de financement accessibles."],
                  ["Appui technique & administratif", "Nous simplifions les étapes administratives, coordonnons les acteurs du projet et veillons à la conformité des documents tout au long du parcours."],
                  ["Suivi concret et points d'avancement", "Vous savez où en est votre dossier à chaque instant. Nous assurons un suivi régulier et vous informons de chaque étape franchie ou de tout point de vigilance."],
                  ["Meilleure lisibilité du reste à charge", "En identifiant et en mobilisant les financements disponibles, nous vous donnons une vision plus précise du coût réel du projet — et donc une capacité d'arbitrage plus éclairée."],
                ].map(([t, p], i) => (
                  <div key={t} className={`pm-item fade-in delay-${i + 1}`}>
                    <div className="pm-item__bullet"></div>
                    <div className="pm-item__text">
                      <p className="pm-item__title">{t}</p>
                      <p className="pm-item__desc">{p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why-us" id="ecoprorenove">
        <div className="container">
          <div className="why-us__header fade-in">
            <p className="section-label">Nos engagements</p>
            <h2 className="section-title">
              Pourquoi confier votre projet<br />
              à <em>ECOPRORENOVE</em>&nbsp;?
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Nous intervenons là où le projet se complique : quand les sujets techniques, administratifs et financiers se croisent, et qu&apos;il faut quelqu&apos;un pour les articuler clairement.
            </p>
          </div>

          <div className="why-us__grid">
            {[
              { t: "Accompagnement personnalisé", p: "Chaque projet est différent. Nous construisons une réponse adaptée à votre situation, votre bâtiment et vos contraintes — pas une offre standardisée.", icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></> },
              { t: "Vision à 360°", p: "Technique, administrative et opérationnelle : notre approche couvre toutes les dimensions du projet pour éviter les angles morts et les mauvaises surprises.", icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/> },
              { t: "Sécurisation du parcours", p: "Nous intervenons en amont pour anticiper les conditions d'éligibilité, respecter les chronologies et structurer les dossiers — avant que les erreurs ne coûtent.", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> },
              { t: "Simplification des démarches", p: "Nous prenons en charge la complexité administrative pour que vous puissiez vous concentrer sur l'essentiel : vos travaux et vos objectifs.", icon: <><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></> },
              { t: "Honnêteté & transparence", p: "Nous ne promettons pas ce que nous ne pouvons pas tenir. Si votre projet n'est pas éligible, nous vous le disons clairement — et nous cherchons d'autres leviers avec vous.", icon: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></> },
              { t: "Approche terrain & concrète", p: "Notre démarche est ancrée dans la réalité des projets : contraintes de chantier, délais, artisans, dossiers techniques. Pas de promesses théoriques.", icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/> },
              { t: "Structuration du projet", p: "Nous aidons à donner une architecture claire au projet : travaux, financement, planning, acteurs — pour que rien ne soit laissé au hasard.", icon: <><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></> },
              { t: "Optimisation du financement", p: "Nous cherchons à identifier tous les leviers mobilisables pour améliorer l'équation financière du projet — sans inventer ce qui n'existe pas.", icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></> },
            ].map((c, i) => (
              <div key={c.t} className={`why-us-card fade-in delay-${(i % 4) + 1}`}>
                <div className="why-us-card__icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {c.icon}
                  </svg>
                </div>
                <h3 className="why-us-card__title">{c.t}</h3>
                <p className="why-us-card__text">{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE BANNER */}
      <section className="value-banner">
        <div className="container">
          <div className="value-banner__inner fade-in">
            <p className="value-banner__eyebrow">Notre conviction</p>
            <h2 className="value-banner__title">
              Un projet plus clair,<br />un parcours mieux maîtrisé.
            </h2>
            <p className="value-banner__subtitle">
              ECOPRORENOVE ne se limite pas à parler de subvention. Nous aidons à structurer un vrai projet — techniquement cohérent, administrativement cadré et économiquement plus lisible. Parce qu&apos;un bon accompagnement transforme un sujet complexe en parcours actionnable.
            </p>
            <a href="#contact" className="btn btn--secondary" style={{ borderColor: "rgba(255,255,255,.6)", color: "#fff", fontSize: "1rem", padding: "16px 34px" }}>
              Parlons de votre projet
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
              Ce que vous voulez<br />savoir sur l&apos;<em>accompagnement</em>
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Des réponses claires aux questions que tout porteur de projet finit par se poser.
            </p>
          </div>

          <div className="faq__list">
            <Faq
              items={[
                { q: "En quoi consiste concrètement votre accompagnement ?", a: "Notre accompagnement couvre trois leviers articulés : le diagnostic énergétique et la trajectoire pluriannuelle, le courtage des contrats gaz et électricité, et la mobilisation des dispositifs de financement (CEE, aides territoriales, sectorielles). Nous pilotons l'ensemble pour vous, avec une logique de cohérence d'ensemble plutôt que de prestations isolées." },
                { q: "Le courtage en énergie, qu'est-ce que ça apporte ?", a: "Le marché de l'énergie est complexe : multiplicité de fournisseurs, structures tarifaires opaques, volatilité des prix. Notre rôle de courtier consiste à mettre en concurrence ces fournisseurs, comparer les offres sur des bases techniques solides, négocier les conditions et accompagner les renouvellements. L'objectif : sécuriser un coût maîtrisé sur la durée, sans clauses piégeuses, et libérer vos équipes de ce travail chronophage." },
                { q: "Comment se rémunère ECOPRORENOVE ?", a: "Notre modèle économique est transparent : nous sommes rémunérés soit par honoraires de mission (audit, conseil, pilotage), soit par commission sur le courtage énergie payée par le fournisseur retenu, soit en partageant la valeur créée via les dispositifs de financement mobilisés. Cette rémunération ne dépend pas du choix que vous ferez parmi les fournisseurs ou les solutions techniques — c'est la condition de notre indépendance." },
                { q: "Êtes-vous indépendants des fournisseurs d'énergie ?", a: "Oui, totalement. Nous ne sommes liés par aucune exclusivité commerciale et travaillons avec l'ensemble des fournisseurs significatifs du marché français. Cette indépendance est essentielle : elle nous permet de comparer les offres sur des critères objectifs et de recommander celle qui correspond réellement à votre profil de consommation — pas celle qui nous arrangerait commercialement." },
                { q: "À quel moment vaut-il mieux vous solliciter ?", a: "Le plus tôt possible. Pour les travaux éligibles aux CEE, les démarches doivent impérativement être initiées avant le début du chantier : c'est une condition de recevabilité. Pour les contrats d'énergie, la qualité de la négociation dépend du moment où l'on se positionne sur le marché. Plus largement, un cadrage stratégique en amont évite des décisions qu'il sera coûteux de corriger ensuite." },
                { q: "Travaillez-vous avec les TPE/PME ou seulement les grandes structures ?", a: "Les deux. Notre accompagnement s'adapte à votre taille et à votre niveau de complexité : une TPE avec un site et deux contrats d'énergie n'a pas les mêmes besoins qu'un groupe multi-sites avec un parc immobilier diversifié. Nous calibrons le périmètre de la mission et notre intensité d'intervention en conséquence — sans surdimensionner ni sous-traiter la qualité." },
                { q: "Combien de temps prend une mission d'accompagnement ?", a: "Ça dépend du périmètre. Un audit de consommation et de contrats peut se boucler en quelques semaines. La construction d'une trajectoire pluriannuelle complète demande généralement deux à trois mois, avec plusieurs ateliers de travail. Et le suivi opérationnel s'inscrit dans la durée — souvent sur 12 à 36 mois — pour piloter les actions, mesurer les résultats et ajuster la trajectoire en fonction des réalités du terrain." },
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <div className="container">
          <div className="cta-final__inner fade-in">
            <p style={{ fontSize: ".72rem", fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 16 }}>Passez à l&apos;action</p>
            <h2 className="cta-final__title">
              Votre projet mérite<br />d&apos;être <em>bien étudié.</em>
            </h2>
            <p className="cta-final__subtitle">
              Échangeons sur votre projet de rénovation énergétique. Nous analysons ensemble sa faisabilité, les financements potentiellement mobilisables et la meilleure façon de le structurer.
            </p>
            <div className="cta-final__actions">
              <a href="#contact" className="btn btn--primary btn--lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                Demander une étude de projet
              </a>
              <a href="tel:+33619798391" className="btn btn--secondary btn--lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.63-.63a2 2 0 0 1 2.11-.45c.9.386 1.86.647 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Nous appeler directement
              </a>
            </div>
            <div className="cta-final__reassurance">
              {["Analyse sans engagement", "Réponse rapide", "Accompagnement personnalisé"].map((t) => (
                <div key={t} className="cta-final__reassurance-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-section" id="contact">
        <div className="container">
          <div className="contact-form-section__inner">
            <div className="contact-info fade-in">
              <p className="section-label">Nous contacter</p>
              <h2 className="contact-info__title">Parlons de<br />votre projet</h2>
              <div className="divider"></div>
              <p className="contact-info__text">
                Que vous ayez un projet défini ou que vous souhaitiez simplement comprendre les possibilités, notre équipe est disponible pour échanger et vous donner une première orientation claire et honnête.
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
                  <span>Réponse rapide</span>
                </div>
              </div>
            </div>

            <div className="form-card fade-in delay-2">
              <h3 className="form-card__title">Étude de votre projet — sans engagement</h3>
              <form action="#" method="POST" noValidate>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="a-prenom">Prénom *</label>
                    <input className="form-input" type="text" id="a-prenom" name="prenom" placeholder="Votre prénom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="a-nom">Nom *</label>
                    <input className="form-input" type="text" id="a-nom" name="nom" placeholder="Votre nom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="a-societe">Société</label>
                    <input className="form-input" type="text" id="a-societe" name="societe" placeholder="Nom de votre société" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="a-tel">Téléphone *</label>
                    <input className="form-input" type="tel" id="a-tel" name="telephone" placeholder="06 XX XX XX XX" required />
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="a-email">Email *</label>
                    <input className="form-input" type="email" id="a-email" name="email" placeholder="votre@email.fr" required />
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="a-perimetre">Périmètre souhaité</label>
                    <select className="form-select" id="a-perimetre" name="perimetre" defaultValue="">
                      <option value="" disabled>Sélectionnez le périmètre</option>
                      <option value="diagnostic">Diagnostic & trajectoire</option>
                      <option value="courtage">Courtage gaz / électricité</option>
                      <option value="financement">Mobilisation CEE & aides</option>
                      <option value="conformite">Conformité réglementaire (BACS, décret tertiaire)</option>
                      <option value="global">Accompagnement global (les 3 leviers)</option>
                      <option value="autre">Autre / je ne sais pas encore</option>
                    </select>
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="a-message">Décrivez votre projet</label>
                    <textarea className="form-textarea" id="a-message" name="message" placeholder="Type de bâtiment, surface, contrats actuels, contraintes, échéances réglementaires, questions spécifiques..."></textarea>
                  </div>
                  <div className="form-group form-group--full">
                    <div className="form-consent">
                      <input type="checkbox" id="a-rgpd" name="rgpd" required />
                      <label htmlFor="a-rgpd">J&apos;accepte que mes données soient utilisées par ECOPRORENOVE pour l&apos;étude de mon projet. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données.</label>
                    </div>
                  </div>
                  <div className="form-group form-group--full">
                    <button type="submit" className="btn btn--primary btn--lg form-submit">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                      Envoyer ma demande
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

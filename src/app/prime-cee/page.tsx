import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import Faq from "@/components/Faq";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Prime CEE — comprendre, vérifier, mobiliser le dispositif",
  description:
    "Le mécanisme des Certificats d'Économies d'Énergie expliqué. Vérification d'éligibilité, montage de dossier, accompagnement de bout en bout. Sans engagement.",
  alternates: { canonical: "/prime-cee" },
  openGraph: {
    url: "/prime-cee",
    title: "Prime CEE — ECOPRORENOVE",
    description:
      "Mécanisme CEE expliqué, éligibilité vérifiée, dossier sécurisé. Métropole et La Réunion.",
  },
};

export default function PrimeCeePage() {
  return (
    <div className="page-service page-financement-cee page-prime-cee">
      <ServiceJsonLd
        name="Accompagnement Certificats d'Économies d'Énergie (CEE)"
        description="Analyse d'éligibilité, montage du dossier CEE, coordination jusqu'à la finalisation administrative."
        url="/prime-cee"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Prime CEE", url: "/prime-cee" },
        ]}
      />
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__content fade-in">
              <div className="hero__badges">
                <span className="tag tag--white">Financement de travaux</span>
                <span className="tag tag--white">Dispositif CEE</span>
                <span className="tag tag--white">Rénovation énergétique</span>
              </div>

              <h1 className="hero__title">
                Votre projet de rénovation mieux <em>structuré,</em>
                <br />
                mieux financé, mieux piloté.
              </h1>

              <p className="hero__subtitle">
                Le mécanisme des Certificats d&apos;Économies d&apos;Énergie peut constituer un
                levier de financement réel dans le cadre de certains travaux. ECOPRORENOVE vous
                accompagne pour comprendre ce dispositif, vérifier l&apos;éligibilité de votre projet
                et sécuriser votre parcours — de l&apos;analyse jusqu&apos;à la finalisation
                administrative.
              </p>

              <div className="hero__actions">
                <a href="#contact" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  Étudier mon projet gratuitement
                </a>
                <a href="#methode" className="btn btn--secondary">Voir notre méthode</a>
              </div>

              <div className="hero__reassurance">
                {["Accompagnement de bout en bout", "Analyse de faisabilité personnalisée", "Sans engagement initial"].map((t) => (
                  <div key={t} className="hero__reassurance-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.65)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="hero__visual fade-in delay-3">
              <div className="hero__img-placeholder">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                <span>Insérez votre visuel ici<br /><small>Recommandé : 800 × 600 px</small></span>
              </div>

              <div className="hero__stat-card">
                <div className="hero__stat-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#49a739" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <div className="hero__stat-text">
                  <strong>Économies d&apos;énergie</strong>
                  Un projet structuré &amp; optimisé
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY RENOVATE */}
      <section className="why-renovate" id="pourquoi">
        <div className="container">
          <div className="why-renovate__header fade-in">
            <p className="section-label">Enjeux &amp; bénéfices</p>
            <h2 className="section-title">
              Pourquoi engager des travaux de<br />
              <em>rénovation énergétique</em>&nbsp;?
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Rénover un bâtiment ne se résume pas à une démarche administrative. C&apos;est un investissement concret, qui agit sur les consommations, le confort, la valeur et l&apos;avenir du patrimoine.
            </p>
          </div>

          <div className="why-renovate__grid">
            {[
              ["Réduction des consommations", "Des bâtiments mieux isolés, mieux équipés et mieux régulés consomment moins. Réduire sa facture énergétique commence par agir sur l'enveloppe du bâtiment et les équipements techniques."],
              ["Meilleure maîtrise du budget", "Stabiliser les charges énergétiques, c'est retrouver une lisibilité financière. En entreprise ou en copropriété, cette prévisibilité change la nature des arbitrages budgétaires."],
              ["Performance du bâtiment", "Un bâtiment plus performant répond mieux aux usages actuels — qu'il s'agisse d'un immeuble tertiaire, d'une installation industrielle ou d'un patrimoine résidentiel collectif."],
              ["Amélioration du confort", "Température homogène, qualité d'air, luminosité optimisée : des travaux bien menés améliorent directement le quotidien des occupants — salariés, résidents ou usagers."],
              ["Valorisation du patrimoine", "Un bâtiment rénové se valorise. Dans un contexte où la performance énergétique devient un critère central, investir sur l'efficacité, c'est aussi protéger et renforcer la valeur de son actif."],
              ["Vision long terme", "Les contraintes réglementaires évoluent. Anticiper les obligations de performance énergétique, c'est éviter les rattrapages coûteux et piloter le bâtiment avec une vraie vision stratégique."],
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

      {/* CEE MECHANISM */}
      <section className="cee-mechanism" id="cee">
        <div className="container">
          <div className="cee-mechanism__header fade-in">
            <p className="section-label">Le dispositif expliqué</p>
            <h2 className="section-title">
              Comprendre le mécanisme<br />
              des <em>Certificats d&apos;Économies d&apos;Énergie</em>
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Les CEE constituent un mécanisme incitatif mis en place par l&apos;État pour encourager les économies d&apos;énergie. Comprendre son fonctionnement est la première étape pour évaluer si votre projet peut en bénéficier.
            </p>
          </div>

          <div className="cee-mechanism__grid">
            <div className="cee-card fade-in delay-1">
              <div className="cee-card__number">01 — Qu&apos;est-ce que c&apos;est&nbsp;?</div>
              <h3 className="cee-card__title">Un mécanisme public d&apos;incitation aux économies d&apos;énergie</h3>
              <p className="cee-card__text">
                Les Certificats d&apos;Économies d&apos;Énergie (CEE) sont un dispositif réglementaire français qui oblige les fournisseurs d&apos;énergie — appelés &quot;obligés&quot; — à soutenir des actions d&apos;économies d&apos;énergie auprès des ménages, des entreprises et des collectivités. En pratique, ces acteurs financent ou soutiennent des opérations de rénovation qui répondent à des critères techniques précis. Lorsqu&apos;un projet y est éligible, cela peut représenter un financement partiel des travaux — sous forme de prime, de prise en charge ou d&apos;abondement selon les modalités retenues.
              </p>
            </div>
            <div className="cee-card fade-in delay-2">
              <div className="cee-card__number">02 — Quels projets sont concernés&nbsp;?</div>
              <h3 className="cee-card__title">Des opérations encadrées par des fiches techniques</h3>
              <p className="cee-card__text">
                Toutes les opérations de travaux ne sont pas éligibles aux CEE. Le dispositif repose sur des fiches d&apos;opérations standardisées qui définissent précisément les types de travaux concernés, les exigences de performance technique, et les conditions d&apos;application — selon la nature du bâtiment, l&apos;usage, la solution retenue et les critères applicables au moment du dossier. L&apos;éligibilité ne se présume pas : elle se vérifie. C&apos;est pourquoi une analyse préalable du projet est indispensable avant d&apos;engager les démarches.
              </p>
            </div>
            <div className="cee-card fade-in delay-3">
              <div className="cee-card__number">03 — Pourquoi se faire accompagner&nbsp;?</div>
              <h3 className="cee-card__title">Un sujet technique, administratif et stratégique</h3>
              <p className="cee-card__text">
                Le mécanisme des CEE est soumis à des exigences précises : date d&apos;engagement antérieure aux travaux, conformité technique des équipements, qualité des artisans intervenants, complétude du dossier administratif. Un dossier mal structuré ou déposé trop tard peut aboutir à un refus ou à une perte de droits à financement. Se faire accompagner permet de sécuriser chaque étape, de vérifier les conditions en amont et de piloter le parcours avec méthode — sans laisser de financement potentiel sur la table.
              </p>
            </div>
          </div>

          <div className="cee-notice fade-in">
            <strong>À noter :</strong> le niveau de financement mobilisable via les CEE dépend du type de travaux, du bâtiment, des critères techniques et du contexte du projet. Il n&apos;existe pas de montant standard ou garanti. ECOPRORENOVE s&apos;engage à analyser votre situation et à vous donner une vision claire et honnête des possibilités.
          </div>
        </div>
      </section>

      {/* WORK TYPES */}
      <section className="work-types" id="travaux">
        <div className="container">
          <div className="work-types__inner">
            <div>
              <p className="section-label fade-in">Opérations concernées</p>
              <h2 className="work-types__title fade-in">
                Quels types de travaux<br />
                peuvent être concernés&nbsp;?
              </h2>
              <div className="divider fade-in"></div>
              <p className="work-types__intro fade-in">
                Sans constituer une liste exhaustive, plusieurs familles de travaux sont susceptibles d&apos;être valorisées dans le cadre du dispositif CEE — selon les critères applicables, la nature du bâtiment et la solution technique retenue.
              </p>

              <div className="work-list">
                {[
                  ["Isolation thermique", "Murs, toitures, planchers, combles — selon les critères de performance applicables à l'opération concernée."],
                  ["Éclairage performant", "Remplacement de systèmes d'éclairage vétustes par des solutions à haute efficacité, notamment en contexte tertiaire ou industriel."],
                  ["Ventilation & traitement de l'air", "Systèmes de ventilation mécanique contrôlée (VMC) double flux et solutions d'amélioration de la qualité d'air selon les critères d'éligibilité."],
                  ["Équipements techniques & thermiques", "Chaudières, pompes à chaleur, équipements de chauffage ou de refroidissement à haute performance selon les opérations standardisées applicables."],
                  ["Régulation & GTB (selon éligibilité)", "Systèmes de gestion technique du bâtiment pour certains contextes tertiaires ou industriels, selon les conditions d'application de l'opération concernée."],
                ].map(([n, d], i) => (
                  <div key={n} className={`work-item fade-in delay-${i + 1}`}>
                    <div className="work-item__icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#49a739" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
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
                <h3 className="work-caution__title">Ce qu&apos;il faut retenir avant de se lancer</h3>
                <p className="work-caution__text">
                  Même si votre projet porte sur des travaux susceptibles d&apos;être concernés par les CEE, l&apos;éligibilité n&apos;est pas automatique. Plusieurs conditions doivent être réunies pour que le dossier soit recevable.
                </p>
                <ul>
                  {[
                    <>Les démarches doivent être initiées <strong>avant le début des travaux</strong></>,
                    <>Les équipements doivent répondre à des <strong>critères techniques précis</strong></>,
                    <>La nature du bâtiment et son usage <strong>influent sur l&apos;éligibilité</strong></>,
                    <>Le dossier administratif doit être <strong>complet et conforme</strong></>,
                    <>Certaines opérations requièrent un <strong>professionnel qualifié RGE</strong></>,
                  ].map((node, i) => (
                    <li key={i}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#49a739" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                      <span>{node}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 28 }}>
                  <a href="#contact" className="btn btn--primary" style={{ fontSize: ".88rem", padding: "13px 22px" }}>
                    Faire analyser mon projet
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METHOD (dark) */}
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
              ["03", "Identification des opérations pertinentes", "Nous identifions les opérations CEE susceptibles de s'appliquer à votre projet et vérifions leur adéquation avec les critères réglementaires en vigueur."],
              ["04", "Vérification des conditions d'éligibilité", "Nous passons en revue les exigences techniques, administratives et réglementaires pour vous donner une vision honnête et précise de la faisabilité du dossier."],
              ["05", "Estimation du financement mobilisable", "Sur la base de l'analyse, nous vous aidons à évaluer le financement potentiellement mobilisable et à mieux lire le reste à charge réel du projet."],
              ["06", "Structuration & montage du dossier", "Nous prenons en charge la structuration du dossier administratif : pièces requises, chronologie à respecter, conformité des documents produits par les entreprises intervenantes."],
            ].map(([n, t, p], i) => (
              <div key={n} className={`method__step fade-in delay-${(i % 3) + 1}`}>
                <div className="method__step-num">{n}</div>
                <h3 className="method__step-title">{t}</h3>
                <p className="method__step-text">{p}</p>
              </div>
            ))}
            <div className="method__step fade-in delay-1" style={{ gridColumn: "1 / -1", background: "rgba(255,255,255,.10)" }}>
              <div className="method__step-num">07</div>
              <h3 className="method__step-title">Accompagnement jusqu&apos;à la finalisation</h3>
              <p className="method__step-text">Nous restons présents pendant toute la durée du projet — coordination, suivi administratif, points d&apos;avancement — jusqu&apos;à la clôture complète du dossier et la validation finale.</p>
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

            <div>
              <p className="section-label fade-in">Pilotage &amp; coordination</p>
              <h2 className="section-title fade-in">
                La gestion de projet avec<br />
                <em>ECOPRORENOVE</em>
              </h2>
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
                    <div>
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
              ["Accompagnement personnalisé", "Chaque projet est différent. Nous construisons une réponse adaptée à votre situation, votre bâtiment et vos contraintes — pas une offre standardisée."],
              ["Vision à 360°", "Technique, administrative et opérationnelle : notre approche couvre toutes les dimensions du projet pour éviter les angles morts et les mauvaises surprises."],
              ["Sécurisation du parcours", "Nous intervenons en amont pour anticiper les conditions d'éligibilité, respecter les chronologies et structurer les dossiers — avant que les erreurs ne coûtent."],
              ["Simplification des démarches", "Nous prenons en charge la complexité administrative pour que vous puissiez vous concentrer sur l'essentiel : vos travaux et vos objectifs."],
              ["Honnêteté & transparence", "Nous ne promettons pas ce que nous ne pouvons pas tenir. Si votre projet n'est pas éligible, nous vous le disons clairement — et nous cherchons d'autres leviers avec vous."],
              ["Approche terrain & concrète", "Notre démarche est ancrée dans la réalité des projets : contraintes de chantier, délais, artisans, dossiers techniques. Pas de promesses théoriques."],
              ["Structuration du projet", "Nous aidons à donner une architecture claire au projet : travaux, financement, planning, acteurs — pour que rien ne soit laissé au hasard."],
              ["Optimisation du financement", "Nous cherchons à identifier tous les leviers mobilisables pour améliorer l'équation financière du projet — sans inventer ce qui n'existe pas."],
            ].map(([t, p], i) => (
              <div key={t} className={`why-us-card fade-in delay-${(i % 4) + 1}`}>
                <div className="why-us-card__icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
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
            <p className="value-banner__eyebrow">Notre conviction</p>
            <h2 className="value-banner__title">
              Un projet plus clair,<br />
              un parcours mieux maîtrisé.
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
              Ce que vous voulez<br />
              savoir sur les <em>CEE</em>
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Des réponses claires aux questions que tout porteur de projet finit par se poser.
            </p>
          </div>
          <div className="faq__list">
            <Faq
              items={[
                { q: "Que sont les Certificats d'Économies d'Énergie (CEE) ?", a: "Les Certificats d'Économies d'Énergie sont un mécanisme réglementaire français qui oblige les fournisseurs d'énergie à financer des actions d'économies d'énergie. Concrètement, lorsqu'un projet de travaux est éligible à ce dispositif, il peut bénéficier d'une aide financière de la part de ces acteurs — sous différentes formes selon les modalités retenues. Ce mécanisme existe depuis les années 2000 et a été renouvelé à plusieurs reprises." },
                { q: "Tous les travaux sont-ils automatiquement finançables via les CEE ?", a: "Non. L'éligibilité aux CEE n'est pas automatique et dépend de plusieurs critères : la nature des travaux, les équipements installés, le type de bâtiment, la qualité de l'entreprise intervenante et la conformité administrative du dossier. Certaines opérations sont couvertes par des fiches standardisées, d'autres ne le sont pas. C'est pourquoi une analyse préalable est toujours recommandée avant d'engager les démarches." },
                { q: "Le financement CEE couvre-t-il la totalité du coût des travaux ?", a: "Non. Le mécanisme des CEE constitue un financement partiel du projet. Le montant mobilisable dépend du type d'opération, de la taille du projet, des équipements retenus et du contexte de marché. Il ne faut pas s'attendre à une prise en charge totale. L'objectif est d'améliorer l'équation financière du projet — pas de l'annuler. ECOPRORENOVE vous aide à estimer ce financement potentiel de façon honnête, sans surestimation." },
                { q: "Pourquoi se faire accompagner pour un dossier CEE ?", a: "Le dispositif CEE est encadré par des règles précises qui évoluent régulièrement. Une erreur dans la chronologie, un équipement non conforme ou un dossier incomplet peuvent suffire à rendre un dossier irrecevable. Se faire accompagner permet de sécuriser chaque étape, de ne pas passer à côté d'un financement auquel on a droit, et de piloter le projet avec méthode plutôt qu'en subissant les aléas administratifs." },
                { q: "À quel moment faut-il lancer les démarches CEE ?", a: "Le plus tôt possible — et impérativement avant le début des travaux. C'est une condition sine qua non pour que le dossier soit recevable : la demande de financement doit être initiée avant que les travaux ne démarrent. Attendre la fin du chantier pour s'interroger sur le sujet, c'est souvent trop tard. Nous recommandons d'aborder ce point dès la phase de conception ou de chiffrage du projet." },
                { q: "ECOPRORENOVE peut-il accompagner l'ensemble du projet ?", a: "Oui. Notre rôle ne se limite pas au volet CEE. Nous intervenons sur l'ensemble du parcours : analyse du besoin, cohérence technique du projet, identification des financement possibles, structuration du dossier, coordination des acteurs et suivi jusqu'à la finalisation. L'objectif est que vous ayez un interlocuteur clair, capable de piloter les différentes dimensions de votre projet de bout en bout." },
                { q: "Comment savoir si mon bâtiment ou mes travaux sont éligibles ?", a: "La meilleure façon de le savoir est de soumettre votre projet à une analyse. Il n'existe pas de réponse universelle : l'éligibilité dépend d'un ensemble de paramètres spécifiques à votre situation — nature du bâtiment, usage, travaux envisagés, équipements ciblés et contexte réglementaire. ECOPRORENOVE réalise cette analyse pour vous, de façon claire et sans engagement, afin que vous puissiez prendre les bonnes décisions en connaissance de cause." },
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
              Votre projet mérite<br />
              d&apos;être <em>bien étudié.</em>
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

      {/* CONTACT */}
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
                  <span>Réponse sous 48h ouvrées</span>
                </div>
              </div>
            </div>

            <div className="form-card fade-in delay-2">
              <h3 className="form-card__title">Étude de votre projet — sans engagement</h3>
              <ContactForm source="prime-cee">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="f-prenom">Prénom *</label>
                    <input className="form-input" type="text" id="f-prenom" name="prenom" placeholder="Votre prénom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="f-nom">Nom *</label>
                    <input className="form-input" type="text" id="f-nom" name="nom" placeholder="Votre nom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="f-societe">Société</label>
                    <input className="form-input" type="text" id="f-societe" name="societe" placeholder="Nom de votre société (si applicable)" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="f-tel">Téléphone *</label>
                    <input className="form-input" type="tel" id="f-tel" name="telephone" placeholder="06 XX XX XX XX" required />
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="f-email">Email *</label>
                    <input className="form-input" type="email" id="f-email" name="email" placeholder="votre@email.fr" required />
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="f-projet">Type de projet</label>
                    <select className="form-select" id="f-projet" name="type_projet" defaultValue="">
                      <option value="" disabled>Sélectionnez le type de projet</option>
                      <option value="tertiaire">Bâtiment tertiaire / bureau</option>
                      <option value="industriel">Bâtiment industriel</option>
                      <option value="copropriete">Copropriété / résidentiel collectif</option>
                      <option value="commerce">Commerce / surface commerciale</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="f-message">Décrivez votre projet</label>
                    <textarea className="form-textarea" id="f-message" name="message" placeholder="Nature des travaux envisagés, superficie du bâtiment, contraintes particulières, questions spécifiques..."></textarea>
                  </div>
                  <div className="form-group form-group--full">
                    <div className="form-consent">
                      <input type="checkbox" id="f-rgpd" name="rgpd" required />
                      <label htmlFor="f-rgpd">J&apos;accepte que mes données soient utilisées par ECOPRORENOVE dans le cadre de l&apos;étude de mon projet. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données.</label>
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
    </div>
  );
}

import type { Metadata } from "next";
import Faq from "@/components/Faq";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Destratificateur d'air — économies de chauffage en grand volume",
  description:
    "Redistribuez la chaleur accumulée sous le plafond. Jusqu'à 30 % d'économies de chauffage en entrepôts, ateliers, gymnases. Éligible CEE.",
  alternates: { canonical: "/destratificateur-air" },
  openGraph: {
    url: "/destratificateur-air",
    title: "Destratificateur d'air — ECOPRORENOVE",
    description:
      "Redistribution thermique en grand volume. Économies de chauffage mesurables, financement CEE possible.",
  },
};

export default function DestratificateurPage() {
  return (
    <div className="page-service page-destrat">
      <ServiceJsonLd
        name="Destratificateur d'air"
        description="Redistribution de la chaleur accumulée sous le plafond. Économies de chauffage en grand volume, éligible CEE."
        url="/destratificateur-air"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Destratificateur d'air", url: "/destratificateur-air" },
        ]}
      />
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__content fade-in">
              <div className="hero__badges">
                <span className="tag tag--white">Destratificateur d&apos;air</span>
                <span className="tag tag--white">Économies de chauffage</span>
                <span className="tag tag--accent">Éligible CEE</span>
              </div>

              <h1 className="hero__title">
                La chaleur <em>que vous payez</em><br />
                reste-t-elle là<br />
                où vous en avez besoin&nbsp;?
              </h1>

              <p className="hero__subtitle">
                Dans les grands volumes, la chaleur monte naturellement vers le plafond — loin des
                occupants. Le destratificateur d&apos;air corrige ce phénomène, redistribue
                l&apos;énergie déjà produite et réduit significativement les consommations de
                chauffage. Sans remplacer votre installation existante.
              </p>

              <div className="hero__actions">
                <a href="#contact" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  Obtenir une étude gratuite
                </a>
                <a href="#fonctionnement" className="btn btn--secondary">Voir le fonctionnement</a>
              </div>

              <div className="hero__reassurance">
                {["Compatible toutes installations", "Sans travaux lourds", "Financement CEE possible"].map((t) => (
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
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#49a739" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <div className="hero__stat-text">
                  <strong>Jusqu&apos;à 30 % d&apos;économies*</strong>
                  sur la facture de chauffage
                </div>
              </div>

              <div className="hero__cee-badge">
                <span>CEE</span>
                Éligible
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM — stratification */}
      <section className="problem" id="probleme">
        <div className="container">
          <div className="problem__inner">
            <div className="strat-schema fade-in">
              <p className="strat-schema__title">Bâtiment sans destratificateur</p>
              <div className="strat-building">
                <div className="strat-zone strat-zone--hot">
                  <span className="strat-zone__label">Plafond (≥ 8 m)</span>
                  <span className="strat-zone__temp">+25 °C</span>
                </div>
                <div className="strat-zone strat-zone--warm">
                  <span className="strat-zone__label">Mi-hauteur</span>
                  <span className="strat-zone__temp">+18 °C</span>
                </div>
                <div className="strat-zone strat-zone--cold">
                  <span className="strat-zone__label">Zone occupée (sol)</span>
                  <span className="strat-zone__temp">+13 °C</span>
                </div>
              </div>
              <div className="strat-schema__legend">
                <div className="strat-legend-item">
                  <div className="strat-legend-dot" style={{ background: "rgba(255,107,53,.7)" }}></div>
                  Chaleur inutilisée
                </div>
                <div className="strat-legend-item">
                  <div className="strat-legend-dot" style={{ background: "rgba(73,167,57,.6)" }}></div>
                  Zone froide occupée
                </div>
              </div>
              <p className="strat-schema__caption">
                Écart type : 8 à 15 °C entre le sol et le plafond<br />
                dans un grand volume non traité
              </p>
            </div>

            <div className="problem__content fade-in delay-2">
              <p className="section-label">Le phénomène à corriger</p>
              <h2 className="section-title">
                La stratification thermique&nbsp;:<br />
                <em>la chaleur monte,<br />les coûts aussi.</em>
              </h2>
              <div className="divider"></div>
              <p className="section-intro">
                Dans tout grand volume chauffé — entrepôt, atelier, salle de sport, hangar — la
                chaleur chaude, plus légère que l&apos;air froid, monte naturellement vers le
                plafond. Résultat&nbsp;: vous chauffez là où personne ne se trouve, et les zones
                occupées restent inconfortables.
              </p>
              <div className="problem__list">
                {[
                  ["Des économies d'énergie qui s'évaporent en hauteur", "Votre système de chauffage tourne davantage pour tenter de maintenir une température confortable au niveau du sol — compensant une chaleur déjà produite mais mal répartie."],
                  ["Un confort thermique dégradé pour les occupants", "Les salariés, sportifs ou visiteurs évoluent dans des zones plus froides que prévu malgré une facture énergétique élevée. Le sentiment d'inconfort persiste, même avec un chauffage en marche."],
                  ["Une facture qui ne reflète pas la performance réelle", "Le coût de chauffage reste élevé sans que les occupants en bénéficient pleinement. C'est une perte d'énergie évitable — et coûteuse — qui peut être traitée efficacement."],
                ].map(([t, p]) => (
                  <div key={t} className="problem-item">
                    <div className="problem-item__icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
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

      {/* HOW IT WORKS — before/after + steps */}
      <section className="how-it-works" id="fonctionnement">
        <div className="container">
          <div className="how-it-works__header fade-in">
            <p className="section-label">Principe de fonctionnement</p>
            <h2 className="section-title">
              Comment fonctionne<br />
              un <em>destratificateur d&apos;air</em>&nbsp;?
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Le destratificateur est un brasseur d&apos;air à faible consommation, installé en
              hauteur, qui redescend en douceur la chaleur accumulée sous le plafond vers la zone
              occupée — sans créer de courant d&apos;air perceptible.
            </p>
          </div>

          <div className="before-after fade-in">
            <div className="ba-card ba-card--before">
              <span className="ba-card__label">Avant — Sans destratificateur</span>
              <div className="ba-card__building">
                <div className="ba-zone">
                  <span className="ba-zone-text" style={{ color: "var(--accent)", fontWeight: 700 }}>Chaleur perdue — +24 °C</span>
                </div>
                <div className="ba-zone">
                  <span className="ba-zone-text">Zone intermédiaire</span>
                </div>
                <div className="ba-zone">
                  <span className="ba-zone-text" style={{ color: "var(--green-dark)", fontWeight: 700 }}>Zone froide — +13 °C</span>
                </div>
              </div>
              <p className="ba-card__desc">La chaleur stagne en hauteur. Le chauffage compense en permanence. Les coûts augmentent, le confort reste insuffisant.</p>
            </div>

            <div className="ba-arrow fade-in delay-2">
              <div className="ba-arrow__circle">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
              <span style={{ fontSize: ".75rem", fontWeight: 800, color: "var(--green)", textTransform: "uppercase", letterSpacing: ".05em" }}>Solution</span>
            </div>

            <div className="ba-card ba-card--after">
              <span className="ba-card__label">Après — Avec destratificateur</span>
              <div className="ba-card__building">
                <div className="ba-zone">
                  <span className="ba-zone-text" style={{ color: "var(--green-dark)", fontWeight: 700 }}>Température homogène — +19 °C</span>
                </div>
                <div className="ba-zone">
                  <span className="ba-zone-text" style={{ color: "var(--green-dark)", fontWeight: 700 }}>Température homogène — +19 °C</span>
                </div>
                <div className="ba-zone">
                  <span className="ba-zone-text" style={{ color: "var(--green-dark)", fontWeight: 700 }}>Confort optimisé — +19 °C</span>
                </div>
              </div>
              <p className="ba-card__desc">La chaleur est redistribuée uniformément. Le chauffage fonctionne moins longtemps. Confort amélioré, consommations réduites.</p>
            </div>
          </div>

          <div className="how-steps fade-in" style={{ marginTop: 48 }}>
            {[
              ["01", "Aspiration de la chaleur haute", "Le destratificateur capte en douceur la masse d'air chaud accumulée sous le plafond — sans perturbation ni courant d'air."],
              ["02", "Redescente vers la zone occupée", "Un flux laminaire, vertical et silencieux pousse cet air chaud vers le bas, là où se trouvent les occupants et les équipements."],
              ["03", "Homogénéisation de la température", "L'écart entre sol et plafond se réduit significativement. La température perçue au niveau des occupants s'améliore sans modifier le point de consigne."],
              ["04", "Réduction du fonctionnement du chauffage", "Le thermostat est atteint plus rapidement et plus efficacement. Le temps de chauffe diminue — et avec lui, la consommation énergétique."],
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
              installation <em>bien dimensionnée</em>
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Un destratificateur correctement dimensionné et installé produit des effets mesurables
              sur la performance énergétique et le confort du bâtiment.
            </p>
          </div>
          <div className="benefits__grid">
            {[
              { v: "–15 à 30 %", t: "Réduction de la consommation de chauffage", p: "En redistribuant la chaleur existante plutôt qu'en en produisant davantage, le destratificateur réduit significativement la sollicitation du système de chauffage.", d: "* Estimation variable selon la hauteur du bâtiment, le type de chauffage et les conditions initiales." },
              { v: "+3 à 6 °C", t: "Amélioration du confort ressenti", p: "La température perçue au niveau des occupants augmente sans modifier le thermostat. Le sentiment de froid disparaît, même en période hivernale intense.", d: "* Gain constaté selon la configuration initiale du bâtiment." },
              { v: "1 à 3 ans", t: "Retour sur investissement rapide", p: "La faible consommation électrique des appareils, combinée aux économies générées sur le chauffage, produit un retour sur investissement généralement rapide — selon le contexte et le projet.", d: "* Délai indicatif variable selon la taille et le contexte du projet." },
              { v: "≈ 50 W", t: "Consommation électrique très faible", p: "Un destratificateur consomme très peu d'électricité — de l'ordre de quelques dizaines de watts — pour redistribuer une énergie thermique déjà produite et payée." },
              { v: "0 %", t: "Sans remplacement de l'installation existante", p: "Le destratificateur s'intègre à votre système de chauffage actuel — gaz, fuel, électrique, aérotherme ou autre — sans nécessiter de remplacement ni de transformation majeure." },
              { v: "12 mois", t: "Usage été comme hiver", p: "En été, le destratificateur peut fonctionner en mode ventilation pour améliorer la circulation de l'air, le confort thermique et l'homogénéité de la température dans le volume." },
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
            <p className="section-label">Applications</p>
            <h2 className="section-title">
              Quels bâtiments sont<br />
              <em>concernés</em>&nbsp;?
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Le destratificateur est particulièrement efficace dans les bâtiments à grand volume avec une hauteur sous plafond supérieure à 5 mètres. La stratification thermique y est la plus prononcée, et les gains les plus significatifs.
            </p>
          </div>
          <div className="buildings__grid">
            {[
              ["Entrepôts & logistique", "Grands volumes, hauteurs importantes, températures à maintenir pour les équipes et les produits stockés."],
              ["Ateliers industriels", "Halls de production, zones de fabrication ou de maintenance nécessitant un confort thermique pour les opérateurs."],
              ["Équipements sportifs", "Gymnases, salles multisports, piscines couvertes — grands volumes à occupants actifs, où le confort thermique est déterminant."],
              ["Grandes surfaces commerciales", "Supermarchés, showrooms, centres commerciaux ou grandes enseignes avec espaces de vente à haut plafond."],
              ["Bâtiments agricoles", "Serres, bâtiments d'élevage ou espaces agricoles nécessitant une température homogène pour les animaux ou les cultures."],
              ["Lieux de culte & patrimoine", "Églises, cathédrales, salles polyvalentes — espaces à très grande hauteur et occupés ponctuellement, où la gestion thermique est complexe."],
              ["Hangars & garages techniques", "Hangars aéronautiques, ateliers municipaux, centres de maintenance — volumes importants avec personnel présent régulièrement."],
              ["Salles événementielles", "Palais des congrès, salles de réception, halls d'exposition — occupations variables nécessitant une réponse thermique rapide et efficace."],
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
            <strong>À noter :</strong> l&apos;intérêt d&apos;un destratificateur se mesure en priorité à la hauteur sous plafond (à partir de 5 m), au volume du bâtiment, au type de chauffage en place et aux usages. ECOPRORENOVE réalise une analyse préalable pour déterminer si votre bâtiment est concerné et dimensionner la solution adaptée.
          </div>
        </div>
      </section>

      {/* CEE BLOCK */}
      <section className="cee-block" id="cee">
        <div className="container">
          <div className="cee-block__inner">
            <div className="cee-block__content fade-in">
              <p className="section-label" style={{ color: "rgba(255,255,255,.55)" }}>Dispositif de financement</p>
              <h2 className="section-title section-title--white">
                Le destratificateur d&apos;air<br />
                peut être <em style={{ color: "#a8e296" }}>finançable</em><br />
                via les CEE
              </h2>
              <div className="divider divider--white"></div>
              <p className="section-intro section-intro--white" style={{ marginBottom: 32 }}>
                Selon les conditions du projet — type de bâtiment, solution technique retenue, critères administratifs et calendrier — l&apos;installation d&apos;un destratificateur peut être éligible au dispositif des Certificats d&apos;Économies d&apos;Énergie. Ce financement peut contribuer à réduire significativement le reste à charge du projet.
              </p>
              <div className="cee-block__cta-wrap">
                <a href="#contact" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  Vérifier mon éligibilité
                </a>
              </div>
            </div>

            <div className="cee-block__cards fade-in delay-2">
              {[
                ["Analyse préalable de l'éligibilité", "Nous vérifions si votre bâtiment et vos travaux remplissent les conditions requises — avant d'engager toute démarche."],
                ["Montage complet du dossier CEE", "Nous structurons et gérons le dossier administratif dans les règles et dans les délais — pour qu'aucune condition ne soit manquée."],
                ["Accompagnement avant, pendant, après", "De la première analyse jusqu'à la validation finale, nous coordonnons chaque étape du parcours — technique, administratif et financier."],
                ["Meilleure lisibilité du reste à charge", "En mobilisant les financements disponibles, nous vous aidons à rendre le coût réel du projet plus clair et plus maîtrisé."],
              ].map(([t, p]) => (
                <div key={t} className="cee-mini-card">
                  <div className="cee-mini-card__icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.8)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <p className="cee-mini-card__title">{t}</p>
                    <p className="cee-mini-card__text">{p}</p>
                  </div>
                </div>
              ))}
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
              De la première conversation à la mise en service, nous structurons chaque étape pour que votre projet soit bien cadré, bien dimensionné et bien financé.
            </p>
          </div>
          <div className="method__steps">
            {[
              ["01", "Échange initial & découverte du projet", "Nous commençons par comprendre votre bâtiment, vos usages, vos contraintes thermiques actuelles et vos objectifs avant toute recommandation."],
              ["02", "Audit de la stratification existante", "Nous analysons les caractéristiques du bâtiment — hauteur, volume, type de chauffage, configuration — pour évaluer la pertinence et le potentiel d'économies."],
              ["03", "Dimensionnement de la solution", "Nous définissons le type, le nombre et la position des appareils pour garantir une couverture homogène et un effet optimal sur l'ensemble du volume."],
              ["04", "Vérification de l'éligibilité CEE", "Nous vérifions les conditions d'éligibilité au dispositif CEE et vous informons de manière claire et honnête des possibilités de financement pour votre projet."],
              ["05", "Structuration & montage du dossier", "Nous préparons l'ensemble des éléments administratifs et techniques nécessaires, en respectant scrupuleusement les chronologies imposées par le dispositif."],
              ["06", "Coordination de l'installation & suivi", "Nous coordonnons les intervenants, assurons le suivi du chantier et veillons à la conformité de l'installation — jusqu'à la réception finale et la clôture du dossier CEE."],
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
              Lancer l&apos;audit de mon bâtiment
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
              Un projet de destratification bien mené, c&apos;est un bon dimensionnement, un dossier CEE structuré et un accompagnement qui va jusqu&apos;au bout. C&apos;est exactement ce que nous faisons.
            </p>
          </div>
          <div className="why-us__grid">
            {[
              ["Interlocuteur unique", "Un seul point de contact pour toutes les dimensions du projet : technique, administrative, financière. Pas de dispersion, pas de coordination à assurer de votre côté."],
              ["Dimensionnement sur mesure", "Chaque bâtiment est différent. Nous ne proposons pas de solution standardisée — nous analysons votre cas et dimensionnons la solution selon vos contraintes réelles."],
              ["Dossier CEE sécurisé", "Nous maîtrisons les règles du dispositif. Nos dossiers sont structurés dans les délais et conformes aux exigences — pour que vous ne perdiez pas de financement potentiel."],
              ["Approche honnête & transparente", "Nous ne promettons que ce que nous pouvons tenir. Si votre projet n'est pas éligible ou si le retour n'est pas au rendez-vous, nous vous le disons clairement."],
            ].map(([t, p], i) => (
              <div key={t} className={`why-us-card fade-in delay-${i + 1}`}>
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
            <p className="value-banner__eyebrow">L&apos;essentiel à retenir</p>
            <h2 className="value-banner__title">
              La chaleur que vous payez est déjà dans votre bâtiment.<br />
              Il faut juste la redistribuer.
            </h2>
            <p className="value-banner__subtitle">
              Le destratificateur ne produit pas de chaleur — il redistribue celle que vous avez déjà produite. Un principe simple, un effet mesurable, un accompagnement de bout en bout. C&apos;est la promesse ECOPRORENOVE.
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
              savoir sur le <em>destratificateur</em>
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Des réponses claires, honnêtes et directement utiles pour avancer sur votre projet.
            </p>
          </div>
          <div className="faq__list">
            <Faq
              items={[
                { q: "Qu'est-ce qu'un destratificateur d'air exactement ?", a: "Un destratificateur d'air est un appareil électrique à faible consommation, installé en hauteur dans un grand volume chauffé. Son rôle est de brasser l'air en douceur pour redescendre la chaleur accumulée sous le plafond vers les zones occupées. Il ne produit pas de chaleur lui-même — il redistribue celle qui est déjà présente dans le bâtiment mais qui se trouve là où personne ne l'utilise." },
                { q: "Mon bâtiment est-il forcément concerné par la stratification thermique ?", a: "La stratification thermique est un phénomène physique naturel qui touche tous les espaces chauffés. Mais c'est dans les grands volumes — à partir de 5 à 6 mètres de hauteur sous plafond — qu'elle est la plus prononcée et que son impact sur la consommation est le plus significatif. Entrepôts, ateliers, gymnases, halls, lieux de culte, grandes surfaces : ce sont les typologies les plus concernées. Une analyse préalable permet de le confirmer dans votre cas précis." },
                { q: "Est-ce que l'installation perturbe l'activité ou génère des courants d'air désagréables ?", a: "Non. Le destratificateur génère un flux d'air laminaire, vertical et à très faible vitesse — imperceptible pour les occupants. L'objectif est de brasser l'air sans créer de sensation de courant d'air. L'installation elle-même se fait généralement sans interruption d'activité et sans travaux lourds, en quelques heures selon la configuration du site." },
                { q: "Combien vais-je économiser réellement sur ma facture de chauffage ?", a: "Il n'existe pas de chiffre universel — les économies dépendent directement de la hauteur du bâtiment, de son volume, du type de chauffage en place, de l'écart de température initial entre sol et plafond, et des conditions d'usage. Des estimations généralement constatées se situent entre 15 % et 30 % sur la consommation de chauffage, mais ce chiffre doit être validé par une analyse sérieuse de votre situation. C'est précisément ce que nous faisons lors de notre audit préalable." },
                { q: "Le destratificateur est-il compatible avec mon système de chauffage actuel ?", a: "Oui, dans la grande majorité des cas. Le destratificateur est une solution complémentaire qui s'intègre à votre installation existante sans la remplacer — qu'il s'agisse d'un chauffage gaz, fuel, électrique, à aérothermes, à radiants ou autre. Il ne nécessite pas de modifier votre installation de chauffage. C'est l'un des principaux atouts de cette solution : elle valorise l'énergie que vous produisez déjà." },
                { q: "L'installation d'un destratificateur est-elle éligible aux CEE ?", a: "Selon les conditions du projet, cette opération peut être valorisable dans le cadre du dispositif des Certificats d'Économies d'Énergie. L'éligibilité dépend du type de bâtiment, des équipements retenus, de la conformité technique et du respect de la chronologie administrative — notamment l'engagement du dossier avant le début des travaux. ECOPRORENOVE analyse votre situation et vous indique si et dans quelles conditions votre projet peut y prétendre." },
                { q: "Combien d'appareils faut-il pour couvrir mon bâtiment ?", a: "Le nombre et le positionnement des appareils dépendent de la surface au sol, de la hauteur sous plafond, de la configuration des obstacles, du type de chauffage et de l'objectif de brassage recherché. Un bon dimensionnement est indispensable pour garantir l'efficacité — trop peu d'appareils et la stratification persiste, trop ou mal positionnés et l'investissement n'est pas optimisé. C'est précisément ce que nous calculons lors de notre étude technique préalable." },
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
              Votre bâtiment mérite<br />
              une <em>analyse sérieuse.</em>
            </h2>
            <p className="cta-final__subtitle">
              Parlons de votre projet. Nous évaluons ensemble le potentiel de votre bâtiment, la solution adaptée à votre situation et les conditions d&apos;accès au financement CEE — sans engagement.
            </p>
            <div className="cta-final__actions">
              <a href="#contact" className="btn btn--primary btn--lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                Demander un audit gratuit
              </a>
              <a href="#" aria-disabled="true" tabIndex={-1} title="Numéro à venir" className="btn btn--secondary btn--lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.63-.63a2 2 0 0 1 2.11-.45c.9.386 1.86.647 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Nous appeler
              </a>
            </div>
            <div className="cta-final__reassurance">
              {["Audit sans engagement", "Étude de faisabilité CEE incluse", "Réponse sous 48h ouvrées"].map((t) => (
                <div key={t} className="cta-final__reassurance-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.5)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-section__inner">
            <div className="contact-info fade-in">
              <p className="section-label">Nous contacter</p>
              <h2 className="contact-info__title">Parlons de<br />votre bâtiment</h2>
              <div className="divider"></div>
              <p className="contact-info__text">
                Que vous ayez un projet précis ou que vous souhaitiez simplement savoir si votre bâtiment est concerné, nous sommes disponibles pour répondre à vos questions et vous donner une première orientation claire.
              </p>
              <div className="contact-info__items">
                <div className="contact-info__item">
                  <div className="contact-info__item-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.63-.63a2 2 0 0 1 2.11-.45c.9.386 1.86.647 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <span>+33 X XX XX XX XX</span>
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
              <h3 className="form-card__title">Demande d&apos;audit — sans engagement</h3>
              <form action="#" method="POST" noValidate>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="d-prenom">Prénom *</label>
                    <input className="form-input" type="text" id="d-prenom" name="prenom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="d-nom">Nom *</label>
                    <input className="form-input" type="text" id="d-nom" name="nom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="d-societe">Société</label>
                    <input className="form-input" type="text" id="d-societe" name="societe" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="d-tel">Téléphone *</label>
                    <input className="form-input" type="tel" id="d-tel" name="telephone" required />
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="d-email">Email *</label>
                    <input className="form-input" type="email" id="d-email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="d-batiment">Type de bâtiment</label>
                    <select className="form-select" id="d-batiment" name="type_batiment" defaultValue="">
                      <option value="" disabled>Sélectionnez</option>
                      <option value="entrepot">Entrepôt / logistique</option>
                      <option value="atelier">Atelier industriel</option>
                      <option value="sport">Équipement sportif</option>
                      <option value="commerce">Grande surface / commerce</option>
                      <option value="agricole">Bâtiment agricole</option>
                      <option value="culte">Lieu de culte / patrimoine</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="d-hauteur">Hauteur sous plafond (m)</label>
                    <input className="form-input" type="text" id="d-hauteur" name="hauteur" placeholder="Ex. 8 m" />
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="d-message">Décrivez votre projet</label>
                    <textarea className="form-textarea" id="d-message" name="message" placeholder="Surface au sol, type de chauffage, contraintes d'activité, questions spécifiques..." rows={4}></textarea>
                  </div>
                  <div className="form-group form-group--full">
                    <div className="form-consent">
                      <input type="checkbox" id="d-rgpd" name="rgpd" required />
                      <label htmlFor="d-rgpd">J&apos;accepte que mes données soient utilisées par ECOPRORENOVE pour l&apos;étude de mon projet. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles.</label>
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

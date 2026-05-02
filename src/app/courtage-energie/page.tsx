import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import Faq from "@/components/Faq";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ScrollNav from "@/components/ScrollNav";
import RelatedSolutions from "@/components/RelatedSolutions";

export const metadata: Metadata = {
  title: "Courtage en énergie gaz & électricité — ECOPRORENOVE",
  description:
    "Courtier indépendant en énergie : mise en concurrence, négociation et suivi de vos contrats gaz et électricité. Aucune exclusivité fournisseur.",
  alternates: { canonical: "/courtage-energie" },
  openGraph: {
    url: "/courtage-energie",
    title: "Courtage en énergie — ECOPRORENOVE",
    description:
      "Mise en concurrence des fournisseurs gaz et électricité, arbitrage tarifaire, suivi continu — sans lien d'exclusivité avec aucun fournisseur.",
  },
};

export default function CourtageEnergiePage() {
  return (
    <div className="page-service solution-template page-courtage-energie">
      <ServiceJsonLd
        name="Courtage en énergie gaz et électricité"
        description="Mise en concurrence des fournisseurs, négociation des contrats gaz et électricité, suivi continu. Courtier indépendant — aucune exclusivité fournisseur."
        url="/courtage-energie"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Courtage en énergie", url: "/courtage-energie" },
        ]}
      />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__content fade-in">
              <h1 className="hero__title hero__title--t1">
                <span className="hero__title-eyebrow">Courtage gaz &amp; électricité</span>
                <span className="hero__title-anchor">Vos contrats d&apos;énergie</span>
                <span className="hero__title-italic">négociés par un partenaire indépendant.</span>
              </h1>

              <p className="hero__stat-line">
                Indépendant — <strong>aucune commission cachée</strong>
              </p>

              <p className="hero__subtitle">
                Mise en concurrence des fournisseurs gaz et électricité, lecture comparée des
                offres, arbitrage tarifaire et suivi des renouvellements. Aucun lien d&apos;exclusivité
                avec un fournisseur — notre rémunération ne dépend pas du choix que vous ferez.
              </p>

              <div className="hero__actions">
                <a href="#contact" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  Faire négocier mes contrats
                </a>
                <a href="#methode" className="btn btn--secondary">Voir notre méthode</a>
              </div>
            </div>

            <div className="hero__visual fade-in delay-3">
              <div className="hero__img hero__img--placeholder" aria-label="Photo à venir" />
              <div className="hero__bubble hero__bubble--temp">
                <strong>€/MWh</strong>
                <small>arbitrage<br />tarifaire</small>
              </div>
              <div className="hero__bubble hero__bubble--life">
                <strong>Multi-</strong>
                <small>fournisseurs<br />consultés</small>
              </div>
              <div className="hero__bubble hero__bubble--cee">
                <strong>0&nbsp;%</strong>
                <small>exclusivité<br />fournisseur</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollNav
        sections={[
          { id: "concept", label: "Le courtage" },
          { id: "valeur", label: "Pourquoi" },
          { id: "methode", label: "Méthode" },
          { id: "independance", label: "Indépendance" },
          { id: "perimetre", label: "Périmètre" },
          { id: "faq", label: "FAQ" },
          { id: "contact", label: "Contact" },
        ]}
      />

      {/* HERO BANDEAU */}
      <div className="hero-bandeau">
        <div className="container">
          <div className="hero-bandeau__inner">
            {[
              "Aucune exclusivité fournisseur",
              "Notre rémunération ne dépend pas de votre choix",
              "Suivi jusqu'à l'échéance contractuelle",
            ].map((t) => (
              <div key={t} className="hero-bandeau__item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONCEPT — qu'est-ce que le courtage */}
      <section className="benefits" id="concept">
        <div className="container">
          <div className="benefits__header fade-in">
            <p className="section-label">Le courtage en énergie</p>
            <h2 className="section-title">
              Un marché complexe,<br />
              une <em>lecture experte.</em>
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Le marché de l&apos;énergie professionnel est libéralisé depuis 2007. Des dizaines
              de fournisseurs, des structures tarifaires opaques, des prix de gros volatils.
              Un courtier indépendant pilote la mise en concurrence pour vous, lit les offres
              à votre place et sécurise les conditions de votre contrat sur la durée.
            </p>
          </div>

          <div className="benefits__grid">
            {[
              {
                t: "Le marché",
                p: "Libéralisé depuis 2007. Une trentaine de fournisseurs alternatifs cohabitent avec EDF et Engie. Les prix de gros (EPEX, ARENH) fluctuent quotidiennement et conditionnent les offres reçues — d'où l'importance du moment de la consultation.",
              },
              {
                t: "Le courtier",
                p: "Intermédiaire indépendant entre vous et les fournisseurs. Il sollicite un panel d'offres sur cahier des charges, compare les structures tarifaires, négocie les conditions et accompagne la bascule administrative. Sans aucune exclusivité commerciale.",
              },
              {
                t: "Le contrat",
                p: "Durée, prix fixe ou indexé, mécanisme d'indexation (ARENH, EPEX, indices gaziers), clauses de sortie, prix de l'acheminement, taxes. Chaque ligne mérite une lecture critique — c'est là que se jouent les écarts de plusieurs milliers d'euros par an.",
              },
            ].map((b, i) => (
              <div key={b.t} className={`benefit-card fade-in delay-${i + 1}`}>
                <div className="benefit-card__icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="12" y1="20" x2="12" y2="10"/>
                    <line x1="18" y1="20" x2="18" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="16"/>
                  </svg>
                </div>
                <h3 className="benefit-card__title">{b.t}</h3>
                <p className="benefit-card__text">{b.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALEUR — pourquoi un courtier */}
      <section className="why-renovate" id="valeur">
        <div className="container">
          <div className="why-renovate__header fade-in">
            <p className="section-label">Pourquoi passer par un courtier&nbsp;?</p>
            <h2 className="section-title">
              Quatre leviers concrets<br />
              au service de <em>votre contrat.</em>
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Un courtier en énergie n&apos;est pas un revendeur déguisé : c&apos;est un partenaire
              dont le rôle est de défendre vos intérêts face à des fournisseurs dont c&apos;est le
              métier de structurer leurs offres à leur avantage.
            </p>
          </div>

          <div className="why-renovate__grid">
            {[
              {
                t: "Indépendance",
                p: "Aucune exclusivité avec un fournisseur. Recommandation fondée sur des critères objectifs — prix, mécanisme, clauses, robustesse — pas sur des arrangements commerciaux.",
                icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
              },
              {
                t: "Méthode tarifaire",
                p: "Lecture comparée des offres : prix fixe vs indexé, courbes ARENH/EPEX, structure des taxes, frais d'acheminement. Arbitrage selon votre profil de consommation.",
                icon: <><polyline points="3 17 9 11 13 15 21 7"/><polyline points="14 7 21 7 21 14"/></>,
              },
              {
                t: "Gain de temps",
                p: "Un seul interlocuteur, démarches administratives prises en charge. Mise en concurrence, comparaison, négociation, bascule : nous assumons le travail chronophage.",
                icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
              },
              {
                t: "Continuité du suivi",
                p: "Surveillance jusqu'à l'échéance contractuelle. Alertes marché, anticipation des renouvellements, renégociation au bon moment — pas seulement au moment de signer.",
                icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>,
              },
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

      {/* METHODE */}
      <section className="how-it-works" id="methode">
        <div className="container">
          <div className="how-it-works__header fade-in">
            <p className="section-label">Notre méthode en 5 étapes</p>
            <h2 className="section-title">
              Cinq étapes,<br />
              <em>un contrat maîtrisé.</em>
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              De la lecture de vos factures à la renégociation, nous structurons chaque étape
              pour que vous gardiez la main sur la décision — sans porter la complexité.
            </p>
          </div>

          <div className="how-steps fade-in">
            {[
              ["01", "Audit du profil de consommation", "Lecture critique des factures, courbes de charge, postes de soutirage, sites multiples : nous établissons un état des lieux précis avant toute consultation. Sans cette base, la mise en concurrence n'a pas de socle solide."],
              ["02", "Mise en concurrence", "Cahier des charges adressé au panel de fournisseurs significatifs du marché. Demande structurée — durée, mécanisme tarifaire, clauses, conditions d'engagement — pour permettre une comparaison apples-to-apples des offres reçues."],
              ["03", "Lecture des offres & arbitrage", "Décomposition ligne à ligne : prix fournitures, acheminement, taxes, mécanisme d'indexation, clauses de sortie. Recommandation argumentée — prix fixe vs indexé, durée, fournisseur — selon votre profil de risque et vos contraintes."],
              ["04", "Bascule administrative", "Résiliation du contrat sortant, signature, transfert PRM/PCE, gestion du calendrier de bascule pour éviter toute rupture de fourniture. Vous signez. Nous coordonnons le reste."],
              ["05", "Suivi & renégociation", "Surveillance des conditions de marché jusqu'à l'échéance. Alertes en cas de fenêtre d'opportunité. Préparation du renouvellement plusieurs mois avant l'échéance — le bon moment se prépare, il ne se subit pas."],
            ].map(([n, t, p]) => (
              <div key={n} className="how-step fade-in">
                <div className="how-step__num">{n}</div>
                <h3 className="how-step__title">{t}</h3>
                <p className="how-step__text">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDEPENDANCE */}
      <section className="method" id="independance">
        <div className="container">
          <div className="method__header fade-in">
            <p className="section-label" style={{ color: "rgba(255,255,255,.6)" }}>Notre engagement</p>
            <h2 className="section-title section-title--white">
              Aucun lien<br />
              d&apos;<em style={{ color: "#a8e296" }}>exclusivité.</em>
            </h2>
            <div className="divider divider--white divider--center"></div>
            <p className="section-intro section-intro--white section-intro--center">
              L&apos;indépendance n&apos;est pas une posture commerciale — c&apos;est la condition
              technique de la valeur que nous apportons. Sans elle, le courtage devient
              de la revente déguisée.
            </p>
          </div>

          <div className="method__steps">
            {[
              ["01", "Aucun lien d'exclusivité avec un fournisseur", "Nous travaillons avec l'ensemble des fournisseurs significatifs du marché français. Pas d'accord cadre exclusif, pas de quota commercial à atteindre. La consultation reste ouverte à chaque mission."],
              ["02", "Notre rémunération ne dépend pas du choix retenu", "Quel que soit le fournisseur que vous choisissez parmi ceux que nous avons consultés, notre rémunération est la même. Cette neutralité économique est ce qui rend notre recommandation fiable."],
              ["03", "Recommandation sur critères objectifs", "Prix, mécanisme tarifaire, robustesse des clauses, qualité du service après-vente du fournisseur. Pas de critère commercial caché. Si la meilleure offre vient d'un fournisseur avec lequel nous avons peu travaillé, nous le recommandons sans hésitation."],
            ].map(([n, t, p], i) => (
              <div key={n} className={`method__step fade-in delay-${(i % 3) + 1}`}>
                <div className="method__step-num">{n}</div>
                <h3 className="method__step-title">{t}</h3>
                <p className="method__step-text">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERIMETRE */}
      <section className="benefits" id="perimetre">
        <div className="container">
          <div className="benefits__header fade-in">
            <p className="section-label">Périmètre couvert</p>
            <h2 className="section-title">
              Gaz, électricité,<br />
              <em>tous secteurs</em>, multi-sites.
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Nous intervenons sur l&apos;ensemble des contrats d&apos;énergie professionnels —
              de la TPE mono-site au groupe multi-sites avec parc immobilier diversifié.
              Le périmètre s&apos;adapte à votre échelle.
            </p>
          </div>

          <div className="benefits__grid">
            {[
              { t: "Gaz naturel", p: "Contrats professionnels — points de comptage et estimation (PCE), tarification fixe ou indexée sur les indices gaziers. Tous niveaux de consommation." },
              { t: "Électricité", p: "Contrats professionnels — points de référence et de mesure (PRM), tarif réglementé, offres de marché, mécanisme ARENH selon profil." },
              { t: "Tous secteurs", p: "Tertiaire (bureaux, commerces, ERP), agricole (exploitations, serres), industriel (sites de production) — conformité aux obligations sectorielles incluse." },
              { t: "Multi-sites", p: "Consolidation des contrats sur l'ensemble de votre parc, négociation groupée, gestion centralisée des renouvellements et des indexations." },
            ].map((b, i) => (
              <div key={b.t} className={`benefit-card fade-in delay-${i + 1}`}>
                <div className="benefit-card__icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="benefit-card__title">{b.t}</h3>
                <p className="benefit-card__text">{b.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="faq__header fade-in">
            <p className="section-label">Questions fréquentes</p>
            <h2 className="section-title">
              Ce que vous voulez savoir<br />
              sur le <em>courtage</em>
            </h2>
            <div className="divider divider--center"></div>
          </div>
          <div className="faq__list">
            <Faq
              items={[
                { q: "Qu'est-ce qu'un courtier en énergie et que fait-il concrètement ?", a: "Un courtier en énergie est un intermédiaire indépendant entre votre entreprise et les fournisseurs de gaz ou d'électricité. Concrètement, il pilote la mise en concurrence des fournisseurs sur la base d'un cahier des charges qui reflète votre profil de consommation, lit et compare les offres reçues sur des critères techniques objectifs (prix, structure tarifaire, mécanisme d'indexation, clauses), négocie les conditions, et accompagne la bascule administrative. Son rôle ne s'arrête pas à la signature : il assure le suivi du contrat jusqu'à l'échéance pour anticiper le renouvellement au bon moment." },
                { q: "Combien coûte votre intervention ?", a: "Notre rémunération est transparente et ne dépend pas du fournisseur que vous choisirez parmi ceux consultés. Cette neutralité économique est la condition de notre indépendance : quel que soit votre choix final, notre rémunération reste la même. Le modèle exact (commission fournisseur, honoraires de mission, ou combinaison des deux) est précisé dès la première discussion — sans surprise en fin de mission." },
                { q: "Êtes-vous vraiment indépendants des fournisseurs ?", a: "Oui, totalement. Nous ne sommes liés par aucune exclusivité commerciale et travaillons avec l'ensemble des fournisseurs significatifs du marché français. Cette indépendance est essentielle : elle nous permet de comparer les offres sur des critères objectifs et de recommander celle qui correspond réellement à votre profil de consommation — pas celle qui nous arrangerait commercialement." },
                { q: "À quel moment vaut-il mieux vous solliciter ?", a: "Le plus tôt possible avant l'échéance de votre contrat actuel. La qualité de la négociation dépend du moment où l'on se positionne sur le marché : les prix de gros (EPEX, ARENH, indices gaziers) fluctuent quotidiennement, et certaines fenêtres d'opportunité se referment vite. Idéalement, nous sollicitons les fournisseurs entre 6 et 12 mois avant l'échéance, ce qui laisse le temps de comparer sereinement, négocier, et organiser la bascule sans urgence." },
                { q: "Travaillez-vous avec les TPE/PME ou seulement les grandes structures ?", a: "Les deux. Notre accompagnement s'adapte à votre taille et à votre niveau de complexité : une TPE avec un site et deux contrats d'énergie n'a pas les mêmes besoins qu'un groupe multi-sites avec un parc immobilier diversifié. Nous calibrons le périmètre de la mission et notre intensité d'intervention en conséquence — sans surdimensionner ni sous-traiter la qualité." },
                { q: "Que se passe-t-il à l'échéance du contrat négocié ?", a: "Nous suivons le contrat jusqu'à son échéance. Plusieurs mois avant la fin de période, nous reprenons l'analyse de marché et préparons la consultation suivante. Vous gardez la décision : renouveler avec le fournisseur sortant, basculer, renégocier les conditions. L'objectif est qu'à chaque renouvellement, vous bénéficiez d'une lecture experte et d'un nouveau benchmark — pas d'un renouvellement automatique par défaut." },
              ]}
            />
          </div>
        </div>
      </section>

      <RelatedSolutions
        items={["accompagnement-strategique", "prime-cee", "ma-prime-renov"]}
      />

      {/* CONTACT */}
      <section className="contact-form-section" id="contact">
        <div className="container">
          <div className="contact-form-section__inner">
            <div className="contact-info fade-in">
              <p className="section-label">Nous contacter</p>
              <h2 className="contact-info__title">Faisons négocier<br />vos contrats</h2>
              <div className="divider"></div>
              <p className="contact-info__text">
                Décrivez-nous brièvement votre situation — type de contrats actuels, échéance,
                consommations approximatives. Nous revenons vers vous avec une première lecture
                de votre profil et le calendrier de consultation recommandé.
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
              <h3 className="form-card__title">Demande d&apos;analyse — sans engagement</h3>
              <ContactForm source="courtage-energie">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="c-prenom">Prénom *</label>
                    <input className="form-input" type="text" id="c-prenom" name="prenom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="c-nom">Nom *</label>
                    <input className="form-input" type="text" id="c-nom" name="nom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="c-societe">Société</label>
                    <input className="form-input" type="text" id="c-societe" name="societe" placeholder="Nom de votre société" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="c-tel">Téléphone *</label>
                    <input className="form-input" type="tel" id="c-tel" name="telephone" required />
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="c-email">Email *</label>
                    <input className="form-input" type="email" id="c-email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="c-energie">Type de contrat</label>
                    <select className="form-select" id="c-energie" name="type_contrat" defaultValue="">
                      <option value="" disabled>Sélectionnez</option>
                      <option value="electricite">Électricité uniquement</option>
                      <option value="gaz">Gaz uniquement</option>
                      <option value="gaz-elec">Gaz et électricité</option>
                      <option value="multi-sites">Multi-sites (gaz / élec)</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="c-echeance">Échéance contrat actuel</label>
                    <input className="form-input" type="text" id="c-echeance" name="echeance" placeholder="Ex. 12/2026, ou inconnue" />
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="c-message">Décrivez votre situation</label>
                    <textarea className="form-textarea" id="c-message" name="message" placeholder="Type de bâtiment, consommations approximatives, fournisseur(s) actuel(s), questions spécifiques…" rows={4}></textarea>
                  </div>
                  <div className="form-group form-group--full">
                    <div className="form-consent">
                      <input type="checkbox" id="c-rgpd" name="rgpd" required />
                      <label htmlFor="c-rgpd">J&apos;accepte que mes données soient utilisées par ECOPRORENOVE pour l&apos;analyse de mon dossier. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles.</label>
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
    </div>
  );
}

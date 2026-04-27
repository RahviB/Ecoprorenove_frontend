import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "Homepage v6 (Cas concrets)",
  description:
    "Variante v6 — page d'accueil ECOPRORENOVE centrée sur les chantiers et les preuves.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/v6" },
};

const CASES = [
  {
    img: "/uploads/maison-modern-grey.jpeg",
    sector: "Résidentiel",
    title: "Bardage fibre-ciment, La Réunion",
    metric: "−38% conso chauffage",
    metricSub: "estimation post-travaux",
    body: "Maison individuelle, 142 m². Isolation par l'extérieur, finition gris moderne. Dossier MaPrimeRénov' clôturé en 11 semaines.",
  },
  {
    img: "/assets/chantier-duparc-apres.jpg",
    sector: "Résidentiel",
    title: "Chantier ZR Duparc — toiture rampants",
    metric: "190 m²",
    metricSub: "isolés en 4 jours",
    body: "Pose de thermoréflectif sous couverture, sans dépose de la charpente. Avant / après visible en chantier.",
  },
  {
    img: "/images/extracteur/tornado-toiture-installation.png",
    sector: "Tertiaire",
    title: "Extracteur Tornado — entrepôt logistique",
    metric: "+22°C → +18°C",
    metricSub: "ambiance haute en été",
    body: "Couplage destratificateur + extracteur. Chronologie CEE respectée, dossier déposé avant ordre de service.",
  },
];

const SOLUTIONS = [
  { href: "/isolation-toiture-rampants", title: "Isolation toiture", desc: "Thermoréflectif sous couverture, sans reprise charpente.", sectors: ["Tertiaire", "Agricole"], cat: "Isolation" },
  { href: "/isolation-combles", title: "Isolation des combles", desc: "Soufflage ou déroulé. Jusqu'à 30 % des pertes traitées.", sectors: ["Tertiaire", "Résidentiel"], cat: "Isolation" },
  { href: "/bardage", title: "Bardage", desc: "Isolation par l'extérieur, ponts thermiques traités.", sectors: ["Tertiaire", "Résidentiel", "Agricole"], cat: "Isolation", premium: true },
  { href: "/destratificateur-air", title: "Destratificateur d'air", desc: "Redistribuer la chaleur en hauteur, baisser le chauffage.", sectors: ["Tertiaire", "Agricole"], cat: "Aéraulique" },
  { href: "/extracteur-air", title: "Extracteur d'air", desc: "Renouvellement maîtrisé, polluants évacués.", sectors: ["Tertiaire", "Agricole"], cat: "Aéraulique" },
  { href: "#", disabled: true, title: "VMC Double flux", desc: "Récupération de chaleur sur l'air extrait.", sectors: ["Agricole"], cat: "Aéraulique" },
  { href: "#", disabled: true, title: "Courtage en énergie", desc: "Mise en concurrence des fournisseurs gaz / électricité.", sectors: ["Tertiaire", "Résidentiel", "Agricole"], cat: "Pilotage" },
  { href: "/accompagnement-strategique", title: "Accompagnement stratégique", desc: "Cadrage long-terme, planification pluriannuelle.", sectors: ["Tertiaire", "Résidentiel", "Agricole"], cat: "Pilotage" },
];

const PARCOURS = [
  { n: "01", t: "Échange initial", p: "Bâtiment, objectifs, contraintes." },
  { n: "02", t: "Analyse & éligibilité", p: "Étude technique, fiche CEE, chronologie." },
  { n: "03", t: "Montage du dossier", p: "Pièces, conformité, coordination." },
  { n: "04", t: "Travaux & pose RGE", p: "Entreprises qualifiées, suivi de chantier." },
  { n: "05", t: "Clôture & valorisation", p: "Dépôt, validation obligé, versement." },
];

export default function HomePageV6() {
  return (
    <div className="page-home-v6">
      {/* ===========  1. HERO  =========== */}
      <section className="v6h">
        <div className="v6h__photo">
          <Image
            src="/uploads/maison-modern-grey.jpeg"
            alt="Maison habillée d'un bardage moderne — chantier ECOPRORENOVE"
            fill
            priority
            sizes="100vw"
            className="v6h__img"
          />
          <div className="v6h__veil" aria-hidden="true" />
        </div>

        <div className="v6h__inner">
          <div className="v6h__panel">
            <div className="v6h__tags">
              <span className="v6tag">Tertiaire</span>
              <span className="v6tag">Résidentiel</span>
              <span className="v6tag">Agricole</span>
            </div>

            <h1 className="v6h__title">
              Rénovation énergétique,<br />
              <em>de l&apos;audit à la clôture CEE.</em>
            </h1>

            <p className="v6h__sub">
              Un interlocuteur unique pour cadrer le projet, monter le dossier CEE / MaPrimeRénov&apos;,
              coordonner les travaux et valoriser les économies. Métropole &amp; La Réunion.
            </p>

            <div className="v6h__cta">
              <a href="#contact" className="v6btn v6btn--primary">
                Étudier mon projet
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#cas" className="v6btn v6btn--ghost">
                Voir nos chantiers
              </a>
            </div>

            <ul className="v6h__stats">
              <li>
                <strong><CountUp end={500} prefix="+" duration={1200} /></strong>
                <span>clients accompagnés</span>
              </li>
              <li>
                <strong><CountUp end={40000} prefix="+" thinSpace duration={1500} /> m²</strong>
                <span>de surfaces isolées</span>
              </li>
              <li>
                <strong><CountUp end={200000} thinSpace duration={1700} /> MWh</strong>
                <span>cumac valorisés</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="v6h__cred">
          <span>Certifié</span>
          <strong>RGE Qualibat · RGE Qualibois · Obligé CEE · MaPrimeRénov&apos;</strong>
        </div>
      </section>

      {/* ===========  2. CAS CONCRETS  =========== */}
      <section className="v6cas" id="cas">
        <header className="v6sec__head">
          <p className="v6sec__eyebrow">Cas concrets</p>
          <h2 className="v6sec__title">
            Trois projets <em>récents,</em> trois résultats.
          </h2>
          <p className="v6sec__lede">
            Des opérations menées de bout en bout — résidentiel, tertiaire, La Réunion comme Métropole.
            Chaque chantier documenté, chiffré, livré avec son dossier de financement.
          </p>
        </header>

        <div className="v6cas__grid">
          {CASES.map((c) => (
            <article key={c.title} className="v6case">
              <div className="v6case__photo">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  sizes="(max-width: 1024px) 92vw, 380px"
                  className="v6case__img"
                />
                <span className="v6case__sector">{c.sector}</span>
              </div>
              <div className="v6case__body">
                <h3 className="v6case__title">{c.title}</h3>
                <p className="v6case__desc">{c.body}</p>
                <div className="v6case__metric">
                  <strong>{c.metric}</strong>
                  <span>{c.metricSub}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="v6cas__note">
          Chiffres indicatifs · Dossiers anonymisés à la demande · Références complètes sur demande.
        </p>
      </section>

      {/* ===========  3. CATALOGUE  =========== */}
      <section className="v6cat" id="solutions">
        <header className="v6sec__head">
          <p className="v6sec__eyebrow">Catalogue</p>
          <h2 className="v6sec__title">
            Huit solutions,<br />
            <em>pensées pour votre bâtiment.</em>
          </h2>
          <p className="v6sec__lede">
            De l&apos;enveloppe (isolation, bardage) au pilotage énergétique (aéraulique, courtage),
            en passant par l&apos;accompagnement stratégique. Chaque opération précise pour quels secteurs elle s&apos;applique.
          </p>
        </header>

        <div className="v6cat__grid">
          {SOLUTIONS.map((s) => {
            const cls = `v6card${s.disabled ? " v6card--disabled" : ""}${s.premium ? " v6card--premium" : ""}`;
            const inner = (
              <>
                <div className="v6card__top">
                  <span className="v6card__cat">{s.cat}</span>
                  {s.premium && <span className="v6card__badge">Premium</span>}
                </div>
                <h3 className="v6card__title">{s.title}</h3>
                <p className="v6card__desc">{s.desc}</p>
                <div className="v6card__foot">
                  <div className="v6card__sectors">
                    {s.sectors.map((sec) => (
                      <span key={sec}>{sec}</span>
                    ))}
                  </div>
                  <span className="v6card__arrow" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </>
            );
            return s.disabled ? (
              <a key={s.title} href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible" className={cls}>
                {inner}
              </a>
            ) : (
              <Link key={s.title} href={s.href} className={cls}>
                {inner}
              </Link>
            );
          })}
        </div>

        <Link href="/financement-cee" className="v6feat">
          <div className="v6feat__left">
            <span className="v6feat__eyebrow">Transverse · toutes opérations</span>
            <h3 className="v6feat__title">Financement CEE &amp; MaPrimeRénov&apos;</h3>
            <p className="v6feat__desc">
              Mobilisation et structuration des leviers de financement —
              de l&apos;analyse d&apos;éligibilité jusqu&apos;à la clôture du dossier.
            </p>
          </div>
          <span className="v6feat__cta">
            Comprendre le dispositif
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </Link>
      </section>

      {/* ===========  4. COMMENT ÇA SE PASSE  =========== */}
      <section className="v6how" id="parcours">
        <header className="v6sec__head v6sec__head--white">
          <p className="v6sec__eyebrow v6sec__eyebrow--accent">Comment ça se passe</p>
          <h2 className="v6sec__title v6sec__title--white">
            Cinq étapes, <em>une seule équipe.</em>
          </h2>
          <p className="v6sec__lede v6sec__lede--white">
            De la première conversation à la clôture administrative. Chaque étape pensée pour que vous
            ayez, à tout moment, une vision claire de ce qui se passe et de ce qu&apos;il reste à faire.
          </p>
        </header>

        <ol className="v6how__steps">
          {PARCOURS.map((s) => (
            <li key={s.n} className="v6step">
              <div className="v6step__num">{s.n}</div>
              <h3 className="v6step__title">{s.t}</h3>
              <p className="v6step__desc">{s.p}</p>
            </li>
          ))}
        </ol>

        <div className="v6how__inset">
          <p className="v6how__inset-eyebrow">Note CEE</p>
          <p className="v6how__inset-text">
            Les démarches CEE doivent être engagées <strong>avant le début des travaux</strong>. Une consultation
            après l&apos;ordre de service rend généralement le dossier irrecevable.
          </p>
        </div>
      </section>

      {/* ===========  5. ENGAGEMENTS + FAQ + CONTACT  =========== */}
      <section className="v6close" id="contact">
        <div className="v6close__row">
          <div className="v6close__col">
            <p className="v6sec__eyebrow">Pourquoi nous</p>
            <h2 className="v6sec__title">
              Interlocuteur unique,<br />
              <em>approche honnête.</em>
            </h2>
            <p className="v6sec__lede">
              Nous intervenons là où projet technique, dossier administratif et logique de financement se croisent —
              et qu&apos;il faut quelqu&apos;un qui tienne les trois ensemble.
            </p>

            <ul className="v6engs">
              <li>
                <span className="v6eng__mark" aria-hidden="true">✓</span>
                <div>
                  <h4>Interlocuteur unique</h4>
                  <p>Un seul point de contact, de l&apos;analyse à la clôture du dossier.</p>
                </div>
              </li>
              <li>
                <span className="v6eng__mark" aria-hidden="true">✓</span>
                <div>
                  <h4>Dossier CEE sécurisé</h4>
                  <p>Éligibilité vérifiée en amont, chronologie réglementaire respectée.</p>
                </div>
              </li>
              <li>
                <span className="v6eng__mark" aria-hidden="true">✓</span>
                <div>
                  <h4>Pose RGE</h4>
                  <p>Équipes et installateurs partenaires qualifiés RGE.</p>
                </div>
              </li>
              <li>
                <span className="v6eng__mark" aria-hidden="true">✓</span>
                <div>
                  <h4>Honnêteté technique</h4>
                  <p>Si une opération n&apos;est pas pertinente, nous vous le disons — et nous cherchons le bon levier avec vous.</p>
                </div>
              </li>
            </ul>

            <div className="v6certs">
              <p className="v6certs__intent">Ils nous font confiance</p>
              <ul className="v6certs__list">
                <li>RGE Qualibat</li>
                <li>RGE Qualibois</li>
                <li>Obligé CEE</li>
                <li>MaPrimeRénov&apos;</li>
              </ul>
            </div>
          </div>

          <div className="v6close__col v6close__col--right">
            <div className="v6contact">
              <p className="v6contact__eyebrow">Parlons de votre projet</p>
              <h3 className="v6contact__title">
                Votre projet mérite<br />
                d&apos;être <em>bien étudié.</em>
              </h3>
              <p className="v6contact__desc">
                Échangeons sur votre bâtiment, vos objectifs, vos contraintes. Analyse de faisabilité,
                financements mobilisables, structuration. Sans engagement.
              </p>
              <div className="v6contact__buttons">
                <a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible" className="v6btn v6btn--primary v6btn--lg">
                  Demander une étude
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a href="#" aria-disabled="true" tabIndex={-1} title="Numéro à venir" className="v6btn v6btn--ghost v6btn--lg">
                  Nous appeler
                </a>
              </div>
              <ul className="v6contact__reassure">
                <li>Sans engagement</li>
                <li>Réponse sous 48h</li>
                <li>Métropole &amp; La Réunion</li>
              </ul>
            </div>

            <div className="v6faq">
              <p className="v6sec__eyebrow">Questions fréquentes</p>
              <Faq
                items={[
                  {
                    q: "Qu'est-ce qui différencie ECOPRORENOVE d'une entreprise classique ?",
                    a: "Nous structurons un projet — cadrage technique, montage administratif, mobilisation des financements, coordination des entreprises, suivi jusqu'à la clôture.",
                  },
                  {
                    q: "Mon bâtiment est-il éligible aux CEE ou à MaPrimeRénov' ?",
                    a: "MaPrimeRénov' concerne le résidentiel ; les CEE couvrent tertiaire, agricole et résidentiel. Analyse personnalisée gratuite et sans engagement.",
                  },
                  {
                    q: "Quand faut-il vous contacter ?",
                    a: (
                      <>
                        Le plus tôt possible — et impérativement <strong>avant le début des travaux</strong>. Condition sine qua non pour la recevabilité du dossier CEE.
                      </>
                    ),
                  },
                  {
                    q: "Le financement CEE couvre-t-il l'intégralité ?",
                    a: (
                      <>
                        Non — c&apos;est un financement <strong>partiel</strong> dont le montant dépend du type d&apos;opération, de la taille et du marché.
                      </>
                    ),
                  },
                  {
                    q: "Intervenez-vous uniquement en Métropole ?",
                    a: (
                      <>
                        Non — Métropole et <strong>La Réunion</strong>, équipes locales dans chaque territoire.
                      </>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import CountUp from "@/components/CountUp";
import Faq from "@/components/Faq";
import ChapterRail from "@/components/ChapterRail";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Homepage v5 (Editorial)",
  description: "Variante v5 — page d'accueil ECOPRORENOVE en format rapport éditorial.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/v5" },
};

const CHAPTERS = [
  { id: "ch-00", num: "00", label: "Couverture" },
  { id: "ch-01", num: "01", label: "Trois secteurs" },
  { id: "ch-02", num: "02", label: "Par les chiffres" },
  { id: "ch-03", num: "03", label: "Huit solutions" },
  { id: "ch-04", num: "04", label: "Le dispositif CEE" },
  { id: "ch-05", num: "05", label: "Notre méthode" },
  { id: "ch-06", num: "06", label: "Engagements" },
  { id: "ch-07", num: "07", label: "Questions fréquentes" },
  { id: "ch-08", num: "08", label: "Contact" },
];

const SOLUTIONS = [
  { href: "/isolation-toiture-rampants", title: "Isolation toiture — thermoréflectif", sectors: "Tertiaire · Agricole" },
  { href: "/isolation-combles", title: "Isolation des combles", sectors: "Tertiaire · Résidentiel" },
  { href: "/bardage", title: "Bardage", sectors: "Tertiaire · Résidentiel · Agricole", premium: true },
  { href: "/destratificateur-air", title: "Destratificateur d'air", sectors: "Tertiaire · Agricole" },
  { href: "/extracteur-air", title: "Extracteur d'air", sectors: "Tertiaire · Agricole" },
  { href: "#", disabled: true, title: "VMC Double flux", sectors: "Agricole" },
  { href: "#", disabled: true, title: "Courtage en énergie", sectors: "Tertiaire · Résidentiel · Agricole" },
  { href: "/accompagnement-strategique", title: "Accompagnement stratégique", sectors: "Tertiaire · Résidentiel · Agricole" },
];

export default function HomePageV5() {
  return (
    <div className={`page-home-v5 ${fraunces.variable}`}>
      <span className="vbadge" aria-hidden="true">v5 · Editorial</span>

      <ChapterRail chapters={CHAPTERS} />

      <main className="ed">
        {/* ============  CHAPTER 00 — COVER  ============ */}
        <section id="ch-00" className="ed__chapter ed__cover">
          <div className="ed__cover-photo">
            <Image
              src="/uploads/maison-modern-grey.jpeg"
              alt="Bâtiment habillé d'un bardage moderne"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="ed__cover-img"
            />
            <div className="ed__cover-overlay" aria-hidden="true" />
          </div>

          <div className="ed__cover-meta">
            <p className="ed__masthead">ECOPRORENOVE — Rapport 2026</p>
            <p className="ed__issue">Vol. 01 · Tertiaire / Résidentiel / Agricole</p>
          </div>

          <h1 className="ed__cover-title">
            La rénovation<br />
            énergétique,<br />
            <em>bien conduite.</em>
          </h1>

          <div className="ed__cover-deck">
            <p className="ed__deck">
              Un rapport en huit chapitres sur la façon dont nous accompagnons les maîtres
              d&apos;ouvrage — du premier audit à la valorisation des CEE — sans survente,
              sans promesse creuse.
            </p>
          </div>

          <div className="ed__cover-foot">
            <a href="#ch-08" className="ed__btn ed__btn--primary">
              Étudier mon projet
            </a>
            <a href="#ch-01" className="ed__btn ed__btn--ghost">
              Lire le rapport ↓
            </a>
          </div>
        </section>

        {/* ============  CHAPTER 01 — SECTORS  ============ */}
        <section id="ch-01" className="ed__chapter">
          <header className="ed__head">
            <span className="ed__chap-num">Chapitre 01</span>
            <h2 className="ed__chap-title">Trois secteurs, <em>une méthode.</em></h2>
            <p className="ed__chap-lede">
              Nous intervenons sur les bâtiments qui pèsent énergétiquement —
              chacun avec ses contraintes techniques, réglementaires et d&apos;usage.
              Notre rôle est de cadrer l&apos;opération au plus juste de votre réalité.
            </p>
          </header>

          <ol className="ed__sectors">
            <li className="ed__sector">
              <span className="ed__sector-num">01</span>
              <div>
                <h3 className="ed__sector-title">Tertiaire</h3>
                <p className="ed__sector-desc">
                  Bâtiments qui concentrent consommations et obligations réglementaires —
                  décret tertiaire, normes de confort, continuité d&apos;exploitation.
                </p>
                <p className="ed__sector-types">
                  Bureaux · Commerces · Santé · Enseignement · Hôtellerie
                </p>
              </div>
            </li>
            <li className="ed__sector">
              <span className="ed__sector-num">02</span>
              <div>
                <h3 className="ed__sector-title">Résidentiel</h3>
                <p className="ed__sector-desc">
                  Copropriétés, bailleurs sociaux, maisons individuelles. Cumul CEE +
                  MaPrimeRénov&apos;, gestion des assemblées, coordination des syndics.
                </p>
                <p className="ed__sector-types">
                  Copropriétés · Bailleurs · Particuliers · Parc social
                </p>
              </div>
            </li>
            <li className="ed__sector">
              <span className="ed__sector-num">03</span>
              <div>
                <h3 className="ed__sector-title">Agricole</h3>
                <p className="ed__sector-desc">
                  Bâtiments d&apos;élevage, serres, hangars. Enjeux d&apos;ambiance, hygrométrie,
                  ventilation — fiches CEE adaptées au monde agricole.
                </p>
                <p className="ed__sector-types">
                  Élevage · Serres · Hangars · Stockage
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* ============  CHAPTER 02 — NUMBERS  ============ */}
        <section id="ch-02" className="ed__chapter ed__chapter--bleed">
          <header className="ed__head">
            <span className="ed__chap-num">Chapitre 02</span>
            <h2 className="ed__chap-title">Par les <em>chiffres.</em></h2>
            <p className="ed__chap-lede">
              Volumes cumulés depuis la création d&apos;ECOPRORENOVE — indicatifs, susceptibles d&apos;évoluer.
            </p>
          </header>

          <div className="ed__numbers">
            <article className="ed__num">
              <p className="ed__num-value">
                <CountUp end={500} prefix="+" duration={1200} />
              </p>
              <p className="ed__num-label">clients accompagnés dans leur projet de rénovation</p>
            </article>
            <article className="ed__num">
              <p className="ed__num-value">
                <CountUp end={40000} prefix="+" thinSpace duration={1500} />
                <span className="ed__num-unit">m²</span>
              </p>
              <p className="ed__num-label">de surfaces isolées par nos équipes</p>
            </article>
            <article className="ed__num">
              <p className="ed__num-value">
                <CountUp end={200000} thinSpace duration={1700} />
                <span className="ed__num-unit">MWh<small>cumac</small></span>
              </p>
              <p className="ed__num-label">d&apos;économies d&apos;énergie valorisées en CEE</p>
            </article>
            <article className="ed__num">
              <p className="ed__num-value">
                <CountUp end={2} duration={800} />
                <span className="ed__num-unit">terr.</span>
              </p>
              <p className="ed__num-label">Métropole &amp; La Réunion — équipes locales</p>
            </article>
          </div>
        </section>

        {/* ============  CHAPTER 03 — SOLUTIONS  ============ */}
        <section id="ch-03" className="ed__chapter">
          <header className="ed__head">
            <span className="ed__chap-num">Chapitre 03</span>
            <h2 className="ed__chap-title">Huit solutions, <em>ciblées.</em></h2>
            <p className="ed__chap-lede">
              Huit offres concrètes qui couvrent l&apos;enveloppe du bâtiment, l&apos;aéraulique
              et le pilotage énergétique. Chacune précise pour quels secteurs elle s&apos;applique.
            </p>
          </header>

          <ul className="ed__sols">
            {SOLUTIONS.map((s, i) => {
              const inner = (
                <>
                  <span className="ed__sol-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="ed__sol-body">
                    <span className="ed__sol-title">
                      {s.title}
                      {s.premium && <span className="ed__sol-badge">Premium</span>}
                    </span>
                    <span className="ed__sol-meta">{s.sectors}</span>
                  </span>
                  <span className="ed__sol-arrow" aria-hidden="true">→</span>
                </>
              );
              return (
                <li key={s.title}>
                  {s.disabled ? (
                    <a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible" className="ed__sol ed__sol--disabled">
                      {inner}
                    </a>
                  ) : (
                    <Link href={s.href} className="ed__sol">
                      {inner}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <Link href="/financement-cee" className="ed__sol-feat">
            <span className="ed__sol-feat-eyebrow">Transverse · toutes opérations</span>
            <span className="ed__sol-feat-title">
              Financement CEE &amp; MaPrimeRénov&apos;
            </span>
            <span className="ed__sol-feat-desc">
              Mobilisation et structuration des leviers de financement —
              depuis l&apos;analyse d&apos;éligibilité jusqu&apos;à la clôture du dossier.
            </span>
            <span className="ed__sol-feat-cta">Lire le dossier financement →</span>
          </Link>
        </section>

        {/* ============  CHAPTER 04 — CEE  ============ */}
        <section id="ch-04" className="ed__chapter">
          <header className="ed__head">
            <span className="ed__chap-num">Chapitre 04</span>
            <h2 className="ed__chap-title">Le dispositif <em>CEE.</em></h2>
            <p className="ed__chap-lede">
              Dispositif CEE + MaPrimeRénov&apos;. Un levier de financement réel — quand il est bien mobilisé.
            </p>
          </header>

          <div className="ed__split">
            <div className="ed__prose">
              <p className="ed__drop">
                <span className="ed__dropcap">L</span>es Certificats d&apos;Économies
                d&apos;Énergie peuvent financer une part significative d&apos;une opération
                éligible. Encore faut-il lancer les démarches{" "}
                <strong>avant le début des travaux</strong>, documenter le dossier et
                respecter la chronologie. C&apos;est précisément là que nous intervenons.
              </p>
              <p>
                MaPrimeRénov&apos; concerne le résidentiel ; les CEE couvrent un spectre
                plus large — tertiaire, agricole et résidentiel. Une analyse personnalisée
                reste indispensable avant tout engagement.
              </p>

              <blockquote className="ed__pull">
                Attendre la fin du chantier pour s&apos;interroger sur le financement,
                c&apos;est souvent trop tard.
              </blockquote>

              <p>
                Dès la phase de conception ou de chiffrage, nous cadrons l&apos;opération
                pour qu&apos;elle reste éligible. Notre objectif n&apos;est pas d&apos;annuler
                l&apos;équation économique du projet — il est de l&apos;améliorer, honnêtement,
                sans surestimation.
              </p>
            </div>

            <aside className="ed__side">
              <p className="ed__side-eyebrow">Le parcours CEE, en clair</p>
              <ol className="ed__steps">
                <li><span>1</span><div><strong>Analyse d&apos;éligibilité</strong>Avant tout engagement.</div></li>
                <li><span>2</span><div><strong>Montage du dossier</strong>Pièces, conformité technique.</div></li>
                <li><span>3</span><div><strong>Travaux &amp; pose RGE</strong>Entreprises qualifiées.</div></li>
                <li><span>4</span><div><strong>Finalisation &amp; valorisation</strong>Versement du financement.</div></li>
              </ol>
              <Link href="/financement-cee" className="ed__side-link">
                Comprendre le dispositif →
              </Link>
            </aside>
          </div>
        </section>

        {/* ============  CHAPTER 05 — METHOD  ============ */}
        <section id="ch-05" className="ed__chapter">
          <header className="ed__head">
            <span className="ed__chap-num">Chapitre 05</span>
            <h2 className="ed__chap-title">Notre <em>méthode.</em></h2>
            <p className="ed__chap-lede">
              De la première conversation à la clôture administrative — un parcours
              structuré en cinq temps, pour que vous ayez à chaque étape une vision claire
              de ce qui se passe.
            </p>
          </header>

          <ol className="ed__method">
            <li>
              <span className="ed__method-num">01</span>
              <div>
                <h3>Échange initial</h3>
                <p>Nous comprenons votre bâtiment, vos objectifs, vos contraintes — avant toute démarche formelle.</p>
              </div>
            </li>
            <li>
              <span className="ed__method-num">02</span>
              <div>
                <h3>Analyse technique</h3>
                <p>Étude des travaux envisagés, cohérence réglementaire, identification des opérations CEE pertinentes.</p>
              </div>
            </li>
            <li>
              <span className="ed__method-num">03</span>
              <div>
                <h3>Structuration du dossier</h3>
                <p>Montage administratif, coordination des acteurs, pièces techniques et conformité.</p>
              </div>
            </li>
            <li>
              <span className="ed__method-num">04</span>
              <div>
                <h3>Travaux &amp; pose RGE</h3>
                <p>Entreprises qualifiées, suivi de chantier, documents réglementaires sécurisés.</p>
              </div>
            </li>
            <li>
              <span className="ed__method-num">05</span>
              <div>
                <h3>Clôture &amp; valorisation</h3>
                <p>Finalisation du dossier CEE, validation obligé, versement du financement.</p>
              </div>
            </li>
          </ol>
        </section>

        {/* ============  CHAPTER 06 — ENGAGEMENTS  ============ */}
        <section id="ch-06" className="ed__chapter">
          <header className="ed__head">
            <span className="ed__chap-num">Chapitre 06</span>
            <h2 className="ed__chap-title">Engagements &amp; <em>garanties.</em></h2>
            <p className="ed__chap-lede">
              Nous intervenons là où projet technique, dossier administratif et logique
              de financement se croisent — et qu&apos;il faut quelqu&apos;un qui tienne les trois ensemble.
            </p>
          </header>

          <div className="ed__engs">
            <div className="ed__eng">
              <span className="ed__eng-mark">→</span>
              <h3>Interlocuteur unique</h3>
              <p>Un seul point de contact, de l&apos;analyse à la clôture. Pas d&apos;allers-retours entre bureaux d&apos;étude, entreprises et obligés CEE.</p>
            </div>
            <div className="ed__eng">
              <span className="ed__eng-mark">→</span>
              <h3>Dossier CEE sécurisé</h3>
              <p>Nous vérifions l&apos;éligibilité en amont, documentons chaque étape et respectons la chronologie réglementaire — pour éviter les refus.</p>
            </div>
            <div className="ed__eng">
              <span className="ed__eng-mark">→</span>
              <h3>Pose RGE</h3>
              <p>Nos équipes et nos partenaires installateurs sont qualifiés RGE — condition indispensable pour la plupart des opérations CEE.</p>
            </div>
            <div className="ed__eng">
              <span className="ed__eng-mark">→</span>
              <h3>Honnêteté technique</h3>
              <p>Si une opération n&apos;est pas pertinente pour votre bâtiment, nous vous le disons. Et nous cherchons le bon levier avec vous.</p>
            </div>
          </div>

          <footer className="ed__partners">
            <p className="ed__partners-eyebrow">Certifications &amp; partenaires</p>
            <ul className="ed__partners-list">
              <li>RGE Qualibat</li>
              <li>RGE Qualibois</li>
              <li>Obligé CEE</li>
              <li>MaPrimeRénov&apos;</li>
            </ul>
          </footer>
        </section>

        {/* ============  CHAPTER 07 — FAQ  ============ */}
        <section id="ch-07" className="ed__chapter">
          <header className="ed__head">
            <span className="ed__chap-num">Chapitre 07</span>
            <h2 className="ed__chap-title">Questions <em>fréquentes.</em></h2>
            <p className="ed__chap-lede">
              Ce que l&apos;on nous demande le plus souvent — par les maîtres d&apos;ouvrage,
              les architectes, les bureaux d&apos;étude.
            </p>
          </header>

          <div className="ed__faq">
            <Faq
              items={[
                {
                  q: "Qu'est-ce qui différencie ECOPRORENOVE d'une entreprise de travaux classique ?",
                  a: "Nous ne nous limitons pas à poser un produit. Nous structurons un projet — cadrage technique, montage administratif, mobilisation des financements, coordination des entreprises, suivi jusqu'à la clôture. Notre valeur ajoutée se situe dans l'articulation de ces trois volets, que personne ne tient habituellement en même temps.",
                },
                {
                  q: "Mon bâtiment est-il éligible aux CEE ou à MaPrimeRénov' ?",
                  a: "L'éligibilité dépend du type de bâtiment, de son usage, de la nature des travaux envisagés et des équipements retenus. MaPrimeRénov' concerne le résidentiel ; les CEE couvrent un spectre plus large — tertiaire, agricole et résidentiel. Une analyse personnalisée reste indispensable avant tout engagement. Nous la réalisons gratuitement et sans engagement.",
                },
                {
                  q: "À quel moment faut-il nous contacter — avant les travaux, pendant, après ?",
                  a: (
                    <>
                      Le plus tôt possible — et impérativement <strong>avant le début des travaux</strong>. C&apos;est une condition sine qua non pour que le dossier CEE soit recevable. Dès la phase de conception ou de chiffrage, nous pouvons cadrer l&apos;opération pour qu&apos;elle reste éligible.
                    </>
                  ),
                },
                {
                  q: "Le financement CEE couvre-t-il l'intégralité des travaux ?",
                  a: (
                    <>
                      Non. Les CEE constituent un financement <strong>partiel</strong> dont le montant dépend du type d&apos;opération, de la taille du projet et du contexte de marché. L&apos;objectif est d&apos;améliorer l&apos;équation économique du projet, pas de l&apos;annuler.
                    </>
                  ),
                },
                {
                  q: "Intervenez-vous uniquement en Métropole ?",
                  a: (
                    <>
                      Non — nous intervenons en <strong>Métropole</strong> et à <strong>La Réunion</strong>, avec des équipes locales dans chaque territoire. Le dispositif CEE s&apos;adapte aux spécificités ultramarines ; nous maîtrisons les particularités du marché réunionnais.
                    </>
                  ),
                },
              ]}
            />
          </div>
        </section>

        {/* ============  CHAPTER 08 — CONTACT  ============ */}
        <section id="ch-08" className="ed__chapter ed__chapter--last">
          <header className="ed__head ed__head--center">
            <span className="ed__chap-num">Chapitre 08 · Fin du rapport</span>
            <h2 className="ed__chap-title ed__chap-title--xl">
              Parlons de<br />
              <em>votre projet.</em>
            </h2>
            <p className="ed__chap-lede ed__chap-lede--center">
              Échangeons sur votre bâtiment, vos objectifs, vos contraintes.
              Nous analysons ensemble la faisabilité technique, les financements
              mobilisables et la meilleure façon de structurer l&apos;opération — sans engagement.
            </p>
          </header>

          <div className="ed__contact">
            <a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible" className="ed__btn ed__btn--primary ed__btn--lg">
              Demander une étude
            </a>
            <a href="#" aria-disabled="true" tabIndex={-1} title="Numéro à venir" className="ed__btn ed__btn--ghost ed__btn--lg">
              Nous appeler
            </a>
          </div>

          <ul className="ed__reassure">
            <li>Analyse sans engagement</li>
            <li>Réponse sous 48h ouvrées</li>
            <li>Métropole &amp; La Réunion</li>
          </ul>

          <p className="ed__colophon">
            ECOPRORENOVE — Rapport 2026 · Composé en Fraunces &amp; Inter ·
            Tous chiffres indicatifs depuis la création de l&apos;entreprise.
          </p>
        </section>
      </main>
    </div>
  );
}

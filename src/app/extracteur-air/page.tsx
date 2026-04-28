import type { Metadata } from "next";
import Image from "next/image";
import Faq from "@/components/Faq";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ScrollNav from "@/components/ScrollNav";

export const metadata: Metadata = {
  title: "Extracteur d'air statique — désurchauffe naturelle | ECOPRORENOVE",
  description:
    "Extracteurs d'air statiques rotatifs — évacuation passive de la chaleur sous toiture métallique. Sans moteur, sans consommation, complément naturel de l'isolation thermique.",
  alternates: { canonical: "/extracteur-air" },
  openGraph: {
    url: "/extracteur-air",
    title: "Extracteur d'air statique — ECOPRORENOVE",
    description:
      "Évacuation passive de l'air chaud sous toiture métallique. Sans moteur, sans consommation. Tertiaire, industrie, agricole.",
  },
};

export default function ExtracteurAirPage() {
  return (
    <div className="page-service solution-template page-extracteur">
      <ServiceJsonLd
        name="Extracteur d'air statique Tornado Windmaster"
        description="Évacuation passive de l'air chaud sous toiture métallique par effet venturi. Sans moteur, sans consommation électrique. Complément des solutions d'isolation."
        url="/extracteur-air"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", url: "/" },
          { name: "Extracteur d'air", url: "/extracteur-air" },
        ]}
      />

      {/* HERO */}
      <section className="hero">
        <div className="container container--wide">
          <div className="hero__inner">
            <div className="hero__content fade-in">
              <nav className="hero__breadcrumb" aria-label="Fil d'Ariane">
                <a href="/">Accueil</a>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                <a href="/#solutions">Solutions</a>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                <span style={{ color: "rgba(255,255,255,.75)" }}>Extracteur d&apos;air statique</span>
              </nav>

              <h1 className="hero__title hero__title--t1">
                <span className="hero__title-eyebrow">Tornado Windmaster® — Sans moteur</span>
                <span className="hero__title-anchor">Évacuez la chaleur</span>
                <span className="hero__title-italic">qui s&apos;accumule sous la toiture.</span>
              </h1>

              <p className="hero__stat-line">
                <strong>0&thinsp;W</strong> consommation · 24/7 fonctionnement passif
              </p>

              <p className="hero__subtitle">
                Sous une toiture métallique, l&apos;air chaud s&apos;accumule au plafond et fait grimper la température intérieure. L&apos;extracteur statique évacue cet air en continu — par effet venturi naturel, sans moteur ni consommation électrique.
              </p>

              <div className="hero__actions">
                <a href="#benefices" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Voir les bénéfices
                </a>
                <a href="#contact" className="btn btn--secondary">Demander une étude</a>
              </div>

              <div className="hero__highlights">
                <div>
                  <div className="hero__highlight-num">0&thinsp;W</div>
                  <div className="hero__highlight-lbl">Aucune consommation électrique — fonctionnement passif</div>
                </div>
                <div>
                  <div className="hero__highlight-num">24/7</div>
                  <div className="hero__highlight-lbl">Évacuation continue de l&apos;air chaud sous toiture</div>
                </div>
                <div>
                  <div className="hero__highlight-num">+</div>
                  <div className="hero__highlight-lbl">Complément naturel de l&apos;Airflex 30 et des destratificateurs</div>
                </div>
              </div>
            </div>

            <div className="hero__visual fade-in delay-2">
              <div className="hero__product">
                <div className="hero__product-badge">Tornado Windmaster®</div>
                <Image
                  src="/images/extracteur/tornado-product-transparent.webp"
                  alt="Extracteur statique Tornado Windmaster — turbine ventilateur en acier galvanisé"
                  width={460}
                  height={460}
                  priority
                  sizes="(max-width: 900px) 80vw, 460px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollNav
        sections={[
          { id: "produit", label: "Le produit" },
          { id: "benefices", label: "Bénéfices" },
          { id: "combo", label: "Combo Airflex" },
          { id: "applications", label: "Applications" },
          { id: "faq", label: "FAQ" },
          { id: "contact", label: "Contact" },
        ]}
      />

      {/* HERO BANDEAU — proof points */}
      <div className="hero-bandeau">
        <div className="container">
          <div className="hero-bandeau__inner">
            {[
              "Sans moteur — sans consommation électrique",
              "Pose en faîtage — toutes couvertures",
              "Complément naturel de l'Airflex 30",
            ].map((t) => (
              <div key={t} className="hero-bandeau__item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRODUIT EN PLACE */}
      <section className="product-show" id="produit">
        <div className="container">
          <div className="product-show__header fade-in">
            <p className="section-label">02 · Le produit</p>
            <h2 className="product-show__title">
              Une turbine éolienne <em>passive</em>, posée en faîtage.
            </h2>
            <p className="product-show__intro">
              Le Tornado Windmaster® s&apos;installe sur tout type de couverture — bac acier, tôle ondulée, panneau sandwich. Une fois en place, il aspire l&apos;air chaud sous-toiture par effet Venturi, sans aucune alimentation électrique.
            </p>
          </div>

          <div className="product-show__visual fade-in delay-1">
            <Image
              src="/images/extracteur/tornado-toiture-installation.webp"
              alt="Deux extracteurs Tornado Windmaster installés sur la toiture d'un bâtiment industriel"
              fill
              sizes="(max-width: 1100px) 100vw, 1100px"
            />
            <div className="product-show__caption">Installation en faîtage · bâtiment tertiaire</div>
          </div>

          <dl className="product-show__specs fade-in delay-2">
            {[
              ["Matériau", "Acier galvanisé — corrosion ≥ 15 ans"],
              ["Diamètre", "300 / 400 / 500 / 600 mm"],
              ["Débit d'air", "Jusqu'à 1 200 m³/h par unité"],
              ["Pose", "Demi-journée par unité"],
              ["Garantie", "10 ans pièces"],
            ].map(([dt, dd]) => (
              <div key={dt} className="product-show__spec">
                <dt>{dt}</dt>
                <dd>{dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* BÉNÉFICES */}
      <section className="benefits" id="benefices">
        <div className="container">
          <div className="benefits__header fade-in">
            <p className="section-label">Bénéfices concrets</p>
            <h2 className="section-title">
              Pourquoi <em>l&apos;installer</em>
              <br />sur vos bâtiments.
            </h2>
            <div className="divider divider--center"></div>
          </div>

          <div className="benefits__grid">
            {[
              { t: "Désurchauffe estivale", p: "Évacuation continue de l'air chaud sous-toiture — la température intérieure reste maîtrisée même en pic de chaleur.", icon: <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/> },
              { t: "Zéro consommation", p: "Fonctionnement entièrement passif — pas de moteur, pas d'électricité, pas de facture additionnelle.", icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/> },
              { t: "Aucune maintenance électrique", p: "Pas de panne moteur, pas de remplacement de pièces. Un simple contrôle visuel et nettoyage périodique suffisent.", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> },
              { t: "Pose rapide en faîtage", p: "Installation en demi-journée, sans dépose de la toiture. Compatible bac acier, tôle ondulée, panneaux sandwich.", icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></> },
            ].map((b, i) => (
              <div key={b.t} className={`benefit-card fade-in delay-${i + 1}`}>
                <div className="benefit-card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {b.icon}
                  </svg>
                </div>
                <h3 className="benefit-card__title">{b.t}</h3>
                <p className="benefit-card__desc">{b.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMBO AIRFLEX 30 */}
      <section className="combo" id="combo">
        <div className="container container--wide">
          <div style={{ textAlign: "center", marginBottom: 56 }} className="fade-in">
            <p className="section-label" style={{ color: "#a8e296" }}>Le duo gagnant</p>
            <h2 className="section-title section-title--white">
              L&apos;isolation <em>retient</em> la chaleur.
              <br />L&apos;extracteur <em>l&apos;évacue</em>.
            </h2>
            <div className="divider divider--center divider--white"></div>
            <p className="section-intro section-intro--white section-intro--center">
              Un extracteur seul ne suffit pas si la toiture rayonne sa chaleur sans barrière. Un isolant seul ne suffit pas si l&apos;air chaud reste piégé sous-toiture. Combinés, l&apos;<strong style={{ color: "#fff" }}>Airflex 30 et l&apos;extracteur statique</strong> agissent à deux niveaux complémentaires.
            </p>
          </div>

          <div className="combo__grid">
            <div className="combo__visual fade-in">
              <div className="combo-item">
                <div className="combo-item__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="3 12 12 4 21 12"/><line x1="3" y1="16" x2="21" y2="16"/><line x1="3" y1="20" x2="21" y2="20"/></svg>
                </div>
                <div>
                  <div className="combo-item__title">Airflex 30 — barrière thermique</div>
                  <div className="combo-item__desc">Réfléchit le rayonnement infrarouge avant qu&apos;il ne pénètre.</div>
                </div>
              </div>
              <div className="combo__plus">+</div>
              <div className="combo-item">
                <div className="combo-item__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2L4 22l8-6 8 6L12 2z"/></svg>
                </div>
                <div>
                  <div className="combo-item__title">Extracteur — évacuation aéraulique</div>
                  <div className="combo-item__desc">Aspire en continu l&apos;air chaud résiduel sous-toiture.</div>
                </div>
              </div>
            </div>

            <div className="fade-in delay-2">
              <h3 className="combo__heading">
                Deux mécaniques complémentaires<br />contre la même chaleur.
              </h3>
              <p className="combo__text">
                L&apos;<strong>Airflex 30</strong> agit en <strong className="combo__hl">amont</strong> : il réfléchit le rayonnement de la toiture métallique et empêche la conduction thermique vers l&apos;intérieur. Mais une part de chaleur passe toujours, par les jonctions et l&apos;air ambiant.
              </p>
              <p className="combo__text">
                L&apos;<strong>extracteur statique</strong> prend le relais en <strong className="combo__hl">aval</strong> : il évacue cet air chaud résiduel avant qu&apos;il ne s&apos;accumule au plafond. Le résultat — une température intérieure significativement plus stable, sans climatisation.
              </p>
              <a href="/isolation-toiture-rampants" className="btn btn--primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                Découvrir l&apos;Airflex 30
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="applications" id="applications">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }} className="fade-in">
            <p className="section-label">Bâtiments concernés</p>
            <h2 className="section-title">
              Une solution <em>transverse</em>
              <br />pour les toitures métalliques.
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Tout bâtiment couvert d&apos;une toiture métallique exposée au soleil profite de l&apos;extraction passive — particulièrement en climat chaud (France d&apos;outre-mer, Sud) ou pour des locaux à charge interne élevée.
            </p>
          </div>

          <div className="applications__grid">
            {[
              { t: "Tertiaire", p: "Bureaux open-space, hangars logistiques, surfaces commerciales sous toiture bac acier — confort des occupants en saison chaude.", icon: <><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></> },
              { t: "Industrie", p: "Ateliers, sites de production avec charge thermique interne — l'extraction continue limite l'effet cumulé chaleur extérieure + chaleur process.", icon: <><path d="M2 22h20"/><path d="M3 22V11l8-7 8 7v11"/><path d="M9 22V14h6v8"/></> },
              { t: "Agricole", p: "Bâtiments d'élevage, serres, hangars de stockage — bien-être animal et conservation des denrées sensibles à la chaleur.", icon: <><path d="M3 20 V11 L8 7 L13 11 V20 Z"/><path d="M13 20 V14 H21 V20"/></> },
            ].map((a, i) => (
              <div key={a.t} className={`app-card fade-in delay-${i + 1}`}>
                <div className="app-card__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {a.icon}
                  </svg>
                </div>
                <h3 className="app-card__title">{a.t}</h3>
                <p className="app-card__desc">{a.p}</p>
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
              Ce que l&apos;on nous demande<br />
              <em>sur l&apos;extraction passive</em>.
            </h2>
            <div className="divider divider--center"></div>
          </div>

          <div className="faq__list">
            <Faq
              items={[
                { q: "L'extracteur statique fonctionne-t-il vraiment sans électricité ?", a: "Oui — strictement aucune alimentation électrique. Le principe repose sur la convection thermique (l'air chaud monte naturellement) et l'effet venturi (les aubes incurvées tournent dès qu'un filet d'air les sollicite et créent une dépression). Le système est donc passif et permanent — il fonctionne 24h/24 dès lors qu'un différentiel thermique ou un peu de vent est présent." },
                { q: "Faut-il combiner extracteur et isolation Airflex 30 ?", a: "Idéalement oui — les deux solutions agissent à des niveaux différents. L'Airflex 30 bloque le rayonnement infrarouge de la toiture métallique en amont (barrière thermique). L'extracteur statique évacue en aval l'air chaud résiduel qui s'accumule sous-toiture. Combinés, on évite à la fois l'apport thermique et la stratification chaude au plafond. C'est la configuration la plus efficace pour les bâtiments à toiture métallique." },
                { q: "Sur quels types de toiture peut-on poser un extracteur statique ?", a: "Toutes les toitures sont compatibles avec une embase adaptée — bac acier, tôle ondulée, panneaux sandwich, fibrociment, tuiles. La pose se fait en faîtage (point haut) pour optimiser le tirage thermique. L'installation se fait généralement en demi-journée, sans dépose de la couverture, avec calfeutrement et solin pour garantir l'étanchéité." },
                { q: "Quelle maintenance est nécessaire ?", a: "Très limitée. Pas de moteur, pas de courroie, pas de capteur — donc aucune pièce électrique à remplacer. Un contrôle visuel annuel et un nettoyage périodique des aubes (poussières, feuilles, résidus) suffisent à maintenir le rendement. La structure inox / acier galvanisé est dimensionnée pour plusieurs décennies en environnement courant." },
                { q: "L'extracteur est-il éligible à des aides (CEE, MaPrimeRénov') ?", a: "L'extracteur statique seul, en tant qu'équipement passif, n'entre pas dans les fiches CEE ou MaPrimeRénov'. En revanche, il est souvent intégré au sein d'un projet plus large (isolation Airflex 30 sous toiture, traitement thermique d'un bâtiment tertiaire ou agricole) — auquel cas le volet isolation est, lui, généralement éligible. Nous étudions chaque dossier dans son ensemble pour identifier les leviers mobilisables." },
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final" id="contact">
        <div className="container">
          <div className="cta-final__inner fade-in">
            <p className="cta-final__eyebrow">Parlons de votre toiture</p>
            <h2 className="cta-final__title">
              De l&apos;air chaud <em>en moins.</em>
              <br />De la facture en moins.
            </h2>
            <p className="cta-final__subtitle">
              Partagez-nous votre projet — type de bâtiment, surface de toiture, contraintes climatiques. Nous revenons avec un dimensionnement (nombre d&apos;extracteurs préconisés, positionnement) et, si pertinent, l&apos;articulation avec une isolation Airflex 30.
            </p>
            <div className="cta-final__actions">
              <a href="#contact" className="btn btn--primary btn--lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                Étudier ma toiture gratuitement
              </a>
              <a href="tel:+33619798391" className="btn btn--secondary btn--lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.63-.63a2 2 0 0 1 2.11-.45c.9.386 1.86.647 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Nous appeler directement
              </a>
            </div>
            <div className="cta-final__reassurance">
              {["Étude sans engagement", "Réponse sous 48h ouvrées", "Métropole & La Réunion"].map((t) => (
                <div key={t} className="cta-final__reassurance-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

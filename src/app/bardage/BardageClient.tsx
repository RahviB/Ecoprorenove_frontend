"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import CountUp from "@/components/CountUp";
import Faq from "@/components/Faq";

type Profile = "emboitement" | "superpose";

type Finish = {
  ref: string;
  name: string;
  profile: Profile;
  family: string;
  brut: boolean;
  idx: string;
};

const FINISHES: Finish[] = [
  { ref: "afromasia",        name: "Afromasia",       profile: "emboitement", family: "Bois exotique foncé",            brut: false, idx: "01" },
  { ref: "beech",            name: "Beech",           profile: "emboitement", family: "Bois clair chaud",               brut: false, idx: "02" },
  { ref: "brut-emboitement", name: "Brut à peindre",  profile: "emboitement", family: "Finition neutre à personnaliser", brut: true,  idx: "03" },
  { ref: "brut-superpose",   name: "Brut à peindre",  profile: "superpose",   family: "Finition neutre à personnaliser", brut: true,  idx: "04" },
  { ref: "light-yellow",     name: "Light Yellow",    profile: "emboitement", family: "Ton crème lumineux",             brut: false, idx: "05" },
  { ref: "modern-grey",      name: "Modern Grey",     profile: "emboitement", family: "Ton gris moderne",               brut: false, idx: "06" },
  { ref: "wallnut",          name: "Wallnut",         profile: "emboitement", family: "Bois noyer chaleureux",          brut: false, idx: "07" },
];

function profileLabel(p: Profile) {
  return p === "superpose" ? "Superposé" : "Emboîtement";
}

function refCode(idx: string, name: string) {
  const parts = name
    .toUpperCase()
    .replace(/[^A-Z ]/g, "")
    .split(" ")
    .filter(Boolean);
  let letters = parts.map((p) => p[0]).join("").slice(0, 3);
  if (letters.length < 2) letters = name.toUpperCase().slice(0, 2);
  return `#${idx} — ${letters}`;
}

const swatchSrc = (ref: string) => {
  // brut-emboitement and brut-superpose share the brut swatch, but design ships separate files
  if (ref === "brut-superpose") return "/images/bardage/swatch-brut-superpose.jpeg";
  return `/images/bardage/swatch-${ref}.jpeg`;
};

export default function BardageClient() {
  const [filter, setFilter] = useState<"all" | Profile>("all");
  const [activeRef, setActiveRef] = useState<string>("modern-grey");
  const [swapping, setSwapping] = useState(false);
  const previousRef = useRef(activeRef);

  const visibleFinishes = useMemo(
    () => FINISHES.filter((f) => filter === "all" || f.profile === filter),
    [filter]
  );

  // If filter hides current active, jump to first visible
  const effectiveActive =
    visibleFinishes.find((f) => f.ref === activeRef) ?? visibleFinishes[0] ?? FINISHES[0];

  // Brief "rendering" flash on every finish swap — visual cue that the configurator is working
  useEffect(() => {
    if (previousRef.current === effectiveActive.ref) return;
    previousRef.current = effectiveActive.ref;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    setSwapping(true);
    const t = setTimeout(() => setSwapping(false), 420);
    return () => clearTimeout(t);
  }, [effectiveActive.ref]);

  const counts = {
    all: FINISHES.length,
    emboitement: FINISHES.filter((f) => f.profile === "emboitement").length,
    superpose: FINISHES.filter((f) => f.profile === "superpose").length,
  };

  function handleFilter(next: "all" | Profile) {
    setFilter(next);
    const hiddenAfter = !FINISHES.some((f) => f.ref === activeRef && (next === "all" || f.profile === next));
    if (hiddenAfter) {
      const firstVisible = FINISHES.find((f) => next === "all" || f.profile === next);
      if (firstVisible) setActiveRef(firstVisible.ref);
    }
  }

  return (
    <div className="page-bardage">
      {/* HERO */}
      <section className="hero">
        <div className="container container--wide">
          <div className="hero__inner">
            <div className="hero__content fade-in">
              <nav className="hero__breadcrumb" aria-label="Fil d'Ariane">
                <Link href="/">Accueil</Link>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                <Link href="/#solutions">Solutions</Link>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                <span style={{ color: "rgba(255,255,255,.75)" }}>Bardage fibre-ciment</span>
              </nav>

              <div className="hero__badges">
                <span className="tag tag--premium">★ Premium</span>
                <span className="tag tag--white">Fibre-ciment</span>
                <span className="tag tag--white">7 finitions</span>
                <span className="tag tag--white">MaPrimeRénov&apos; jusqu&apos;à 75€/m²</span>
              </div>

              <h1 className="hero__title">
                Bardage fibre-ciment —<br />
                <em>l&apos;élégance</em> d&apos;une façade<br />
                qui <em>traverse</em> les décennies.
              </h1>

              <p className="hero__subtitle">
                Isolation par l&apos;extérieur, rendu haut de gamme, durabilité exceptionnelle. Sept
                finitions au choix — du bois exotique au gris moderne — visualisables en temps réel
                sur notre maison témoin.
              </p>

              <div className="hero__actions">
                <a href="#configurateur" className="btn btn--primary btn--lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                  Configurer mon bardage
                </a>
                <a href="#contact" className="btn btn--secondary">Demander une étude</a>
              </div>

              <div className="hero__highlights">
                <div>
                  <div className="hero__highlight-num">
                    <CountUp end={50} suffix=" ans+" duration={1100} />
                  </div>
                  <div className="hero__highlight-lbl">Durée de vie de la plaque fibre-ciment*</div>
                </div>
                <div>
                  <div className="hero__highlight-num">
                    <CountUp end={7} duration={700} />
                  </div>
                  <div className="hero__highlight-lbl">Finitions disponibles — 2 profils de pose</div>
                </div>
                <div>
                  <div className="hero__highlight-num">
                    <CountUp end={75} suffix=" €/m²" duration={1100} />
                  </div>
                  <div className="hero__highlight-lbl">Aide MaPrimeRénov&apos; mobilisable — jusqu&apos;à 75€/m²*</div>
                </div>
              </div>
            </div>

            {/* Hero preview — synced to active finish */}
            <div className="hero__visual fade-in delay-2">
              <div className="hero__preview-card">
                <div className="hero__preview-badge">Configurateur en direct</div>
                <Image
                  key={effectiveActive.ref}
                  src={`/images/bardage/maison-${effectiveActive.ref}.jpeg`}
                  alt={`Maison témoin habillée en bardage fibre-ciment finition ${effectiveActive.name}`}
                  fill
                  priority
                  sizes="(min-width: 1100px) 45vw, 100vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="hero__preview-overlay">
                  <div className="hero__preview-label">
                    <small>Finition en aperçu</small>
                    {effectiveActive.name}{" "}
                    <span style={{ color: "rgba(255,255,255,.5)" }}>· {profileLabel(effectiveActive.profile)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONFIGURATOR */}
      <section className="configurator" id="configurateur">
        <div className="container container--wide">
          <div className="configurator__header fade-in">
            <span className="configurator__eyebrow">Configurateur interactif</span>
            <h2 className="section-title">
              Choisissez votre finition,<br />
              <em>visualisez</em> le rendu.
            </h2>
            <div className="divider divider--center divider--gold"></div>
            <p className="section-intro section-intro--center">
              Sélectionnez un coloris dans le panneau — la maison témoin se met à jour
              instantanément. Prenez le temps, comparez, revenez en arrière. Votre sélection pourra
              être transmise à notre équipe technique.
            </p>
          </div>

          <div className="configurator__body">
            {/* STAGE */}
            <div className="stage fade-in">
              <div className="stage__img-wrap">
                {FINISHES.map((f) => (
                  <Image
                    key={f.ref}
                    className={`stage__img${f.ref === effectiveActive.ref ? " active" : ""}`}
                    src={`/images/bardage/maison-${f.ref}.jpeg`}
                    alt={`Maison témoin habillée en bardage ${f.name}`}
                    fill
                    sizes="(min-width: 1100px) 60vw, 100vw"
                    priority={f.ref === "modern-grey"}
                    style={{ objectFit: "cover" }}
                  />
                ))}

                <div className={`stage__loader${swapping ? " is-swapping" : ""}`} aria-live="polite">
                  <span className="stage__loader-dot"></span>
                  {swapping ? "Application…" : "Aperçu temps réel"}
                </div>

                <div className="stage__caption">
                  <div className="stage__caption-left">
                    <div className="stage__caption-title">{effectiveActive.name}</div>
                    <div className="stage__caption-meta">
                      <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="4" y="3" width="16" height="18" rx="1" />
                          <line x1="4" y1="9" x2="20" y2="9" />
                          <line x1="4" y1="15" x2="20" y2="15" />
                        </svg>
                        <span>{profileLabel(effectiveActive.profile)}</span>
                      </span>
                      <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>{effectiveActive.family}</span>
                      </span>
                    </div>
                  </div>
                  <div className="stage__caption-ref">
                    <div className="stage__caption-ref-label">Référence</div>
                    <div className="stage__caption-ref-val">{refCode(effectiveActive.idx, effectiveActive.name)}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* PANEL */}
            <aside className="panel fade-in delay-2">
              <span className="panel__step-num">Étape — 01</span>
              <h3 className="panel__title">Votre finition</h3>
              <p className="panel__subtitle">
                7 finitions fibre-ciment, 2 profils de pose. Le type de profil (emboîtement ou
                superposé) conditionne la méthode de pose et le rendu final sur la façade.
              </p>

              {/* Filter */}
              <div className="profile-filter" role="tablist" aria-label="Filtrer par profil de pose">
                <button
                  type="button"
                  className={`profile-filter__btn${filter === "all" ? " active" : ""}`}
                  role="tab"
                  aria-selected={filter === "all"}
                  onClick={() => handleFilter("all")}
                >
                  Tous <span className="count">{counts.all}</span>
                </button>
                <button
                  type="button"
                  className={`profile-filter__btn${filter === "emboitement" ? " active" : ""}`}
                  role="tab"
                  aria-selected={filter === "emboitement"}
                  onClick={() => handleFilter("emboitement")}
                >
                  Emboîtement <span className="count">{counts.emboitement}</span>
                </button>
                <button
                  type="button"
                  className={`profile-filter__btn${filter === "superpose" ? " active" : ""}`}
                  role="tab"
                  aria-selected={filter === "superpose"}
                  onClick={() => handleFilter("superpose")}
                >
                  Superposé <span className="count">{counts.superpose}</span>
                </button>
              </div>

              {/* Swatches */}
              <div className="swatches" role="listbox" aria-label="Choisissez une finition">
                {FINISHES.map((f) => {
                  const visible = filter === "all" || f.profile === filter;
                  return (
                    <button
                      key={f.ref}
                      type="button"
                      className={`swatch${effectiveActive.ref === f.ref ? " active" : ""}`}
                      hidden={!visible}
                      role="option"
                      aria-selected={effectiveActive.ref === f.ref}
                      onClick={() => setActiveRef(f.ref)}
                    >
                      <Image
                        className="swatch__img"
                        src={swatchSrc(f.ref)}
                        alt={f.name}
                        fill
                        sizes="(min-width: 1100px) 100px, 28vw"
                        style={{ objectFit: "cover" }}
                      />
                      <div className="swatch__profile-dot" title={profileLabel(f.profile)}>
                        {f.profile === "superpose" ? "S" : "E"}
                      </div>
                      <div className="swatch__check">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <div className="swatch__label">
                        {f.ref === "brut-emboitement"
                          ? "Brut — emboît."
                          : f.ref === "brut-superpose"
                          ? "Brut — superp."
                          : f.name}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Info */}
              <div className="color-info">
                <div className="color-info__row">
                  <span className="color-info__key">Finition</span>
                  <span className="color-info__val">{effectiveActive.name}</span>
                </div>
                <div className="color-info__row">
                  <span className="color-info__key">Profil de pose</span>
                  <span className="color-info__val color-info__val--mono">{profileLabel(effectiveActive.profile)}</span>
                </div>
                <div className="color-info__row">
                  <span className="color-info__key">Famille chromatique</span>
                  <span className="color-info__val">{effectiveActive.family}</span>
                </div>
                <div className="color-info__row">
                  <span className="color-info__key">Référence interne</span>
                  <span className="color-info__val color-info__val--mono">{refCode(effectiveActive.idx, effectiveActive.name)}</span>
                </div>
              </div>

              {/* Upsell */}
              <div className={`upsell${effectiveActive.brut ? " visible" : ""}`}>
                <div className="upsell__head">
                  <div className="upsell__icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M19 7h-1V5.5A2.5 2.5 0 0 0 15.5 3h-6A2.5 2.5 0 0 0 7 5.5V7H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1v2h10v-2h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" />
                    </svg>
                  </div>
                  <span className="upsell__badge">★ Upsell recommandé</span>
                </div>
                <div className="upsell__title">Finition sur-mesure — mise en peinture</div>
                <p className="upsell__text">
                  Le Brut à peindre est une finition neutre. Il se peint avec une{" "}
                  <strong>peinture microporeuse adaptée aux bardages fibre-ciment</strong> — dans la
                  teinte de votre choix. Deux options pour concrétiser votre projet :
                </p>
                <div className="upsell__options">
                  <div className="upsell__option">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      <strong>Option A — Vous peignez.</strong> Nous livrons le bardage brut. Vous
                      appliquez vous-même une peinture microporeuse (ou via votre peintre).
                    </span>
                  </div>
                  <div className="upsell__option">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      <strong>Option B — Nous nous occupons de tout.</strong> Peinture microporeuse
                      dans la teinte de votre choix, incluse dans la prestation.{" "}
                      <span style={{ color: "var(--gray)", fontStyle: "italic" }}>Devis personnalisé.</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="panel__actions">
                <a href={`#contact?finition=${effectiveActive.ref}`} className="btn btn--primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  Étudier mon projet avec cette finition
                </a>
                <button type="button" className="btn btn--outline-dark">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                  Recevoir un échantillon physique
                </button>
              </div>

              <p className="panel__footnote">
                * Finitions susceptibles de varier légèrement à l&apos;œil selon la lumière. Un
                échantillon physique reste la référence avant commande.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* WHY FIBRE-CIMENT */}
      <section className="why-fc">
        <div className="container container--wide">
          <div className="why-fc__header">
            <div className="fade-in">
              <p className="section-label">Pourquoi le fibre-ciment</p>
              <h2 className="section-title">
                Un matériau <em>d&apos;exception</em>
                <br />
                qui justifie son prix.
              </h2>
              <div className="divider"></div>
            </div>
            <p className="section-intro fade-in delay-2">
              Contrairement au bois, à la résine ou au PVC, la fibre-ciment combine durabilité
              minérale, rendu architectural et très faible entretien. Un investissement pensé pour
              durer — plusieurs décennies sans dégradation sensible*.
            </p>
          </div>

          <div className="why-fc__grid">
            <div className="why-fc-card fade-in delay-1">
              <span className="why-fc-card__num">01</span>
              <svg className="why-fc-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 10" />
              </svg>
              <h3 className="why-fc-card__title">
                Durabilité<br />exceptionnelle
              </h3>
              <p className="why-fc-card__text">
                Les plaques fibre-ciment présentent une durée de vie estimée{" "}
                <strong>au-delà de 50 ans*</strong> — sans dégradation visible du matériau, sans
                pourrissement, sans déformation.
              </p>
            </div>

            <div className="why-fc-card fade-in delay-2">
              <span className="why-fc-card__num">02</span>
              <svg className="why-fc-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18.5 3C16 3 13 5 12 7C11 5 8 3 5.5 3C3 3 2 5 2 7C2 14 12 22 12 22S22 14 22 7C22 5 21 3 18.5 3Z" />
                <path d="M12 7V22" />
              </svg>
              <h3 className="why-fc-card__title">
                Résistance totale<br />aux éléments
              </h3>
              <p className="why-fc-card__text">
                Matériau <strong>incombustible, imputrescible, insensible aux insectes</strong>.
                Tenue mécanique et esthétique en conditions extrêmes — pluie, UV, embruns, gel.
              </p>
            </div>

            <div className="why-fc-card fade-in delay-3">
              <span className="why-fc-card__num">03</span>
              <svg className="why-fc-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 22V12a6 6 0 0 1 12 0v10" />
                <path d="M14 16h6a2 2 0 0 1 2 2v4" />
                <line x1="6" y1="22" x2="6" y2="16" />
              </svg>
              <h3 className="why-fc-card__title">
                Aspect bois<br />sans l&apos;entretien
              </h3>
              <p className="why-fc-card__text">
                Le rendu visuel d&apos;un bardage bois noble — Afromasia, Beech, Wallnut —{" "}
                <strong>sans lasure, sans traitement, sans ponçage</strong>. La couleur reste celle
                du premier jour.
              </p>
            </div>

            <div className="why-fc-card fade-in delay-4">
              <span className="why-fc-card__num">04</span>
              <svg className="why-fc-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <h3 className="why-fc-card__title">
                Éligible<br />MaPrimeRénov&apos;
              </h3>
              <p className="why-fc-card__text">
                Posé en <strong>isolation par l&apos;extérieur (ITE)</strong>, le bardage fibre-ciment
                ouvre droit à une aide{" "}
                <strong>MaPrimeRénov&apos; jusqu&apos;à 75€/m²</strong>* — sous conditions
                d&apos;éligibilité du projet.
              </p>
            </div>
          </div>

          <p style={{ marginTop: 32, fontSize: ".72rem", color: "var(--gray)", fontStyle: "italic", textAlign: "center" }}>
            * Indications issues des données fournisseur. Conditions réelles de tenue selon
            exposition, qualité de pose et entretien périodique recommandé.
          </p>
        </div>
      </section>

      {/* PROFILES */}
      <section className="profiles">
        <div className="container">
          <div className="profiles__header fade-in">
            <p className="section-label">Profils de pose</p>
            <h2 className="section-title">
              Deux géométries,<br />
              deux <em>écritures</em> pour votre façade.
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Le choix du profil conditionne à la fois la méthode de pose et le rendu final — ombres
              portées, rythme visuel, perception de la hauteur. Les deux profils sont éligibles aux
              mêmes finitions coloris.
            </p>
          </div>

          <div className="profiles__grid">
            <div className="profile-card fade-in delay-1">
              <div className="profile-card__head">
                <div>
                  <p className="profile-card__num">Profil 01</p>
                  <h3 className="profile-card__title">Emboîtement</h3>
                </div>
                <span className="profile-card__tag-count">6 finitions</span>
              </div>
              <div className="profile-card__schema">
                <svg viewBox="0 0 360 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="0" y="0" width="360" height="140" fill="#f5f7f4" />
                  <g fill="#49a739" fillOpacity=".15" stroke="#357a28" strokeWidth="1.5">
                    <path d="M 20 110 L 20 95 L 340 95 L 340 110 L 330 115 L 30 115 Z" />
                    <path d="M 20 90 L 20 75 L 340 75 L 340 90 L 330 95 L 30 95 Z" />
                    <path d="M 20 70 L 20 55 L 340 55 L 340 70 L 330 75 L 30 75 Z" />
                    <path d="M 20 50 L 20 35 L 340 35 L 340 50 L 330 55 L 30 55 Z" />
                  </g>
                  <g stroke="#0d1410" strokeWidth="1" fill="none">
                    <line x1="180" y1="20" x2="180" y2="34" strokeDasharray="2 2" />
                  </g>
                  <text x="180" y="15" textAnchor="middle" fill="#0d1410" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700">LAME EMBOÎTÉE</text>
                  <g stroke="#ff6b35" strokeWidth="1.5" fill="none">
                    <path d="M 340 75 L 355 80 L 350 90" />
                  </g>
                  <text x="352" y="105" textAnchor="end" fill="#ff6b35" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700">Jointure cachée</text>
                </svg>
              </div>
              <div className="profile-card__body">
                <p className="profile-card__desc">
                  Les lames s&apos;imbriquent l&apos;une dans l&apos;autre — la jointure est dissimulée dans
                  l&apos;emboîtement. <strong>Rendu contemporain, lignes nettes, surface régulière</strong>.
                </p>
                <ul className="profile-card__points">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                    Jointure invisible, aspect façade lisse
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                    Pose horizontale ou verticale
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                    Étanchéité à l&apos;eau renforcée
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                    Disponible en Afromasia, Beech, Brut, Light Yellow, Modern Grey, Wallnut
                  </li>
                </ul>
              </div>
            </div>

            <div className="profile-card fade-in delay-2">
              <div className="profile-card__head">
                <div>
                  <p className="profile-card__num">Profil 02</p>
                  <h3 className="profile-card__title">Superposé</h3>
                </div>
                <span className="profile-card__tag-count">1 finition</span>
              </div>
              <div className="profile-card__schema">
                <svg viewBox="0 0 360 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="0" y="0" width="360" height="140" fill="#f5f7f4" />
                  <g fill="#49a739" fillOpacity=".15" stroke="#357a28" strokeWidth="1.5">
                    <rect x="20" y="95" width="320" height="20" />
                    <rect x="20" y="78" width="320" height="18" />
                    <rect x="20" y="61" width="320" height="18" />
                    <rect x="20" y="44" width="320" height="18" />
                  </g>
                  <g fill="#0d1410" fillOpacity=".12">
                    <rect x="20" y="95" width="320" height="2" />
                    <rect x="20" y="78" width="320" height="2" />
                    <rect x="20" y="61" width="320" height="2" />
                    <rect x="20" y="44" width="320" height="2" />
                  </g>
                  <g stroke="#0d1410" strokeWidth="1" fill="none">
                    <line x1="180" y1="20" x2="180" y2="43" strokeDasharray="2 2" />
                  </g>
                  <text x="180" y="15" textAnchor="middle" fill="#0d1410" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700">LAME SUPERPOSÉE</text>
                  <g stroke="#ff6b35" strokeWidth="1.5" fill="none">
                    <path d="M 340 65 L 355 70 L 350 80" />
                  </g>
                  <text x="352" y="95" textAnchor="end" fill="#ff6b35" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="700">Chevauchement</text>
                </svg>
              </div>
              <div className="profile-card__body">
                <p className="profile-card__desc">
                  Chaque lame recouvre la précédente —{" "}
                  <strong>effet cascade, jeu d&apos;ombres horizontales marquées</strong>, rythme visuel
                  affirmé. Évoque le bardage clin traditionnel, revisité en fibre-ciment.
                </p>
                <ul className="profile-card__points">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                    Ombres horizontales nettes, façade plus « texturée »
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                    Esprit maison individuelle ou réinterprétation du clin bois
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                    Pose horizontale recommandée pour l&apos;effet
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                    Actuellement disponible en Brut à peindre — à personnaliser
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAINT UPSELL */}
      <section className="paint-upsell">
        <div className="container container--wide">
          <div className="paint-upsell__inner">
            <div className="fade-in">
              <div className="paint-upsell__eyebrow">Finition Brut à peindre</div>
              <h2 className="paint-upsell__title">
                Une toile blanche,<br />
                <em>votre</em> teinte.
              </h2>
              <p className="paint-upsell__text">
                Le Brut à peindre est une finition neutre. Une peinture{" "}
                <strong style={{ color: "#fff" }}>microporeuse adaptée aux bardages fibre-ciment</strong>{" "}
                permet de le personnaliser dans n&apos;importe quelle teinte RAL — avec une tenue
                identique à celle d&apos;une finition d&apos;origine.
              </p>
              <div className="paint-upsell__actions">
                <a href="#contact" className="btn btn--accent btn--lg">Demander un devis peinture</a>
                <a href="#configurateur" className="btn btn--secondary">Voir les profils Brut</a>
              </div>
            </div>

            <div className="paint-upsell__cards fade-in delay-2">
              <div className="paint-card">
                <div className="paint-card__num">A</div>
                <div>
                  <h3 className="paint-card__title">Vous peignez vous-même</h3>
                  <p className="paint-card__text">
                    Nous livrons le bardage brut. Vous appliquez une peinture microporeuse
                    spécifiquement formulée — après pose ou en amont. Économie sur la prestation,
                    flexibilité sur le calendrier.
                  </p>
                  <span className="paint-card__tag paint-card__tag--diy">DIY / Entreprise peintre</span>
                </div>
              </div>

              <div className="paint-card">
                <div className="paint-card__num">B</div>
                <div>
                  <h3 className="paint-card__title">Nous prenons en charge</h3>
                  <p className="paint-card__text">
                    Prestation complète — fourniture de la peinture microporeuse dans la teinte de
                    votre choix, application par nos équipes, garantie pose incluse. Un chantier, un
                    interlocuteur.
                  </p>
                  <span className="paint-card__tag paint-card__tag--pro">Prestation ECOPRORENOVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="method">
        <div className="container">
          <div className="method__header fade-in">
            <p className="section-label">Méthode de pose</p>
            <h2 className="section-title">
              De l&apos;audit façade<br />
              à la <em>réception</em> du chantier.
            </h2>
            <div className="divider divider--center"></div>
          </div>

          <div className="method__steps">
            {[
              { n: "01", t: "Audit façade", p: "Relevé dimensionnel, diagnostic du support existant, contraintes réglementaires (urbanisme, ABF le cas échéant)." },
              { n: "02", t: "Choix finition & profil", p: "Finalisation du coloris sur échantillon physique, validation du profil de pose, calepinage." },
              { n: "03", t: "Dossier MaPrimeRénov'", p: "Montage du dossier MaPrimeRénov', validation d'éligibilité, respect de la chronologie réglementaire (dépôt avant travaux)." },
              { n: "04", t: "Pose RGE", p: "Mise en œuvre par équipes qualifiées — ossature, isolant, lames fibre-ciment, finitions périphériques." },
              { n: "05", t: "Réception & clôture", p: "Contrôle qualité, documents réglementaires, finalisation et versement du dossier MaPrimeRénov'." },
            ].map((s, i) => (
              <div key={s.n} className={`method-step fade-in delay-${i + 1}`}>
                <div className="method-step__num">{s.n}</div>
                <h3 className="method-step__title">{s.t}</h3>
                <p className="method-step__text">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="sectors">
        <div className="container">
          <div className="sectors__header fade-in">
            <p className="section-label">Pour quels bâtiments</p>
            <h2 className="section-title">
              Une solution <em>transverse</em> —<br />
              de la maison au tertiaire.
            </h2>
            <div className="divider divider--center"></div>
          </div>

          <div className="sectors__grid">
            <div className="sector-pill fade-in delay-1">
              <svg className="sector-pill__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="4" y="3" width="16" height="18" rx="1" />
                <line x1="9" y1="8" x2="9" y2="8.01" /><line x1="15" y1="8" x2="15" y2="8.01" />
                <line x1="9" y1="12" x2="9" y2="12.01" /><line x1="15" y1="12" x2="15" y2="12.01" />
                <line x1="9" y1="16" x2="9" y2="16.01" /><line x1="15" y1="16" x2="15" y2="16.01" />
              </svg>
              <h3 className="sector-pill__title">Tertiaire</h3>
              <p className="sector-pill__text">
                Requalification architecturale d&apos;un siège, mise aux normes décret tertiaire,
                habillage premium d&apos;un bâtiment d&apos;accueil.
              </p>
              <div className="sector-pill__tags">
                <span className="tag">Bureaux</span>
                <span className="tag">Hôtellerie</span>
                <span className="tag">Commerces</span>
              </div>
            </div>

            <div className="sector-pill fade-in delay-2">
              <svg className="sector-pill__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 10 L12 3 L21 10 V21 H3 Z" />
                <path d="M9 21 V14 H15 V21" />
              </svg>
              <h3 className="sector-pill__title">Résidentiel</h3>
              <p className="sector-pill__text">
                Maison individuelle, copropriété, projet bailleur. Revalorisation patrimoniale +
                performance thermique, en un seul geste.
              </p>
              <div className="sector-pill__tags">
                <span className="tag">Maison</span>
                <span className="tag">Copropriétés</span>
                <span className="tag">Bailleurs</span>
              </div>
            </div>

            <div className="sector-pill fade-in delay-3">
              <svg className="sector-pill__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 20 V11 L8 7 L13 11 V20 Z" />
                <path d="M13 20 V14 H21 V20" />
                <line x1="7" y1="20" x2="7" y2="15" />
                <line x1="17" y1="20" x2="17" y2="17" />
              </svg>
              <h3 className="sector-pill__title">Agricole</h3>
              <p className="sector-pill__text">
                Bâtiments d&apos;élevage, serres, locaux techniques. Tenue face à l&apos;humidité, aux
                embruns, aux variations thermiques extrêmes.
              </p>
              <div className="sector-pill__tags">
                <span className="tag">Élevage</span>
                <span className="tag">Serres</span>
                <span className="tag">Hangars</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <div className="faq__header fade-in">
            <p className="section-label">Questions fréquentes</p>
            <h2 className="section-title">
              Ce que l&apos;on nous demande<br />
              <em>sur le bardage</em>.
            </h2>
            <div className="divider divider--center"></div>
          </div>
          <div className="faq__list">
            <Faq
              items={[
                {
                  q: "Quelle différence entre emboîtement et superposé ?",
                  a: (
                    <>
                      L&apos;<strong>emboîtement</strong> dissimule la jointure entre les lames — on
                      obtient une façade aux lignes régulières, au rendu contemporain et lisse. Le{" "}
                      <strong>superposé</strong>, lui, fait volontairement chevaucher les lames —
                      chaque bande projette une ombre horizontale qui donne relief et texture à la
                      façade. Le choix est surtout esthétique ; les performances techniques
                      (durabilité, étanchéité, tenue au feu) sont équivalentes.
                    </>
                  ),
                },
                {
                  q: "Combien de temps dure un bardage fibre-ciment ?",
                  a: (
                    <>
                      La durée de vie estimée du matériau est{" "}
                      <strong>supérieure à 50 ans</strong>, selon les données fournisseur et les
                      retours d&apos;expérience sur ce type de plaque. Cela implique un entretien
                      courant léger (nettoyage périodique selon exposition) mais aucune opération de
                      rénovation lourde comparable à un bardage bois (lasure tous les 5-10 ans,
                      remplacement de lames pourries, etc.).
                    </>
                  ),
                },
                {
                  q: "La finition Brut à peindre — quelles peintures sont compatibles ?",
                  a: (
                    <>
                      Seules les{" "}
                      <strong>peintures microporeuses formulées pour bardage fibre-ciment</strong>{" "}
                      sont adaptées. Elles laissent respirer la plaque — indispensable pour la tenue
                      dans le temps — tout en offrant une protection UV stable. Nous pouvons soit
                      vous recommander une référence pour que vous réalisiez la pose peinture
                      vous-même, soit prendre en charge l&apos;intégralité de la prestation
                      (fourniture + application) dans la teinte de votre choix.
                    </>
                  ),
                },
                {
                  q: "Le bardage fibre-ciment est-il éligible à MaPrimeRénov' ?",
                  a: (
                    <>
                      Oui — le bardage fibre-ciment posé en{" "}
                      <strong>isolation par l&apos;extérieur (ITE)</strong> est éligible à{" "}
                      <strong>MaPrimeRénov&apos; jusqu&apos;à 75€/m²</strong>*. À noter : il
                      n&apos;entre <strong>pas</strong> dans le champ des Certificats
                      d&apos;Économies d&apos;Énergie (CEE). L&apos;éligibilité MaPrimeRénov&apos;
                      dépend de la résistance thermique de l&apos;isolant, de la qualification RGE
                      du poseur, et du respect de la chronologie réglementaire —{" "}
                      <strong>dossier ouvert avant le début des travaux</strong>. Nous cadrons ces
                      points en amont.
                    </>
                  ),
                },
                {
                  q: "Peut-on poser du bardage fibre-ciment en bord de mer / à La Réunion ?",
                  a: (
                    <>
                      Oui — c&apos;est même l&apos;un de ses principaux avantages. La plaque
                      fibre-ciment résiste aux{" "}
                      <strong>embruns salins, au rayonnement UV intense et aux variations hygrométriques</strong>.
                      Nous intervenons couramment à La Réunion, où ces contraintes sont
                      quotidiennes, avec des fixations et une mise en œuvre adaptées aux
                      environnements tropicaux et littoraux.
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final" id="contact">
        <div className="container">
          <div className="cta-final__inner fade-in">
            <p className="cta-final__eyebrow">Parlons de votre façade</p>
            <h2 className="cta-final__title">
              Une façade <em>qui dure.</em>
              <br />
              Bien étudiée.
            </h2>
            <p className="cta-final__subtitle">
              Partagez-nous votre projet — bâtiment, surface approximative, finition pressentie.
              Nous revenons vers vous avec une analyse technique et, si éligible, une estimation de
              l&apos;aide MaPrimeRénov&apos; mobilisable (jusqu&apos;à 75€/m²*).
            </p>

            <div className="cta-final__actions">
              <a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible" className="btn btn--primary btn--lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
                Étudier mon projet gratuitement
              </a>
              <a href="#" aria-disabled="true" tabIndex={-1} title="Numéro à venir" className="btn btn--secondary btn--lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.63-.63a2 2 0 0 1 2.11-.45c.9.386 1.86.647 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Nous appeler directement
              </a>
            </div>

            <div className="cta-final__reassurance">
              <div className="cta-final__reassurance-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                Analyse sans engagement
              </div>
              <div className="cta-final__reassurance-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                Réponse sous 48h ouvrées
              </div>
              <div className="cta-final__reassurance-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                Métropole &amp; La Réunion
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

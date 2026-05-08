"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import ContactForm from "@/components/contact/ContactForm";
import CountUp from "@/components/CountUp";
import Faq from "@/components/Faq";
import ScrollNav from "@/components/ScrollNav";
import RelatedSolutions from "@/components/RelatedSolutions";
import "./bardage-mobile.css";

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
  { ref: "afromasia",        name: "Afromasia",       profile: "superpose",   family: "Bois exotique foncé",            brut: false, idx: "01" },
  { ref: "beech",            name: "Beech",           profile: "emboitement", family: "Bois clair chaud",               brut: false, idx: "02" },
  { ref: "brut-emboitement", name: "Brut à peindre",  profile: "emboitement", family: "Finition neutre à personnaliser", brut: true,  idx: "03" },
  { ref: "brut-superpose",   name: "Brut à peindre",  profile: "superpose",   family: "Finition neutre à personnaliser", brut: true,  idx: "04" },
  { ref: "light-yellow",     name: "Light Yellow",    profile: "superpose",   family: "Ton crème lumineux",             brut: false, idx: "05" },
  { ref: "modern-grey",      name: "Modern Grey",     profile: "superpose",   family: "Ton gris moderne",               brut: false, idx: "06" },
  { ref: "wallnut",          name: "Wallnut",         profile: "superpose",   family: "Bois noyer chaleureux",          brut: false, idx: "07" },
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
  if (ref === "brut-superpose") return "/images/bardage/swatch-brut-superpose.webp";
  return `/images/bardage/swatch-${ref}.webp`;
};

export default function BardageClient() {
  const [filter, setFilter] = useState<"all" | Profile>("all");
  const [activeRef, setActiveRef] = useState<string>("modern-grey");
  const [swapping, setSwapping] = useState(false);
  const [mobileSheet, setMobileSheet] = useState<"collapsed" | "expanded">("collapsed");
  const previousRef = useRef(activeRef);

  // Lock background scroll while the mobile sheet is expanded so the page
  // behind doesn't fight scrolling inside the sheet.
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (mobileSheet === "expanded") {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [mobileSheet]);

  // Track whether the configurator section is meaningfully in view so the
  // mobile sheet appears only when the user is actually inside the
  // configurator. Default false to avoid a flash on page load before the
  // IntersectionObserver fires; the observer will set true on mount if
  // the section is already visible.
  const configuratorRef = useRef<HTMLElement | null>(null);
  const [configuratorInView, setConfiguratorInView] = useState(false);
  useEffect(() => {
    const el = configuratorRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) setConfiguratorInView(e.isIntersecting);
      },
      // Require the section to occupy a meaningful portion of the viewport
      // before the sheet appears. Shrink the active region so the sheet
      // doesn't pop in just because the section's edge crossed the fold.
      { threshold: 0, rootMargin: "-25% 0px -25% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // If user scrolls out of the configurator while the sheet is expanded,
  // collapse it so the backdrop doesn't bleed elsewhere.
  useEffect(() => {
    if (!configuratorInView && mobileSheet === "expanded") {
      setMobileSheet("collapsed");
    }
  }, [configuratorInView, mobileSheet]);

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
    <div className="page-bardage solution-template">
      {/* HERO */}
      <section className="hero">
        <div className="container container--wide">
          <div className="hero__inner">
            <div className="hero__content fade-in">
              <h1 className="hero__title hero__title--t1">
                <span className="hero__title-eyebrow">★ Premium — Fibre-ciment — 7 finitions</span>
                <span className="hero__title-anchor">Habillez ou rénovez</span>
                <span className="hero__title-italic">votre façade.</span>
              </h1>

              <p className="hero__stat-line">
                MaPrimeRénov&apos; <strong>jusqu&apos;à 75&thinsp;€/m²</strong>
              </p>

              <p className="hero__subtitle">
                Maison neuve, façade vieillissante ou bâtiment à moderniser : le bardage
                fibre-ciment transforme l&apos;apparence de votre façade tout en la protégeant
                durablement. Ecoprorenove vous accompagne de l&apos;étude technique au choix des
                finitions, jusqu&apos;à la pose complète.
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
                    <CountUp end={30} suffix=" ans+" duration={1100} />
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
                  src={`/images/bardage/maison-${effectiveActive.ref}.webp`}
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

      <ScrollNav
        sections={[
          { id: "configurateur", label: "Configurateur" },
          { id: "materiau", label: "Matériau" },
          { id: "profils", label: "Profils" },
          { id: "methode", label: "Méthode" },
          { id: "secteurs", label: "Secteurs" },
          { id: "faq", label: "FAQ" },
          { id: "contact", label: "Contact" },
        ]}
      />

      {/* HERO BANDEAU — proof points */}
      <div className="hero-bandeau">
        <div className="container">
          <div className="hero-bandeau__inner">
            {[
              "Durée de vie 30 ans+",
              "7 finitions · 2 profils de pose",
              "Isolation par l'extérieur — RGE",
            ].map((t) => (
              <div key={t} className="hero-bandeau__item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONFIGURATOR */}
      <section
        className="configurator"
        id="configurateur"
        ref={configuratorRef}
        data-mobile-in-view={configuratorInView ? "true" : "false"}
      >
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

          <div className="configurator__body" data-mobile-sheet={mobileSheet}>
            {/* MOBILE backdrop — only visible/interactive ≤768px when sheet expanded */}
            <div
              className="mobile-sheet-backdrop"
              aria-hidden="true"
              onClick={() => setMobileSheet("collapsed")}
            />
            {/* STAGE */}
            <div className="stage fade-in">
              <div className="stage__img-wrap">
                {FINISHES.map((f) => (
                  <Image
                    key={f.ref}
                    className={`stage__img${f.ref === effectiveActive.ref ? " active" : ""}`}
                    src={`/images/bardage/maison-${f.ref}.webp`}
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
              {/* MOBILE-only sheet handle. On desktop this is display:none. */}
              <button
                type="button"
                className="mobile-sheet-handle"
                aria-expanded={mobileSheet === "expanded"}
                aria-label={
                  mobileSheet === "expanded"
                    ? "Réduire le sélecteur de finitions"
                    : "Ouvrir le sélecteur de finitions"
                }
                onClick={() =>
                  setMobileSheet((s) => (s === "expanded" ? "collapsed" : "expanded"))
                }
              >
                <div className="mobile-sheet-header">
                  <div className="mobile-sheet-header__left">
                    <div className="mobile-sheet-thumb">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        key={effectiveActive.ref}
                        src={swatchSrc(effectiveActive.ref)}
                        alt=""
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mobile-sheet-meta">
                      <div className="mobile-sheet-eyebrow">Finition active</div>
                      <div className="mobile-sheet-title">
                        {effectiveActive.name}
                        <small>· {profileLabel(effectiveActive.profile)}</small>
                      </div>
                    </div>
                  </div>
                  <span className="mobile-sheet-toggle" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                  </span>
                </div>
              </button>

              <div className="mobile-sheet-body">
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

              {/* Paint personalization — visible only for Brut finitions */}
              <div className={`finition-paint${effectiveActive.brut ? " visible" : ""}`}>
                <div className="finition-paint__head">
                  <div className="finition-paint__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M19 11h2v8h-2zM6 5l8.5-1L13 14l-7 1z" />
                      <path d="M3 14l3 1 .5-1L9 9.5 7 8.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="finition-paint__eyebrow">Personnalisation incluse</p>
                    <h4 className="finition-paint__title">Mise en peinture sur-mesure</h4>
                  </div>
                </div>

                <p className="finition-paint__text">
                  Le Brut à peindre se personnalise dans <strong>n&apos;importe quelle teinte RAL</strong>{" "}
                  avec une peinture microporeuse adaptée — tenue identique à une finition d&apos;origine.
                </p>

                <div className="finition-paint__options">
                  <div className="finition-paint__option">
                    <span className="finition-paint__letter">A</span>
                    <div>
                      <strong>Vous peignez vous-même</strong>
                      <p>Bardage livré brut. Application par vos soins ou via votre peintre.</p>
                    </div>
                  </div>
                  <div className="finition-paint__option">
                    <span className="finition-paint__letter finition-paint__letter--accent">B</span>
                    <div>
                      <strong>Prestation complète</strong>
                      <p>Peinture microporeuse dans votre teinte, appliquée par nos équipes.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="panel__actions">
                <a href="#contact" className="btn btn--primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                  Étudier mon projet avec cette finition
                </a>
              </div>

              <p className="panel__footnote">
                * Finitions susceptibles de varier légèrement à l&apos;œil selon la lumière. Un
                échantillon physique peut être transmis sur demande lors de l&apos;étude.
              </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* WHY FIBRE-CIMENT */}
      <section className="why-fc" id="materiau">
        <div className="container container--wide">
          <div className="why-fc__header">
            <div className="fade-in">
              <p className="section-label">Pourquoi le fibre-ciment</p>
              <h2 className="section-title">
                Un matériau <em>premium</em>
                <br />
                pensé pour durer.
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
                <strong>au-delà de 30 ans*</strong> — sans dégradation visible du matériau, sans
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
                Haute résistance<br />aux conditions extérieures
              </h3>
              <p className="why-fc-card__text">
                <strong>Imputrescible, insensible aux insectes</strong>
                {" "}et conçu pour résister aux UV, à l&apos;humidité, aux embruns et aux
                variations climatiques, le fibre-ciment offre une tenue remarquable dans le
                temps.
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
      <section className="profiles" id="profils">
        <div className="container">
          <div className="profiles__header fade-in">
            <p className="section-label">Profils de pose</p>
            <h2 className="section-title">
              Deux géométries,<br />
              deux <em>écritures</em> pour votre façade.
            </h2>
            <div className="divider divider--center"></div>
            <p className="section-intro section-intro--center">
              Le choix du profil conditionne à la fois la méthode de pose et le rendu final —
              ombres portées, rythme visuel, perception de la hauteur. Chaque profil dispose de
              ses propres finitions coloris.
            </p>
          </div>

          <div className="profiles__grid">
            <div className="profile-card fade-in delay-1">
              <div className="profile-card__head">
                <div>
                  <p className="profile-card__num">Profil 01</p>
                  <h3 className="profile-card__title">Emboîtement</h3>
                </div>
                <span className="profile-card__tag-count">2 finitions</span>
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
                    Disponible en Beech et Brut à peindre
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
                <span className="profile-card__tag-count">5 finitions</span>
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
                    Disponible en Afromasia, Light Yellow, Modern Grey, Wallnut et Brut à peindre
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* METHOD */}
      <section className="method" id="methode">
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
              { n: "01", t: "Audit façade", p: "Relevé dimensionnel, diagnostic du support existant, contraintes d'accès, points singuliers et vérification des règles d'urbanisme si nécessaire." },
              { n: "02", t: "Choix des finitions", p: "Sélection du coloris, du profil de pose, du rendu souhaité et validation des échantillons pour projeter le résultat final." },
              { n: "03", t: "Chiffrage & proposition", p: "Nous établissons une proposition détaillée selon la surface, les finitions choisies, la complexité de pose, les accès chantier et les options retenues." },
              { n: "04", t: "Dossier d'aide éventuel", p: "Si votre projet est éligible, nous étudions les aides mobilisables et montons le dossier en respectant la chronologie administrative avant le démarrage des travaux." },
              { n: "05", t: "Mise en œuvre technique", p: "Pose de l'ossature, de l'isolant si prévu, des lames fibre-ciment et des finitions périphériques selon les règles de l'art." },
              { n: "06", t: "Réception & finitions", p: "Contrôle du rendu final, vérification des détails, nettoyage de fin de chantier et remise des documents de clôture." },
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
      <section className="sectors" id="secteurs">
        <div className="container">
          <div className="sectors__header fade-in">
            <p className="section-label">Pour quels bâtiments</p>
            <h2 className="section-title">
              Une façade <em>valorisée</em>,<br />
              quel que soit votre bâtiment.
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
              <h3 className="sector-pill__title">Tertiaire &amp; collectivités</h3>
              <p className="sector-pill__text">
                Bureaux, commerces, hôtels, bâtiments publics, établissements d&apos;accueil ou
                équipements collectifs : le bardage permet de moderniser l&apos;image du site,
                protéger la façade et renforcer la qualité perçue du bâtiment.
              </p>
              <div className="sector-pill__tags">
                <span className="tag">Bureaux</span>
                <span className="tag">Commerces</span>
                <span className="tag">Hôtellerie</span>
                <span className="tag">Collectivités</span>
              </div>
            </div>

            <div className="sector-pill fade-in delay-2">
              <svg className="sector-pill__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 10 L12 3 L21 10 V21 H3 Z" />
                <path d="M9 21 V14 H15 V21" />
              </svg>
              <h3 className="sector-pill__title">Résidentiel</h3>
              <p className="sector-pill__text">
                Maison individuelle, villa, copropriété ou projet bailleur : une solution idéale
                pour rénover une façade vieillissante, habiller une façade neuve ou donner une
                finition haut de gamme au bâtiment.
              </p>
              <div className="sector-pill__tags">
                <span className="tag">Maison</span>
                <span className="tag">Villa</span>
                <span className="tag">Copropriété</span>
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
              <h3 className="sector-pill__title">Agricole &amp; bâtiments techniques</h3>
              <p className="sector-pill__text">
                Hangars, locaux techniques, bâtiments d&apos;exploitation ou zones exposées : une
                solution robuste pour protéger l&apos;enveloppe, améliorer l&apos;aspect extérieur
                et résister aux conditions climatiques exigeantes.
              </p>
              <div className="sector-pill__tags">
                <span className="tag">Hangars</span>
                <span className="tag">Locaux techniques</span>
                <span className="tag">Exploitation</span>
              </div>
            </div>
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
                      <p>
                        L&apos;<strong>emboîtement</strong> offre une façade aux lignes plus
                        régulières, avec une jonction discrète entre les lames. Le rendu est
                        contemporain, sobre et homogène.
                      </p>
                      <p>
                        Le <strong>superposé</strong> crée un effet de relief plus marqué, avec
                        des lames qui se chevauchent visuellement. Il apporte davantage
                        d&apos;ombre, de texture et de caractère à la façade.
                      </p>
                      <p>
                        Le choix est principalement esthétique : les deux profils permettent
                        d&apos;obtenir une façade durable et qualitative, sous réserve d&apos;une
                        mise en œuvre adaptée.
                      </p>
                    </>
                  ),
                },
                {
                  q: "Quelle est la durée de vie d'un bardage fibre-ciment ?",
                  a: (
                    <>
                      <p>
                        Le fibre-ciment est conçu pour offrir une excellente tenue dans le temps,
                        y compris dans des environnements exigeants comme La Réunion.
                      </p>
                      <p>
                        Avec un produit adapté, une pose conforme et des fixations bien choisies,
                        le client peut être tranquille pour <strong>30 ans et plus</strong>, avec
                        un entretien courant limité.
                      </p>
                      <p>
                        Sa durabilité dépend toutefois de la qualité du matériau, de
                        l&apos;exposition, de la ventilation de la façade, des fixations utilisées
                        et du respect des préconisations de pose. Contrairement au bois, il ne
                        nécessite pas de lasure régulière ni de traitement lourd contre les
                        insectes ou le pourrissement.
                      </p>
                    </>
                  ),
                },
                {
                  q: "La finition Brut à peindre : quelles peintures sont compatibles ?",
                  a: (
                    <>
                      <p>
                        La finition brut à peindre permet de personnaliser la façade avec la
                        teinte de votre choix.
                      </p>
                      <p>
                        Il faut utiliser une peinture adaptée au bardage fibre-ciment, compatible
                        avec les préconisations du fabricant, idéalement{" "}
                        <strong>microporeuse</strong> pour préserver la bonne tenue du support
                        dans le temps.
                      </p>
                      <p>
                        Ecoprorenove peut soit vous orienter vers une solution adaptée, soit
                        intégrer la fourniture et l&apos;application de la peinture dans la
                        prestation.
                      </p>
                    </>
                  ),
                },
                {
                  q: "Le bardage fibre-ciment est-il éligible à MaPrimeRénov' ?",
                  a: (
                    <>
                      <p>
                        Oui, à La Réunion, le bardage ventilé peut être éligible à
                        MaPrimeRénov&apos; selon le type de logement, le profil du ménage, les
                        critères techniques du projet et la chronologie du dossier.
                      </p>
                      <p>
                        L&apos;aide n&apos;est jamais automatique : elle dépend de votre situation
                        et de la solution retenue. Ecoprorenove vérifie les conditions
                        d&apos;éligibilité avant travaux, vous présente clairement les aides
                        mobilisables et prend en charge le montage administratif du dossier de
                        subvention.
                      </p>
                    </>
                  ),
                },
                {
                  q: "Peut-on poser du bardage fibre-ciment en bord de mer ou à La Réunion ?",
                  a: (
                    <>
                      <p>
                        Oui, c&apos;est justement l&apos;un des intérêts du fibre-ciment : il
                        offre une bonne résistance à l&apos;humidité, aux variations climatiques
                        et aux environnements exposés.
                      </p>
                      <p>
                        En bord de mer ou à La Réunion, la mise en œuvre doit toutefois être
                        adaptée : choix des fixations, ventilation de la façade, traitement des
                        points singuliers et respect des préconisations fabricant.
                      </p>
                      <p>
                        C&apos;est cette combinaison — bon matériau, bonnes fixations, bonne pose
                        — qui permet d&apos;obtenir une façade durable.
                      </p>
                    </>
                  ),
                },
                {
                  q: "Est-ce une alternative à un simple ravalement de façade ?",
                  a: (
                    <>
                      <p>
                        Oui. Le bardage fibre-ciment permet de transformer l&apos;apparence
                        d&apos;une façade tout en apportant une protection durable au bâtiment.
                      </p>
                      <p>
                        Contrairement à un ravalement classique, il crée une nouvelle peau
                        extérieure, avec un rendu architectural plus marqué, des finitions
                        personnalisables et la possibilité d&apos;intégrer une isolation par
                        l&apos;extérieur selon le projet.
                      </p>
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </section>

      <RelatedSolutions
        items={["isolation-toiture-rampants", "isolation-combles", "ma-prime-renov"]}
      />

      {/* CTA FINAL — inline form with finition prefill */}
      <section className="cta-final" id="contact">
        <div className="container">
          <div className="cta-final__inner fade-in">
            <p className="section-label section-label--white">Parlons de votre façade</p>
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

            <div className="form-card form-card--bardage fade-in delay-2">
              <ContactForm source="bardage">
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="b-prenom">Prénom *</label>
                    <input className="form-input" type="text" id="b-prenom" name="prenom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="b-nom">Nom *</label>
                    <input className="form-input" type="text" id="b-nom" name="nom" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="b-email">Email *</label>
                    <input className="form-input" type="email" id="b-email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="b-tel">Téléphone *</label>
                    <input className="form-input" type="tel" id="b-tel" name="telephone" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="b-finition">Finition pressentie</label>
                    <select
                      key={effectiveActive.ref}
                      className="form-select"
                      id="b-finition"
                      name="finition"
                      defaultValue={effectiveActive.name}
                    >
                      {FINISHES.map((f) => (
                        <option key={f.ref} value={f.name}>
                          {f.name} — {profileLabel(f.profile)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="b-profil">Profil de pose</label>
                    <select
                      key={`profil-${effectiveActive.ref}`}
                      className="form-select"
                      id="b-profil"
                      name="profil"
                      defaultValue={profileLabel(effectiveActive.profile)}
                    >
                      <option value="Emboîtement">Emboîtement</option>
                      <option value="Superposé">Superposé</option>
                      <option value="À déterminer">À déterminer</option>
                    </select>
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="b-surface">Surface façade approximative (m²)</label>
                    <input className="form-input" type="text" id="b-surface" name="surface" placeholder="Ex. 120 m²" />
                  </div>
                  <div className="form-group form-group--full">
                    <label className="form-label" htmlFor="b-message">Décrivez votre projet</label>
                    <textarea className="form-textarea" id="b-message" name="message" placeholder="Type de bâtiment, contexte, contraintes urbanisme/ABF, calendrier souhaité…" rows={4}></textarea>
                  </div>
                  <div className="form-group form-group--full">
                    <div className="form-consent">
                      <input type="checkbox" id="b-rgpd" name="rgpd" required />
                      <label htmlFor="b-rgpd">J&apos;accepte que mes données soient utilisées par ECOPRORENOVE pour l&apos;étude de mon projet. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles.</label>
                    </div>
                  </div>
                  <div className="form-group form-group--full">
                    <button type="submit" className="btn btn--primary btn--lg form-submit">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                      Étudier mon projet
                    </button>
                  </div>
                </div>
              </ContactForm>
            </div>

            <div className="cta-final__actions">
              <a href="tel:+33619798391" className="btn btn--secondary btn--lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.63-.63a2 2 0 0 1 2.11-.45c.9.386 1.86.647 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Ou nous appeler directement
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

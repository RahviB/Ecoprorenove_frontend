# Courtage énergie page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Stand up a dedicated `/courtage-energie` route, wire it into nav/footer/homepage/sitemap/related-solutions/contact pipeline, and retire the existing `#courtage` anchor on `/accompagnement-strategique`.

**Architecture:** New Next.js 16 App Router page at `src/app/courtage-energie/page.tsx` following the existing `.solution-template` pattern (T1 hero + bandeau + content sections + ScrollNav + RelatedSolutions + inline ContactForm). All visual chrome reuses existing components and CSS — no new dependencies, no new components, no new CSS classes beyond the `.page-courtage-energie` co-class wrapper.

**Tech Stack:** Next.js 16 (App Router, Turbopack), React 19, TypeScript, plain CSS in `src/app/globals.css`, Resend for form submissions. Project uses no client-side test framework — verification is `npm run build` clean + grep sweep for broken anchors.

**Spec reference:** `docs/superpowers/specs/2026-05-02-courtage-energie-page-design.md`

**Project conventions to honour:**
- AGENTS.md: *"This is NOT the Next.js you know — read the relevant guide in `node_modules/next/dist/docs/` before writing any code."* The closest sibling page is `/vmc-double-flux` (most recent solution-template page, same Next 16 era). Mirror its imports, exports, and structure.
- ESLint `react/no-unescaped-entities` is on — use `&apos;` and `&amp;` inside JSX text.
- CSS scoping: top-level `<div className="page-service solution-template page-courtage-energie">`. No new CSS classes are required (the spec confirmed `.solution-template` covers everything).
- Frequent commits: each task ends with a commit.

---

## Task 0: Pre-flight verification

**Files:** none (read-only)

- [ ] **Step 1: Confirm the dev environment is wired**

```powershell
cd C:\Users\rahvi\projects\EcoProrenove\ecoprorenove-web
npm run build
```

Expected: build succeeds, prints "✓ Compiled successfully" and a list of 22 routes. If this fails, fix the regression before adding new code.

- [ ] **Step 2: Confirm the sibling page pattern**

Open `src/app/vmc-double-flux/page.tsx`. This is the most recent solution-template page and is the structural template we'll mirror for `/courtage-energie`. Skim it once to confirm:
- Imports (`Metadata`, `ContactForm`, `Faq`, `ServiceJsonLd`, `BreadcrumbJsonLd`, `ScrollNav`, `RelatedSolutions`)
- Top-level wrapper: `<div className="page-service solution-template page-vmc">`
- Section sequence: hero → ScrollNav → bandeau → content sections with `id` anchors → FAQ → RelatedSolutions → contact form
- ContactForm receives `source="<slug>"` prop and wraps a `<div className="form-grid">`

No commit. Pure orientation step.

---

## Task 1: Add `courtage-energie` to the ContactForm SOURCE_LABEL map

**Why first:** Tiny isolated change, can ship independently. The new page's contact form will reference this slug, so it needs to exist before the page submits.

**Files:**
- Modify: `src/lib/contact-action.ts:13-27`

- [ ] **Step 1: Read the current SOURCE_LABEL**

The current map at `src/lib/contact-action.ts:13-27`:
```typescript
const SOURCE_LABEL: Record<string, string> = {
  "home": "Page d'accueil",
  "tertiaire": "Secteur tertiaire",
  "residentiel": "Secteur résidentiel",
  "agricole": "Secteur agricole",
  "isolation-combles": "Isolation des combles",
  "isolation-toiture-rampants": "Isolation toiture (thermoréflectif)",
  "destratificateur-air": "Destratificateur d'air",
  "prime-cee": "Prime CEE",
  "ma-prime-renov": "MaPrimeRénov'",
  "vmc-double-flux": "VMC double flux agricole",
  "accompagnement-strategique": "Accompagnement stratégique",
  "extracteur-air": "Extracteur d'air",
  "bardage": "Bardage",
};
```

- [ ] **Step 2: Add the courtage-energie entry**

Insert this line after the `"accompagnement-strategique"` entry (line 24), keeping the alphabetical-ish ordering loose like the existing file:

```typescript
  "courtage-energie": "Courtage énergie (gaz / électricité)",
```

The final block:
```typescript
const SOURCE_LABEL: Record<string, string> = {
  "home": "Page d'accueil",
  "tertiaire": "Secteur tertiaire",
  "residentiel": "Secteur résidentiel",
  "agricole": "Secteur agricole",
  "isolation-combles": "Isolation des combles",
  "isolation-toiture-rampants": "Isolation toiture (thermoréflectif)",
  "destratificateur-air": "Destratificateur d'air",
  "prime-cee": "Prime CEE",
  "ma-prime-renov": "MaPrimeRénov'",
  "vmc-double-flux": "VMC double flux agricole",
  "accompagnement-strategique": "Accompagnement stratégique",
  "courtage-energie": "Courtage énergie (gaz / électricité)",
  "extracteur-air": "Extracteur d'air",
  "bardage": "Bardage",
};
```

- [ ] **Step 3: Verify build still passes**

```powershell
npm run build
```

Expected: PASS. No type errors. 22 routes still listed (we haven't added the page yet).

- [ ] **Step 4: Commit**

```powershell
git add src/lib/contact-action.ts
git commit -m "Add courtage-energie SOURCE_LABEL for upcoming page"
```

---

## Task 2: Add `courtage-energie` to the RelatedSolutions catalog

**Why now:** Lets us link to it from other pages later. Won't break anything if the page doesn't exist yet — the catalog is just a lookup table.

**Files:**
- Modify: `src/components/RelatedSolutions.tsx:5-60`

- [ ] **Step 1: Add the catalog entry**

In `src/components/RelatedSolutions.tsx`, inside the `CATALOG` constant, insert a new entry between `"accompagnement-strategique"` and `"prime-cee"` (so the visual ordering reads solutions-then-subventions). The new entry:

```typescript
  "courtage-energie": {
    slug: "courtage-energie",
    title: "Courtage en énergie",
    lead: "Mise en concurrence gaz & électricité, indépendance, suivi continu.",
    group: "solution",
  },
```

The `accompagnement-strategique` entry currently ends at line 47 (`group: "solution",` then `},`). Insert the new block immediately after the closing `},` of accompagnement-strategique and before the `"prime-cee"` entry.

- [ ] **Step 2: Verify build still passes**

```powershell
npm run build
```

Expected: PASS.

- [ ] **Step 3: Commit**

```powershell
git add src/components/RelatedSolutions.tsx
git commit -m "RelatedSolutions: add courtage-energie catalog entry"
```

---

## Task 3: Create `/courtage-energie` page

**This is the bulk of the work.** Single new file. All copy is finalised in this plan — no placeholders. ContactForm is the standard pattern from `vmc-double-flux/page.tsx`.

**Files:**
- Create: `src/app/courtage-energie/page.tsx`

- [ ] **Step 1: Create the directory**

```powershell
mkdir src\app\courtage-energie
```

- [ ] **Step 2: Write the page file**

Create `src/app/courtage-energie/page.tsx` with the exact content below. This file mirrors the structure of `src/app/vmc-double-flux/page.tsx` but with courtage-specific content from the design spec.

```tsx
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
              ["03", "Lecture des offres &amp; arbitrage", "Décomposition ligne à ligne : prix fournitures, acheminement, taxes, mécanisme d'indexation, clauses de sortie. Recommandation argumentée — prix fixe vs indexé, durée, fournisseur — selon votre profil de risque et vos contraintes."],
              ["04", "Bascule administrative", "Résiliation du contrat sortant, signature, transfert PRM/PCE, gestion du calendrier de bascule pour éviter toute rupture de fourniture. Vous signez. Nous coordonnons le reste."],
              ["05", "Suivi &amp; renégociation", "Surveillance des conditions de marché jusqu'à l'échéance. Alertes en cas de fenêtre d'opportunité. Préparation du renouvellement plusieurs mois avant l'échéance — le bon moment se prépare, il ne se subit pas."],
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
```

- [ ] **Step 3: Add `type_contrat` and `echeance` to FIELD_LABEL**

The form introduces two new field names (`type_contrat`, `echeance`) that don't exist in the FIELD_LABEL map at `src/lib/contact-action.ts:29-44`. Without entries, the email body will print the raw field names. Add these:

In `src/lib/contact-action.ts`, inside the `FIELD_LABEL` object, after the existing `type_couverture` line:

```typescript
  type_contrat: "Type de contrat",
  echeance: "Échéance du contrat actuel",
```

Final block:
```typescript
const FIELD_LABEL: Record<string, string> = {
  prenom: "Prénom",
  nom: "Nom",
  societe: "Société",
  telephone: "Téléphone",
  email: "Email",
  secteur: "Secteur",
  type_batiment: "Type de bâtiment",
  type_combles: "Type de combles",
  type_couverture: "Type de couverture",
  type_contrat: "Type de contrat",
  echeance: "Échéance du contrat actuel",
  finition: "Finition bardage",
  profil: "Profil de pose",
  surface: "Surface (m²)",
  hauteur: "Hauteur sous toiture",
  message: "Message / projet",
};
```

- [ ] **Step 4: Verify build**

```powershell
npm run build
```

Expected: PASS. Output now lists 23 routes (was 22). The `/courtage-energie` route should appear. No type errors. No ESLint errors.

If you see `react/no-unescaped-entities` errors, the most common offenders are stray `'` (use `&apos;`) and `&` (use `&amp;`) inside JSX text — re-check the exact copy above.

- [ ] **Step 5: Visual smoke test**

```powershell
npm run dev
```

Open `http://localhost:3001/courtage-energie` (port 3001 is the project's expected fallback). Confirm:
- Hero renders, placeholder image visible, 3 floating bubbles
- ScrollNav appears on the right at desktop ≥ 1100px
- All 7 sections (`#concept`, `#valeur`, `#methode`, `#independance`, `#perimetre`, `#faq`, `#contact`) scroll into view via the ScrollNav links
- FAQ accordion expands/collapses
- Form fields render, RGPD checkbox is required, submit button posts (no need to actually submit on dev)
- No console errors

Stop the dev server (`Ctrl+C`) once verified.

- [ ] **Step 6: Commit**

```powershell
git add src/app/courtage-energie/page.tsx src/lib/contact-action.ts
git commit -m "Add /courtage-energie page with full content and form"
```

---

## Task 4: Add `/courtage-energie` to sitemap

**Files:**
- Modify: `src/app/sitemap.ts:5-22`

- [ ] **Step 1: Add the slug to the routes array**

In `src/app/sitemap.ts`, the `routes` array currently lists 16 entries (homepage + 15 routes). Add `"courtage-energie"` after `"accompagnement-strategique"`:

```typescript
const routes = [
  "",
  "bardage",
  "isolation-combles",
  "isolation-toiture-rampants",
  "destratificateur-air",
  "extracteur-air",
  "prime-cee",
  "ma-prime-renov",
  "vmc-double-flux",
  "accompagnement-strategique",
  "courtage-energie",
  "qui-sommes-nous",
  "tertiaire",
  "residentiel",
  "agricole",
  "mentions-legales",
  "politique-de-confidentialite",
];
```

- [ ] **Step 2: Verify build**

```powershell
npm run build
```

Expected: PASS. The sitemap now has 17 entries.

- [ ] **Step 3: Optional — confirm sitemap content**

```powershell
npm run dev
```

In another terminal:
```powershell
curl http://localhost:3001/sitemap.xml | findstr courtage-energie
```

Expected: one match showing `<loc>https://ecoprorenove.fr/courtage-energie</loc>` (or `http://localhost:3001/...` depending on env).

Stop dev server.

- [ ] **Step 4: Commit**

```powershell
git add src/app/sitemap.ts
git commit -m "Sitemap: add /courtage-energie"
```

---

## Task 5: Update Navbar — desktop mégamenu + mobile drawer

**Files:**
- Modify: `src/components/Navbar.tsx:220` (desktop mégamenu)
- Modify: `src/components/Navbar.tsx:352` (mobile drawer)

- [ ] **Step 1: Update desktop mégamenu link**

In `src/components/Navbar.tsx`, locate the desktop mégamenu link at line 220 (a `<Link>` with `href="/accompagnement-strategique#courtage"` and visible text "Courtage en énergie"). Change the href:

Before:
```tsx
<Link href="/accompagnement-strategique#courtage" className="mm-link" role="menuitem">
```

After:
```tsx
<Link href="/courtage-energie" className="mm-link" role="menuitem">
```

The icon and text content stay identical.

- [ ] **Step 2: Update mobile drawer link**

In the same file at line 352, the mobile drawer entry:

Before:
```tsx
<Link href="/accompagnement-strategique#courtage" className="mobile-drawer__link" onClick={() => setDrawerOpen(false)}>Courtage en énergie</Link>
```

After:
```tsx
<Link href="/courtage-energie" className="mobile-drawer__link" onClick={() => setDrawerOpen(false)}>Courtage en énergie</Link>
```

- [ ] **Step 3: Verify build**

```powershell
npm run build
```

Expected: PASS.

- [ ] **Step 4: Confirm no remaining `accompagnement-strategique#courtage` references in Navbar**

```powershell
git grep "accompagnement-strategique#courtage" src/components/Navbar.tsx
```

Expected: no output (zero matches).

- [ ] **Step 5: Commit**

```powershell
git add src/components/Navbar.tsx
git commit -m "Navbar: link Courtage en énergie to /courtage-energie"
```

---

## Task 6: Update Footer

**Files:**
- Modify: `src/components/Footer.tsx:56`

- [ ] **Step 1: Update the Courtage entry**

In `src/components/Footer.tsx` at line 56:

Before:
```tsx
<li><Link href="/accompagnement-strategique#courtage">Courtage en énergie</Link></li>
```

After:
```tsx
<li><Link href="/courtage-energie">Courtage en énergie</Link></li>
```

- [ ] **Step 2: Verify build**

```powershell
npm run build
```

Expected: PASS.

- [ ] **Step 3: Commit**

```powershell
git add src/components/Footer.tsx
git commit -m "Footer: link Courtage en énergie to /courtage-energie"
```

---

## Task 7: Update homepage SolutionsTabs entry

**Files:**
- Modify: `src/app/page.tsx:119-125`

- [ ] **Step 1: Update the Courtage tab entry**

In `src/app/page.tsx`, the SolutionsTabs entry currently at lines 119-125 reads:

```tsx
  {
    href: "/accompagnement-strategique#courtage",
    title: "Courtage en énergie",
    desc: "Mise en concurrence des fournisseurs gaz / électricité.",
    sectors: ["tertiaire", "agricole"] as const,
  },
```

Change `href` to `/courtage-energie`:

```tsx
  {
    href: "/courtage-energie",
    title: "Courtage en énergie",
    desc: "Mise en concurrence des fournisseurs gaz / électricité.",
    sectors: ["tertiaire", "agricole"] as const,
  },
```

- [ ] **Step 2: Verify build**

```powershell
npm run build
```

Expected: PASS.

- [ ] **Step 3: Commit**

```powershell
git add src/app/page.tsx
git commit -m "Homepage: link Courtage tab to /courtage-energie"
```

---

## Task 8: Update `/accompagnement-strategique` — remove `#courtage` anchor, link to new page

**Why:** The new dedicated page replaces the in-page anchor. The accompagnement page keeps its three-pillar overview but card 02 now points outward instead of housing the full content.

**Files:**
- Modify: `src/app/accompagnement-strategique/page.tsx` (the courtage card around line 173, in the `cee-mechanism` section)

- [ ] **Step 1: Locate the courtage card**

The card lives inside the `cee-mechanism` section, in the array passed to `.map()`. The current entry (around line 173):

```tsx
{ id: "courtage", n: "02 — Courtage en énergie", t: "Acheter mieux, contractualiser juste", p: "Le marché de l'énergie est complexe : multiplicité des fournisseurs, structures tarifaires opaques, fenêtres d'arbitrage étroites. Notre activité de courtage couvre la mise en concurrence des fournisseurs gaz et électricité, l'analyse comparative des offres, la négociation des conditions, et le suivi des renouvellements. L'objectif : sécuriser un coût maîtrisé sur la durée, sans engagement piégeux." },
```

- [ ] **Step 2: Remove the `id` (we no longer need the in-page anchor) and shorten the text**

Replace the entire entry with:

```tsx
{ id: undefined, n: "02 — Courtage en énergie", t: "Acheter mieux, contractualiser juste", p: "Mise en concurrence des fournisseurs gaz et électricité, lecture comparée des offres, négociation des conditions, suivi des renouvellements. Notre rôle : sécuriser un coût maîtrisé sur la durée, en toute indépendance. Page dédiée pour le détail." },
```

- [ ] **Step 3: Add a "voir la page dédiée →" link inside the card**

The current `cee-card` template renders `n`, `t`, and `p`. To add the outbound link without changing the shared `.map()` template, append a manual link after the `cee-mechanism__grid` div, but before the `cee-notice` div. Insert:

```tsx
          <div className="fade-in" style={{ textAlign: "center", marginTop: 32 }}>
            <a href="/courtage-energie" className="btn btn--secondary">
              Voir la page Courtage en énergie
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: 8 }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
```

This sits between the closing `</div>` of `cee-mechanism__grid` (around line 183) and the `<div className="cee-notice fade-in">` (around line 184). The inline `style` is acceptable here — it matches the inline-style pattern already used elsewhere in this same file (lines 227, 248, 263, etc.).

- [ ] **Step 4: Update ScrollNav — replace `#courtage` removal**

The ScrollNav for `/accompagnement-strategique` (around lines 86-97) does NOT include `#courtage` in its sections list — it lists `enjeux / perimetre / travaux / methode / gestion / ecoprorenove / faq / contact`. So no change needed there.

- [ ] **Step 5: Verify build**

```powershell
npm run build
```

Expected: PASS.

- [ ] **Step 6: Confirm no remaining `accompagnement-strategique#courtage` references anywhere in src/**

```powershell
git grep "accompagnement-strategique#courtage" src/
```

Expected: no output (zero matches across the entire src tree).

- [ ] **Step 7: Visual sanity check**

```powershell
npm run dev
```

Open `http://localhost:3001/accompagnement-strategique`. Confirm:
- Card 02 (Courtage en énergie) renders with shortened copy
- A "Voir la page Courtage en énergie →" button appears below the 3-card grid, before the cee-notice band
- Clicking it routes to `/courtage-energie` and the page renders correctly
- Hash-link `#courtage` no longer scrolls to anything (which is fine — no inbound link uses it now)

Stop dev server.

- [ ] **Step 8: Commit**

```powershell
git add src/app/accompagnement-strategique/page.tsx
git commit -m "Accompagnement: card 02 points to dedicated /courtage-energie page"
```

---

## Task 9: Remove dead CSS rule for `.cee-card[id="courtage"]`

**Files:**
- Modify: `src/app/globals.css:3990` (or thereabouts — the line may have shifted; verify with grep)

- [ ] **Step 1: Locate the rule**

```powershell
git grep -n "cee-card\[id=\"courtage\"\]" src/app/globals.css
```

Expected: one match. The rule reads:

```css
.cee-card[id="courtage"] { scroll-margin-top: 96px; }
```

It is preceded by the comment `/* Scroll-margin compensation for sticky navbar on in-page anchors */`.

- [ ] **Step 2: Delete the rule and its preceding comment line**

Remove these two lines:

```css
/* Scroll-margin compensation for sticky navbar on in-page anchors */
.cee-card[id="courtage"] { scroll-margin-top: 96px; }
```

Keep surrounding whitespace clean — leave the section break that comes next (`/* =================  Shared: sector pages …`) intact.

- [ ] **Step 3: Verify build**

```powershell
npm run build
```

Expected: PASS. Bundle size for the CSS chunk should drop by a small amount.

- [ ] **Step 4: Confirm the rule is gone**

```powershell
git grep "cee-card\[id=\"courtage\"\]" src/
```

Expected: no output.

- [ ] **Step 5: Commit**

```powershell
git add src/app/globals.css
git commit -m "Remove dead .cee-card[id=courtage] scroll-margin rule"
```

---

## Task 10: Final verification — site-wide grep + build + visual sweep

**Files:** none (verification only)

- [ ] **Step 1: Grep for any remaining `#courtage` references in source**

```powershell
git grep "#courtage" src/
```

Expected: no output. (The only remaining `courtage` references should be regular text, not anchor links.)

- [ ] **Step 2: Confirm 23 routes in build output**

```powershell
npm run build
```

Expected: build succeeds and the route list shows `/courtage-energie` among the static routes. Total: 23 routes (up from 22).

- [ ] **Step 3: Visual sweep on staging-equivalent dev**

```powershell
npm run dev
```

Open in browser:
- `http://localhost:3001/courtage-energie` — full page renders, all 7 sections, ScrollNav active, FAQ works, form renders
- `http://localhost:3001/` — homepage SolutionsTabs "Courtage en énergie" tab links to `/courtage-energie` (hover the card; check the destination)
- `http://localhost:3001/accompagnement-strategique` — card 02 links out to `/courtage-energie` via the "Voir la page" button
- Navbar mégamenu (desktop ≥ 1024px) — Solutions menu shows "Courtage en énergie" → links to `/courtage-energie`
- Mobile drawer (≤ 768px) — same link works
- Footer — "Courtage en énergie" link works

Stop dev server.

- [ ] **Step 4: Confirm RelatedSolutions links work both ways**

`/courtage-energie` shows "Pages en lien" section with three cards: Accompagnement stratégique, Prime CEE, MaPrimeRénov'. All three should resolve.

Other solution pages (e.g., `/prime-cee`) do not currently include `courtage-energie` in their RelatedSolutions items — that's deliberate per the spec; the cross-link catalog stays as-is unless a future task expands it.

- [ ] **Step 5: Push to origin**

After all 9 commits land cleanly, push to GitHub. Coolify auto-redeploys `https://stag.ecoprorenove.fr` on push.

```powershell
git push origin main
```

Expected: push succeeds. Coolify build runs in ~2-3 minutes. Visit `https://stag.ecoprorenove.fr/courtage-energie` to confirm the page is live.

- [ ] **Step 6: End-to-end form smoke test on staging**

Once Coolify finishes deploying, submit the form on `https://stag.ecoprorenove.fr/courtage-energie` with test data. Confirm:
- Email lands at `rahvi.bichon@gmail.com`
- Subject contains `[Contact ECOPRORENOVE — Courtage énergie (gaz / électricité)]`
- Body shows the new fields with their FIELD_LABEL labels: "Type de contrat" and "Échéance du contrat actuel"

If the email doesn't arrive, check Coolify logs for `RESEND_API_KEY` — it should already be set (per project memory), but confirm.

- [ ] **Step 7: Update NEXT-STEPS.md**

Add a session entry to `NEXT-STEPS.md` reflecting that `/courtage-energie` shipped, the `#courtage` anchor was retired, and the route count is now 23. The exact phrasing follows the existing session-log convention in that file.

- [ ] **Step 8: Final commit (NEXT-STEPS.md update)**

```powershell
git add NEXT-STEPS.md
git commit -m "NEXT-STEPS: log /courtage-energie ship + 23 routes"
git push origin main
```

---

## Self-Review Notes (post-write)

- **Spec coverage:** Every section in the spec has a corresponding task. Section 1 (hero) → Task 3. Section 6 (indépendance dark band) → Task 3 (`method` section in JSX, dark style). Section 9 (related solutions) → Task 3 (RelatedSolutions component). Wiring updates in spec → Tasks 1-9. Acceptance criteria in spec → Task 10.
- **Placeholders:** None. All copy, JSX, and CSS edits show exact content.
- **Type consistency:** SOURCE_LABEL key `"courtage-energie"` matches ContactForm `source="courtage-energie"` matches RelatedSolutions catalog slug `"courtage-energie"` matches sitemap entry `"courtage-energie"` matches route folder `src/app/courtage-energie/`. All consistent.
- **Two field-label additions** (`type_contrat`, `echeance`) are added in Task 3 Step 3 — this avoids the email body printing raw field names.
- **Dark-band styling** for the indépendance section reuses the `method` CSS scope (same approach as `/accompagnement-strategique`'s method section). No new CSS classes required.

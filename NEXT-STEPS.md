# EcoProRenove — Next Steps

Snapshot from end of session 12, **2026-04-30**. Resume from this doc.

GitHub: `https://github.com/RahviB/Ecoprorenove_frontend.git` (branch `main`)
Staging: `https://stag.ecoprorenove.fr` — Coolify redeploys on push.
Latest commits (session 12): `dfe4be3` "Bardage configurator: bento mosaic layout at desktop ≥1101px" / `390f75a` "Bardage: redesign Brut paint block, drop standalone upsell band, hide ScrollNav" / `e7f83d3` "Replace fixed-position aides floater with inline callout pointing to step 02" / `be35ac1` "Homepage UI polish + vmc-double-flux grid fix; unify eyebrow site-wide".

---

## 🚀 Resume

```bash
cd C:\Users\rahvi\projects\EcoProrenove\ecoprorenove-web
npm run dev      # http://localhost:3001
npm run build    # 22 routes, must stay clean
```

---

## ✅ What's done — session 12 (2026-04-30)

### Homepage UI polish
- **Solutions tabs reordered**: bardage first (premium), then toiture, combles, destrat, extracteur, vmc, courtage, accompagnement, prime-cee.
- **Parcours title rewritten**: was "Notre méthode" eyebrow + "Notre processus" title (repetitive); now "Notre méthode" + "Six étapes, *un dossier maîtrisé*".
- **Removed duplicate stats** from parcours (the +200 000 MWh / +500 dossiers numbers were already in hero).
- **Replaced "Interlocuteur unique" engagement card** (it duplicated the hero subtitle) with "Étude gratuite, sans engagement".
- **CTA section now has dual phone buttons** with La Réunion as **primary** (accent green border + tint) and Métropole secondary. Both numbers visible — replaces the generic "Ou nous appeler directement" button.
- **Eyebrow unification across 7 pages** (homepage + 6 others): `cta-final__eyebrow` and `trust-marquee__intent` swapped for `section-label section-label--white` (or `section-label` on light bg). Added global `.section-label--white { color: rgba(255,255,255,.7); }` modifier. Old CSS rules deleted.

### `AidesCallout` component (replaces `AidesFloater`)
- New `src/components/AidesCallout.tsx` (server component). Inline element rendered inside `.parcours-unifie` *below the timeline*, with a triangle pointer at top-left aimed UP at step 02 ("Analyse technique & éligibilité CEE"). On desktop: positioned via `margin-left: max(0px, calc((100% / 6) * 1))` to align with column 2. On tablet (≤1024): aligns to col 2 of 3. On mobile (≤640): full width below stacked timeline.
- Old `AidesFloater.tsx` (fixed bottom-right with IntersectionObserver + sessionStorage dismiss) deleted. The fixed-position version conflicted with `.back-to-top` and `.mobile-cta-bar` across breakpoints.
- Speech-bubble feel anchors the "we check your aides" message to the actual step where it happens.

### vmc-double-flux — "Votre transition en 4 étapes" grid bug
- The 4-step section was rendering as 4 stacked full-width strips. Cause: JSX used `className="how-it-works__steps"` but the CSS rule is `.how-steps` (3 other solution pages all use `.how-steps`). Renamed to match.
- Tightened the eyebrow: "Votre transition en 4 étapes" → "Notre méthode en 4 étapes" (consistent with homepage parcours).

### Bardage configurator overhaul
- **Removed "Étape — 01"** eyebrow (no Étape 02 exists).
- **Replaced inline `.upsell` block** (with customer-facing "★ Upsell recommandé" badge) with `.finition-paint` — premium dark card style, "Personnalisation incluse" eyebrow, "Mise en peinture sur-mesure" title, two stacked options with **A/B letter badges** (B in accent orange). Customer-facing copy contains no "Upsell" wording.
- **Removed standalone `.paint-upsell` section** (the big dark band below the configurator) — content fully integrated into the configurator panel.
- **Stripped dead CSS**: `.paint-upsell*`, `.paint-card*`, `.panel__step-num`, `.aides-card*`, `.parcours-unifie__stats*`.
- **Hidden `.scrollnav-side` on `.page-bardage`** at all viewports — its 148px width was overlapping the configurator panel right edge, cutting off body copy.

### Bardage configurator — BENTO MOSAIC at desktop ≥1101px
- `.configurator__body` becomes a 12-col grid with `grid-template-areas`. Tile layout:
  - Stage (cols 1-7, rows 1-2) — large maison preview
  - Profile filter (cols 8-12, row 1)
  - Color details (cols 8-12, row 2)
  - Swatches full width row 3 — single 7-col row of finishes
  - Paint card full width row 4 (only when Brut, else collapses)
  - CTA full width row 5 (centered, 320px min)
  - Footnote full width row 6 (centered)
- **`.panel` and `.mobile-sheet-body` use `display: contents`** at desktop so their grandchildren bubble up as direct grid items. Each tile gets its own white card style (background, padding, radius, shadow).
- Stage drops `position: sticky` and `aspect-ratio` — stretches to fill grid area, image uses `object-fit: cover`.
- **Mobile bottom-sheet pattern at ≤1100px is unchanged** — bento is desktop-only override.
- Eliminates the previous 700-1000px of empty cream space on the left below the sticky preview.

### Commits (session 12)
- `be35ac1` Homepage UI polish + vmc-double-flux grid fix; unify eyebrow site-wide
- `e7f83d3` Replace fixed-position aides floater with inline callout pointing to step 02
- `390f75a` Bardage: redesign Brut paint block, drop standalone upsell band, hide ScrollNav
- `dfe4be3` Bardage configurator: bento mosaic layout at desktop ≥1101px

---

## ✅ What's done — session 11 (2026-04-29 late)

### Cross-linking — `<RelatedSolutions />` component
- New `src/components/RelatedSolutions.tsx` with hand-curated catalog (9 entries).
- "Pages en lien" section inserted before the contact section on all 8 destination pages (6 solutions + 2 subventions). Visual: green-pale band, 3 white cards with hover gradient strip, Solution (green) vs Subvention (orange) tag colour. Pairings:
  - toiture → extracteur, combles, prime-cee
  - combles → toiture, destrat, ma-prime-renov
  - bardage → toiture, combles, ma-prime-renov
  - destrat → extracteur, toiture, prime-cee
  - extracteur → toiture, destrat, prime-cee
  - vmc → extracteur, destrat, prime-cee
  - prime-cee → toiture, combles, ma-prime-renov
  - ma-prime-renov → combles, bardage, prime-cee

### Dead CSS cleanup — `globals.css` 6,242 → 4,608 lines (−26 %)
- Stripped 3 abandoned homepage iterations: `.page-home-v4`, `v5`, `v6` (active homepage uses `v3`, untouched).
- Bundled feature blocks gone with them: `bento`, `scrolly`, `closer`, `hero-glass`, `ed__*`, `rail__*`, `v6*`. Lines 3517-5150 deleted.
- Build clean, every page visually intact (regression-tested home + bardage).

### Security — uuid CVE chain cleared (5 vulns → 2)
- Pinned `svix@^1.92.2` via `package.json` `overrides`. Svix 1.92.2 dropped its `uuid` dependency entirely (only `standardwebhooks` remains), so the CVE-chain (uuid → svix → resend) is broken without touching resend itself (still on 6.12.2).
- Did **not** run `npm audit fix --force` because the suggested fixes regressed both `resend` (6.12.2 → 6.1.3) and `next` (16 → 9.3.3, 7-major-version downgrade).
- Remaining 2 vulns are postcss inside Next.js — upstream-only fix; wait for Next 16.x bump.

### Branded OG image + 404 page
- `src/app/opengraph-image.tsx` — code-defined 1200×630 OG via `next/og` `ImageResponse`. Dark green gradient + ECOPRORENOVE wordmark + tagline + 4 trust pills (Prime CEE / MaPrimeRénov' / Pose RGE / Interlocuteur unique). Auto-applies to every route by default.
- `src/app/not-found.tsx` — branded 404 with serif-italic headline ("Cette page s'est échappée par la toiture.") and a helpful link grid covering every Solution + Subvention page.

### Setup intake teardown doc — corrected stale paragraph
- `docs/launch/setup-teardown.md` now reflects that Resend is **wired and live** (sends to `rahvi.bichon@gmail.com`, requires `RESEND_API_KEY` env var on Coolify). Previously claimed Resend was "planned but not wired".

---

## ✅ What's done — session 10 (2026-04-29)

### Solution-template pattern applied across all 8 destination pages
- Reusable `.solution-template` CSS scope: T1 hero (eyebrow / anchor caps / serif italic kicker), `.hero__stat-line` pill, 3 floating bubbles, bandeau strip, smooth `scroll-margin-top` on every `<section[id]>`.
- Reusable `.hero__img--placeholder` (dashed border + striped gray + "PHOTO À VENIR") for pages awaiting photos.
- Pages templated: `/isolation-toiture-rampants` (real photo), `/isolation-combles`, `/destratificateur-air`, `/vmc-double-flux`, `/accompagnement-strategique`, `/prime-cee`, `/ma-prime-renov` (all placeholder), `/extracteur-air` + `/bardage` (kept their signature visuals — Tornado product / configurator preview).
- `<ScrollNav />` made prop-driven (`sections={[{id, label}]}`), vertical floating sidebar (right edge, hidden &lt;1100px), IntersectionObserver scroll-spy.

### Bardage configurator — native-app feel on mobile (≤768px) only
- New `src/app/bardage/bardage-mobile.css` with bottom-sheet pattern (collapsed 30vh / expanded 70vh, tap-to-toggle, IntersectionObserver scoped strictly to `#configurateur`, body scroll lock when expanded, safe-area-inset-bottom respected).
- Desktop layout untouched.

### Image performance — 28 MB → 2.2 MB (−92%)
- 7 bardage hero JPEGs converted to WebP at q=80, max 1600px width — under 320 KB each (was 3.3-3.6 MB).
- 7 bardage swatches converted to WebP at q=82, max 600px — under 30 KB each.
- 2 Tornado PNGs (1.2 MB + 730 KB) converted to WebP with alpha at q=82 — under 80 KB each.
- Reusable script: `scripts/convert-images.mjs` (sharp-based, idempotent).

### SEO / a11y / launch polish
- `BreadcrumbJsonLd` added to `/agricole`, `/tertiaire`, `/residentiel`, `/qui-sommes-nous` (was missing).
- Meta descriptions trimmed to ≤160 chars on agricole + tertiaire; `/residentiel` title shortened 71 → 62 chars.
- `robots.ts` now explicitly disallows `/setup/`.
- Fixed undefined `--gray-dark` CSS variable (was referenced but never declared).
- Hero floating bubbles hidden below 480px (were overlapping content on small phones).
- New `src/app/opengraph-image.tsx` — code-defined branded OG (1200×630, applies to every route by default).
- New `src/app/not-found.tsx` — branded 404 with helpful link grid (Solutions + Subvention).
- Setup intake teardown doc corrected — Resend is wired and live.

---

## ✅ What's done — session 9 (2026-04-28)

### Homepage
- `cta-final` mailto replaced by inline `<ContactForm source="home">` (Prénom, Nom, Email, Tel, Secteur, Message + RGPD). Phone CTA kept as secondary.
- `SolutionsTabs`: per-card sector badges hidden in single-sector tabs. Financement card pinned in a separate "Pour tous les secteurs" row below the grid (hover-arrow affordance).
- "Dispositif CEE + MaPrimeRénov'" section renamed to **Notre processus** with subtitle "De la première conversation à la livraison de votre projet". Single CTA replaced by 2-button `aides-card` (Prime CEE / MaPrimeRénov').

### Menu — Financement CEE → Subvention (2 children)
- Navbar mégamenu: new `Subvention` dropdown with Prime CEE + MaPrimeRénov'. Single link replaced by hover/click panel (380px width, reuses existing mégamenu styles).
- Mobile drawer: dedicated "Subvention" group with both links.
- Footer: ECOPRORENOVE col split — Subvention sub-group (Prime CEE + MaPrimeRénov') above Qui sommes-nous + Contact.
- VMC Double flux + Courtage en énergie were `aria-disabled`; now active links throughout (mégamenu, drawer, footer, homepage SolutionsTabs).

### Pages — new + restructured
- `/financement-cee` → **`/prime-cee`** (page renamed + content focused on CEE, breadcrumb / canonical / source label updated). 301 redirect kept in `next.config.ts` for SEO.
- `/ma-prime-renov` — NEW. Built from Anah guide février 2026 (`uploaded/202602_guide-aides-financieres_WEB.pdf`). Sections: 3 parcours (geste / ampleur / copropriété), conditions d'éligibilité, travaux finançables, **section dédiée Prêt à taux 0 + Aides locales** (per client request), méthode 6 étapes, FAQ, contact form.
- `/vmc-double-flux` — NEW. Built from supplied HTML mockup (`uploaded/vmc.html`) + Thaleos THACTA11901 datasheet. Hero "Déshumidifiez votre serre", 3-card problem grid, stats (4000 m³/h / 1000 m² / 17 ans / 57 dB), full spec table, CEE AGR-TH-119 split (price card + critères), FAQ, contact form. **Translated into native CSS** — no Tailwind kept.

### Service-page polish
- `/isolation-toiture-rampants`: fixed broken `#modes` anchor → `#airflex`. Hero title in CAPS (scoped `.page-toiture .hero__title { text-transform: uppercase; }`). Polished Résultats concrets cards: gradient bg, accent-strip on hover, refined value/disclaimer hierarchy.
- `/bardage`: removed "Recevoir échantillon physique" button. Bottom mailto replaced with inline form pre-selecting current finition + profil (controlled select that re-mounts via `key` when configurator state changes). Configurator CTA now scrolls to the form.
- `/accompagnement-strategique`: card 02 (courtage) now has `id="courtage"` with scroll-margin-top 96px. Menu link points to `/accompagnement-strategique#courtage` rather than a separate page.

### Sector pages — `/tertiaire`, `/residentiel`, `/agricole`
- All three refactored onto shared `.page-secteur` class.
- Two main sections mirror each other: **operations** on `secteur-section--alt` (green-pale bg), **solutions** on white. Same `.secteur-card` system, with arrow affordance on `.secteur-card--link`.
- Bottom CTA replaced with inline ContactForm — sector-specific fields (statut, type bâtiment, surface). Phone CTA kept as secondary below.
- Hero "Étudier mon…" CTA now scrolls to `#contact` form (was mailto).
- `/agricole` solutions list now includes the new VMC double flux card.

### Pipeline / infrastructure
- `contact-action.ts` SOURCE_LABEL updated for: home, tertiaire, residentiel, agricole, prime-cee, ma-prime-renov, vmc-double-flux. FIELD_LABEL: secteur, finition, profil added.
- Sitemap: `/financement-cee` removed; `/prime-cee`, `/ma-prime-renov`, `/vmc-double-flux` added.
- 22 routes total (was 14 content + metadata, now 17 content + metadata).
- Resend key rotated + set in Coolify (per session start).

---

## ⚠️ Blockers / must do before public launch

### 0. **5 of 7 bardage maison images need replacement** (waiting on user)
All 7 `public/images/bardage/maison-*.webp` files are similar size (~225-232 KB) but **only afromasia and beech have crisp wood texture**. The other 5 are softer/lower fidelity from the source AI generation:
- `maison-brut-emboitement.webp`
- `maison-brut-superpose.webp`
- `maison-light-yellow.webp`
- `maison-modern-grey.webp`
- `maison-wallnut.webp`

Source JPEGs only exist for afromasia/beech in `public/uploads/`. When user provides new sources: drop into `public/uploads/`, run `node scripts/convert-images.mjs` (sharp-based, idempotent).

### 0b. Trust marquee logos (waiting on user)
The homepage trust band (`.trust-marquee` between `.enga-faq` and `.cta-final`) currently shows 4 text certs ("RGE Qualibat", "RGE Qualibois", "Obligé CEE", "MaPrimeRénov'") doubled to fake a loop. User will send actual logo SVGs/images.

### 1. Hero photos — 6 pages still on the gray "PHOTO À VENIR" placeholder
All use the new `.hero__img--placeholder` class (search for that to locate). Drop the file in `public/images/{page-slug}.webp`, then swap the `<div className="hero__img hero__img--placeholder" />` for an `<Image src="..." />`:
- `/accompagnement-strategique`
- `/destratificateur-air`
- `/prime-cee`
- `/isolation-combles`
- `/ma-prime-renov` (residential rénovation photo)
- `/vmc-double-flux` (Thaleos unit / serre photo)

✅ Done 2026-04-29: `/isolation-toiture-rampants` (real photo, Airflex install in agricultural building).

### 2. Test the 8 form sources end-to-end on staging
After Coolify rebuilds, submit one form on each: `/`, `/prime-cee`, `/ma-prime-renov`, `/vmc-double-flux`, `/bardage`, `/tertiaire`, `/residentiel`, `/agricole`, plus the original 5 service pages already tested. Confirm emails land in `rahvi.bichon@gmail.com` with the right SOURCE_LABEL.

---

## 🟡 Should fix — info still missing from client

Currently `/mentions-legales` shows "—" for these:

- **RCS (ville + n°)**
- **N° certificat RGE + domaines + date d'expiration** — only "Qualibat" filled
- **Médiateur de la consommation** — required for B2C / résidentiel
- **Zone géographique de l'assurance** — APRIL contract scope

---

## 🟢 Nice to have / pre-existing

- `loading.tsx` per route for streamed-segment skeletons
- Dedupe the 25+ inline check-icon SVGs into a `<CheckIcon />` component
- Mobile drawer focus trap (Tab currently leaves the drawer; Esc closes correctly)
- iOS body scroll lock — switch from `document.body.style.overflow="hidden"` to `position:fixed; top:-scrollY` to avoid Safari layout glitches
- Run PageSpeed Insights manually in browser (Google API quota exhausted in session 11) — image perf gains from session 10 should now show on `/bardage` LCP
- Postcss CVE in Next.js — wait for Next 16.x to bump postcss upstream; rerun `npm audit` periodically
- ~~Custom `app/not-found.tsx`~~ ✅ done 2026-04-29
- ~~`opengraph-image.tsx` for branded social shares~~ ✅ done 2026-04-29
- ~~Internal "Related solutions" cross-linking~~ ✅ done 2026-04-29 (session 11)
- ~~Orphan CSS cleanup~~ ✅ done 2026-04-29 (session 11) — 1634 lines killed
- ~~uuid CVE chain~~ ✅ done 2026-04-29 (session 11) — svix override

---

## 🧱 Architecture quick-reference

```
ecoprorenove-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Inter + Montserrat fonts, ViewTransition wrap, Navbar/Footer/MobileCtaBar/BackToTop/ScrollEffects
│   │   ├── globals.css             # ALL CSS (no Tailwind components — all hand-written, ~5800 lines, scoped via .page-{name})
│   │   ├── page.tsx                # V3 homepage
│   │   ├── sitemap.ts              # add new routes here
│   │   ├── robots.ts
│   │   ├── setup/[token]/page.tsx  # gated by EXPECTED_TOKEN constant
│   │   ├── prime-cee/page.tsx      # ex /financement-cee — CEE focus
│   │   ├── ma-prime-renov/page.tsx # MPR — 3 parcours + Éco-PTZ + aides locales
│   │   ├── vmc-double-flux/page.tsx # Thaleos AGR-TH-119
│   │   └── {existing service routes + sector routes}/page.tsx
│   ├── components/
│   │   ├── Navbar.tsx              # client: Secteurs / Solutions / Subvention mégamenus + drawer
│   │   ├── Footer.tsx              # 4-col grid, Subvention sub-group inserted in ECOPRORENOVE col
│   │   ├── SolutionsTabs.tsx       # client: tab filter + transverse "Pour tous les secteurs" row
│   │   ├── Faq.tsx, HeroAnimations.tsx, ScrollEffects.tsx, BackToTop.tsx, MobileCtaBar.tsx, BeforeAfterSlider.tsx, CountUp.tsx, Logo.tsx, JsonLd.tsx
│   │   ├── contact/ContactForm.tsx # client: useActionState wrapper used by 11 form sources now
│   │   └── setup/IntakeForm.tsx
│   └── lib/
│       └── contact-action.ts       # server action shared by all forms (sources tracked)
├── public/                         # uploads/, images/, assets/
├── next.config.ts                  # security headers, /financement-cee → /prime-cee 301 redirect, experimental.viewTransition
└── package.json                    # next 16.2.4, react 19, gsap, resend
```

---

## ⚠️ Known dev quirks (Next 16 + Turbopack)

- Turbopack strips `::view-transition-*` CSS in dev. Custom 240 ms crossfade only visible after `npm run build`. Dev gets default browser crossfade.
- Turbopack sometimes serves a stale CSS chunk after edits — a real content edit (insert+remove a comment) forces it to rebuild.
- ESLint `react/no-unescaped-entities` is on; use `&apos;` and `&amp;` inside JSX text.

---

## 🎯 Recommended next pick

If client provides:
- Hero photos for the 6 placeholder pages → trivial swap, ~10 min total
- Missing legal info (RCS / RGE cert / médiateur / assurance zone) → fill `/mentions-legales` strings (single file). May already be in the `/setup` intake submission Emmanuel sent — check `rahvi.bichon@gmail.com` for "[Intake ECOPRORENOVE]" email.

If pushing toward launch:
1. End-to-end form smoke test on staging (8 form sources)
2. PageSpeed Insights pass on `/`, `/bardage`, `/prime-cee`, `/vmc-double-flux` — image perf gains from session 10 should show in LCP
3. Broken-link check (especially internal anchors `#contact`, `#airflex`, `#courtage`)
4. ~~OG image check~~ ✅ done 2026-04-29 — auto-generated via `opengraph-image.tsx`

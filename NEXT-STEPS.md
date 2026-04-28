# EcoProRenove — Next Steps

Snapshot from end of session 9, **2026-04-28**. Resume from this doc.

GitHub: `https://github.com/RahviB/Ecoprorenove_frontend.git` (branch `main`)
Staging: `https://stag.ecoprorenove.fr` — Coolify redeploys on push.
Latest commits: `b06a34d` "Polish sector pages — shared layout, mirrored sections, contact form" / `4a14cde` "Restructure subvention menu, ship /ma-prime-renov + /vmc-double-flux".

---

## 🚀 Resume

```bash
cd C:\Users\rahvi\projects\EcoProrenove\ecoprorenove-web
npm run dev      # http://localhost:3001
npm run build    # 22 routes, must stay clean
```

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

### 1. Hero image dashed placeholders (waiting on client photos)
- `/accompagnement-strategique` (hero + project-mgmt section)
- `/destratificateur-air`
- `/financement-cee` *(now `/prime-cee` — same placeholder)*
- ~~`/isolation-toiture-rampants`~~ ✅ done 2026-04-29 — real photo + T1 hero (eyebrow / anchor / serif italic), floating bubbles, bandeau
- `/isolation-combles`
- `/ma-prime-renov` *(new — needs a residential renovation photo)*
- `/vmc-double-flux` *(new — needs a Thaleos unit / serre photo)*

Search for `.hero__img-placeholder` to find each.

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
- Custom `app/not-found.tsx` (currently uses Next.js default 404)
- `opengraph-image.tsx` for branded social shares

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
- Hero photos for the 7 placeholder pages → trivial swap, ~10 min total
- Missing legal info (RCS / RGE cert / médiateur / assurance zone) → fill `/mentions-legales` strings (single file)

If pushing toward launch:
1. End-to-end form smoke test on staging (8 form sources)
2. Lighthouse pass on `/`, `/prime-cee`, `/ma-prime-renov`, `/vmc-double-flux`
3. Broken-link check (especially internal anchors `#contact`, `#airflex`, `#courtage`)
4. OG image check

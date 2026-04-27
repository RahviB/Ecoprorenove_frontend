# EcoProRenove — Next Steps

Snapshot from session ending **2026-04-27** *(updated end of session 6 — extracteur + accompagnement + GitHub push)*. Pick up here in the next session.

---

## 🚀 Deployment status (2026-04-27)

- GitHub remote: `https://github.com/RahviB/Ecoprorenove_frontend.git` (branch `main`)
- Hosting: **Coolify self-hosted** (not Vercel)
- Staging URL: `https://stag.ecoprorenove.fr`
- Production URL (eventual): `https://ecoprorenove.fr`

**Site is NOT live yet** — Coolify steps below still pending. When picking up:

1. In Coolify's app config, set env var: `NEXT_PUBLIC_SITE_URL=https://stag.ecoprorenove.fr`
2. Confirm build command `npm run build`, start command `npm start`, port `3000`, Node ≥ 20
3. Trigger a build (`NEXT_PUBLIC_*` vars are baked at build time, so a restart alone won't pick up the env var)
4. Verify staging at `https://stag.ecoprorenove.fr` — sitemap.xml, robots.txt, JSON-LD all read from the env var
5. When prod domain is ready: swap env var to `https://ecoprorenove.fr`, rebuild

Code-side: no changes needed. The same build serves both staging and prod once the env var flips.

---

## ✅ Done so far

### Foundation (session 1)
- Next.js 16.2.4 (App Router) + React 19 + TypeScript + Tailwind v4 scaffolded at `ecoprorenove-web/`
- All 6 design pages ported from the Claude Design HTML handoff:
  - `/` (Accueil), `/bardage`, `/isolation-combles`, `/isolation-toiture-rampants`, `/destratificateur-air`, `/financement-cee`
- Shared `Navbar` (mégamenus + mobile drawer), `Footer`, `Faq` (accordion), `ScrollEffects` (fade-in observer + nav shadow)
- Inter (all pages) + Fraunces (only `/bardage`) via `next/font/google`
- Design's CSS ported to `globals.css` with BEM scoping under `.page-bardage`, `.page-service`, `.page-destrat`, `.page-financement-cee` to avoid `.hero` / `.sectors` collisions
- Real assets in `public/` (chantier-duparc + bardage swatches/maisons)

### A11y / Perf / SEO / Security pass (session 2, part 1)
- `<main id="main">` landmark + skip link (`Aller au contenu`)
- `:focus-visible` orange ring on all interactives
- `prefers-reduced-motion` honoured globally + in `ScrollEffects`
- `@media (hover: none)` guard on hover transforms (no stuck states on touch)
- `aria-hidden="true"` on **all 167 decorative SVGs**
- 36 placeholder `<a href="#">` and 6 `tel:+33XXXXXXXXX` → `aria-disabled="true"` + `tabIndex={-1}` + `pointer-events: none`
- Security headers via `next.config.ts`: X-Frame-Options DENY, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, Cross-Origin-Opener-Policy, Strict-Transport-Security; `poweredByHeader: false`
- 16 photos migrated `<img>` → `next/image` (Bardage hero preview + 7 stage maisons + 7 swatches + 2 toiture chantier shots) with AVIF/WebP via `images.formats`
- Per-page `metadata` (title/description/og/canonical) for all 6 routes
- `metadataBase` configurable via `NEXT_PUBLIC_SITE_URL` env (defaults to `https://ecoprorenove.fr`)
- App Router `sitemap.ts` + `robots.ts` → `/sitemap.xml` + `/robots.txt` at build
- JSON-LD: `Organization` + `WebSite` on home, `Service` + `BreadcrumbList` on each service page
- `/bardage` split into server `page.tsx` (metadata + Fraunces font + JSON-LD) + `BardageClient.tsx` (UI)

### Animations / micro-interactions (session 2, part 2 — Tier 1)
- **#1** `<CountUp>` client component (IntersectionObserver-driven, easeOutCubic, French thin-space, reduced-motion aware) wired into:
  - Homepage `numbers__grid` (4 stats), `hero__stat-card`, `hero__badge-top`, `cee-band__stats` (2 stats)
  - Bardage `hero__highlights` (50 ans+, 7, 75 €/m²)
- **#2** `<BeforeAfterSlider>` component (pointer + touch + keyboard `<button role="slider">`) replacing the static side-by-side on `/isolation-toiture-rampants` chantier ZR Duparc
- **#3** Bardage configurator swap shimmer — loader badge briefly turns green and reads "Application…" for 420 ms on every finish change
- **#5** CTA arrow nudge (translateX 4px) on hover — applied to all `.btn` icons via `globals.css`
- **#7** `scroll-margin-top: 88px` on every section anchor so in-page jumps don't land behind the sticky navbar

Build status: `npm run build` clean, all 6 routes prerender static, TS passes.

### Polish + UX fixes (session 3 — Tier 1 audit pass)
- **FAQ multi-open** — opening one answer no longer closes another. `Faq.tsx` switched from `useState<number | null>` to `useState<Set<number>>`.
- **Back-to-top FAB** — new `BackToTop.tsx` client component, fixed bottom-right, fades in past 600 px scroll, smooth scroll (instant under reduced-motion). Mounted in `layout.tsx`.
- **Hero placeholder removed** — dashed "Visuel principal" box swapped for a polished inline SVG illustration: stylized brick house with bardage cladding, green pitched roof, sun + heat rays in brand orange, brand mark, leaf accent. Renders crisp at any DPR, no asset dependency.
- **"Emplacement disponible" solution card removed** from the homepage Solutions grid (and CSS rule deleted).
- **Partner section** — dashed-grey logo placeholders replaced with polished pill chips ("RGE Qualibat", "RGE Qualibois", "Obligé CEE", "MaPrimeRénov'") on green-pale background with brand-green dot prefix. Outer dashed container removed. "+ logos à venir" + provisional note dropped. Section now reads as intentional certification strip.

### Animations / micro-interactions (session 3 — Tier 2)
- **#6** Mégamenu reveal stagger — `.mm-link` and `.mm-sector` cascade in 30 ms apart on `.nav-item.open`. Pure CSS in `globals.css`, reduced-motion aware via the existing global guard.
- **#8** Page transitions via Next 16's `<ViewTransition>` — `experimental.viewTransition: true` in `next.config.ts`, `<ViewTransition>` from React wraps `<main>` in `layout.tsx`, gentle 240 ms crossfade in `globals.css` (`::view-transition-old(root)` / `-new(root)`). Added `data-scroll-behavior="smooth"` to `<html>` so smooth scroll doesn't fight transitions. React canary types pulled via root-level `react-canary.d.ts`. *Dev-mode caveat:* Turbopack's CSS parser strips `::view-transition-*` rules in dev (rules pass through to `npm run build` cleanly), so the custom 240 ms tuning only shows in production — dev still gets the browser's default crossfade.
- **#9** Hero gradient slow drift — `.hero--drift::before/::after` get `hero-drift-1/2` keyframes (22 s & 26 s `ease-in-out infinite`). Modifier class scoped to homepage hero only (`page.tsx`) so bardage/service heroes are untouched.

### Cinematic hero (session 5)
- **GSAP installed** (`gsap@^3.15`) — core + ScrollTrigger only, ~55 KB gzipped
- **Real chantier photo** — homepage hero illustration (the inline SVG of a stylized house) replaced with `/uploads/maison-modern-grey.jpeg`. Wrapped in `.hero__photo-frame` (overflow-hidden) + `.hero__photo-zoom` (animated). Added a subtle dark-bottom gradient overlay via `::after` so the floating stat card has visual landing.
- **Ken-burns** — pure CSS `@keyframes ken-burns` on `.hero__photo-zoom` (18s `ease-in-out infinite alternate`, scale 1 → 1.07 + slight `translate(-2%, -1.5%)`). No JS. Reduced-motion guard.
- **Word-by-word H1 reveal** — pure CSS, runs on initial paint. New `<W d={i}>` helper inline in `page.tsx` wraps each H1 word in `.word-mask > .word-rev`. Each word has inline `--w-d: ${i * 0.04}s` for stagger. CSS animation slides each word from `translateY(110%) opacity:0` to settled. Reduced-motion bypasses entirely. No JS dependency = no flash.
- **Scroll-scrubbed parallax** via `HeroAnimations.tsx` (client component, mounts in `page.tsx`). Uses `gsap.context` + ScrollTrigger with `scrub: 0.6`. Trigger range is the hero itself (`top top` → `bottom top`). Layers: `.hero__content` -10%, `.hero__photo-frame` -5%, `.hero__stat-card` -55%, `.hero__badge-top` -45%. Foreground elements have higher % so the per-element-height math gives them more pixel motion than the larger background, producing visible depth.
- **Bug found and fixed:** `.fade-in` class on `.hero__content` and `.hero__visual` had a CSS `transition: transform .65s ease` that fought GSAP's scrub. Hero is above-the-fold anyway — fade-in is for scroll-into-view elements. Removed both. Parallax now drives transform unfought.
- **Reduced motion** — `HeroAnimations` short-circuits if `prefers-reduced-motion: reduce`. CSS keyframes also gated. All three effects bypass cleanly.
- **Build status:** `npm run build` clean, all 11 routes prerender static, TS passes. Verified live in dev at 1280×900: word reveal completes, ken-burns drifts (scale 1.0001 → 1.0017 over 2.5s), parallax differential reads (-32px content vs -9px photo at half-scroll).

### Two new pages (session 6 — 2026-04-27)
- **`/extracteur-air`** built from client handoff. 7 sections: hero with Tornado Windmaster packshot (animated halo + dashed orbital ring + pulsing badge), product-show (real chantier photo via `next/image` + 5-spec dl), benefits 4-card grid, dark combo section cross-selling Airflex 30 (links to `/isolation-toiture-rampants`), 3-sector applications (Tertiaire/Industrie/Agricole), shared `<Faq>` (5 Q's), green CTA-final. New CSS scoped under `.page-extracteur` in `globals.css` (~210 lines): hero__product, product-show, benefits 4-col override, combo dark band, applications grid. Image assets: `public/images/extracteur/tornado-product-transparent.png` + `tornado-toiture-installation.png`.
- **`/accompagnement-strategique`** built from client handoff. 11 sections: hero (dashed visual placeholder — client to provide 800×600), why-renovate 6-card, cee-mechanism 3-pillar (Diagnostic / Courtage / Financement), work-types 5-item + indépendance card, dark method (7 steps incl. full-width "Suivi dans la durée"), project-mgmt (dashed 600×600 placeholder + 5 pm-items), why-us 8-card, value-banner, FAQ (7 Q's), green CTA-final, contact-form-section. Reuses all existing `.page-financement-cee` global rules — broadened `.method` dark theme to apply to `.page-accompagnement` as well, plus added `.method__step--full` for the wide row.
- **Mégamenu wired** — desktop mégamenu's "Solutions" panel + "Conseil & pilotage" panel now link real routes for both new pages. Mobile drawer same. Footer's solutions list updated. `/courtage-energie` + `/vmc-double-flux` remain `aria-disabled` stubs (client to send those designs later).
- **Sitemap updated** — `extracteur-air` + `accompagnement-strategique` added to `sitemap.ts`.
- Build status: `npm run build` clean, all 13 routes prerender static, TS passes. Verified live in dev (port 3001) at 1280×900.

### Tier 2 polish pass (session 4)
- **Hero chips tightened** — `.hero__badges .tag--white` scoped override: smaller padding (4 × 11 px), finer letter-spacing (.14em), softer background (rgba .08), backdrop-blur. Reads as B2B-refined instead of marketing-puffy.
- **"Ils nous font confiance"** — italic intent line added above the partners certifications strip on the homepage. New `.partners__intent` rule in `globals.css`.
- **Micro-divider above FAQ** — new `.micro-divider` element (90 px hairline gradient + centered green dot) between the why-home section and the FAQ header, scoped via class so reusable.
- **Sticky mobile CTA bar** — new `MobileCtaBar.tsx` client component mounted globally in `layout.tsx`. Fixed bottom, only shows ≤768 px viewport, fades in past 600 px scroll, contains "Étudier mon projet" pill + circular phone stub (`aria-disabled`). Backdrop-blurred, lifts the back-to-top FAB above it via `~` selector so they don't collide. Safe-area-inset padding for iOS.
- **Hero phone CTA stub** — third action in `.hero__actions`: subtle text link "ou nous appeler" with phone icon, `aria-disabled` until the real number lands. Styled as `.hero__phone-link`.

Build status: `npm run build` clean, all 11 routes prerender static, TS passes. Verified live in dev at desktop 1280 × 900 and mobile 390 × 800.

---

## 📋 What's left

### Missing pages (mégamenu currently links them to `aria-disabled` placeholders)
1. `/tertiaire` — sector landing (Tertiaire)
2. `/residentiel` — sector landing (Résidentiel)
3. `/agricole` — sector landing (Agricole)
4. `/qui-sommes-nous` — about page
5. `/vmc-double-flux` — solution
6. `/courtage-energie` — solution (will come later — client said separate page despite content overlapping `/accompagnement-strategique#perimetre`)

When these are built, drop `aria-disabled="true" tabIndex={-1}` on the corresponding nav/footer links and replace `href="#"` with the real route.

### Inner-page hero photos still missing
- `/accompagnement-strategique` hero visual is a dashed 800×600 placeholder. Client to provide.
- `/accompagnement-strategique` project-mgmt section also has a 600×600 dashed placeholder.
- Same gaps still on `/isolation-combles`, `/destratificateur-air`, `/financement-cee` (pre-existing).

### Backend / forms (deferred from session 1)
- **Supabase project** — old one was deleted by the user. Recreate, run migrations from `EcoProRenove-admin/supabase/migrations/`, paste new keys into `EcoProRenove-admin/.env`.
- **Contact forms** are styled and accessible but `action="#"` (non-functional). Wire to either:
  - Supabase server action (preferred — same project as admin)
  - Or a third-party (Formspree / Resend) until Supabase is back
- Once a backend exists, also wire the Bardage configurator's "Recevoir un échantillon physique" button.

### Real data swaps
- Replace placeholder phone (currently `aria-disabled` buttons reading "Numéro à venir") with the real one. Sites to update: every page's `cta-final` + `Footer` + every `contact-section`/`contact-form-section` + the new hero phone link + the mobile sticky CTA bar.
- Replace `Visuel principal` dashed placeholders in **inner-page** heroes (`isolation-combles`, `destratificateur-air`, `financement-cee`) with real chantier photos. *Homepage hero is now `maison-modern-grey.jpeg` with cinematic treatment (session 5). Could swap for any other `maison-*.jpeg` from `/public/uploads/` — easy.*
- When real partner logos arrive (RGE Qualibat / RGE Qualibois / Obligé CEE / MaPrimeRénov'), swap the homepage `.partner-cert` chips for an `<Image>`-based logo strip.

### Production config
- Drop a `.env.production` with `NEXT_PUBLIC_SITE_URL=https://your-real-domain.fr` once domain is finalised. (`metadataBase`, sitemap, robots, JSON-LD all read from this.)
- Consider an `opengraph-image.tsx` (or static `/og.png`) so social shares get a brand image.
- Consider a custom `app/not-found.tsx` (currently uses Next.js default 404).

### Lower priority / nice-to-haves
- `loading.tsx` per route for skeletons during streamed segments
- Dedupe the 25+ inline check-icon SVGs into a tiny `<CheckIcon />` component
- Wave SVG section dividers between major colored bands (Tier 3 atmosphere — was anti-recommended for B2B but optional)
- Mobile drawer focus trap (Tab currently leaves the drawer; Esc closes correctly)
- iOS body scroll lock — switch from `document.body.style.overflow="hidden"` to `position:fixed; top:-scrollY` to avoid Safari layout glitches when drawer is open

---

## 📁 Project layout (reminder)

```
EcoProrenove/
├── EcoProRenove-admin/        # Lovable+Supabase admin (Vite+React, Supabase project DELETED — needs recreation)
├── ecoprorenove-web/          # Next.js 16 frontend (this folder)
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx
│   │   │   ├── globals.css
│   │   │   ├── page.tsx                          # Accueil
│   │   │   ├── sitemap.ts
│   │   │   ├── robots.ts
│   │   │   ├── bardage/
│   │   │   │   ├── page.tsx                      # server: metadata + Fraunces + JSON-LD
│   │   │   │   └── BardageClient.tsx             # client: configurator UI
│   │   │   ├── isolation-combles/page.tsx
│   │   │   ├── isolation-toiture-rampants/page.tsx
│   │   │   ├── destratificateur-air/page.tsx
│   │   │   └── financement-cee/page.tsx
│   │   └── components/
│   │       ├── Navbar.tsx           # client: mégamenus + drawer
│   │       ├── Footer.tsx
│   │       ├── Faq.tsx              # client: accordion
│   │       ├── ScrollEffects.tsx    # client: fade-in + nav shadow
│   │       ├── CountUp.tsx          # client: animated stats
│   │       ├── BeforeAfterSlider.tsx # client: drag divider
│   │       ├── BackToTop.tsx        # client: scroll-to-top FAB (session 3)
│   │       └── JsonLd.tsx           # server: structured data
│   ├── public/
│   │   ├── assets/                  # chantier-duparc-avant.jpeg, chantier-duparc-apres.jpg
│   │   ├── images/bardage/          # 7 maison + 7 swatch jpegs
│   │   └── uploads/                 # legacy from handoff (could be cleaned)
│   ├── next.config.ts               # security headers + image formats + experimental.viewTransition
│   ├── react-canary.d.ts            # `/// <reference types="react/canary" />` for ViewTransition typing
│   └── package.json
└── design-handoff/                  # Original Claude Design HTML (reference)
```

---

## 🚀 To resume

```bash
cd C:\Users\rahvi\projects\EcoProrenove\ecoprorenove-web
npm run dev
# open http://localhost:3000
```

Open this `NEXT-STEPS.md` to pick up — it lists everything still on the table.

### 🎯 Recommended next pick (proposed end of session 4)

Tier 2 polish landed in session 4. User said they'd handle Resend setup themselves. Remaining ranked options:

1. **Sector landings (~5h)** — `/tertiaire`, `/residentiel`, `/agricole` on a shared template. Biggest visible gap remaining in the mégamenu (3 of 8 missing pages knocked out at once).
2. **About page (`/qui-sommes-nous`)** — single page, lower complexity than sectors. Fills the "Qui sommes-nous ?" mégamenu link currently stubbed.
3. **Wire contact forms to Resend** — once user finishes Resend setup, swap `action="#"` to a server action and replace the disabled phone CTAs with the real number.
4. **Remaining solution pages** — `/extracteur-air`, `/vmc-double-flux`, `/courtage-energie`, `/accompagnement-strategique`. Lower priority than sectors since each is a tighter single-product page.

### ⚠️ Known dev-server quirks (Next 16 + Turbopack)

- Turbopack **strips `::view-transition-*` CSS in dev** but keeps it in `npm run build`. So Tier 2 #8's custom 240 ms tuning is invisible in dev (browser-default crossfade still plays). Confirmed working in `.next/static/chunks` on prod build.
- Turbopack sometimes serves a **stale CSS chunk** even after `globals.css` edits — `touch` doesn't always invalidate. A real content edit (insert+remove a dummy comment) forces it to rebuild. Symptom: new CSS rules don't appear in `document.styleSheets` after a hard reload.

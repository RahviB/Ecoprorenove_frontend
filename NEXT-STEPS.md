# EcoProRenove — Next Steps

Snapshot from end of session 8, **2026-04-28**. Resume from this doc.

GitHub: `https://github.com/RahviB/Ecoprorenove_frontend.git` (branch `main`)
Staging: `https://stag.ecoprorenove.fr` — Coolify redeploys on push.
Latest commit: `419c192` "Drop Agricole tag from Destratificateur on homepage solutions filter".

---

## 🚀 Resume

```bash
cd C:\Users\rahvi\projects\EcoProrenove\ecoprorenove-web
npm run dev      # http://localhost:3001
npm run build    # 20 routes, must stay clean
```

---

## ✅ What's done (cumulative)

### Pages live (14 content routes + metadata)
- `/` — V3 homepage (hero + sector-tabbed solutions + parcours unifié + engagements/FAQ 2-col + trust marquee + cta-final + JSON-LD)
- `/bardage` — configurator + cta-final (mailto)
- `/isolation-combles`, `/isolation-toiture-rampants`, `/destratificateur-air`, `/extracteur-air`, `/financement-cee`, `/accompagnement-strategique` — each has a contact form wired to Resend
- `/qui-sommes-nous` — about page (positionnement + entreprise + 4 engagements + dual-office contact)
- `/tertiaire`, `/residentiel`, `/agricole` — sector landings (short, hero + operations + solutions block + cta-final)
- `/mentions-legales`, `/politique-de-confidentialite` — legal pages built from real client data
- `/setup/[token]` — internal client intake form (token: `e9p3mr7q2x4n8t5v`); Emmanuel already submitted

### Email pipeline
- Resend API integrated (`resend` SDK installed). Domain `ecoprorenove.fr` verified at apex (DKIM at `resend._domainkey`); MX + SPF on `send.ecoprorenove.fr`.
- Server actions: `src/app/setup/actions.ts` (intake) and `src/lib/contact-action.ts` (shared, used by 5 service-page forms).
- All emails: from `ECOPRORENOVE <contact@ecoprorenove.fr>`, to `rahvi.bichon@gmail.com`, replyTo set to submitter's email.
- Tested live end-to-end with Emmanuel's intake submission — DKIM/SPF/DMARC all PASS.
- ContactForm wrapper (`src/components/contact/ContactForm.tsx`) handles useActionState + success/error UI.

### Real client data wired
- Phones: `+33 6 19 79 83 91` (Métropole) + `+262 6 93 54 62 53` (Réunion) replace all `aria-disabled` "Numéro à venir" stubs site-wide
- Footer "Mentions légales" + "Politique de confidentialité" + "Qui sommes-nous ?" links enabled (no more aria-disabled)
- Navbar mégamenu + mobile drawer: Tertiaire / Résidentiel / Agricole / Qui sommes-nous all enabled
- Footer credit "Site édité par Influxe"

### Latest UX/visual fixes
- FAQ accordion bug squashed (was disappearing on click — React was wiping `visible` class added by ScrollEffects via `classList.add`)
- Homepage Solutions header centered (was wedged into left col of inherited 2-col grid)
- Disabled solution cards (VMC, Courtage) keep hover animation (added `pointer-events: auto` override + `preventDefault` on click)
- Trust marquee section added between engagements and cta-final on home (CSS-only scrolling pill row)
- Phone CTA hover animations restored
- Déstratificateur d'air removed from /agricole solutions list AND from Agricole filter tag on homepage SolutionsTabs (per client)

---

## ⚠️ Blockers / must do before public launch

### 1. Coolify env var
`RESEND_API_KEY` must be set in Coolify (Runtime). Without it, contact forms gracefully fall back with an error message + the phone number — but no email gets sent. Verify it's there and **trigger a redeploy** (env changes don't apply to running container).

### 2. Rotate the Resend API key
The original key (`re_aSEjzKmC_KzDDP1fbrAAs9HuorRdHYCnx`) was pasted in chat. Rotate it: Resend → API Keys → revoke, generate new, paste new value into Coolify env + local `.env.local`.

### 3. Two solution pages still missing
- `/vmc-double-flux`
- `/courtage-energie` — client said it'll come later as a separate design despite content overlap with `/accompagnement-strategique#perimetre`

These are still `aria-disabled` stubs in:
- `src/components/SolutionsTabs.tsx` (homepage cards with `disabled: true`)
- `src/components/Footer.tsx` (Solutions col)
- `src/components/Navbar.tsx` (mégamenu Solutions panel + mobile drawer)

When built, drop the `aria-disabled` flags and replace `href="#"` with the real route.

### 4. Hero image dashed placeholders (waiting on client photos)
- `/accompagnement-strategique` (hero + project-mgmt section)
- `/destratificateur-air`
- `/financement-cee`
- `/isolation-toiture-rampants`
- `/isolation-combles`

Just need photos to swap. Search for `.hero__img-placeholder` to find each.

---

## 🟡 Should fix — info still missing from client

Currently `/mentions-legales` shows "—" for these and `/politique-de-confidentialite` references some of them. Chase Emmanuel:

- **RCS (ville + n°)** — required for legal notices
- **N° certificat RGE + domaines + date d'expiration** — currently only "Qualibat" is filled
- **Médiateur de la consommation** — legally required for B2C / résidentiel; suggest CNPM Médiation Consommation
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
│   │   ├── globals.css             # ALL CSS (no Tailwind components — all hand-written, ~5300 lines, scoped via .page-{name})
│   │   ├── page.tsx                # V3 homepage
│   │   ├── sitemap.ts              # adds new routes here
│   │   ├── robots.ts
│   │   ├── setup/
│   │   │   ├── [token]/page.tsx    # gated by EXPECTED_TOKEN constant
│   │   │   └── actions.ts          # Resend send for intake
│   │   └── {12 content routes}/page.tsx
│   ├── components/
│   │   ├── Navbar.tsx              # client: mégamenu + drawer
│   │   ├── Footer.tsx
│   │   ├── Faq.tsx                 # client: accordion (no fade-in on items)
│   │   ├── SolutionsTabs.tsx       # client: tab filter on homepage solutions
│   │   ├── HeroAnimations.tsx      # client: GSAP scroll parallax (homepage hero only)
│   │   ├── ScrollEffects.tsx       # client: IntersectionObserver fade-in observer
│   │   ├── BackToTop.tsx, MobileCtaBar.tsx, BeforeAfterSlider.tsx, CountUp.tsx, Logo.tsx, JsonLd.tsx
│   │   ├── contact/ContactForm.tsx # client: useActionState wrapper, used by 5 service pages
│   │   └── setup/IntakeForm.tsx    # client: useActionState wrapper for /setup
│   └── lib/
│       └── contact-action.ts       # server action shared by 5 service-page forms
├── public/                         # uploads/, images/, assets/
├── next.config.ts                  # security headers, image formats, experimental.viewTransition
├── react-canary.d.ts               # ViewTransition typing
└── package.json                    # next 16.2.4, react 19, gsap, resend
```

**CSS scoping convention:** each page wraps in a top-level `<div className="page-{name}">` and CSS rules scope under that selector to avoid collisions on shared classnames like `.hero`, `.cta-final`, `.solution-card`.

**Class catalog** (use these in new pages, don't reinvent): `.container`, `.container--wide`, `.hero`, `.hero--drift`, `.hero__inner/__content/__title/__subtitle/__actions/__badges`, `.tag`, `.tag--white`, `.btn`, `.btn--primary/--secondary/--lg/--accent`, `.section-label`, `.section-label--white`, `.section-title`, `.section-title--white`, `.section-intro`, `.divider`, `.divider--white/--center`, `.cta-final`, `.cta-final__inner/__eyebrow/__title/__subtitle/__actions`, `.fade-in`, `.delay-1` through `.delay-6`, `.why-home-card`, `.solution-card`, `.partner-cert`, `.form-input/-label/-textarea/-select/-grid/-group/-group--full/-card/-consent/-submit`, `.form-alert`, `.form-success`.

---

## ⚠️ Known dev quirks (Next 16 + Turbopack)

- Turbopack strips `::view-transition-*` CSS in dev. Custom 240 ms crossfade only visible after `npm run build`. Dev gets default browser crossfade.
- Turbopack sometimes serves a stale CSS chunk after edits — a real content edit (insert+remove a comment) forces it to rebuild. Symptom: new CSS rules don't appear in `document.styleSheets`.
- ESLint `react/no-unescaped-entities` is on; use `&apos;` and `&amp;` inside JSX text.

---

## 🎯 Recommended next pick

If client provides:
- The 5 hero photos → trivial swap, ~5 min
- VMC and/or Courtage page designs → build pages following `/financement-cee` or `/accompagnement-strategique` patterns
- Missing legal info (RCS / RGE cert / médiateur) → fill `/mentions-legales` strings (single file)

If pushing toward launch:
1. Verify Coolify `RESEND_API_KEY` set + redeploy
2. Rotate the Resend key
3. Test all 5 service-page contact forms on staging
4. Run a final pass: lighthouse on home + 1 service page, broken-link check, OG image check

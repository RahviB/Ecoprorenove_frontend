# Design: `/courtage-energie` page

**Date:** 2026-05-02
**Status:** Approved — ready for implementation plan
**Reference inspiration:** https://alliancedesenergies.fr/negociez-votre-contrat/

## Context

Today, "Courtage en énergie" is a section anchor (`#courtage`) inside `/accompagnement-strategique`. It is linked as a first-class solution from Navbar, Footer, mobile drawer, and the homepage SolutionsTabs (`/accompagnement-strategique#courtage`). The accompagnement page sells courtage as one of three pillars (diagnostic + courtage + financement) — but courtage doesn't have its own URL, no SEO surface, and no room to explain the offer.

Goal: stand up a dedicated `/courtage-energie` route that mirrors how every other solution on the site works (own page, own meta, own SEO), explains what courtage is for non-expert readers, and frames how ECOPRORENOVE helps.

## Scope

- New route `/courtage-energie` in the Next.js 16 App Router (`src/app/courtage-energie/page.tsx`)
- Wired into nav (Navbar mégamenu desktop + mobile drawer), Footer, homepage SolutionsTabs, sitemap, RelatedSolutions catalog, ContactForm sources, and breadcrumb structured data
- The `#courtage` anchor inside `/accompagnement-strategique` is removed; the operation 04 card on that page becomes a link to the new route
- Hero placeholder (`.hero__img--placeholder`) — real photo deferred until Emmanuel provides one (consistent with the other 6 pending placeholder pages)

## Out of scope

- Comparator tool (Alliance des Énergies has a proprietary algorithm; we don't, and a fake one would be dishonest)
- Stats band (no real volumes available; explicitly not building a "we negotiated X TWh" panel)
- Pricing / forfait detail (Emmanuel has not provided this)
- Real hero photo (placeholder pattern, swap later)
- Standalone separate sub-pages (gaz / électricité split) — kept as one page

## Page architecture

### Visual chrome (matches existing solution pages)

- `<div className="page-service solution-template page-courtage-energie">`
- `ScrollNav` on right edge (sections: `#concept`, `#valeur`, `#methode`, `#independance`, `#perimetre`, `#faq`, `#contact`) — hidden under 1100px (existing behaviour)
- BreadcrumbJsonLd + ServiceJsonLd
- Hero with placeholder image (no real visual until provided)

### Sections, in order

**1. Hero**
- Eyebrow: `Courtage gaz & électricité`
- Title (anchor caps): "VOS CONTRATS D'ÉNERGIE"
- Serif italic kicker: *"négociés par un partenaire indépendant"*
- Sub: "Mise en concurrence des fournisseurs, arbitrage tarifaire, suivi continu — sans lien d'exclusivité avec aucun fournisseur."
- Stat-line pill: "Indépendant — Pas de commission cachée"
- 3 floating bubbles (adapted from solution-template defaults): `--cee` green accent retained; the `--temp` bubble carries an "€/MWh" label, `--life` carries "Multi-fournisseurs"
- Placeholder hero image (`hero__img--placeholder` with "PHOTO À VENIR")

**2. Bandeau strip**
- Single line: *"Notre rémunération ne dépend pas du fournisseur que vous choisirez."*

**3. § Qu'est-ce que le courtage en énergie ? (`#concept`)**
- Lead paragraph: plain-language definition (the energy market is liberalised, multiple suppliers, contracts are technical)
- 3-card grid:
  - **Le marché** — libéralisé depuis 2007, dizaines de fournisseurs, prix de gros volatils
  - **Le courtier** — intermédiaire indépendant qui pilote la mise en concurrence et lit les offres pour vous
  - **Le contrat** — durée, prix fixe ou indexé, mécanismes ARENH / EPEX, clauses de sortie

**4. § Pourquoi passer par un courtier ? (`#valeur`)**
- 4 value cards, no numbers:
  - **Indépendance** — aucune exclusivité fournisseur, recommandation sur critères objectifs
  - **Méthode tarifaire** — lecture comparée des offres, arbitrage prix fixe vs indexé selon profil
  - **Gain de temps** — un seul interlocuteur, démarches administratives prises en charge
  - **Continuité du suivi** — surveillance jusqu'à l'échéance, renégociation au bon moment

**5. § Notre méthode (`#methode`)**
- Eyebrow: "Notre méthode"
- Title: "Cinq étapes, *un contrat maîtrisé*" (mirrors homepage parcours title pattern)
- 5-step `.how-steps` grid (same component shape as `/isolation-toiture-rampants`, `/vmc-double-flux`, etc.):
  - 01 — Audit du profil de consommation (factures, courbes de charge, sites multiples)
  - 02 — Mise en concurrence (panel de fournisseurs sollicité sur cahier des charges)
  - 03 — Lecture des offres & arbitrage (prix, mécanisme, clauses, durée)
  - 04 — Bascule administrative (résiliation, signature, transfert)
  - 05 — Suivi & renégociation (alertes marché, échéance contractuelle)

**6. § Indépendance et transparence (`#independance`)**
- Premium dark band (visual style: same family as the bardage `.finition-paint` card — dark bg, accent eyebrow, three statements)
- Eyebrow: "Notre engagement"
- Title: "Aucun lien d'exclusivité"
- 3 short statements pulled from existing accompagnement FAQ:
  - "Aucun lien d'exclusivité avec un fournisseur"
  - "Notre rémunération ne dépend pas du choix retenu"
  - "Recommandation sur critères objectifs — pas commerciaux"

**7. § Périmètre couvert (`#perimetre`)**
- Small icon grid (4 tiles):
  - Gaz naturel
  - Électricité
  - Tertiaire / Agricole / Industriel
  - Multi-sites
- Honest scope statement, no volume claims

**8. § FAQ (`#faq`)**
- Reuse `Faq` component
- 6 entries:
  1. *Qu'est-ce qu'un courtier en énergie et que fait-il concrètement ?*
  2. *Combien coûte votre intervention ?* (answer: rémunération transparente, indépendante du choix retenu — keep generic, no number until Emmanuel confirms)
  3. *Êtes-vous vraiment indépendants des fournisseurs ?* (adapted from existing accompagnement FAQ)
  4. *À quel moment vaut-il mieux vous solliciter ?* (adapted)
  5. *Travaillez-vous avec les TPE/PME ou seulement les grandes structures ?* (adapted)
  6. *Que se passe-t-il à l'échéance du contrat négocié ?*

**9. § Pages en lien**
- `<RelatedSolutions items={["accompagnement-strategique", "prime-cee", "ma-prime-renov"]} />`

**10. § Contact**
- Inline `<ContactForm source="courtage" />`
- Adds `courtage` (label: "Courtage") to SOURCE_LABEL in `src/lib/contact-action.ts`
- ContactForm doesn't carry a sujet field by default — no pre-select needed. The `source="courtage"` prop alone tags the email subject so submissions land with `[Courtage]` in the inbox

## Wiring changes

| File | Change |
|---|---|
| `src/app/courtage-energie/page.tsx` | New file — full page |
| `src/app/sitemap.ts` | Add `/courtage-energie` |
| `src/app/accompagnement-strategique/page.tsx` | Remove `id="courtage"` from operation 04 card; replace with a "voir la page dédiée →" link to `/courtage-energie`. Meta description stays as-is — accompagnement still legitimately covers courtage as one of its three pillars |
| `src/app/globals.css` | Remove `.cee-card[id="courtage"] { scroll-margin-top: 96px; }` (line ~3990). Add any `.page-courtage-energie` scoped rules required (likely none beyond what `.solution-template` already provides) |
| `src/components/Navbar.tsx` | Mégamenu desktop + mobile drawer: `/accompagnement-strategique#courtage` → `/courtage-energie` |
| `src/components/Footer.tsx` | Same swap |
| `src/app/page.tsx` | Homepage SolutionsTabs: `/accompagnement-strategique#courtage` → `/courtage-energie` |
| `src/components/RelatedSolutions.tsx` | Add `courtage-energie` entry to the catalog (slug, title, lead, group: "solution") |
| `src/lib/contact-action.ts` | Add `courtage` to SOURCE_LABEL map |

No new dependencies. No new components — reuses `ContactForm`, `Faq`, `RelatedSolutions`, `ScrollNav`, `BreadcrumbJsonLd`, `ServiceJsonLd`.

## SEO / metadata

- `<title>`: "Courtage en énergie gaz & électricité — ECOPRORENOVE" (≤ 60 chars target)
- `<meta name="description">`: ≤ 160 chars. Draft: "Courtier indépendant en énergie : mise en concurrence, négociation et suivi de vos contrats gaz et électricité. Aucune exclusivité fournisseur."
- `alternates: { canonical: "/courtage-energie" }`
- `openGraph` block matching the pattern used by `/vmc-double-flux` and `/ma-prime-renov`
- BreadcrumbJsonLd (Accueil → Solutions → Courtage en énergie)
- ServiceJsonLd (`name`: "Courtage en énergie gaz et électricité"; `description`: from meta)

## Acceptance criteria

- `npm run build` clean — 23 routes (was 22)
- `/courtage-energie` renders without console errors at desktop ≥ 1101px, tablet, and mobile ≤ 480px
- All 7 wiring updates land in the same commit (or a tight commit chain) — no half-cut state where Navbar still points to the old anchor
- No broken anchors anywhere on the site after the `#courtage` anchor is removed (curl/grep sweep for `accompagnement-strategique#courtage` returns 0 hits)
- ContactForm submission from the new page sends an email tagged `[Courtage]` (or equivalent SOURCE_LABEL) — verifiable on staging once Coolify rebuilds
- Sitemap.xml includes `/courtage-energie`
- ScrollNav on the page surfaces the 7 anchors and IntersectionObserver scroll-spy is active above 1100px

## Risks / open questions

- **Emmanuel's exact courtage offering:** the page assumes the standard "audit + mise en concurrence + suivi" model with no exclusivity. If his actual model differs (e.g., he is tied to a specific energy reseller, or charges a one-off fee), the indépendance section becomes inaccurate. Mitigation: ship the page with current brand positioning, flag for review on next call with Emmanuel.
- **Hero photo:** placeholder pattern is established and acceptable. When a photo lands, swap is a one-line change.
- **Pricing question in FAQ:** without a concrete number, the answer stays generic. If Emmanuel later confirms a model (% économies, forfait, success fee), update FAQ entry 2.

## Project conventions to honour during implementation

- Project AGENTS.md says: *"This is NOT the Next.js you know — read the relevant guide in `node_modules/next/dist/docs/` before writing any code."* Plan must include a step to verify the Next 16 patterns used by the closest sibling page (`/vmc-double-flux` is the most recent, built fresh in session 9).
- CSS scoping convention: `.page-courtage-energie` co-class on the wrapper; rules live at the bottom of `globals.css` (or are unnecessary if `.solution-template` covers everything).
- ESLint `react/no-unescaped-entities`: use `&apos;` and `&amp;` inside JSX text.
- Build cadence: `npm run build` after wiring changes, before commit.

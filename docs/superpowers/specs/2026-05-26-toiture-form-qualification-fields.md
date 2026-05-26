---
title: Isolation toiture rampants — form qualification fields
date: 2026-05-26
status: approved
---

## Scope

Add 5 required qualification questions and convert the existing `surface` free-text input to a 4-bucket required select on the `/isolation-toiture-rampants` contact form. Update the `FIELD_LABEL` map so the new fields render with friendly labels in the email body.

## Fields

| `name` attr | Label | Type | Required | Options |
|---|---|---|---|---|
| `decisionnaire` | Êtes-vous décisionnaire du bâtiment ? | select | yes | Oui · Non |
| `acces_toiture` | La toiture est-elle accessible depuis l'intérieur ? | select | yes | Oui · Non, il y a un faux plafond · Je ne sais pas |
| `batiment_ferme` | Le bâtiment est-il fermé sur les côtés ? | select | yes | Oui · Non · Partiellement |
| `surface` (changed) | Surface approximative | select | yes | Moins de 150 m² · 150 à 250 m² · 250 à 500 m² · Plus de 500 m² |
| `deja_isole` | Votre bâtiment est-il déjà isolé sous toiture ? | select | yes | Oui · Non · Je ne sais pas |
| `demande_anterieure` | Avez-vous déjà fait une demande auprès d'ECOPRORENOVE ? | select | yes | Oui · Non |

## Field order in form

After `email`, before `message`:

1. `decisionnaire` *(new)*
2. `type_batiment` *(existing)*
3. `type_toiture` *(existing)*
4. `acces_toiture` *(new)*
5. `batiment_ferme` *(new)*
6. `surface` *(was text input, now select)*
7. `deja_isole` *(new)*
8. `demande_anterieure` *(new)*

## Files touched

- `src/app/isolation-toiture-rampants/page.tsx` — insert 5 selects, convert `surface` to select
- `src/lib/contact-action.ts` — add 5 `FIELD_LABEL` entries + add `type_toiture` (existing form field that has been emitting the raw key in emails because only `type_couverture` was mapped)

## Validation

Browser-side via HTML `required` attribute on each `<select>`. Server-side validation (prénom, nom, téléphone, email, rgpd) unchanged — the new fields rely on the browser-enforced floor.

## Out of scope

- Other 12 form sources (unchanged)
- No new server-side validators
- Honeypot / dwell-time / Resend pipeline (unchanged)

# Setup page teardown

The `/setup/[token]` route is a one-off intake form for Emmanuel to fill in legal /
contact data before the site goes live. Once the data is transcribed into the new
`/mentions-legales` and `/politique-de-confidentialite` pages and the site is public,
delete the form so the URL stops responding.

Run this checklist after launch:

- [ ] Confirm the data has been transcribed into the real legal pages.
- [ ] Delete `src/app/setup/` (whole directory — page + actions).
- [ ] Delete `src/components/setup/` (whole directory).
- [ ] Remove the `/* Setup / client intake page (/setup/[token]) */` block at the bottom of `src/app/globals.css` (and the `.footer__credit` rule below it stays — that's the Influxe credit, not setup-specific).
- [ ] Verify nothing references the route or components:
  ```bash
  grep -rn "setup/\|/setup\|IntakeForm\|submitIntake" src/ docs/
  ```
  Should return only this file.
- [ ] Delete this file.
- [ ] Commit + redeploy. Hitting `/setup/<anything>` should now 404.

## Token

The expected URL token is hardcoded in `src/app/setup/[token]/page.tsx` as
`EXPECTED_TOKEN`. The current value is sent to Emmanuel privately (WhatsApp / DM, not
public email).

## Where the submission lands

The server action (`src/app/setup/actions.ts`) `console.log`s a formatted block to
stdout. On the Coolify deployment that goes to the container's logs — open the app in
Coolify → "Logs" tab to read it after Emmanuel submits. No email is sent (Resend is
planned but not wired yet — if/when it lands, swap the `console.log` for a mailer
call).

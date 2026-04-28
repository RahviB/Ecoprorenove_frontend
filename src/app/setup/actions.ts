"use server";

import { Resend } from "resend";

const RESEND_FROM = "ECOPRORENOVE <contact@ecoprorenove.fr>";
const RESEND_TO = "rahvi.bichon@gmail.com";

export type IntakeState = {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
};

const REQUIRED_FIELDS = [
  "forme_juridique",
  "denomination",
  "siren",
  "siret_lyon",
  "adresse_lyon",
  "directeur_publication",
  "telephone_fr",
  "email_contact",
  "rgpd_consent",
] as const;

const isDigits = (s: string, n: number) => new RegExp(`^\\d{${n}}$`).test(s);
const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);

function fmt(label: string, value: string | undefined): string {
  return `${label.padEnd(34)} ${value && value.trim() ? value.trim() : "—"}`;
}

const STATUS_LABEL: Record<string, string> = {
  fill: "Renseigné ci-dessous",
  pending: "Pas encore disponible — à fournir plus tard",
  na: "Ne s'applique pas / pas chez le client",
};

function statusHeader(label: string, raw: string | undefined): string {
  const status = (raw || "fill").toLowerCase();
  const text = STATUS_LABEL[status] || raw || "—";
  return `${label.padEnd(34)} → ${text}`;
}

export async function submitIntake(
  _prev: IntakeState,
  data: FormData,
): Promise<IntakeState> {
  const f = (k: string) => (data.get(k) as string | null) ?? "";
  const errors: Record<string, string> = {};

  for (const key of REQUIRED_FIELDS) {
    if (!f(key).trim()) errors[key] = "Champ obligatoire";
  }

  const siren = f("siren").replace(/\s/g, "");
  if (siren && !isDigits(siren, 9)) errors.siren = "9 chiffres attendus";

  const sLyon = f("siret_lyon").replace(/\s/g, "");
  if (sLyon && !isDigits(sLyon, 14)) errors.siret_lyon = "14 chiffres attendus";

  const sReu = f("siret_reunion").replace(/\s/g, "");
  if (sReu && !isDigits(sReu, 14))
    errors.siret_reunion = "14 chiffres attendus (laisser vide si pas d'établissement Réunion)";

  const email = f("email_contact").trim();
  if (email && !isEmail(email)) errors.email_contact = "Email invalide";

  const dpoEmail = f("dpo_email").trim();
  if (dpoEmail && !isEmail(dpoEmail)) errors.dpo_email = "Email invalide";

  if (Object.keys(errors).length > 0) {
    return { ok: false, message: "Corrigez les champs en rouge.", errors };
  }

  const statusRcs = f("statut_rcs") || "fill";
  const statusAss = f("statut_assurance") || "fill";
  const statusRge = f("statut_rge") || "fill";
  const statusMed = f("statut_mediateur") || "fill";

  const lines: string[] = [];
  const push = (...rows: string[]) => lines.push(...rows);
  const blank = () => lines.push("");

  blank();
  push("================================================================");
  push(`  ECOPRORENOVE — INTAKE SUBMISSION  ·  ${new Date().toISOString()}`);
  push("================================================================");
  blank();
  push("[ Identité juridique ]");
  push(fmt("Forme juridique", f("forme_juridique")));
  push(fmt("Dénomination sociale", f("denomination")));
  push(fmt("Capital social", f("capital")));
  push(fmt("SIREN (9 chiffres)", siren));
  push(statusHeader("RCS — statut", statusRcs));
  if (statusRcs === "fill") push(fmt("RCS (ville + n°)", f("rcs")));
  push(fmt("TVA intracommunautaire", f("tva")));
  blank();
  push("[ Établissements ]");
  push(fmt("SIRET Lyon (14 chiffres)", sLyon));
  push(fmt("Adresse Lyon", f("adresse_lyon")));
  push(fmt("SIRET Réunion (14 chiffres)", sReu));
  push(fmt("Adresse Réunion", f("adresse_reunion")));
  blank();
  push("[ Direction & RGPD ]");
  push(fmt("Directeur de la publication", f("directeur_publication")));
  push(fmt("Email DPO", dpoEmail));
  push(fmt("Adresse postale RGPD", f("rgpd_adresse")));
  blank();
  push("[ Coordonnées publiques ]");
  push(fmt("Téléphone France", f("telephone_fr")));
  push(fmt("Téléphone Réunion", f("telephone_reunion")));
  push(fmt("Email contact", email));
  push(fmt("Horaires d'ouverture", f("horaires")));
  blank();
  push("[ Assurance ]");
  push(statusHeader("Statut groupe", statusAss));
  if (statusAss === "fill") {
    push(fmt("Assureur RC pro", f("assurance_rc_assureur")));
    push(fmt("N° police RC pro", f("assurance_rc_police")));
    push(fmt("Assureur décennale", f("assurance_dec_assureur")));
    push(fmt("N° police décennale", f("assurance_dec_police")));
    push(fmt("Zone géo couverte", f("assurance_zone")));
  }
  blank();
  push("[ Certifications RGE ]");
  push(statusHeader("Statut groupe", statusRge));
  if (statusRge === "fill") {
    push(fmt("Organisme certificateur", f("rge_organisme")));
    push(fmt("N° certificat RGE", f("rge_numero")));
    push(fmt("Domaines couverts", f("rge_domaines")));
    push(fmt("Date d'expiration", f("rge_expiration")));
  }
  blank();
  push("[ Médiateur de la consommation ]");
  push(statusHeader("Statut groupe", statusMed));
  if (statusMed === "fill") {
    push(fmt("Nom du médiateur", f("mediateur_nom")));
    push(fmt("URL ou adresse", f("mediateur_contact")));
  }
  blank();
  push("[ Hébergeur ]");
  push(fmt("Hébergeur", f("hebergeur_nom")));
  push(fmt("Adresse hébergeur", f("hebergeur_adresse")));
  blank();
  push("[ Notes libres ]");
  push(f("notes").trim() || "—");
  blank();
  push("================================================================");
  blank();

  const block = lines.join("\n");

  console.log(block);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY missing — submission only logged, not emailed.");
    return {
      ok: false,
      message:
        "Erreur de configuration côté serveur. Vos informations ont été enregistrées dans les logs ; l'équipe Influxe vous recontacte.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: RESEND_FROM,
      to: RESEND_TO,
      replyTo: f("email_contact").trim() || undefined,
      subject: `[Intake ECOPRORENOVE] ${f("denomination").trim() || "Soumission"}`,
      text: block,
    });
    if (error) {
      console.error("Resend send error:", error);
      return {
        ok: false,
        message:
          "Vos informations ont été enregistrées mais l'email n'a pas pu être envoyé. L'équipe Influxe est notifiée.",
      };
    }
  } catch (err) {
    console.error("Resend send exception:", err);
    return {
      ok: false,
      message:
        "Vos informations ont été enregistrées mais l'email n'a pas pu être envoyé. L'équipe Influxe est notifiée.",
    };
  }

  return {
    ok: true,
    message:
      "Merci ! Vos informations ont bien été reçues — l'équipe Influxe les intègre au site.",
  };
}

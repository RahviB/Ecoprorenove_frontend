"use server";

import { Resend } from "resend";

const RESEND_FROM = "ECOPRORENOVE <contact@ecoprorenove.fr>";
const RESEND_TO = process.env.RESEND_TO ?? "rahvi.bichon@gmail.com";

export type ContactState = {
  ok: boolean | null;
  message: string;
};

// Spam guard — minimum dwell time on the form before submission is accepted.
const MIN_DWELL_MS = 1500;

const SOURCE_LABEL: Record<string, string> = {
  "home": "Page d'accueil",
  "tertiaire": "Secteur tertiaire",
  "residentiel": "Secteur résidentiel",
  "agricole": "Secteur agricole",
  "isolation-combles": "Isolation des combles",
  "isolation-planchers-bas": "Isolation des planchers bas",
  "isolation-toiture-rampants": "Isolation toiture (thermoréflectif)",
  "destratificateur-air": "Destratificateur d'air",
  "prime-cee": "Prime CEE",
  "ma-prime-renov": "MaPrimeRénov'",
  "accompagnement-strategique": "Accompagnement stratégique",
  "courtage-energie": "Courtage énergie (gaz / électricité)",
  "extracteur-air": "Extracteur d'air",
  "bardage": "Bardage",
};

const FIELD_LABEL: Record<string, string> = {
  prenom: "Prénom",
  nom: "Nom",
  societe: "Société",
  telephone: "Téléphone",
  email: "Email",
  secteur: "Secteur",
  type_batiment: "Type de bâtiment",
  type_combles: "Type de combles",
  type_plancher: "Configuration du plancher bas",
  type_couverture: "Type de couverture",
  type_contrat: "Type de contrat",
  echeance: "Échéance du contrat actuel",
  finition: "Finition bardage",
  profil: "Profil de pose",
  surface: "Surface (m²)",
  hauteur: "Hauteur sous toiture",
  message: "Message / projet",
};

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);

export async function submitContact(
  _prev: ContactState,
  data: FormData,
): Promise<ContactState> {
  // Honeypot — silently swallow bot submissions that filled the hidden field.
  // Return a fake success so bots can't probe for the trap.
  if (String(data.get("_hp") || "").trim() !== "") {
    return {
      ok: true,
      message: "Merci ! Votre demande a bien été envoyée — nous revenons vers vous sous 48h ouvrées.",
    };
  }

  // Time-trap — reject submissions that arrive faster than a human can fill.
  const ts = Number(data.get("_ts") || 0);
  if (ts > 0 && Date.now() - ts < MIN_DWELL_MS) {
    return {
      ok: true,
      message: "Merci ! Votre demande a bien été envoyée — nous revenons vers vous sous 48h ouvrées.",
    };
  }

  const rawSource = String(data.get("_source") || "contact");
  // Whitelist source — falls back to "contact" so we don't echo arbitrary
  // bot-supplied strings into email subjects or logs.
  const source = rawSource in SOURCE_LABEL ? rawSource : "contact";
  const sourceLabel = SOURCE_LABEL[source] ?? "Contact";

  const f = (k: string) => String(data.get(k) || "").trim();

  // Universal required fields
  const prenom = f("prenom");
  const nom = f("nom");
  const tel = f("telephone");
  const email = f("email");
  const rgpd = data.get("rgpd");

  if (!prenom || !nom) {
    return { ok: false, message: "Merci d'indiquer votre prénom et votre nom." };
  }
  if (!tel) {
    return { ok: false, message: "Merci d'indiquer un numéro de téléphone." };
  }
  if (!email || !isEmail(email)) {
    return { ok: false, message: "Adresse email invalide." };
  }
  if (!rgpd) {
    return {
      ok: false,
      message: "Merci d'accepter l'utilisation de vos données pour traiter votre demande.",
    };
  }

  // Build body — pull every entry except technical/empty ones
  const skip = new Set(["_source", "_hp", "_ts", "rgpd", "$ACTION_ID", ""]);
  const lines: string[] = [];
  const seen = new Set<string>();
  for (const [key, value] of data.entries()) {
    if (skip.has(key) || key.startsWith("$ACTION_")) continue;
    const v = typeof value === "string" ? value.trim() : "";
    if (!v) continue;
    if (seen.has(key)) continue;
    seen.add(key);
    const label = FIELD_LABEL[key] || key;
    lines.push(`${label.padEnd(28)} ${v}`);
  }

  const body = [
    "",
    "================================================================",
    `  ECOPRORENOVE — DEMANDE DE CONTACT  ·  ${new Date().toISOString()}`,
    `  Source : ${sourceLabel}`,
    "================================================================",
    "",
    ...lines,
    "",
    "================================================================",
    "",
  ].join("\n");

  if (process.env.NODE_ENV !== "production") {
    console.log(body);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY missing — contact submission only logged.");
    return {
      ok: false,
      message: "Erreur de configuration côté serveur. Vous pouvez nous appeler au +33 6 19 79 83 91.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: RESEND_FROM,
      to: RESEND_TO,
      replyTo: email,
      subject: `[Contact ECOPRORENOVE — ${sourceLabel}] ${prenom} ${nom}`,
      text: body,
    });
    if (error) {
      console.error("Resend send error:", error);
      return {
        ok: false,
        message: "L'envoi a échoué. Vous pouvez nous appeler au +33 6 19 79 83 91.",
      };
    }
  } catch (err) {
    console.error("Resend send exception:", err);
    return {
      ok: false,
      message: "L'envoi a échoué. Vous pouvez nous appeler au +33 6 19 79 83 91.",
    };
  }

  return {
    ok: true,
    message:
      "Merci ! Votre demande a bien été envoyée — nous revenons vers vous sous 48h ouvrées.",
  };
}

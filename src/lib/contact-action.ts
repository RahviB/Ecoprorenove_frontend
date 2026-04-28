"use server";

import { Resend } from "resend";

const RESEND_FROM = "ECOPRORENOVE <contact@ecoprorenove.fr>";
const RESEND_TO = "rahvi.bichon@gmail.com";

export type ContactState = {
  ok: boolean | null;
  message: string;
};

const SOURCE_LABEL: Record<string, string> = {
  "home": "Page d'accueil",
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
  const source = String(data.get("_source") || "contact");
  const sourceLabel = SOURCE_LABEL[source] || source;

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
  const skip = new Set(["_source", "rgpd", "$ACTION_ID", ""]);
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

  console.log(body);

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

"use server";

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

  const block = [
    "",
    "================================================================",
    `  ECOPRORENOVE — INTAKE SUBMISSION  ·  ${new Date().toISOString()}`,
    "================================================================",
    "",
    "[ Identité juridique ]",
    fmt("Forme juridique", f("forme_juridique")),
    fmt("Dénomination sociale", f("denomination")),
    fmt("Capital social", f("capital")),
    fmt("SIREN (9 chiffres)", siren),
    fmt("RCS (ville + n°)", f("rcs")),
    fmt("TVA intracommunautaire", f("tva")),
    "",
    "[ Établissements ]",
    fmt("SIRET Lyon (14 chiffres)", sLyon),
    fmt("Adresse Lyon", f("adresse_lyon")),
    fmt("SIRET Réunion (14 chiffres)", sReu),
    fmt("Adresse Réunion", f("adresse_reunion")),
    "",
    "[ Direction & RGPD ]",
    fmt("Directeur de la publication", f("directeur_publication")),
    fmt("Email DPO", dpoEmail),
    fmt("Adresse postale RGPD", f("rgpd_adresse")),
    "",
    "[ Coordonnées publiques ]",
    fmt("Téléphone France", f("telephone_fr")),
    fmt("Téléphone Réunion", f("telephone_reunion")),
    fmt("Email contact", email),
    fmt("Horaires d'ouverture", f("horaires")),
    "",
    "[ Assurance ]",
    fmt("Assureur RC pro", f("assurance_rc_assureur")),
    fmt("N° police RC pro", f("assurance_rc_police")),
    fmt("Assureur décennale", f("assurance_dec_assureur")),
    fmt("N° police décennale", f("assurance_dec_police")),
    fmt("Zone géo couverte", f("assurance_zone")),
    "",
    "[ Certifications RGE ]",
    fmt("Organisme certificateur", f("rge_organisme")),
    fmt("N° certificat RGE", f("rge_numero")),
    fmt("Domaines couverts", f("rge_domaines")),
    fmt("Date d'expiration", f("rge_expiration")),
    "",
    "[ Médiateur de la consommation ]",
    fmt("Nom du médiateur", f("mediateur_nom")),
    fmt("URL ou adresse", f("mediateur_contact")),
    "",
    "[ Hébergeur ]",
    fmt("Hébergeur", f("hebergeur_nom")),
    fmt("Adresse hébergeur", f("hebergeur_adresse")),
    "",
    "[ Notes libres ]",
    f("notes").trim() || "—",
    "",
    "================================================================",
    "",
  ].join("\n");

  console.log(block);

  return {
    ok: true,
    message:
      "Merci ! Vos informations ont bien été reçues — l'équipe Influxe les intègre au site.",
  };
}

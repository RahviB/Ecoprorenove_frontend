"use client";

import { useActionState, useState } from "react";
import { submitIntake, type IntakeState } from "@/app/setup/actions";

const initialState: IntakeState = { ok: false, message: "" };

type GroupStatus = "fill" | "pending" | "na";

const GROUPS = ["rcs", "assurance", "rge", "mediateur"] as const;
type Group = (typeof GROUPS)[number];

const STATUS_LABEL: Record<GroupStatus, string> = {
  fill: "Je le renseigne ci-dessous",
  pending: "Pas encore disponible — je vous l'enverrai plus tard",
  na: "Ne s'applique pas / je n'ai pas",
};

function fieldError(errors: Record<string, string> | undefined, key: string) {
  return errors?.[key];
}

export default function IntakeForm() {
  const [state, formAction, isPending] = useActionState(submitIntake, initialState);
  const [statuses, setStatuses] = useState<Record<Group, GroupStatus>>({
    rcs: "fill",
    assurance: "fill",
    rge: "fill",
    mediateur: "fill",
  });

  function setGroup(g: Group, value: GroupStatus) {
    setStatuses((s) => ({ ...s, [g]: value }));
  }
  const isLocked = (g: Group) => statuses[g] !== "fill";

  if (state.ok) {
    return (
      <div className="setup-success" role="status" aria-live="polite">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#357a28"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <h2>Reçu, merci&nbsp;!</h2>
        <p>{state.message}</p>
        <p className="setup-success__sub">
          Vous pouvez fermer cette page. Si vous souhaitez corriger quelque chose, rouvrez le
          lien et soumettez à nouveau&nbsp;: la dernière soumission fait foi.
        </p>
      </div>
    );
  }

  const err = state.errors;

  function StatusSelect({ group, label }: { group: Group; label: string }) {
    return (
      <div className="setup-status">
        <label className="setup-status__label" htmlFor={`statut_${group}`}>
          {label}
        </label>
        <select
          className="form-select setup-status__select"
          id={`statut_${group}`}
          name={`statut_${group}`}
          value={statuses[group]}
          onChange={(e) => setGroup(group, e.target.value as GroupStatus)}
        >
          <option value="fill">{STATUS_LABEL.fill}</option>
          <option value="pending">{STATUS_LABEL.pending}</option>
          <option value="na">{STATUS_LABEL.na}</option>
        </select>
      </div>
    );
  }

  return (
    <form action={formAction} className="setup-form" noValidate>
      {state.message && !state.ok && (
        <div className="setup-alert" role="alert">
          {state.message}
        </div>
      )}

      <fieldset className="setup-fieldset">
        <legend>Identité juridique</legend>
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label" htmlFor="forme_juridique">
              Forme juridique *
            </label>
            <select
              className="form-select"
              id="forme_juridique"
              name="forme_juridique"
              defaultValue="SAS"
              required
            >
              <option value="SAS">SAS</option>
              <option value="SARL">SARL</option>
              <option value="EURL">EURL</option>
              <option value="SASU">SASU</option>
              <option value="EI">Entrepreneur individuel</option>
              <option value="Micro">Micro-entreprise</option>
              <option value="Autre">Autre</option>
            </select>
            {fieldError(err, "forme_juridique") && (
              <p className="setup-error">{fieldError(err, "forme_juridique")}</p>
            )}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="capital">
              Capital social (€)
            </label>
            <input
              className="form-input"
              type="text"
              id="capital"
              name="capital"
              defaultValue="1000"
              placeholder="1000"
            />
          </div>
          <div className="form-group form-group--full">
            <label className="form-label" htmlFor="denomination">
              Dénomination sociale *
            </label>
            <input
              className="form-input"
              type="text"
              id="denomination"
              name="denomination"
              defaultValue="EB CONSEILS – Ecoprorenove"
              required
            />
            {fieldError(err, "denomination") && (
              <p className="setup-error">{fieldError(err, "denomination")}</p>
            )}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="siren">
              SIREN (9 chiffres) *
            </label>
            <input
              className="form-input"
              type="text"
              id="siren"
              name="siren"
              inputMode="numeric"
              defaultValue="894975150"
              maxLength={11}
              required
            />
            {fieldError(err, "siren") && (
              <p className="setup-error">{fieldError(err, "siren")}</p>
            )}
            <p className="setup-hint">
              On l&apos;avait noté en SIRET sur l&apos;ancien site — c&apos;est en réalité un
              SIREN (9 chiffres).
            </p>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="tva">
              N° TVA intracommunautaire
            </label>
            <input
              className="form-input"
              type="text"
              id="tva"
              name="tva"
              defaultValue="FR91894975150"
              placeholder="FR + 11 chiffres"
            />
          </div>
          <div className="form-group form-group--full">
            <StatusSelect group="rcs" label="RCS — où en êtes-vous&nbsp;?" />
            <label className="form-label" htmlFor="rcs">
              RCS (ville d&apos;immatriculation + numéro)
            </label>
            <input
              className="form-input"
              type="text"
              id="rcs"
              name="rcs"
              placeholder="Ex&nbsp;: RCS Lyon 894 975 150"
              disabled={isLocked("rcs")}
              data-locked={isLocked("rcs") ? "true" : undefined}
            />
            <p className="setup-hint">
              Le numéro RCS reprend généralement le SIREN, précédé de la ville
              d&apos;immatriculation.
            </p>
          </div>
        </div>
      </fieldset>

      <fieldset className="setup-fieldset">
        <legend>Établissements (Lyon &amp; Réunion)</legend>
        <p className="setup-fieldset__intro">
          Vous avez deux établissements&nbsp;: chacun a son propre SIRET (14 chiffres = SIREN
          + 5 chiffres NIC).
        </p>
        <div className="form-grid">
          <div className="form-group form-group--full">
            <label className="form-label" htmlFor="siret_lyon">
              SIRET établissement Lyon (14 chiffres) *
            </label>
            <input
              className="form-input"
              type="text"
              id="siret_lyon"
              name="siret_lyon"
              inputMode="numeric"
              maxLength={17}
              placeholder="14 chiffres"
              required
            />
            {fieldError(err, "siret_lyon") && (
              <p className="setup-error">{fieldError(err, "siret_lyon")}</p>
            )}
          </div>
          <div className="form-group form-group--full">
            <label className="form-label" htmlFor="adresse_lyon">
              Adresse complète Lyon *
            </label>
            <input
              className="form-input"
              type="text"
              id="adresse_lyon"
              name="adresse_lyon"
              defaultValue="3 rue Jacqueline et Roland de Pury, 69002 Lyon"
              required
            />
            {fieldError(err, "adresse_lyon") && (
              <p className="setup-error">{fieldError(err, "adresse_lyon")}</p>
            )}
          </div>
          <div className="form-group form-group--full">
            <label className="form-label" htmlFor="siret_reunion">
              SIRET établissement Réunion (14 chiffres)
            </label>
            <input
              className="form-input"
              type="text"
              id="siret_reunion"
              name="siret_reunion"
              inputMode="numeric"
              maxLength={17}
              placeholder="14 chiffres — laissez vide si pas d'établissement Réunion"
            />
            {fieldError(err, "siret_reunion") && (
              <p className="setup-error">{fieldError(err, "siret_reunion")}</p>
            )}
          </div>
          <div className="form-group form-group--full">
            <label className="form-label" htmlFor="adresse_reunion">
              Adresse complète Réunion
            </label>
            <input
              className="form-input"
              type="text"
              id="adresse_reunion"
              name="adresse_reunion"
              placeholder="Numéro, rue, code postal, ville"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="setup-fieldset">
        <legend>Direction &amp; RGPD</legend>
        <div className="form-grid">
          <div className="form-group form-group--full">
            <label className="form-label" htmlFor="directeur_publication">
              Directeur de la publication *
            </label>
            <input
              className="form-input"
              type="text"
              id="directeur_publication"
              name="directeur_publication"
              defaultValue="Emmanuel Boyer"
              required
            />
            {fieldError(err, "directeur_publication") && (
              <p className="setup-error">{fieldError(err, "directeur_publication")}</p>
            )}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="dpo_email">
              Email DPO / RGPD
            </label>
            <input
              className="form-input"
              type="email"
              id="dpo_email"
              name="dpo_email"
              defaultValue="contact@ecoprorenove.fr"
              placeholder="contact@ecoprorenove.fr"
            />
            {fieldError(err, "dpo_email") && (
              <p className="setup-error">{fieldError(err, "dpo_email")}</p>
            )}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="rgpd_adresse">
              Adresse postale RGPD
            </label>
            <input
              className="form-input"
              type="text"
              id="rgpd_adresse"
              name="rgpd_adresse"
              placeholder="Idem siège Lyon"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="setup-fieldset">
        <legend>Coordonnées publiques (affichées sur le site)</legend>
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label" htmlFor="telephone_fr">
              Téléphone France *
            </label>
            <input
              className="form-input"
              type="tel"
              id="telephone_fr"
              name="telephone_fr"
              defaultValue="+33 6 19 79 83 91"
              required
            />
            {fieldError(err, "telephone_fr") && (
              <p className="setup-error">{fieldError(err, "telephone_fr")}</p>
            )}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="telephone_reunion">
              Téléphone Réunion
            </label>
            <input
              className="form-input"
              type="tel"
              id="telephone_reunion"
              name="telephone_reunion"
              defaultValue="+262 6 93 54 62 53"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="email_contact">
              Email de contact public *
            </label>
            <input
              className="form-input"
              type="email"
              id="email_contact"
              name="email_contact"
              defaultValue="contact@ecoprorenove.fr"
              required
            />
            {fieldError(err, "email_contact") && (
              <p className="setup-error">{fieldError(err, "email_contact")}</p>
            )}
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="horaires">
              Horaires d&apos;ouverture
            </label>
            <input
              className="form-input"
              type="text"
              id="horaires"
              name="horaires"
              placeholder="Lun-Ven 9h–18h"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="setup-fieldset">
        <legend>Assurance professionnelle</legend>
        <p className="setup-fieldset__intro">
          Obligatoire en mentions légales pour les activités de pose RGE. Si vous n&apos;avez
          pas encore les références, indiquez-le ci-dessous.
        </p>
        <StatusSelect group="assurance" label="Assurance — où en êtes-vous&nbsp;?" />
        <div className="form-grid" data-locked={isLocked("assurance") ? "true" : undefined}>
          <div className="form-group">
            <label className="form-label" htmlFor="assurance_rc_assureur">
              Assureur RC pro
            </label>
            <input
              className="form-input"
              type="text"
              id="assurance_rc_assureur"
              name="assurance_rc_assureur"
              placeholder="Ex&nbsp;: AXA, MMA, Allianz…"
              disabled={isLocked("assurance")}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="assurance_rc_police">
              N° police RC pro
            </label>
            <input
              className="form-input"
              type="text"
              id="assurance_rc_police"
              name="assurance_rc_police"
              disabled={isLocked("assurance")}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="assurance_dec_assureur">
              Assureur décennale
            </label>
            <input
              className="form-input"
              type="text"
              id="assurance_dec_assureur"
              name="assurance_dec_assureur"
              disabled={isLocked("assurance")}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="assurance_dec_police">
              N° police décennale
            </label>
            <input
              className="form-input"
              type="text"
              id="assurance_dec_police"
              name="assurance_dec_police"
              disabled={isLocked("assurance")}
            />
          </div>
          <div className="form-group form-group--full">
            <label className="form-label" htmlFor="assurance_zone">
              Zone géographique couverte
            </label>
            <input
              className="form-input"
              type="text"
              id="assurance_zone"
              name="assurance_zone"
              placeholder="France métropolitaine + DOM-TOM"
              disabled={isLocked("assurance")}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="setup-fieldset">
        <legend>Certifications RGE</legend>
        <p className="setup-fieldset__intro">
          On affiche déjà la mention RGE en tant que pictogramme — on a besoin du n° officiel
          pour les mentions légales et la page Prime CEE.
        </p>
        <StatusSelect group="rge" label="Certificat RGE — où en êtes-vous&nbsp;?" />
        <div className="form-grid" data-locked={isLocked("rge") ? "true" : undefined}>
          <div className="form-group">
            <label className="form-label" htmlFor="rge_organisme">
              Organisme certificateur
            </label>
            <select
              className="form-select"
              id="rge_organisme"
              name="rge_organisme"
              defaultValue=""
              disabled={isLocked("rge")}
            >
              <option value="" disabled>
                Sélectionnez
              </option>
              <option value="Qualibat">Qualibat</option>
              <option value="Qualifelec">Qualifelec</option>
              <option value="Qualit'EnR">Qualit&apos;EnR</option>
              <option value="Eco Artisan">Eco Artisan</option>
              <option value="Cequami">Cequami</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="rge_numero">
              N° de certificat
            </label>
            <input
              className="form-input"
              type="text"
              id="rge_numero"
              name="rge_numero"
              disabled={isLocked("rge")}
            />
          </div>
          <div className="form-group form-group--full">
            <label className="form-label" htmlFor="rge_domaines">
              Domaines couverts
            </label>
            <input
              className="form-input"
              type="text"
              id="rge_domaines"
              name="rge_domaines"
              placeholder="Ex&nbsp;: isolation thermique, bardage, ventilation"
              disabled={isLocked("rge")}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="rge_expiration">
              Date d&apos;expiration
            </label>
            <input
              className="form-input"
              type="date"
              id="rge_expiration"
              name="rge_expiration"
              disabled={isLocked("rge")}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="setup-fieldset">
        <legend>Médiateur de la consommation</legend>
        <p className="setup-fieldset__intro">
          Obligatoire dès lors qu&apos;il y a des particuliers parmi les clients (résidentiel).
          Si vous n&apos;avez pas encore choisi de médiateur, indiquez-le ci-dessous —
          ECOPRORENOVE pourra adhérer à <strong>CNPM Médiation Consommation</strong> sur
          recommandation.
        </p>
        <StatusSelect group="mediateur" label="Médiateur — où en êtes-vous&nbsp;?" />
        <div className="form-grid" data-locked={isLocked("mediateur") ? "true" : undefined}>
          <div className="form-group">
            <label className="form-label" htmlFor="mediateur_nom">
              Nom du médiateur
            </label>
            <input
              className="form-input"
              type="text"
              id="mediateur_nom"
              name="mediateur_nom"
              placeholder="Ex&nbsp;: CNPM Médiation Consommation"
              disabled={isLocked("mediateur")}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="mediateur_contact">
              URL ou adresse
            </label>
            <input
              className="form-input"
              type="text"
              id="mediateur_contact"
              name="mediateur_contact"
              placeholder="https:// ou adresse postale"
              disabled={isLocked("mediateur")}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="setup-fieldset">
        <legend>Hébergeur du site</legend>
        <p className="setup-fieldset__intro">
          Confirmez ou modifiez ces valeurs.
        </p>
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label" htmlFor="hebergeur_nom">
              Hébergeur
            </label>
            <input
              className="form-input"
              type="text"
              id="hebergeur_nom"
              name="hebergeur_nom"
              defaultValue="OVH SAS"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="hebergeur_adresse">
              Adresse hébergeur
            </label>
            <input
              className="form-input"
              type="text"
              id="hebergeur_adresse"
              name="hebergeur_adresse"
              defaultValue="2 rue Kellermann, 59100 Roubaix, France"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="setup-fieldset">
        <legend>Notes libres</legend>
        <div className="form-grid">
          <div className="form-group form-group--full">
            <label className="form-label" htmlFor="notes">
              Quoi que ce soit d&apos;autre à transmettre&nbsp;?
            </label>
            <textarea
              className="form-textarea"
              id="notes"
              name="notes"
              rows={4}
              placeholder="Logos, partenaires, demandes spécifiques, dates prévues pour fournir les infos manquantes…"
            />
          </div>
        </div>
      </fieldset>

      <div className="setup-form__footer">
        <div className="form-consent">
          <input type="checkbox" id="rgpd_consent" name="rgpd_consent" required />
          <label htmlFor="rgpd_consent">
            Je confirme que ces informations peuvent être publiées sur le site
            ecoprorenove.fr (mentions légales, politique de confidentialité, footer). *
          </label>
        </div>
        {fieldError(err, "rgpd_consent") && (
          <p className="setup-error">{fieldError(err, "rgpd_consent")}</p>
        )}
        <button
          type="submit"
          className="btn btn--primary btn--lg form-submit"
          disabled={isPending}
        >
          {isPending ? "Envoi…" : "Envoyer à Influxe"}
        </button>
      </div>
    </form>
  );
}

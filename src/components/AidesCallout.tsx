import Link from "next/link";

export default function AidesCallout() {
  return (
    <aside className="aides-callout fade-in delay-2" aria-label="Aides financières incluses">
      <div className="aides-callout__pointer" aria-hidden="true" />
      <span className="aides-callout__step">Étape 02 — Éligibilité</span>
      <h3 className="aides-callout__title">On vérifie aussi vos aides</h3>
      <p className="aides-callout__text">
        Identification CEE &amp; MaPrimeRénov&apos; incluse dans l&apos;analyse — on monte le
        dossier complet pour vous.
      </p>
      <div className="aides-callout__actions">
        <Link href="/prime-cee" className="aides-callout__btn aides-callout__btn--primary">
          Prime CEE
        </Link>
        <Link href="/ma-prime-renov" className="aides-callout__btn">
          MaPrimeRénov&apos;
        </Link>
      </div>
    </aside>
  );
}

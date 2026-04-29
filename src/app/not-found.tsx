import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable",
  description:
    "La page demandée n'existe pas ou a été déplacée. Retrouvez nos solutions de rénovation énergétique.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found__inner">
          <p className="not-found__eyebrow">Erreur 404</p>
          <h1 className="not-found__title">
            Cette page <em>s&apos;est échappée</em>
            <br />
            par la toiture.
          </h1>
          <p className="not-found__lead">
            Le lien que vous suivez n&apos;existe pas ou a été déplacé.
            Voici par où repartir.
          </p>

          <div className="not-found__actions">
            <Link href="/" className="btn btn--primary btn--lg">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Accueil
            </Link>
            <Link href="/qui-sommes-nous" className="btn btn--secondary">
              Qui sommes-nous
            </Link>
          </div>

          <div className="not-found__links">
            <p className="not-found__links-label">Solutions</p>
            <ul>
              <li><Link href="/isolation-toiture-rampants">Isolation toiture sous rampants</Link></li>
              <li><Link href="/isolation-combles">Isolation des combles</Link></li>
              <li><Link href="/bardage">Bardage fibre-ciment</Link></li>
              <li><Link href="/destratificateur-air">Destratificateur d&apos;air</Link></li>
              <li><Link href="/extracteur-air">Extracteur d&apos;air statique</Link></li>
              <li><Link href="/vmc-double-flux">VMC double flux agricole</Link></li>
            </ul>
            <p className="not-found__links-label">Subvention</p>
            <ul>
              <li><Link href="/prime-cee">Prime CEE</Link></li>
              <li><Link href="/ma-prime-renov">MaPrimeRénov&apos;</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

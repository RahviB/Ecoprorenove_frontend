import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container container--wide">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link href="/" className="navbar__logo">
              <svg className="navbar__logo-mark" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="M10 38 L30 10 L38 10 L18 38 Z" fill="#49a739" />
                <path d="M20 38 L38 14 L38 26 L28 38 Z" fill="#a8e296" />
              </svg>
              <span className="navbar__logo-text">
                ECOPRORE<span>NOVE</span>
              </span>
            </Link>
            <p className="footer__tagline">
              Rénovation énergétique pour les bâtiments tertiaires, résidentiels et
              agricoles — CEE, MaPrimeRénov&apos;, pose RGE.
            </p>
            <div className="footer__contact-line">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a8e296" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.63-.63a2 2 0 0 1 2.11-.45c.9.386 1.86.647 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+33 X XX XX XX XX</span>
            </div>
            <div className="footer__contact-line">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a8e296" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>contact@ecoprorenove.fr</span>
            </div>
          </div>

          <div className="footer__col">
            <p className="footer__col-title">Secteurs</p>
            <ul>
              <li><a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible">Tertiaire</a></li>
              <li><a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible">Résidentiel</a></li>
              <li><a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible">Agricole</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <p className="footer__col-title">Solutions</p>
            <ul>
              <li><Link href="/isolation-toiture-rampants">Isolation toiture</Link></li>
              <li><Link href="/isolation-combles">Isolation combles</Link></li>
              <li><Link href="/bardage">Bardage</Link></li>
              <li><Link href="/destratificateur-air">Destratificateur d&apos;air</Link></li>
              <li><Link href="/extracteur-air">Extracteur d&apos;air</Link></li>
              <li><a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible">VMC Double flux</a></li>
              <li><a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible">Courtage en énergie</a></li>
              <li><Link href="/accompagnement-strategique">Accompagnement stratégique</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <p className="footer__col-title">ECOPRORENOVE</p>
            <ul>
              <li><Link href="/financement-cee">Financement CEE</Link></li>
              <li><a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible">Qui sommes-nous&nbsp;?</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 ECOPRORENOVE — Tous droits réservés</p>
          <div className="footer__legal">
            <a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible">Mentions légales</a>
            <a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible">Politique de confidentialité</a>
            <a href="#" aria-disabled="true" tabIndex={-1} title="Bientôt disponible">RGPD</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

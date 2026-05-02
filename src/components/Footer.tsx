import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container container--wide">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link href="/" className="navbar__logo">
              <Logo size={38} variant="footer" />
            </Link>
            <p className="footer__tagline">
              Rénovation énergétique pour les bâtiments tertiaires, résidentiels et
              agricoles — CEE, MaPrimeRénov&apos;, pose RGE.
            </p>
            <a href="tel:+33619798391" className="footer__contact-line">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a8e296" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.63-.63a2 2 0 0 1 2.11-.45c.9.386 1.86.647 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+33 6 19 79 83 91 <em>· Métropole</em></span>
            </a>
            <a href="tel:+262693546253" className="footer__contact-line">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a8e296" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.63-.63a2 2 0 0 1 2.11-.45c.9.386 1.86.647 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+262 6 93 54 62 53 <em>· La Réunion</em></span>
            </a>
            <a href="mailto:contact@ecoprorenove.fr" className="footer__contact-line">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a8e296" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>contact@ecoprorenove.fr</span>
            </a>
          </div>

          <div className="footer__col">
            <p className="footer__col-title">Secteurs</p>
            <ul>
              <li><Link href="/tertiaire">Tertiaire</Link></li>
              <li><Link href="/residentiel">Résidentiel</Link></li>
              <li><Link href="/agricole">Agricole</Link></li>
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
              <li><Link href="/vmc-double-flux">VMC Double flux</Link></li>
              <li><Link href="/courtage-energie">Courtage en énergie</Link></li>
              <li><Link href="/accompagnement-strategique">Accompagnement stratégique</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <p className="footer__col-title">Subvention</p>
            <ul>
              <li><Link href="/prime-cee">Prime CEE</Link></li>
              <li><Link href="/ma-prime-renov">MaPrimeRénov&apos;</Link></li>
            </ul>
            <p className="footer__col-title" style={{ marginTop: 20 }}>ECOPRORENOVE</p>
            <ul>
              <li><Link href="/qui-sommes-nous">Qui sommes-nous&nbsp;?</Link></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © 2026 ECOPRORENOVE — Tous droits réservés
            <span className="footer__credit">
              {" · Site édité par "}
              <a href="https://influxe.agency" target="_blank" rel="noopener noreferrer">
                Influxe
              </a>
            </span>
          </p>
          <div className="footer__legal">
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

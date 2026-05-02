"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

type Menu = "secteurs" | "solutions" | "subvention" | null;

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<Menu>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  // Close mégamenu on Escape or click outside
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setDrawerOpen(false);
      }
    }
    function onClick(e: MouseEvent) {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) setOpenMenu(null);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  function openOnHover(menu: Exclude<Menu, null>) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  }

  function closeOnLeave() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 180);
  }

  function toggleClick(menu: Exclude<Menu, null>) {
    setOpenMenu((cur) => (cur === menu ? null : menu));
  }

  return (
    <>
      <nav className="navbar" id="navbar" ref={navRef}>
        <div className="container container--wide">
          <div className="navbar__inner">
            <Link href="/" className="navbar__logo" aria-label="ECOPRORENOVE — accueil">
              <Logo size={38} variant="navbar" />
            </Link>

            <div className="navbar__nav">
              {/* Secteurs */}
              <div
                className={`nav-item${openMenu === "secteurs" ? " open" : ""}`}
                data-menu="secteurs"
                onMouseEnter={() => openOnHover("secteurs")}
                onMouseLeave={closeOnLeave}
              >
                <button
                  className="nav-link"
                  aria-haspopup="true"
                  aria-expanded={openMenu === "secteurs"}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleClick("secteurs");
                  }}
                >
                  Secteurs
                  <svg
                    className="nav-link__chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div className="megamenu megamenu--secteurs" role="menu">
                  <div className="megamenu__grid--sectors">
                    <Link href="/tertiaire" className="mm-sector" role="menuitem">
                      <svg className="mm-sector__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="4" y="3" width="16" height="18" rx="1" />
                        <line x1="9" y1="8" x2="9" y2="8.01" />
                        <line x1="15" y1="8" x2="15" y2="8.01" />
                        <line x1="9" y1="12" x2="9" y2="12.01" />
                        <line x1="15" y1="12" x2="15" y2="12.01" />
                        <line x1="9" y1="16" x2="9" y2="16.01" />
                        <line x1="15" y1="16" x2="15" y2="16.01" />
                      </svg>
                      <div className="mm-sector__title">Tertiaire</div>
                      <div className="mm-sector__desc">Bureaux, commerces, santé, enseignement, hôtels</div>
                    </Link>
                    <Link href="/residentiel" className="mm-sector" role="menuitem">
                      <svg className="mm-sector__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 10 L12 3 L21 10 V21 H3 Z" />
                        <path d="M9 21 V14 H15 V21" />
                      </svg>
                      <div className="mm-sector__title">Résidentiel</div>
                      <div className="mm-sector__desc">Copropriétés, bailleurs, particuliers</div>
                    </Link>
                    <Link href="/agricole" className="mm-sector" role="menuitem">
                      <svg className="mm-sector__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 20 V11 L8 7 L13 11 V20 Z" />
                        <path d="M13 20 V14 H21 V20" />
                        <line x1="7" y1="20" x2="7" y2="15" />
                        <line x1="17" y1="20" x2="17" y2="17" />
                      </svg>
                      <div className="mm-sector__title">Agricole</div>
                      <div className="mm-sector__desc">Bâtiments d&apos;élevage, serres, hangars</div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div
                className={`nav-item${openMenu === "solutions" ? " open" : ""}`}
                data-menu="solutions"
                onMouseEnter={() => openOnHover("solutions")}
                onMouseLeave={closeOnLeave}
              >
                <button
                  className="nav-link"
                  aria-haspopup="true"
                  aria-expanded={openMenu === "solutions"}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleClick("solutions");
                  }}
                >
                  Solutions
                  <svg className="nav-link__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div className="megamenu megamenu--solutions" role="menu">
                  <div className="megamenu__section">
                    <div className="megamenu__section-title">Isolation thermique</div>
                    <div className="megamenu__grid">
                      <Link href="/isolation-toiture-rampants" className="mm-link" role="menuitem">
                        <svg className="mm-link__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="3 12 12 4 21 12" />
                          <line x1="3" y1="16" x2="21" y2="16" />
                          <line x1="3" y1="20" x2="21" y2="20" />
                        </svg>
                        Isolation toiture — thermoréflectif
                      </Link>
                      <Link href="/isolation-combles" className="mm-link" role="menuitem">
                        <svg className="mm-link__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 4 L20 10 V20 H4 V10 Z" />
                          <line x1="4" y1="14" x2="20" y2="14" />
                        </svg>
                        Isolation des combles
                      </Link>
                      <Link href="/bardage" className="mm-link" role="menuitem">
                        <svg className="mm-link__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="4" y="3" width="16" height="18" rx="1" />
                          <line x1="4" y1="9" x2="20" y2="9" />
                          <line x1="4" y1="15" x2="20" y2="15" />
                        </svg>
                        Bardage{" "}
                        <span style={{ fontSize: ".6rem", fontWeight: 800, color: "var(--accent)", marginLeft: 4, letterSpacing: ".08em" }}>
                          PREMIUM
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="megamenu__section">
                    <div className="megamenu__section-title">Gestion énergétique &amp; aéraulique</div>
                    <div className="megamenu__grid">
                      <Link href="/destratificateur-air" className="mm-link" role="menuitem">
                        <svg className="mm-link__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="3" />
                          <path d="M12 3 A4 4 0 0 1 12 11" />
                          <path d="M21 12 A4 4 0 0 1 13 12" />
                          <path d="M12 21 A4 4 0 0 1 12 13" />
                          <path d="M3 12 A4 4 0 0 1 11 12" />
                        </svg>
                        Destratificateur d&apos;air
                      </Link>
                      <Link href="/extracteur-air" className="mm-link" role="menuitem">
                        <svg className="mm-link__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="12" cy="12" r="4" />
                          <line x1="12" y1="8" x2="12" y2="16" />
                          <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                        Extracteur d&apos;air
                      </Link>
                      <Link href="/vmc-double-flux" className="mm-link" role="menuitem">
                        <svg className="mm-link__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 8 H12 A4 4 0 0 1 16 12" />
                          <path d="M20 16 H12 A4 4 0 0 1 8 12" />
                          <polyline points="14 6 16 8 14 10" />
                          <polyline points="10 14 8 16 10 18" />
                        </svg>
                        VMC Double flux
                      </Link>
                      <Link href="/courtage-energie" className="mm-link" role="menuitem">
                        <svg className="mm-link__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="3 17 9 11 13 15 21 7" />
                          <polyline points="14 7 21 7 21 14" />
                        </svg>
                        Courtage en énergie
                      </Link>
                    </div>
                  </div>

                  <div className="megamenu__section">
                    <div className="megamenu__section-title">Conseil &amp; pilotage</div>
                    <div className="megamenu__grid">
                      <Link href="/accompagnement-strategique" className="mm-link" role="menuitem">
                        <svg className="mm-link__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polygon points="12 2 15 9 22 9 17 14 18 22 12 18 6 22 7 14 2 9 9 9 12 2" />
                        </svg>
                        Accompagnement stratégique
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subvention */}
              <div
                className={`nav-item${openMenu === "subvention" ? " open" : ""}`}
                data-menu="subvention"
                onMouseEnter={() => openOnHover("subvention")}
                onMouseLeave={closeOnLeave}
              >
                <button
                  className="nav-link"
                  aria-haspopup="true"
                  aria-expanded={openMenu === "subvention"}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleClick("subvention");
                  }}
                >
                  Subvention
                  <svg className="nav-link__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div className="megamenu megamenu--subvention" role="menu">
                  <div className="megamenu__section">
                    <div className="megamenu__section-title">Aides mobilisables</div>
                    <div className="megamenu__grid">
                      <Link href="/prime-cee" className="mm-link" role="menuitem">
                        <svg className="mm-link__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="12" y1="1" x2="12" y2="23" />
                          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                        Prime CEE
                      </Link>
                      <Link href="/ma-prime-renov" className="mm-link" role="menuitem">
                        <svg className="mm-link__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M3 10 L12 3 L21 10 V21 H3 Z" />
                          <path d="M9 21 V14 H15 V21" />
                        </svg>
                        MaPrimeRénov&apos;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="nav-item">
                <Link href="/qui-sommes-nous" className="nav-link">
                  Qui sommes-nous&nbsp;?
                </Link>
              </div>

              <div className="nav-item nav-item--cta" style={{ marginLeft: 10 }}>
                <a href="#contact" className="btn btn--primary navbar__cta">
                  Contact
                </a>
              </div>
            </div>

            <button
              className="nav-toggle"
              aria-label="Ouvrir le menu"
              onClick={() => setDrawerOpen(true)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111a10" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`mobile-drawer${drawerOpen ? " open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setDrawerOpen(false);
        }}
      >
        <div className="mobile-drawer__panel">
          <div className="mobile-drawer__head">
            <Link href="/" className="navbar__logo" onClick={() => setDrawerOpen(false)}>
              <Logo size={36} variant="navbar" />
            </Link>
            <button className="mobile-drawer__close" aria-label="Fermer" onClick={() => setDrawerOpen(false)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111a10" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="mobile-drawer__group">
            <p className="mobile-drawer__group-title">Secteurs</p>
            <Link href="/tertiaire" className="mobile-drawer__link" onClick={() => setDrawerOpen(false)}>Tertiaire</Link>
            <Link href="/residentiel" className="mobile-drawer__link" onClick={() => setDrawerOpen(false)}>Résidentiel</Link>
            <Link href="/agricole" className="mobile-drawer__link" onClick={() => setDrawerOpen(false)}>Agricole</Link>
          </div>

          <div className="mobile-drawer__group">
            <p className="mobile-drawer__group-title">Solutions</p>
            <Link href="/isolation-toiture-rampants" className="mobile-drawer__link" onClick={() => setDrawerOpen(false)}>Isolation toiture</Link>
            <Link href="/isolation-combles" className="mobile-drawer__link" onClick={() => setDrawerOpen(false)}>Isolation combles</Link>
            <Link href="/bardage" className="mobile-drawer__link" onClick={() => setDrawerOpen(false)}>Bardage</Link>
            <Link href="/destratificateur-air" className="mobile-drawer__link" onClick={() => setDrawerOpen(false)}>Destratificateur d&apos;air</Link>
            <Link href="/extracteur-air" className="mobile-drawer__link" onClick={() => setDrawerOpen(false)}>Extracteur d&apos;air</Link>
            <Link href="/vmc-double-flux" className="mobile-drawer__link" onClick={() => setDrawerOpen(false)}>VMC Double flux</Link>
            <Link href="/courtage-energie" className="mobile-drawer__link" onClick={() => setDrawerOpen(false)}>Courtage en énergie</Link>
            <Link href="/accompagnement-strategique" className="mobile-drawer__link" onClick={() => setDrawerOpen(false)}>Accompagnement stratégique</Link>
          </div>

          <div className="mobile-drawer__group">
            <p className="mobile-drawer__group-title">Subvention</p>
            <Link href="/prime-cee" className="mobile-drawer__link" onClick={() => setDrawerOpen(false)}>Prime CEE</Link>
            <Link href="/ma-prime-renov" className="mobile-drawer__link" onClick={() => setDrawerOpen(false)}>MaPrimeRénov&apos;</Link>
          </div>

          <div className="mobile-drawer__group">
            <Link href="/qui-sommes-nous" className="mobile-drawer__link" onClick={() => setDrawerOpen(false)}>Qui sommes-nous&nbsp;?</Link>
          </div>

          <a href="#contact" className="btn btn--primary mobile-drawer__cta" onClick={() => setDrawerOpen(false)}>
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

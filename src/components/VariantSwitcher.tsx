"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Variant = {
  href: string;
  label: string;
  tag: string;
  desc: string;
};

const VARIANTS: Variant[] = [
  { href: "/",   label: "Originale", tag: "v1", desc: "Page d'accueil actuelle (en ligne)" },
  { href: "/v2", label: "Light",     tag: "v2", desc: "Même structure, plus dense (~30% plus court)" },
  { href: "/v3", label: "Medium",    tag: "v3", desc: "5 sections, onglets par secteur" },
  { href: "/v4", label: "Aggressive", tag: "v4", desc: "Bento + parcours horizontal" },
  { href: "/v5", label: "Editorial", tag: "v5", desc: "Format rapport, sommaire latéral" },
  { href: "/v6", label: "Cas concrets", tag: "v6", desc: "Photos chantier, preuves" },
];

const ROUTES_WITH_SWITCHER = new Set(VARIANTS.map((v) => v.href));

export default function VariantSwitcher() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  if (!ROUTES_WITH_SWITCHER.has(pathname)) return null;

  const current = VARIANTS.find((v) => v.href === pathname) ?? VARIANTS[0];

  return (
    <div className={`vsw${open ? " is-open" : ""}`} ref={ref}>
      {open && (
        <div className="vsw__panel" role="dialog" aria-label="Choisir une variante">
          <div className="vsw__head">
            <p className="vsw__eyebrow">Variantes en cours d&apos;exploration</p>
            <p className="vsw__hint">Cliquez pour comparer</p>
          </div>
          <ul className="vsw__list">
            {VARIANTS.map((v) => {
              const active = v.href === pathname;
              return (
                <li key={v.href}>
                  <Link
                    href={v.href}
                    className={`vsw__item${active ? " is-active" : ""}`}
                    onClick={() => setOpen(false)}
                  >
                    <span className="vsw__tag">{v.tag}</span>
                    <span className="vsw__body">
                      <span className="vsw__label">{v.label}</span>
                      <span className="vsw__desc">{v.desc}</span>
                    </span>
                    {active && <span className="vsw__dot" aria-label="Page actuelle" />}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="vsw__foot">Outil temporaire — sera retiré avant la mise en ligne.</p>
        </div>
      )}

      <button
        type="button"
        className="vsw__toggle"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Fermer le sélecteur de variantes" : "Ouvrir le sélecteur de variantes"}
      >
        <span className="vsw__toggle-tag">{current.tag.toUpperCase()}</span>
        <span className="vsw__toggle-label">{current.label}</span>
        <svg
          className={`vsw__toggle-chev${open ? " is-up" : ""}`}
          width="14" height="14" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>
  );
}

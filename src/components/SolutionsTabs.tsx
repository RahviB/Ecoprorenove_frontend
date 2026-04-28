"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

type Sector = "tertiaire" | "residentiel" | "agricole" | "transverse";

type Solution = {
  href: string;
  disabled?: boolean;
  premium?: boolean;
  cee?: boolean;
  icon: ReactNode;
  title: string;
  desc: string;
  sectors: readonly Sector[];
};

type Tab = "tous" | Sector;

const TABS: { id: Tab; label: string; intro: string }[] = [
  { id: "tous", label: "Tous", intro: "Huit offres concrètes qui couvrent l'enveloppe du bâtiment, l'aéraulique et le pilotage énergétique." },
  { id: "tertiaire", label: "Tertiaire", intro: "Bureaux, commerces, santé, enseignement, hôtels — décret tertiaire et continuité d'exploitation." },
  { id: "residentiel", label: "Résidentiel", intro: "Copropriétés, bailleurs, particuliers — cumul CEE + MaPrimeRénov', gestion des syndics." },
  { id: "agricole", label: "Agricole", intro: "Bâtiments d'élevage, serres, hangars — ambiance, hygrométrie, fiches CEE adaptées." },
];

const SECTOR_LABEL: Record<Sector, string> = {
  tertiaire: "Tertiaire",
  residentiel: "Résidentiel",
  agricole: "Agricole",
  transverse: "Transverse",
};

export default function SolutionsTabs({ solutions }: { solutions: Solution[] }) {
  const [active, setActive] = useState<Tab>("tous");

  const isAll = active === "tous";

  const mainCards = isAll
    ? solutions
    : solutions.filter((s) => s.sectors.includes(active));

  const transverseCards = isAll
    ? []
    : solutions.filter(
        (s) => s.sectors.includes("transverse") && !s.sectors.includes(active),
      );

  const intro = TABS.find((t) => t.id === active)?.intro ?? "";

  const renderCard = (s: Solution, hideMeta: boolean) => {
    const cls = `solution-card${s.premium ? " solution-card--premium" : ""}${s.cee ? " solution-card--cee" : ""}`;
    const inner = (
      <>
        {s.premium && <span className="solution-card__badge">Premium</span>}
        <div className="solution-card__icon">{s.icon}</div>
        <h3 className="solution-card__title">{s.title}</h3>
        <p className="solution-card__desc">{s.desc}</p>
        {!hideMeta && (
          <div className="solution-card__meta">
            {s.sectors.map((sec) => (
              <span key={sec} className={`mini-tag${sec === "transverse" ? " mini-tag--accent" : ""}`}>
                {SECTOR_LABEL[sec]}
              </span>
            ))}
          </div>
        )}
      </>
    );
    return s.disabled ? (
      <a
        key={s.title}
        href="#"
        aria-disabled="true"
        tabIndex={-1}
        title="Bientôt disponible"
        className={cls}
        onClick={(e) => e.preventDefault()}
      >
        {inner}
      </a>
    ) : (
      <Link key={s.title} href={s.href} className={cls}>
        {inner}
      </Link>
    );
  };

  return (
    <div className="soltabs">
      <div className="soltabs__bar" role="tablist" aria-label="Filtrer par secteur">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={active === t.id}
            className={`soltabs__tab${active === t.id ? " is-active" : ""}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <p className="soltabs__intro">{intro}</p>

      <div className="soltabs__grid">
        {mainCards.map((s) => renderCard(s, !isAll))}
      </div>

      {transverseCards.length > 0 && (
        <div className="soltabs__transverse">
          <p className="soltabs__transverse-label">Pour tous les secteurs</p>
          <div className="soltabs__transverse-grid">
            {transverseCards.map((s) => renderCard(s, true))}
          </div>
        </div>
      )}
    </div>
  );
}

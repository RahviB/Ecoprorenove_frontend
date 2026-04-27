"use client";

import { useEffect, useState } from "react";

type Chapter = { id: string; num: string; label: string };

export default function ChapterRail({ chapters }: { chapters: Chapter[] }) {
  const [active, setActive] = useState(chapters[0]?.id ?? "");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const els = chapters
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    els.forEach((el) => observer.observe(el));

    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docH > 0 ? Math.min(100, (window.scrollY / docH) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [chapters]);

  return (
    <aside className="rail" aria-label="Sommaire">
      <div className="rail__inner">
        <p className="rail__eyebrow">Le rapport</p>
        <p className="rail__title">
          Rénovation<br />énergétique<span>—</span>2026
        </p>

        <ol className="rail__list">
          {chapters.map((c) => (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className={`rail__item${active === c.id ? " is-active" : ""}`}
              >
                <span className="rail__num">{c.num}</span>
                <span className="rail__label">{c.label}</span>
              </a>
            </li>
          ))}
        </ol>

        <div className="rail__progress" aria-hidden="true">
          <div className="rail__progress-bar" style={{ width: `${progress}%` }} />
        </div>
        <p className="rail__progress-text">
          {Math.round(progress)}% lu
        </p>
      </div>
    </aside>
  );
}

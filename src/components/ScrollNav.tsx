"use client";

import { useEffect, useState } from "react";

export type ScrollNavSection = { id: string; label: string };

type Props = {
  sections: ScrollNavSection[];
  showAfter?: number;
};

export default function ScrollNav({ sections, showAfter = 480 }: Props) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > showAfter);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      className={`scrollnav-side${show ? " is-shown" : ""}`}
      aria-label="Sections de la page"
    >
      <ul>
        {sections.map((s) => (
          <li key={s.id} className={active === s.id ? "is-active" : ""}>
            <a href={`#${s.id}`}>
              <span className="scrollnav-side__dot" aria-hidden="true" />
              <span className="scrollnav-side__label">{s.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

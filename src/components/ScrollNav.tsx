"use client";

import { useEffect, useState } from "react";

type Section = { id: string; label: string };

const SECTIONS: Section[] = [
  { id: "probleme", label: "Le problème" },
  { id: "airflex", label: "Airflex 30" },
  { id: "benefices", label: "Bénéfices" },
  { id: "batiments", label: "Bâtiments" },
  { id: "cee", label: "CEE" },
  { id: "methode", label: "Méthode" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function ScrollNav() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );
    for (const s of SECTIONS) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`scrollnav-side${show ? " is-shown" : ""}`}
      aria-label="Sections de la page"
    >
      <ul>
        {SECTIONS.map((s) => (
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

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "aides-floater-dismissed";

export default function AidesFloater() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      setDismissed(true);
      return;
    }

    const target = document.getElementById("parcours");
    if (!target) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting && entry.intersectionRatio > 0.15);
      },
      { threshold: [0, 0.15, 0.5, 1] },
    );

    observerRef.current.observe(target);

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_KEY, "1");
    }
  };

  if (dismissed) return null;

  return (
    <aside
      className="aides-floater"
      data-visible={visible ? "true" : "false"}
      role="complementary"
      aria-label="Aides financières incluses dans notre accompagnement"
    >
      <button
        type="button"
        className="aides-floater__close"
        aria-label="Fermer"
        onClick={handleDismiss}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div className="aides-floater__head">
        <span className="aides-floater__step">Étape 02</span>
        <h3 className="aides-floater__title">On vérifie vos aides</h3>
      </div>

      <p className="aides-floater__text">
        Identification CEE &amp; MaPrimeRénov&apos; incluse — on monte aussi le dossier.
      </p>

      <div className="aides-floater__actions">
        <Link href="/prime-cee" className="aides-floater__btn aides-floater__btn--primary">
          Prime CEE
        </Link>
        <Link href="/ma-prime-renov" className="aides-floater__btn">
          MaPrimeRénov&apos;
        </Link>
      </div>
    </aside>
  );
}

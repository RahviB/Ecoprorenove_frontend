"use client";

import Link from "next/link";
import { useState } from "react";
import { useConsent } from "./ConsentProvider";

export default function CookieBanner() {
  const { bannerOpen, acceptAll, rejectAll, savePrefs, prefs } = useConsent();
  const [view, setView] = useState<"main" | "details">("main");
  const [draftAnalytics, setDraftAnalytics] = useState(prefs.analytics);
  const [draftMarketing, setDraftMarketing] = useState(prefs.marketing);

  if (!bannerOpen) return null;

  const handleOpenDetails = () => {
    setDraftAnalytics(prefs.analytics);
    setDraftMarketing(prefs.marketing);
    setView("details");
  };

  const handleSave = () => {
    savePrefs({ analytics: draftAnalytics, marketing: draftMarketing });
    setView("main");
  };

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
    >
      <div className="cookie-banner__inner">
        {view === "main" ? (
          <>
            <div className="cookie-banner__text">
              <h2 id="cookie-banner-title" className="cookie-banner__title">
                Vos préférences cookies
              </h2>
              <p>
                Nous utilisons des cookies pour mesurer l&apos;audience du site
                et améliorer votre expérience. Vous pouvez accepter, refuser ou
                personnaliser votre choix à tout moment. Voir notre{" "}
                <Link href="/politique-de-confidentialite">
                  politique de confidentialité
                </Link>
                .
              </p>
            </div>
            <div className="cookie-banner__actions">
              <button
                type="button"
                className="cookie-banner__btn cookie-banner__btn--secondary"
                onClick={rejectAll}
              >
                Refuser
              </button>
              <button
                type="button"
                className="cookie-banner__btn cookie-banner__btn--ghost"
                onClick={handleOpenDetails}
              >
                Personnaliser
              </button>
              <button
                type="button"
                className="cookie-banner__btn cookie-banner__btn--primary"
                onClick={acceptAll}
              >
                Accepter
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="cookie-banner__text">
              <h2 id="cookie-banner-title" className="cookie-banner__title">
                Gérer mes préférences
              </h2>
              <ul className="cookie-banner__categories">
                <li>
                  <div className="cookie-banner__category-head">
                    <span className="cookie-banner__category-name">
                      Strictement nécessaires
                    </span>
                    <span className="cookie-banner__category-always">
                      Toujours actifs
                    </span>
                  </div>
                  <p>
                    Indispensables au fonctionnement du site (mémorisation de
                    session). Exemptés de consentement.
                  </p>
                </li>
                <li>
                  <div className="cookie-banner__category-head">
                    <span className="cookie-banner__category-name">
                      Mesure d&apos;audience
                    </span>
                    <label className="cookie-banner__switch">
                      <input
                        type="checkbox"
                        checked={draftAnalytics}
                        onChange={(e) => setDraftAnalytics(e.target.checked)}
                        aria-label="Activer la mesure d'audience"
                      />
                      <span className="cookie-banner__switch-track" aria-hidden="true" />
                    </label>
                  </div>
                  <p>
                    Statistiques anonymisées de visite (pages consultées, source
                    de trafic) pour améliorer le site.
                  </p>
                </li>
                <li>
                  <div className="cookie-banner__category-head">
                    <span className="cookie-banner__category-name">
                      Marketing & publicité
                    </span>
                    <label className="cookie-banner__switch">
                      <input
                        type="checkbox"
                        checked={draftMarketing}
                        onChange={(e) => setDraftMarketing(e.target.checked)}
                        aria-label="Activer le marketing"
                      />
                      <span className="cookie-banner__switch-track" aria-hidden="true" />
                    </label>
                  </div>
                  <p>
                    Mesure d&apos;efficacité des campagnes publicitaires
                    (Meta, Google Ads). Aucune donnée n&apos;est vendue.
                  </p>
                </li>
              </ul>
            </div>
            <div className="cookie-banner__actions">
              <button
                type="button"
                className="cookie-banner__btn cookie-banner__btn--ghost"
                onClick={() => setView("main")}
              >
                Retour
              </button>
              <button
                type="button"
                className="cookie-banner__btn cookie-banner__btn--primary"
                onClick={handleSave}
              >
                Enregistrer mes choix
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

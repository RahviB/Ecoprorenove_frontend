"use client";

import { useConsent } from "./ConsentProvider";

export default function ManageCookiesButton() {
  const { openBanner } = useConsent();
  return (
    <button
      type="button"
      onClick={openBanner}
      className="footer__manage-cookies"
    >
      Gérer mes cookies
    </button>
  );
}

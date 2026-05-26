"use client";

import Script from "next/script";
import { useConsent } from "./ConsentProvider";

// Container is hard-coded — same ID on staging and production for now.
// Override via NEXT_PUBLIC_GTM_ID env var if a separate staging container
// is created later.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "GTM-KM9MH2FG";

export default function GoogleTagManager() {
  const { status, prefs } = useConsent();

  // Only load the GTM container once the user has resolved consent AND
  // accepted at least one category. A full "Refuser" never loads the script.
  const shouldLoad =
    status === "resolved" && (prefs.analytics || prefs.marketing);

  if (!shouldLoad) return null;

  return (
    <>
      <Script
        id="gtm-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  );
}

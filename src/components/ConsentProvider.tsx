"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  ACCEPT_ALL_PREFS,
  DEFAULT_PREFS,
  type ConsentPrefs,
  readConsent,
  writeConsent,
} from "@/lib/consent";
import { pushDataLayer } from "@/lib/analytics";

type ConsentStatus = "pending" | "resolved";

type ConsentContextValue = {
  status: ConsentStatus;
  prefs: ConsentPrefs;
  bannerOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePrefs: (prefs: ConsentPrefs) => void;
  openBanner: () => void;
  closeBanner: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

// Push Google Consent Mode v2 update so any tags configured inside GTM
// (GA4, Google Ads, Meta Pixel via tag template) can react accordingly.
function pushConsentUpdate(prefs: ConsentPrefs) {
  pushDataLayer({
    event: "consent_update",
    consent: {
      analytics_storage: prefs.analytics ? "granted" : "denied",
      ad_storage: prefs.marketing ? "granted" : "denied",
      ad_user_data: prefs.marketing ? "granted" : "denied",
      ad_personalization: prefs.marketing ? "granted" : "denied",
    },
  });
}

export default function ConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [status, setStatus] = useState<ConsentStatus>("pending");
  const [prefs, setPrefs] = useState<ConsentPrefs>(DEFAULT_PREFS);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    const existing = readConsent();
    if (existing) {
      setPrefs(existing.prefs);
      setStatus("resolved");
      pushConsentUpdate(existing.prefs);
    } else {
      setBannerOpen(true);
    }
  }, []);

  const acceptAll = useCallback(() => {
    writeConsent(ACCEPT_ALL_PREFS);
    setPrefs(ACCEPT_ALL_PREFS);
    setStatus("resolved");
    setBannerOpen(false);
    pushConsentUpdate(ACCEPT_ALL_PREFS);
  }, []);

  const rejectAll = useCallback(() => {
    writeConsent(DEFAULT_PREFS);
    setPrefs(DEFAULT_PREFS);
    setStatus("resolved");
    setBannerOpen(false);
    pushConsentUpdate(DEFAULT_PREFS);
  }, []);

  const savePrefs = useCallback((next: ConsentPrefs) => {
    writeConsent(next);
    setPrefs(next);
    setStatus("resolved");
    setBannerOpen(false);
    pushConsentUpdate(next);
  }, []);

  const openBanner = useCallback(() => setBannerOpen(true), []);
  const closeBanner = useCallback(() => setBannerOpen(false), []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      status,
      prefs,
      bannerOpen,
      acceptAll,
      rejectAll,
      savePrefs,
      openBanner,
      closeBanner,
    }),
    [status, prefs, bannerOpen, acceptAll, rejectAll, savePrefs, openBanner, closeBanner],
  );

  return (
    <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
  );
}

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent must be used within ConsentProvider");
  }
  return ctx;
}

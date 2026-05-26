// Consent storage utilities — pure module, no React.
// Stores user's cookie/tracking choice in localStorage with a 13-month expiry
// as required by CNIL guidance.

export type ConsentCategory = "analytics" | "marketing";

export type ConsentPrefs = {
  analytics: boolean;
  marketing: boolean;
};

export type ConsentRecord = {
  prefs: ConsentPrefs;
  savedAt: number;
  version: number;
};

export const CONSENT_STORAGE_KEY = "ecopro_consent_v1";
export const CONSENT_VERSION = 1;
export const CONSENT_MAX_AGE_MS = 13 * 30 * 24 * 60 * 60 * 1000; // ≈ 13 months

export const DEFAULT_PREFS: ConsentPrefs = {
  analytics: false,
  marketing: false,
};

export const ACCEPT_ALL_PREFS: ConsentPrefs = {
  analytics: true,
  marketing: true,
};

export function readConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (
      !parsed ||
      typeof parsed.savedAt !== "number" ||
      parsed.version !== CONSENT_VERSION
    ) {
      return null;
    }
    if (Date.now() - parsed.savedAt > CONSENT_MAX_AGE_MS) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(prefs: ConsentPrefs): ConsentRecord {
  const record: ConsentRecord = {
    prefs,
    savedAt: Date.now(),
    version: CONSENT_VERSION,
  };
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
    } catch {
      // Storage unavailable (private mode / quota) — banner re-appears next visit.
    }
  }
  return record;
}

export function clearConsent(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch {
    // ignore
  }
}

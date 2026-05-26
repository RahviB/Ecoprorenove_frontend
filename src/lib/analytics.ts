// dataLayer event helpers.
// Pushing to window.dataLayer is safe even if GTM hasn't loaded yet —
// GTM picks up pre-existing events on init. If GTM never loads (user
// refused), events queue in memory and are discarded on unload.

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function pushDataLayer(event: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

export function trackFormSubmit(source: string): void {
  pushDataLayer({
    event: "form_submit",
    form_source: source,
  });
}

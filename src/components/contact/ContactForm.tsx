"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/lib/contact-action";

const INITIAL_STATE: ContactState = { ok: null, message: "" };

export default function ContactForm({
  source,
  children,
}: {
  source: string;
  children: React.ReactNode;
}) {
  const [state, action, pending] = useActionState(submitContact, INITIAL_STATE);

  if (state.ok) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polyline points="9 12 12 15 17 9" />
        </svg>
        <h3>Demande envoyée</h3>
        <p>{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate aria-busy={pending || undefined}>
      <input type="hidden" name="_source" value={source} />
      {state.ok === false && state.message && (
        <div className="form-alert" role="alert">
          {state.message}
        </div>
      )}
      <fieldset disabled={pending} style={{ border: 0, padding: 0, margin: 0 }}>
        {children}
      </fieldset>
    </form>
  );
}

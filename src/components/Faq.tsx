"use client";

import { useState } from "react";

export type FaqEntry = {
  q: string;
  a: React.ReactNode;
};

export default function Faq({ items }: { items: FaqEntry[] }) {
  const [openSet, setOpenSet] = useState<Set<number>>(() => new Set());

  function toggle(idx: number) {
    setOpenSet((cur) => {
      const next = new Set(cur);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  }

  return (
    <>
      {items.map((item, idx) => {
        const isOpen = openSet.has(idx);
        return (
          <div key={idx} className={`faq-item${isOpen ? " open" : ""}`}>
            <button
              type="button"
              className="faq-item__q"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              style={{ width: "100%", background: "transparent", border: "none" }}
            >
              <span className="faq-item__q-text">{item.q}</span>
              <div className="faq-item__icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#357a28" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
            </button>
            <div className="faq-item__a">
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  /** Format with French thin-space thousands (e.g., 40 000) */
  thinSpace?: boolean;
  /** Decimals to keep (default 0) */
  decimals?: number;
};

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function formatNumber(value: number, decimals: number, thinSpace: boolean) {
  const rounded = Number(value.toFixed(decimals));
  let str = decimals > 0 ? rounded.toFixed(decimals).replace(".", ",") : String(Math.round(rounded));
  if (thinSpace) {
    // group thousands with U+2009 thin-space (matches the design's &thinsp;)
    const [intPart, decPart] = str.split(",");
    str = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + (decPart ? "," + decPart : "");
  }
  return str;
}

export default function CountUp({
  end,
  duration = 1200,
  prefix = "",
  suffix = "",
  thinSpace = false,
  decimals = 0,
}: Props) {
  const elRef = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState<string>(() => formatNumber(0, decimals, thinSpace));
  const startedRef = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(formatNumber(end, decimals, thinSpace));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const startTime = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - startTime) / duration);
              const value = end * easeOutCubic(t);
              setDisplay(formatNumber(value, decimals, thinSpace));
              if (t < 1) requestAnimationFrame(tick);
              else setDisplay(formatNumber(end, decimals, thinSpace));
            };
            requestAnimationFrame(tick);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, decimals, thinSpace]);

  return (
    <span ref={elRef} className="count-up" aria-label={`${prefix}${formatNumber(end, decimals, thinSpace)}${suffix}`}>
      {prefix}
      <span aria-hidden="true">{display}</span>
      {suffix}
    </span>
  );
}

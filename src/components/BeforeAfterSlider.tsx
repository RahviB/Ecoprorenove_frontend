"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  /** Initial divider position 0-100. */
  initial?: number;
};

const clamp = (v: number, min = 0, max = 100) => Math.max(min, Math.min(max, v));

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = "Avant",
  afterLabel = "Après",
  initial = 50,
}: Props) {
  const [pos, setPos] = useState(initial);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(clamp(next));
  }, []);

  // Pointer drag
  useEffect(() => {
    function onMove(e: PointerEvent) {
      if (!draggingRef.current) return;
      e.preventDefault();
      setFromClientX(e.clientX);
    }
    function onUp() {
      draggingRef.current = false;
    }
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [setFromClientX]);

  // Click anywhere on track to jump (and start drag)
  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    draggingRef.current = true;
    setFromClientX(e.clientX);
  }

  // Keyboard support on the knob
  function onKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPos((p) => clamp(p - (e.shiftKey ? 10 : 2)));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPos((p) => clamp(p + (e.shiftKey ? 10 : 2)));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPos(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPos(100);
    }
  }

  return (
    <div
      ref={containerRef}
      className="ba-slider"
      onPointerDown={onPointerDown}
      role="group"
      aria-label="Comparateur avant / après — faire glisser le séparateur"
    >
      {/* AFTER (full background) */}
      <div className="ba-slider__layer">
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          priority={false}
        />
      </div>

      {/* BEFORE (clipped to position) */}
      <div
        className="ba-slider__layer ba-slider__layer--before"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        aria-hidden="true"
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
        />
      </div>

      <span className="ba-slider__label ba-slider__label--before">{beforeLabel}</span>
      <span className="ba-slider__label ba-slider__label--after">{afterLabel}</span>

      {/* Divider line + knob */}
      <div className="ba-slider__handle" style={{ left: `${pos}%` }}>
        <button
          type="button"
          className="ba-slider__knob"
          aria-label="Séparateur avant / après"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-orientation="horizontal"
          role="slider"
          onKeyDown={onKeyDown}
          onPointerDown={(e) => {
            e.stopPropagation();
            draggingRef.current = true;
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 6 9 12 15 18" />
            <polyline points="9 6 15 12 9 18" transform="translate(-6 0)" />
          </svg>
        </button>
      </div>

      <span className="ba-slider__hint">Glisser pour comparer</span>
    </div>
  );
}

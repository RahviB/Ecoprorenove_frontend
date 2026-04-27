"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimations() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      const layers = [
        { selector: ".hero__content", yPercent: -10 },
        { selector: ".hero__photo-frame", yPercent: -5 },
        { selector: ".hero__stat-card", yPercent: -55 },
        { selector: ".hero__badge-top", yPercent: -45 },
      ];

      layers.forEach(({ selector, yPercent }) => {
        const el = document.querySelector(selector);
        if (!el) return;
        gsap.to(selector, {
          yPercent,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}

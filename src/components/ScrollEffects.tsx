"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Fade-in observer — short-circuit if user prefers reduced motion
    if (reduced) {
      document.querySelectorAll(".fade-in").forEach((el) => el.classList.add("visible"));
    }

    const observer = !reduced
      ? new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer?.unobserve(entry.target);
              }
            }
          },
          { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        )
      : null;

    if (observer) {
      document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    }

    // Re-observe new fade-ins after route changes
    const mo = new MutationObserver(() => {
      const targets = document.querySelectorAll(".fade-in:not(.visible)");
      if (reduced) {
        targets.forEach((el) => el.classList.add("visible"));
      } else if (observer) {
        targets.forEach((el) => observer.observe(el));
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // Navbar shadow on scroll
    const navbar = document.getElementById("navbar");
    function onScroll() {
      if (!navbar) return;
      navbar.style.boxShadow = window.scrollY > 10 ? "0 2px 20px rgba(17,26,16,.09)" : "none";
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer?.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}

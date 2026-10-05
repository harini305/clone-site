"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger } from "@/animations/gsap";
import { DISTANCE, DISTANCE_MOBILE, MEDIA } from "@/animations/presets";
import { setupReveals, setupReducedReveals } from "@/animations/useReveal";
import { setupParallax, setupHero } from "@/animations/useParallax";
import { splitHeadings, animateSplitHeadings } from "@/animations/useSplitHeading";

/**
 * Wires the declarative data-attributes used by server components
 * (data-reveal, data-stagger, data-reveal-image, data-split, data-parallax,
 * data-hero, data-count) to GSAP + ScrollTrigger, once per route.
 */
export default function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.getElementById("main");
    if (!root) return undefined;

    const reduce = window.matchMedia(MEDIA.reduce).matches;
    const reverts = reduce ? [] : splitHeadings(root);
    const mm = gsap.matchMedia();

    mm.add(
      { desktop: MEDIA.desktop, mobile: MEDIA.mobile, reduce: MEDIA.reduce },
      (ctx) => {
        const { desktop, reduce: reduced } = ctx.conditions;
        if (reduced) {
          setupReducedReveals(root);
          return;
        }
        setupHero(root, { desktop });
        animateSplitHeadings(root);
        setupReveals(root, { distance: desktop ? DISTANCE : DISTANCE_MOBILE });
        if (desktop) setupParallax(root);
      }
    );

    const refresh = () => ScrollTrigger.refresh();
    const timer = window.setTimeout(refresh, 700);
    window.addEventListener("load", refresh);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", refresh);
      mm.revert();
      reverts.forEach((revert) => revert());
    };
  }, [pathname]);

  return null;
}

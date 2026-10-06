"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger } from "@/animations/gsap";
import { DISTANCE, DISTANCE_MOBILE, MEDIA } from "@/animations/presets";
import { setupAutoReveals, setupReveals, setupReducedReveals } from "@/animations/useReveal";
import { setupParallax, setupHero } from "@/animations/useParallax";
import { animateSplitHeadings } from "@/animations/useSplitHeading";

/**
 * Wires the declarative data-attributes used by server components
 * (data-reveal, data-stagger, data-reveal-image, data-split, data-parallax,
 * data-hero) to GSAP + ScrollTrigger, once per route.
 */
export default function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Tells the failsafe in layout.jsx that reveals are being handled.
    window.__blyMotion = true;
    const root = document.getElementById("main");
    if (!root) return undefined;

    const mm = gsap.matchMedia();
    let raf2 = 0;
    // Wait two frames after a route change so the new page is painted and the
    // router has finished its scroll (to the top or to a #hash) before
    // ScrollTrigger measures anything.
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        mm.add(
          { desktop: MEDIA.desktop, mobile: MEDIA.mobile, reduce: MEDIA.reduce },
          (ctx) => {
            const { desktop, reduce: reduced } = ctx.conditions;
            if (reduced) {
              setupReducedReveals(root);
              return;
            }
            const distance = desktop ? DISTANCE : DISTANCE_MOBILE;
            setupHero(root, { desktop });
            animateSplitHeadings(root, { distance });
            setupReveals(root, { distance });
            setupAutoReveals(root, { distance });
            if (desktop) setupParallax(root);
          }
        );
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    const timer = window.setTimeout(refresh, 700);
    window.addEventListener("load", refresh);

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      window.clearTimeout(timer);
      window.removeEventListener("load", refresh);
      mm.revert();
    };
  }, [pathname]);

  return null;
}

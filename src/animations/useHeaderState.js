"use client";

import { useEffect, useState } from "react";
import { ScrollTrigger } from "./gsap";

/**
 * Tracks whether the page has scrolled past the hero edge, via ScrollTrigger.
 * Returns { scrolled, hidden } — hidden is true while scrolling down quickly
 * deep into the page, so the header gets out of the way of the content.
 */
export function useHeaderState(pathname) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      start: 60,
      end: "max",
      onUpdate: (self) => {
        setScrolled(self.scroll() > 60);
        const deep = self.scroll() > window.innerHeight * 0.9;
        if (self.direction === 1 && deep) setHidden(true);
        else if (self.direction === -1) setHidden(false);
      },
      onLeaveBack: () => {
        setScrolled(false);
        setHidden(false);
      },
    });
    // Sync once after route change (scroll position may have reset).
    const raf = requestAnimationFrame(() => {
      setScrolled(window.scrollY > 60);
      setHidden(false);
    });
    return () => {
      cancelAnimationFrame(raf);
      trigger.kill();
    };
  }, [pathname]);

  // Expose for CSS (e.g. sticky in-page nav sits below the visible header).
  useEffect(() => {
    document.documentElement.dataset.header = hidden ? "hidden" : "shown";
  }, [hidden]);

  return { scrolled, hidden };
}

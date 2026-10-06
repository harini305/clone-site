"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "./gsap";

/**
 * Tracks whether the page has scrolled past the hero edge, via ScrollTrigger.
 * Returns { scrolled, hidden } — hidden is true while scrolling down deep into
 * the page. State only changes when a value actually flips, so the header
 * never re-renders on ordinary scroll frames.
 */
export function useHeaderState(pathname) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const current = useRef({ scrolled: false, hidden: false });

  useEffect(() => {
    const apply = (nextScrolled, nextHidden) => {
      if (current.current.scrolled !== nextScrolled) {
        current.current.scrolled = nextScrolled;
        setScrolled(nextScrolled);
      }
      if (current.current.hidden !== nextHidden) {
        current.current.hidden = nextHidden;
        setHidden(nextHidden);
      }
    };

    // Jumps to a #section or the page top (bly:show-header from SmoothScroll)
    // keep the header shown for the length of the glide, so the target
    // heading isn't left under an empty band where the header was.
    let holdUntil = 0;
    const onShow = () => {
      holdUntil = performance.now() + 1400;
      apply(window.scrollY > 60, false);
    };
    window.addEventListener("bly:show-header", onShow);

    const trigger = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const y = self.scroll();
        const deep = y > window.innerHeight * 0.9;
        let nextHidden = current.current.hidden;
        if (performance.now() < holdUntil) nextHidden = false;
        else if (self.direction === 1 && deep) nextHidden = true;
        else if (self.direction === -1 || !deep) nextHidden = false;
        apply(y > 60, nextHidden);
      },
    });

    // Sync once after route change (scroll position may have reset).
    const raf = requestAnimationFrame(() => apply(window.scrollY > 60, false));
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("bly:show-header", onShow);
      trigger.kill();
    };
  }, [pathname]);

  // Expose for CSS (e.g. sticky in-page nav sits below the visible header).
  useEffect(() => {
    document.documentElement.dataset.header = hidden ? "hidden" : "shown";
  }, [hidden]);

  return { scrolled, hidden };
}

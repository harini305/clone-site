"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";

/**
 * Lightweight scroll-snap carousel — native touch scrolling,
 * plus previous/next buttons for mouse & keyboard users.
 */
export default function Carousel({ children, label, tone = "dark", slideClassName = "" }) {
  const trackRef = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scroll = (direction) => {
    const el = trackRef.current;
    const slide = el?.firstElementChild;
    if (!el || !slide) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * (slide.offsetWidth + gap), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className={`${styles.carousel} ${styles[tone]}`} role="region" aria-roledescription="carousel" aria-label={label}>
      <div className={styles.track} ref={trackRef} tabIndex={0}>
        {Children.map(children, (child, index) => (
          <div
            className={`${styles.slide} ${slideClassName}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${Children.count(children)}`}
          >
            {child}
          </div>
        ))}
      </div>
      <div className={styles.controls}>
        <button type="button" className={styles.control} onClick={() => scroll(-1)} disabled={edges.start} aria-label="Previous slide">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="M11 4 6 9l5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <button type="button" className={styles.control} onClick={() => scroll(1)} disabled={edges.end} aria-label="Next slide">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path d="m7 4 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

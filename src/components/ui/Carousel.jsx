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

  const frame = useRef(0);
  const update = useCallback(() => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const el = trackRef.current;
      if (!el) return;
      const start = el.scrollLeft <= 4;
      const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      setEdges((prev) => (prev.start === start && prev.end === end ? prev : { start, end }));
    });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame.current);
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  // Always land exactly on a slide's start edge, so no card is left cut off.
  const scroll = (direction) => {
    const el = trackRef.current;
    const slides = el ? Array.from(el.children) : [];
    if (!slides.length) return;
    const origin = slides[0].offsetLeft;
    const positions = slides.map((s) => s.offsetLeft - origin);
    let current = 0;
    positions.forEach((p, i) => {
      if (Math.abs(p - el.scrollLeft) < Math.abs(positions[current] - el.scrollLeft)) current = i;
    });
    const maxScroll = el.scrollWidth - el.clientWidth;
    const target = Math.min(Math.max(current + direction, 0), slides.length - 1);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: Math.min(positions[target], maxScroll), behavior: reduce ? "auto" : "smooth" });
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

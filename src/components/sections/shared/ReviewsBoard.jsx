"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/animations/gsap";
import Button from "@/components/ui/Button";
import TestimonialCard from "./TestimonialCard";
import styles from "./ReviewsBoard.module.css";

const PAGE = 9;

/**
 * Filterable masonry of every testimonial; cards fade in on filter change.
 * Shows 9 at a time with a "Show more stories" button, so the page stays a
 * comfortable length (especially on phones).
 */
export default function ReviewsBoard({ testimonials, categories }) {
  const [filter, setFilter] = useState("all");
  const [shown, setShown] = useState(PAGE);
  const gridRef = useRef(null);
  const first = useRef(true);
  const matching = filter === "all" ? testimonials : testimonials.filter((t) => t.category === filter);
  const visible = matching.slice(0, shown);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.fromTo(
      gridRef.current.children,
      { autoAlpha: 0, y: reduce ? 0 : 20 },
      { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.05, ease: "power3.out", clearProps: "transform" }
    );
  }, [filter]);

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filter reviews">
        {categories.map((c) => {
          const count = c.key === "all" ? testimonials.length : testimonials.filter((t) => t.category === c.key).length;
          return (
            <button
              key={c.key}
              type="button"
              className={`${styles.filter} ${filter === c.key ? styles.active : ""}`}
              aria-pressed={filter === c.key}
              onClick={() => {
                setFilter(c.key);
                setShown(PAGE);
              }}
            >
              {c.label} <span>{count}</span>
            </button>
          );
        })}
      </div>
      <p className="visually-hidden" aria-live="polite">
        Showing {visible.length} of {matching.length} reviews
      </p>
      <div ref={gridRef} className={styles.grid}>
        {visible.map((t) => (
          <div key={t.id} className={styles.cell}>
            <TestimonialCard testimonial={t} />
          </div>
        ))}
      </div>
      {matching.length > shown && (
        <div className="cta-row cta-row--center">
          <Button variant="outline" onClick={() => setShown((n) => n + PAGE)}>
            Show more stories ({matching.length - shown} more)
          </Button>
        </div>
      )}
    </>
  );
}

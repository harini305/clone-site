"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/animations/gsap";
import TestimonialCard from "./TestimonialCard";
import styles from "./ReviewsBoard.module.css";

/** Filterable masonry of every testimonial; cards fade in on filter change. */
export default function ReviewsBoard({ testimonials, categories }) {
  const [filter, setFilter] = useState("all");
  const gridRef = useRef(null);
  const first = useRef(true);
  const visible = filter === "all" ? testimonials : testimonials.filter((t) => t.category === filter);

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
              onClick={() => setFilter(c.key)}
            >
              {c.label} <span>{count}</span>
            </button>
          );
        })}
      </div>
      <p className="visually-hidden" aria-live="polite">
        Showing {visible.length} reviews
      </p>
      <div ref={gridRef} className={styles.grid}>
        {visible.map((t) => (
          <div key={t.id} className={styles.cell}>
            <TestimonialCard testimonial={t} />
          </div>
        ))}
      </div>
    </>
  );
}

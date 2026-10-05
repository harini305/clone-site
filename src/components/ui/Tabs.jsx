"use client";

import { useEffect, useId, useRef, useState } from "react";
import { gsap } from "@/animations/gsap";
import styles from "./Tabs.module.css";

/**
 * Accessible tabs (roving tabindex, arrow keys). Panel content cross-fades.
 * tabs: [{ key, label, content }]
 */
export default function Tabs({ tabs, label, className = "" }) {
  const id = useId().replace(/:/g, "");
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const panelRef = useRef(null);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.fromTo(
      panelRef.current,
      { autoAlpha: 0, y: reduce ? 0 : 16 },
      { autoAlpha: 1, y: 0, duration: reduce ? 0.2 : 0.7, ease: "power3.out" }
    );
  }, [active]);

  const onKeyDown = (event) => {
    const last = tabs.length - 1;
    let next = null;
    if (event.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (event.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;
    if (next !== null) {
      event.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <div className={`${styles.tabs} ${className}`}>
      <div className={styles.list} role="tablist" aria-label={label} onKeyDown={onKeyDown}>
        {tabs.map((tab, index) => (
          <button
            key={tab.key}
            ref={(el) => (tabRefs.current[index] = el)}
            type="button"
            role="tab"
            id={`${id}-tab-${tab.key}`}
            aria-selected={active === index}
            aria-controls={`${id}-panel`}
            tabIndex={active === index ? 0 : -1}
            className={`${styles.tab} ${active === index ? styles.active : ""}`}
            onClick={() => setActive(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        ref={panelRef}
        className={styles.panel}
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${tabs[active].key}`}
        tabIndex={0}
      >
        {tabs[active].content}
      </div>
    </div>
  );
}

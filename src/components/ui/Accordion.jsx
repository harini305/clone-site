"use client";

import { useEffect, useId, useRef, useState } from "react";
import { gsap } from "@/animations/gsap";
import styles from "./Accordion.module.css";

function AccordionItem({ item, isOpen, onToggle, id }) {
  const panelRef = useRef(null);
  const first = useRef(true);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (first.current) {
      first.current = false;
      gsap.set(panel, { height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 });
      return;
    }
    gsap.to(panel, {
      height: isOpen ? "auto" : 0,
      opacity: isOpen ? 1 : 0,
      duration: reduce ? 0 : 0.6,
      ease: "power3.inOut",
    });
  }, [isOpen]);

  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ""}`}>
      <h3 className={styles.heading}>
        <button
          type="button"
          className={styles.trigger}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          id={`${id}-trigger`}
          onClick={onToggle}
        >
          <span>{item.q}</span>
          <span className={styles.icon} aria-hidden="true" />
        </button>
      </h3>
      <div
        ref={panelRef}
        className={styles.panel}
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        inert={!isOpen}
      >
        <div className={styles.body}>
          {(Array.isArray(item.a) ? item.a : [item.a]).map((p, i) =>
            typeof p === "string" ? <p key={i}>{p}</p> : <div key={i}>{p}</div>
          )}
        </div>
      </div>
    </div>
  );
}

/** Accessible accordion with GSAP height + opacity animation. */
export default function Accordion({ items, defaultOpen = 0, single = true, tone = "dark" }) {
  const baseId = useId().replace(/:/g, "");
  const [open, setOpen] = useState(() => (defaultOpen === null ? [] : [defaultOpen]));

  const toggle = (index) =>
    setOpen((current) => {
      if (current.includes(index)) return current.filter((i) => i !== index);
      return single ? [index] : [...current, index];
    });

  return (
    <div className={`${styles.accordion} ${styles[tone]}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.q}
          item={item}
          id={`${baseId}-${index}`}
          isOpen={open.includes(index)}
          onToggle={() => toggle(index)}
        />
      ))}
    </div>
  );
}

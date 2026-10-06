"use client";

import { useId, useState } from "react";
import styles from "./ShowMore.module.css";

/**
 * “Show more” expander for long-form copy. The full text is always in the
 * HTML (search engines and no-JS visitors get it); it is only collapsed
 * visually and taken out of the tab order until opened.
 */
export default function ShowMore({ children, more = "Show more", less = "Show less", tone = "dark" }) {
  const id = useId().replace(/:/g, "");
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.wrap} ${styles[tone]} ${open ? styles.open : ""}`}>
      <div className={styles.panel} id={`${id}-more`} inert={!open}>
        <div className={styles.inner}>{children}</div>
      </div>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls={`${id}-more`}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? less : more}
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path d="m3 5 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

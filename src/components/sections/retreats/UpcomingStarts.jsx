"use client";

import { useSyncExternalStore } from "react";
import styles from "./UpcomingStarts.module.css";

const fmt = new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" });

function nextStarts(startDays, nights, count) {
  const out = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 1);
  while (out.length < count) {
    if (startDays.includes(d.getDay())) {
      const end = new Date(d);
      end.setDate(end.getDate() + nights);
      out.push({ start: new Date(d), end });
    }
    d.setDate(d.getDate() + 1);
  }
  return out;
}

const subscribe = () => () => {};

/**
 * Retreats start on fixed weekdays, so upcoming dates are generated in the
 * visitor’s browser (always current). Server render shows the weekly rule.
 */
export default function UpcomingStarts({ startDays, nights, count = 8, label }) {
  const isClient = useSyncExternalStore(subscribe, () => true, () => false);
  const dates = isClient ? nextStarts(startDays, nights, count) : [];

  return (
    <div className={styles.wrap}>
      <p className={styles.rule}>{label}</p>
      {isClient && (
        <ul className={styles.list} aria-label="Upcoming start dates">
          {dates.map(({ start, end }) => (
            <li key={start.toISOString()} className={styles.item}>
              <span className={styles.dot} aria-hidden="true" />
              <span className={styles.start}>{fmt.format(start)}</span>
              <span className={styles.end}>→ {fmt.format(end)}</span>
            </li>
          ))}
        </ul>
      )}
      <p className={styles.note}>Groups are limited to 16 guests — message us to confirm availability for your date.</p>
    </div>
  );
}

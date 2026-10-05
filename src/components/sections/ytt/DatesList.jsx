import Button from "@/components/ui/Button";
import styles from "./DatesList.module.css";

/** Upcoming 225-hour YTT cohorts. */
export default function DatesList({ dates }) {
  return (
    <ul className={styles.list} data-stagger>
      {dates.map((d) => (
        <li key={d.start} className={styles.row}>
          <div className={styles.when}>
            <span className={styles.start}>{d.start}</span>
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
            <span className={styles.start}>{d.end}</span>
          </div>
          <div className={styles.meta}>
            <span>225 Hr. Yoga &amp; Meditation Teacher Training</span>
            <span>
              {d.days} · Teachers: {d.teachers}
            </span>
          </div>
          <Button href="/contact" variant="outline" size="sm">
            Reserve
          </Button>
        </li>
      ))}
    </ul>
  );
}

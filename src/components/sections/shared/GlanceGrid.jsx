import Link from "next/link";
import styles from "./GlanceGrid.module.css";

/** “At a glance” facts grid with hairline dividers. */
export default function GlanceGrid({ items, columns = 3, tone = "light" }) {
  return (
    <dl className={`${styles.grid} ${styles[`cols${columns}`]} ${styles[tone]}`} data-stagger>
      {items.map((item, index) => (
        <div key={item.title} className={styles.item}>
          <span className={styles.index} aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <dt className={styles.title}>{item.title}</dt>
          <dd className={styles.text}>
            {item.text}
            {item.href && (
              <Link href={item.href} className={styles.link}>
                {item.link || "Learn more"} <span aria-hidden="true">→</span>
              </Link>
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

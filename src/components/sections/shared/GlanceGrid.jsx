import Link from "next/link";
import styles from "./GlanceGrid.module.css";

/**
 * “At a glance” facts grid with hairline dividers.
 * variant="cards" shows each fact as a card; swipe (default for 4+ facts)
 * turns the grid into a swipe carousel of cards on phones.
 * An item with a `stat` leads with that figure: the title becomes a small
 * label above it and the text a short supporting line.
 */
export default function GlanceGrid({ items, columns = 3, tone = "light", variant = "lines", swipe = items.length > 3 }) {
  return (
    <dl
      className={`${styles.grid} ${styles[`cols${columns}`]} ${styles[tone]} ${styles[variant]} ${swipe ? "swipe-mobile" : ""}`}
      data-stagger
    >
      {items.map((item, index) => {
        const external = item.href && /^https?:/.test(item.href);
        const label = (
          <>
            {item.link || "Learn more"}&nbsp;<span aria-hidden="true">→</span>
          </>
        );
        return (
          <div key={item.title} className={`${styles.item} ${item.stat ? styles.hasStat : ""}`}>
            {!item.stat && (
              <span className={styles.index} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
            <dt className={styles.title}>{item.title}</dt>
            <dd className={styles.text}>
              {item.stat && <span className={styles.stat}>{item.stat}</span>}
              {item.text}
              {item.href &&
                (external ? (
                  <a href={item.href} className={styles.link} target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                ) : (
                  <Link href={item.href} className={styles.link}>
                    {label}
                  </Link>
                ))}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}

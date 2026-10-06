import styles from "./FeatureGrid.module.css";

/** Numbered editorial feature cards. */
export default function FeatureGrid({ items, columns = 3, tone = "light" }) {
  return (
    <ul className={`${styles.grid} ${styles[`cols${columns}`]} ${styles[tone]} swipe-mobile`} data-stagger>
      {items.map((item, i) => (
        <li key={item.title} className={styles.card}>
          <span className={styles.num} aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.text}>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

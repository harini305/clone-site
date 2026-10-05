import styles from "./CheckList.module.css";

/** Inclusions / exclusions list with check or cross icons. */
export default function CheckList({ items, variant = "check", columns = 2, tone = "light" }) {
  return (
    <ul className={`${styles.list} ${styles[`cols${columns}`]} ${styles[variant]} ${styles[tone]}`} data-stagger>
      {items.map((item) => (
        <li key={item}>
          <span className={styles.icon} aria-hidden="true">
            {variant === "check" ? "✓" : "–"}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

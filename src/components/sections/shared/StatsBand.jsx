import styles from "./StatsBand.module.css";

/**
 * Large figure + label strip. Figures are shown final straight away (no
 * count-up), so a visitor never sees an in-between number.
 */
export default function StatsBand({ stats, tone = "light" }) {
  return (
    <ul className={`${styles.band} ${styles[tone]}`} data-stagger>
      {stats.map((stat) => (
        <li key={stat.label} className={styles.stat}>
          <span className={styles.value}>{stat.value}</span>
          <span className={styles.label}>{stat.label}</span>
          {stat.text && <span className={styles.text}>{stat.text}</span>}
        </li>
      ))}
    </ul>
  );
}

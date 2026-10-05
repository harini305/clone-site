import styles from "./StatsBand.module.css";

/**
 * Large figure + label strip. Purely numeric values count up via GSAP
 * (data-count); others such as “Free” render as-is.
 */
export default function StatsBand({ stats, tone = "light" }) {
  return (
    <ul className={`${styles.band} ${styles[tone]}`} data-stagger>
      {stats.map((stat) => {
        const match = /^(\d+(?:\.\d+)?)(\+?)$/.exec(stat.value);
        return (
          <li key={stat.label} className={styles.stat}>
            <span
              className={styles.value}
              {...(match ? { "data-count": match[1], "data-suffix": match[2] } : {})}
            >
              {stat.value}
            </span>
            <span className={styles.label}>{stat.label}</span>
            {stat.text && <span className={styles.text}>{stat.text}</span>}
          </li>
        );
      })}
    </ul>
  );
}

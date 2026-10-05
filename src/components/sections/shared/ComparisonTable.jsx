import Link from "next/link";
import { retreatComparison, retreats } from "@/data/retreats";
import styles from "./ComparisonTable.module.css";

/** 4-Day vs 7-Day comparison — a real table that scrolls on small screens. */
export default function ComparisonTable() {
  const { escape, bliss } = retreats;
  return (
    <div className={styles.wrap} data-reveal tabIndex={0} role="region" aria-label="Retreat comparison">
      <table className={styles.table}>
        <caption className="visually-hidden">Compare the 4-Day Escape and 7-Day Bliss retreats</caption>
        <thead>
          <tr>
            <th scope="col">
              <span className="visually-hidden">Feature</span>
            </th>
            <th scope="col">
              <Link href={escape.href}>{escape.short}</Link>
              <span className={styles.badge}>{escape.badge}</span>
            </th>
            <th scope="col" className={styles.highlight}>
              <Link href={bliss.href}>{bliss.short}</Link>
              <span className={styles.badge}>{bliss.badge}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {retreatComparison.map((row) => (
            <tr key={row.label}>
              <th scope="row">{row.label}</th>
              <td>{row.escape}</td>
              <td className={styles.highlight}>{row.bliss}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import styles from "./Badge.module.css";

/** Small pill label, e.g. “Most Popular”. */
export default function Badge({ children, tone = "sand", className = "" }) {
  return <span className={`${styles.badge} ${styles[tone]} ${className}`}>{children}</span>;
}

import styles from "./Eyebrow.module.css";

export default function Eyebrow({ children, tone = "sage", className = "", ...rest }) {
  return (
    <p className={`${styles.eyebrow} ${styles[tone]} ${className}`} {...rest}>
      {children}
    </p>
  );
}

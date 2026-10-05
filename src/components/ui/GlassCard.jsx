import styles from "./GlassCard.module.css";

/** Frosted translucent card for use over imagery. */
export default function GlassCard({ as: Tag = "div", className = "", children, ...rest }) {
  return (
    <Tag className={`${styles.glass} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

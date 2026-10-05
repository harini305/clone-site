import Eyebrow from "./Eyebrow";
import styles from "./SectionHeading.module.css";

/**
 * Eyebrow + editorial heading + optional intro.
 * align: left | center ; tone: dark | light
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  as: Tag = "h2",
  align = "left",
  tone = "dark",
  size = "default",
  className = "",
  children,
}) {
  return (
    <header className={`${styles.heading} ${styles[align]} ${styles[tone]} ${styles[size]} ${className}`}>
      {eyebrow && (
        <Eyebrow tone={tone === "light" ? "light" : "sage"} data-reveal="fade">
          {eyebrow}
        </Eyebrow>
      )}
      <Tag className={styles.title} data-split>
        {title}
      </Tag>
      {intro && (
        <p className={styles.intro} data-reveal>
          {intro}
        </p>
      )}
      {children}
    </header>
  );
}

import Image from "next/image";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";
import styles from "./SplitFeature.module.css";

/**
 * Editorial two-column block: large rounded image + copy.
 * Optional secondary image overlaps the main one for an asymmetric layout.
 * compact: smaller image column and an h3 title (alternating story blocks).
 */
export default function SplitFeature({
  image,
  imageAlt,
  secondaryImage,
  secondaryAlt = "",
  eyebrow,
  title,
  cta,
  secondaryCta,
  reverse = false,
  portrait = false,
  parallax = false,
  compact = false,
  id,
  className = "",
  children,
}) {
  return (
    <div
      id={id}
      className={`${styles.split} ${reverse ? styles.reverse : ""} ${compact ? styles.compact : ""} ${className}`}
    >
      <div className={styles.visual}>
        <div
          className={`${styles.frame} ${portrait ? styles.portrait : ""}`}
          data-reveal-image
          {...(parallax ? { "data-parallax": "4" } : {})}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes={compact ? "(max-width: 900px) 100vw, 40vw" : "(max-width: 900px) 100vw, 50vw"}
            className="media-cover"
            data-parallax-target
          />
        </div>
        {secondaryImage && (
          <div className={styles.secondary} data-reveal-image>
            <Image src={secondaryImage} alt={secondaryAlt} fill sizes="(max-width: 900px) 40vw, 18vw" className="media-cover" />
          </div>
        )}
      </div>
      <div className={styles.copy}>
        {eyebrow && <Eyebrow data-reveal="fade">{eyebrow}</Eyebrow>}
        {title &&
          (compact ? (
            <h3 className={styles.title} data-split>
              {title}
            </h3>
          ) : (
            <h2 className={styles.title} data-split>
              {title}
            </h2>
          ))}
        <div className={styles.body} data-reveal>
          {children}
        </div>
        {(cta || secondaryCta) && (
          <div className="cta-row" data-reveal>
            {cta && (
              <Button href={cta.href} variant={cta.variant || "dark"}>
                {cta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="text">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

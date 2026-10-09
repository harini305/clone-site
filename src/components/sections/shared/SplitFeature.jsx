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
  const photo = (
    <Image
      src={image}
      alt={imageAlt}
      fill
      // The photo frame is taller than the landscape photos, so they are
      // cropped and draw wider than the frame.
      sizes={compact ? "(max-width: 900px) 100vw, 80vw" : "100vw"}
      className="media-cover"
      {...(parallax ? { "data-parallax-target": true } : {})}
    />
  );

  return (
    <div
      id={id}
      className={`${styles.split} ${reverse ? styles.reverse : ""} ${compact ? styles.compact : ""} ${className}`}
    >
      <div className={styles.visual}>
        <div
          className={`${styles.frame} ${portrait ? styles.portrait : ""} hover-zoom`}
          data-reveal-image
          {...(parallax ? { "data-parallax": "4" } : {})}
        >
          {/* Parallax moves the photo itself, so its hover zoom goes on a layer
              around it (.zoom-layer) and the two effects stack. */}
          {parallax ? <span className="zoom-layer">{photo}</span> : photo}
        </div>
        {secondaryImage && (
          <div className={`${styles.secondary} hover-zoom`} data-reveal-image>
            <Image src={secondaryImage} alt={secondaryAlt} fill sizes="(max-width: 900px) 60vw, 32vw" className="media-cover" />
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

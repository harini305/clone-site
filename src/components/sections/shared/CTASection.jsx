import Image from "next/image";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "./CTASection.module.css";

/** Full-width closing call-to-action over a parallax image. */
export default function CTASection({
  image = "/assets/images/venue/aerial-villas-2.webp",
  eyebrow = "Your journey home",
  title,
  text,
  primary,
  secondary,
}) {
  return (
    <section className={styles.cta}>
      <div className={styles.media} data-parallax="4">
        <Image src={image} alt="" fill sizes="100vw" className="media-cover" data-parallax-target />
      </div>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={`container container--narrow ${styles.content}`}>
        <Eyebrow tone="light" data-reveal="fade">
          {eyebrow}
        </Eyebrow>
        <h2 className={styles.title} data-split>
          {title}
        </h2>
        {text && (
          <p className={styles.text} data-reveal>
            {text}
          </p>
        )}
        <div className="cta-row cta-row--center" data-reveal>
          {primary && <Button href={primary.href}>{primary.label}</Button>}
          {secondary && (
            <Button href={secondary.href} variant="light">
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

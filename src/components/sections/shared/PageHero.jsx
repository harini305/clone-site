import Button from "@/components/ui/Button";
import HeroImage from "./HeroImage";
import HeroVideo from "./HeroVideo";
import styles from "./PageHero.module.css";

/**
 * Immersive image/video-led hero used on every page.
 * size: full (home) | page | compact (legal pages)
 */
export default function PageHero({
  image,
  imageAlt = "",
  portraitImage,
  video,
  eyebrow,
  title,
  subtitle,
  ctas = [],
  size = "page",
  align = "center",
  scrollIndicator = false,
  priority = true,
  children,
}) {
  return (
    <section className={`${styles.hero} ${styles[size]} ${styles[align] || ""}`} data-hero>
      <div className={styles.media} data-hero-media>
        <HeroImage image={image} portraitImage={portraitImage} alt={imageAlt} className={styles.img} priority={priority} />
        {video && <HeroVideo sources={video} poster={image} className={styles.img} />}
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className={`container ${styles.content}`} data-hero-content>
        {eyebrow && (
          <p className={styles.eyebrow} data-hero-item>
            {eyebrow}
          </p>
        )}
        <h1 className={styles.title} data-hero-item>
          {title}
        </h1>
        {subtitle && (
          <p className={styles.subtitle} data-hero-item>
            {subtitle}
          </p>
        )}
        {ctas.length > 0 && (
          <div className={styles.ctas} data-hero-item>
            {ctas.map((cta, i) => (
              <Button key={cta.label} href={cta.href} variant={cta.variant || (i === 0 ? "primary" : "light")}>
                {cta.label}
              </Button>
            ))}
          </div>
        )}
        {children}
      </div>

      {scrollIndicator && (
        <a href="#content" className={styles.scroll} aria-label="Scroll to content" data-hero-item>
          <span className={styles.scrollLine} aria-hidden="true" />
          <span>Scroll</span>
        </a>
      )}
    </section>
  );
}

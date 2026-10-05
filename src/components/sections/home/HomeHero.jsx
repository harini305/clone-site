import HeroImage from "@/components/sections/shared/HeroImage";
import HeroVideo from "@/components/sections/shared/HeroVideo";
import Button from "@/components/ui/Button";
import { contact } from "@/data/contact";
import { GlobeIcon, LotusIcon, MeditationIcon, PinIcon, ScrollCue } from "./HeroIcons";
import styles from "./HomeHero.module.css";

const trust = [
  { icon: LotusIcon, label: "Yoga Alliance Certified" },
  { icon: PinIcon, label: "Own Retreat Centre in Ubud" },
  { icon: GlobeIcon, label: "Students From 30+ Countries" },
  { icon: MeditationIcon, label: "10+ Years Teaching in Bali" },
];

/**
 * Home hero — layout modelled on the House of Om hero (full-bleed video under a
 * flat 30% shade, centred copy, glassy trust cards, "scroll to explore" cue),
 * set in the site's own typography: Cormorant Garamond headline + DM Sans.
 */
export default function HomeHero() {
  return (
    <section className={styles.hero} data-hero>
      <div className={styles.media} data-hero-media>
        <HeroImage
          image="/assets/images/hero/villas-aerial.webp"
          portraitImage="/assets/images/hero/villas-aerial-portrait.webp"
          alt="Aerial view of the Blooming Lotus Yoga villas terraced into the jungle in Ubud"
          className={styles.img}
        />
        <HeroVideo
          src="/assets/video/villas-aerial-1080p.mp4"
          portraitSrc="/assets/video/villas-aerial-portrait.mp4"
          className={`${styles.img} ${styles.video}`}
        />
      </div>
      <div className={styles.shade} aria-hidden="true" />

      <div className={styles.inner} data-hero-content>
        <div className={styles.copy}>
          <p className={styles.eyebrow} data-hero-item>
            Blooming Lotus Yoga · Ubud, Bali
          </p>
          <h1 className={styles.title} data-hero-item>
            Heart-based, holistic yoga school <em>&amp; lifelong community</em>
          </h1>
          <p className={styles.lead} data-hero-item>
            Reconnect Within • Deepen Your Practice • Transform Your Life
          </p>
          <div className={styles.ctas} data-hero-item>
            <Button href="#programmes">Explore your next retreat or training</Button>
            <Button href={contact.whatsappTeacherHref} variant="light">
              Speak to a teacher
            </Button>
          </div>
        </div>

        <ul className={styles.cards} aria-label="Why Blooming Lotus Yoga">
          {trust.map(({ icon: Icon, label }) => (
            <li key={label} className={styles.card} data-hero-item>
              <span className={styles.icon}>
                <Icon />
              </span>
              <span className={styles.cardLabel}>{label}</span>
            </li>
          ))}
        </ul>

        <a href="#content" className={styles.scroll} aria-label="Scroll to explore" data-hero-item>
          <ScrollCue />
        </a>
      </div>
    </section>
  );
}

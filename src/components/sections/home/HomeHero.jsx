import Image from "next/image";
import HeroImage from "@/components/sections/shared/HeroImage";
import Button from "@/components/ui/Button";
import { awards } from "@/data/accreditation";
import HeroFilm from "./HeroFilm";
import { GlobeIcon, LotusIcon, MeditationIcon, PinIcon } from "./HeroIcons";
import styles from "./HomeHero.module.css";

// Opening shot of the hero film, as the first paint; the film (HeroFilm)
// fades in over it once its four shots have loaded.
const POSTER = "/assets/images/hero/film/shot-1-establishing.webp";

const trust = [
  { icon: LotusIcon, label: "Yoga Alliance certified" },
  { icon: PinIcon, label: "Own retreat center in Ubud" },
  { icon: GlobeIcon, label: "Students from 30+ countries" },
  { icon: MeditationIcon, label: "10+ years teaching in Bali" },
];

/**
 * Home hero — House of Om layout (brand name as the H1, tagline beneath, one
 * button, four trust items) with Blooming Lotus content: a four-shot cinematic
 * film of the villas joined by luma-matte transitions, the source call to
 * action and the three award badges.
 */
export default function HomeHero() {
  return (
    <section className={styles.hero} data-hero>
      <div className={styles.media} data-hero-media>
        <HeroImage
          image={POSTER}
          alt="Aerial view of the Blooming Lotus Yoga villas terraced into the misty jungle in Ubud"
          className={`${styles.img} ${styles.poster}`}
        />
        <HeroFilm className={styles.img} />
      </div>
      <div className={styles.shade} aria-hidden="true" />

      <div className={styles.inner} data-hero-content>
        <div className={styles.copy}>
          <h1 className={styles.title} data-hero-item>
            Blooming Lotus Yoga
          </h1>
          <p className={styles.tagline} data-hero-item>
            Heart-based, holistic yoga school &amp; lifelong community
          </p>
          <p className={styles.lead} data-hero-item>
            Reconnect within • Deepen your practice • Transform your life
          </p>
          <div className={styles.ctas} data-hero-item>
            <Button href="#courses" size="lg">
              Explore your next retreat or training course
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

        <ul className={styles.awards} aria-label="Awards" data-hero-item>
          {awards.map((award) => (
            <li key={award.src}>
              <Image src={award.src} alt={`${award.label}: ${award.text}`} width={140} height={140} sizes="96px" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

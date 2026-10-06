import Image from "next/image";
import HeroImage from "@/components/sections/shared/HeroImage";
import HeroVideo from "@/components/sections/shared/HeroVideo";
import Button from "@/components/ui/Button";
import { awards } from "@/data/accreditation";
import { GlobeIcon, LotusIcon, MeditationIcon, PinIcon } from "./HeroIcons";
import styles from "./HomeHero.module.css";

// HD aerial stills of the villas; the video loops are rendered from the same
// photos, so the still (first paint) and the first video frame match.
const POSTER = "/assets/images/hero/villas-aerial.webp";
const POSTER_PORTRAIT = "/assets/images/hero/villas-aerial-portrait.webp";

const trust = [
  { icon: LotusIcon, label: "Yoga Alliance certified" },
  { icon: PinIcon, label: "Own retreat center in Ubud" },
  { icon: GlobeIcon, label: "Students from 30+ countries" },
  { icon: MeditationIcon, label: "10+ years teaching in Bali" },
];

/**
 * Home hero — House of Om layout (brand name as the H1, tagline beneath, one
 * button, four trust items) with Blooming Lotus content: an HD aerial loop of
 * the villas, the source call to action and the three award badges.
 */
export default function HomeHero() {
  return (
    <section className={styles.hero} data-hero>
      <div className={styles.media} data-hero-media>
        <HeroImage
          image={POSTER}
          portraitImage={POSTER_PORTRAIT}
          alt="Aerial view of the Blooming Lotus Yoga villas terraced into the jungle in Ubud"
          className={styles.img}
        />
        <HeroVideo
          sources={[
            { src: "/assets/video/villas-aerial-portrait.mp4", type: "video/mp4", media: "(max-width: 600px)" },
            { src: "/assets/video/villas-aerial-1080p.mp4", type: "video/mp4" },
          ]}
          className={styles.img}
        />
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

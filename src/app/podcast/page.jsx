import PageHero from "@/components/sections/shared/PageHero";
import CTASection from "@/components/sections/shared/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { podcastEpisodes, podcastIntro, podcastListen } from "@/data/community";
import { pageMetadata } from "@/data/site";
import styles from "@/components/sections/community/Community.module.css";

export const metadata = pageMetadata({
  title: "Podcast — Drops of Nectar",
  description:
    "Drops of Nectar: dharma talks recorded live during the silent meditation retreats at Blooming Lotus Yoga in Bali.",
  path: "/podcast",
  image: "/assets/images/meditation/river-rock.webp",
});

export default function PodcastPage() {
  return (
    <>
      <PageHero
        image="/assets/images/meditation/river-rock.webp"
        imageAlt="Meditating on a rock by the river"
        eyebrow="Podcast"
        title="Drops of Nectar"
        subtitle="Dharma talks recorded live during our silent meditation retreats in Bali."
        ctas={[{ label: "Start listening", href: "#episodes" }]}
      />

      <section id="episodes" className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="Welcome" title="Welcome to the Drops of Nectar podcast" intro={podcastIntro} />
          <ol className={styles.episodes} data-stagger>
            {podcastEpisodes.map((ep, i) => (
              <li key={ep.src} className={styles.episode}>
                <h3 className={styles.episodeTitle}>
                  <span>{i + 1}.</span>
                  {ep.title}
                </h3>
                <audio controls preload="none" src={ep.src}>
                  <a href={ep.src}>Listen to {ep.title}</a>
                </audio>
                <a className={styles.download} href={ep.src} download>
                  Download
                </a>
              </li>
            ))}
          </ol>

          <h3 className={`${styles.episodeTitle} ${styles.listenTitle}`}>
            Other ways to listen
          </h3>
          <div className="cta-row">
            {podcastListen.map((l) => (
              <Button key={l.href} href={l.href} variant="outline">
                {l.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        image="/assets/images/meditation/path-meditation.webp"
        title="Experience the silence in person"
        text="The teachings of our silent meditation retreats are offered freely; only food and accommodation are charged."
        primary={{ label: "Meditation retreats", href: "/meditation-retreats" }}
        secondary={{ label: "Online learning", href: "/continuing-education" }}
      />
    </>
  );
}

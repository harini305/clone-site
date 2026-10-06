import PageHero from "@/components/sections/shared/PageHero";
import MediaCard, { MediaGrid } from "@/components/sections/shared/MediaCard";
import CTASection from "@/components/sections/shared/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import { vidyaAudio, vidyaBooks, vidyaCourses, vidyaFree, vidyaIntro, vidyaStart } from "@/data/community";
import { pageMetadata } from "@/data/site";
import styles from "@/components/sections/community/Community.module.css";

export const metadata = pageMetadata({
  title: "Continuing Education — Vidya Online Learning",
  description:
    "Vidya is Blooming Lotus Yoga’s collection of online courses, audio recordings and eBooks to deepen your practice and understanding of yoga at home.",
  path: "/continuing-education",
  image: "/assets/images/venue/shala-night.webp",
});

function Products({ items, fit, ratio, cta = "Learn more" }) {
  return (
    <MediaGrid swipe={items.length > 2}>
      {items.map((item) => (
        <MediaCard
          key={item.title}
          href={item.soon ? undefined : item.href}
          image={item.image}
          title={item.title}
          text={item.text}
          cta={cta}
          fit={fit}
          ratio={ratio}
        >
          {item.soon && <span className={styles.soon}>Coming soon</span>}
        </MediaCard>
      ))}
    </MediaGrid>
  );
}

export default function ContinuingEducationPage() {
  return (
    <>
      <PageHero
        image="/assets/images/venue/shala-night.webp"
        imageAlt="The yoga shala lit at night"
        eyebrow="Continuing education"
        title="Discover the future of online yoga and self-growth training"
        subtitle="Illuminating online courses, audio recordings and eBooks to help you deepen your practice & understanding of the depths of yoga."
        ctas={[{ label: "Find your next online course", href: vidyaStart }]}
      />

      <section id="content" className="section">
        <div className={`container ${styles.split}`}>
          <SectionHeading eyebrow="Vidya" title="Climb the great mountain of Self-Realization, one step at a time" />
          <div className={styles.prose} data-reveal>
            {vidyaIntro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <SectionHeading eyebrow="Online courses" title="Learn at your own pace" />
          <Products items={vidyaCourses} ratio="16 / 9" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Audio" title="Guided meditations & Yoga Nidra" />
          <Products items={vidyaAudio} ratio="1 / 1" />
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <SectionHeading eyebrow="eBooks" title="Essential reading for yogis" />
          <Products items={vidyaBooks} fit="contain" ratio="4 / 3" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Free training" title="Free masterclasses" />
          <Products items={vidyaFree} ratio="16 / 10" cta="Register now" />
          <p className={styles.note} data-reveal>
            Courses, audio and eBooks are delivered through the Blooming Lotus Yoga online learning platform and store.
          </p>
        </div>
      </section>

      <CTASection
        image="/assets/images/meditation/path-meditation.webp"
        title="Join thousands of yogis"
        text="Start your next online course today — or come and practice with us in Bali."
        primary={{ label: "Start here", href: vidyaStart }}
        secondary={{ label: "Yoga retreats in Bali", href: "/yoga-retreats" }}
      />
    </>
  );
}

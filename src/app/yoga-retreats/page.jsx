import PageHero from "@/components/sections/shared/PageHero";
import SplitFeature from "@/components/sections/shared/SplitFeature";
import GlanceGrid from "@/components/sections/shared/GlanceGrid";
import FeatureGrid from "@/components/sections/shared/FeatureGrid";
import CheckList from "@/components/sections/shared/CheckList";
import ComparisonTable from "@/components/sections/shared/ComparisonTable";
import TestimonialsSection from "@/components/sections/shared/TestimonialsSection";
import FAQSection from "@/components/sections/shared/FAQSection";
import CTASection from "@/components/sections/shared/CTASection";
import RetreatCards from "@/components/sections/retreats/RetreatCards";
import SectionHeading from "@/components/ui/SectionHeading";
import { retreatFeatures, retreatInclusions, retreatPlanning } from "@/data/retreats";
import { byCategory } from "@/data/testimonials";
import { retreatsFaqs } from "@/data/faqs";
import { pageMetadata } from "@/data/site";

export const metadata = pageMetadata({
  title: "Bali Yoga Retreats in Ubud — 4 & 7 Day",
  description:
    "All-inclusive 4-day and 7-day yoga retreats in Ubud, Bali from US$350. Twice-daily yoga, meditation, workshops, vegan meals and villa stays — max 16 guests, beginners welcome.",
  path: "/yoga-retreats",
  image: "/assets/images/hero/jungle-infinity.webp",
});

const glance = [
  { title: "Two Unique Retreats", text: "A 4-day, 3-night retreat and a 7-day, 6-night retreat at our own centre in Ubud." },
  { title: "Who They Are For", text: "Beginner and intermediate practitioners — no previous yoga experience required." },
  { title: "When They Start", text: "4-day retreats start every Sunday and Wednesday; 7-day retreats every Sunday." },
  { title: "What They Cost", text: "From US$350 (4-day) and US$700 (7-day), including accommodation, two meals a day and all classes." },
  { title: "Group Size", text: "A maximum of 16 retreat guests at a time." },
  { title: "Where", text: "Lodtunduh, Ubud — 15 minutes from central Ubud and one hour from Denpasar airport (DPS)." },
];

export default function RetreatsPage() {
  return (
    <>
      <PageHero
        image="/assets/images/hero/jungle-infinity.webp"
        imageAlt="A guest looking out over the jungle from an infinity pool in Ubud"
        eyebrow="Bali Yoga Retreats in Ubud"
        title={
          <>
            Experience the bliss of yoga <em>in Bali</em>
          </>
        }
        subtitle="4 & 7-day all-inclusive retreats with expert guidance in asana, breathwork and meditation — from US$350."
        ctas={[
          { label: "Choose your retreat", href: "#choose" },
          { label: "Compare retreats", href: "#compare", variant: "light" },
        ]}
      />

      <section className="section">
        <div className="container">
          <SplitFeature
            image="/assets/images/community/smile-white.webp"
            imageAlt="A smiling guest in white in the retreat gardens"
            portrait
            eyebrow="An affordable, intimate escape"
            title="This is all about you — reaching the full potential of your life"
          >
            <p>
              Blooming Lotus Yoga has run yoga retreats in Ubud for more than ten years and is a Yoga Alliance Registered
              Yoga School (RYS 200) and Continuing Education Provider (YACEP).
            </p>
            <p>
              It’s about letting go of fear, fatigue and frustration, healing old wounds, finding purpose, refining your
              practice and learning new skills — so that you can live a more joyous, loving, compassionate and remarkable
              life.
            </p>
            <ul>
              <li>Deepen your practice with the foundations of Hatha, Vinyasa and Restorative/Yin</li>
              <li>Master your body & mind with strategies for inner peace & radiant health</li>
              <li>Relax & rejuvenate in world-class luxury</li>
            </ul>
          </SplitFeature>
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <SectionHeading eyebrow="At a glance" title="Retreats from US$350, for a maximum of 16 guests" />
          <GlanceGrid items={glance} />
        </div>
      </section>

      <section id="choose" className="section">
        <div className="container">
          <SectionHeading eyebrow="Choose your Bali yoga retreat" title="Two retreats, one sanctuary" align="center" />
          <RetreatCards />
        </div>
      </section>

      <section id="compare" className="section section--warm">
        <div className="container">
          <SectionHeading
            eyebrow="How long should a retreat be?"
            title="4 days or 7 days?"
            intro="Both run at the same centre with the same teachers, accommodation and daily rhythm. Choose 4 days if you have limited time or it’s your first retreat; choose 7 days to let the practice settle and receive all three workshops. Guests who book the 4-day frequently return for the 7-day."
          />
          <ComparisonTable />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="All packages include"
            title="Everything you need to renew, restore and rejuvenate"
            intro="Accommodation, two yoga classes daily, daily meditation, two meals a day, a Balinese ceremony, pool access, wi-fi and a shuttle to Ubud. Lunch is open, so you can explore Ubud or order from the à la carte vegan menu."
          />
          <FeatureGrid items={retreatFeatures} columns={4} />
          <div className="block-gap">
            <CheckList items={retreatInclusions} columns={2} />
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Cost & planning"
            title="What does a yoga retreat in Bali cost?"
            tone="light"
            intro="Some retreats quote a nightly rate, some a package, and many quote classes only. The honest way to compare is per night, all-in — ours works out at about US$117 per night."
          />
          <GlanceGrid items={retreatPlanning} tone="dark" />
        </div>
      </section>

      <TestimonialsSection testimonials={byCategory("retreat")} title="What retreat guests are saying…" />

      <FAQSection faqs={retreatsFaqs} />

      <CTASection
        image="/assets/images/venue/infinity-villa.webp"
        title="Your slice of heaven is waiting"
        text="Retreats start every Sunday and Wednesday. Spaces are limited to 16 guests."
        primary={{ label: "Book the 4-Day Escape", href: "/yoga-retreats/4-day-escape" }}
        secondary={{ label: "Book the 7-Day Bliss", href: "/yoga-retreats/7-day-bliss" }}
      />
    </>
  );
}

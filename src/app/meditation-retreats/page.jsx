import PageHero from "@/components/sections/shared/PageHero";
import SplitFeature from "@/components/sections/shared/SplitFeature";
import FeatureGrid from "@/components/sections/shared/FeatureGrid";
import GlanceGrid from "@/components/sections/shared/GlanceGrid";
import CheckList from "@/components/sections/shared/CheckList";
import ScheduleTimeline from "@/components/sections/shared/ScheduleTimeline";
import TestimonialsSection from "@/components/sections/shared/TestimonialsSection";
import FAQSection from "@/components/sections/shared/FAQSection";
import CTASection from "@/components/sections/shared/CTASection";
import RetreatTypes from "@/components/sections/meditation/RetreatTypes";
import LineageGrid from "@/components/sections/about/LineageGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import { meditationDay } from "@/data/schedules";
import { byCategory } from "@/data/testimonials";
import { meditationFaqs } from "@/data/faqs";
import { pageMetadata } from "@/data/site";

export const metadata = pageMetadata({
  title: "Silent Meditation Retreats in Ubud, Bali",
  description:
    "Beginner and advanced silent meditation retreats in Ubud, Bali. Breath awareness, mantra and self-inquiry from the yogic tradition — the teachings are offered freely.",
  path: "/meditation-retreats",
  image: "/assets/images/meditation/rice-terrace.webp",
});

const pillars = [
  {
    title: "Master Your Body & Mind",
    text: "Awaken your highest potential with immersive training and body/mind strategies for developing inner peace and radiant health.",
  },
  {
    title: "Expand Your Awareness",
    text: "Learn the foundations of breath awareness, mantra and non-dual meditation techniques to go deeper within and develop mindful awareness.",
  },
  {
    title: "Develop Greater Insight",
    text: "Gain the essential skills to practise meditation with complete confidence on your own, so you can grow in wisdom and compassion.",
  },
];

const includes = [
  {
    title: "Meditation Sessions",
    text: "The foundation of the retreats: a complete method of silent meditation — pranayama, then breath awareness, mantra and self-inquiry.",
  },
  {
    title: "Yoga Classes",
    text: "A fluid sequencing of postures linked with the breath that releases habitual tension and channels subtle energy into the spine.",
  },
  {
    title: "Yoga Nidra",
    text: "A scientific method of complete relaxation from ancient Tantric texts — transitioning consciously through the layers of the mind to release negative patterns.",
  },
  {
    title: "Lifestyle Guidance & Dharma Talks",
    text: "Listening, reflecting and abiding: talks that clarify the path, answer questions and resolve doubts, so the benefits continue into daily life.",
  },
];

const guidelines = [
  "These retreats are for students interested in the yogic approach to spiritual liberation",
  "The advanced retreat includes 5 days of complete silence",
  "The advanced retreat is for people who already have a meditation practice",
  "Retreats are completely alcohol-free",
  "Smoking is not permitted in the villas or the retreat venue",
  "Courses are taught in English",
];

const progression = [
  {
    title: "Begin",
    text: "The Beginner Retreat lays a strong foundation for a home meditation and pranayama practice.",
  },
  {
    title: "Go deeper",
    text: "The Advanced Retreat’s silence and four daily sittings take the practice to the higher limbs of yoga.",
  },
  {
    title: "Teach",
    text: "Our courses qualify you to teach meditation, and the 225-hour YTT includes a 25-hour meditation certificate recognised for Yoga Alliance continuing education.",
    href: "/yoga-teacher-training",
    link: "Explore the teacher training",
  },
];

export default function MeditationPage() {
  return (
    <>
      <PageHero
        image="/assets/images/meditation/rice-terrace.webp"
        imageAlt="A lone figure walking through misty rice terraces"
        eyebrow="Meditation Retreats in Ubud, Bali"
        title={
          <>
            The noble art of <em>silent meditation</em>
          </>
        }
        subtitle="There is no greater gift to give yourself than time in silence and deep reflection — the teachings are offered freely."
        ctas={[{ label: "Choose your retreat", href: "#retreats" }]}
      />

      <section className="section">
        <div className="container">
          <SplitFeature
            image="/assets/images/meditation/river-rock.webp"
            imageAlt="A student meditating on a rock in the river"
            eyebrow="Return to the heart"
            title="Find the answers to life’s deepest questions from within"
            parallax
          >
            <p>
              Silent meditation helps reveal greater states of clarity, well-being and inner peace. It purifies the mind
              and opens the Heart so that you may live with greater wisdom and compassion in each moment of your life.
            </p>
            <p>
              If you need time to slow down, clarify your purpose in the world, or go deep within, these retreats are for
              you. The benefits extend to every facet of life — our relationships, confidence, creativity and insight — all
              arising from a source within that we reach by remaining silent and listening.
            </p>
          </SplitFeature>
          <div className="block-gap">
            <FeatureGrid items={pillars} />
          </div>
        </div>
      </section>

      <section id="retreats" className="section section--warm">
        <div className="container">
          <SectionHeading
            eyebrow="We offer two types of meditation retreat"
            title="Beginner or advanced"
            align="center"
            intro="The teachings are given freely; only food and accommodation are charged."
          />
          <RetreatTypes />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SplitFeature
            image="/assets/images/meditation/path-meditation.webp"
            imageAlt="Two women meditating on a garden path in Bali"
            reverse
            eyebrow="The silent retreat"
            title="Five days of complete silence"
          >
            <p>
              The advanced retreat is a rare opportunity to completely immerse into silent stillness. With four intensive
              meditation sessions a day, one yoga class and evening dharma talks, the mind is given space to settle into
              its natural state.
            </p>
            <p>
              The quintessential practices of yoga are about stilling the mind so that we may become aware of That which is
              our Natural State — the source of the compassion, love and truth we all seek to embody.
            </p>
          </SplitFeature>
        </div>
      </section>

      <section className="section section--sage">
        <div className="container">
          <SectionHeading
            eyebrow="All meditation retreats include"
            title="Teachings from the yogic tradition"
            tone="light"
            intro="A complete technique: controlled breathing to stabilise the mind (pranayama), and three root practices to concentrate the mind upon silence — breath awareness, mantra and self-inquiry."
          />
          <FeatureGrid items={includes} columns={4} tone="dark" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SplitFeature
            image="/assets/images/rooms/bedroom-view.webp"
            imageAlt="A villa bedroom opening onto the jungle"
            secondaryImage="/assets/images/venue/water-temple.webp"
            secondaryAlt="The water temple across the river"
            eyebrow="Where you’ll stay"
            title="A sanctuary above the sacred river"
            cta={{ label: "See the retreat center", href: "/retreat-center", variant: "outline" }}
          >
            <p>
              Beginner retreats stay in our world-class villas — each with a plunge pool, living room and kitchen — with
              river and jungle views. On the advanced silent retreat you can stay on-site or arrange your own accommodation
              off-site.
            </p>
          </SplitFeature>
        </div>
      </section>

      <ScheduleTimeline
        eyebrow="Daily rhythm"
        title="A day on the silent retreat"
        intro="On the advanced retreat, five of the seven days are held in complete silence — each built around meditation and gentle movement."
        image="/assets/images/meditation/namaste-pair.webp"
        imageAlt="Two women with hands in prayer position"
        items={meditationDay}
        tone="warm"
      />

      <section className="section">
        <div className="container">
          <div>
            <SectionHeading eyebrow="Guidelines" title="Before you come" />
            <CheckList items={guidelines} />
          </div>
          <div className="block-gap">
            <SectionHeading eyebrow="Certification & progression" title="A path that keeps unfolding" />
            <GlanceGrid items={progression} />
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Our lineage"
            title="Shri Vidya — knowledge of the Supreme"
            tone="light"
            align="center"
            intro="These timeless teachings have been passed from teacher to student since ancient Vedic times. The essence of our programmes is inspired by:"
          />
          <LineageGrid />
        </div>
      </section>

      <TestimonialsSection testimonials={byCategory("meditation")} title="What meditators are saying…" />

      <FAQSection faqs={meditationFaqs} />

      <CTASection
        image="/assets/images/venue/river-flow.webp"
        eyebrow="Give yourself the gift of silence"
        title="Dive deeper into meditation"
        text="Apply for a beginner or advanced retreat — we reply to all enquiries within 24 hours."
        primary={{ label: "Apply now", href: "/contact" }}
        secondary={{ label: "Explore yoga retreats", href: "/yoga-retreats" }}
      />
    </>
  );
}

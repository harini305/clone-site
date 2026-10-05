import HomeHero from "@/components/sections/home/HomeHero";
import SplitFeature from "@/components/sections/shared/SplitFeature";
import StatsBand from "@/components/sections/shared/StatsBand";
import GlanceGrid from "@/components/sections/shared/GlanceGrid";
import { ProgrammeGrid } from "@/components/sections/shared/ProgrammeCard";
import { TeacherGrid } from "@/components/sections/shared/TeacherCard";
import LocationSection from "@/components/sections/shared/LocationSection";
import TestimonialsSection from "@/components/sections/shared/TestimonialsSection";
import AccreditationSection from "@/components/sections/shared/AccreditationSection";
import GivingSection from "@/components/sections/shared/GivingSection";
import GuideCTA from "@/components/sections/shared/GuideCTA";
import FAQSection from "@/components/sections/shared/FAQSection";
import CTASection from "@/components/sections/shared/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { homeFacts, homeGlance, programs } from "@/data/programs";
import { teachers } from "@/data/teachers";
import { featuredTestimonials } from "@/data/testimonials";
import { homeFaqs } from "@/data/faqs";
import { pageMetadata } from "@/data/site";

export const metadata = {
  ...pageMetadata({
    path: "/",
    description:
      "Blooming Lotus Yoga in Ubud, Bali — a heart-based, holistic yoga school offering a 225-hour Yoga Alliance teacher training from US$2,770, 4 & 7-day yoga retreats from US$350 and silent meditation retreats.",
  }),
  title: { absolute: "Blooming Lotus Yoga | Yoga Teacher Training & Retreats in Ubud, Bali" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section id="content" className="section">
        <div className="container">
          <SplitFeature
            image="/assets/images/practice/shala-crow.webp"
            imageAlt="Students practising crow pose together in the yoga shala"
            secondaryImage="/assets/images/practice/water-blessing.webp"
            secondaryAlt="A student receiving a Balinese water blessing"
            eyebrow="Welcome to Blooming Lotus Yoga"
            title="Let us guide you on a journey back home"
            cta={{ label: "Our story", href: "/about" }}
            secondaryCta={{ label: "Visit the retreat center", href: "/retreat-center" }}
          >
            <p>
              Blooming Lotus Yoga has taught yoga in Ubud, Bali for more than ten years, welcoming students from over 30
              countries for yoga teacher training, yoga retreats and meditation retreats.
            </p>
            <p>
              Listen to the exotic birds and the trickling waters of the holy river below, and be absorbed in the
              breathtaking views of our jungle location. With gifted teachers who teach from their hearts and the
              tradition of Yoga, take this precious time to immerse yourself in deeply healing and transformative practice
              on the “Island of the Gods”.
            </p>
          </SplitFeature>
        </div>
      </section>

      <section className="section section--warm" aria-labelledby="glance-heading">
        <div className="container">
          <SectionHeading
            eyebrow="At a glance"
            title={<span id="glance-heading">Bali yoga teacher training &amp; retreats in Ubud</span>}
            intro="A 200-hour Yoga Alliance registered teacher training with an additional 25-hour meditation certification — Hatha, Vinyasa and Restorative/Yin, plus guided meditation and Yoga Nidra. A maximum of 18 students and free lifetime re-attendance for every graduate."
          />
          <StatsBand stats={homeGlance} />
          <div className="block-gap">
            <GlanceGrid items={homeFacts} />
          </div>
        </div>
      </section>

      <section id="programmes" className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Courses & retreats"
            title="Find the path that’s calling you"
            intro="Our 225-hour training takes a maximum of 18 students. 4-day retreats start Sundays and Wednesdays, 7-day retreats start Sundays — and both welcome complete beginners."
          />
          <ProgrammeGrid programs={programs} />
        </div>
      </section>

      <section className="section section--warm" id="teachers">
        <div className="container">
          <SectionHeading
            eyebrow="Our lineage & teachers"
            title="Women-led · Trauma-informed · Goddess empowered"
            intro="Founded by Lily Goncalves, Blooming Lotus Yoga teaches in the lineage of Sri Vidya — one of the world’s oldest living Goddess traditions — bridging the authentic, spiritually focused practice of classical yoga with the needs of the modern world."
          />
          <TeacherGrid teachers={teachers} />
          <div className="cta-row" data-reveal>
            <Button href="/about#lineage" variant="outline">
              Discover our lineage
            </Button>
          </div>
        </div>
      </section>

      <LocationSection />

      <TestimonialsSection testimonials={featuredTestimonials} />

      <AccreditationSection />

      <GivingSection />

      <GuideCTA />

      <FAQSection faqs={homeFaqs} />

      <CTASection
        image="/assets/images/hero/jungle-infinity.webp"
        title="Come home to yourself in Bali"
        text="Join us on the “Island of the Gods” for a teacher training, retreat or silent meditation — and fill yourself with bliss."
        primary={{ label: "Explore your path to teaching", href: "/yoga-teacher-training" }}
        secondary={{ label: "Discover your next retreat", href: "/yoga-retreats" }}
      />
    </>
  );
}

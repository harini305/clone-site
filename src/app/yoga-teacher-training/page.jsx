import PageHero from "@/components/sections/shared/PageHero";
import InPageNav from "@/components/sections/shared/InPageNav";
import GlanceGrid from "@/components/sections/shared/GlanceGrid";
import FeatureGrid from "@/components/sections/shared/FeatureGrid";
import AccreditationSection from "@/components/sections/shared/AccreditationSection";
import ScheduleTimeline from "@/components/sections/shared/ScheduleTimeline";
import { TeacherGrid } from "@/components/sections/shared/TeacherCard";
import VideoEmbed from "@/components/sections/shared/VideoEmbed";
import TestimonialsSection from "@/components/sections/shared/TestimonialsSection";
import { RoomGrid } from "@/components/sections/shared/RoomCard";
import CheckList from "@/components/sections/shared/CheckList";
import RegistrationSteps from "@/components/sections/shared/RegistrationSteps";
import ForYouSection from "@/components/sections/shared/ForYouSection";
import FAQSection from "@/components/sections/shared/FAQSection";
import CTASection from "@/components/sections/shared/CTASection";
import GuideCTA from "@/components/sections/shared/GuideCTA";
import Curriculum from "@/components/sections/ytt/Curriculum";
import DatesList from "@/components/sections/ytt/DatesList";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  curriculum,
  notTaught,
  registrationSteps,
  yttFeatures,
  yttForYou,
  yttGlance,
  yttIncluded,
  yttNotForYou,
  yttNotIncluded,
  yttRooms,
  yttSections,
} from "@/data/ytt";
import { yttDates, yttSchedule } from "@/data/schedules";
import { teachers } from "@/data/teachers";
import { byCategory } from "@/data/testimonials";
import { yttFaqs } from "@/data/faqs";
import { contact } from "@/data/contact";
import { pageMetadata } from "@/data/site";
import styles from "./page.module.css";

export const metadata = pageMetadata({
  title: "225-Hour Yoga & Meditation Teacher Training in Bali",
  description:
    "A 200-hour Yoga Alliance registered YTT plus a 25-hour meditation certification in Ubud, Bali. From US$2,770 all-inclusive, max 18 students, free lifetime re-attendance.",
  path: "/yoga-teacher-training",
  image: "/assets/images/venue/shala-night.webp",
});

export default function YTTPage() {
  return (
    <>
      <PageHero
        image="/assets/images/venue/shala-night.webp"
        imageAlt="The Blooming Lotus Yoga shala glowing at night above the villas"
        eyebrow="225-Hour Yoga & Meditation Teacher Training"
        title={
          <>
            Teacher training <em>in Bali</em>
          </>
        }
        subtitle="Transform Your Life • Teach With Presence • Be The Light. All-inclusive from US$2,770 — tuition, accommodation, meals & bonuses."
        ctas={[
          { label: "See dates & prices", href: "#pricing" },
          { label: "Speak to a teacher", href: contact.whatsappTeacherHref, variant: "light" },
        ]}
      />

      <InPageNav sections={yttSections} label="Teacher training sections" />

      <section id="overview" className="section">
        <div className="container">
          <SectionHeading
            eyebrow="At a glance"
            title="A journey of self-discovery that meets you where you are"
            intro="Whether you are a beginner, a long-time practitioner, or want a ‘reset’ in your life, this training is here to meet you. Teaching doesn’t have to be the main goal — many come simply to go deeper: into their practice, their breath and themselves."
          />
          <GlanceGrid items={yttGlance} columns={4} />
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <SectionHeading
            eyebrow="Free re-attendance • Hatha, Vinyasa & Restorative/Yin • Friendships for life"
            title="So much more than two certificates"
            align="center"
          />
          <FeatureGrid items={yttFeatures} />
        </div>
      </section>

      <AccreditationSection title="A trusted global leader in yoga training for over 10 years" />

      <section id="curriculum" className="section section--warm">
        <div className="container">
          <SectionHeading
            eyebrow="Curriculum"
            title="What you will learn"
            intro="Body, mind and soul — a holistic system of yoga that purifies the body & mind and connects you to the Divine Self within."
          />
          <Curriculum modules={curriculum} />

          <div className="block-gap">
            <h3 className={styles.subhead} data-reveal>
              What you won’t learn — and why
            </h3>
            <FeatureGrid items={notTaught} />
          </div>
        </div>
      </section>

      <ScheduleTimeline
        id="schedule"
        eyebrow="Daily schedule"
        title="Here’s what each day looks like"
        intro="Days begin and end in meditation, with a few days off during the course to rest and explore Bali."
        image="/assets/images/practice/class-arms-up.webp"
        imageAlt="Students raising their arms during a yoga class"
        items={yttSchedule}
      />

      <section id="teachers" className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Women-led • Trauma-informed • Goddess empowered"
            title="Meet your teachers"
            intro="Everyone welcome: men, women, all ages, all genders."
          />
          <TeacherGrid teachers={teachers} detailed />
        </div>
      </section>

      <section className="section section--warm">
        <div className="container">
          <SectionHeading eyebrow="See it for yourself" title="Inside the training" align="center" />
          <VideoEmbed
            youtubeId="u7wAg0IAd3Y"
            poster="/assets/images/practice/shala-crow.webp"
            title="Blooming Lotus Yoga teacher training in Bali"
          />
        </div>
      </section>

      <TestimonialsSection id="testimonials" testimonials={byCategory("ytt")} title="What graduates are saying…" tone="dark" />

      <section id="pricing" className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Rooms & pricing"
            title="What “all-inclusive” actually means"
            intro="Many Bali trainings only quote tuition and charge accommodation & meals separately. The price you see is the price you pay — no hidden fees, taxes or payment-processing fees."
          />
          <RoomGrid
            rooms={yttRooms.map((r) => ({ ...r, deposit: 500 }))}
            twoUp
            priceNote="per person, all-inclusive"
            ctaLabel="Register"
          />

          <div className={`block-gap ${styles.inclusions}`}>
            <div data-reveal>
              <h3 className={styles.subhead}>Your price includes</h3>
              <CheckList items={yttIncluded} />
            </div>
            <div data-reveal>
              <h3 className={styles.subhead}>Not included</h3>
              <CheckList items={yttNotIncluded} variant="cross" columns={1} />
              <p className={styles.note}>
                Payment plans &amp; scholarships available. Training with a partner or friend? Ask us about shared villa
                options for two. Living off-site is possible too — nearby homestays start from around US$20 per day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="dates" className="section section--warm">
        <div className="container">
          <SectionHeading
            eyebrow="Step 1 · Choose your date"
            title="Upcoming teacher trainings"
            intro="Each course runs 21 or 23 days, starting at 4:00 pm on day one and finishing at 2:00 pm on the final day."
          />
          <DatesList dates={yttDates} />
        </div>
      </section>

      <section id="register" className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Registering is a simple 3-step process"
            title="Ready to sign up?"
            tone="light"
            intro="We reply to all messages & emails within 24 hours. Speak with Mandy, one of our lead teachers, about your practice, your goals and any concerns — she replies personally."
          />
          <RegistrationSteps steps={registrationSteps} />
          <div className="cta-row" data-reveal>
            <Button href="/contact">Register now</Button>
            <Button href={contact.whatsappTeacherHref} variant="light">
              WhatsApp a teacher
            </Button>
          </div>
        </div>
      </section>

      <ForYouSection forYou={yttForYou} notForYou={yttNotForYou} noun="course" />

      <GuideCTA />

      <FAQSection faqs={yttFaqs} />

      <CTASection
        image="/assets/images/venue/aerial-villas-2.webp"
        eyebrow="Teach yoga worldwide"
        title="Our Yoga Alliance registered course lets you teach anywhere"
        text="225 certified hours, a maximum of 18 students and the freedom to come back, free, for life."
        primary={{ label: "Choose your date", href: "#dates" }}
        secondary={{ label: "Ask a question", href: "/contact" }}
      />
    </>
  );
}

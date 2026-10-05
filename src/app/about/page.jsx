import PageHero from "@/components/sections/shared/PageHero";
import SplitFeature from "@/components/sections/shared/SplitFeature";
import { TeacherGrid } from "@/components/sections/shared/TeacherCard";
import GivingSection from "@/components/sections/shared/GivingSection";
import AccreditationSection from "@/components/sections/shared/AccreditationSection";
import TestimonialsSection from "@/components/sections/shared/TestimonialsSection";
import CTASection from "@/components/sections/shared/CTASection";
import StatsBand from "@/components/sections/shared/StatsBand";
import LineageGrid from "@/components/sections/about/LineageGrid";
import Timeline from "@/components/sections/about/Timeline";
import SectionHeading from "@/components/ui/SectionHeading";
import { teachers } from "@/data/teachers";
import { byCategory } from "@/data/testimonials";
import { pageMetadata } from "@/data/site";

export const metadata = pageMetadata({
  title: "About Us — Our Story, Founder & Lineage",
  description:
    "Blooming Lotus Yoga is an oasis of peace in Ubud, Bali, rooted in the classical yoga tradition of Shri Vidya. Meet founder Lily Goncalves, our teachers and our lineage.",
  path: "/about",
  image: "/assets/images/venue/view-north.webp",
});

const journey = [
  {
    marker: "Since ancient Vedic times",
    title: "Shri Vidya — knowledge of the Supreme",
    text: "Teachings on the direct experience of the true nature of reality, passed from teacher to student by masters such as Vasishta Maharshi, Sage Agastya and Lopamudra, and Adi Shankaracharya.",
  },
  {
    marker: "South India",
    title: "The ashrams of South India",
    text: "Lily’s intensive immersion in traditional ashrams — alongside study of the Shivananda, Krishnamacharya, Jois and Iyengar systems — shaped a grounded yet mystical approach.",
  },
  {
    marker: "Bali",
    title: "A blessing from Ratu Pedanda Gunung",
    text: "The guardian of the Balinese yoga tradition gave his blessing for Blooming Lotus Yoga to teach its training and retreat programmes here in Bali.",
  },
  {
    marker: "Ubud",
    title: "A home above a sacred river",
    text: "More than ten years of teacher trainings, yoga retreats and silent meditation retreats at our own centre in Lodtunduh, Ubud.",
  },
  {
    marker: "2021",
    title: "Bali’s “Yoga School of The Year”",
    text: "Recognised by the Travel & Hospitality Awards, alongside the Prestige Award™ for Bali’s “Yoga Retreat of The Year”.",
  },
  {
    marker: "Today",
    title: "A lifelong global family",
    text: "Students from over 30 countries, graduates teaching in over 50 countries, and free lifetime re-attendance for every graduate.",
  },
];

const community = [
  { value: "30+", label: "Countries", text: "Students join us from all over the world." },
  { value: "50+", label: "Countries taught in", text: "Where our graduates now share yoga." },
  { value: "Free", label: "For life", text: "Graduates can retake the YTT, as often as they like." },
];

export default function AboutPage() {
  const lily = teachers.find((t) => t.slug === "lily-goncalves");

  return (
    <>
      <PageHero
        image="/assets/images/venue/view-north.webp"
        imageAlt="The villas and jungle valley looking north from the retreat"
        eyebrow="About Blooming Lotus Yoga"
        title={
          <>
            An oasis of peace <em>&amp; tranquility</em>
          </>
        }
        subtitle="Firmly rooted in the classical yoga tradition — and adapted with love for the modern world."
      />

      <section className="section">
        <div className="container">
          <SplitFeature
            image="/assets/images/hero/ytt-graduates.webp"
            imageAlt="A group of yoga students in white celebrating together"
            secondaryImage="/assets/images/practice/temple-door.webp"
            secondaryAlt="Three students at a carved temple doorway"
            portrait
            eyebrow="Our story"
            title="A yoga school first and foremost"
          >
            <p>
              The Blooming Lotus Yoga retreat in Bali is an oasis of peace and tranquility. Firmly rooted in the classical
              yoga tradition, we offer one of the most in-depth yoga teacher trainings in Bali.
            </p>
            <p>
              Our 200-hour teacher training certification courses in Ubud are Yoga Alliance registered, allowing students
              to teach yoga worldwide. Our Bali yoga retreats are perfect for beginner and intermediate students who wish to
              deepen their practice while exploring the beauty of Bali and its spiritual culture. Our silent meditation
              retreats teach a complete technique that focuses on the ultimate aim of yoga: Self-Realisation.
            </p>
          </SplitFeature>
        </div>
      </section>

      <section id="founder" className="section section--warm">
        <div className="container">
          <SplitFeature
            image="/assets/images/hero/lighting-lamp.webp"
            imageAlt="Lily Goncalves, founder of Blooming Lotus Yoga"
            reverse
            eyebrow={`Our founder · ${lily.credentials}`}
            title={lily.name}
          >
            <p>{lily.summary}</p>
            {lily.bio.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </SplitFeature>
        </div>
      </section>

      <section id="lineage" className="section section--dark">
        <div className="container">
          <SectionHeading
            eyebrow="Our lineage"
            title="Inspired by the awakened ones"
            tone="light"
            align="center"
            intro="While we have had the fortune to study the great systems of yoga from many lineages, the essence of the Blooming Lotus Yoga programmes is inspired by the teachings of:"
          />
          <LineageGrid />
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <SectionHeading eyebrow="Our journey" title="From the Vedic sages to Ubud" align="center" />
          <Timeline items={journey} />
        </div>
      </section>

      <section id="teachers" className="section section--warm">
        <div className="container">
          <SectionHeading
            eyebrow="Women-led • Trauma-informed • Goddess empowered"
            title="Our teachers"
            intro="Teachers who share their profound insights into the authentic practice of yoga — and empower students to share this timeless wisdom with the world."
          />
          <TeacherGrid teachers={teachers} detailed />
        </div>
      </section>

      <section id="community" className="section">
        <div className="container">
          <SplitFeature
            image="/assets/images/community/pool-friends.webp"
            imageAlt="Two friends laughing by the villa pool"
            eyebrow="Lifelong community"
            title="An intimate yoga family that grows with you"
            cta={{ label: "Read student stories", href: "/reviews" }}
          >
            <p>
              During your retreat or course you’ll meet, connect and learn with fellow students from around the world —
              a growing community of yogis and yoginis to learn, share, reflect and grow with as your journey into the
              essence of yoga unfolds.
            </p>
            <p>
              Graduates are welcome back again and again: we are here to support, mentor and offer guidance whenever you
              need it.
            </p>
          </SplitFeature>
          <div className="block-gap">
            <StatsBand stats={community} />
          </div>
        </div>
      </section>

      <GivingSection />

      <AccreditationSection />

      <TestimonialsSection testimonials={byCategory("ytt").slice(0, 8)} title="What students say about our teachers…" tone="dark" />

      <CTASection
        image="/assets/images/venue/aerial-dusk.webp"
        title="Let us guide you on a journey back home"
        primary={{ label: "Yoga teacher training", href: "/yoga-teacher-training" }}
        secondary={{ label: "Yoga retreats", href: "/yoga-retreats" }}
      />
    </>
  );
}

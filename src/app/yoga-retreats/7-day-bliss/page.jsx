import RetreatDetail from "@/components/sections/retreats/RetreatDetail";
import { byTag, byCategory } from "@/data/testimonials";
import { blissFaqs } from "@/data/faqs";
import { pageMetadata } from "@/data/site";

export const metadata = pageMetadata({
  title: "7-Day Yoga Bliss Retreat in Ubud, Bali",
  description:
    "A 7-day, 6-night all-inclusive yoga retreat in Ubud, Bali from US$700. Starts every Sunday with three workshops, twice-daily yoga and daily meditation.",
  path: "/yoga-retreats/7-day-bliss",
  image: "/assets/images/hero/rice-field.webp",
});

export default function BlissRetreatPage() {
  const testimonials = [...byTag("bliss"), ...byCategory("retreat").filter((t) => !t.tags)].slice(0, 9);
  return (
    <RetreatDetail
      retreatKey="bliss"
      testimonials={testimonials}
      faqs={blissFaqs}
      intro="A week to deepen your practice in one of the most exquisite places on the planet"
      splitImage="/assets/images/practice/dancer-door.webp"
      splitAlt="A student in dancer pose framed by a carved Balinese doorway"
    />
  );
}

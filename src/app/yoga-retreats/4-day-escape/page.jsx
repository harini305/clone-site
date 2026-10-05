import RetreatDetail from "@/components/sections/retreats/RetreatDetail";
import { byTag, byCategory } from "@/data/testimonials";
import { escapeFaqs } from "@/data/faqs";
import { pageMetadata } from "@/data/site";

export const metadata = pageMetadata({
  title: "4-Day Yoga Escape Retreat in Ubud, Bali",
  description:
    "A 4-day, 3-night all-inclusive yoga retreat in Ubud, Bali from US$350. Starts every Sunday & Wednesday, max 16 guests, beginners welcome.",
  path: "/yoga-retreats/4-day-escape",
  image: "/assets/images/hero/river-meditation.webp",
});

export default function EscapeRetreatPage() {
  const testimonials = [...byTag("escape"), ...byCategory("retreat").filter((t) => !t.tags)].slice(0, 9);
  return (
    <RetreatDetail
      retreatKey="escape"
      testimonials={testimonials}
      faqs={escapeFaqs}
      intro="One of the most affordable, intimate & transformative yoga retreats Bali has to offer"
      splitImage="/assets/images/practice/temple-prayer.webp"
      splitAlt="A student offering a prayer at a Balinese water temple"
    />
  );
}

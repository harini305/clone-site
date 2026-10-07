import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import SplitFeature from "@/components/sections/shared/SplitFeature";
import ShowMore from "@/components/ui/ShowMore";
import Button from "@/components/ui/Button";
import styles from "./HomeStory.module.css";

/**
 * Intro: heading left, paragraph right, then three alternating image + text
 * blocks — welcome, retreats & training, lineage. Each carries the full
 * long-form copy from the source homepage behind “Show more”.
 */
export default function HomeStory() {
  return (
    <section id="content" className="section">
      <div className="container">
        <SectionHeading
          layout="split"
          eyebrow="Welcome"
          title="Let us guide you on a journey back home"
          intro="Blooming Lotus Yoga is a leading yoga training school in Bali with thousands of students worldwide. We make it easy for everyone to learn and teach the noble art of yoga and meditation so that they may live more inspired, compassionate & enlightened lives."
        />

        <div className={`${styles.blocks} swipe-mobile`}>
          <SplitFeature
            compact
            image="/assets/images/practice/shala-crow.webp"
            imageAlt="Students practicing crow pose together in the yoga shala"
            title="Welcome to Blooming Lotus Yoga"
          >
            <p>
              Blooming Lotus Yoga has taught yoga in Ubud, Bali for more than ten years, welcoming students from over 30
              countries for <Link href="/yoga-teacher-training">yoga teacher training certification courses</Link>,{" "}
              <Link href="/yoga-retreats">yoga retreats</Link> and <Link href="/meditation-retreats">meditation retreats</Link>.
            </p>
            <ShowMore>
              <p>
                Listen to the magical sounds of the exotic birds, the trickling waters of the holy river below, and be
                absorbed in the breathtaking views of our jungle location – as the Blooming Lotus Yoga retreat center
                transforms your life! With exceptional and highly gifted yoga teachers that teach from their hearts and the
                tradition of Yoga, let us guide you on a journey back home. Take this precious time out of your life and
                immerse yourself in the deeply healing and transformative practices of Yoga. Come join us on the “Island of
                the Gods” – the incredible oasis of Bali, and fill yourself with Bliss…
              </p>
            </ShowMore>
          </SplitFeature>

          <SplitFeature
            compact
            reverse
            image="/assets/images/practice/class-arms-up.webp"
            imageAlt="A yoga class in the shala with arms raised"
            title="Our yoga retreats and yoga teacher training in Bali"
          >
            <p>
              Our Bali yoga and meditation teacher training is a small-group immersion in the practice, philosophy and
              art of teaching yoga. Our <Link href="/yoga-retreats">yoga retreats in Ubud</Link> offer the same
              heart-based teaching in 4 or 7 days, and welcome complete beginners as well as intermediate students.
            </p>
            <ShowMore>
              <p>
                Our Yoga Alliance registered 225 hr. yoga and meditation teacher training course is one of the most
                holistic and spiritually focused yoga teacher training Bali has to offer.
              </p>
              <p>
                In these intensive trainings you will have the golden opportunity to explore the essence of meditation,
                pranayama, yoga asanas, mantra, tantra, Vedanta, ayurveda, Vedic astrology, yoga nidra, mudras, bandhas,
                chakras, and self-inquiry. This is an exceptional opportunity to learn how to teach yoga skillfully and
                compassionately while experiencing a deep inner transformation filled with bliss, love, joy, tears,
                challenges, and revelations that will forever change your life. These{" "}
                <Link href="/yoga-teacher-training">Bali 200-hour yoga teacher training</Link> courses include an
                additional 25 hours of meditation training and are a unique opportunity to fully immerse yourself into the
                practice and philosophy of yoga as you learn how to integrate these teachings into your practice, teaching,
                and day-to-day life. The focus of these courses is on developing the skills necessary to embody the
                essential teachings of yoga and to skillfully share these in your yoga classes and everyday living. The
                courses are choreographed to interweave the timeless wisdom of yoga, tantra, and Vedanta in an integrative
                way so that while we reflect upon their philosophies of freedom we are directly applying this wisdom and
                experiencing their fundamental truths.
              </p>
              <p>
                Our ongoing yoga holiday packages at our amazing Ubud yoga center are some of the most intimate,
                transformative, and affordable <Link href="/yoga-retreats/4-day-escape">yoga retreats in Bali</Link>. Our
                Bali yoga trips and wellness retreats are perfect for any budget and level of practitioner. The yoga
                retreats in Ubud are an intricate matrix of body/mind transformation that systematically builds both
                knowledge and experience side by side. They are expertly crafted so that they can facilitate the natural
                and organic evolution of each student to come into the clearest remembrance of their enlightened Self. Each
                student is treated with the utmost care and compassion while allowing each one to transform and awaken their
                inner wisdom and capacity for unconditional love while practicing the noble art of yoga. Through our daily
                yoga classes and inspirational yoga workshops, we will learn how to integrate the physical body with the
                pranic energy body. This facilitates a deep opening within the body/mind and allows for deep-rooted,
                subconscious, and unconscious mental/emotional patterns to arise, be witnessed, and ultimately be released.
                It is a deep purification process that allows us to release any self-limiting patterns and awaken into our
                fullest potential of embodiments of unconditional love and wisdom.
              </p>
              <p>
                Our Bali meditation retreats are an incredible opportunity to immerse ourselves in the silent stillness that
                reveals our highest potential. The quintessential practices of yoga are all about simply stilling the mind
                so that we may become aware of That, which is our Natural State. Full of Bliss, our True Self is the source
                of the Compassion, Love, and Truth we all seek to embody in each moment of our lives. Yet for so many of us,
                the day-to-day distractions in our lives continually draw our awareness from its natural abode in the Heart.
                In a modern world filled with busyness and distractions, it becomes essential to dedicate time to yourself
                regularly to immerse into the Heart with no other goal other than to simply witness the miracle of what IS.
                These profound <Link href="/meditation-retreats">Ubud meditation retreat</Link> teachings are offered for
                free (with food and accommodations being additional) and are a rare chance to dive deep within to the
                source of the unconditional love which unites us all.
              </p>
            </ShowMore>
          </SplitFeature>

          <SplitFeature
            compact
            image="/assets/images/practice/temple-prayer.webp"
            imageAlt="A student in prayer at a Balinese temple"
            title="Our lineage & yoga teachers"
          >
            <p>
              Blooming Lotus Yoga was founded by Lily Goncalves and teaches in the lineage of Sri Vidya, one of the world’s
              oldest living Goddess traditions. Bridging the gap between the authentic and spiritually focused practice of
              classical yoga with the needs of the modern world, the Blooming Lotus Yoga School offers yoga teacher training
              programs, Ubud yoga retreats and silent meditation courses.
            </p>
            <ShowMore>
              <p>
                Our teachers aspire to share their profound insights into the authentic practice of yoga during the
                transformational yoga teacher training in Bali, which empowers students with the methods necessary to share
                this timeless wisdom with the world.
              </p>
            </ShowMore>
            <div className={styles.cta}>
              <Button href="/about#teachers" variant="outline">
                Meet our teachers
              </Button>
            </div>
          </SplitFeature>
        </div>
      </div>
    </section>
  );
}

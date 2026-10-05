import Image from "next/image";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import styles from "./GuideCTA.module.css";

/** “YTT Unfiltered” free guide lead magnet. */
export default function GuideCTA() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.cover} data-reveal-image>
          <Image
            src="/assets/images/guide/ytt-unfiltered.webp"
            alt="Cover of the YTT Unfiltered guide"
            fill
            sizes="(max-width: 900px) 70vw, 35vw"
            className={styles.coverImg}
          />
        </div>
        <div>
          <Eyebrow tone="coral" data-reveal="fade">
            Feeling overwhelmed?
          </Eyebrow>
          <h2 className={styles.title} data-split>
            YTT <em>Unfiltered</em>
          </h2>
          <p className={styles.lead} data-reveal>
            What Instagram, Top-10 lists and AI won’t tell you about choosing a yoga teacher training in Bali — because
            we’d rather you choose wisely than only choose us.
          </p>
          <div className="cta-row" data-reveal>
            <Button href="/assets/docs/ytt-unfiltered.pdf">Download your free guide</Button>
          </div>
          <p className={styles.note} data-reveal>
            *No email required · PDF
          </p>
        </div>
      </div>
    </section>
  );
}

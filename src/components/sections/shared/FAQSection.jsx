import Accordion from "@/components/ui/Accordion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { contact } from "@/data/contact";
import styles from "./FAQSection.module.css";

export default function FAQSection({ faqs, id = "faq", title = "Frequently asked questions", tone = "default" }) {
  return (
    <section id={id} className={`section ${tone === "warm" ? "section--warm" : ""}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.aside}>
          <SectionHeading eyebrow="FAQ" title={title} size="small" />
          <p className={styles.note} data-reveal>
            Still have a question? {contact.responseTime}
          </p>
          <div className="cta-row" data-reveal>
            <Button href="/contact" variant="dark" size="sm">
              Contact Us
            </Button>
          </div>
        </div>
        <div data-reveal>
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}

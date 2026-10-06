import Accordion from "@/components/ui/Accordion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { contact } from "@/data/contact";
import styles from "./FAQSection.module.css";

/**
 * FAQ accordion. `secondary` ({ title, items }) adds a second accordion group
 * below the first, e.g. “People also ask…”.
 */
export default function FAQSection({
  faqs,
  id = "faq",
  title = "Frequently asked questions",
  tone = "default",
  secondary,
  defaultOpen = 0,
}) {
  return (
    <section id={id} className={`section ${tone === "warm" ? "section--warm" : ""}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.aside}>
          <SectionHeading eyebrow="FAQ" title={title} />
          <p className={styles.note} data-reveal>
            Still have a question? {contact.responseTime}
          </p>
          <div className="cta-row" data-reveal>
            <Button href="/contact" variant="dark" size="sm">
              Contact us
            </Button>
          </div>
        </div>
        <div>
          <div data-reveal>
            <Accordion items={faqs} defaultOpen={defaultOpen} />
          </div>
          {secondary && (
            <div className={styles.secondary} data-reveal>
              <h3 className={styles.secondaryTitle}>{secondary.title}</h3>
              <Accordion items={secondary.items} defaultOpen={null} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

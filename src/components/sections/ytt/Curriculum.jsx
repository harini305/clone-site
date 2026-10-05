import Image from "next/image";
import Tabs from "@/components/ui/Tabs";
import Accordion from "@/components/ui/Accordion";
import styles from "./Curriculum.module.css";

function Panel({ module }) {
  return (
    <div className={styles.panel}>
      <div className={styles.media}>
        <Image src={module.image} alt="" fill sizes="(max-width: 900px) 100vw, 40vw" className="media-cover" />
      </div>
      <ul className={styles.list}>
        {module.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

/** Body / Mind / Soul curriculum: tabs on larger screens, accordion on mobile. */
export default function Curriculum({ modules }) {
  return (
    <>
      <div className={styles.desktop} data-reveal>
        <Tabs
          label="Curriculum"
          tabs={modules.map((m) => ({ key: m.key, label: m.label, content: <Panel module={m} /> }))}
        />
      </div>
      <div className={styles.mobile} data-reveal>
        <Accordion
          items={modules.map((m) => ({
            q: m.label,
            a: [
              <ul key={m.key} className={styles.list}>
                {m.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>,
            ],
          }))}
        />
      </div>
    </>
  );
}

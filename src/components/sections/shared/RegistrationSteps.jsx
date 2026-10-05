import styles from "./RegistrationSteps.module.css";

export default function RegistrationSteps({ steps }) {
  return (
    <ol className={styles.steps} data-stagger>
      {steps.map((s) => (
        <li key={s.step} className={styles.step}>
          <span className={styles.num}>{s.step}</span>
          <h3 className={styles.title}>{s.title}</h3>
          <p className={styles.text}>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

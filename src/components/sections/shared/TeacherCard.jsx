import Image from "next/image";
import styles from "./TeacherCard.module.css";

export default function TeacherCard({ teacher, detailed = false }) {
  return (
    <article className={`${styles.card} hover-card`}>
      <div className={`${styles.portrait} hover-zoom`}>
        <Image src={teacher.image} alt={`Portrait of ${teacher.name}`} fill sizes="(max-width: 700px) 60vw, 280px" className="media-cover" />
      </div>
      <div className={styles.body}>
        <p className={styles.role}>
          {teacher.role} · {teacher.credentials}
        </p>
        <h3 className={styles.name}>{teacher.name}</h3>
        <p className={styles.summary}>{teacher.summary}</p>
        {detailed &&
          teacher.bio.map((p) => (
            <p key={p.slice(0, 24)} className={styles.bio}>
              {p}
            </p>
          ))}
      </div>
    </article>
  );
}

export function TeacherGrid({ teachers, detailed = false }) {
  return (
    <div className={`${styles.grid} ${detailed ? styles.detailed : ""} swipe-mobile`} data-stagger>
      {teachers.map((t) => (
        <TeacherCard key={t.slug} teacher={t} detailed={detailed} />
      ))}
    </div>
  );
}

import Image from "next/image";
import Button from "@/components/ui/Button";
import styles from "./RoomCard.module.css";

const usd = (n) => `US$${n.toLocaleString("en-US")}`;

/**
 * Accommodation option with specs, price and booking CTA. One room per list
 * can be `recommended`: its tag is filled and the card outlined, so it stands
 * out from the quieter tags on the other cards.
 */
export default function RoomCard({ room, priceNote = "per person", ctaHref = "/contact", ctaLabel, twoUp = false }) {
  return (
    <article className={`${styles.card} ${room.recommended ? styles.recommended : ""} hover-card`}>
      <div className={`${styles.media} hover-zoom`}>
        {/* Room photos are wide panoramas cropped to 16:10, so they draw about 1.5×
            the card width — sizes asks for that many pixels. */}
        <Image
          src={room.image}
          alt={`${room.name} accommodation`}
          fill
          sizes={twoUp ? "(max-width: 700px) 150vw, 75vw" : "(max-width: 700px) 150vw, (max-width: 1100px) 75vw, 50vw"}
          className={styles.img}
        />
        {room.tag && <span className={`${styles.tag} ${room.recommended ? styles.tagFeatured : ""}`}>{room.tag}</span>}
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{room.name}</h3>
        <ul className={styles.specs}>
          {room.specs.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className={styles.text}>{room.text}</p>
        <div className={styles.footer}>
          {room.price ? (
            <p className={styles.price}>
              <span className={styles.amount}>{usd(room.price)}</span>
              <span className={styles.note}>
                {priceNote}
                {room.deposit && <> · {usd(room.deposit)} deposit</>}
              </span>
            </p>
          ) : (
            <span />
          )}
          <Button href={ctaHref} variant="dark" size="sm">
            {ctaLabel || `Book ${room.name}`}
          </Button>
        </div>
      </div>
    </article>
  );
}

export function RoomGrid({ rooms, twoUp = false, ...cardProps }) {
  return (
    <div className={`${styles.grid} ${twoUp ? styles.two : ""} swipe-mobile`} data-stagger>
      {rooms.map((room) => (
        <RoomCard key={room.name} room={room} twoUp={twoUp} {...cardProps} />
      ))}
    </div>
  );
}

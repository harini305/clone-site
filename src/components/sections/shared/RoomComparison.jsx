import styles from "./RoomComparison.module.css";

const usd = (n) => `US$${n.toLocaleString("en-US")}`;

// Every room lists its specs in the same order, so each position is a row.
const rows = ["Guests", "Bed", "Bathroom", "Room features", "Views"];

/**
 * Side-by-side room comparison: one column per room, the recommended room's
 * column tinted and labelled. A real table that scrolls sideways on phones,
 * with the row labels pinned.
 */
export default function RoomComparison({ rooms, priceNote = "per person", label = "Compare rooms" }) {
  return (
    <>
      <p className={styles.hint} aria-hidden="true">
        Swipe to compare all {rooms.length} rooms →
      </p>
      <div className={styles.wrap} data-reveal tabIndex={0} role="region" aria-label={label}>
        <table className={styles.table}>
          <caption className="visually-hidden">{label}: price, guests, bed, bathroom, features and views</caption>
          <thead>
            <tr>
              <th scope="col">
                <span className="visually-hidden">Feature</span>
              </th>
              {rooms.map((room) => (
                <th key={room.name} scope="col" className={room.recommended ? styles.highlight : undefined}>
                  {room.recommended && <span className={styles.badge}>Recommended</span>}
                  {room.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Price</th>
              {rooms.map((room) => (
                <td key={room.name} className={room.recommended ? styles.highlight : undefined}>
                  <span className={styles.price}>{usd(room.price)}</span>
                  <span className={styles.note}>
                    {priceNote}
                    {room.deposit && <> · {usd(room.deposit)} deposit</>}
                  </span>
                </td>
              ))}
            </tr>
            {rows.map((rowLabel, index) => (
              <tr key={rowLabel}>
                <th scope="row">{rowLabel}</th>
                {rooms.map((room) => (
                  <td key={room.name} className={room.recommended ? styles.highlight : undefined}>
                    {room.specs[index]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

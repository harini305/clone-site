import { contact } from "@/data/contact";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  return (
    <a
      className={styles.button}
      href={contact.whatsappTeacherHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with a teacher on WhatsApp (opens in a new tab)"
    >
      <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.04 3C9.4 3 4 8.34 4 14.92c0 2.1.56 4.16 1.62 5.97L4 29l8.33-1.6a12.2 12.2 0 0 0 3.7.58C22.67 27.98 28 22.64 28 16.06 28 9.48 22.67 3 16.04 3Zm0 22.8c-1.2 0-2.38-.2-3.5-.6l-.25-.09-4.94.95.97-4.8-.16-.26a9.86 9.86 0 0 1-1.52-5.08c0-5.46 4.48-9.9 9.4-9.9 5.42 0 9.8 4.97 9.8 10.04 0 5.46-4.4 9.74-9.8 9.74Zm5.36-7.3c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.29-.77.95-.94 1.14-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.6.13-.13.3-.35.44-.52.15-.17.2-.3.3-.49.1-.2.05-.37-.03-.52-.07-.15-.66-1.6-.91-2.19-.24-.57-.48-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.29-1.03 1-1.03 2.45s1.06 2.84 1.2 3.04c.15.2 2.08 3.17 5.04 4.44.7.3 1.25.48 1.68.62.7.22 1.35.19 1.86.12.57-.09 1.75-.71 2-1.4.24-.68.24-1.27.17-1.4-.07-.12-.27-.2-.57-.34Z"
        />
      </svg>
      <span className={styles.label}>Speak to a teacher</span>
    </a>
  );
}

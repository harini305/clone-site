import Link from "next/link";
import styles from "./Button.module.css";

function Arrow() {
  return (
    <svg className={styles.arrow} width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h9M8.5 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Rounded-rectangle button in sentence case (arrow only on text links). Renders a Next <Link> for internal hrefs, <a> for external/files,
 * or a <button> when no href is given.
 * variant: primary | dark | light | outline | text
 */
export default function Button({
  href,
  variant = "primary",
  size = "md",
  arrow = variant === "text",
  external,
  className = "",
  children,
  ...rest
}) {
  const cls = [styles.btn, styles[variant], styles[size], className].join(" ");
  const content = (
    <>
      <span>{children}</span>
      {arrow && <Arrow />}
    </>
  );

  if (!href) {
    return (
      <button className={cls} type={rest.type || "button"} {...rest}>
        {content}
      </button>
    );
  }

  const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);
  const isFile = /\.(pdf|mp4)$/.test(href);

  if (isExternal || isFile) {
    return (
      <a
        className={cls}
        href={href}
        {...(isExternal && href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(isFile ? { target: "_blank", rel: "noopener" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={cls} href={href} {...rest}>
      {content}
    </Link>
  );
}

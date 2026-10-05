"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { gsap } from "@/animations/gsap";
import styles from "./Gallery.module.css";

/** Masonry-style gallery with an accessible <dialog> lightbox. */
export default function Gallery({ images, label = "Photo gallery" }) {
  const dialogRef = useRef(null);
  const imageRef = useRef(null);
  const [index, setIndex] = useState(null);

  const open = (i) => {
    setIndex(i);
    dialogRef.current?.showModal();
    document.body.classList.add("is-locked");
  };

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const step = useCallback(
    (dir) => setIndex((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (index === null || !imageRef.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.fromTo(imageRef.current, { autoAlpha: 0, scale: reduce ? 1 : 0.97 }, { autoAlpha: 1, scale: 1, duration: 0.6, ease: "power3.out" });
  }, [index]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;
    const onClose = () => {
      document.body.classList.remove("is-locked");
      setIndex(null);
    };
    const onKey = (e) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    dialog.addEventListener("close", onClose);
    dialog.addEventListener("keydown", onKey);
    return () => {
      dialog.removeEventListener("close", onClose);
      dialog.removeEventListener("keydown", onKey);
    };
  }, [step]);

  const current = index !== null ? images[index] : null;

  return (
    <>
      <ul className={styles.grid} aria-label={label} data-stagger>
        {images.map((img, i) => (
          <li key={img.src} className={styles.item}>
            <button type="button" className={styles.thumb} onClick={() => open(i)} aria-label={`Open image: ${img.alt}`}>
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 700px) 50vw, 25vw" className={styles.img} />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label="Image viewer"
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        {current && (
          <div className={styles.viewer}>
            <div className={styles.frame} ref={imageRef}>
              <Image src={current.src} alt={current.alt} fill sizes="90vw" className={styles.full} />
            </div>
            <p className={styles.caption}>
              {current.alt} <span>· {index + 1} / {images.length}</span>
            </p>
            <button type="button" className={`${styles.nav} ${styles.prev}`} onClick={() => step(-1)} aria-label="Previous image">
              ‹
            </button>
            <button type="button" className={`${styles.nav} ${styles.next}`} onClick={() => step(1)} aria-label="Next image">
              ›
            </button>
            <button type="button" className={styles.close} onClick={close} aria-label="Close image viewer">
              ×
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}

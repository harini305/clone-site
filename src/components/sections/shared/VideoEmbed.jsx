"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./VideoEmbed.module.css";

/**
 * Click-to-load YouTube embed: shows a local poster first so no third-party
 * scripts load until the visitor chooses to play.
 */
export default function VideoEmbed({ youtubeId, poster, title }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={styles.wrap} data-reveal-image>
      {playing ? (
        <iframe
          className={styles.frame}
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" className={styles.poster} onClick={() => setPlaying(true)} aria-label={`Play video: ${title}`}>
          <Image src={poster} alt="" fill sizes="(max-width: 1100px) 100vw, 1100px" className="media-cover" />
          <span className={styles.shade} aria-hidden="true" />
          <span className={styles.play} aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24">
              <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
            </svg>
          </span>
          <span className={styles.label}>{title}</span>
        </button>
      )}
    </div>
  );
}

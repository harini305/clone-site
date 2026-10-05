// Original line icons for the home hero trust cards (white, 1.5px stroke).
const base = {
  width: 52,
  height: 52,
  viewBox: "0 0 52 52",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function LotusIcon() {
  return (
    <svg {...base}>
      <path d="M26 12c4.5 5 6.5 10 6.5 15S30.5 37 26 41c-4.5-4-6.5-9-6.5-14S21.5 17 26 12Z" />
      <path d="M19.5 22.5c-4.2-1.6-8.4-1.6-11.5-.3 1 6.8 5.7 13.5 13.6 17.4" />
      <path d="M32.5 22.5c4.2-1.6 8.4-1.6 11.5-.3-1 6.8-5.7 13.5-13.6 17.4" />
      <path d="M10 41.5h32" />
      <circle cx="26" cy="7" r="1.4" />
    </svg>
  );
}

export function PinIcon() {
  return (
    <svg {...base}>
      <path d="M26 44s13-12.2 13-22a13 13 0 1 0-26 0c0 9.8 13 22 13 22Z" />
      <path d="M20 24.5c2-3.6 4-5.5 6-5.5s4 1.9 6 5.5" />
      <path d="M17.5 26.5h17" />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg {...base}>
      <circle cx="26" cy="26" r="16" />
      <path d="M10 26h32M26 10c4.5 4.4 6.8 9.8 6.8 16S30.5 37.6 26 42c-4.5-4.4-6.8-9.8-6.8-16S21.5 14.4 26 10Z" />
      <path d="M12.5 17.5h27M12.5 34.5h27" />
      <path d="M6 30.5c-1.4 5 2.8 9.6 9.4 11.4M46 21.5c1.4-5-2.8-9.6-9.4-11.4" />
    </svg>
  );
}

export function MeditationIcon() {
  return (
    <svg {...base}>
      <circle cx="26" cy="11" r="4" />
      <path d="M26 16v10" />
      <path d="M26 19c-4 0-6.5 3-8 7.5l-3.5 5" />
      <path d="M26 19c4 0 6.5 3 8 7.5l3.5 5" />
      <path d="M14.5 31.5c-3.4 1.2-5.5 3-5.5 5 0 3.6 7.6 6.5 17 6.5s17-2.9 17-6.5c0-2-2.1-3.8-5.5-5" />
      <path d="M17.5 36.5c3 1 5.9 1.5 8.5 1.5s5.5-.5 8.5-1.5" />
    </svg>
  );
}

/** "Scroll to explore" — arched text over a mouse with a moving wheel dot. */
export function ScrollCue() {
  return (
    <svg width="168" height="76" viewBox="0 0 168 76" fill="none" aria-hidden="true">
      <defs>
        <path id="scroll-arc" d="M12 82a72 72 0 0 1 144 0" />
      </defs>
      <text fill="currentColor" fontSize="12.5" letterSpacing="2.2" fontFamily="var(--font-sans), sans-serif">
        <textPath href="#scroll-arc" startOffset="50%" textAnchor="middle">
          SCROLL TO EXPLORE
        </textPath>
      </text>
      <rect x="75" y="40" width="18" height="30" rx="9" stroke="currentColor" strokeWidth="1.5" />
      <circle className="scroll-wheel" cx="84" cy="49" r="2" fill="currentColor" />
    </svg>
  );
}

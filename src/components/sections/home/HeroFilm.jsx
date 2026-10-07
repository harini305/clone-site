"use client";

import { useEffect, useRef } from "react";
import heroImages from "@/data/heroImages";

/**
 * Home hero "brand film": four stills, each with its own camera move, joined
 * by an animated luma-matte transition — the brightness of the outgoing shot
 * (mist, sky, water highlights) burns through first to reveal the next one,
 * with a soft organic edge and a faint glow along the reveal front.
 *
 * One WebGL quad, two textures per frame. The HD still underneath (HeroImage)
 * is the first paint; the canvas fades in once all four shots are on the GPU.
 * - Never runs with prefers-reduced-motion, data-saver or without WebGL.
 * - Paused while the hero is off-screen or the tab is hidden.
 * - Phones / touch: device-pixel-ratio 1, single-tap matte, no parallax warp
 *   or grain — same film, lighter shader.
 */

// Camera per shot over its whole time on screen (incoming transition → hold →
// outgoing transition). s = zoom, c = frame centre in image space (0–1),
// focus = subject the frame leans toward on tall (portrait) screens.
const SHOTS = [
  {
    // 1 · Establishing aerial — slow drone push in toward the villas.
    src: "/assets/images/hero/film/shot-1-establishing.webp",
    s: [1.03, 1.17],
    c: [[0.5, 0.48], [0.6, 0.58]],
    focus: [0.63, 0.62],
    exposure: 0.94,
  },
  {
    // 2 · Eye-level lateral — truck past the terraces; leaves at the frame
    // edges travel faster than the villas for a foreground parallax.
    src: "/assets/images/hero/film/shot-2-terraces.webp",
    s: [1.14, 1.16],
    c: [[0.6, 0.5], [0.42, 0.52]],
    focus: [0.52, 0.5],
    exposure: 0.96,
    parallax: 0.05,
  },
  {
    // 3 · Close detail — slow push and tilt down into the light on the water.
    src: "/assets/images/hero/film/shot-3-pool-detail.webp",
    s: [1.06, 1.22],
    c: [[0.48, 0.44], [0.6, 0.64]],
    focus: [0.56, 0.62],
    exposure: 0.86,
  },
  {
    // 4 · Closing wide — pull back and rise to the sunset and the ocean.
    src: "/assets/images/hero/film/shot-4-sunset.webp",
    s: [1.22, 1.03],
    c: [[0.64, 0.62], [0.5, 0.47]],
    focus: [0.7, 0.58],
    exposure: 1,
  },
];

const HOLD = 5.2; // seconds a shot plays on its own
const TRANS = 2.2; // seconds of luma-matte transition
const SEG = HOLD + TRANS;
const SPAN = HOLD + 2 * TRANS; // a shot's full time on screen
const TOTAL = SEG * SHOTS.length;

const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = vec2(aPos.x * 0.5 + 0.5, 0.5 - aPos.y * 0.5);
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
varying vec2 vUv;
uniform sampler2D uA;
uniform sampler2D uB;
uniform vec4 uRectA;
uniform vec4 uRectB;
uniform float uParA;
uniform float uParB;
uniform float uExpA;
uniform float uExpB;
uniform float uMix;
uniform float uTime;
uniform float uHQ;
uniform vec2 uRes;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
// Foreground parallax: the frame edges shift more than the centre.
vec2 warp(vec2 uv, float par) {
  float e = abs(uv.x - 0.5) * 2.0;
  return vec2(uv.x + par * e * e * e, uv.y);
}
vec3 shotA(vec2 uv) { return texture2D(uA, uRectA.xy + warp(uv, uParA) * uRectA.zw).rgb; }
vec3 shotB(vec2 uv) { return texture2D(uB, uRectB.xy + warp(uv, uParB) * uRectB.zw).rgb; }
float luma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }

void main() {
  vec3 a = shotA(vUv);
  vec3 col = a * uExpA;
  if (uMix > 0.0) {
    // Matte key: the outgoing shot's (softened) brightness, broken up with
    // slow-drifting noise so the reveal front is organic, not a hard contour.
    float l = luma(a);
    if (uHQ > 0.5) {
      vec2 o = 9.0 / uRes;
      l = (l * 2.0 + luma(shotA(vUv + vec2(o.x, 0.0))) + luma(shotA(vUv - vec2(o.x, 0.0)))
                    + luma(shotA(vUv + vec2(0.0, o.y))) + luma(shotA(vUv - vec2(0.0, o.y)))) / 6.0;
    }
    vec2 np = vUv * vec2(uRes.x / uRes.y, 1.0);
    float n = noise(np * 2.6 + uTime * 0.07) * 0.65 + noise(np * 7.0 - uTime * 0.05) * 0.35;
    float key = mix(l, n, 0.3);
    const float soft = 0.14;
    float thr = mix(1.0 + soft, -soft, uMix);
    float m = smoothstep(thr - soft, thr + soft, key);
    col = mix(col, shotB(vUv) * uExpB, m);
    // Faint warm light along the reveal front.
    col += m * (1.0 - m) * 4.0 * vec3(1.0, 0.93, 0.82) * 0.14;
  }
  if (uHQ > 0.5) col += (hash(vUv * uRes + fract(uTime) * 91.0) - 0.5) * 0.028;
  gl_FragColor = vec4(col, 1.0);
}`;

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (t) => t * t * (3 - 2 * t);
const smoother = (t) => t * t * t * (t * (t * 6 - 15) + 10);
// Mostly linear (the camera never stops) with a little ease at each end.
const glide = (p) => p * 0.55 + smooth(p) * 0.45;

// Texture window for a shot: cover-fit, zoomed, centred, kept inside the image.
function frameRect(view, img, shot, p, extraScale) {
  const e = glide(clamp(p, 0, 1));
  const s = lerp(shot.s[0], shot.s[1], e) * extraScale;
  // On tall screens, lean the path toward the subject.
  const lean = clamp((1.2 - view) / 1.0, 0, 0.6);
  let cx = lerp(lerp(shot.c[0][0], shot.c[1][0], e), shot.focus[0], lean);
  let cy = lerp(lerp(shot.c[0][1], shot.c[1][1], e), shot.focus[1], lean);
  let sx = 1;
  let sy = 1;
  if (view > img) sy = img / view;
  else sx = view / img;
  sx /= s;
  sy /= s;
  cx = clamp(cx, sx / 2, 1 - sx / 2);
  cy = clamp(cy, sy / 2, 1 - sy / 2);
  return [cx - sx / 2, cy - sy / 2, sx, sy];
}

// Pick the smallest pre-sized file that still covers the canvas when zoomed.
function pickSrc(src, need) {
  const list = heroImages[src]?.srcset;
  if (!list) return src;
  return (list.find(([w]) => w >= need) || list.at(-1))[1];
}

function compile(gl, type, source) {
  const sh = gl.createShader(type);
  gl.shaderSource(sh, source);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh) || "shader");
  return sh;
}

export default function HeroFilm({ className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || navigator.connection?.saveData) {
      return undefined;
    }
    const gl = canvas.getContext("webgl", { alpha: false, antialias: false, depth: false, powerPreference: "high-performance" });
    if (!gl) return undefined;

    const light = window.matchMedia("(max-width: 768px), (pointer: coarse)").matches;
    const dprCap = light ? 1 : 1.5;

    let program;
    try {
      program = gl.createProgram();
      gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERT));
      gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAG));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error("link");
    } catch {
      return undefined; // the still stays
    }
    gl.useProgram(program);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
    const u = {};
    ["uA", "uB", "uRectA", "uRectB", "uParA", "uParB", "uExpA", "uExpB", "uMix", "uTime", "uHQ", "uRes"].forEach((n) => {
      u[n] = gl.getUniformLocation(program, n);
    });
    gl.uniform1i(u.uA, 0);
    gl.uniform1i(u.uB, 1);
    gl.uniform1f(u.uHQ, light ? 0 : 1);

    let width = 0;
    let height = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, dprCap);
      width = Math.max(1, Math.round(canvas.clientWidth * dpr));
      height = Math.max(1, Math.round(canvas.clientHeight * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
      gl.uniform2f(u.uRes, width, height);
    };
    resize();

    const textures = [];
    const aspects = [];
    let disposed = false;
    let raf = 0;
    let running = false;
    let inView = true;
    let started = false;
    let last = 0;
    let time = 0;

    const draw = () => {
      const view = width / height;
      const k = Math.floor(time / SEG) % SHOTS.length;
      const local = time - Math.floor(time / SEG) * SEG;
      const a = k;
      const b = (k + 1) % SHOTS.length;
      const mix = local < HOLD ? 0 : smoother((local - HOLD) / TRANS);
      const pA = (local + TRANS) / SPAN;
      const pB = (local - HOLD) / SPAN;
      // The outgoing shot pushes in a touch; the incoming one settles from a
      // slightly closer framing as the matte opens.
      const rectA = frameRect(view, aspects[a], SHOTS[a], pA, 1 + 0.025 * mix);
      const rectB = frameRect(view, aspects[b], SHOTS[b], pB, 1 + 0.05 * (1 - mix));
      const par = (shot, p) => (light || !shot.parallax ? 0 : -(glide(clamp(p, 0, 1)) - 0.5) * shot.parallax);

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, textures[a]);
      gl.activeTexture(gl.TEXTURE1);
      gl.bindTexture(gl.TEXTURE_2D, textures[b]);
      gl.uniform4fv(u.uRectA, rectA);
      gl.uniform4fv(u.uRectB, rectB);
      gl.uniform1f(u.uParA, par(SHOTS[a], pA));
      gl.uniform1f(u.uParB, par(SHOTS[b], pB));
      gl.uniform1f(u.uExpA, SHOTS[a].exposure);
      gl.uniform1f(u.uExpB, SHOTS[b].exposure);
      gl.uniform1f(u.uMix, mix);
      gl.uniform1f(u.uTime, time % 1000);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const frame = (now) => {
      raf = 0;
      if (!running) return;
      time = (time + clamp((now - last) / 1000, 0, 0.05)) % TOTAL;
      last = now;
      draw();
      raf = requestAnimationFrame(frame);
    };
    const sync = () => {
      const should = started && inView && !document.hidden && !disposed;
      if (should && !running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(frame);
      } else if (!should && running) {
        running = false;
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const load = (src) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.decoding = "async";
        img.onload = () => (img.decode ? img.decode().catch(() => {}) : Promise.resolve()).then(() => resolve(img));
        img.onerror = reject;
        img.src = src;
      });

    const upload = (img) => {
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
      return tex;
    };

    const nextFrame = () => new Promise((r) => requestAnimationFrame(() => r()));

    const begin = async () => {
      // Width that covers the canvas at the closest zoom, whatever its shape.
      const img = 16 / 9;
      const view = width / height;
      const need = (view > img ? width : height * img) * 1.15;
      try {
        const imgs = await Promise.all(SHOTS.map((s) => load(pickSrc(s.src, need))));
        for (const im of imgs) {
          if (disposed) return;
          textures.push(upload(im)); // one upload per frame — no jank spike
          aspects.push(im.naturalWidth / im.naturalHeight);
          await nextFrame();
        }
      } catch {
        return; // the still stays
      }
      if (disposed) return;
      started = true;
      draw();
      canvas.style.opacity = "1";
      sync();
    };

    // Start after the page has loaded, so the film never competes with it.
    let idle = 0;
    const onLoad = () => {
      idle = window.setTimeout(begin, 150);
    };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });

    const ro = new ResizeObserver(() => {
      resize();
      if (started && !running) draw();
    });
    ro.observe(canvas);
    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0.02 }
    );
    io.observe(canvas);
    document.addEventListener("visibilitychange", sync);
    const onLost = (e) => {
      e.preventDefault();
      disposed = true;
      canvas.style.opacity = "0";
      sync();
    };
    canvas.addEventListener("webglcontextlost", onLost);

    return () => {
      disposed = true;
      sync();
      window.removeEventListener("load", onLoad);
      window.clearTimeout(idle);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
      canvas.removeEventListener("webglcontextlost", onLost);
      textures.forEach((t) => gl.deleteTexture(t));
      gl.deleteBuffer(buf);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className={className}
      aria-hidden="true"
      style={{ opacity: 0, transition: "opacity 1.2s ease" }}
    />
  );
}

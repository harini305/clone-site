"""
Render the home hero loops from the HD aerial stills.

Cinematic drone-style move:
  1. opens on the whole photo (full frame, held briefly),
  2. travels across the villas while zooming in,
  3. eases back out to the full frame, so the loop is seamless.

The camera path is a set of keyframes (centre + window width in source pixels)
interpolated with a smooth curve. Each frame is cut from the photo with
sub-pixel Lanczos resampling, so the motion has no stepping or jitter. The
tightest framing is about 1.65x the photo's native resolution.

usage: python scripts/render-hero.py desktop|portrait out.mp4 [crf]
Put the source photos in scripts/source-photos/ (or set HERO_SRC):
  villas-wide.jpg  (2096x1184)  -> desktop loop
  villas-tall.jpg  (1152x2032)  -> phone loop
"""
import math
import os
import subprocess
import sys

import imageio_ffmpeg
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.environ.get("HERO_SRC", os.path.join(HERE, "source-photos"))
FPS = 30


def smooth(t):
    t = max(0.0, min(1.0, t))
    return t * t * (3 - 2 * t)


def catmull(p0, p1, p2, p3, t):
    t2, t3 = t * t, t * t * t
    return 0.5 * ((2 * p1) + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3)


def path(keys, t):
    """keys: [(time, cx, cy, win)], smooth Catmull-Rom through them, eased per segment."""
    for i in range(len(keys) - 1):
        if keys[i][0] <= t <= keys[i + 1][0]:
            a = keys[max(i - 1, 0)]
            b, c = keys[i], keys[i + 1]
            d = keys[min(i + 2, len(keys) - 1)]
            u = smooth((t - b[0]) / (c[0] - b[0]))
            return tuple(catmull(a[k], b[k], c[k], d[k], u) for k in (1, 2, 3))
    return keys[-1][1:]


def frame(img, out_w, out_h, cx, cy, win):
    w, h = img.size
    win = min(win, w, h * out_w / out_h)  # never wider than the photo (curve overshoot)
    win_h = win * out_h / out_w
    cx = max(win / 2, min(w - win / 2, cx))
    cy = max(win_h / 2, min(h - win_h / 2, cy))
    box = (max(0.0, cx - win / 2), max(0.0, cy - win_h / 2), min(w, cx + win / 2), min(h, cy + win_h / 2))
    return img.resize((out_w, out_h), Image.LANCZOS, box=box)


def render(img, size, keys, duration):
    for i in range(int(duration * FPS)):
        cx, cy, win = path(keys, i / FPS)
        yield frame(img, size[0], size[1], cx, cy, win)


def desktop():
    img = Image.open(os.path.join(SRC, "villas-wide.jpg")).convert("RGB")  # 2096x1184
    w, h = img.size
    full = min(w, h * 16 / 9)  # whole photo in a 16:9 frame
    # time, centre x, centre y, window width (source px). 1920 = native 1:1; 1160 ≈ 1.65x.
    keys = [
        (0.0, w / 2, h / 2, full),        # whole photo
        (1.6, w / 2, h / 2, full),        # brief hold
        (6.0, 880, 560, 1320),            # glide in over the upper-left villas
        (10.0, 1240, 600, 1160),          # travel right along the terraces, closest framing
        (13.4, w / 2, h / 2, full),       # pull back out to the whole photo
        (15.0, w / 2, h / 2, full),       # rest (matches frame 0 -> seamless loop)
    ]
    return img, (1920, 1080), keys, 15.0


def portrait():
    img = Image.open(os.path.join(SRC, "villas-tall.jpg")).convert("RGB")  # 1152x2032
    w, h = img.size
    full = min(w, h * 9 / 16)
    keys = [
        (0.0, w / 2, h / 2, full),
        (1.6, w / 2, h / 2, full),
        (6.0, 520, 800, 720),             # in toward the upper villas
        (10.0, 650, 1200, 660),           # travel down the terraces toward the pool
        (13.4, w / 2, h / 2, full),
        (15.0, w / 2, h / 2, full),
    ]
    return img, (1080, 1920), keys, 15.0


def main():
    kind, out = sys.argv[1], sys.argv[2]
    crf = sys.argv[3] if len(sys.argv) > 3 else "20"
    img, size, keys, duration = desktop() if kind == "desktop" else portrait()
    cmd = [
        imageio_ffmpeg.get_ffmpeg_exe(), "-y", "-hide_banner", "-loglevel", "error",
        "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{size[0]}x{size[1]}", "-r", str(FPS), "-i", "-",
        "-c:v", "libx264", "-preset", "slower", "-tune", "film", "-crf", crf,
        "-profile:v", "high", "-pix_fmt", "yuv420p", "-movflags", "+faststart", out,
    ]
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE)
    for f in render(img, size, keys, duration):
        proc.stdin.write(f.tobytes())
    proc.stdin.close()
    proc.wait()


if __name__ == "__main__":
    main()

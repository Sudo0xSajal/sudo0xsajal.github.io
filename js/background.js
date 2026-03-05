/* ═══════════════════════════════════════════════════
   background.js — Animated pulsar map canvas (bg)
═══════════════════════════════════════════════════ */

const bgC = document.getElementById('bgc');
const bgX = bgC.getContext('2d');
let mx = .5, my = .5, bgT = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX / innerWidth;
  my = e.clientY / innerHeight;
});

function resizeBg() { bgC.width = innerWidth; bgC.height = innerHeight; }
resizeBg();
addEventListener('resize', resizeBg);

// Pulsar spoke records: angle, length fraction, frequency
const PSR = [
  { a: .18,  l: .30, f: 1.4 },
  { a: 1.05, l: .20, f: 2.2 },
  { a: 2.0,  l: .36, f: .9  },
  { a: 2.85, l: .24, f: 3.1 },
  { a: 3.72, l: .32, f: 1.7 },
  { a: 4.5,  l: .16, f: 4.4 },
  { a: 5.2,  l: .27, f: 2.8 },
  { a: 5.82, l: .29, f: 2.0 },
];

function drawBg() {
  bgX.clearRect(0, 0, bgC.width, bgC.height);
  bgT += .003;

  const cx = bgC.width  / 2 + (mx - .5) * 40;
  const cy = bgC.height / 2 + (my - .5) * 40;
  const mL = Math.min(bgC.width, bgC.height) * .42;

  // Grid
  bgX.strokeStyle = 'rgba(0,242,255,0.022)';
  bgX.lineWidth   = .5;
  for (let x = 0; x < bgC.width;  x += 80) { bgX.beginPath(); bgX.moveTo(x, 0); bgX.lineTo(x, bgC.height); bgX.stroke(); }
  for (let y = 0; y < bgC.height; y += 80) { bgX.beginPath(); bgX.moveTo(0, y); bgX.lineTo(bgC.width, y);  bgX.stroke(); }

  // Spokes + tick marks
  PSR.forEach((p, i) => {
    const a   = p.a + bgT * .1 + (mx - .5) * .18;
    const len = p.l * mL;
    bgX.beginPath(); bgX.moveTo(cx, cy); bgX.lineTo(cx + Math.cos(a) * len, cy + Math.sin(a) * len);
    bgX.strokeStyle = `rgba(0,242,255,${.035 + .02 * Math.sin(bgT * p.f + i)})`;
    bgX.lineWidth   = .6; bgX.stroke();

    const ex = cx + Math.cos(a) * len, ey = cy + Math.sin(a) * len;
    const ts = 4 + 2 * Math.sin(bgT * p.f * 2);
    bgX.beginPath();
    bgX.moveTo(ex - Math.sin(a) * ts, ey + Math.cos(a) * ts);
    bgX.lineTo(ex + Math.sin(a) * ts, ey - Math.cos(a) * ts);
    bgX.strokeStyle = `rgba(255,204,51,${.09 + .06 * Math.sin(bgT * p.f * 3)})`;
    bgX.lineWidth   = 1.1; bgX.stroke();
  });

  // Centre glow
  const g = bgX.createRadialGradient(cx, cy, 0, cx, cy, 60);
  g.addColorStop(0, 'rgba(255,204,51,0.08)');
  g.addColorStop(1, 'transparent');
  bgX.beginPath(); bgX.arc(cx, cy, 60, 0, Math.PI * 2);
  bgX.fillStyle = g; bgX.fill();

  // Centre dot
  bgX.beginPath(); bgX.arc(cx, cy, 2.5, 0, Math.PI * 2);
  bgX.fillStyle = `rgba(255,204,51,${.5 + .3 * Math.sin(bgT * 3)})`; bgX.fill();

  requestAnimationFrame(drawBg);
}
drawBg();

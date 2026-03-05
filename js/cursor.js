/* ═══════════════════════════════════════════════════
   cursor.js — Custom cursor, IST clock, sidebar toggle
═══════════════════════════════════════════════════ */

// ── Custom Cursor ──
const C1 = document.getElementById('cur');
const C2 = document.getElementById('cur2');

document.addEventListener('mousemove', e => {
  C1.style.left = e.clientX + 'px'; C1.style.top = e.clientY + 'px';
  C2.style.left = e.clientX + 'px'; C2.style.top = e.clientY + 'px';
});
document.addEventListener('mousedown', () => { C1.style.width = '9px';  C1.style.height = '9px'; });
document.addEventListener('mouseup',   () => { C1.style.width = '16px'; C1.style.height = '16px'; });

// ── IST Clock ──
function tick() {
  const n   = new Date();
  const ist = new Date(n.getTime() + 5.5 * 3600000);
  const p   = x => String(x).padStart(2, '0');
  const el  = document.getElementById('clk');
  if (el) el.textContent = `${p(ist.getUTCHours())}:${p(ist.getUTCMinutes())}:${p(ist.getUTCSeconds())} IST`;
}
setInterval(tick, 1000); tick();

// ── Sidebar Toggle ──
function toggleSide() {
  document.getElementById('side').classList.toggle('open');
  document.getElementById('overlay').style.display =
    document.getElementById('side').classList.contains('open') ? 'block' : 'none';
}

function closeSide() {
  document.getElementById('side').classList.remove('open');
  document.getElementById('overlay').style.display = 'none';
}

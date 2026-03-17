// cursor.js — custom cursor + IST clock

const C1 = document.getElementById('cur');
const C2 = document.getElementById('cur2');

document.addEventListener('mousemove', e => {
  C1.style.left = e.clientX + 'px'; C1.style.top = e.clientY + 'px';
  C2.style.left = e.clientX + 'px'; C2.style.top = e.clientY + 'px';
});
document.addEventListener('mousedown', () => { C1.style.width = '7px'; C1.style.height = '7px'; });
document.addEventListener('mouseup',   () => { C1.style.width = '12px'; C1.style.height = '12px'; });

// IST clock
function tick() {
  const n   = new Date();
  const ist = new Date(n.getTime() + 5.5 * 3600000);
  const p   = x => String(x).padStart(2, '0');
  const ts  = p(ist.getUTCHours()) + ':' + p(ist.getUTCMinutes()) + ':' + p(ist.getUTCSeconds()) + ' IST';
  const a = document.getElementById('clk');     if (a) a.textContent = ts;
  const b = document.getElementById('sbar-clk'); if (b) b.textContent = ts;
}
setInterval(tick, 1000);
tick();

// Sidebar toggle
function toggleSide() {
  document.getElementById('side').classList.toggle('open');
  document.getElementById('ov').style.display =
    document.getElementById('side').classList.contains('open') ? 'block' : 'none';
}
function closeSide() {
  document.getElementById('side').classList.remove('open');
  document.getElementById('ov').style.display = 'none';
}

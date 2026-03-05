/* ═══════════════════════════════════════════════════
   nav.js — Page navigation + skill bar animation
═══════════════════════════════════════════════════ */

function nav(name) {
  playClk(); closeSide();
  document.querySelectorAll('.pg').forEach(p => p.classList.remove('on'));
  document.querySelectorAll('.ni').forEach(n => n.classList.remove('on'));
  document.getElementById('pg-' + name).classList.add('on');
  document.querySelector(`[data-p="${name}"]`)?.classList.add('on');
  if (name === 'bio' || name === 'skills') aniSb();
}

function aniSb() {
  setTimeout(() => {
    document.querySelectorAll('.sbf').forEach(b => {
      b.style.width = b.getAttribute('data-w') + '%';
    });
  }, 100);
}

// Trigger skill bars after boot completes
setTimeout(aniSb, 4500);
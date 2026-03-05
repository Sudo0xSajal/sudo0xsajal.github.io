/* ═══════════════════════════════════════════════════
   audio.js — Web Audio API: click SFX + ambient drone
═══════════════════════════════════════════════════ */

let aC = null, ambOn = false, ambG = null, ambS = null;

function initA() {
  if (!aC) aC = new (window.AudioContext || window.webkitAudioContext)();
}

function playClk() {
  initA();
  const o = aC.createOscillator(), g = aC.createGain();
  o.connect(g); g.connect(aC.destination);
  o.type = 'square';
  o.frequency.setValueAtTime(1100, aC.currentTime);
  o.frequency.exponentialRampToValueAtTime(120, aC.currentTime + .055);
  g.gain.setValueAtTime(.05, aC.currentTime);
  g.gain.exponentialRampToValueAtTime(.001, aC.currentTime + .055);
  o.start(); o.stop(aC.currentTime + .055);
}

function playAmb() {
  initA();
  const btn = document.getElementById('ambbtn');
  if (ambOn) {
    ambG.gain.exponentialRampToValueAtTime(.0001, aC.currentTime + 1.5);
    setTimeout(() => { ambS?.stop(); ambOn = false; }, 1600);
    btn.classList.remove('gld');
    return;
  }
  const bs  = aC.sampleRate * 4;
  const buf = aC.createBuffer(1, bs, aC.sampleRate);
  const d   = buf.getChannelData(0);
  let lo = 0;
  for (let i = 0; i < bs; i++) {
    const w = Math.random() * 2 - 1;
    d[i] = (lo + .02 * w) / 1.02; lo = d[i]; d[i] *= 3.5;
  }
  const s = aC.createBufferSource(); s.buffer = buf; s.loop = true;
  const g = aC.createGain();
  g.gain.setValueAtTime(.0001, aC.currentTime);
  g.gain.exponentialRampToValueAtTime(.06, aC.currentTime + 2);
  const f = aC.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 300;
  s.connect(f); f.connect(g); g.connect(aC.destination); s.start();
  ambS = s; ambG = g; ambOn = true; btn.classList.add('gld');
}

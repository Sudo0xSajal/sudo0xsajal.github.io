/* ═══════════════════════════════════════════════════
   boot.js — Boot sequence animation
═══════════════════════════════════════════════════ */

const BOOT = [
  { t: 'h',  v: '══════════════════════════════════════════════', d: 50  },
  { t: 'h',  v: '  AETHEL_OS v1.0 // PENTEST OPERATIVE INIT',    d: 100 },
  { t: 'h',  v: '══════════════════════════════════════════════', d: 160 },
  { t: 'd',  v: '',                                               d: 220 },
  { t: 'd',  v: '[ VERIFY ] Universal constants...',             d: 280 },
  { t: 'd',  v: '  > Hydrogen spin-flip: 1,420,405,751.768 Hz', d: 440 },
  { t: 'ok', v: '    VERIFIED .................................. [OK]', d: 660 },
  { t: 'd',  v: '  > Prime sequence: 2,3,5,7,11,13...',         d: 780 },
  { t: 'ok', v: '    PATTERN MATCH ............................. [OK]', d: 980 },
  { t: 'd',  v: '',                                               d: 1080 },
  { t: 'd',  v: '[ MOUNT ] Loading archives...',                 d: 1160 },
  { t: 'ok', v: '  > /root/bio/ ................... MOUNTED [OK]', d: 1320 },
  { t: 'ok', v: '  > /archives/toolset/ ........... MOUNTED [OK]', d: 1480 },
  { t: 'ok', v: '  > /archives/projects/ .......... MOUNTED [OK]', d: 1640 },
  { t: 'ok', v: '  > /uplink/contact/ ............. MOUNTED [OK]', d: 1800 },
  { t: 'ok', v: '  > /uplink/resume/ .............. MOUNTED [OK]', d: 1800 },
  { t: 'd',  v: '',                                               d: 1900 },
  { t: 'd',  v: '[ ENTITY ] Loading biographical record...',     d: 1980 },
  { t: 'c',  v: '  > SAJAL HALDAR // Sudo0xSajal',               d: 2140 },
  { t: 'c',  v: '  > PENTEST OPERATIVE // KOLKATA // IN',         d: 2280 },
  { t: 'c',  v: '  > B.TECH CSE (CYBER) // MAKAUT // CGPA: 7.64', d: 2420 },
  { t: 'c',  v: '  > BUGCROWD · TRYHACKME · ACTIVE',             d: 2560 },
  { t: 'ok', v: '  ENTITY LOADED ............................ [OK]', d: 2700 },
  { t: 'd',  v: '',                                               d: 2800 },
  { t: 'd',  v: '[ UPLINK ] 1420.405 MHz // SNR: 94.7 dB',       d: 2900 },
  { t: 'ok', v: '  SIGNAL ESTABLISHED ........................ [OK]', d: 3060 },
  { t: 'd',  v: '',                                               d: 3160 },
  { t: 'h',  v: '══════════════════════════════════════════════', d: 3260 },
  { t: 'ok', v: '  ALL SYSTEMS NOMINAL. WELCOME, SAJAL.',         d: 3360 },
  { t: 'h',  v: '══════════════════════════════════════════════', d: 3420 },
];

const BL  = document.getElementById('blog');
const BF  = document.getElementById('bfill');
const BST = document.getElementById('bstat');
const BN  = document.getElementById('bnum');

function runBoot() {
  BOOT.forEach((ln, i) => {
    setTimeout(() => {
      const s = document.createElement('span');
      s.className  = 'bl ' + ln.t;
      s.textContent = ln.v;
      BL.appendChild(s);
      requestAnimationFrame(() => s.style.opacity = '1');
      BL.scrollTop = BL.scrollHeight;
      const p = (i + 1) / BOOT.length;
      BF.style.width  = (p * 100) + '%';
      BN.textContent  = Math.round(p * 100) + '%';
      if (ln.v.trim()) BST.textContent = ln.v.trim().slice(0, 46);
    }, ln.d);
  });

  const last = BOOT[BOOT.length - 1].d;
  setTimeout(() => {
    const b = document.getElementById('boot');
    b.style.opacity    = '0';
    b.style.transition = 'opacity .85s';
    setTimeout(() => {
      b.style.display = 'none';
      document.getElementById('app').classList.add('on');
      aniSb();
      renderTools();
      renderProjects();
      initCLI();
    }, 900);
  }, last + 800);
}

runBoot();

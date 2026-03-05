/* ═══════════════════════════════════════════════════
   cli.js — Functional terminal / command interface
═══════════════════════════════════════════════════ */

const CMDS = {
  HELP: () => [
    { t: 'sep', v: '═══════════════════════════════════════' },
    { t: 'w',   v: '  AETHEL_OS v1.0 // COMMAND REFERENCE' },
    { t: 'sep', v: '═══════════════════════════════════════' },
    { t: 'res', v: '  HELP           Show this' },
    { t: 'res', v: '  WHOAMI         Entity record' },
    { t: 'res', v: '  SKILLS         Capability matrix' },
    { t: 'res', v: '  TOOLS          Tool arsenal' },
    { t: 'res', v: '  SCAN_PROJECTS  List artifacts' },
    { t: 'res', v: '  DECODE [id]    View artifact (e.g. DECODE ART-001)' },
    { t: 'res', v: '  UPLINK         Contact channels' },
    { t: 'res', v: '  LS             Directory tree' },
    { t: 'res', v: '  PING           Signal test' },
    { t: 'res', v: '  STATUS         System diagnostics' },
    { t: 'res', v: '  RESUME         View or download resume' },
    { t: 'res', v: '  CLEAR          Clear buffer' },
  ],
  WHOAMI: () => [
    { t: 'w',   v: '  ENTITY RECORD' },
    { t: 'sep', v: '───────────────────────────────────────' },
    { t: 'res', v: '  NAME  : Sajal Haldar' },
    { t: 'res', v: '  ALIAS : Sudo0xSajal' },
    { t: 'res', v: '  ROLE  : Penetration Tester / Sec Analyst' },
    { t: 'res', v: '  CGPA  : 7.64 // B.Tech CSE (Cyber Security) MAKAUT' },
    { t: 'res', v: '  BASE  : Kolkata, West Bengal, India' },
    { t: 'res', v: '  ACTIVE: BugCrowd · TryHackMe' },
    { t: 'ok',  v: '  SEEKING: Entry-Level Pentest / Sec Analyst' },
  ],
  SKILLS: () => [
    { t: 'w',   v: '  CAPABILITY MATRIX' },
    { t: 'sep', v: '───────────────────────────────────────' },
    { t: 'res', v: '  EXPLOIT   : Burp Suite · Metasploit · SQLmap · Hydra' },
    { t: 'res', v: '  RECON     : Nmap · ffuf · Amass · WhatWeb · OSINT' },
    { t: 'res', v: '  CRACKING  : Hashcat · John the Ripper' },
    { t: 'res', v: '  NETWORK   : Wireshark · Netcat · ZAP' },
    { t: 'res', v: '  OS        : Kali Linux · Parrot · Ubuntu' },
    { t: 'res', v: '  CODE      : Python · Bash · Golang · C/C++' },
    { t: 'ok',  v: '  15+ TOOLS // OWASP TOP 10 // VAPT' },
  ],
  TOOLS: () => [
    { t: 'w',   v: '  TOOL ARSENAL' },
    { t: 'sep', v: '───────────────────────────────────────' },
    ...TOOLS.map(tl => ({ t: 'res', v: `  ${tl.id.padEnd(6)} ${tl.n.padEnd(16)} [${tl.c}]` })),
    { t: 'ok', v: `  ${TOOLS.length} TOOLS ACTIVE` },
  ],
  SCAN_PROJECTS: () => [
    { t: 'w',   v: '  SCANNING /archives/projects/' },
    { t: 'sep', v: '───────────────────────────────────────' },
    ...PROJS.map(p => ({ t: 'res', v: `  ${p.id}  ${p.name.padEnd(22)} [${p.type}]` })),
    { t: 'ok', v: '  4 ARTIFACTS // github.com/Sudo0xSajal' },
  ],
  UPLINK: () => [
    { t: 'w',   v: '  UPLINK CHANNELS' },
    { t: 'sep', v: '───────────────────────────────────────' },
    { t: 'res', v: '  EMAIL   : sajalhaldar2004@gmail.com' },
    { t: 'res', v: '  GITHUB  : github.com/Sudo0xSajal' },
    { t: 'res', v: '  LINKEDIN: linkedin.com/in/sajalhaldar16' },
    { t: 'ok',  v: '  STATUS  : ACCEPTING TRANSMISSIONS' },
  ],
  LS: () => [
    { t: 'res', v: '  /root/' },
    { t: 'res', v: '  ├── bio/' },
    { t: 'res', v: '  ├── archives/' },
    { t: 'res', v: '  │   ├── toolset/ [8 TOOLS]' },
    { t: 'res', v: '  │   ├── skills/' },
    { t: 'res', v: '  │   ├── projects/ [4 ARTIFACTS]' },
    { t: 'res', v: '  │   └── terminal/' },
    { t: 'res', v: '  └── uplink/contact/' },
    { t: 'res', v: '  └── uplink/resume/' },
  ],
  PING: () => {
    const l = (Math.random() * 38 + 9).toFixed(1);
    return [
      { t: 'res', v: '  PINGING SOL-3 → RELAY-7...' },
      { t: 'ok',  v: `  PONG // ${l}ms // SNR: 94.7dB` },
    ];
  },
  STATUS: () => [
    { t: 'w',   v: '  SYSTEM DIAGNOSTIC' },
    { t: 'sep', v: '───────────────────────────────────────' },
    { t: 'ok',  v: '  [OK] PULSAR MAP: RENDERING' },
    { t: 'ok',  v: '  [OK] 4 PROJECT VISUALS: LIVE' },
    { t: 'ok',  v: '  [OK] 8 TOOL CANVASES: ACTIVE' },
    { t: 'ok',  v: '  [OK] ENTITY RECORD: MOUNTED' },
    { t: 'ok',  v: '  [OK] UPLINK: 94.7 dB SNR' },
    { t: 'ok',  v: '  [OK] ALL SYSTEMS NOMINAL' },
  ],
};

function initCLI() {
  const term = document.getElementById('clit');
  const inp  = document.getElementById('cliin');
  let waitingForResume = false;   // flag: blocks main handler during resume sub-menu

  function add(txt, cls) {
    const s = document.createElement('span');
    s.className   = 'co ' + cls;
    s.textContent = txt;
    term.appendChild(s);
    term.appendChild(document.createElement('br'));
    term.scrollTop = term.scrollHeight;
  }

  add('AETHEL_OS v1.0 // SUDO0XSAJAL', 'ok');
  add('Type HELP for commands.', 'dim');
  add('', 'dim');

  inp.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;

    // ── while waiting for resume choice, block main handler entirely ──
    if (waitingForResume) { e.stopImmediatePropagation(); return; }

    const raw = inp.value.trim();
    const cmd = raw.toUpperCase();
    if (!cmd) return;

    playClk();
    add('SAJAL@AETHEL-7 ~ $ ' + raw, 'cmd');
    inp.value = '';

    // CLEAR
    if (cmd === 'CLEAR') { term.innerHTML = ''; add('BUFFER CLEARED.', 'ok'); add('', 'dim'); return; }

    // RESUME — interactive sub-menu
    if (cmd === 'RESUME') {
      waitingForResume = true;
      resume(add, inp, () => { waitingForResume = false; });
      return;
    }

    // DECODE [id]
    if (cmd.startsWith('DECODE ')) {
      const id = cmd.split(' ')[1];
      const p  = PROJS.find(x => x.id === id);
      if (p) {
        add('  ' + p.id + ': ' + p.name, 'res');
        add('  TYPE: ' + p.type, 'res');
        add('  ' + p.github, 'res');
        add('  See /archives/projects/ for full view', 'ok');
      } else {
        add('  UNKNOWN ARTIFACT: ' + id, 'err');
      }
      add('', 'dim'); return;
    }

    const fn = CMDS[cmd];
    if (fn) fn().forEach(l => add(l.v, l.t));
    else { add('  UNKNOWN: ' + cmd, 'err'); add('  Type HELP', 'dim'); }
    add('', 'dim');
  });
}

/* ─── RESUME sub-command ──────────────────────────────
   Type RESUME → prompted with [1] view  [2] download
   Then type 1 or 2 to execute.
─────────────────────────────────────────────────────── */
function resume(add, inp, done) {
  const RESUME_PATH = 'assets/Resume.pdf';

  add('  /uplink/resume/ — SAJAL_HALDAR_RESUME.PDF', 'w');
  add('  ───────────────────────────────────────', 'sep');
  add('  [1]  VIEW     — Open resume in browser tab', 'res');
  add('  [2]  DOWNLOAD — Save PDF to local machine', 'res');
  add('  ───────────────────────────────────────', 'sep');
  add('  Select option (1 or 2):', 'dim');
  add('', 'dim');

  function onSelect(e) {
    if (e.key !== 'Enter') return;
    e.stopImmediatePropagation(); // capture phase: main listener never sees this Enter

    const choice = inp.value.trim();
    inp.value = '';
    add('SAJAL@AETHEL-7 ~ $ ' + choice, 'cmd');

    if (choice === '1') {
      add('  [◈] Opening resume in new tab...', 'res');
      add('  FILE : Sajal_Haldar_Resume.pdf', 'dim');
      window.open(RESUME_PATH, '_blank');
      add('  [✓] TRANSMISSION OPEN', 'ok');
      add('', 'dim');
      playClk();
      inp.removeEventListener('keydown', onSelect, { capture: true });
      done();
    } else if (choice === '2') {
      add('  [⬇] Initiating download sequence...', 'res');
      add('  FILE : Sajal_Haldar_Resume.pdf', 'dim');
      const a = document.createElement('a');
      a.href = RESUME_PATH;
      a.download = 'Sajal_Haldar_Resume.pdf';
      a.click();
      add('  [✓] DOWNLOAD DISPATCHED', 'ok');
      add('', 'dim');
      playClk();
      inp.removeEventListener('keydown', onSelect, { capture: true });
      done();
    } else {
      // invalid — re-prompt, stay in sub-menu (listener stays active)
      add('  [!] INVALID — enter 1 or 2:', 'err');
      add('', 'dim');
      playClk();
    }
  }

  inp.addEventListener('keydown', onSelect, { capture: true });
}
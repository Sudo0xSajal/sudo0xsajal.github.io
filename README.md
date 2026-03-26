# Sajal Haldar — Cybersecurity Portfolio

[![Live Demo](https://img.shields.io/badge/LIVE-DEMO-58a6ff?style=for-the-badge&logo=github&logoColor=white)](https://sudo0xsajal.github.io)
[![License](https://img.shields.io/badge/LICENSE-MIT-3fb950?style=for-the-badge)](LICENSE)
[![HTML](https://img.shields.io/badge/HTML5-PURE-f85149?style=for-the-badge&logo=html5&logoColor=white)](index.html)
[![CSS](https://img.shields.io/badge/CSS3-VANILLA-58a6ff?style=for-the-badge&logo=css3&logoColor=white)](css/)
[![JS](https://img.shields.io/badge/JS-VANILLA-d29922?style=for-the-badge&logo=javascript&logoColor=black)](js/)

> A clean, professional cybersecurity portfolio — built entirely with vanilla HTML, CSS & JavaScript.
> No frameworks. No build tools. Zero dependencies.

---

## Features

| Module | Description |
|---|---|
| `About` | Identity record, education log, stats & interests |
| `Toolset` | 8 live Canvas animations — Nmap radar, Burp proxy, Metasploit tree, Wireshark, SQLmap, Hydra, ffuf, Hashcat |
| `Skills` | Animated skill bars for cybersec & programming languages |
| `Projects` | 4 projects with live canvas simulations + source code modal |
| `Contact` | Contact form + direct social channel links |
| `◈ Decode` | Toggle that encodes all text into a custom alien glyph alphabet |
| `⬇ Resume` | One-click PDF download from sidebar and About page |
| `Cursor` | Custom cursor (desktop only) |
| `Signal Bar` | Live animated waveform at bottom |

---

## Project Artifacts

**ART-001 — ETH0SCANNER** `[NETWORK_TOOL]`
Python-based network recon tool. ARP sweep, Nmap port scanning, OS fingerprinting.
→ [github.com/Sudo0xSajal/eth0Scanner](https://github.com/Sudo0xSajal/eth0Scanner)

**ART-002 — PAYLOAD GENERATOR CLI** `[EXPLOIT_TOOL]`
CLI tool for XSS and SQLi payload generation with WAF bypass encoding.

**ART-003 — PDF METADATA EXTRACTOR** `[OSINT_TOOL]`
Extracts hidden PDF metadata for OSINT and digital forensics.
→ [github.com/Sudo0xSajal/PDFMetadataExtractor](https://github.com/Sudo0xSajal/PDFMetadataExtractor)

**ART-004 — XSS PAYLOAD EXTENSION** `[BROWSER_EXTENSION]`
Chrome extension for real-time XSS testing with DOM injection.

---

## Tech Stack

```
RENDERING  →  HTML5 Canvas API  (all tool & project visualisations)
STYLING    →  Pure CSS3         (variables, grid, keyframes, backdrop-filter)
LOGIC      →  Vanilla JS ES6+   (modular, split across js/ files)
FONTS      →  Syne, Inter, JetBrains Mono  (Google Fonts)
ZERO DEPS  →  No npm · No webpack · No React · No jQuery
```

---

## Repo Structure

```
sudo0xsajal.github.io/
│
├── index.html              ← Main HTML (structure only)
│
├── css/
│   ├── base.css            ← Design tokens, reset, animations
│   ├── layout.css          ← Topbar, sidebar, modal, status bar
│   └── components.css      ← Cards, skills, tools, projects, contact
│
├── js/
│   ├── cursor.js           ← Custom cursor, IST clock, sidebar toggle
│   ├── background.js       ← Particle network canvas
│   ├── signal.js           ← Status bar waveform
│   ├── nav.js              ← Page navigation + skill bar trigger
│   ├── glyph.js            ← Alien glyph encryption toggle
│   ├── tools.js            ← 8 live tool canvas visualisations
│   └── projects.js         ← Project cards, canvas drawers, modal
│
├── assets/
│   └── Resume.pdf          ← Sajal Haldar — Penetration Tester CV
│
├── docs/
│   └── DEPLOY.md           ← Setup & deployment guide
│
└── README.md
```

---

## Deploy

```bash
git clone https://github.com/Sudo0xSajal/sudo0xsajal.github.io.git
cd sudo0xsajal.github.io
# Replace files, then:
git add .
git commit -m "feat: portfolio final — professional dark theme"
git push -u origin main
# GitHub Settings → Pages → Branch: main → / (root) → Save
```

Local preview (avoids CORS on Resume.pdf):
```bash
python3 -m http.server 8080
```

---

## Entity Record

```
NAME    :  Sajal Haldar
ALIAS   :  Sudo0xSajal
ROLE    :  Penetration Tester / Security Analyst
STUDY   :  B.Tech CSE (Cyber Security) — MAKAUT · CGPA: 7.64
BASE    :  Kolkata, West Bengal, India
ACTIVE  :  BugCrowd · TryHackMe
STATUS  :  ● Seeking Entry-Level Role
```

---

## Contact

| Channel | Link |
|---|---|
| Email | [sajalhaldar2004@gmail.com](mailto:sajalhaldar2004@gmail.com) |
| GitHub | [github.com/Sudo0xSajal](https://github.com/Sudo0xSajal) |
| LinkedIn | [linkedin.com/in/sajalhaldar16](https://linkedin.com/in/sajalhaldar) |

---

## License

MIT License — Copyright (c) 2026 Sajal Haldar

*"I enjoy finding and fixing vulnerabilities to make digital systems more secure."*

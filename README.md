<div align="center">

```
 █████╗ ███████╗████████╗██╗  ██╗███████╗██╗      ██████╗ ███████╗
██╔══██╗██╔════╝╚══██╔══╝██║  ██║██╔════╝██║     ██╔═══██╗██╔════╝
███████║█████╗     ██║   ███████║█████╗  ██║     ██║   ██║███████╗
██╔══██║██╔══╝     ██║   ██╔══██║██╔══╝  ██║     ██║   ██║╚════██║
██║  ██║███████╗   ██║   ██║  ██║███████╗███████╗╚██████╔╝███████║
╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚══════╝
```

**`v1.0 // BOOTING INTERFACE // PENTEST OPERATIVE`**

[![Live Demo](https://img.shields.io/badge/LIVE-DEMO-00f2ff?style=for-the-badge&logo=github&logoColor=white)](https://sudo0xsajal.github.io)
[![License](https://img.shields.io/badge/LICENSE-MIT-ffcc33?style=for-the-badge)](LICENSE)
[![HTML](https://img.shields.io/badge/HTML5-PURE-ff3355?style=for-the-badge&logo=html5&logoColor=white)](index.html)
[![CSS](https://img.shields.io/badge/CSS3-VANILLA-00f2ff?style=for-the-badge&logo=css3&logoColor=white)](css/)
[![JS](https://img.shields.io/badge/JS-VANILLA-ffcc33?style=for-the-badge&logo=javascript&logoColor=black)](js/)

*A cyberpunk-themed interactive portfolio OS — built entirely with vanilla HTML, CSS & JavaScript.*  
*No frameworks. No dependencies. Pure signal.*

</div>

---

## // TRANSMISSION OVERVIEW

**AETHEL_OS** is a personal portfolio styled as a fictional alien operating system. It presents my work as a **Cybersecurity student, Ethical Hacker & Penetration Tester** through an immersive terminal-inspired interface — complete with a boot sequence, 8 live canvas tool visualizations, 4 project simulations, a fully functional CLI terminal, and a glyph-encryption toggle.

> Zero build tools · Zero frameworks · Zero bloat.

---

## // FEATURES

| Module | Description |
|---|---|
| `⟳ BOOT SEQUENCE` | Animated terminal-style OS initialization on every load |
| `◉ BIOGRAPHICAL DATA` | Entity record, education log, stats & interests |
| `⊕ TOOLSET ARSENAL` | 8 live canvas animations — Nmap radar, Burp proxy, Metasploit tree, Wireshark, SQLmap, Hydra, ffuf, Hashcat |
| `◈ CAPABILITY MATRIX` | Animated skill bars for cybersec & programming languages |
| `◇ DATA ARTIFACTS` | 4 projects with live canvas simulations + code viewer modal |
| `▶ CLI TERMINAL` | Fully functional command-line interface with 12 commands |
| `◌ UPLINK CONTACT` | Contact form + direct social channel links |
| `◈ GLYPH ENCRYPTION` | Toggle that encodes all text into a custom alien glyph alphabet |
| `♫ AMBIENT AUDIO` | Web Audio API — synthesized low-frequency ambient drone |
| `⌖ CUSTOM CURSOR` | Gold ring + cyan dot cursor (desktop only) |
| `∿ SIGNAL BAR` | Live animated waveform at `1420.405 MHz // H-LINE` |

---

## // PROJECT ARTIFACTS

<details>
<summary><strong>ART-001 — ETH0SCANNER</strong> &nbsp;<code>[NETWORK_TOOL]</code></summary>
<br>

Python-based network reconnaissance tool. Performs ARP sweep for Layer 2 host discovery, Nmap port scanning, OS fingerprinting, and service version detection across entire subnets.

**Stack:** `Python` `Nmap` `Scapy` `Networking` `Recon`  
**Repo:** [github.com/Sudo0xSajal/eth0Scanner](https://github.com/Sudo0xSajal/eth0Scanner)

</details>

<details>
<summary><strong>ART-002 — PAYLOAD GENERATOR CLI</strong> &nbsp;<code>[EXPLOIT_TOOL]</code></summary>
<br>

CLI tool to generate encoded XSS and SQL Injection payloads for WAF bypass testing. Supports Base64, URL, HTML, and Hex encoding schemes with automated filter evasion logic.

**Stack:** `Python` `XSS` `SQLi` `WAF Bypass` `Click`  

</details>

<details>
<summary><strong>ART-003 — PDF METADATA EXTRACTOR</strong> &nbsp;<code>[OSINT_TOOL]</code></summary>
<br>

Downloads PDFs and extracts hidden metadata — author identity, creation timestamps, software versions, and internal file paths — for OSINT and digital forensics operations.

**Stack:** `Golang` `Python` `OSINT` `Forensics` `Metadata`  
**Repo:** [github.com/Sudo0xSajal/PDFMetadataExtractor](https://github.com/Sudo0xSajal/PDFMetadataExtractor)

</details>

<details>
<summary><strong>ART-004 — XSS PAYLOAD EXTENSION</strong> &nbsp;<code>[BROWSER_EXTENSION]</code></summary>
<br>

Chrome extension that injects XSS test payloads directly into web application input fields from the browser toolbar. Features real-time DOM injection, payload cycling, and severity reporting.

**Stack:** `JavaScript` `Chrome Extension` `DOM` `Web Security` `XSS`  

</details>

---

## // TECH STACK

```
RENDERING    →  HTML5 Canvas API  (all tool & project visualizations)
AUDIO        →  Web Audio API     (ambient drone synthesis)
STYLING      →  Pure CSS3         (variables, grid, keyframes, backdrop-filter)
LOGIC        →  Vanilla JS ES6+   (modular, split across js/ files)
FONTS        →  JetBrains Mono    (Google Fonts)
ZERO DEPS    →  No npm · No webpack · No React · No jQuery
```

---

## // REPO STRUCTURE

```
sudo0xsajal.github.io/
│
├── index.html              ← Main HTML (structure only, no inline CSS/JS)
│
├── css/
│   ├── base.css            ← Variables, reset, body, animations
│   ├── layout.css          ← Boot, topbar, sidebar, modal, signal bar
│   └── components.css      ← Panels, skills, tools, projects, CLI, forms
│
├── js/
│   ├── audio.js            ← Web Audio API (click SFX + ambient drone)
│   ├── cursor.js           ← Custom cursor + IST clock + sidebar toggle
│   ├── background.js       ← Pulsar map canvas animation
│   ├── signal.js           ← Bottom waveform canvas
│   ├── boot.js             ← Boot sequence animation
│   ├── nav.js              ← Page navigation + skill bar trigger
│   ├── glyph.js            ← Alien glyph encryption toggle
│   ├── tools.js            ← 8 tool canvas visualizations
│   ├── projects.js         ← Project cards, canvas drawers, modal
│   └── cli.js              ← Full terminal / command system
│
├── assets/
│   └── Resume.pdf          ← Sajal Haldar — Penetration Tester CV
│
├── docs/
│   └── REPO_STRUCTURE.md   ← Setup & deployment guide
│
├── README.md               ← You are here
└── LICENSE                 ← MIT License
```

---

## // DEPLOY

**GitHub Pages:**

```bash
# 1. Clone the repo
git clone https://github.com/Sudo0xSajal/sudo0xsajal.github.io.git
cd sudo0xsajal.github.io

# 2. First push
git add .
git commit -m "feat: initial release — AETHEL_OS v1.0"
git branch -M main
git push -u origin main

# 3. Settings → Pages → Branch: main → Folder: / (root) → Save
# Live at: https://sudo0xsajal.github.io
```

**Local:**
```bash
# Recommended — avoids CORS issues with assets/Resume.pdf
python3 -m http.server 8080
# then visit: http://localhost:8080
```

---

## // CLI COMMANDS

Navigate to `/archives/terminal/` after boot and try:

```
HELP            →  Show all available commands
WHOAMI          →  Display entity record
SKILLS          →  Print capability matrix
TOOLS           →  List tool arsenal
SCAN_PROJECTS   →  List all project artifacts
DECODE [id]     →  View artifact detail  (e.g. DECODE ART-001)
RESUME          →  View or download resume  [1] open tab  [2] download
UPLINK          →  Show contact channels
LS              →  Directory tree
PING            →  Signal latency test
STATUS          →  Full system diagnostics
CLEAR           →  Clear terminal buffer
```

---

## // ENTITY RECORD

```
DESIGNATION  :  SAJAL HALDAR
ALIAS        :  Sudo0xSajal
FUNCTION     :  Penetration Tester / Security Analyst
STUDY        :  B.Tech CSE (Cyber Security) — MAKAUT · CGPA: 7.64
ORIGIN       :  Kolkata, West Bengal, India
ACTIVE ON    :  BugCrowd · TryHackMe
STATUS       :  ● SEEKING ENTRY-LEVEL ROLE
```

---

## // CONTACT

<div align="center">

| Channel | Link |
|---|---|
| 📧 Email | [sajalhaldar2004@gmail.com](mailto:sajalhaldar2004@gmail.com) |
| 🐙 GitHub | [github.com/Sudo0xSajal](https://github.com/Sudo0xSajal) |
| 💼 LinkedIn | [linkedin.com/in/sajalhaldar16](https://linkedin.com/in/sajalhaldar16) |

</div>

---

## // LICENSE

```
MIT License — Copyright (c) 2025 Sajal Haldar

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software.
```

---

<div align="center">

`SIGNAL: 94.7% // 1420.405 MHz // H-LINE // AETHEL-7`

*"I enjoy finding and fixing vulnerabilities to make digital systems more secure."*

**— SAJAL HALDAR // Sudo0xSajal**

</div>
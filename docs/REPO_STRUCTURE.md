# AETHEL_OS v1.0 // REPO STRUCTURE & DEPLOYMENT GUIDE
# ═══════════════════════════════════════════════════════

## // FOLDER LAYOUT

Place all files exactly as shown below in your GitHub repo:

```
sudo0xsajal.github.io/          ← Root of your GitHub repo
│
├── index.html                  ← Main HTML (structure only, no inline CSS/JS)
│
├── css/
│   ├── base.css                ← CSS variables, reset, body, animations
│   ├── layout.css              ← Boot, topbar, sidebar, modal, signal bar
│   └── components.css          ← Panels, skills, tools, projects, CLI, forms
│
├── js/
│   ├── audio.js                ← Web Audio API (click SFX + ambient drone)
│   ├── cursor.js               ← Custom cursor + IST clock + sidebar toggle
│   ├── background.js           ← Pulsar map canvas animation
│   ├── signal.js               ← Bottom waveform canvas
│   ├── boot.js                 ← Boot sequence animation
│   ├── nav.js                  ← Page navigation + skill bar trigger
│   ├── glyph.js                ← Alien glyph encryption toggle
│   ├── tools.js                ← 8 live tool canvas visualizations
│   ├── projects.js             ← Project cards, canvas drawers, modal
│   └── cli.js                  ← Full terminal / command system
│
├── assets/
│   └── Resume.pdf              ← Your CV — referenced by index.html & cli.js
│
├── docs/
│   └── REPO_STRUCTURE.md       ← This file
│
├── README.md                   ← Project readme
└── LICENSE                     ← MIT License
```

---

## // GITHUB PAGES SETUP

1. Go to **github.com/new**
2. Repository name: `sudo0xsajal.github.io`
3. Visibility: **Public**
4. Do NOT initialise with README (you already have one)
5. Click **Create repository**
6. Upload all files (see Git commands below)
7. Go to **Settings → Pages → Branch: main → Folder: / (root) → Save**
8. Wait ~2 minutes

**Live URL:**
```
https://sudo0xsajal.github.io
```

---

## // GIT COMMANDS (first push)

```bash
git init
git add .
git commit -m "feat: initial release — AETHEL_OS v1.0"
git branch -M main
git remote add origin https://github.com/Sudo0xSajal/sudo0xsajal.github.io.git
git push -u origin main
```

---

## // RECOMMENDED REPO SETTINGS

On your repo page click the ⚙️ gear icon next to **About**:

```
Description  →  ◈ Cyberpunk portfolio OS — Penetration Tester · Ethical Hacker · Sajal Haldar
Website      →  https://sudo0xsajal.github.io
Topics       →  portfolio  cybersecurity  pentesting  ethical-hacking
                osint  vanilla-js  canvas  github-pages
```

---

## // IMPORTANT NOTES

- `Resume.pdf` must be inside `assets/` — both `index.html` and `cli.js` reference `assets/Resume.pdf`
- All JS files must load in the order listed in `index.html` — `audio.js` and `cursor.js` first, `cli.js` last
- No build step required — open `index.html` directly or use a local server:
  ```bash
  python3 -m http.server 8080
  ```
- Use a local server (not file://) when testing `assets/Resume.pdf` to avoid CORS errors
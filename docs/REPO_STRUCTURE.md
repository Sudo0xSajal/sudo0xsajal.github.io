# Sajal Haldar Portfolio — Deployment Guide

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
│   ├── background.js       ← Particle network canvas animation
│   ├── signal.js           ← Status bar waveform canvas
│   ├── nav.js              ← Page navigation + skill bar trigger
│   ├── glyph.js            ← Alien glyph encryption toggle
│   ├── tools.js            ← 8 live tool canvas visualisations
│   └── projects.js         ← Project cards, canvas drawers, modal
│
├── assets/
│   └── Resume.pdf          ← Sajal Haldar — Penetration Tester CV
│
├── docs/
│   └── DEPLOY.md           ← This file
│
└── README.md
```

## Deploy to GitHub Pages

```bash
# 1. Clone the repo
git clone https://github.com/Sudo0xSajal/sudo0xsajal.github.io.git
cd sudo0xsajal.github.io

# 2. Replace files with new portfolio

# 3. Commit and push
git add .
git commit -m "feat: portfolio v6 — professional dark theme"
git branch -M main
git push -u origin main

# 4. GitHub Settings → Pages → Branch: main → Folder: / (root) → Save
# Live at: https://sudo0xsajal.github.io
```

## Run Locally

```bash
# Avoids CORS issues with assets/Resume.pdf
python3 -m http.server 8080
# Visit: http://localhost:8080
```

## Notes

- No build tools, no npm, no frameworks — pure HTML/CSS/JS
- `assets/Resume.pdf` must be in the `assets/` folder for the download link to work
- All external dependency: Google Fonts (loaded via CDN in index.html)

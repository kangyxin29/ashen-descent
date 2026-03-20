# Ashen Descent

**A Dark Fantasy Action Roguelite**

[![Status: In Development](https://img.shields.io/badge/status-development-orange.svg)](https://github.com/username/ashen-descent)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

---

## Welcome to the Rift

*Ashen Descent* is a dark pixel-art top-down action roguelite set in the ruins of an ancient sanctuary. Navigate pseudo-randomized rooms, build devastating relic synergies, master deliberate combat, and gradually restore what was lost.

**Every death brings restoration closer.**

---

## Quick Links

- [Official Website](https://username.github.io/ashen-descent) — Live site (update with your GitHub Pages URL)
- [Documentation](docs/) — Project planning, roadmap, content guide

---

## Project Structure

```
ashen-descent/
│
├── game/                   # Godot 4.x project (game runtime)
│   ├── project.godot       # Engine configuration
│   ├── scenes/             # Scene files (.tscn)
│   ├── scripts/            # GDScript files (.gd)
│   ├── data/               # Config/data files
│   └── assets/             # Game assets
│
├── site/                   # Official promotional website
│   ├── index.html          # Main website
│   ├── styles.css          # Website styling
│   ├── script.js           # Language switching, animations
│   └── site-content/       # EN/ZH text content
│
├── docs/                   # Project documentation
│   ├── project-plan.md     # Full game specification
│   ├── roadmap.md          # Version milestones (v0.1 → v3.0)
│   └── content-guide.md    # Website content editing guide
│
├── DEPLOYMENT.md           # Website deployment guide
└── ASSET_CREDITS.md        # Asset license tracking
```

---

## Features

### Player-Facing Website Sections

1. **Hero** — Epic title, tagline, call-to-action
2. **Overview** — Game description with feature highlights
3. **World** — Lore about the broken sanctuary
4. **Mechanics** — The run loop and controls
5. **Core Systems** — Technical game systems
6. **Death & Risk** — What you lose vs. keep on death
7. **Build Archetypes** — Berserker, Warden, Riftwalker
8. **Boss Encounters** — Multi-phase guardian battles
9. **Art & Style** — Visual direction and asset strategy
10. **Development Roadmap** — v0.1 → v3.0 milestones
11. **8-Week Timeline** — Development plan to v1.0

### Technical Features

- **Bilingual** — English and Simplified Chinese (switch instantly)
- **Responsive** — Mobile and desktop friendly
- **Animated** — Scroll reveals, hover effects, particle embers
- **No Dependencies** — Pure HTML/CSS/JS, no build step
- **SEO Ready** — Semantic HTML, meta tags

---

## Editing Content

### Text Content

All visible text is in the JSON files:

- **English:** `site-content/en.json`
- **Chinese:** `site-content/zh.json`

Edit these files to update any text on the website. Both files must have matching key structures.

### Styling

All visual design is in `styles.css`:
- CSS variables at the top for colors and fonts
- Section-specific styles throughout
- Responsive breakpoints at the bottom

### JavaScript

The `script.js` file handles:
- Language switching
- Content rendering from JSON
- Scroll animations
- Hero particle effects

---

## Local Preview

### Option A: Direct (Simplest)

Open `index.html` in any modern browser.

### Option B: Local Server (Recommended)

```bash
cd ashen-descent
python3 -m http.server 8000
```

Then open: http://localhost:8000

---

## Deployment to GitHub Pages

### 1. Initialize Git

```bash
cd ashen-descent
git init
git add .
git commit -m "Initial commit: Ashen Descent official website"
git branch -M main
```

### 2. Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name: `ashen-descent`
3. Keep **Public**
4. Click **Create repository**

### 3. Connect and Push

```bash
git remote add origin https://github.com/YOURUSERNAME/ashen-descent.git
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository → **Settings**
2. Scroll to **GitHub Pages**
3. Source: **main** branch → **Save**
4. Wait 2 minutes → Your site is live!

---

## Future Updates

### Making Changes

```bash
git add .
git commit -m "Describe your changes"
git push origin main
```

GitHub Pages auto-updates after each push.

### Adding New Content

1. Edit `site-content/en.json` and `site-content/zh.json`
2. If adding new sections, update `index.html` with new section markup
3. Add rendering function in `script.js`
4. Test locally, then push

---

## Development Status

| Version | Status | Description |
|---------|--------|-------------|
| v0.1 | Planned | Foundation and core prototype |
| v1.0 | Planned | Complete playable demo |
| v1.5 | Planned | Polish and feel pass |
| v2.0 | Planned | Signature features |
| v3.0 | Optional | Content expansion |

---

## License

This is a personal project. Code is open for reference.

Game assets are used under their respective licenses as documented in [ASSET_CREDITS.md](ASSET_CREDITS.md).

---

*Every death brings restoration closer.*

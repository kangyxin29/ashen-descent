# Deployment Guide

> **DEPRECATED — Website-only deployment guide.**
> The `/site` directory is the promotional website and deploys to GitHub Pages.
> The `/game` directory is the Godot game runtime. It does NOT deploy via this guide.
> For Godot game export, use Godot's export templates (File → Export → PC).
> This file is kept for historical reference but the directory structure described here is **outdated**.

---

*Everything below this line is historical/deprecated.*

This guide explains how to:
1. Preview the website locally
2. Initialize Git and connect to GitHub
3. Publish to GitHub Pages
4. Keep the project updated long-term

---

## 1. Preview Locally

### Option A: Direct Browser (Simplest)
Just open `index.html` in your browser. The website works without a server.

### Option B: Local Server (Recommended for Development)

**Using Python:**
```bash
cd ashen-descent
python3 -m http.server 8000
```
Then open: http://localhost:8000

**Using Node.js:**
```bash
npx serve .
```

**Using PHP:**
```bash
php -S localhost:8000
```

---

## 2. Initialize Git Repository

Navigate to your project folder and initialize:

```bash
cd ashen-descent
git init
```

This creates a local Git repository.

---

## 3. Create GitHub Repository

### Option A: GitHub Website (Recommended for Beginners)

1. Go to [github.com](https://github.com)
2. Click the **+** button → **New repository**
3. Name it: `ashen-descent`
4. Keep it **Public** (required for free GitHub Pages)
5. Do NOT initialize with README (we already have files)
6. Click **Create repository**

### Option B: Connect Existing Local Repo

After creating the repo on GitHub, connect your local repository:

```bash
git remote add origin https://github.com/YOURUSERNAME/ashen-descent.git
```

Replace `YOURUSERNAME` with your actual GitHub username.

---

## 4. First Push

```bash
git add .
git commit -m "Initial commit: Ashen Descent website v1.0"
git branch -M main
git push -u origin main
```

You may be asked to authenticate with GitHub.

---

## 5. Publish to GitHub Pages

After your first push:

1. Go to your repository on GitHub: `https://github.com/YOURUSERNAME/ashen-descent`
2. Click **Settings** (top menu)
3. Scroll down to **GitHub Pages** section
4. Under **Source**, click the dropdown and select: `main` branch
5. Click **Save**
6. Wait 1-2 minutes, then your site will be live at:
   ```
   https://YOURUSERNAME.github.io/ashen-descent/
   ```

---

## 6. Future Updates

### Making Changes

1. Edit your files (HTML, CSS, JSON, docs, etc.)
2. Commit and push:

```bash
git add .
git commit -m "Description of your changes"
git push origin main
```

GitHub Pages will automatically rebuild after a few minutes.

### Recommended Commit Messages

```bash
# Website updates
git commit -m "Update hero section content"

# Content changes
git commit -m "Add new roadmap milestone"

# Bug fixes
git commit -m "Fix language toggle not working on mobile"

# Documentation
git commit -m "Update deployment guide with new instructions"
```

---

## 7. Keeping Docs and Website Together

This repository is organized so everything lives together:

```
ashen-descent/
├── index.html          ← Main website
├── docs/               ← Project planning
│   ├── project-plan.md
│   ├── roadmap.md
│   └── content-guide.md
├── assets/             ← Game assets (future)
│   ├── images/
│   ├── icons/
│   └── audio/
└── site-content/       ← Website text (EN/ZH)
```

**Branch Strategy (Beginner-Friendly):**

- **`main`**: Stable, deployable code only
- *(Optional)* **`draft/` or `dev/`**: Work-in-progress branches

For a solo project, working directly on `main` is fine.

---

## 8. Adding Screenshots & Trailers Later

When you have screenshots or trailers:

1. Add them to `assets/images/` or `assets/audio/`
2. Reference them in your documentation
3. Commit and push

```bash
git add assets/images/screenshot1.png
git commit -m "Add first gameplay screenshot"
git push origin main
```

---

## 9. Custom Domain (Optional)

If you want a custom domain (e.g., `ashendescent.com`):

1. In GitHub Pages settings, enter your custom domain
2. Configure your DNS records:
   - Add `CNAME` pointing to `YOURUSERNAME.github.io`
   - Or add `ALIAS` record
3. Wait for DNS propagation (can take up to 24 hours)

---

## 10. Troubleshooting

### "git push" asks for password
Use a Personal Access Token instead of password:
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token with `repo` scope
3. Use the token as your password

### GitHub Pages not updating
- Wait 2-5 minutes for rebuild
- Check that your branch is correct in Settings → Pages
- Verify your `index.html` is in the root, not a subfolder

### CORS errors with JSON files
If you see CORS errors when testing locally, use a local server (see Section 1, Option B) instead of opening `index.html` directly.

---

## Quick Reference

| Task | Command |
|------|---------|
| Preview locally | `python3 -m http.server 8000` |
| Check status | `git status` |
| Stage changes | `git add .` |
| Commit | `git commit -m "message"` |
| Push | `git push origin main` |
| Check remote | `git remote -v` |

---

For more help, consult the [GitHub Docs](https://docs.github.com/en/pages) or search for "GitHub Pages tutorial".

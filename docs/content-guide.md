# Content Guide

This guide explains how to edit text content, update translations, and modify the website structure.

---

## Overview

The website uses a **JSON-based content system** for bilingual support. All visible text is stored in:
- `site-content/en.json` (English)
- `site-content/zh.json` (Simplified Chinese)

---

## Editing Text Content

### 1. Find the Key

Each piece of text has a unique "key" path. For example:

```json
{
  "hero": {
    "title": "Ashen Descent",
    "subtitle": "Broken Sanctuary / Ember Temple"
  }
}
```

The key for the hero title is `hero.title`.

### 2. Update Both Languages

Always update **both** `en.json` and `zh.json` with the same key structure. If you add new content in English, add the Chinese translation too.

### 3. Key Naming Convention

Use dot notation for nested content:
- `nav.overview` = nav > overview
- `hero.title` = hero > title
- `death.lost.title` = death > lost > title

---

## JSON Structure Reference

```json
{
  "site": {
    "title": "Site title",
    "tagline": "Site tagline",
    "pitch": "Main pitch"
  },
  "nav": {
    "overview": "Navigation label"
  },
  "hero": {
    "title": "Hero title",
    "subtitle": "Hero subtitle",
    "cta": "Button text"
  },
  "sectionName": {
    "title": "Section title",
    "subtitle": "Section subtitle",
    "content": "Main content text",
    "array": [
      { "item": "List item" }
    ]
  }
}
```

---

## Adding New Sections

### 1. Add to JSON Files

In `site-content/en.json` and `site-content/zh.json`:

```json
"newSection": {
  "title": "New Section Title",
  "items": [
    { "name": "Item 1", "desc": "Description" },
    { "name": "Item 2", "desc": "Description" }
  ]
}
```

### 2. Add HTML Structure

In `index.html`, add a new section:

```html
<section id="newSection" class="section">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">12</span>
      <h2 class="section-title" data-i18n="newSection.title">New Section Title</h2>
    </div>
    <div class="new-content-grid" id="newContentGrid"></div>
  </div>
</section>
```

### 3. Add Rendering Function

In `script.js`, add:

```javascript
function renderNewSection(data) {
  const grid = document.getElementById('newContentGrid');
  if (!grid || !data.newSection) return;

  grid.innerHTML = data.newSection.items.map(item => `
    <div class="new-card">
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
    </div>
  `).join('');
}
```

### 4. Call in renderDynamicContent

Add to `renderDynamicContent()`:

```javascript
renderNewSection(data);
```

---

## Styling

### CSS File

All styling is in `styles.css`. Key sections:

| Section | Line Numbers | Purpose |
|---------|--------------|---------|
| Variables | 1-50 | Colors, fonts, spacing |
| Navigation | 80-180 | Nav bar, mobile menu |
| Hero | 185-290 | Hero section, particles |
| Sections | 295-400 | Common section styles |
| Grids | 400-700 | Feature, lore, principle grids |
| Roadmap | 500-600 | Timeline styling |
| Responsive | 900-1000 | Media queries |

### Adding New Styles

```css
/* Custom class for new elements */
.new-element {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  padding: 20px;
  border-radius: 8px;
}
```

---

## Translation Checklist

When updating content:

- [ ] Update `en.json` with new/edited text
- [ ] Update `zh.json` with matching translation
- [ ] Test in browser (both languages)
- [ ] Verify all `data-i18n` attributes are correct
- [ ] Check text fits within UI elements (no overflow)

---

## Common Tasks

### Change Hero Title
Edit `site-content/en.json` and `site-content/zh.json`:
```json
"hero": {
  "title": "Your New Title"
}
```

### Add Navigation Link
1. Add to `nav` section in both JSON files
2. Add link in `index.html`:
```html
<a href="#newId" data-i18n="nav.newLink">Link Text</a>
```

### Add New Roadmap Version
Add to `roadmap.versions` array in both JSON files:
```json
{
  "id": "1.5",
  "name": "Version Name",
  "purpose": "What it does",
  "mustHave": ["Item 1", "Item 2"],
  "optional": ["Item 3"],
  "why": "Why it matters"
}
```

---

## Notes

- **Do not edit `script.js` unless necessary** - it handles the rendering automatically
- **Always update both languages** - or the site may show undefined values
- **Test locally before pushing** - use `python3 -m http.server 8000`
- **Keep translations concise** - some languages are longer than English

---

For technical implementation questions, refer to `DEPLOYMENT.md`.

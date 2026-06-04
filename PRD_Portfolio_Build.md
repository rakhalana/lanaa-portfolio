# Portfolio Website — Product Requirements Document

## Project Summary

A personal portfolio website for a student seeking a technology internship. The owner has skills in frontend development (HTML/CSS/JS), UI/UX design, and graphic design. The site must be production-ready, visually refined, and structured so that new projects or skill categories can be added later with minimal effort.

---

## Design System

### Colors

```css
--color-bg:          #FAF8F5;   /* warm cream — main background */
--color-bg-alt:      #F0EDE8;   /* slightly darker — card & section backgrounds */
--color-border:      #E5E0D8;   /* dividers, card borders */
--color-text:        #1A1A1A;   /* primary text */
--color-text-muted:  #6B7280;   /* secondary text, labels */
--color-accent:      #2563EB;   /* electric blue — buttons, links, highlights */
--color-accent-dark: #1D4ED8;   /* hover state for accent */
--color-white:       #FFFFFF;
```

### Typography

```css
--font-heading: 'Playfair Display', Georgia, serif;   /* H1, H2, H3 */
--font-body:    'Inter', system-ui, sans-serif;        /* body, UI, labels */
```

Google Fonts import:
```
https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap
```

### Spacing & Shape

```css
--radius-card:   12px;
--radius-btn:    8px;
--shadow-card:   0 2px 12px rgba(0, 0, 0, 0.06);
--shadow-hover:  0 8px 24px rgba(0, 0, 0, 0.10);
--max-width:     1200px;
--section-gap:   96px;   /* vertical padding per section, desktop */
--section-gap-mobile: 56px;
```

---

## File Structure

```
/
├── index.html
├── style.css
├── main.js
└── assets/
    ├── images/
    │   ├── profile.jpg
    │   └── projects/        ← project thumbnails go here
    ├── design/              ← graphic design work goes here
    └── cv.pdf
```

---

## Data Layer

All content is defined as JavaScript objects/arrays at the top of `main.js`. This is the single source of truth — no content should be hardcoded in HTML (except static text like nav labels and section headings).

### `projects` array

```js
const projects = [
  {
    id: "project-slug",
    title: "Project Title",
    description: "One or two sentences describing what this is and what problem it solves.",
    category: "frontend",           // "frontend" | "uiux" | "graphic" | "data" | "ai"
    tags: ["HTML", "CSS", "JS"],    // tech stack or tools used
    thumbnail: "assets/images/projects/project-slug.jpg",
    liveUrl: "https://...",         // null if not available
    sourceUrl: "https://github.com/...", // null if not available
    figmaUrl: null,                 // null if not applicable
    featured: true                  // true = show in hero/featured row
  }
];
```

### `skills` array

```js
const skills = [
  {
    category: "Design",
    items: [
      { name: "UI/UX Design",      icon: "figma",   level: "proficient" },
      { name: "Graphic Design",     icon: "pen-tool", level: "proficient" }
    ]
  },
  {
    category: "Development",
    items: [
      { name: "HTML & CSS",         icon: "code",    level: "proficient" },
      { name: "JavaScript",         icon: "zap",     level: "learning"   }
    ]
  }
];
```

`level` values: `"proficient"` | `"learning"` — displayed as a subtle label, not a progress bar.

### `designWork` array

```js
const designWork = [
  {
    id: "work-slug",
    title: "Work Title",
    type: "Poster",   // "Poster" | "Branding" | "Social Media" | "Illustration" | etc.
    image: "assets/design/work-slug.jpg"
  }
];
```

---

## Sections

### 1. Navbar

- Fixed/sticky at top
- Background: transparent → `--color-bg` with `backdrop-filter: blur(12px)` on scroll
- Left: owner name or monogram as text logo (styled with accent color)
- Right: navigation links — About · Skills · Projects · Design · Contact
- Active link: underline in `--color-accent`, determined by scroll position (scroll spy)
- Mobile: hamburger icon → full-screen or slide-down menu overlay

---

### 2. Hero

**Layout:** Two-column on desktop (text left, visual right), stacked on mobile.

**Left column:**
- Small label above heading: *"Available for Internship"* with a green dot (`#22C55E`)
- H1: Owner's name (large, Playfair Display)
- Subheading: one-line tagline describing what they do — to be filled by owner
- Role tags: 3 inline pills — *Frontend Developer*, *UI/UX Designer*, *Visual Designer*
- Two buttons: **View My Work** (primary — blue, filled) | **Download CV** (secondary — outline)

**Right column:**
- Profile photo inside a softly rounded container
- Subtle background shape or blob behind the photo (CSS-only, uses `--color-bg-alt`)

---

### 3. About

**Layout:** Two-column on desktop — text left (60%), subtle decorative element or stat cards right (40%).

**Left:**
- H2: *"About Me"*
- 2–3 paragraphs — content to be filled by owner. Placeholder text should indicate clearly what to replace.
- One inline link: *"Download my CV →"*

**Right:**
- 3 small stat/fact cards, for example: years learning code, projects completed, tools mastered — owner fills in numbers
- Cards use `--color-bg-alt`, `--radius-card`, `--shadow-card`

---

### 4. Skills

**Layout:** Category-grouped card grid.

- Section heading: *"What I Work With"*
- For each category in `skills` array: render a group label and a row of skill cards
- Each card: icon (Lucide or inline SVG) + skill name + level label
- Level label styling: `"proficient"` → normal text; `"learning"` → muted italic
- Add an empty/placeholder category slot styled as *"Expanding Soon"* — this is where Data and AI skills will appear. Style it with reduced opacity and a dashed border so it reads as intentional, not unfinished.

---

### 5. Projects

**Layout:** Filterable card grid, 3 columns desktop / 2 tablet / 1 mobile.

**Filter tabs:** All · Frontend · UI/UX · Graphic Design
- Tabs are generated from unique `category` values in the `projects` array
- Adding a new category to the data automatically adds a new tab — no code change needed

**Each project card:**
- Thumbnail image (16:9 ratio, `object-fit: cover`)
- Category tag (top-left of image, small pill)
- Title
- Description (2 lines max, truncated with ellipsis)
- Tech stack tags (small, muted)
- Action row: icon buttons for Live Demo, Source Code, Figma — only render buttons where the corresponding URL is not null

**Card hover state:** `translateY(-4px)` + `--shadow-hover`, smooth 200ms transition.

---

### 6. Design Gallery

**Layout:** Masonry grid or uniform 3-column grid — 3 desktop / 2 tablet / 1 mobile.

- Section heading: *"Design Work"*
- Each item renders from `designWork` array: image + title + type label on hover overlay
- Click opens a lightbox/modal with larger image view
- Lightbox: dark overlay, centered image, close button, keyboard ESC to close

---

### 7. Contact

**Layout:** Centered, single column, generous padding.

- H2: *"Let's Connect"*
- Short paragraph: owner is open to internship opportunities and collaboration
- Contact form: Name field, Email field, Message textarea, Submit button
  - Form does not need a backend — on submit, open `mailto:` as fallback, or integrate Formspree (just swap the form `action` URL)
- Below form: icon links for Email, LinkedIn, GitHub — rendered from a small config object so they're easy to update

---

### 8. Footer

- Single row: copyright left, *"Designed & built by [Name]"* right
- Border-top: `1px solid --color-border`
- Font size: small, muted color

---

## Interactions & Animations

All animations should be subtle. Nothing should feel distracting.

| Element | Behavior |
|---|---|
| Cards | `translateY(-4px)` + deeper shadow on hover, 200ms ease |
| Buttons (primary) | Darken to `--color-accent-dark` on hover |
| Buttons (outline) | Fill with `--color-accent`, text goes white on hover |
| Nav links | Accent-colored underline slides in on hover |
| Section entry | Fade-in + `translateY(20px → 0)` as section enters viewport — use `IntersectionObserver` |
| Filter tabs | Active tab gets blue background + white text; smooth color transition |
| Lightbox | Fade in overlay, scale image from 0.95 → 1 |

---

## Responsiveness

| Breakpoint | Behavior |
|---|---|
| `> 1024px` | Desktop: two-column layouts, 3-column grids |
| `768px–1024px` | Tablet: reduce columns, adjust padding |
| `< 768px` | Mobile: single column, hamburger nav, reduced font sizes |

Use CSS custom properties and `clamp()` for fluid typography where appropriate.

---

## Implementation Notes

- No frameworks or build tools. Plain HTML, CSS, and JavaScript only.
- Use Lucide Icons via CDN: `https://unpkg.com/lucide@latest`
- All content (projects, skills, design work, contact links) must be editable from the data objects in `main.js` without touching HTML structure.
- CSS Variables must be defined in `:root` — no magic numbers scattered through stylesheets.
- JavaScript: use `DOMContentLoaded`, keep functions small and named clearly.
- Avoid inline styles. All styling through CSS classes.
- Images that are missing should fail gracefully — use a neutral placeholder color as fallback background.

---

## Out of Scope (for this build)

- Backend / database
- CMS integration
- React or any JS framework
- Blog section
- Dark mode toggle
- Multi-language support

These can be added in future iterations without restructuring the current codebase, because content lives in the data layer and layout is modular by section.

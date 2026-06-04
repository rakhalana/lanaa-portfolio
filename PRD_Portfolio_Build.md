# Portfolio Website — Product Requirements Document

## Project Summary

A personal portfolio website for a student seeking a technology internship. The owner has skills in frontend development (HTML/CSS/JS), UI/UX design, and graphic design. The site must feel like a modern, premium product website rather than a traditional resume. It communicates the identity: "A digital builder who bridges design and technology." The structure is flexible enough to accommodate future disciplines (Data Analytics, Artificial Intelligence).

---

## Design System

### General Feeling & Aesthetic
- **Target feeling:** Modern, Premium, Creative but professional, Product-oriented, Clean and memorable.
- **Visual references:** Linear, Vercel, Raycast, Stripe, Framer.
- **Avoid:** Generic templates, resume-style layouts, excessive card grids, AI-generated aesthetics.

### Colors

Dark-first design emphasizing a deep charcoal background with subtle interactive elements.

```css
--color-bg:          #0A0A0A;   /* Deep charcoal / near-black */
--color-bg-alt:      #171717;   /* Slightly lighter for cards */
--color-border:      #262626;   /* Subtle dark borders */
--color-text:        #FFFFFF;   /* Primary text (Off-white) */
--color-text-muted:  #A3A3A3;   /* Secondary text, soft gray */
--color-accent:      #4F46E5;   /* Primary accent: Indigo */
--color-accent-secondary: #06B6D4; /* Secondary accent: Cyan */
```

### Background Treatments
- **Mesh Gradient:** Subtle, animated, low-opacity mesh gradient in the background (combining Indigo and Cyan).
- **Grid Pattern:** Soft, faint grid pattern to give a structured "builder" feel.
- **Noise Texture:** Very light noise texture overlay.
- **Glow Elements:** Floating glow elements with low opacity.

### Typography

```css
--font-heading: 'Geist', system-ui, sans-serif;
--font-body:    'Inter', system-ui, sans-serif;
```

- Strong typography hierarchy.
- Large headlines with generous spacing.
- Minimal visual clutter.

### Spacing & Shape

```css
--radius-card:   16px;
--radius-btn:    8px;
--shadow-hover:  0 12px 32px rgba(79, 70, 229, 0.15); /* Indigo tinted shadow */
--max-width:     1200px;
--section-gap:   120px;
--section-gap-mobile: 80px;
```

---

## File Structure

```
/
├── index.html
├── vercel.json
├── style.css
├── js/
│   ├── data.js
│   ├── render.js
│   ├── interactions.js
│   └── main.js
└── assets/
    ├── images/
    │   └── projects/
    ├── design/
    └── cv.pdf
```

---

## Data Layer

All content is defined as JavaScript objects/arrays in `js/data.js`.

### `projects` array

```js
const projects = [
  {
    id: "project-slug",
    title: "Project Title",
    description: "One or two sentences describing what this is and what problem it solves.",
    category: "frontend",
    tags: ["HTML", "CSS", "JS"],
    thumbnail: "assets/images/projects/project-slug.jpg",
    liveUrl: "https://...",
    sourceUrl: "https://github.com/...",
    figmaUrl: null,
    featured: true // Top featured project
  }
];
```

### `journey` array (Replaces Experience)

```js
const journey = [
  {
    year: "2024",
    title: "Frontend Development",
    description: "Building responsive, modern web applications."
  },
  {
    year: "2023",
    title: "UI/UX Design",
    description: "Designing user-centric interfaces and experiences."
  },
  {
    year: "2021",
    title: "Visual Design",
    description: "Creating brand identities and graphic assets."
  },
  {
    year: "Future",
    title: "Data & AI",
    description: "Currently exploring data analytics and AI applications."
  }
];
```

### `capabilities` array (Replaces Skills)

Grouped expertise into core categories.

```js
const capabilities = [
  {
    category: "Design",
    items: ["UI/UX Design", "Wireframing", "Prototyping", "Branding"]
  },
  {
    category: "Development",
    items: ["HTML", "CSS", "JavaScript", "Laravel"]
  },
  {
    category: "Creative",
    items: ["Visual Design", "Content Design", "Motion Graphics"]
  },
  {
    category: "Currently Exploring",
    items: ["Data Analytics", "AI Applications"]
  }
];
```

---

## Sections

### 1. Navbar
- Fixed at top with glassmorphism blur on scroll (`backdrop-filter: blur(12px)`).
- Left: Monogram/Text logo.
- Right: Navigation links.

### 2. Hero Section
- **Large statement:** "Design. Develop. Create. Building digital experiences through design and technology."
- **Visual Anchor:** An interactive visual network or animated node graph representing creativity and technology (Canvas-based).
- **Primary CTA:** View Projects
- **Secondary CTA:** Contact Me

### 3. Featured Work
- Showcases only the *strongest* project immediately after the hero.
- Large showcase format including: Problem, Process, Solution, Result.
- Becomes the visual anchor of the portfolio.

### 4. Selected Projects
- Dynamic masonry or asymmetrical grid (no identical card sizes).
- Mix of Frontend, UI/UX, and Visual design projects.
- Treated as mini case studies rather than simple gallery items.

### 5. Journey Section
- Replaces traditional Experience section.
- Visual timeline format showing the progression from Visual Design (2021) to UI/UX (2023) to Frontend (2024), leading into the Future (Data & AI).

### 6. Capabilities Section
- Groups expertise into Design, Development, Creative, and Future Areas.
- Clean, list-based or tag-based layout.

### 7. Creative Showcase
- Dedicated visual gallery for design work.
- Large immersive previews (no small thumbnails).

### 8. Contact Section
- Minimal and elegant.
- Links: Email, LinkedIn, GitHub.
- Statement: "Open to collaborations, internships, and creative technology projects."

---

## Animations & Interactions

**Philosophy:** Intentional and premium. No flashy, gaming-style animations.

**Include:**
- Smooth section reveal on scroll.
- Floating gradient movement.
- Navbar blur on scroll.
- Hover elevation on cards (glassmorphism effect).
- Subtle glow interactions.
- Number counters (if applicable).
- Smooth page transitions.

**Avoid:**
- Typing effects.
- Heavy parallax.
- Loading screens.

---

## Implementation Notes

- **CSS Framework:** Custom CSS Grid/Flexbox approach for asymmetrical layouts, utilizing Bootstrap classes only as supplementary utilities where appropriate.
- **Icons:** Lucide Icons.
- **Responsiveness:** Fluid typography and scalable layouts for mobile, tablet, and desktop.

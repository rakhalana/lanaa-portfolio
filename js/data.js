// ============================================================
// Data Layer — All content arrays
// ============================================================
// Edit these to update your portfolio content.
// No HTML or CSS changes needed.
// ============================================================

// ── Profile ─────────────────────────────────────────────────

const profile = {
  name: "Rakha Maulana",
  tagline: "Design. Develop. Create. Building digital experiences through design and technology.",
  location: "Sidoarjo, Indonesia",
  email: "rakhamaulanawjy@gmail.com",
  phone: "+6285161568724"
};

// ── Journey (Replaces Experience/Organizations) ─────────────

const journey = [
  {
    year: "Future",
    title: "Data Analytics & AI",
    description: "Currently exploring data science and artificial intelligence applications."
  },
  {
    year: "2024",
    title: "Frontend Development",
    description: "Building responsive, modern web applications with scalable code architecture."
  },
  {
    year: "2023",
    title: "UI/UX Design",
    description: "Designing user-centric interfaces and holistic digital experiences."
  },
  {
    year: "2021",
    title: "Visual Design",
    description: "Creating brand identities, graphic assets, and marketing materials."
  }
];

// ── Capabilities ────────────────────────────────────────────

const capabilities = [
  {
    category: "Design",
    items: ["UI/UX Design", "Wireframing", "Prototyping", "Branding"]
  },
  {
    category: "Development",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"]
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

// ── Projects ────────────────────────────────────────────────

const projects = [
  {
    id: "personal-portfolio",
    title: "Premium Portfolio Website",
    description: "A dark-mode, modern product-inspired portfolio built to showcase a seamless blend of design and technology. Features custom CSS Grid layouts and interactive canvas node networks.",
    category: "frontend",
    tags: ["HTML", "SCSS", "JavaScript", "Canvas"],
    thumbnail: "assets/images/projects/portfolio.jpg",
    liveUrl: "#",
    sourceUrl: "https://github.com/rakhamaulana",
    figmaUrl: null,
    featured: true // This will be the single Featured Work
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    description: "A dynamic weather application with real-time data, animated icons, and responsive design. Features geolocation and city search.",
    category: "frontend",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    thumbnail: "assets/images/projects/weather.jpg",
    liveUrl: "#",
    sourceUrl: "https://github.com/rakhamaulana",
    figmaUrl: null,
    featured: false
  },
  {
    id: "ecommerce-redesign",
    title: "E-Commerce App Redesign",
    description: "Complete UI/UX redesign of a local e-commerce mobile app, improving user flow and conversion rate through research-driven design.",
    category: "uiux",
    tags: ["Figma", "User Research", "Prototyping"],
    thumbnail: "assets/images/projects/ecommerce.jpg",
    liveUrl: null,
    sourceUrl: null,
    figmaUrl: "https://figma.com",
    featured: false
  },
  {
    id: "task-manager",
    title: "Task Manager App",
    description: "A productivity web app with drag-and-drop task boards, priority labels, and local storage persistence.",
    category: "frontend",
    tags: ["HTML", "CSS", "JavaScript", "Drag & Drop"],
    thumbnail: "assets/images/projects/taskmanager.jpg",
    liveUrl: "#",
    sourceUrl: "https://github.com/rakhamaulana",
    figmaUrl: null,
    featured: false
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker UI Concept",
    description: "A mobile-first UI/UX concept for a fitness tracking app with clean data visualization and gamification elements.",
    category: "uiux",
    tags: ["Figma", "UI Design", "Data Viz"],
    thumbnail: "assets/images/projects/fitness.jpg",
    liveUrl: null,
    sourceUrl: null,
    figmaUrl: "https://figma.com",
    featured: false
  }
];

// ── Design Work ─────────────────────────────────────────────

const designWork = [
  { id: "poster-music-fest", title: "Music Festival Poster", type: "Poster", image: "assets/design/poster-music.jpg" },
  { id: "brand-coffeeshop", title: "Coffee Shop Branding", type: "Branding", image: "assets/design/brand-coffee.jpg" },
  { id: "social-campaign", title: "Social Media Campaign", type: "Social Media", image: "assets/design/social-campaign.jpg" },
  { id: "poster-tech", title: "Tech Conference Poster", type: "Poster", image: "assets/design/poster-tech.jpg" },
  { id: "illustration-character", title: "Character Illustration", type: "Illustration", image: "assets/design/illustration-char.jpg" },
  { id: "brand-startup", title: "Startup Logo & Identity", type: "Branding", image: "assets/design/brand-startup.jpg" }
];

// ── Social Links ────────────────────────────────────────────

const socialLinks = [
  { name: "Email", icon: "mail", url: "mailto:rakhamaulanawjy@gmail.com" },
  { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/rakha-maulanaa" },
  { name: "GitHub", icon: "github", url: "https://github.com/rakhamaulana" }
];

// ── Category Labels ─────────────────────────────────────────

const categoryLabels = {
  frontend: "Frontend",
  uiux: "UI/UX",
  graphic: "Graphic Design",
  data: "Data Analytics",
  ai: "AI Applications"
};

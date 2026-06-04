// ============================================================
// Data Layer — All content arrays
// ============================================================
// Edit these to update your portfolio content.
// No HTML or CSS changes needed.
// ============================================================

// ── Profile ─────────────────────────────────────────────────

const profile = {
  name: "Rakha Maulana",
  tagline: "Mahasiswa Sistem Informasi dengan pengalaman di frontend development, desain grafis, dan manajemen media kreatif.",
  location: "Sidoarjo, Indonesia",
  email: "rakhamaulanawjy@gmail.com",
  phone: "+6285161568724"
};

// ── Experiences ─────────────────────────────────────────────

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "ORDO Apps",
    location: "Surabaya",
    period: "Feb 2025 — Jun 2025",
    type: "Internship",
    description: [
      "Mengembangkan antarmuka web pada 3 proyek klien menggunakan HTML, SCSS, JavaScript, Bootstrap, dan Laravel dengan tampilan responsif di berbagai perangkat",
      "Melakukan bug fixing dan perbaikan UI secara berkala untuk menjaga kualitas dan konsistensi tampilan produk sebelum delivery ke klien",
      "Berkolaborasi dengan tim QA, backend, dan designer dalam proses pengembangan dan pengujian fitur"
    ]
  },
  {
    role: "Media & Print Assistant Intern",
    company: "Orange Digital Printing & Advertising",
    location: "Sidoarjo",
    period: "Jan 2021 — Mar 2021",
    type: "Internship",
    description: [
      "Membantu proses produksi cetak dari desain hingga finishing — 100+ materi cetak (banner, stiker, poster) selesai selama 3 bulan",
      "Merancang materi visual untuk klien menggunakan Adobe Illustrator dan CorelDRAW"
    ]
  }
];

// ── Organizations ───────────────────────────────────────────

const organizations = [
  {
    name: "UKM Veteran Esport",
    role: "Kepala Media dan Informasi",
    period: "Jan 2025 — Jan 2026",
    location: "UPN Veteran Jatim",
    description: "Memimpin tim 5 orang dalam pengelolaan konten, desain grafis, dan publikasi di Instagram, TikTok, dan YouTube. Koordinator PDD dalam 10+ event esport.",
    icon: "monitor"
  },
  {
    name: "Fasilkom Fest 2025",
    role: "Kepala Divisi PDD",
    period: "Jul 2025 — Dec 2025",
    location: "UPN Veteran Jatim",
    description: "Memimpin tim PDD 10+ orang untuk seluruh kebutuhan visual, dokumentasi, dan publikasi festival multi-bidang yang berlangsung lebih dari 10 hari.",
    icon: "trophy"
  },
  {
    name: "Veteran Esport East Java Tournament 2024",
    role: "Kepala Divisi PDD",
    period: "Apr 2024 — Jun 2024",
    location: "UPN Veteran Jatim",
    description: "Produksi materi visual, publikasi konten, dan dokumentasi event esport lintas kampus se-Jawa Timur. Menyusun guideline desain event.",
    icon: "award"
  },
  {
    name: "Veteran Esport Dev League S5",
    role: "Sekretaris Divisi PDD",
    period: "Nov 2025 — Dec 2025",
    location: "UPN Veteran Jatim",
    description: "Mengelola administrasi divisi PDD dan berkontribusi dalam produksi materi visual serta publikasi konten media sosial event.",
    icon: "clipboard"
  }
];

// ── Education ───────────────────────────────────────────────

const education = [
  {
    institution: "UPN \"Veteran\" Jawa Timur",
    degree: "S1 Sistem Informasi",
    period: "Aug 2022 — Jul 2026 (Expected)",
    gpa: "3.83 / 4.00",
    highlights: [
      "Awardee Beasiswa Prestasi Pendidikan dalam Negeri Sidoarjo 2024-2025",
      "Semifinalis X-PROJECT 9.0 UI/UX Design Competition — Universitas Negeri Surabaya"
    ]
  }
];

// ── Skills ──────────────────────────────────────────────────

const skills = [
  {
    category: "Development",
    items: [
      { name: "HTML & CSS",        icon: "code",       level: "proficient" },
      { name: "SCSS / Sass",       icon: "hash",       level: "proficient" },
      { name: "JavaScript",        icon: "zap",        level: "proficient" },
      { name: "PHP & Laravel",     icon: "server",     level: "learning" },
      { name: "Bootstrap",         icon: "layout",     level: "proficient" },
      { name: "Git & GitHub",      icon: "git-branch", level: "proficient" },
      { name: "Responsive Design", icon: "monitor",    level: "proficient" }
    ]
  },
  {
    category: "Design",
    items: [
      { name: "UI/UX Design",      icon: "figma",      level: "proficient" },
      { name: "Graphic Design",    icon: "pen-tool",   level: "proficient" },
      { name: "Visual Branding",   icon: "palette",    level: "proficient" },
      { name: "Prototyping",       icon: "smartphone", level: "proficient" }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Figma",            icon: "figma",      level: "proficient" },
      { name: "Adobe Illustrator",icon: "pen-tool",   level: "proficient" },
      { name: "Canva",            icon: "image",      level: "proficient" },
      { name: "OBS Studio",       icon: "video",      level: "proficient" },
      { name: "VS Code",          icon: "terminal",   level: "proficient" },
      { name: "Google Workspace", icon: "file-text",  level: "proficient" }
    ]
  }
];

// ── Projects ────────────────────────────────────────────────

const projects = [
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    description: "A clean, responsive portfolio website built from scratch using HTML, SCSS, JavaScript, and Bootstrap to showcase projects and design work.",
    category: "frontend",
    tags: ["HTML", "SCSS", "JavaScript", "Bootstrap"],
    thumbnail: "assets/images/projects/portfolio.jpg",
    liveUrl: "#",
    sourceUrl: "https://github.com/rakhamaulana",
    figmaUrl: null,
    featured: true
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
    featured: true
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
    featured: true
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
    id: "cafe-branding",
    title: "Café Branding & Menu Design",
    description: "Visual identity and menu design for a local café, including logo, color palette, typography, and printed materials.",
    category: "graphic",
    tags: ["Illustrator", "Photoshop", "Branding"],
    thumbnail: "assets/images/projects/cafe.jpg",
    liveUrl: null,
    sourceUrl: null,
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
  {
    id: "poster-music-fest",
    title: "Music Festival Poster",
    type: "Poster",
    image: "assets/design/poster-music.jpg"
  },
  {
    id: "brand-coffeeshop",
    title: "Coffee Shop Branding",
    type: "Branding",
    image: "assets/design/brand-coffee.jpg"
  },
  {
    id: "social-campaign",
    title: "Social Media Campaign",
    type: "Social Media",
    image: "assets/design/social-campaign.jpg"
  },
  {
    id: "poster-tech",
    title: "Tech Conference Poster",
    type: "Poster",
    image: "assets/design/poster-tech.jpg"
  },
  {
    id: "illustration-character",
    title: "Character Illustration",
    type: "Illustration",
    image: "assets/design/illustration-char.jpg"
  },
  {
    id: "brand-startup",
    title: "Startup Logo & Identity",
    type: "Branding",
    image: "assets/design/brand-startup.jpg"
  }
];

// ── Social Links ────────────────────────────────────────────

const socialLinks = [
  { name: "Email",    icon: "mail",     url: "mailto:rakhamaulanawjy@gmail.com" },
  { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/rakha-maulanaa" },
  { name: "GitHub",   icon: "github",   url: "https://github.com/rakhamaulana" }
];

// ── Category Labels ─────────────────────────────────────────

const categoryLabels = {
  frontend: "Frontend",
  uiux:     "UI/UX",
  graphic:  "Graphic Design",
  data:     "Data",
  ai:       "AI"
};

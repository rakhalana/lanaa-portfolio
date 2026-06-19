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

// ── Experience & Education ──────────────────────────────────

const workExperiences = [
  {
    role: "Frontend Developer Intern",
    company: "ORDO Apps",
    location: "Surabaya",
    period: "Feb 2025 - Jun 2025",
    description: [
      "Developed web interfaces for 3 external client projects using HTML, SCSS, JavaScript, Bootstrap, and Laravel, ensuring responsive layouts across devices.",
      "Conducted regular bug fixing and UI improvements to maintain product quality and visual consistency prior to client delivery.",
      "Collaborated with QA, backend, and design teams during feature development and testing, ensuring bug-free frontend implementation according to specifications."
    ]
  },
  {
    role: "Media & Print Assistant Intern",
    company: "Orange Digital Printing & Advertising",
    location: "Sidoarjo",
    period: "Jan 2021 - Mar 2021",
    description: [
      "Assisted in print production processes from design to finishing, successfully completing 100+ print materials ready for use within 3 months.",
      "Designed visual materials such as posters, banners, and stickers for internal and external client needs using Adobe Illustrator and CorelDRAW."
    ]
  }
];

const organizationExperiences = [
  {
    role: "Head of Media and Information",
    company: "UKM Veteran Esport",
    location: "Surabaya",
    period: "Jan 2025 - Jan 2026",
    description: [
      "Led a team of 5 in content management, graphic design, and publication across Instagram, TikTok, and YouTube to support organizational visibility.",
      "Developed publication SOPs and created new design templates as the division's visual standard, improving cross-division coordination.",
      "Served as PDD Coordinator in 10+ campus esports events, leading the team in visual material production, documentation, and publication."
    ]
  },
  {
    role: "Head of PDD Division",
    company: "Veteran Esport East Java Tournament 2024",
    location: "Surabaya",
    period: "Apr 2024 - Jun 2024",
    description: [
      "Led the PDD team in producing visual materials, social media publication, and documentation for a major cross-campus esports event.",
      "Formulated Design Guidelines as the official visual reference for the event, ensuring consistent visual identity across all publication materials.",
      "Coordinated across divisions to align publication needs from preparation to event execution."
    ]
  },
  {
    role: "Secretary of PDD Division",
    company: "Veteran Esport Development League Season 5",
    location: "Surabaya",
    period: "Nov 2025 - Dec 2025",
    description: [
      "Managed PDD division administration including meeting minutes and internal team coordination during the preparation and execution of the event.",
      "Contributed to the production of visual materials and social media publications to support event visibility."
    ]
  },
  {
    role: "Head of PDD Division",
    company: "Fasilkom Fest 2025",
    location: "Surabaya",
    period: "Jul 2025 - Dec 2026",
    description: [
      "Led a team of 10+ members in managing all visual, documentation, and social media publication needs for a multi-disciplinary festival lasting over 10 days.",
      "Produced and published design materials for hundreds of participants, ensuring consistent event visual identity from start to finish."
    ]
  }
];

const educationData = [
  {
    institution: "Universitas Pembangunan Nasional Veteran Jawa Timur",
    location: "Surabaya, Indonesia",
    degree: "Bachelor of Information System",
    period: "Aug 2022 - Jul 2026 (Expected)",
    gpa: "3.83/4.00",
    highlights: [
      "Awardee of Sidoarjo Domestic Education Achievement Scholarship 2024-2025",
      "National Semifinalist in UI/UX Design Competition"
    ]
  },
  {
    institution: "SMK Negeri 2 Buduran",
    location: "Sidoarjo, Indonesia",
    degree: "Multimedia",
    period: "Jun 2019 - Jun 2022",
    // gpa: "89.7/100",
    // highlights: [
    //   "Awardee of Sidoarjo Domestic Education Achievement Scholarship 2024-2025",
    //   "National Semifinalist in UI/UX Design Competition"
    // ]
  }
];

// ── Capabilities ────────────────────────────────────────────

const capabilities = [
  {
    category: "Frontend Development",
    items: ["HTML & SCSS", "JavaScript", "PHP & Laravel", "Bootstrap"]
  },
  {
    category: "UI/UX & Design",
    items: ["UI/UX Design", "Graphic Design", "Branding & Guidelines", "Figma & Illustrator"]
  },
  {
    category: "Media & Management",
    items: ["Social Media Management", "Video Production & OBS", "Team Leadership", "Cross-functional Collab"]
  },
  {
    category: "Currently Exploring",
    items: ["Data Analytics", "AI Applications"]
  }
];

// ── Projects ────────────────────────────────────────────────

const projects = [
  {
    id: "latest-project",
    title: "Decision Support System for MSME Product Selection",
    description: "Developed a web-based Decision Support System (DSS) for MSME food product curation and selection. Implemented the Analytic Hierarchy Process (AHP) for criteria weighting and Profile Matching for product evaluation, enabling objective ranking and decision-making through a multi-criteria assessment approach.",
    category: "fullstack",
    tags: ["HTML", "SCSS", "JavaScript", "PHP", "Laravel", "Bootstrap", "Supabase"],
    thumbnail: "assets/images/projects/portfolio.jpg",
    liveUrl: "https://dss-kurasiumkm-demo.vercel.app",
    sourceUrl: "https://github.com/rakhalana/dss-kurasi",
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

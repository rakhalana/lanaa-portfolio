// ============================================================
// Render Functions — populate HTML from data arrays
// ============================================================

function renderHero() {
  const taglineEl = document.getElementById('hero-tagline');
  if (taglineEl) taglineEl.textContent = profile.tagline;
}

function renderFeaturedWork() {
  const container = document.getElementById('featured-container');
  if (!container) return;

  const featured = projects.find(p => p.featured);
  if (!featured) return;

  const actions = [];
  if (featured.liveUrl) actions.push(`<a href="${featured.liveUrl}" target="_blank" rel="noopener" class="btn-primary-custom"><i data-lucide="external-link"></i> Live Demo</a>`);
  if (featured.sourceUrl) actions.push(`<a href="${featured.sourceUrl}" target="_blank" rel="noopener" class="btn-outline-custom"><i data-lucide="github"></i> Source Code</a>`);

  container.innerHTML = `
    <article class="featured-card">
      <div class="featured-content">
        <h3 class="featured-title">${featured.title}</h3>
        <p   class="featured-desc">${featured.description}</p>
        <div class="featured-tags">
          ${featured.tags.map(t => `<span class="pill pill-muted">${t}</span>`).join('')}
        </div>
        <div class="hero-buttons">
          ${actions.join('')}
        </div>
      </div>
      <div class="featured-visual">
        <img src="${featured.thumbnail}" alt="${featured.title}" loading="lazy" onerror="this.style.display='none'">
      </div>
    </article>
  `;
}

function renderProjects() {
  const tabsContainer = document.getElementById('filter-tabs');
  const gridContainer = document.getElementById('projects-grid');
  if (!tabsContainer || !gridContainer) return;

  // Render filter tabs
  const nonFeatured = projects.filter(p => !p.featured);
  const categories = [...new Set(nonFeatured.map(p => p.category))];
  
  let tabsHtml = `<button class="active" data-filter="all">All</button>`;
  categories.forEach(cat => {
    tabsHtml += `<button data-filter="${cat}">${categoryLabels[cat] || cat}</button>`;
  });
  tabsContainer.innerHTML = tabsHtml;

  // Render masonry cards
  gridContainer.innerHTML = nonFeatured.map((proj, idx) => {
    const actions = [];
    if (proj.liveUrl)   actions.push(`<a href="${proj.liveUrl}" target="_blank" rel="noopener" aria-label="Live Demo"><i data-lucide="external-link"></i></a>`);
    if (proj.sourceUrl) actions.push(`<a href="${proj.sourceUrl}" target="_blank" rel="noopener" aria-label="Source Code"><i data-lucide="github"></i></a>`);
    if (proj.figmaUrl)  actions.push(`<a href="${proj.figmaUrl}" target="_blank" rel="noopener" aria-label="Figma"><i data-lucide="figma"></i></a>`);

    return `
      <article class="project-card custom-card animate-on-scroll stagger-${(idx % 3) + 1}" data-category="${proj.category}">
        <img src="${proj.thumbnail}" alt="${proj.title}" class="project-thumbnail" loading="lazy" onerror="this.style.display='none'">
        <div class="project-content">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.description}</p>
          <div class="project-meta">
            <div class="project-tags">
              ${proj.tags.map(t => `<span class="pill pill-muted">${t}</span>`).join('')}
            </div>
            ${actions.length ? `<div class="project-links">${actions.join('')}</div>` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function renderExperienceTab(tabName = 'work') {
  const container = document.getElementById('experience-content');
  if (!container) return;

  let data = [];
  let isEducation = false;
  
  if (tabName === 'work') {
    data = workExperiences;
  } else if (tabName === 'organization') {
    data = organizationExperiences;
  } else if (tabName === 'education') {
    data = educationData;
    isEducation = true;
  }

  container.innerHTML = `<div class="experience-tab-pane active" id="tab-${tabName}">
    <div class="exp-list">
      ${data.map((item, idx) => {
        if (isEducation) {
          return `
            <div class="exp-card animate-on-scroll stagger-${idx + 1}">
              <div class="exp-dot"></div>
              <div class="exp-meta-side">
                <span class="exp-period">${item.period}</span>
                <span class="exp-location">GPA: ${item.gpa}</span>
              </div>
              <div class="exp-content">
                <h3 class="exp-role">${item.institution}</h3>
                <div class="exp-company">${item.degree}</div>
                ${item.highlights ? `
                  <ul class="exp-desc">
                    ${item.highlights.map(hl => `<li>${hl}</li>`).join('')}
                  </ul>
                ` : ''}
              </div>
            </div>
          `;
        } else {
          return `
            <div class="exp-card animate-on-scroll stagger-${idx + 1}">
              <div class="exp-dot"></div>
              <div class="exp-meta-side">
                <span class="exp-period">${item.period}</span>
                <span class="exp-location">${item.location}</span>
              </div>
              <div class="exp-content">
                <h3 class="exp-role">${item.role}</h3>
                <div class="exp-company">${item.company}</div>
                <ul class="exp-desc">
                  ${item.description.map(desc => `<li>${desc}</li>`).join('')}
                </ul>
              </div>
            </div>
          `;
        }
      }).join('')}
    </div>
  </div>`;
  
  // Re-initialize scroll animations for the new content
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  container.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

function renderCapabilities() {
  const container = document.getElementById('capabilities-grid');
  if (!container) return;

  container.innerHTML = capabilities.map((cap, idx) => `
    <div class="capability-card custom-card animate-on-scroll stagger-${(idx % 2) + 1}">
      <h3 class="capability-category">${cap.category}</h3>
      <div class="capability-items">
        ${cap.items.map(item => `
          <div class="capability-item">
            <i data-lucide="check-circle-2"></i>
            <span>${item}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderDesignWork() {
  const container = document.getElementById('design-grid');
  if (!container) return;

  container.innerHTML = designWork.map((work, idx) => `
    <div class="col-md-6 col-lg-4 animate-on-scroll stagger-${(idx % 6) + 1}">
      <div class="design-item custom-card" data-image="${work.image}" data-title="${work.title}" data-type="${work.type}" style="overflow:hidden; cursor:pointer;">
        <img src="${work.image}" alt="${work.title}" style="width:100%; height:300px; object-fit:cover; transition:transform 0.4s ease;" loading="lazy" onerror="this.style.display='none'">
      </div>
    </div>
  `).join('');
}

function renderSocialLinks() {
  const container = document.getElementById('social-links');
  if (!container) return;

  container.innerHTML = socialLinks.map(link => `
    <a href="${link.url}" target="_blank" rel="noopener" class="btn-outline-custom m-2">
      <i data-lucide="${link.icon}"></i>
      ${link.name}
    </a>
  `).join('');
}

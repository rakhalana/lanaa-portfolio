// ============================================================
// Render Functions — populate HTML from data arrays
// ============================================================

function renderSkills() {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  let html = '';

  skills.forEach((group, gIdx) => {
    html += `
      <div class="skill-category animate-on-scroll stagger-${gIdx + 1}">
        <div class="category-label">${group.category}</div>
        <div class="category-items">
          ${group.items.map(s => `
            <div class="skill-card">
              <div class="skill-icon"><i data-lucide="${s.icon}"></i></div>
              <div class="skill-info">
                <div class="skill-name">${s.name}</div>
                <div class="skill-level ${s.level === 'learning' ? 'learning' : ''}">
                  ${s.level === 'learning' ? '📚 Learning' : '✓ Proficient'}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  // "Expanding Soon" slot
  html += `
    <div class="skill-category animate-on-scroll stagger-${skills.length + 1}">
      <div class="category-label">Coming Next</div>
      <div class="category-items">
        <div class="skill-expanding">
          <i data-lucide="sparkles"></i>
          Expanding Soon — Data & AI
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;
}


function renderExperiences() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  container.innerHTML = experiences.map((exp, idx) => `
    <div class="timeline-item animate-on-scroll stagger-${idx + 1}">
      <div class="timeline-header">
        <span class="timeline-role">${exp.role}</span>
        <span class="timeline-type">${exp.type}</span>
      </div>
      <div class="timeline-company">${exp.company} · ${exp.location}</div>
      <div class="timeline-period">
        <i data-lucide="calendar"></i>
        ${exp.period}
      </div>
      <ul class="timeline-desc">
        ${exp.description.map(d => `<li>${d}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}


function renderOrganizations() {
  const container = document.getElementById('org-grid');
  if (!container) return;

  container.innerHTML = organizations.map((org, idx) => `
    <div class="col-md-6 animate-on-scroll stagger-${(idx % 4) + 1}">
      <div class="org-card">
        <div class="org-header">
          <div class="org-icon"><i data-lucide="${org.icon}"></i></div>
          <div class="org-meta">
            <div class="org-name">${org.name}</div>
            <div class="org-role">${org.role}</div>
          </div>
        </div>
        <div class="org-period">
          <i data-lucide="calendar"></i>
          ${org.period}
        </div>
        <div class="org-desc">${org.description}</div>
      </div>
    </div>
  `).join('');
}


function renderEducation() {
  const container = document.getElementById('edu-grid');
  if (!container) return;

  container.innerHTML = education.map((edu, idx) => `
    <div class="col-lg-8 mx-auto animate-on-scroll stagger-${idx + 1}">
      <div class="edu-card">
        <div class="edu-header">
          <div class="edu-icon"><i data-lucide="graduation-cap"></i></div>
          <div class="edu-meta">
            <div class="edu-institution">${edu.institution}</div>
            <div class="edu-degree">${edu.degree}${edu.gpa ? ' — GPA ' + edu.gpa : ''}</div>
          </div>
        </div>
        <div class="edu-period">
          <i data-lucide="calendar"></i>
          ${edu.period}
        </div>
        ${edu.highlights && edu.highlights.length ? `
          <div class="edu-highlights">
            ${edu.highlights.map(h => `
              <div class="edu-highlight">
                <i data-lucide="award"></i>
                <span>${h}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    </div>
  `).join('');
}


function renderProjects() {
  const tabsContainer = document.getElementById('filter-tabs');
  const gridContainer = document.getElementById('projects-grid');
  if (!tabsContainer || !gridContainer) return;

  const categories = [...new Set(projects.map(p => p.category))];

  // Tabs
  let tabsHtml = `<button class="filter-tab active" data-filter="all">All</button>`;
  categories.forEach(cat => {
    tabsHtml += `<button class="filter-tab" data-filter="${cat}">${categoryLabels[cat] || cat}</button>`;
  });
  tabsContainer.innerHTML = tabsHtml;

  // Cards
  gridContainer.innerHTML = projects.map((proj, idx) => {
    const actions = [];
    if (proj.liveUrl)   actions.push(`<a href="${proj.liveUrl}" target="_blank" rel="noopener"><i data-lucide="external-link"></i> Live</a>`);
    if (proj.sourceUrl) actions.push(`<a href="${proj.sourceUrl}" target="_blank" rel="noopener"><i data-lucide="github"></i> Code</a>`);
    if (proj.figmaUrl)  actions.push(`<a href="${proj.figmaUrl}" target="_blank" rel="noopener"><i data-lucide="figma"></i> Figma</a>`);

    return `
      <div class="col-md-6 col-lg-4 animate-on-scroll stagger-${(idx % 6) + 1}">
        <article class="project-card" data-category="${proj.category}">
          <div class="project-thumb">
            <img src="${proj.thumbnail}" alt="${proj.title}" loading="lazy" onerror="this.style.display='none'">
            <span class="project-category-pill">${categoryLabels[proj.category] || proj.category}</span>
          </div>
          <div class="project-body">
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-desc">${proj.description}</p>
            <div class="project-tags">
              ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            ${actions.length ? `<div class="project-actions">${actions.join('')}</div>` : ''}
          </div>
        </article>
      </div>
    `;
  }).join('');
}


function renderDesignWork() {
  const container = document.getElementById('design-grid');
  if (!container) return;

  container.innerHTML = designWork.map((work, idx) => `
    <div class="col-md-6 col-lg-4 animate-on-scroll stagger-${(idx % 6) + 1}">
      <div class="design-item" data-image="${work.image}" data-title="${work.title}" data-type="${work.type}">
        <img src="${work.image}" alt="${work.title}" loading="lazy" onerror="this.style.display='none'">
        <div class="design-overlay">
          <div class="design-title">${work.title}</div>
          <div class="design-type">${work.type}</div>
        </div>
      </div>
    </div>
  `).join('');
}


function renderSocialLinks() {
  const container = document.getElementById('social-links');
  if (!container) return;

  container.innerHTML = socialLinks.map(link => `
    <a href="${link.url}" target="_blank" rel="noopener">
      <i data-lucide="${link.icon}"></i>
      ${link.name}
    </a>
  `).join('');
}

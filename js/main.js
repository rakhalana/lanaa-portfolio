// ============================================================
// Main — Init everything on DOMContentLoaded
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Render data-driven content
  renderSkills();
  renderExperiences();
  renderOrganizations();
  renderEducation();
  renderProjects();
  renderDesignWork();
  renderSocialLinks();

  // Initialize Lucide icons (after dynamic content is injected)
  if (window.lucide) {
    lucide.createIcons();
  }

  // Initialize interactions
  initNavbar();
  initScrollSpy();
  initFilterTabs();
  initLightbox();
  initSectionAnimations();
  initImageFallbacks();
});

// ============================================================
// Main — Init everything on DOMContentLoaded
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // Render data-driven content
  renderHero();
  renderFeaturedWork();
  renderProjects();
  renderExperienceTab('work');
  renderCapabilities();
  renderDesignWork();
  renderSocialLinks();

  // Initialize Lucide icons (after dynamic content is injected)
  if (window.lucide) {
    lucide.createIcons();
  }

  // Initialize interactions
  initNavbar();
  initCanvasNetwork();
  initScrollSpy();
  initFilterTabs();
  initExperienceTabs();
  initLightbox();
  initSectionAnimations();
  initImageFallbacks();
});

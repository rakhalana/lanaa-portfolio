// ============================================================
// Interactions — navbar, scroll spy, filters, lightbox, anims
// ============================================================

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('nav-hamburger');
  const overlay = document.getElementById('nav-overlay');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = overlay.classList.contains('active') ? 'hidden' : '';
  });

  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}


function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('[data-nav]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.nav === id);
        });
      }
    });
  }, {
    rootMargin: '-25% 0px -65% 0px',
    threshold: 0
  });

  sections.forEach(s => observer.observe(s));
}


function initFilterTabs() {
  const tabsContainer = document.getElementById('filter-tabs');
  if (!tabsContainer) return;

  tabsContainer.addEventListener('click', e => {
    const tab = e.target.closest('.filter-tab');
    if (!tab) return;

    tabsContainer.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;

    document.querySelectorAll('.project-card').forEach(card => {
      const col = card.closest('.col-md-6');
      if (filter === 'all' || card.dataset.category === filter) {
        if (col) col.style.display = '';
        card.classList.remove('hidden');
        card.style.animation = 'fadeInUp 0.4s ease forwards';
      } else {
        if (col) col.style.display = 'none';
        card.classList.add('hidden');
      }
    });
  });
}


function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');

  document.addEventListener('click', e => {
    const item = e.target.closest('.design-item');
    if (!item) return;

    lightboxImg.src = item.dataset.image;
    lightboxImg.alt = item.dataset.title;
    lightboxCaption.textContent = `${item.dataset.title} — ${item.dataset.type}`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
}


function initSectionAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -30px 0px'
  });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

  // Snap reveal elements in tab panes when shown to avoid animation lag
  document.querySelectorAll('button[data-bs-toggle="pill"]').forEach(tabButton => {
    tabButton.addEventListener('shown.bs.tab', e => {
      const targetSelector = e.target.getAttribute('data-bs-target');
      const pane = document.querySelector(targetSelector);
      if (pane) {
        pane.querySelectorAll('.animate-on-scroll').forEach(el => {
          el.classList.add('visible');
        });
      }
    });
  });
}


function initImageFallbacks() {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function () {
      this.style.display = 'none';
    });
  });
}

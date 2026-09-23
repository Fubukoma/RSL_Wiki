// Language switcher for RSL Wiki
(function () {
  const STORAGE_KEY = 'rsl-wiki-lang';

  function setLanguage(lang) {
    // Update all elements with data-lang
    document.querySelectorAll('[data-lang]').forEach(el => {
      if (el.getAttribute('data-lang') === lang) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    // Update buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-set-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Save preference
    localStorage.setItem(STORAGE_KEY, lang);

    // Update html lang attribute
    document.documentElement.lang = lang;
  }

  // Initialize
  function init() {
    const saved = localStorage.getItem(STORAGE_KEY) || 'fr';
    setLanguage(saved);

    // Add click listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-set-lang');
        setLanguage(lang);
      });
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

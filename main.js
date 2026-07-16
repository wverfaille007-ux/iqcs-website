/* main.js V0.2 – iQuess Consulting bv */

const i18n = {
  nl: {
    nav: { home:'Home', about:'Ons team', services:'Diensten', cases:'Referenties', contact:'Contact' },
    footer: {
      tagline: 'Senior consultancy gespecialiseerd in digitale transformatie, ERP-implementaties en strategisch management.',
      nav: 'Navigatie', contact: 'Contact',
      rights: '© 2025 IQCS bv. Alle rechten voorbehouden.',
      privacy: 'Privacybeleid'
    }
  },
  en: {
    nav: { home:'Home', about:'Our team', services:'Services', cases:'References', contact:'Contact' },
    footer: {
      tagline: 'Senior consultancy specialising in digital transformation, ERP implementations and strategic management.',
      nav: 'Navigation', contact: 'Contact',
      rights: '© 2025 IQCS bv. All rights reserved.',
      privacy: 'Privacy Policy'
    }
  }
};

let currentLang = localStorage.getItem('iqcs-lang') || 'nl';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('iqcs-lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  const t = i18n[lang].nav;
  const map = {
    'nav-home':t.home,'nav-about':t.about,'nav-services':t.services,'nav-cases':t.cases,'nav-contact':t.contact,
    'footer-nav-home':t.home,'footer-nav-about':t.about,'footer-nav-services':t.services,'footer-nav-cases':t.cases,'footer-nav-contact':t.contact
  };
  Object.entries(map).forEach(([id,text]) => { const el=document.getElementById(id); if(el) el.textContent=text; });
  document.querySelectorAll('[data-nl]').forEach(el => { el.innerHTML = el.dataset[lang] || el.dataset.nl; });
  const ft = i18n[lang].footer;
  ['footer-tagline','footer-nav-title','footer-contact-title','footer-rights','footer-privacy'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (id==='footer-tagline') el.textContent = ft.tagline;
    if (id==='footer-nav-title') el.textContent = ft.nav;
    if (id==='footer-contact-title') el.textContent = ft.contact;
    if (id==='footer-rights') el.textContent = ft.rights;
    if (id==='footer-privacy') el.textContent = ft.privacy;
  });
}

window.addEventListener('scroll', () => {
  document.querySelector('nav')?.classList.toggle('scrolled', window.scrollY > 40);
});

function setNavOpen(open) {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.getElementById('hamburger');
  navLinks?.classList.toggle('open', open);
  hamburger?.setAttribute('aria-expanded', String(open));
}

document.addEventListener('click', e => {
  const navLinks = document.querySelector('.nav-links');
  if (e.target.closest('.hamburger')) setNavOpen(!navLinks?.classList.contains('open'));
  else if (!e.target.closest('nav')) setNavOpen(false);
});

function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.lang)));
  setLang(currentLang);
  initReveal();
});

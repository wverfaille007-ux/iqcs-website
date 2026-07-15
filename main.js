/* main.js V0.2 – iQuess Consulting bv */

const i18n = {
  nl: {
    nav: { home:'Home', about:'Over Wim', services:'Diensten', cases:'Referenties', cv:'CV & Expertise', contact:'Contact' },
    footer: {
      tagline: 'Senior freelance consultant gespecialiseerd in digitale transformatie, ERP-implementaties en strategisch management.',
      nav: 'Navigatie', contact: 'Contact',
      rights: '© 2025 iQuess Consulting bv — Wim Verfaille. Alle rechten voorbehouden.'
    }
  },
  en: {
    nav: { home:'Home', about:'About Wim', services:'Services', cases:'References', cv:'CV & Expertise', contact:'Contact' },
    footer: {
      tagline: 'Senior freelance consultant specialising in digital transformation, ERP implementations and strategic management.',
      nav: 'Navigation', contact: 'Contact',
      rights: '© 2025 iQuess Consulting bv — Wim Verfaille. All rights reserved.'
    }
  }
};

let currentLang = localStorage.getItem('iqcs-lang') || 'nl';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('iqcs-lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  const t = i18n[lang].nav;
  const map = { 'nav-home':t.home,'nav-about':t.about,'nav-services':t.services,'nav-cases':t.cases,'nav-cv':t.cv,'nav-contact':t.contact };
  Object.entries(map).forEach(([id,text]) => { const el=document.getElementById(id); if(el) el.textContent=text; });
  document.querySelectorAll('[data-nl]').forEach(el => { el.innerHTML = el.dataset[lang] || el.dataset.nl; });
  const ft = i18n[lang].footer;
  ['footer-tagline','footer-nav-title','footer-contact-title','footer-rights'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (id==='footer-tagline') el.textContent = ft.tagline;
    if (id==='footer-nav-title') el.textContent = ft.nav;
    if (id==='footer-contact-title') el.textContent = ft.contact;
    if (id==='footer-rights') el.textContent = ft.rights;
  });
}

window.addEventListener('scroll', () => {
  document.querySelector('nav')?.classList.toggle('scrolled', window.scrollY > 40);
});

document.addEventListener('click', e => {
  if (e.target.closest('.hamburger')) document.querySelector('.nav-links')?.classList.toggle('open');
  else if (!e.target.closest('nav')) document.querySelector('.nav-links')?.classList.remove('open');
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

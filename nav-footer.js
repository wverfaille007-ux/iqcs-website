/* nav-footer.js V0.2 – iQuess Consulting bv brand */

function getNavHTML(activePage) {
  const pages = [
    { id: 'nav-home',     href: 'index.html',    nl: 'Home' },
    { id: 'nav-about',    href: 'about.html',     nl: 'Over Wim' },
    { id: 'nav-services', href: 'services.html',  nl: 'Diensten' },
    { id: 'nav-cases',    href: 'cases.html',     nl: 'Referenties' },
    { id: 'nav-cv',       href: 'cv.html',        nl: 'CV & Expertise' },
  ];
  const links = pages.map(p =>
    `<a id="${p.id}" href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.nl}</a>`
  ).join('');
  return `
  <nav>
    <a href="index.html" class="nav-logo">
      <img src="images/logo.png" alt="iQuess Consulting Logo">
      <div class="nav-brand">
        <span class="nav-brand-main">IQUESS</span>
        <span class="nav-brand-sub">Consulting</span>
      </div>
    </a>
    <div class="nav-links" id="navLinks">
      ${links}
      <a id="nav-contact" href="contact.html" class="nav-cta ${activePage === 'contact.html' ? 'active' : ''}">Contact</a>
    </div>
    <div class="nav-right">
      <div class="lang-switcher">
        <button class="lang-btn active" data-lang="nl">NL</button>
        <button class="lang-btn" data-lang="en">EN</button>
      </div>
      <div class="hamburger" id="hamburger">
        <span></span><span></span><span></span>
      </div>
    </div>
  </nav>`;
}

function getFooterHTML() {
  return `
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo-row">
            <img src="images/logo.png" alt="iQuess Consulting Logo">
            <div>
              <div class="footer-brand-name">IQUESS</div>
              <div class="footer-brand-sub">Consulting bv</div>
            </div>
          </div>
          <p id="footer-tagline">Senior freelance consultant gespecialiseerd in digitale transformatie, ERP-implementaties en strategisch management.</p>
        </div>
        <div class="footer-col">
          <h4 id="footer-nav-title">Navigatie</h4>
          <a id="footer-nav-home" href="index.html">Home</a>
          <a id="footer-nav-about" href="about.html">Over Wim</a>
          <a id="footer-nav-services" href="services.html">Diensten</a>
          <a id="footer-nav-cases" href="cases.html">Referenties</a>
          <a id="footer-nav-cv" href="cv.html">CV & Expertise</a>
          <a id="footer-nav-contact" href="contact.html">Contact</a>
        </div>
        <div class="footer-col">
          <h4 id="footer-contact-title">Contact</h4>
          <a href="mailto:Info@IQCS.be">Info@IQCS.be</a>
          <a href="tel:+32498889269">+32 498 889 269</a>
          <a>Jan Frans Willemsstraat 2</a>
          <a>8550 Zwevegem, België</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span id="footer-rights">© 2025 iQuess Consulting bv — Wim Verfaille. Alle rechten voorbehouden.</span>
        <a id="footer-privacy" href="privacy.html" style="color:rgba(217,242,253,0.8); font-size:0.8rem; text-decoration:underline;">Privacybeleid</a>
        <span style="color:rgba(163,227,253,0.5); font-size:0.72rem; letter-spacing:0.1em;">IQUESS · CONSULTING · BE</span>
      </div>
    </div>
  </footer>`;
}

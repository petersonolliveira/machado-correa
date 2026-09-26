const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#navigation');toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});function closeMenu(){toggle.setAttribute('aria-expanded','false');nav.classList.remove('open')}nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});document.querySelector('#year').textContent=new Date().getFullYear();
// Reveal each block once; keep content visible without animation support.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!motionPreference.matches && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.section-heading, .service-card, .about-heading, .person-card, .steps article, .faq-list, .location-grid').forEach(element => {
    if (element.getBoundingClientRect().top >= window.innerHeight) {
      element.classList.add('reveal');
      revealObserver.observe(element);
    }
  });
  motionPreference.addEventListener('change', event => {
    if (event.matches) {
      revealObserver.disconnect();
      document.querySelectorAll('.reveal').forEach(element => element.classList.add('is-visible'));
    }
  });
}

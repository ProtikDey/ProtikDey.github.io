// ---------------------------------------------
// Footer year
// ---------------------------------------------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------------------------------------------
// Active landmark highlighting
// Mirrors how assistive tech announces the current
// landmark as a reader moves through the page.
// ---------------------------------------------
const railLinks = Array.from(document.querySelectorAll('.rail__link[href^="#"]'));
const sections = railLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

// On mobile the rail becomes a horizontally scrollable top bar.
// Keep the active link visible by scrolling the bar to it.
const rail = document.querySelector('.rail');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const scrollNavToLink = (link) => {
  if (!rail || !link) return;
  if (rail.scrollWidth <= rail.clientWidth + 1) return; // bar isn't scrollable (desktop layout)
  const target = link.offsetLeft - (rail.clientWidth - link.offsetWidth) / 2; // center the link
  rail.scrollTo({
    left: Math.max(0, target),
    behavior: prefersReducedMotion.matches ? 'auto' : 'smooth'
  });
};

const setActive = (link) => {
  railLinks.forEach(l => {
    l.classList.remove('is-active');
    l.removeAttribute('aria-current');
  });
  if (link) {
    link.classList.add('is-active');
    link.setAttribute('aria-current', 'true');
    scrollNavToLink(link);
  }
};

// Highlight immediately when a nav item is clicked
railLinks.forEach(link => {
  link.addEventListener('click', () => setActive(link));
});

// At the very bottom of the page, always highlight the last section
// (short final sections may never reach the observer's trigger zone)
const atPageBottom = () =>
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

window.addEventListener('scroll', () => {
  if (atPageBottom()) setActive(railLinks[railLinks.length - 1]);
}, { passive: true });

if ('IntersectionObserver' in window && sections.length) {
  const linkFor = (id) => railLinks.find(l => l.getAttribute('href') === `#${id}`);

  const observer = new IntersectionObserver((entries) => {
    if (atPageBottom()) return; // bottom-of-page rule wins
    entries.forEach((entry) => {
      const link = linkFor(entry.target.id);
      if (!link) return;
      if (entry.isIntersecting) {
        setActive(link);
      }
    });
  }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));
}
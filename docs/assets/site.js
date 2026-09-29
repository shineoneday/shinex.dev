// Shared by every page. The pages work without this file.

// Email address is assembled here so it is not sitting in the HTML for scrapers.
for (const a of document.querySelectorAll('[data-u][data-h]')) {
  const addr = `${a.dataset.u}@${a.dataset.h}`;
  a.href = `mailto:${addr}`;
  const slot = a.querySelector('[data-addr]');
  if (slot) slot.textContent = addr;
}

// Reveal on scroll.
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    e.target.classList.add('is-in');
    io.unobserve(e.target);
  }
}, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
for (const el of document.querySelectorAll('.reveal')) io.observe(el);

// The pale circle that follows the pointer across the footer.
const cta = document.querySelector('.cta');
const blob = cta?.querySelector('.blob');
if (blob && matchMedia('(hover: hover)').matches) {
  cta.addEventListener('pointerenter', () => blob.style.setProperty('--s', 1));
  cta.addEventListener('pointerleave', () => blob.style.setProperty('--s', 0));
  cta.addEventListener('pointermove', (e) => {
    const r = cta.getBoundingClientRect();
    blob.style.setProperty('--x', `${e.clientX - r.left}px`);
    blob.style.setProperty('--y', `${e.clientY - r.top}px`);
  });
}

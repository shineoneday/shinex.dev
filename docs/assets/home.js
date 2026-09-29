// Home page: the greeting types itself, then the name and the character rise.
const typed = document.querySelector('.typed');
const text = typed.textContent;
const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function type() {
  if (!still) {
    typed.textContent = '';
    document.body.classList.add('is-typing');
    await sleep(300);
    for (const ch of text) {
      typed.textContent += ch;
      await sleep(ch === ' ' ? 260 : 95);
    }
    await sleep(250);
  }
  document.body.classList.add('is-typed');
}

type();

document.documentElement.classList.add('js');
const menu = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');
const cats = document.querySelector('#cats');
const perches = document.querySelectorAll('.cat-perch');
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => {
 const expanded = menu.getAttribute('aria-expanded') === 'true';
 navigation.classList.toggle('open', !expanded);
 menu.setAttribute('aria-expanded', String(!expanded));
});
function setCats(visible) {
 perches.forEach(perch => { perch.hidden = !visible; });
 cats.setAttribute('aria-pressed', String(visible));
 cats.setAttribute('aria-label', visible ? 'Hide decorative cats' : 'Show decorative cats');
}
cats.addEventListener('click', () => setCats(cats.getAttribute('aria-pressed') !== 'true'));
document.addEventListener('keydown', event => {
 if (event.key !== 'Escape') return;
 if (navigation.classList.contains('open')) { closeMenu(); menu.focus(); }
 setCats(false);
});

document.addEventListener('click', event => {
 if (navigation.classList.contains('open') && !event.target.closest('.navrow')) closeMenu();
});
window.addEventListener('resize', () => {
 if (window.innerWidth > 700 && navigation.classList.contains('open')) closeMenu();
});

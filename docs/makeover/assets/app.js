document.documentElement.classList.add('js');
const menu = document.querySelector('#menu');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => {
 const expanded = menu.getAttribute('aria-expanded') === 'true';
 navigation.classList.toggle('open', !expanded);
 menu.setAttribute('aria-expanded', String(!expanded));
});
const cats = document.querySelector('#cats');
const company = document.querySelector('#cat-place');
function hideCat() { company.hidden = true; cats.setAttribute('aria-pressed', 'false'); cats.innerHTML = 'A little cat company <span aria-hidden="true">+</span>'; }
cats.addEventListener('click', () => {
 if (!company.hidden) { hideCat(); return; }
 company.hidden = false;
 cats.setAttribute('aria-pressed', 'true');
 cats.innerHTML = 'Hide cat company <span aria-hidden="true">−</span>';
});
document.addEventListener('keydown', (event) => {
 if (event.key !== 'Escape') return;
 if (navigation.classList.contains('open')) { closeMenu(); menu.focus(); }
 hideCat();
});

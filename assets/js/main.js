const toggle = document.querySelector('.menu-toggle');
const links = document.getElementById('nav-links');
const mobile = window.matchMedia('(max-width: 650px)');
function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  links.classList.toggle('collapsed', mobile.matches && !open);
}
toggle.hidden = false;
setMenu(false);
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});
mobile.addEventListener('change', () => setMenu(false));
document.getElementById('year').textContent = new Date().getFullYear();

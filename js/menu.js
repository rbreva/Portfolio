const menuOpen = document.querySelector('#openMenu');
const menuClose = document.querySelector('#closeMenu');
const menuPortafolio = document.querySelector('.portfolioLink');
const menuAboutme = document.querySelector('.aboutmeLink');
const menuContact = document.querySelector('.contactLink');

const menuMobile = document.querySelector('.header__nav');

menuOpen.addEventListener('click', () => {
  menuMobile.style.left = '0';
});

menuClose.addEventListener('click', () => {
  menuMobile.style.left = '-100%';
});

menuPortafolio.addEventListener('click', () => {
  menuMobile.style.left = '-100%';
});

menuAboutme.addEventListener('click', () => {
  menuMobile.style.left = '-100%';
});

menuContact.addEventListener('click', () => {
  menuMobile.style.left = '-100%';
});
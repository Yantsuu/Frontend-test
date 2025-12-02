const burgerBtn = document.getElementById('burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileOverlay = document.querySelector('.mobile-overlay');
const body = document.body;

const toggleMenu = () => {
  burgerBtn.classList.toggle('is-open');
  mobileMenu.classList.toggle('is-open');
  mobileOverlay.classList.toggle('is-open');
  body.classList.toggle('no-scroll');
};

burgerBtn.addEventListener('click', toggleMenu);

mobileOverlay.addEventListener('click', toggleMenu);

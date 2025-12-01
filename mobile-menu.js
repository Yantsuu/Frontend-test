const mobileMenu = document.querySelector('.mobile-menu');
const burgerBtn = document.querySelector('#burger-btn');
const mobileOverlay = document.querySelector('.mobile-overlay');

const toggleMenu = () => {
  mobileMenu.classList.toggle('is-open');
  mobileOverlay.classList.toggle('is-open');
  burgerBtn.classList.toggle('active');
};

burgerBtn.addEventListener('click', toggleMenu);
mobileOverlay.addEventListener('click', toggleMenu);

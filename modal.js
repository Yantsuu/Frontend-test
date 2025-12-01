const modal = document.querySelector('backdrop');
const modalBtnOpen = document.querySelector('menu-btn-open');
const modalBtnClose = document.querySelector('menu-btn-close');

const toggleMenu = () => modal.classList.toggle('is-hidden');

modalBtnOpen.addEventListener('click', toggleMenu);
modalBtnClose.addEventListener('click', toggleMenu);

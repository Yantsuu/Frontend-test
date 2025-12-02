document.addEventListener('DOMContentLoaded', () => {
  const driversList = document.querySelector('.drivers__list');
  const items = driversList.querySelectorAll('.drivers__item');
  const link = document.querySelector('.drivers__all-link');

  function updateHiddenCount() {
    const hidden = Array.from(items).filter(
      (item) => getComputedStyle(item).display === 'none'
    );

    if (hidden.length > 0) {
      link.textContent = `Усі водії (${hidden.length})`;
    } else {
      link.textContent = 'Сховати';
    }
  }

  link.addEventListener('click', (e) => {
    e.preventDefault();

    driversList.classList.toggle('drivers__list--expanded');

    if (driversList.classList.contains('drivers__list--expanded')) {
      items.forEach((i) => (i.style.display = 'list-item'));
      link.textContent = 'Сховати';
    } else {
      items.forEach((i) => (i.style.display = ''));
      updateHiddenCount();
    }
  });

  updateHiddenCount();

  window.addEventListener('resize', updateHiddenCount);
});

const reviewsSwiper = new Swiper('.reviews__slider', {
  spaceBetween: 0,
  loop: false,
  navigation: {
    nextEl: '.reviews__arrow--next',
    prevEl: '.reviews__arrow--prev',
  },
  pagination: {
    el: '.reviews__pagination',
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
});

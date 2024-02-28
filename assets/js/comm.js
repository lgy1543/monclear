var mainSwiper = new Swiper(".main-visible", {
  slidesPerView: 1,
  // spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".banner-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".banner-swiper-button-next",
    prevEl: ".banner-swiper-button-prev",
  },
});

var listswiper = new Swiper(".shopping-list", {
  slidesPerView: 1.3,
  spaceBetween: 10,
  pagination: {
    el: ".list-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".list-swiper-button-next",
    prevEl: ".list-swiper-button-prev",
  },
  breakpoints: {
    431:{
      slidesPerView: 4,
    },
  }

});

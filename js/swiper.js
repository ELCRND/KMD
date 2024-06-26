import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper-project", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,

  navigation: {
    nextEl: ".swiper-project-button-next",
    prevEl: ".swiper-project-button-prev",
  },
});

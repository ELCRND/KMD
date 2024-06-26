const headerMenu = document.querySelector(".header__menu");
const projectsModal = document.querySelector("#projects-modal");
const modalImage = projectsModal.querySelector(".modal__img");
const headerMenuBtn = document.querySelector(".header__menu-btn");

//header menu btn click
headerMenuBtn.addEventListener("click", () => {
  [...headerMenuBtn.children].forEach((el, i) => {
    if (i === 0 || i === 2) {
      el.classList.toggle("rotate");
    } else {
      el.classList.toggle("hidden");
    }
  });
  headerMenu.classList.toggle("visible");
});

// Закрытие модалки через escape
document.querySelector("#projects-modal").addEventListener("cancel", () => {
  document.body.classList.remove("body-overflow");
});

// Закрытие модалки через кнопку
document.querySelector(".modal__close-btn").addEventListener("click", () => {
  document.body.style.overflow = "visible";
  projectsModal.close();
});

// Открытие модалки
document.querySelectorAll(".gallery__item").forEach((btn) =>
  btn.addEventListener("click", (e) => {
    modalImage.src = e.target.src;
    document.body.classList.add("body-overflow");
    projectsModal.showModal();
  })
);

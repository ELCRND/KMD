const projectsModal = document.querySelector("#projects-modal");

// Закрытие модалки через escape
projectsModal.addEventListener("cancel", () => {
  document.body.classList.remove("body-overflow");
});

// Закрытие модалки через кнопку
document.querySelector(".modal__close-btn").addEventListener("click", () => {
  document.body.classList.remove("body-overflow");
  projectsModal.close();
});

// Открытие модалки
document.querySelectorAll(".gallery__item").forEach((btn) =>
  btn.addEventListener("click", () => {
    document.body.classList.add("body-overflow");
    projectsModal.showModal();
  })
);

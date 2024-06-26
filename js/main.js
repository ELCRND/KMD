const projectsModal = document.querySelector("#projects-modal");

// Закрытие модалки через escape
projectsModal.addEventListener("cancel", () => {});

// Закрытие модалки через кнопку
document
  .querySelector(".modal-project__close-btn")
  .addEventListener("click", () => {
    projectsModal.close();
  });

// Открытие модалки
document.querySelectorAll(".gallery__item").forEach((btn) =>
  btn.addEventListener("click", () => {
    projectsModal.showModal();
  })
);

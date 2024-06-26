const projectsModal = document.querySelector("#projects-modal");
const toggleBtns = document.querySelectorAll(".toggler__btn");

toggleBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    toggleBtns.forEach((otherBtn) => otherBtn.classList.remove("active"));
    e.target.classList.add("active");
  })
);

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

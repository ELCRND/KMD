const callModal = document.querySelector("#call-modal");

// Закрытие модалки через escape
callModal.addEventListener("cancel", () => {
  document.body.classList.remove("body-overflow");
});

// Закрытие модалки через кнопку
document.querySelector(".modal__close-btn").addEventListener("click", () => {
  document.body.classList.remove("body-overflow");
  callModal.close();
});

// Открытие модалки
document.querySelector(".call__btn").addEventListener("click", () => {
  document.body.classList.add("body-overflow");
  callModal.showModal();
});

const callModal = document.querySelector("#call-modal");

// Закрытие модалки через escape
callModal.addEventListener("cancel", () => {});

// Закрытие модалки через кнопку
document.querySelector(".modal__close-btn").addEventListener("click", () => {
  callModal.close();
});

// Открытие модалки
document.querySelector(".call__btn").addEventListener("click", () => {
  callModal.showModal();
});

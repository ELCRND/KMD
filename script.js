const projectsModal = document.querySelector("#projects-modal");
const modalImage = projectsModal.querySelector(".modal__img");

document.querySelectorAll(".gallery__item").forEach((btn) =>
  btn.addEventListener("click", (e) => {
    modalImage.src = e.target.src;
    projectsModal.showModal();
  })
);

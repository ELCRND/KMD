const headerMenu = document.querySelector(".header__menu");
const headerMenuBtnOpen = document.querySelector(".header__menu-btn-open");
const headerMenuBtnClose = document.querySelector(".header__menu-btn-close");

//header menu btn click
headerMenuBtnOpen.addEventListener("click", () => {
  headerMenuBtnOpen.classList.toggle("hidden");

  if (headerMenu.classList.contains("hidden")) {
    headerMenu.classList.remove("hidden");
    headerMenu.classList.add("visible");
  } else {
    headerMenu.classList.remove("visible");
    headerMenu.classList.add("hidden");
  }
});

headerMenuBtnClose.addEventListener("click", () => {
  headerMenuBtnOpen.classList.toggle("hidden");
  if (headerMenu.classList.contains("hidden")) {
    headerMenu.classList.remove("hidden");
    headerMenu.classList.add("visible");
  } else {
    headerMenu.classList.remove("visible");
    headerMenu.classList.add("hidden");
  }
});

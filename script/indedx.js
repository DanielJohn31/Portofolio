const tooglerBtn = document.querySelector(".toogle_btn");
const tooglerBtnIcon = document.querySelector(".toogle_btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

tooglerBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  tooglerBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars-staggered";
};

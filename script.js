const menuBtn = document.querySelector(".menu-icon");
const navbarList = document.querySelector(".navbar ul");
const navbarItems = document.querySelectorAll(".navbar-items ul li a");

const toogleMenu = () => {
  menuBtn.classList.toggle("open");
  navbarList.classList.toggle("open");
};

menuBtn.addEventListener("click", () => {
  toogleMenu();
});

navbarItems.forEach((item) => {
  item.addEventListener("click", () => {
    toogleMenu();
  });
});

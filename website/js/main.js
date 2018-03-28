const menuButton = document.getElementById("menu-button");
const mobileNav = document.querySelector(".mobile-nav");

menuButton.addEventListener("click", openMenu);

function openMenu() {
  mobileNav.classList.toggle("is-open");
  this.classList.toggle("square");
}

let navbar = document.querySelector("nav");
let mainPage = document.querySelector("main");
let menuOpen = document.getElementById("menu__open");
let menuClose = document.getElementById("menu__close");

function showMenu() {
  navbar.classList.add("open");
}
function hideMenu() {
  navbar.classList.remove("open");
}
menuOpen.addEventListener("click", showMenu);
menuClose.addEventListener("click", hideMenu);

// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const closeNavBtn = document.querySelector(".close-nav");
const navList = document.querySelector(".nav__list");
const overlay = document.querySelector(".overlay");

const openNav = function () {
  navList.classList.add("toggle-menu");
  overlay.classList.remove("hidden");
};
const closeNav = function () {
  navList.classList.remove("toggle-menu");
  overlay.classList.add("hidden");
};

hamburger.addEventListener("click", openNav);
closeNavBtn.addEventListener("click", closeNav);
overlay.addEventListener("click", closeNav);

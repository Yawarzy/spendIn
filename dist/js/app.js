// ################ Mobile Navigation
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

// ################### Success Tabs
const tabBtns = document.querySelectorAll(".tab-btn");
const tabs = document.querySelectorAll(".success__tab");
const tabImage = document.querySelector(".success__image img");
tabBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    tabBtns.forEach((btn, index) => {
      btn.classList.remove("btn-primary");
      btn.classList.add("btn-secondary");
      tabs[index].classList.remove("hidden");
    });
    e.target.classList.remove("btn-secondary");
    e.target.classList.add("btn-primary");
    if (e.target.classList.contains("positive")) {
      tabs[1].classList.add("hidden");
      tabImage.src = "./images/Success Stories-sucess.webp";
    } else if (e.target.classList.contains("negative")) {
      tabs[0].classList.add("hidden");
      tabImage.src = "./images/Success Stories-error.webp";
    }
  });
});

// ######################### Pricing Toggler
const togglerBtn = document.querySelector(".toggler");
const togglerCircle = document.querySelector(".circle");
const duration = document.querySelectorAll(".duration");
const price = document.querySelectorAll(".price-monthly");

const priceYearly = ["$52", "$139"];
const priceMonthly = ["$12", "$33"];

togglerBtn.addEventListener("click", () => {
  togglerBtn.classList.toggle("yearly");

  if (togglerBtn.classList.contains("yearly")) {
    duration.forEach((dur, index) => {
      dur.textContent = "/year";
      if (index < 2) price[index].textContent = priceYearly[index];
    });
  } else {
    duration.forEach((dur, index) => {
      dur.textContent = "/month";
      if (index < 2) price[index].textContent = priceMonthly[index];
    });
  }
});

// #################### Cta margin fix
const container = document.querySelector(".container");
const ctaHeader = document.querySelector(".cta .d-grid");

// Initial set
ctaHeader.style.paddingLeft = `${
  window.getComputedStyle(container).marginLeft
}`;

// Set on window resize
window.addEventListener("resize", () => {
  ctaHeader.style.paddingLeft = `${
    window.getComputedStyle(container).marginLeft
  }`;
});

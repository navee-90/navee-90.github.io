// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};
// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};
const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};
// Close side navigation on cancel button click
cancelBtn.onclick = hideNavMenu;
// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

// progressbar
document.addEventListener("DOMContentLoaded", function () {
  let progressBars = document.querySelectorAll(".progress");

  progressBars.forEach((bar) => {
    let width = bar.style.width;
    bar.style.width = "0%"; // Reset width to 0 initially

    setTimeout(() => {
      bar.style.width = width; // Animate to original width
    }, 500);
  });
});
// Name Animation
document.addEventListener("DOMContentLoaded", function () {
  let text = "Naveen Rasipogula"; // Your name
  let index = 0;
  let speed = 150; // Typing speed (milliseconds)

  function typeEffect() {
    if (index < text.length) {
      document.querySelector(".name").textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, speed);
    } else {
      document.querySelector(".name").style.borderRight = "none"; // Remove cursor after typing
    }
  }

  typeEffect(); // Start typing effect
});


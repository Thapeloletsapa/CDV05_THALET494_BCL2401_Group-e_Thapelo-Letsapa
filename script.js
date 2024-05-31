function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const body = document.querySelector("body");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    body.classList.toggle("dark-theme");
  }
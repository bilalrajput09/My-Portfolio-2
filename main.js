const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navMenuInactive = document.querySelector("#nav-menu");
const navBarLogo = document.querySelector(".navbar-logo");
const navItem = document.querySelector(".nav-item");
const navItemAbout = document.querySelector(".nav-item-about");
const navItemContact = document.querySelector(".nav-item-contact");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navBarLogo.classList.toggle("active");
})
navItem.addEventListener("click" , () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navBarLogo.classList.remove("active");
})
navItemAbout.addEventListener("click" , () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navBarLogo.classList.remove("active");
})
navItemContact.addEventListener("click" , () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navBarLogo.classList.remove("active");
})

const burger = document.getElementById('burger');
const menu = document.getElementById('mobile-menu');

burger.addEventListener("touchstart", () => {
    menu.classList.toggle('mobile-menu--active');
})




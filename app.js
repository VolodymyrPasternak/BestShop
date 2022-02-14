const button = document.querySelector(".page-nav-burger");
const menu = document.querySelector(".page-nav");

button.addEventListener("click",function () {
    menu.classList.toggle("is-show");
    button.classList.toggle("is-show");
})
let Menu = document.querySelector(".burger");
let navBar = document.querySelector(".menu");
Menu.addEventListener("click", ()=> {
    navBar.classList.toggle("active");
});
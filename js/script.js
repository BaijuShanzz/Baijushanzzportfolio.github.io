let menuLogo = document.querySelector('.menu-logo');
let menuItems = document.querySelector('.nav-list');

menuLogo.addEventListener("click", ()=>{
    menuItems.classList.toggle('isActive');
})
//MOBILE MENU
const burgerMenu = document.querySelector('.burger');
const mobileMenu = document.querySelectorAll('#mobileMenu');

function showMenu(event) {
    //adding 'show' in mobileMenu classList
    mobileMenu.forEach(item => item.classList.add('show'));
}
burgerMenu.addEventListener('click', showMenu, true);

function hideMenu(event) {
    event.stopPropagation();
    //taking out 'show' in mobileMenu classList
    mobileMenu.forEach(item => item.classList.remove('show'));
}
mobileMenu.forEach(item => item.addEventListener('click', hideMenu, false));




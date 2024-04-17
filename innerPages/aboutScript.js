import { hideMenu, showMenu} from "../modules/app.js";

const mobileMenu = document.querySelector('#mobileMenu');
const burgerMenu = document.querySelector('.burger');

burgerMenu.addEventListener('click', showMenu, true);
mobileMenu.addEventListener('click', hideMenu, false);
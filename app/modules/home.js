import { hideMenu, showMenu } from "../app";

const mobileMenu = document.querySelector('.mobileMenu');
const burgerMenu = document.querySelector('.burger');

burgerMenu.addEventListener('click', showMenu, true);
mobileMenu.addEventListener('click', hideMenu, false);




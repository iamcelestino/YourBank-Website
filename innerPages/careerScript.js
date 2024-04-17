import { hideMenu, showMenu, showMoreLess} from "../modules/app.js";

const mobileMenu = document.querySelector('#mobileMenu');
const burgerMenu = document.querySelector('.burger');

burgerMenu.addEventListener('click', showMenu, true);
mobileMenu.addEventListener('click', hideMenu, false);

//SHOW MORE-LESS QUESTIONS
const showButton = document.querySelector('.load');
showButton.addEventListener('click', event => showMoreLess(event));
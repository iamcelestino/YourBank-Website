import { hideMenu, showMenu} from "../modules/app.js";

const mobileMenu = document.querySelector('#mobileMenu');
const burgerMenu = document.querySelector('.burger');

burgerMenu.addEventListener('click', showMenu, true);
mobileMenu.addEventListener('click', hideMenu, false);


//QUERY TESIMONIAL TESTIMONIAL 
const container = document.querySelector('#testimonials__section .container');
const testimonialTabButton = document.querySelectorAll('.testimonial__tab .tab_button');
const testimonialsContainer = document.querySelectorAll('.testimonials__container');

container.addEventListener("click", event => tabs(event, testimonialTabButton,testimonialsContainer));
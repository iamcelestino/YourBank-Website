import { hideMenu, showMenu, showMoreLess, tabs} from "./modules/app.js";

//QUERY MOBILE ITEMS
const mobileMenu = document.querySelector('#mobileMenu');
const burgerMenu = document.querySelector('.burger');

burgerMenu.addEventListener('click', showMenu, true);
mobileMenu.addEventListener('click', hideMenu, false);

//QUERY PRODUCTS ITEMS
const product__container = document.querySelector('#products__section .container');
const tab_buttons = document.querySelectorAll('.product__tab .tab_button');
const products__box = document.querySelectorAll('.products__box');

product__container.addEventListener("click", (event) => tabs(event, tab_buttons, products__box));


//QUERY FEATURE ITEMS
const featureTabs = document.querySelector('.feature__tabs');
const featureTabButtons = document.querySelectorAll('.feature__tab__button');
const features = document.querySelectorAll('.features');

featureTabs.addEventListener("click", event => tabs(event, featureTabButtons, features ));


//SHOW MORE-LESS QUESTIONS
const showButton = document.querySelector('.load');
showButton.addEventListener('click', event => showMoreLess(event));

//QUERY TESIMONIAL TESTIMONIAL 
const container = document.querySelector('#testimonials__section .container');
const testimonialTabButton = document.querySelectorAll('.testimonial__tab .tab_button');
const testimonialsContainer = document.querySelectorAll('.testimonials__container');

container.addEventListener("click", event => tabs(event, testimonialTabButton,testimonialsContainer));










//MOBILE MENU
const burgerMenu = document.querySelectorAll('.burger');
const mobileMenu = document.querySelectorAll('#mobileMenu');

function showMenu(event) {
    //adding 'show' in mobileMenu classList
    mobileMenu.forEach(item => item.classList.add('show'));
}

function hideMenu(event) {
    event.stopPropagation();
    //taking out 'show' in mobileMenu classList
    mobileMenu.forEach(item => item.classList.remove('show'));
}
mobileMenu.forEach(item => item.addEventListener('click', hideMenu, false));
burgerMenu.forEach(item => item.addEventListener('click', showMenu, true));



//ADD INTARECTIVTY IN FREQUENTLY ASQKED QUESTIONS
const questionsParent = document.querySelector('.questions');
questionsParent.addEventListener("click", event => {
    const moreQuestions = event.target.parentElement.previousElementSibling; //travesing the DOM to get previous sibling
    moreQuestions.classList.remove('active');
});



//ADDS INTERACTIVITY TO TABS
function tabs(event, tabButtons, tabContent) {
    const id = event.target.dataset.id;
    if (id) {
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');

        tabContent.forEach(product__box => {
            product__box.classList.remove('active');
        });

        const element = document.getElementById(id);
        if (element) {
            element.classList.add('active');
        }
    }
}

//query items in the product tab
const product__container = document.querySelector('#products__section .container');
const tab_buttons = document.querySelectorAll('tab_button');
const products__box = document.querySelectorAll('.products__box');

//add event in product container
product__container.addEventListener("click", (event) => tabs(event, tab_buttons, products__box));

//query items in the features tab
const featureTabs = document.querySelector('.feature__tabs');
const featureTabButtons = document.querySelectorAll('.feature__tab__button');
const features = document.querySelectorAll('.features');

featureTabs.addEventListener("click", event => tabs(event, featureTabButtons, features ));


const container = document.querySelector('#testimonials__section .container');
const testimonialTabButton = document.querySelectorAll('.testimonial__tab .tab_button');
const testimonialsContainer = document.querySelectorAll('.testimonials__container');
container.addEventListener("click", event => tabs(event, testimonialTabButton,testimonialsContainer));







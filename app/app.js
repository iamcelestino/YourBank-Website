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



//FREQUENTLY ASQKED QUESTIONS
document.querySelector('.questions').addEventListener("click", event => {
    const moreQuestions = event.target.parentElement.previousElementSibling; //travesing the DOM to get previous sibling
    moreQuestions.classList.remove('active');
});





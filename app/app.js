
//MOBILE MENU

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
function showMoreLess(event){
    if (event.target.textContent === 'Show More') {
        const moreQuestions = event.target.parentElement.previousElementSibling; //travesing the DOM to get previous sibling
        moreQuestions.classList.add('active');
        event.target.textContent = 'Show Less';
    }
    else {
        const moreQuestions = event.target.parentElement.previousElementSibling; //travesing the DOM to get previous sibling
        moreQuestions.classList.remove('active');
        event.target.textContent = 'Show More';
    }
}

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

export {showMoreLess, showMenu, hideMenu,  tabs};







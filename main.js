'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
})

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', () => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) { //링크가 있는경우에만 수행되게함
      return;
    }
    scroolIntoView(link);
});

const homeContact = document.querySelector('.home__contact');
homeContact.addEventListener('click', () => {
    scroolIntoView('#contact');
});

function scroolIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}
'use strict'
const click = document.querySelectorAll('.menu-item');
const events = document.querySelector('.events');
click.forEach(x => {
    x.addEventListener('click', (e) => {
        e.preventDefault();
        events.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener('DOMContentLoaded', () => {

    const menuToggleBtn = document.querySelector('.responsive-menu-icon');
    const menu = document.querySelector('.navbar .menu');

    menuToggleBtn.addEventListener('click', () => {

        menu.classList.toggle('active');

    });

});






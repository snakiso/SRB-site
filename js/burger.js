let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');
let headerNav = document.querySelector('.header__nav');
let body = document.querySelector('.body');

let screenWidth;

window.addEventListener('resize', () => {
    screenWidth = window.innerWidth
    if (screenWidth > 1200) {
        headerNav.style.display = 'block';
    } else {
        headerNav.style.display = 'none';
    }
})

hamburger.addEventListener('click', () => {
    screenWidth = window.innerWidth
    hamburger.classList.toggle('active')

    if (hamburger.classList.contains('active')) {
        menu.style.right = '0px';
        menu.style.bottom = '0';
        headerNav.style.display = 'none';
        body.style.overflowY = 'hidden'
    } else {
        menu.style.right = '-200%'
        body.style.overflowY = 'scroll'
        menu.style.bottom = 'auto';
        if (screenWidth > 1200) {
            headerNav.style.display = 'block';
        }
    }
})
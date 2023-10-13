
const swiper = new Swiper('.catalog-slider__slider', {
    // Optional parameters
    loop: false,
    spaceBetween: 30,
    slidesPerView: 1,

    breakpoints: {
        // when window width is >= 320px
        700: {
            slidesPerView: 'auto',
            spaceBetween: 30
        },
    },
    // If we need pagination
    navigation: {
        nextEl: '.catalog-slider__next',
        prevEl: '.catalog-slider__prev',
    },

});

let swiper1 = undefined;

function initSwiperCategory() {
    var screenWidth = window.innerWidth;
    if (screenWidth < 700 && swiper1 == undefined) {
        swiper1 = new Swiper('.news__slider', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
        });
    } else if (screenWidth >= 700 && swiper1 !== undefined) {
        swiper1.destroy();
        swiper1 = undefined;
    }
}

$(document).ready(function () {
    initSwiperCategory();
}); //Проверка при загрузке страницы

$(window).on('resize', function () {
    initSwiperCategory();
}); //Запуск функции при изменении размера

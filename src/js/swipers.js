
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

const swiper2 = new Swiper('.catalog-item__preview-slider', {
    // Optional parameters
    loop: false,
    spaceBetween: 30,
    slidesPerView: 'auto',

    breakpoints: {
        // when window width is >= 320px
        700: {
            slidesPerView: 'auto',
            spaceBetween: 30
        },
    },
    // If we need pagination
    navigation: {
        nextEl: '.catalog-item__slider-next',
        prevEl: '.catalog-item__slider-prev',
    },

});

const swiper3 = new Swiper('.advantages__slider-1', {
    // Optional parameters
    loop: false,
    spaceBetween: 30,
    slidesPerView: 'auto',

    breakpoints: {
        // when window width is >= 320px
        700: {
            slidesPerView: 'auto',
            spaceBetween: 30
        },
    },
    // If we need pagination
    navigation: {
        nextEl: '.advantages__slider-1-prev',
        prevEl: '.advantages__slider-1-next',
    },

});

const swiper4 = new Swiper('.advantages__slider-2', {
    // Optional parameters
    loop: false,
    spaceBetween: 30,
    slidesPerView: 'auto',

    breakpoints: {
        // when window width is >= 320px
        700: {
            slidesPerView: 'auto',
            spaceBetween: 30
        },
    },
    // If we need pagination
    navigation: {
        nextEl: '.advantages__slider-2-prev',
        prevEl: '.advantages__slider-2-next',
    },

});

const swiper5 = new Swiper('.advantages__slider-3', {
    // Optional parameters
    loop: false,
    spaceBetween: 30,
    slidesPerView: 'auto',

    breakpoints: {
        // when window width is >= 320px
        700: {
            slidesPerView: 'auto',
            spaceBetween: 30
        },
    },
    // If we need pagination
    navigation: {
        nextEl: '.advantages__slider-3-prev',
        prevEl: '.advantages__slider-3-next',
    },

});

const swiper6 = new Swiper('.advantages__slider-4', {
    // Optional parameters
    loop: false,
    spaceBetween: 30,
    slidesPerView: 'auto',

    breakpoints: {
        // when window width is >= 320px
        700: {
            slidesPerView: 'auto',
            spaceBetween: 30
        },
    },
    // If we need pagination
    navigation: {
        nextEl: '.advantages__slider-4-prev',
        prevEl: '.advantages__slider-4-next',
    },

});

const swiper7 = new Swiper('.hero-slider', {
    // Optional parameters
    loop: false,
    spaceBetween: 0,
    slidesPerView: 'auto',

    breakpoints: {
        // when window width is >= 320px
        700: {
            slidesPerView: 'auto',
            spaceBetween: 0
        },
    },
    // If we need pagination
    navigation: {
        nextEl: '.hero-slider-next',
        prevEl: '.hero-slider-prev',
    },

});
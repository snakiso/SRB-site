
const swiper = new Swiper('.', {
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
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});


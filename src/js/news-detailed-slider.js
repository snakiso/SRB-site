const swiper = new Swiper('.news__detailed-slider', {
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
        nextEl: '.',
        prevEl: '.',
    },

});
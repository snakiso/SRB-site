const heroSlides = document.querySelectorAll('.hero__slide');
const heroSlidesLength = document.querySelector('.hero__slides-length');
const heroCounter = document.querySelector('.hero__counter-inner');
const heroSwiper = document.querySelector('.hero__swiper-wrapper');

heroSlidesLength.innerHTML = heroSlides.length < 10 ? `0${heroSlides.length}` : `${heroSlides.length}`

const createCounterNumber = () => {
    for (let i = 1; i < heroSlides.length + 1; i++) {
        const number = document.createElement('span');
        number.innerHTML = heroSlides.length < 10 ? `0${i}` : `${i}`
        heroCounter.appendChild(number)
    }

}

createCounterNumber()

const changeCouner = () => {
    for (let i = 0; i < heroSlides.length ; i++){
        if (heroSlides[i].classList.contains('swiper-slide-active')){
            heroCounter.style.transform = `translateY(-${i*20}px)`
        }
    }
}

heroSwiper.addEventListener('transitionstart', () => {
    changeCouner()
})


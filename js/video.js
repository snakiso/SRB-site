//Видео

const video = document.querySelector('.back-video');
const darkWall = document.querySelector('.back-video__dark-wall');
const playBtn = document.querySelector('.hero__play');

const changeStyle = () => {
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.position = 'absolute';
    video.style.zIndex = '5'
    darkWall.style.zIndex = '1'
}

window.addEventListener('scroll', () => changeStyle());

video.addEventListener('click', () => changeStyle());


playBtn.addEventListener('click', () => {
    video.style.width = '100vw';
    video.style.height = '100vh';
    video.style.position = 'fixed';
    video.style.zIndex = '25'
    darkWall.style.zIndex = '-1'
})
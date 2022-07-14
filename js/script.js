
// IMG SLIDER
var swiper = new Swiper(".slide-content", {
    // slidesPerView: 3,
    spaceBetween: 10,
    //   slidesPerGroup: 3, lascio per study purposes
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'ture',
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true, 
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },

    },
});

//NAVBAR FAKE STICKY
function plsStick(elemento){
    let getSticky = document.querySelector(elemento);
    let headerHeight = document.querySelector('#head-container').clientHeight;
    let navHeight = document.querySelector('#nav-area').clientHeight;
    let correctHeight = headerHeight - navHeight;

    if(document.body.scrollTop > correctHeight && 
        !getSticky.classList.contains('sticked')){
        getSticky.classList.add('sticked');
    }else if(document.body.scrollTop < correctHeight - 1){
        getSticky.classList.remove('sticked');
    }
}

// FADE IN ANIMATION
window.addEventListener('scroll',() =>{
    let contenuto = document.querySelectorAll('.fade');
    contenuto.forEach(function (pls) {
        let posizioneContenuto = pls.getBoundingClientRect().top;
        let posizioneSchermo = window.innerHeight;
        if ((posizioneContenuto < posizioneSchermo)/3) {
            pls.classList.add('active');
        };
    });
});

console.log('¸¸♬·¯·♩¸¸♪·¯·♫¸¸Never Gonna Give You Up¸¸♬·¯·♩¸¸♪·¯·♫¸¸')
console.log('¸¸♬·¯·♩¸¸♪·¯·♫¸¸Never gonna let you down¸¸♬·¯·♩¸¸♪·¯·♫¸¸')
console.log('·♩¸¸♪·¯·♫¸¸Never gonna run around and desert you¸¸♬·¯·♩¸¸♪·')

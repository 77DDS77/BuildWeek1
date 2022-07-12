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

function plsStick(elemento){
    let getSticky = document.querySelector(elemento);

    if(document.body.scrollTop > 170 && !getSticky.classList.contains('sticked')){
        getSticky.classList.add('sticked');
    }else if(document.body.scrollTop < 169){
        getSticky.classList.remove('sticked');
    }
    console.log(getSticky)
    console.log(document.body.scrollTop)
}

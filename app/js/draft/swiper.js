document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.image-slider', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        }
    })

    let swiper = new Swiper('.projects-pics-container', {
        pagination: {
            el: '.projects-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.projects-button-next',
            prevEl: '.projects-button-prev',
        },
    });

    new Swiper('.project-swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        }
    })



    new Swiper('.cerificates-swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        },
        slidesPerView: 3,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 3,
            }
        }
    })
    
})
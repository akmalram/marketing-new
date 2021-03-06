const ready = (callback) => {
    window.addEventListener('DOMContentLoaded', (e) => {
        callback(e);
    })
}

ready(() => {
    const MenuClassToggler = () => {
        const btn = document.querySelector('.navbar-toggler .btn');
        const menu = document.querySelector('.navbar-menu');

        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            menu.classList.toggle('active');
            document.querySelector('body').classList.toggle('overhidden');
        });
    }

    MenuClassToggler();
});

ready(() => {
    let mySwiper = new Swiper('.swiper-container.aboutus-slider', {
        speed: 400,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
        },
        loop: true
    });
    let clientsSlider = new Swiper('.swiper-container.clients-slider', {
        speed: 400,
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 30,
        cssMode: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2e3,
            disableOnInteraction: false,
        },
        breakpoints: {
            1020: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
                slidesPerColumn: 1,
            },
            520: {
                slidesPerView: 1,
                slidesPerColumn: 1,
            },
        }
    });

    let sliderBig = new Swiper('.swiper-container.slider-big', {
        speed: 400,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true
    });
});

ready(() => {
    const element = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {


        if(window.pageYOffset > 0) {
            element.classList.add('scrolled');
        }else if (window.pageYOffset < 200) {
            element.classList.remove('scrolled');
        }
    });

    if(window.pageYOffset > 0) {
        element.classList.add('scrolled');
    }else if (window.pageYOffset == 0) {
        element.classList.remove('scrolled');
    }
});

ready(() => {
    const forms = document.querySelectorAll('.form');
    const orderForm = document.querySelector('.modal-order .form-modal')

    forms.forEach(one => {
        one.addEventListener('submit', e => {
            e.preventDefault();
            $.ajax({
                method: 'POST',
                url: '../send.php',
                data: $(one).serialize()
            }).done(() => {
                alert('Done!')
                one.reset();
            });
        });
    });

    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        $.ajax({
            method: "POST",
            url: "../send.php",
            data: $(orderForm).serialize(),
        })
        .done(function() {
            orderForm.parentNode.classList.add('done');
            onorderForme.reset();
        });
    });
});

ready(() => {
    const modalToggler = (buttonClass, modalClass) => {
        let btn = document.querySelectorAll(buttonClass),
            modal = document.querySelector(modalClass),
            closetBtn = document.querySelector(`${modalClass} .close-btn`),
            modalBackground = document.querySelector(`${modalClass} .modal-background`);

       if(modal) {
        btn.forEach(one => {
            one.addEventListener('click', () => {
                modal.classList.add('active');
            });
        });

        [closetBtn, modalBackground].forEach(one => {
            one.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        });
       }
    }

    modalToggler('.modal-order-btn', '.modal-order');
});

const fontAwesomeFreeObserver = new FontFaceObserver('Font Awesome 5 Free');
const fontAwesomeBrandsObserver = new FontFaceObserver('Font Awesome 5 Brands');
const gilroyObserver = new FontFaceObserver('Gilroy');

Promise.all([
    fontAwesomeFreeObserver.load(),
    fontAwesomeBrandsObserver.load(),
    gilroyObserver.load()
]).then(() => {
    document.querySelector('html').classList.add('fonts-loaded');
});
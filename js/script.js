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
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
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
    const form = document.querySelector('.form');

    form.addEventListener('submit', e => {
        e.preventDefault();

        $.ajax({
            method: 'POST',
            url: '../send.php',
            data: $(form).serialize()
        }).done(() => {
            alert('Done!')
            form.reset();
        });
    });
});

// Font Observing

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

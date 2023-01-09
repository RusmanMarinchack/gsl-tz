'use state'

AOS.init();

// Робимо бкргер меню.
function burgerMenu() {
    let btnBurger = document.querySelector('.nav__burger');
    let menu = document.querySelector('.nav__menu');

    if(btnBurger) {
        btnBurger.addEventListener('click', function() {
            this.classList.toggle('active');

            if(this.classList.contains('active')) {
                menu.classList.add('active');
            } else {
                menu.classList.remove('active');
            }
        });
    };
};

burgerMenu();

//Робимо клік на кнопку .scroll-down;
function scrollDown() {
    let anchorLinks = document.querySelectorAll('.anchor');

    if(anchorLinks.length > 0) {
        anchorLinks.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault()

                let header = document.querySelector('.header');
                let headerBurger = header.querySelector('.nav__burger');
                let headerBurgerList = header.querySelector('.nav__menu');
                let headerHeight = header.clientHeight;
                let id = this.dataset.id;

                if(id) {
                    let blockTop = document.querySelector(`#${id}`).getBoundingClientRect().top;

                    if(window.matchMedia("(max-width: 991.98px)").matches) {
                        blockTop = document.querySelector(`#${id}`).getBoundingClientRect().top - headerHeight;
                        headerBurger.classList.remove('active');
                        headerBurgerList.classList.remove('active');
                    }
    
                    
                    window.scrollBy({
                        top: blockTop,
                        behavior: 'smooth'
                    });
                };
            });
        });
    };
};

scrollDown();
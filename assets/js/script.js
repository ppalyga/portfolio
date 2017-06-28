$(document).ready(function () {

    function initializeMenu() {
        var menuHidden = $('.menu--hidden');
        menuHidden.css('display', 'flex');
        addMenuClickEvents();
        initializeCarousel();
    }

    function addMenuClickEvents() {
        var menu = $('.menu--visible'),
            menuBtn = $('.menu--hidden__btn'),
            menuItems = $('.menu--visible__list-item');

        menuBtn.on('click', function () {
            menu.fadeToggle();
        });

        menuItems.on('click', function () {
            menu.fadeOut();
        });

        menu.on('click', function () {
            menu.fadeOut();
        });
    }

    function initializeCarousel() {
        var carousel = $(".menu--visible__carousel").flipster({
            style: 'flat',
            spacing: 0,
            loop: true,
            click: true,
            keyboard: true,
            scrollwheel: true,
            touch: true,
            fadeIn: 100
        }),
            menuCarousel = document.querySelector('.menu--visible__carousel'),
            menuSlide = new Hammer(menuCarousel);

        menuSlide.on('swipeleft', function () {
            carousel.flipster('prev');
        });
        menuSlide.on('swiperight', function () {
            carousel.flipster('next');
        });
    }

    function initilizeSkills() {
        $('.skills__list').slick({
            dots: true,
            arrows: false
        });
    }

    initializeMenu();
    initilizeSkills();
});




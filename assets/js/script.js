$(document).ready(function () {

    // MENU
    // variables
    let menuBtnJQ = $('.menu--hidden__btn'),
        menuHiddenJQ = $('.menu--hidden'),
        menuJQ = $('.menu--visible'),
        menu = document.querySelector('.menu--visible__carousel'),
        menuList = document.querySelector('menu--visible__list'),
        menuItems = $('.menu--visible__list-item');

    menuHiddenJQ.css('display', 'flex');
    // click events
    menuBtnJQ.on('click', function () {
        menuJQ.fadeToggle();
    });

    menuItems.on('click', function () {
        menuJQ.fadeToggle();
    });
    // carousel
    let carousel = $(".menu--visible__carousel").flipster({
        style: 'flat',
        spacing: 0,
        loop: true,
        click: true,
        keyboard: true,
        scrollwheel: true,
        touch: true,
        fadeIn: 100
    });
    // touch support
    let menuSlide = new Hammer(menu);

    menuSlide.on('swipeleft', function () {
        carousel.flipster('prev');
    });
    menuSlide.on('swiperight', function () {
        carousel.flipster('next');
    });
});


$(document).ready(function () {

    // MENU
    // variables
    var menuBtn = $('.menu--hidden__btn'),
        menuHidden = $('.menu--hidden'),
        menu = $('.menu--visible'),
        menuCarousel = document.querySelector('.menu--visible__carousel'),
        menuItems = $('.menu--visible__list-item'),
        skillsList = document.querySelector('.skills__list');

    menuHidden.css('display', 'flex');
    // click events
    menuBtn.on('click', function () {
        menu.fadeToggle();
    });

    menuItems.on('click', function () {
        menu.fadeToggle();
    });
    // carousel
    var carousel = $(".menu--visible__carousel").flipster({
        style: 'flat',
        spacing: 0,
        loop: true,
        click: true,
        keyboard: true,
        scrollwheel: true,
        touch: true,
        fadeIn: 100
    });

    // add touch support for the menu
    var menuSlide = new Hammer(menuCarousel);

    menuSlide.on('swipeleft', function () {
        carousel.flipster('prev');
    });
    menuSlide.on('swiperight', function () {
        carousel.flipster('next');
    });

    $('.skills__list').slick({
        dots: true,
        arrows: false
    });
});




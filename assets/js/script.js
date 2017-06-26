$(document).ready(function () {

    let menuBtn = $('.menu--hidden__btn'),
        menuJQ = $('.menu--visible'),
        menu = document.querySelector('.menu--visible__carousel'),
        menuItems = $('.menu--visible__list-item');

    menuBtn.on('click', function () {
        menuJQ.fadeToggle();
    });

    menuItems.on('click', function () {
        menuJQ.fadeToggle();
    });

    let carousel = $(".menu--visible__carousel").flipster({
        style: 'flat',
        spacing: 0,
        loop: true,
        click: true,
        keyboard: true,
        scrollwheel: true,
        touch: false,
        fadeIn: 100
    });

    let hammertime = new Hammer(menu);

    hammertime.on('swipeleft', function() {
        carousel.flipster('prev');
    });
    hammertime.on('swiperight', function() {
        carousel.flipster('next');
    });
});

